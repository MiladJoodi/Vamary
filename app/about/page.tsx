import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { historyMilestones } from "@/data/media";
import { siteConfig } from "@/data/navigation";

export const metadata: Metadata = {
  title: "About",
  description: `Learn about ${siteConfig.name}, our mission, and care approach.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Vamary"
        description="A clinic for natural beauty, medical safety, and transparent care."
        breadcrumbs={[{ label: "About" }]}
      />
      <section className="section-y">
        <Container className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
          <div className="grid grid-cols-2 gap-3">
            <div className="relative aspect-[3/4] overflow-hidden rounded-xl">
              <Image
                src="/images/about/about-thumb-1.png"
                alt="About the clinic"
                fill
                className="object-cover"
                sizes="(max-width:768px) 50vw, 280px"
              />
            </div>
            <div className="space-y-3">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <Image
                  src="/images/about/about-2-thumb-3.jpg"
                  alt="Consultation room"
                  fill
                  className="object-cover"
                  sizes="(max-width:768px) 50vw, 280px"
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <Image
                  src="/images/about/about-2-thumb-4.jpg"
                  alt="Clinic detail"
                  fill
                  className="object-cover"
                  sizes="(max-width:768px) 50vw, 280px"
                />
              </div>
            </div>
          </div>
          <div>
            <p className="mb-2 text-xs font-medium text-accent">Our story</p>
            <h2 className="font-display text-xl font-semibold text-ink md:text-2xl">
              Focused on every patient’s individuality
            </h2>
            <div className="prose-en mt-4 space-y-3 text-sm text-muted">
              <p>
                Vamary was founded to deliver plastic surgery and aesthetic care
                in a safe, modern, patient-first environment. We believe great
                results come from medical expertise, attentive listening, and
                realistic planning.
              </p>
              <p>
                From the first consultation to post-treatment follow-up, our team
                keeps the journey clear and supports you at every step.
              </p>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {[
                { title: "Mission", text: "Safe care with natural results" },
                {
                  title: "Vision",
                  text: "A trusted destination in medical aesthetics",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-lg border border-border bg-surface p-3"
                >
                  <h3 className="text-sm font-semibold text-ink">{item.title}</h3>
                  <p className="mt-1 text-xs text-muted">{item.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <Button href="/appointment" size="sm">
                Book a consult
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-y bg-surface">
        <Container>
          <SectionHeading
            eyebrow="Our journey"
            title="Milestones that shaped the clinic"
            description="A short look at how Vamary grew into a multidisciplinary aesthetic center."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {historyMilestones.map((item) => (
              <article
                key={item.year}
                className="overflow-hidden rounded-xl border border-border bg-background"
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width:768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-4">
                  <p className="text-xs font-medium text-accent">{item.year}</p>
                  <h3 className="mt-1 text-sm font-semibold text-ink">{item.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted">
                    {item.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-y">
        <Container className="grid items-center gap-6 md:grid-cols-2 md:gap-10">
          <div className="grid grid-cols-2 gap-3">
            <div className="relative aspect-[3/4] overflow-hidden rounded-xl">
              <Image
                src="/images/choose/choose-inner-1.png"
                alt="Why choose us"
                fill
                className="object-cover"
                sizes="(max-width:768px) 50vw, 280px"
              />
            </div>
            <div className="relative mt-8 aspect-[3/4] overflow-hidden rounded-xl">
              <Image
                src="/images/choose/choose-inner-2.png"
                alt="Patient care"
                fill
                className="object-cover"
                sizes="(max-width:768px) 50vw, 280px"
              />
            </div>
          </div>
          <div>
            <SectionHeading
              align="start"
              eyebrow="Why patients choose us"
              title="Clarity, comfort, and clinical rigor"
              description="We keep communication simple, plans realistic, and follow-up consistent."
              className="mb-4"
            />
            <ul className="space-y-2.5 text-sm text-muted">
              {[
                "Transparent consultation and pricing guidance",
                "Cross-specialty collaboration when needed",
                "Private, calm treatment rooms",
                "Aftercare that continues beyond the procedure day",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
    </>
  );
}
