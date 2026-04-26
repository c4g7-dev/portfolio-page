"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Command } from "lucide-react";

export function SiteNav() {
  const [isMac, setIsMac] = useState(false);
  useEffect(() => {
    setIsMac(/Mac|iPhone|iPad/.test(navigator.platform));
  }, []);

  return (
    <header className="relative z-10 mx-auto flex max-w-5xl items-center justify-between gap-3 px-6 pt-6 sm:pt-8">
      <Link
        href="/"
        className="flex items-center gap-2 font-mono text-sm tracking-tight text-neutral-300 transition hover:text-foreground"
      >
        <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse-dot shadow-[0_0_12px_rgba(52,211,153,0.7)]" />
        c4g7
      </Link>
      <div className="flex items-center gap-2">
        <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.02] p-1 text-xs backdrop-blur-sm sm:flex">
          <Link
            href="/#projects"
            className="rounded-full px-3 py-1.5 text-muted-foreground transition hover:bg-white/5 hover:text-foreground"
          >
            projects
          </Link>
          <Link
            href="/#repos"
            className="rounded-full px-3 py-1.5 text-muted-foreground transition hover:bg-white/5 hover:text-foreground"
          >
            repos
          </Link>
          <Link
            href="/now"
            className="rounded-full px-3 py-1.5 text-muted-foreground transition hover:bg-white/5 hover:text-foreground"
          >
            /now
          </Link>
          <Link
            href="/#contact"
            className="rounded-full px-3 py-1.5 text-muted-foreground transition hover:bg-white/5 hover:text-foreground"
          >
            contact
          </Link>
        </nav>
        <button
          type="button"
          onClick={() =>
            window.dispatchEvent(
              new KeyboardEvent("keydown", {
                key: "k",
                metaKey: isMac,
                ctrlKey: !isMac,
              })
            )
          }
          className="hidden items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.02] px-2.5 py-1.5 font-mono text-[11px] text-muted-foreground backdrop-blur-sm transition hover:border-white/25 hover:text-foreground md:inline-flex"
          aria-label="Open command palette"
        >
          <Command className="size-3" />
          <span>{isMac ? "⌘" : "ctrl"}</span>
          <span>K</span>
        </button>
      </div>
    </header>
  );
}
