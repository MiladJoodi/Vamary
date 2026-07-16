import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { cases } from "@/data/cases";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Treatment results and case studies from Vamary clinic.",
};

export default function CasesPage() {
  return (
    <>
      <PageHero
        title="Case studies"
        description="A selection of real surgical and non-surgical treatment results."
        breadcrumbs={[{ label: "Case studies" }]}
      />
      <section className="section-y">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cases.map((item) => (
              <Link
                key={item.slug}
                href={`/cases/${item.slug}`}
                className="group overflow-hidden rounded-xl border border-border bg-surface"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width:768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-4">
                  <Badge>{item.category}</Badge>
                  <h2 className="mt-2 text-sm font-semibold text-ink group-hover:text-accent">
                    {item.title}
                  </h2>
                  <p className="mt-1 text-xs text-muted">{item.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
