"use client";

import { useState } from "react";
import { Send, Loader2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function ContactForm() {
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    setError(null);
    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get("name") ?? "").trim(),
      email: String(fd.get("email") ?? "").trim(),
      message: String(fd.get("message") ?? "").trim(),
      website: String(fd.get("website") ?? ""),
    };
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data: { ok: boolean; error?: string } = await res.json();
      if (!data.ok) throw new Error(data.error ?? "Failed");
      setState("sent");
      e.currentTarget.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed");
      setState("error");
    }
  }

  if (state === "sent") {
    return (
      <div className="card-glow flex flex-col items-center justify-center gap-3 rounded-xl border border-white/10 p-10 text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-emerald-500/20 bg-emerald-500/10">
          <CheckCircle2 className="size-6 text-emerald-400" />
        </div>
        <h3 className="text-lg font-medium tracking-tight">Message sent</h3>
        <p className="max-w-sm text-sm text-muted-foreground">
          Thanks — I&apos;ll get back to you soon. In the meantime, feel free to
          poke around.
        </p>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setState("idle")}
          className="mt-2"
        >
          Send another
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="card-glow rounded-xl border border-white/10 p-6"
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            required
            minLength={1}
            maxLength={100}
            placeholder="Your name"
            autoComplete="name"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            maxLength={200}
            placeholder="you@example.com"
            autoComplete="email"
          />
        </div>
      </div>

      <div className="mt-4 space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          required
          minLength={10}
          maxLength={4000}
          placeholder="What's on your mind?"
          rows={5}
        />
      </div>

      {/* honeypot — hidden from users */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
      />

      <div className="mt-5 flex items-center justify-between gap-3">
        <p className="text-xs text-neutral-500">
          Or just email{" "}
          <a
            href="mailto:hi@c4g7.com"
            className="text-neutral-300 hover:text-foreground"
          >
            hi@c4g7.com
          </a>
          .
        </p>
        <Button type="submit" disabled={state === "sending"}>
          {state === "sending" ? (
            <Loader2 className="animate-spin" />
          ) : (
            <Send />
          )}
          {state === "sending" ? "Sending…" : "Send message"}
        </Button>
      </div>

      {error && (
        <p className="mt-3 text-sm text-red-400" role="alert">
          {error}
        </p>
      )}
    </form>
  );
}
