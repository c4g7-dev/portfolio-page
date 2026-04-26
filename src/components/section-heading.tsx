export function SectionHeading({ label }: { label: string }) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
        // {label}
      </span>
      <span className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
    </div>
  );
}
