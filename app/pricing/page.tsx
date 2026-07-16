import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { pricingPlans } from "@/data/pricing";
import { cn } from "@/lib/cn";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Transparent packages and pricing for Vamary clinic services.",
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        title="Pricing"
        description="Clear packages to start your care journey. Final costs are confirmed after consultation."
        breadcrumbs={[{ label: "Pricing" }]}
      />
      <section className="section-y">
        <Container>
          <div className="grid gap-4 md:grid-cols-3">
            {pricingPlans.map((plan) => (
              <article
                key={plan.id}
                className={cn(
                  "flex flex-col rounded-xl border p-5",
                  plan.highlighted
                    ? "border-accent bg-accent-soft shadow-md shadow-accent/10"
                    : "border-border bg-surface",
                )}
              >
                <h2 className="text-sm font-semibold text-ink">{plan.name}</h2>
                <p className="mt-1 text-xs text-muted">{plan.description}</p>
                <p className="mt-4">
                  <span className="text-2xl font-bold text-ink">{plan.price}</span>
                  <span className="ms-1 text-xs text-muted">{plan.period}</span>
                </p>
                <ul className="mt-4 flex-1 space-y-2">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-xs text-muted"
                    >
                      <Check className="mt-0.5 size-3.5 shrink-0 text-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  href="/appointment"
                  size="sm"
                  variant={plan.highlighted ? "primary" : "outline"}
                  className="mt-5 w-full"
                >
                  Request this package
                </Button>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
