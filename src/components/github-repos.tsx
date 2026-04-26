"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Star, GitFork, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/icons/github";

type Repo = {
  id: number;
  name: string;
  url: string;
  description: string | null;
  language: string | null;
  stars: number;
  forks: number;
  pushedAt: string;
  topics: string[];
};

const LANG_COLOR: Record<string, string> = {
  TypeScript: "bg-sky-400",
  JavaScript: "bg-yellow-400",
  Python: "bg-emerald-400",
  Java: "bg-orange-400",
  Go: "bg-cyan-400",
  Rust: "bg-amber-500",
  Shell: "bg-lime-400",
  HTML: "bg-pink-400",
  CSS: "bg-violet-400",
  Vue: "bg-emerald-300",
  C: "bg-neutral-400",
  "C#": "bg-purple-300",
  Kotlin: "bg-purple-400",
};

function relativeTime(iso: string) {
  const diff = Date.now() - new Date(iso).getTime();
  const sec = Math.floor(diff / 1000);
  if (sec < 60) return "just now";
  const min = Math.floor(sec / 60);
  if (min < 60) return `${min}m ago`;
  const hr = Math.floor(min / 60);
  if (hr < 24) return `${hr}h ago`;
  const d = Math.floor(hr / 24);
  if (d < 30) return `${d}d ago`;
  const mo = Math.floor(d / 30);
  if (mo < 12) return `${mo}mo ago`;
  return `${Math.floor(mo / 12)}y ago`;
}

export function GithubRepos() {
  const [repos, setRepos] = useState<Repo[] | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let alive = true;
    fetch("/api/github")
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error(`HTTP ${r.status}`))))
      .then((data: { repos: Repo[] }) => {
        if (alive) setRepos(data.repos ?? []);
      })
      .catch(() => {
        if (alive) setFailed(true);
      });
    return () => {
      alive = false;
    };
  }, []);

  if (failed) {
    return (
      <div className="rounded-xl border border-white/10 bg-white/[0.02] p-6 text-center text-sm text-muted-foreground">
        Couldn&apos;t reach the GitHub API right now —{" "}
        <Link
          href="https://github.com/c4g7-dev"
          className="text-foreground underline-offset-4 hover:underline"
          target="_blank"
        >
          browse repos directly
        </Link>
        .
      </div>
    );
  }

  if (repos === null) {
    return (
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="skeleton h-44 rounded-xl border border-white/10"
            style={{ animationDelay: `${i * 80}ms` }}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {repos.map((r) => (
        <Link
          key={r.id}
          href={r.url}
          target="_blank"
          rel="noreferrer"
          className="card-glow group flex flex-col rounded-xl border border-white/10 p-5 hover:border-white/25"
        >
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-2 text-neutral-300">
              <GithubIcon className="size-4 text-neutral-400" />
              <span className="font-mono text-sm font-medium text-foreground">
                {r.name}
              </span>
            </div>
            <ArrowUpRight className="arrow size-4 text-neutral-500 group-hover:text-foreground" />
          </div>

          <p className="mt-3 line-clamp-2 min-h-[2.5em] text-sm text-muted-foreground">
            {r.description ?? "No description"}
          </p>

          <div className="mt-4 flex items-center gap-4 font-mono text-[11px] text-neutral-500">
            {r.language && (
              <span className="inline-flex items-center gap-1.5">
                <span
                  className={`h-2 w-2 rounded-full ${
                    LANG_COLOR[r.language] ?? "bg-neutral-400"
                  }`}
                />
                {r.language}
              </span>
            )}
            <span className="inline-flex items-center gap-1">
              <Star className="size-3" /> {r.stars}
            </span>
            <span className="inline-flex items-center gap-1">
              <GitFork className="size-3" /> {r.forks}
            </span>
            <span className="ml-auto">{relativeTime(r.pushedAt)}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}
