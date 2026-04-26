import { STACK } from "@/lib/data";

export function Stack() {
  return (
    <div className="flex flex-wrap gap-2">
      {STACK.map((s) => (
        <span
          key={s}
          className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-1.5 font-mono text-xs text-neutral-300 transition hover:border-white/25 hover:text-foreground"
        >
          {s}
        </span>
      ))}
    </div>
  );
}
