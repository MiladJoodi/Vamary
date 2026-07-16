import { BeforeAfter } from "@/components/shared/BeforeAfter";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/Motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function BeforeAfterSection() {
  return (
    <section className="section-y">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Real results"
            title="Before & after"
            description="Examples of outcomes from treatments at our clinic. Final results vary by individual conditions and aftercare."
          />
        </FadeIn>
        <div className="grid gap-5 md:grid-cols-2">
          <FadeIn>
            <BeforeAfter
              beforeSrc="/images/before-after/before-after-1.jpg"
              afterSrc="/images/before-after/before-after-2.jpg"
            />
          </FadeIn>
          <FadeIn delay={0.08}>
            <BeforeAfter
              beforeSrc="/images/before-after/before-after-2-thumb-1.jpg"
              afterSrc="/images/before-after/before-after-2-thumb-2.jpg"
            />
          </FadeIn>
        </div>
        <div className="mt-6 text-center">
          <Button href="/cases" size="sm" variant="outline">
            View case studies
          </Button>
        </div>
      </Container>
    </section>
  );
}
