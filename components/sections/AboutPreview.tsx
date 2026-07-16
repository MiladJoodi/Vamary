import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/Motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import Image from "next/image";

export function AboutPreview() {
  return (
    <section className="section-y">
      <Container className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
        <FadeIn>
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-3">
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl">
                <Image
                  src="/images/about/about-2-thumb-1.jpg"
                  alt="Clinic space"
                  fill
                  className="object-cover"
                  sizes="(max-width:768px) 50vw, 280px"
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-xl">
                <Image
                  src="/images/about/about-2-thumb-3.jpg"
                  alt="Treatment detail"
                  fill
                  className="object-cover"
                  sizes="(max-width:768px) 50vw, 280px"
                />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <div className="relative aspect-square overflow-hidden rounded-xl">
                <Image
                  src="/images/about/about-2-thumb-4.jpg"
                  alt="Care atmosphere"
                  fill
                  className="object-cover"
                  sizes="(max-width:768px) 50vw, 280px"
                />
              </div>
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl">
                <Image
                  src="/images/about/about-2-thumb-2.jpg"
                  alt="Medical team"
                  fill
                  className="object-cover"
                  sizes="(max-width:768px) 50vw, 280px"
                />
              </div>
            </div>
          </div>
        </FadeIn>
        <FadeIn delay={0.08}>
          <SectionHeading
            align="start"
            eyebrow="About Vamary"
            title="A clinic for precise care and lasting beauty"
            description="We believe beauty is most meaningful when paired with health, transparency, and respect for every patient’s individuality."
            className="mb-5"
          />
          <ul className="space-y-2.5 text-sm text-muted">
            {[
              "Specialist consultation before every treatment",
              "Multidisciplinary surgery and dermatology team",
              "Structured follow-up during recovery",
              "Strict safety and sterilization standards",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-5">
            <Button href="/about" variant="outline" size="sm">
              Learn more
            </Button>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
