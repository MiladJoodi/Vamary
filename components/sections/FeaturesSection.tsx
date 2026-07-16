import { Container } from "@/components/ui/Container";
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/Motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { features } from "@/data/media";
import Image from "next/image";

export function FeaturesSection() {
  return (
    <section className="section-y">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Why Vamary"
            title="Care that feels considered"
            description="From first visit to follow-up, every detail is designed around comfort and clinical quality."
          />
        </FadeIn>
        <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((item) => (
            <StaggerItem key={item.title}>
              <article className="group h-full overflow-hidden rounded-xl border border-border bg-surface">
                <div className="relative aspect-[5/4] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width:768px) 100vw, 25vw"
                  />
                </div>
                <div className="p-3.5">
                  <h3 className="text-sm font-semibold text-ink">{item.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted">
                    {item.text}
                  </p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
