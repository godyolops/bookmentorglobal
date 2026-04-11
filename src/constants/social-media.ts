// Social Media
export type SocialMediaPlanFeatures = {
  contentPlan30Day: boolean;
  weeklyObjectives: string;
  dailyContentIdeas: boolean;
  readyToPostGraphics: string;
  captions: string;
  excerptsAndTeasers: string | boolean;
  hashtagResearch: string;
  captionPrompts: string | boolean;
  engagementTips: string | boolean;
  platformOptimization: string;
  revisions: string;
  turnaroundTime: string; // New
  bonus: string | boolean; // New
  strategyCall: boolean; // New
};

type SocialMediaPlan = {
  name: string;
  price: string;
  featured?: boolean;
  features: SocialMediaPlanFeatures;
};

// Helper to map camelCase keys to Human Readable labels for the UI
export const featureLabels: Record<keyof SocialMediaPlanFeatures, string> = {
  contentPlan30Day: "30-Day Content Plan",
  weeklyObjectives: "Weekly Objectives",
  dailyContentIdeas: "Daily Content Ideas",
  readyToPostGraphics: "Ready-to-Post Graphics",
  captions: "Captions",
  excerptsAndTeasers: "Excerpts & Teasers",
  hashtagResearch: "Hashtag Research",
  captionPrompts: "Caption Prompts",
  engagementTips: "Engagement Tips",
  platformOptimization: "Platform Optimization",
  revisions: "Revisions",
  turnaroundTime: "Turnaround Time",
  bonus: "Bonus",
  strategyCall: "1:1 Strategy Call",
};

export const socialMediaPlans: SocialMediaPlan[] = [
  {
    name: "Basic",
    price: "4,999",
    features: {
      contentPlan30Day: true,
      weeklyObjectives: "Standard",
      dailyContentIdeas: true,
      readyToPostGraphics: "15 Graphics",
      captions: "15 Captions",
      excerptsAndTeasers: false,
      hashtagResearch: "Basic",
      captionPrompts: false,
      engagementTips: false,
      platformOptimization: "1 Platform",
      revisions: "1 Revision",
      turnaroundTime: "7-10 Days",
      bonus: false,
      strategyCall: false,
    },
  },
  {
    name: "Premium",
    price: "5,999",
    featured: true,
    features: {
      contentPlan30Day: true,
      weeklyObjectives: "Detailed",
      dailyContentIdeas: true,
      readyToPostGraphics: "30 Graphics",
      captions: "30 Captions",
      excerptsAndTeasers: "Basic Selection",
      hashtagResearch: "Targeted",
      captionPrompts: true,
      engagementTips: true,
      platformOptimization: "Up to 3 Platforms",
      revisions: "2 Revisions",
      turnaroundTime: "5 Days",
      bonus: "Content Posting Tips",
      strategyCall: false,
    },
  },
  {
    name: "Deluxe",
    price: "6,499",
    features: {
      contentPlan30Day: true,
      weeklyObjectives: "Advanced + Call",
      dailyContentIdeas: true,
      readyToPostGraphics: "30 Premium (Branded)",
      captions: "30 High-Converting",
      excerptsAndTeasers: "Strategic & Optimized",
      hashtagResearch: "Advanced Strategy",
      captionPrompts: "Plus Personalization Guide",
      engagementTips: "Advanced Strategy",
      platformOptimization: "Multi-Platform",
      revisions: "Unlimited",
      turnaroundTime: "3–5 Days (Priority)",
      bonus: "Launch Checklist + Posting Guide",
      strategyCall: true,
    },
  },
];
