import { Container } from "@/components/ui/Container";
import Link from "next/link";

export function PageHero({
  title,
  description,
  breadcrumbs,
}: {
  title: string;
  description?: string;
  breadcrumbs?: { label: string; href?: string }[];
}) {
  return (
    <section className="border-b border-border bg-surface">
      <Container className="py-8 md:py-10">
        {breadcrumbs ? (
          <nav aria-label="Breadcrumb" className="mb-3">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs text-muted">
              <li>
                <Link href="/" className="hover:text-accent">
                  Home
                </Link>
              </li>
              {breadcrumbs.map((crumb) => (
                <li key={crumb.label} className="flex items-center gap-1.5">
                  <span className="text-border">/</span>
                  {crumb.href ? (
                    <Link href={crumb.href} className="hover:text-accent">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-foreground">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        ) : null}
        <h1 className="font-display text-xl font-semibold text-ink md:text-2xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-2 max-w-2xl text-sm text-muted">{description}</p>
        ) : null}
      </Container>
    </section>
  );
}
