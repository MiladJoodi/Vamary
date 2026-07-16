import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { getServiceBySlug, services } from "@/data/services";

type Props = { params: Promise<{ slug: string }> };

const detailExtras = [
  "/images/services/service-details/service-details-1.jpg",
  "/images/services/service-details/service-details-2.jpg",
  "/images/services/services-4/services-1.jpg",
  "/images/services/services-4/services-2.jpg",
];

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service not found" };
  return {
    title: service.title,
    description: service.excerpt,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <>
      <PageHero
        title={service.title}
        description={service.excerpt}
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
      />
      <section className="section-y">
        <Container className="grid gap-8 lg:grid-cols-5">
          <div className="space-y-3 lg:col-span-3">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
                sizes="(max-width:1024px) 100vw, 60vw"
                priority
              />
            </div>
            <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
              {detailExtras.map((src) => (
                <div
                  key={src}
                  className="relative aspect-square overflow-hidden rounded-lg"
                >
                  <Image
                    src={src}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="150px"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-2">
            <h2 className="text-lg font-semibold text-ink">About this service</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {service.description}
            </p>
            <div className="mt-6 space-y-2 rounded-xl border border-border bg-surface p-4">
              <p className="text-sm font-medium text-ink">Ready to start?</p>
              <p className="text-xs text-muted">
                Book a consult to assess options and define your treatment path.
              </p>
              <Button href="/appointment" size="sm" className="mt-2">
                Book visit
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
