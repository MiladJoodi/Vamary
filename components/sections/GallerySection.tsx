import { Container } from "@/components/ui/Container";
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/Motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { galleryImages } from "@/data/media";
import Image from "next/image";

export function GallerySection() {
  return (
    <section className="section-y bg-surface">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Gallery"
            title="Inside the clinic"
            description="A look at our spaces, treatments, and the atmosphere of care at Vamary."
          />
        </FadeIn>
        <Stagger className="grid grid-cols-2 gap-2.5 md:grid-cols-3 md:gap-3">
          {galleryImages.map((item, index) => (
            <StaggerItem
              key={item.src}
              className={
                index === 0 || index === 3
                  ? "md:row-span-1"
                  : undefined
              }
            >
              <div className="group relative aspect-[4/3] overflow-hidden rounded-xl">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.04]"
                  sizes="(max-width:768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-ink/0 transition group-hover:bg-ink/15" />
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
