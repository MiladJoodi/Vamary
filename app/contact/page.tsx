import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/layout/PageHero";
import { ContactForm } from "@/components/shared/ContactForm";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/data/navigation";
import { Mail, MapPin, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Vamary clinic.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact us"
        description="Send a message for questions, scheduling, or more information."
        breadcrumbs={[{ label: "Contact" }]}
      />
      <section className="section-y">
        <Container className="grid gap-6 lg:grid-cols-5">
          <div className="space-y-3 lg:col-span-2">
            {[
              {
                icon: MapPin,
                title: "Address",
                text: siteConfig.address,
              },
              {
                icon: Phone,
                title: "Phone",
                text: siteConfig.phoneDisplay,
              },
              {
                icon: Mail,
                title: "Email",
                text: siteConfig.email,
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-border bg-surface p-4"
              >
                <div className="mb-2 inline-flex size-8 items-center justify-center rounded-md bg-accent-soft text-accent">
                  <item.icon className="size-3.5" />
                </div>
                <h2 className="text-sm font-semibold text-ink">{item.title}</h2>
                <p className="mt-1 text-xs text-muted">{item.text}</p>
              </div>
            ))}
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-border">
              <Image
                src="/images/banner/cta-bg-2.jpg"
                alt="Clinic exterior"
                fill
                className="object-cover"
                sizes="(max-width:1024px) 100vw, 40vw"
              />
            </div>
            <div className="overflow-hidden rounded-xl border border-border">
              <iframe
                title="Clinic location map"
                src="https://maps.google.com/maps?q=Tehran&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="h-48 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <div className="rounded-xl border border-border bg-surface p-4 md:p-6 lg:col-span-3">
            <h2 className="mb-4 text-sm font-semibold text-ink">Message form</h2>
            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}
