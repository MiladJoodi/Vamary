import type { PricingPlan } from "@/types";

export const pricingPlans: PricingPlan[] = [
  {
    id: "consult",
    name: "Specialist Consultation",
    price: "$45",
    period: "per visit",
    description: "Initial assessment, medical review, and treatment pathway advice.",
    features: [
      "30-minute in-person session",
      "Medical history review",
      "Treatment option recommendations",
      "Initial care plan",
    ],
  },
  {
    id: "skin",
    name: "Skin Care Package",
    price: "$480",
    period: "package",
    description: "Three dermatology sessions with monthly follow-up.",
    features: [
      "3 specialist treatment sessions",
      "Home-care products",
      "Online follow-up",
      "Discount on extra sessions",
    ],
    highlighted: true,
  },
  {
    id: "premium",
    name: "Complete Aesthetics Package",
    price: "$1,250",
    period: "package",
    description: "Combined surgical consult, skin care, and full follow-up.",
    features: [
      "Surgery & dermatology consult",
      "Personalized treatment plan",
      "Priority scheduling",
      "6 months of free follow-up",
    ],
  },
];
