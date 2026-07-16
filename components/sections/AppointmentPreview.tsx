import { AppointmentForm } from "@/components/shared/AppointmentForm";
import { CountUp } from "@/components/shared/CountUp";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/Motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function AppointmentPreview() {
  return (
    <section className="section-y bg-surface">
      <Container className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        <FadeIn>
          <SectionHeading
            align="start"
            eyebrow="Appointments"
            title="Start with a clear consultation"
            description="Fill in the form and our coordination team will contact you to arrange a suitable time."
            className="mb-6"
          />
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {[
              { end: 4500, suffix: "+", label: "Patients" },
              { end: 98, suffix: "%", label: "Satisfaction" },
              { end: 15, suffix: "+", label: "Doctors" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-border bg-background p-3"
              >
                <p className="text-lg font-bold text-ink">
                  <CountUp end={stat.end} suffix={stat.suffix} />
                </p>
                <p className="text-[11px] text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </FadeIn>
        <FadeIn delay={0.08}>
          <div className="rounded-xl border border-border bg-background p-4 md:p-5">
            <AppointmentForm compact />
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
