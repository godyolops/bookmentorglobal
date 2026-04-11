export type WebDevPlanFeatures = {
  pageLimit: string;
  paymentGateway: string;
  primaryGoal: string;
  cta: string;
  designStyle: string;
  coreSections: string;
  leadGeneration: string;
  socialProof: string;
  revisions: string;
};

export const webDevFeatureLabels: Record<keyof WebDevPlanFeatures, string> = {
  pageLimit: "Page Limit",
  paymentGateway: "Payment Gateway",
  primaryGoal: "Primary Goal",
  cta: "Call-to-Action",
  designStyle: "Design Style",
  coreSections: "Core Sections",
  leadGeneration: "Lead Generation",
  socialProof: "Social Proof",
  revisions: "Revisions",
};

export const webDevPlans: {
  name: string;
  price: string;
  features: WebDevPlanFeatures;
}[] = [
  {
    name: "Basic",
    price: "2,500",
    features: {
      pageLimit: "Up to 3 Pages",
      paymentGateway: "External Links Only",
      primaryGoal: "Essential Presence",
      cta: "Standard 'Buy Now'",
      designStyle: "High-Quality Template",
      coreSections: "Intro, Bio, Buy Links",
      leadGeneration: "N/A",
      socialProof: "Up to 2 Reviews",
      revisions: "2 Rounds",
    },
  },
  {
    name: "Premium",
    price: "3,500",
    features: {
      pageLimit: "5 – 7 Pages",
      paymentGateway: "Integrated Gateway",
      primaryGoal: "Direct Sales Hub",
      cta: "Optimized Conversion Buttons",
      designStyle: "Custom Themed Design",
      coreSections: "Basic + Reviews + Graphics",
      leadGeneration: "Email Sign-up Form",
      socialProof: "Up to 5 Reviews + Rating",
      revisions: "2 Rounds",
    },
  },
  {
    name: "Deluxe",
    price: "4,500",
    features: {
      pageLimit: "Up to 15 Pages",
      paymentGateway: "Full E-Commerce Suite",
      primaryGoal: "Professional Author Brand",
      cta: "Multi-Stage Engagement Funnel",
      designStyle: "Bespoke Visual Storytelling",
      coreSections: "Premium + Video + Excerpts",
      leadGeneration: "Lead Magnet / Free Chapter",
      socialProof: "Unlimited + Featured Press",
      revisions: "Unlimited",
    },
  },
];
