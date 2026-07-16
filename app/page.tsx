import { AboutPreview } from "@/components/sections/AboutPreview";
import { AppointmentPreview } from "@/components/sections/AppointmentPreview";
import { BeforeAfterSection } from "@/components/sections/BeforeAfterSection";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { BrandsSection } from "@/components/sections/BrandsSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { HeroSection } from "@/components/sections/HeroSection";
import { InstagramSection } from "@/components/sections/InstagramSection";
import { MarqueeSection } from "@/components/sections/MarqueeSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MarqueeSection />
      <BrandsSection />
      <AboutPreview />
      <ServicesSection />
      <FeaturesSection />
      <BeforeAfterSection />
      <GallerySection />
      <TeamSection />
      <AppointmentPreview />
      <TestimonialsSection />
      <BlogPreview />
      <InstagramSection />
      <CtaSection />
    </>
  );
}
