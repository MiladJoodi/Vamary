import type { BlogPost } from "@/types";

export const posts: BlogPost[] = [
  {
    slug: "prepare-for-rhinoplasty",
    title: "How to Prepare for Rhinoplasty",
    excerpt: "A practical checklist of care tips and key points before surgery.",
    content:
      "Proper preparation plays a major role in your final result and recovery speed. Quitting smoking, adjusting blood-thinning medications with your doctor, and preparing post-op supplies are essential. During consultation, we align expectations and outline your follow-up plan.",
    image: "/images/blog/blog-sm-1.jpg",
    date: "Apr 12, 2025",
    category: "Surgery",
  },
  {
    slug: "skin-care-routine",
    title: "Post-Treatment Skin Care Routine",
    excerpt: "How to care for your skin after laser and rejuvenation sessions.",
    content:
      "After skin treatments, your skin is more sensitive and needs hydration, strong SPF, and no harsh scrubs. Our dermatology team provides a home-care plan matched to your treatment for longer-lasting results.",
    image: "/images/blog/blog-sm-2.jpg",
    date: "Apr 5, 2025",
    category: "Skin",
  },
  {
    slug: "non-surgical-options",
    title: "Non-Surgical Rejuvenation Options",
    excerpt: "Compare Botox, fillers, and energy-based treatments to choose wisely.",
    content:
      "Not everyone needs surgery. Many aesthetic concerns can be managed with non-invasive treatments. The right choice depends on age, skin type, budget, and expectations—clarified in a specialist consultation.",
    image: "/images/blog/blog-sm-3.jpg",
    date: "Mar 28, 2025",
    category: "Aesthetics",
  },
  {
    slug: "choosing-surgeon",
    title: "How to Choose the Right Surgeon",
    excerpt: "Key criteria for selecting a plastic surgery clinic and physician.",
    content:
      "Credentials, real case results, transparent risk discussion, and post-op follow-up quality matter most. At Vamary, the initial consultation is your chance to meet the team and understand the treatment path.",
    image: "/images/blog/blog-big-1.jpg",
    date: "Mar 15, 2025",
    category: "Guide",
  },
  {
    slug: "recovery-tips",
    title: "Recovery Tips After Aesthetic Surgery",
    excerpt: "Sleep, nutrition, and activity guidance during healing.",
    content:
      "Recovery is essential to a good outcome. Adequate rest, protein-rich nutrition, avoiding intense exercise early on, and attending follow-ups all help reduce complications and stabilize results.",
    image: "/images/blog/blog-big-2.jpg",
    date: "Mar 1, 2025",
    category: "Care",
  },
  {
    slug: "summer-skin",
    title: "Skin Care in Warm Seasons",
    excerpt: "SPF, hydration, and smart scheduling for aesthetic sessions in summer.",
    content:
      "In warmer months, skin faces more UV exposure. Daily sunscreen, avoiding direct sun after laser, and scheduling sessions with your physician are strongly recommended.",
    image: "/images/blog/blog-big-3.jpg",
    date: "Feb 20, 2025",
    category: "Skin",
  },
  {
    slug: "filler-myths",
    title: "Common Myths About Dermal Fillers",
    excerpt: "Clear answers to the questions patients ask most before injectables.",
    content:
      "Fillers are not one-size-fits-all. Product choice, placement, and dosing matter as much as technique. A specialist consultation helps separate trends from medically sound options.",
    image: "/images/blog/blog-sm-4.jpg",
    date: "Feb 8, 2025",
    category: "Aesthetics",
  },
  {
    slug: "consultation-checklist",
    title: "What to Bring to Your First Consultation",
    excerpt: "A short list that helps your first visit feel clearer and more productive.",
    content:
      "Bring medication lists, previous procedure notes if any, and reference photos that show your goals. Clear communication at this stage shapes a safer, more realistic plan.",
    image: "/images/blog/blog-sm-5.jpg",
    date: "Jan 28, 2025",
    category: "Guide",
  },
  {
    slug: "laser-aftercare",
    title: "Laser Aftercare Essentials",
    excerpt: "Simple steps that protect results after energy-based skin treatments.",
    content:
      "Keep the skin calm, moisturized, and protected from sun. Avoid active acids unless your clinician approves them, and follow the exact product routine provided after your session.",
    image: "/images/blog/blog-sm-6.jpg",
    date: "Jan 14, 2025",
    category: "Skin",
  },
];

export function getPostBySlug(slug: string) {
  return posts.find((p) => p.slug === slug);
}
