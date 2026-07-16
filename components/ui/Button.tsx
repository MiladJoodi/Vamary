import { cn } from "@/lib/cn";
import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "outline";
type Size = "sm" | "md";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-white hover:bg-accent-strong shadow-sm shadow-accent/20",
  secondary: "bg-ink text-white hover:bg-foreground",
  ghost: "bg-transparent text-foreground hover:bg-surface-2",
  outline:
    "border border-border bg-surface text-foreground hover:border-accent hover:text-accent",
};

const sizes: Record<Size, string> = {
  sm: "h-8 px-3 text-xs gap-1.5",
  md: "h-9 px-4 text-sm gap-2",
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
  href?: string;
  children: ReactNode;
  className?: string;
};

export function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  className,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex cursor-pointer items-center justify-center rounded-md font-medium transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none",
    variants[variant],
    sizes[size],
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
