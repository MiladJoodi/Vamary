import type { TeamMember } from "@/types";

export const teamMembers: TeamMember[] = [
  {
    slug: "dr-sara-ahmadi",
    name: "Dr. Sara Ahmadi",
    role: "Plastic Surgeon",
    bio: "Over 12 years of experience in facial and body aesthetic surgery, focused on natural outcomes and patient safety.",
    image: "/images/team/team-1.jpg",
    specialties: ["Rhinoplasty", "Facelift", "Eyelid Surgery"],
  },
  {
    slug: "dr-reza-karimi",
    name: "Dr. Reza Karimi",
    role: "Dermatologist",
    bio: "Dermatology specialist focused on rejuvenation, laser therapy, and non-invasive treatment protocols.",
    image: "/images/team/team-2.jpg",
    specialties: ["Laser", "Rejuvenation", "Pigmentation"],
  },
  {
    slug: "dr-neda-mohammadi",
    name: "Dr. Neda Mohammadi",
    role: "Aesthetic Surgeon",
    bio: "Specialist in breast surgery and body contouring with a personalized approach for every patient.",
    image: "/images/team/team-3.jpg",
    specialties: ["Breast Surgery", "Abdominoplasty", "Liposuction"],
  },
  {
    slug: "dr-ali-hosseini",
    name: "Dr. Ali Hosseini",
    role: "Reconstructive Surgeon",
    bio: "Extensive experience in facial reconstructive surgery and complex post-trauma restoration.",
    image: "/images/team/team-4.jpg",
    specialties: ["Facial Repair", "Ear Reconstruction", "Jaw Surgery"],
  },
  {
    slug: "dr-leila-norouzi",
    name: "Dr. Leila Norouzi",
    role: "Facial Aesthetic Specialist",
    bio: "Focused on subtle facial balancing with injectable and energy-based treatments.",
    image: "/images/team/team-3-thum-1.jpg",
    specialties: ["Fillers", "Botox", "Skin Boosters"],
  },
  {
    slug: "dr-mina-farhadi",
    name: "Dr. Mina Farhadi",
    role: "Dermatology Consultant",
    bio: "Expert in acne, pigmentation, and long-term skin health protocols.",
    image: "/images/team/team-3-thum-2.jpg",
    specialties: ["Acne Care", "Chemical Peels", "Laser"],
  },
  {
    slug: "dr-pouya-rahimi",
    name: "Dr. Pouya Rahimi",
    role: "Body Contouring Surgeon",
    bio: "Dedicated to proportion-focused body contouring with careful recovery planning.",
    image: "/images/team/team-3-thum-3.jpg",
    specialties: ["Liposuction", "Body Lift", "Fat Grafting"],
  },
  {
    slug: "dr-yasamin-kadivar",
    name: "Dr. Yasamin Kadivar",
    role: "Skin Rejuvenation Specialist",
    bio: "Designs staged rejuvenation plans for texture, tone, and long-term skin quality.",
    image: "/images/team/team-5.jpg",
    specialties: ["Laser Resurfacing", "Microneedling", "Medical Skincare"],
  },
];

export function getTeamMemberBySlug(slug: string) {
  return teamMembers.find((m) => m.slug === slug);
}
