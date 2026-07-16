import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { AppointmentForm } from "@/components/shared/AppointmentForm";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/data/navigation";
import { Clock, MapPin, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Appointment",
  description: "Book a consultation or treatment visit at Vamary clinic.",
};

export default function AppointmentPage() {
  return (
    <>
      <PageHero
        title="Book an appointment"
        description="Complete the form and we’ll contact you to arrange a suitable time."
        breadcrumbs={[{ label: "Appointment" }]}
      />
      <section className="section-y">
        <Container className="grid gap-6 lg:grid-cols-3">
          <div className="space-y-3 lg:col-span-1">
            {[
              {
                icon: Phone,
                title: "Phone",
                text: siteConfig.phoneDisplay,
              },
              {
                icon: MapPin,
                title: "Address",
                text: siteConfig.address,
              },
              {
                icon: Clock,
                title: "Hours",
                text: siteConfig.hours,
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
                <p className="mt-1 text-xs leading-relaxed text-muted">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="rounded-xl border border-border bg-surface p-4 md:p-6 lg:col-span-2">
            <h2 className="mb-4 text-sm font-semibold text-ink">
              Appointment request form
            </h2>
            <AppointmentForm />
          </div>
        </Container>
      </section>
    </>
  );
}
