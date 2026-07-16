import type { NavItem } from "@/types";

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "All Services", href: "/services" },
      { label: "Case Studies", href: "/cases" },
      { label: "Our Team", href: "/team" },
      { label: "Pricing", href: "/pricing" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  { label: "Blog", href: "/blog" },
  { label: "Appointment", href: "/appointment" },
  { label: "Contact", href: "/contact" },
];

export const siteConfig = {
  name: "Vamary",
  nameEn: "Vamary",
  tagline: "Plastic Surgery & Aesthetic Clinic",
  description:
    "A specialized plastic surgery, dermatology, and aesthetics clinic with experienced physicians and modern facilities.",
  phone: "+1-839-367-0250",
  phoneDisplay: "(839) 367-0250",
  email: "info@vamary.com",
  address: "128 Valiasr Ave, above Saei Park, Tehran",
  hours: "Sat–Thu · 9:00 AM – 8:00 PM",
  social: {
    instagram: "#",
    telegram: "#",
    linkedin: "#",
  },
} as const;
