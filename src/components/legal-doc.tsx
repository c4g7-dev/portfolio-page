import type { ReactNode } from "react";

export function LegalDoc({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <div className="space-y-6">
      <header className="border-b border-white/10 pb-5">
        <p className="font-mono text-[10.5px] uppercase tracking-widest text-neutral-500">
          // legal
        </p>
        <h2 className="mt-1.5 text-2xl font-semibold tracking-tight sm:text-3xl">
          {title}
        </h2>
        <p className="mt-2 font-mono text-[11px] uppercase tracking-widest text-neutral-500">
          last updated · {updated}
        </p>
      </header>
      <div className="space-y-7 text-sm leading-relaxed text-neutral-300 [&_a]:text-foreground [&_a]:underline-offset-4 [&_a:hover]:underline [&_h3]:text-base [&_h3]:font-medium [&_h3]:text-foreground [&_h3]:tracking-tight [&_p]:text-muted-foreground [&_li]:text-muted-foreground [&_strong]:text-foreground [&_strong]:font-medium [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_code]:rounded [&_code]:bg-white/[0.04] [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-[12px]">
        {children}
      </div>
    </div>
  );
}
