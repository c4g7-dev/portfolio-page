"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { LINKS } from "@/lib/data";
import { StatusCard } from "@/components/status-indicator";
import { useRef } from "react";

export function LinksGrid() {
  const ref = useRef<HTMLDivElement>(null);

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      className="relative grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
    >
      <div className="spotlight pointer-events-none absolute inset-0 rounded-2xl" />
      {LINKS.map((item) => {
        if (item.title === "Status") return <StatusCard key="status" />;
        const Icon = item.icon;
        return (
          <Link
            key={item.title}
            href={item.href}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noreferrer" : undefined}
            className="card-glow group flex flex-col rounded-xl border border-white/10 p-5 hover:border-white/25"
          >
            <div className="flex items-start justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-neutral-200">
                <Icon className="size-[18px]" />
              </div>
              <ArrowUpRight className="arrow size-4 text-neutral-500 group-hover:text-foreground" />
            </div>
            <h3 className="mt-4 text-base font-medium text-foreground">
              {item.title}
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              {item.description}
            </p>
            <span className="mt-4 font-mono text-xs text-neutral-500">
              {item.domain}
            </span>
          </Link>
        );
      })}
    </div>
  );
}
