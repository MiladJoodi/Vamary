import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/Motion";
import { siteConfig } from "@/data/navigation";
import { ArrowRight, Play } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#f0e8e6_0%,_transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.35] [background-image:linear-gradient(to_right,#e4e1db_1px,transparent_1px),linear-gradient(to_bottom,#e4e1db_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />

      <Container className="relative grid items-center gap-8 py-10 md:grid-cols-2 md:gap-10 md:py-14 lg:py-16">
        <FadeIn>
          <p className="mb-3 text-xs font-medium tracking-wide text-accent">
            {siteConfig.tagline}
          </p>
          <h1 className="font-display text-2xl leading-snug font-semibold text-ink md:text-3xl lg:text-[2.15rem]">
            Natural beauty,
            <br />
            medical standards
          </h1>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
            At {siteConfig.name}, your care path—from specialist consultation to
            post-treatment follow-up—is designed to be clear, safe, and personal.
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-2.5">
            <Button href="/appointment" size="sm">
              Book a consult
              <ArrowRight className="size-3.5" />
            </Button>
            <Button href="/services" variant="outline" size="sm">
              View services
            </Button>
            <a
              href="https://www.youtube.com/watch?v=TYYf8zYjP5k"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs text-muted transition hover:text-accent"
            >
              <span className="inline-flex size-8 items-center justify-center rounded-full border border-border bg-surface">
                <Play className="size-3 fill-current" />
              </span>
              Watch clinic intro
            </a>
          </div>
          <dl className="mt-7 grid max-w-md grid-cols-3 gap-3 border-t border-border pt-5">
            {[
              { label: "Years experience", value: "12+" },
              { label: "Happy patients", value: "4,500+" },
              { label: "Specialists", value: "15+" },
            ].map((stat) => (
              <div key={stat.label}>
                <dt className="text-[11px] text-muted">{stat.label}</dt>
                <dd className="mt-0.5 text-base font-bold text-ink">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl bg-surface-2 md:max-w-none">
            <Image
              src="/images/banner/banner-1-img-1.png"
              alt="Vamary clinic"
              fill
              priority
              className="object-cover object-top"
              sizes="(max-width:768px) 100vw, 50vw"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/50 to-transparent p-4 pt-16">
              <p className="text-xs text-white/90">
                Care designed around safety and natural-looking results
              </p>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
