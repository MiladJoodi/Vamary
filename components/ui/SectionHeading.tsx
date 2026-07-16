import { cn } from "@/lib/cn";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "start";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mb-8 max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-start",
        className,
      )}
    >
      {eyebrow ? (
        <p className="mb-2 text-xs font-medium tracking-wide text-accent">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-xl font-semibold text-ink md:text-2xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
      ) : null}
    </div>
  );
}
