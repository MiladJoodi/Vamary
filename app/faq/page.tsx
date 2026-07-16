import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/layout/PageHero";
import { FaqAccordion } from "@/components/shared/FaqAccordion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers to common questions about services and treatment at Vamary.",
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        title="Frequently asked questions"
        description="Can’t find what you need? Reach out via contact or book an appointment."
        breadcrumbs={[{ label: "FAQ" }]}
      />
      <section className="section-y">
        <Container className="grid gap-8 lg:grid-cols-5">
          <div className="relative hidden min-h-[28rem] overflow-hidden rounded-xl lg:col-span-2 lg:block">
            <Image
              src="/images/faq/faq-3-thumb-1.jpg"
              alt="Clinic consultation"
              fill
              className="object-cover"
              sizes="40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
            <p className="absolute bottom-4 left-4 right-4 text-sm text-white">
              Clear answers before every treatment decision.
            </p>
          </div>
          <div className="lg:col-span-3">
            <FaqAccordion />
            <div className="mt-8 rounded-xl border border-border bg-surface p-5 text-center">
              <p className="text-sm font-medium text-ink">Still have questions?</p>
              <p className="mt-1 text-xs text-muted">
                Our support team is ready to help.
              </p>
              <div className="mt-3 flex justify-center gap-2">
                <Button href="/contact" size="sm" variant="outline">
                  Contact us
                </Button>
                <Button href="/appointment" size="sm">
                  Book visit
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
