import { Container } from "@/components/ui/Container";
import { brandLogos } from "@/data/media";
import Image from "next/image";

export function BrandsSection() {
  const logos = [...brandLogos, ...brandLogos];

  return (
    <section className="border-y border-border bg-surface py-8">
      <Container>
        <p className="mb-5 text-center text-xs font-medium tracking-wide text-muted">
          Trusted partners & technology brands
        </p>
        <div className="overflow-hidden">
          <div className="animate-marquee flex w-max items-center gap-10 pe-10">
            {logos.map((src, i) => (
              <div
                key={`${src}-${i}`}
                className="relative h-8 w-24 shrink-0 opacity-60 grayscale transition hover:opacity-100 hover:grayscale-0 sm:h-9 sm:w-28"
              >
                <Image
                  src={src}
                  alt="Partner brand"
                  fill
                  className="object-contain"
                  sizes="112px"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
