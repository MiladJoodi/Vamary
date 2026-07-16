"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/testimonials";
import { Star } from "lucide-react";
import Image from "next/image";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

export function TestimonialsSection() {
  return (
    <section className="section-y">
      <Container>
        <SectionHeading
          eyebrow="Patient stories"
          title="What our patients say"
        />
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={16}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="!pb-10"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <article className="flex h-full flex-col rounded-xl border border-border bg-surface p-5">
                <div className="mb-3 flex gap-0.5 text-accent">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} className="size-3.5 fill-current" />
                  ))}
                </div>
                <p className="flex-1 text-sm leading-relaxed text-muted">
                  “{item.quote}”
                </p>
                <div className="mt-4 flex items-center gap-2.5 border-t border-border pt-4">
                  <div className="relative size-9 overflow-hidden rounded-full bg-surface-2">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="36px"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-ink">{item.name}</p>
                    <p className="text-[11px] text-muted">{item.role}</p>
                  </div>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
}
