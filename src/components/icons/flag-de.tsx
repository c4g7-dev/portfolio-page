import * as React from "react";

/** Tiny inline German flag (no emoji). Renders as 3 horizontal stripes. */
export function FlagDE({
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 5 3"
      aria-label="Germany"
      role="img"
      className={
        "inline-block h-[0.85em] w-auto translate-y-[-1px] rounded-[1.5px] " +
        "shadow-[0_0_0_1px_rgba(255,255,255,0.08)] " +
        (className ?? "")
      }
      {...props}
    >
      <rect width="5" height="1" y="0" fill="#000" />
      <rect width="5" height="1" y="1" fill="#dd0000" />
      <rect width="5" height="1" y="2" fill="#ffce00" />
    </svg>
  );
}
