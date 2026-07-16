"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { teamMembers } from "@/data/team";
import Image from "next/image";
import Link from "next/link";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

export function TeamSection() {
  return (
    <section className="section-y bg-surface">
      <Container>
        <SectionHeading
          eyebrow="Medical team"
          title="Specialists by your side"
          description="Plastic surgeons and dermatologists working with a multidisciplinary approach."
        />
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={16}
          slidesPerView={1.15}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2.1 },
            1024: { slidesPerView: 3.2 },
          }}
          className="!pb-10"
        >
          {teamMembers.map((member) => (
            <SwiperSlide key={member.slug}>
              <Link
                href={`/team/${member.slug}`}
                className="group block overflow-hidden rounded-xl border border-border bg-background"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width:768px) 80vw, 280px"
                  />
                </div>
                <div className="p-3.5">
                  <h3 className="text-sm font-semibold text-ink group-hover:text-accent">
                    {member.name}
                  </h3>
                  <p className="mt-0.5 text-xs text-muted">{member.role}</p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
}
