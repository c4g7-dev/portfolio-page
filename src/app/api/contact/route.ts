import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

export const runtime = "nodejs";

const ContactSchema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email().max(200),
  message: z.string().min(10).max(4000),
  // honeypot
  website: z.string().max(0).optional(),
});

// Tiny in-memory rate limiter (best-effort; resets on cold start).
const HITS = new Map<string, { count: number; reset: number }>();
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 3;

function rateLimit(ip: string) {
  const now = Date.now();
  const entry = HITS.get(ip);
  if (!entry || entry.reset < now) {
    HITS.set(ip, { count: 1, reset: now + WINDOW_MS });
    return true;
  }
  entry.count += 1;
  return entry.count <= MAX_PER_WINDOW;
}

export async function POST(req: Request) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "anon";

  if (!rateLimit(ip)) {
    return NextResponse.json(
      { ok: false, error: "Too many requests. Try again in a minute." },
      { status: 429 }
    );
  }

  let payload: unknown;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON" },
      { status: 400 }
    );
  }

  const parsed = ContactSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "Please check your input." },
      { status: 400 }
    );
  }

  const { name, email, message, website } = parsed.data;
  // honeypot tripped — pretend success
  if (website && website.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO ?? "hi@c4g7.com";
  const from = process.env.CONTACT_FROM ?? "c4g7.com <noreply@c4g7.com>";

  if (!apiKey) {
    // Soft-success in dev so the UI flow is testable without keys.
    if (process.env.NODE_ENV !== "production") {
      console.log("[contact] (dev, no RESEND_API_KEY) →", { name, email, message });
      return NextResponse.json({ ok: true, dev: true });
    }
    return NextResponse.json(
      { ok: false, error: "Contact is not configured." },
      { status: 503 }
    );
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: `New message from ${name} via c4g7.com`,
      text: `From: ${name} <${email}>\nIP: ${ip}\n\n${message}`,
      html: `<div style="font-family:ui-sans-serif,system-ui,Geist,Arial,sans-serif;line-height:1.55"><p><strong>From:</strong> ${escapeHtml(
        name
      )} &lt;${escapeHtml(email)}&gt;</p><p><strong>IP:</strong> ${escapeHtml(
        ip
      )}</p><hr/><pre style="white-space:pre-wrap;font-family:inherit">${escapeHtml(
        message
      )}</pre></div>`,
    });
    if (error) {
      return NextResponse.json(
        { ok: false, error: "Failed to send. Please email me directly." },
        { status: 502 }
      );
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Failed to send. Please email me directly." },
      { status: 500 }
    );
  }
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
