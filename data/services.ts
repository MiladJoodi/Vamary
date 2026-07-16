import type { Service } from "@/types";

export const services: Service[] = [
  {
    slug: "rhinoplasty",
    title: "Rhinoplasty",
    excerpt: "Refine nasal shape and function with a natural, face-balanced approach.",
    description:
      "Rhinoplasty is one of Vamary’s most requested procedures. After a careful facial analysis, we design a personalized surgical plan for a natural, harmonious, and lasting result. Your consultation covers expectations, outcome visualization, and post-op care.",
    image: "/images/services/services-3/services-3-thumb-1.jpg",
    icon: "/images/services/services-icon-1.svg",
  },
  {
    slug: "skin-care",
    title: "Skin Care",
    excerpt: "Specialized protocols for cleansing, rejuvenation, and pigmentation treatment.",
    description:
      "Our dermatology unit combines medical expertise with modern technology to deliver care plans tailored to your skin type—from acne and pigmentation to texture renewal and radiance.",
    image: "/images/services/services-3/services-3-thumb-2.jpg",
    icon: "/images/services/services-icon-2.svg",
  },
  {
    slug: "breast-surgery",
    title: "Breast Surgery",
    excerpt: "Augmentation, reduction, and lift with high safety standards.",
    description:
      "Breast procedures focus on proportion, safety, and results that fit your lifestyle. Consultation includes method selection, implant options when needed, and recovery planning.",
    image: "/images/services/services-3/services-3-thumb-3.jpg",
    icon: "/images/services/services-icon-3.svg",
  },
  {
    slug: "lip-surgery",
    title: "Lip Enhancement",
    excerpt: "Subtle volume and symmetry with surgical and non-surgical techniques.",
    description:
      "From specialized fillers to refined surgical techniques, our team prioritizes lip balance with the rest of your features for a natural, lasting look.",
    image: "/images/services/services-3/services-3-thumb-4.jpg",
  },
  {
    slug: "non-surgical",
    title: "Non-Surgical Treatments",
    excerpt: "Botox, fillers, laser, and rejuvenation without surgery.",
    description:
      "For patients seeking improvement with minimal downtime, we offer carefully planned non-invasive treatments with structured follow-up.",
    image: "/images/services/services-3/services-3-thumb-5.jpg",
  },
  {
    slug: "reconstructive",
    title: "Reconstructive Surgery",
    excerpt: "Restore form and function after injury, surgery, or congenital conditions.",
    description:
      "Our reconstructive team takes a multidisciplinary path—from initial assessment to final restoration—prioritizing function, aesthetics, and quality of life.",
    image: "/images/services/services-3/services-3-thumb-6.jpg",
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
