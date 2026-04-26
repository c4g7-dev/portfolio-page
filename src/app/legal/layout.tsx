import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ScrollText, Shield, Building2 } from "lucide-react";
import { SiteNav } from "@/components/site-nav";
import { LegalSidebar } from "@/components/legal-sidebar";

export const metadata: Metadata = {
  title: "Legal — c4g7",
  description: "Terms, privacy and imprint.",
};

export const LEGAL_SECTIONS = [
  { slug: "terms", label: "Terms of Service", icon: ScrollText },
  { slug: "privacy", label: "Privacy Policy", icon: Shield },
  { slug: "imprint", label: "Imprint", icon: Building2 },
] as const;

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <div className="bg-grid fixed inset-0 -z-10" />
      <SiteNav />
      <main className="relative z-10 mx-auto max-w-6xl px-6 pt-16 sm:pt-20">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground transition hover:text-foreground"
        >
          <ArrowLeft className="size-3" />
          back home
        </Link>

        <header className="stagger mt-6">
          <h1 className="text-4xl font-semibold tracking-tighter sm:text-5xl">
            <span className="font-serif italic font-light text-neutral-400">/</span>
            <span className="shimmer-text">legal</span>
          </h1>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
            The legally required bits. Plain language where possible.
          </p>
        </header>

        <div className="mt-10 grid gap-10 md:grid-cols-[220px_1fr]">
          <LegalSidebar sections={LEGAL_SECTIONS.map(({ slug, label }) => ({ slug, label }))} />
          <article className="prose-legal min-w-0">{children}</article>
        </div>

        <footer className="mt-24 border-t border-white/10 py-6 text-xs text-neutral-500">
          <p className="font-mono">
            © {new Date().getFullYear()} c4g7 · last updated April 2026
          </p>
        </footer>
      </main>
    </div>
  );
}
