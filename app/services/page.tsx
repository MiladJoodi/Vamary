import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { services } from "@/data/services";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description: "Specialist plastic surgery, dermatology, and aesthetic services at Vamary.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Specialty services"
        description="Surgical and non-surgical treatments with personal assessment and planning."
        breadcrumbs={[{ label: "Services" }]}
      />
      <section className="section-y">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group flex flex-col overflow-hidden rounded-xl border border-border bg-surface transition hover:border-accent/40 hover:shadow-md hover:shadow-ink/5"
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width:768px) 100vw, 33vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <Badge className="mb-2 w-fit">Service</Badge>
                  <h2 className="text-sm font-semibold text-ink group-hover:text-accent">
                    {service.title}
                  </h2>
                  <p className="mt-1.5 flex-1 text-xs text-muted">
                    {service.excerpt}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-accent">
                    Details
                    <ArrowRight className="size-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
