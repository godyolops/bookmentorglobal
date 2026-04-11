export type EmailMarketingPlanFeatures = {
  audienceReach: string;
  audienceTargeting: string;
  emailDesign: string;
  authorSpotlight: string;
  cta: string;
  campaignFrequency: string;
  reporting: string;
  placement: string;
};

export const emailFeatureLabels: Record<
  keyof EmailMarketingPlanFeatures,
  string
> = {
  audienceReach: "Audience Reach",
  audienceTargeting: "Audience Targeting",
  emailDesign: "Email Design",
  authorSpotlight: "Author Spotlight",
  cta: "CTAs",
  campaignFrequency: "Campaign Frequency",
  reporting: "Reporting",
  placement: "Placement",
};

export const emailPlans: {
  name: string;
  price: string;
  features: EmailMarketingPlanFeatures;
}[] = [
  {
    name: "Basic",
    price: "5,000",
    features: {
      audienceReach: "4,500 Contacts",
      audienceTargeting: "General Book Lovers",
      emailDesign: "Standard Template",
      authorSpotlight: "Short Bio",
      cta: "Single Purchase Link",
      campaignFrequency: "Triple Blast",
      reporting: "Basic (Open Rates)",
      placement: "Standard Queue",
    },
  },
  {
    name: "Premium",
    price: "7,000",
    features: {
      audienceReach: "8,000 Contacts",
      audienceTargeting: "Genre-Specific Segments",
      emailDesign: "Custom Branded Layout",
      authorSpotlight: "Multiple Platform Links",
      cta: "Enhanced Links",
      campaignFrequency: "Triple Blast + 2 Reminder",
      reporting: "Detailed (Clicks & Opens)",
      placement: "Priority Scheduling",
    },
  },
  {
    name: "Deluxe",
    price: "10,000",
    features: {
      audienceReach: "15,000 Contacts",
      audienceTargeting:
        "High-Engagement Readers Including: Book Reviewers, Critiques, and Traditional Publishers connected",
      emailDesign: "Premium Interactive Design",
      authorSpotlight: "Full Profile + Photo",
      cta: "Direct Buy + Social Media + Website Links",
      campaignFrequency:
        "C4-Part Campaign Series with 2 reminder and 2 follow-ups",
      reporting: "Full Analytics + Heatmaps",
      placement: "Featured 'Book of the Week'",
    },
  },
];
