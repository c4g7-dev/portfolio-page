"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Activity } from "lucide-react";
import { cn } from "@/lib/utils";

type StatusPayload = {
  overall: "operational" | "degraded" | "down" | "unknown";
  total: number;
  up: number;
  down: number;
  pending: number;
  maintenance: number;
  avgUptime: number | null;
  avgPing: number | null;
  updatedAt: string;
};

const TONE: Record<
  StatusPayload["overall"],
  { label: string; dot: string; ring: string; text: string; bg: string }
> = {
  operational: {
    label: "All systems operational",
    dot: "bg-emerald-400",
    ring: "bg-emerald-400",
    text: "text-emerald-300",
    bg: "border-emerald-500/20 bg-emerald-500/[0.06]",
  },
  degraded: {
    label: "Partial degradation",
    dot: "bg-amber-400",
    ring: "bg-amber-400",
    text: "text-amber-300",
    bg: "border-amber-500/20 bg-amber-500/[0.06]",
  },
  down: {
    label: "Service disruption",
    dot: "bg-red-400",
    ring: "bg-red-400",
    text: "text-red-300",
    bg: "border-red-500/20 bg-red-500/[0.06]",
  },
  unknown: {
    label: "Status unavailable",
    dot: "bg-neutral-400",
    ring: "bg-neutral-400",
    text: "text-neutral-300",
    bg: "border-white/10 bg-white/[0.03]",
  },
};

export function StatusPill({ className }: { className?: string }) {
  const [data, setData] = useState<StatusPayload | null>(null);

  useEffect(() => {
    let alive = true;
    const load = () =>
      fetch("/api/status", { cache: "no-store" })
        .then((r) => r.json())
        .then((d: StatusPayload) => alive && setData(d))
        .catch(() => {});
    load();
    const t = setInterval(load, 60_000);
    return () => {
      alive = false;
      clearInterval(t);
    };
  }, []);

  const tone = TONE[data?.overall ?? "unknown"];

  return (
    <Link
      href="https://status.c4g7.com"
      target="_blank"
      rel="noreferrer"
      className={cn(
        "group inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium backdrop-blur transition hover:-translate-y-px",
        tone.bg,
        className
      )}
    >
      <span className="relative flex h-1.5 w-1.5">
        <span
          className={cn(
            "absolute inline-flex h-full w-full animate-ping rounded-full opacity-60",
            tone.ring
          )}
        />
        <span
          className={cn(
            "relative inline-flex h-1.5 w-1.5 rounded-full",
            tone.dot
          )}
        />
      </span>
      <span className={cn(tone.text)}>{tone.label}</span>
      {data && data.total > 0 && (
        <span className="text-neutral-500">
          · {data.up}/{data.total}
        </span>
      )}
    </Link>
  );
}

export function StatusCard() {
  const [data, setData] = useState<StatusPayload | null>(null);

  useEffect(() => {
    let alive = true;
    const load = () =>
      fetch("/api/status", { cache: "no-store" })
        .then((r) => r.json())
        .then((d: StatusPayload) => alive && setData(d))
        .catch(() => {});
    load();
    const t = setInterval(load, 60_000);
    return () => {
      alive = false;
      clearInterval(t);
    };
  }, []);

  const tone = TONE[data?.overall ?? "unknown"];

  return (
    <Link
      href="https://status.c4g7.com"
      target="_blank"
      rel="noreferrer"
      className="card-glow group flex flex-col rounded-xl border border-white/10 p-5 hover:border-white/25"
    >
      <div className="flex items-start justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-neutral-200">
          <Activity className="size-[18px]" />
        </div>
        <div className={cn("flex items-center gap-1.5 text-xs", tone.text)}>
          <span
            className={cn("inline-block h-1.5 w-1.5 rounded-full", tone.dot)}
          />
          live
        </div>
      </div>
      <h3 className="mt-4 text-base font-medium text-foreground">Status</h3>
      <p className="mt-1 text-sm text-muted-foreground">
        {data ? tone.label : "Uptime & live health of all my services."}
      </p>
      <div className="mt-4 flex items-center justify-between font-mono text-xs">
        <span className="text-neutral-500">status.c4g7.com</span>
        {data && data.total > 0 && (
          <span className="text-neutral-400">
            {data.up}/{data.total} up
            {data.avgPing !== null ? ` · ${data.avgPing}ms` : ""}
          </span>
        )}
      </div>
    </Link>
  );
}
