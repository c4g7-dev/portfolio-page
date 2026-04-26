"use client";

import * as React from "react";
import { STACK } from "@/lib/data";

// Per-tag accent colors. Picked to read well on a dark bg.
const COLORS: Record<string, string> = {
  java: "oklch(0.75 0.16 45)",
  sql: "oklch(0.78 0.13 220)",
  python: "oklch(0.83 0.15 95)",
  typescript: "oklch(0.72 0.15 240)",
  "node.js": "oklch(0.78 0.18 145)",
  linux: "oklch(0.82 0.14 75)",
  docker: "oklch(0.77 0.13 225)",
  infrastructure: "oklch(0.76 0.10 290)",
};
const FALLBACK = "oklch(0.85 0 0)";

export function Stack() {
  return (
    <div className="flex flex-wrap gap-2">
      {STACK.map((s, i) => {
        const color = COLORS[s] ?? FALLBACK;
        return (
          <span
            key={s}
            className="chip"
            style={
              {
                "--chip-color": color,
                "--chip-delay": `${(i * 180) % 1500}ms`,
              } as React.CSSProperties
            }
            onMouseMove={(e) => {
              const r = e.currentTarget.getBoundingClientRect();
              e.currentTarget.style.setProperty(
                "--chip-mx",
                `${e.clientX - r.left}px`,
              );
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.setProperty("--chip-mx", "-200%");
            }}
          >
            {s}
          </span>
        );
      })}
    </div>
  );
}
