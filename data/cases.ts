import type { CaseStudy } from "@/types";

export const cases: CaseStudy[] = [
  {
    slug: "rhinoplasty-natural",
    title: "Natural Rhinoplasty",
    category: "Rhinoplasty",
    excerpt: "Dorsal hump correction and improved breathing while preserving facial identity.",
    image: "/images/portfolio/portfolio-1.jpg",
    beforeImage: "/images/before-after/before-after-1.jpg",
    afterImage: "/images/before-after/before-after-2.jpg",
  },
  {
    slug: "facial-rejuvenation",
    title: "Facial Rejuvenation",
    category: "Non-Surgical",
    excerpt: "A filler and Botox combination for a fresh, gently lifted look.",
    image: "/images/portfolio/portfolio-2.jpg",
  },
  {
    slug: "breast-augmentation",
    title: "Breast Augmentation",
    category: "Breast Surgery",
    excerpt: "A balanced result aligned with body proportions and lifestyle.",
    image: "/images/portfolio/portfolio-3.jpg",
  },
  {
    slug: "skin-laser",
    title: "Laser Pigmentation Treatment",
    category: "Dermatology",
    excerpt: "Reduced pigmentation and more even skin tone over several sessions.",
    image: "/images/portfolio/portfolio-4.jpg",
  },
  {
    slug: "eyelid-surgery",
    title: "Eyelid Surgery",
    category: "Facial",
    excerpt: "Removal of puffiness and drooping for a brighter, rested look.",
    image: "/images/portfolio/portfolio-5.jpg",
  },
  {
    slug: "profile-harmony",
    title: "Profile Harmony",
    category: "Facial",
    excerpt: "Balanced refinement across nose and chin for a softer side profile.",
    image: "/images/portfolio/portfolio-6.jpg",
  },
  {
    slug: "body-contour",
    title: "Body Contouring",
    category: "Body",
    excerpt: "Waist and abdomen refinement with liposuction and lift techniques.",
    image: "/images/portfolio/portfolio-7.jpg",
  },
  {
    slug: "skin-texture",
    title: "Skin Texture Renewal",
    category: "Dermatology",
    excerpt: "Improved clarity and smoothness through a staged laser protocol.",
    image: "/images/portfolio/portfolio-8.jpg",
  },
  {
    slug: "case-lift",
    title: "Subtle Lift Case",
    category: "Non-Surgical",
    excerpt: "Targeted volume restoration for a rested, natural expression.",
    image: "/images/portfolio/case-5-thumb-1.jpg",
  },
  {
    slug: "case-contour",
    title: "Contour Refinement",
    category: "Body",
    excerpt: "Focused shaping with attention to proportion and recovery comfort.",
    image: "/images/portfolio/case-5-thumb-2.jpg",
  },
  {
    slug: "case-glow",
    title: "Glow Protocol",
    category: "Dermatology",
    excerpt: "A multi-session plan for radiance and even tone.",
    image: "/images/portfolio/case-5-thumb-3.jpg",
  },
  {
    slug: "reveal-nose",
    title: "Reveal Rhinoplasty",
    category: "Rhinoplasty",
    excerpt: "Softened nasal lines with careful attention to facial harmony.",
    image: "/images/portfolio/reveal-1.jpg",
    beforeImage: "/images/before-after/before-after-2-thumb-1.jpg",
    afterImage: "/images/before-after/before-after-2-thumb-2.jpg",
  },
];

export function getCaseBySlug(slug: string) {
  return cases.find((c) => c.slug === slug);
}
