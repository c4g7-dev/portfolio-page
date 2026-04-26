import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors",
  {
    variants: {
      variant: {
        default:
          "border-white/10 bg-white/[0.03] text-muted-foreground backdrop-blur",
        success:
          "border-emerald-500/20 bg-emerald-500/10 text-emerald-300",
        warn: "border-amber-500/20 bg-amber-500/10 text-amber-300",
        danger: "border-red-500/20 bg-red-500/10 text-red-300",
        outline: "border-white/15 bg-transparent text-muted-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
