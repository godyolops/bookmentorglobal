export type TierName = "Basic" | "Deluxe" | "Premium";

export type ServiceCard = {
  title: string;
  color: string;
  img: string;
  descriptions?: Record<TierName, string>;
  description?: string;
  badgeLabel?: string;
  route?: string;
};

export const cards: ServiceCard[] = [
  {
    title: "60 Second Video",
    description:
      "Making of a 60-second video for publishing on YouTube or other video platforms of your choosing.",
    color: "#0ea5e9",
    img: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=900",
    route: "/sixty-second-video",
  },
  {
    title: "Website Development",
    descriptions: {
      Basic: "Website development with three informational pages.",
      Deluxe: "Website with three pages and an online checkout option.",
      Premium: "Website with online checkout and social media integration.",
    },
    color: "#C084FC",
    img: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&q=80&w=900",
    route: "/website-development",
  },
  {
    title: "Email Marketing",
    descriptions: {
      Basic: "Up to 4,500 contacts.",
      Deluxe: "Up to 8,000 contacts.",
      Premium: "Up to 15,000 contacts.",
    },
    color: "#A855F7",
    img: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=900",
    route: "/email-marketing",
  },
  {
    title: "Social Media Management",
    descriptions: {
      Basic:
        "Three platforms: posting, messaging, and inquiries; one-month plan.",
      Deluxe:
        "Five platforms: posting, messaging, and inquiries; one-month plan.",
      Premium: "Five platforms, with email marketing for 2,000 contacts.",
    },
    color: "#94a3b8",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=900",
    route: "/social-media-management",
  },
  {
    title: "Prestige Plan",
    description:
      "Combo bundle of all products: 60-second video, premium website development, email marketing, and Social Media Management.",
    badgeLabel: "Prestige Plan",
    color: "#f59e0b",
    img: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=900",
  },
];

export const packageTiers = [
  { name: "Basic" as TierName },
  { name: "Deluxe" as TierName },
  { name: "Premium" as TierName },
];

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

export const plans: SocialMediaPlan[] = [
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
