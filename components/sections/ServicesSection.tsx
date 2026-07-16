import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/Motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/data/services";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function ServicesSection() {
  return (
    <section className="section-y bg-surface">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Services"
            title="Treatment paths tailored to you"
            description="From specialist surgery to non-invasive care, every service starts with careful assessment and a personal plan."
          />
        </FadeIn>
        <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((service) => (
            <StaggerItem key={service.slug}>
              <Link
                href={`/services/${service.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-background transition hover:border-accent/40 hover:shadow-md hover:shadow-ink/5"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width:768px) 100vw, 33vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <Badge className="mb-2 w-fit">Specialty care</Badge>
                  <h3 className="text-sm font-semibold text-ink group-hover:text-accent">
                    {service.title}
                  </h3>
                  <p className="mt-1.5 flex-1 text-xs leading-relaxed text-muted">
                    {service.excerpt}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-accent">
                    Details
                    <ArrowRight className="size-3 transition group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
        <div className="mt-7 text-center">
          <Button href="/services" variant="outline" size="sm">
            All services
          </Button>
        </div>
      </Container>
    </section>
  );
}
