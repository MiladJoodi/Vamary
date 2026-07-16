import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn("container-page", className)}>{children}</div>;
}
