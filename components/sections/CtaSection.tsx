import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/Motion";
import { siteConfig } from "@/data/navigation";
import { Phone } from "lucide-react";
import Image from "next/image";

export function CtaSection() {
  return (
    <section className="section-y !py-0">
      <Container className="pb-10 md:pb-12">
        <FadeIn>
          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src="/images/banner/cta-bg.jpg"
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-ink/70" />
            <div className="relative flex flex-col items-start justify-between gap-5 px-5 py-8 sm:flex-row sm:items-center md:px-8 md:py-10">
              <div>
                <p className="text-xs text-white/70">Ready to begin?</p>
                <h2 className="font-display mt-1 text-lg font-semibold text-white md:text-xl">
                  Book your specialist consultation today
                </h2>
              </div>
              <div className="flex flex-wrap items-center gap-2.5">
                <Button href="/appointment" size="sm">
                  Book visit
                </Button>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="inline-flex h-9 items-center gap-2 rounded-md border border-white/20 bg-white/10 px-3 text-sm text-white backdrop-blur transition hover:bg-white/15"
                >
                  <Phone className="size-3.5" />
                  <span>{siteConfig.phoneDisplay}</span>
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
