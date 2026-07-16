import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/layout/PageHero";
import { BeforeAfter } from "@/components/shared/BeforeAfter";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { cases, getCaseBySlug } from "@/data/cases";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getCaseBySlug(slug);
  if (!item) return { title: "Case not found" };
  return { title: item.title, description: item.excerpt };
}

export default async function CaseDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = getCaseBySlug(slug);
  if (!item) notFound();

  return (
    <>
      <PageHero
        title={item.title}
        description={item.excerpt}
        breadcrumbs={[
          { label: "Case studies", href: "/cases" },
          { label: item.title },
        ]}
      />
      <section className="section-y">
        <Container className="grid gap-8 lg:grid-cols-2">
          {item.beforeImage && item.afterImage ? (
            <BeforeAfter beforeSrc={item.beforeImage} afterSrc={item.afterImage} />
          ) : (
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
                sizes="(max-width:1024px) 100vw, 50vw"
                priority
              />
            </div>
          )}
          <div>
            <Badge>{item.category}</Badge>
            <h2 className="mt-3 text-lg font-semibold text-ink">{item.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {item.excerpt} Results vary based on anatomy, treatment type, and
              aftercare. Book a specialist consultation to explore similar
              options for you.
            </p>
            <Button href="/appointment" size="sm" className="mt-5">
              Book similar consult
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
