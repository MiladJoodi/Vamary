import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

export function Badge({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md bg-accent-soft px-2 py-0.5 text-[11px] font-medium text-accent-strong",
        className,
      )}
    >
      {children}
    </span>
  );
}
