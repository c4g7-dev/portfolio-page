import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { PROJECTS } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const STATUS_TONE = {
  live: { label: "live", variant: "success" as const },
  wip: { label: "in progress", variant: "warn" as const },
  archived: { label: "archived", variant: "outline" as const },
};

export function Projects() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {PROJECTS.map((p, i) => {
        const tone = STATUS_TONE[p.status];
        return (
          <Link
            key={p.name}
            href={p.href}
            target="_blank"
            rel="noreferrer"
            className={cn(
              "card-glow group relative flex flex-col overflow-hidden rounded-xl border border-white/10 p-6 hover:border-white/25",
              i === 0 && "md:col-span-2"
            )}
          >
            {/* glow accent */}
            <div
              aria-hidden
              className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-gradient-to-br from-violet-500/20 via-fuchsia-500/10 to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"
            />
            <div className="relative flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-neutral-200">
                  <Sparkles className="size-[18px]" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-semibold tracking-tight text-foreground">
                      {p.name}
                    </h3>
                    <Badge variant={tone.variant}>
                      {tone.variant === "success" && (
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse-dot" />
                      )}
                      {tone.label}
                    </Badge>
                  </div>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    {p.tagline}
                  </p>
                </div>
              </div>
              <ArrowUpRight className="arrow size-5 text-neutral-500 group-hover:text-foreground" />
            </div>

            <p className="relative mt-4 text-sm leading-relaxed text-neutral-400">
              {p.description}
            </p>

            <div className="relative mt-5 flex flex-wrap gap-1.5">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-0.5 font-mono text-[10.5px] uppercase tracking-wider text-neutral-400"
                >
                  {t}
                </span>
              ))}
            </div>
          </Link>
        );
      })}
    </div>
  );
}
