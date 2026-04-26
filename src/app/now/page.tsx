import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Coffee, Music, Code2, Server, BookOpen } from "lucide-react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "/now — c4g7",
  description: "What I'm focused on right now.",
};

const LAST_UPDATED = "April 2026";

const NOW_ITEMS: { icon: React.ComponentType<{ className?: string }>; title: string; body: string }[] = [
  {
    icon: Server,
    title: "Running c4g7.Host",
    body: "Operating multi-region game & app hosting — improving the panel UX, automating provisioning and tuning DDoS-protected edge nodes.",
  },
  {
    icon: Code2,
    title: "Writing TypeScript & Java",
    body: "Mostly Next.js for the web side and Java/SQL for backend systems. Learning more about distributed schedulers and container orchestration.",
  },
  {
    icon: BookOpen,
    title: "Reading",
    body: "Designing Data-Intensive Applications · Effective Java · plus a steady drip of Hacker News and engineering blogs.",
  },
  {
    icon: Coffee,
    title: "Daily fuel",
    body: "Far too much coffee. Iced if it's warmer than 10°C in Germany.",
  },
  {
    icon: Music,
    title: "On loop",
    body: "Lo-fi beats while shipping; synthwave when the night gets long.",
  },
];

export default function NowPage() {
  return (
    <div className="min-h-screen">
      <div className="bg-grid fixed inset-0 -z-10" />
      <SiteNav />
      <main className="relative z-10 mx-auto max-w-3xl px-6 pt-16 sm:pt-24">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground transition hover:text-foreground"
        >
          <ArrowLeft className="size-3" />
          back home
        </Link>

        <header className="stagger mt-6">
          <h1 className="text-5xl font-semibold tracking-tighter sm:text-6xl">
            <span className="font-serif italic font-light text-neutral-400">/</span>
            <span className="shimmer-text">now</span>
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            A snapshot of what I&apos;m focused on, inspired by{" "}
            <Link
              href="https://nownownow.com/about"
              target="_blank"
              rel="noreferrer"
              className="text-neutral-300 underline-offset-4 hover:text-foreground hover:underline"
            >
              Derek Sivers&apos; /now movement
            </Link>
            . Updated whenever life shifts.
          </p>
          <p className="mt-3 font-mono text-[11px] uppercase tracking-widest text-neutral-500">
            last updated · {LAST_UPDATED}
          </p>
        </header>

        <section className="mt-12">
          <SectionHeading label="right now" />
          <ul className="space-y-3">
            {NOW_ITEMS.map(({ icon: Icon, title, body }) => (
              <li
                key={title}
                className="card-glow flex gap-4 rounded-xl border border-white/10 p-5"
              >
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-neutral-300">
                  <Icon className="size-[16px]" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-foreground">
                    {title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <SiteFooter />
      </main>
    </div>
  );
}
