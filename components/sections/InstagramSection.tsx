import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/Motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { instagramImages } from "@/data/media";
import Image from "next/image";

export function InstagramSection() {
  return (
    <section className="section-y">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Social"
            title="Follow our clinic life"
            description="Moments from consultations, care routines, and patient journeys."
          />
        </FadeIn>
        <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-6 md:gap-2.5">
          {instagramImages.map((src, i) => (
            <a
              key={src}
              href="#"
              className="group relative aspect-square overflow-hidden rounded-lg"
              aria-label={`Instagram photo ${i + 1}`}
            >
              <Image
                src={src}
                alt=""
                fill
                className="object-cover transition duration-500 group-hover:scale-[1.05]"
                sizes="(max-width:640px) 33vw, 16vw"
              />
              <div className="absolute inset-0 bg-accent/0 transition group-hover:bg-accent/25" />
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
