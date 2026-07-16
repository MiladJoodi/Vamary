export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

export type Service = {
  slug: string;
  title: string;
  excerpt: string;
  description: string;
  image: string;
  icon?: string;
};

export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  specialties: string[];
};

export type CaseStudy = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  image: string;
  beforeImage?: string;
  afterImage?: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  category: string;
};

export type PricingPlan = {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted?: boolean;
};

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  quote: string;
  image: string;
  rating: number;
};
