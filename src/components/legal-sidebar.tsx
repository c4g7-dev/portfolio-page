"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ScrollText, Shield, Building2 } from "lucide-react";
import { cn } from "@/lib/utils";

const ICONS = {
  terms: ScrollText,
  privacy: Shield,
  imprint: Building2,
} as const;

type Section = { slug: keyof typeof ICONS; label: string };

export function LegalSidebar({ sections }: { sections: Section[] }) {
  const pathname = usePathname();
  return (
    <aside className="md:sticky md:top-8 md:self-start">
      <p className="mb-3 px-2 font-mono text-[10.5px] uppercase tracking-widest text-neutral-500">
        // sections
      </p>
      <nav className="flex flex-row flex-wrap gap-1 md:flex-col md:gap-0.5">
        {sections.map(({ slug, label }) => {
          const Icon = ICONS[slug];
          const href = `/legal/${slug}`;
          const active = pathname === href;
          return (
            <Link
              key={slug}
              href={href}
              onClick={() => {
                if (typeof window !== "undefined") {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              className={cn(
                "group relative flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm transition",
                active
                  ? "bg-white/[0.06] text-foreground"
                  : "text-muted-foreground hover:bg-white/[0.03] hover:text-foreground"
              )}
            >
              {active && (
                <span className="absolute left-0 top-1/2 h-5 w-[2px] -translate-y-1/2 rounded-r bg-white" />
              )}
              <Icon className="size-4 shrink-0 opacity-80" />
              <span>{label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="mt-6 hidden rounded-lg border border-white/10 bg-white/[0.02] p-3 md:block">
        <p className="font-mono text-[10.5px] uppercase tracking-widest text-neutral-500">
          // questions?
        </p>
        <a
          href="mailto:hi@c4g7.com"
          className="mt-1 block text-sm text-neutral-300 transition hover:text-foreground"
        >
          hi@c4g7.com
        </a>
      </div>
    </aside>
  );
}
