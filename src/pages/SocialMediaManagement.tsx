import {
  BookOpen,
  Check,
  Hash,
  Image,
  PenTool,
  Target,
  Users,
  X,
} from "lucide-react";
import { useState } from "react";

import {
  featureLabels,
  socialMediaPlans,
  type SocialMediaPlanFeatures,
} from "../constants/social-media";
import { BacktoHomeButton } from "../shared/BackToHomeButton";
import { FeatureCard } from "../shared/FeaturedCard";

export const SocialMediaManagement = () => {
  const [activePlan, setActivePlan] = useState<string>("Premium");

  return (
    <div className="min-h-screen font-sans text-fg transition-colors duration-1000 pb-20">
      {/* Hero Section */}
      <header className="bg-surface border-b border-subtle py-20 px-6">
        <BacktoHomeButton />
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight">
            Are you ready to turn your book into a{" "}
            <span className="text-purple-600 dark:text-purple-400">
              buzz-worthy phenomenon?
            </span>
          </h1>
          <p className="mt-8 text-xl text-muted leading-relaxed max-w-2xl mx-auto">
            Our 30-Day Social Media Content Plan service provides everything you
            need to create a powerful, engaging, and cohesive social media
            presence that builds buzz and attracts readers. Perfect for authors
            looking to make a significant impact online, this plan includes the
            Social Media Strategy and ready-to-post content for every day of
            your launch month—graphics, captions, and more—all designed to
            maximize your book's reach and engagement.
          </p>
        </div>
      </header>

      {/* Features Grid */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          <FeatureCard
            icon={<Target className="w-7 h-7 text-purple-500" />}
            title="Weekly Objectives"
            desc="Each week has a dedicated goal, carefully timed to match your launch timeline. From building initial awareness to creating urgency as the launch date approaches, we set clear, achievable objectives to keep your audience engaged and interested at every stage"
          />
          <FeatureCard
            icon={<Image className="w-7 h-7 text-purple-500" />}
            title="Daily Content Ideas + Ready-to-Post Graphics"
            desc="You'll receive a high-quality, custom-designed graphic that aligns with your book's branding and appeals to your target audience for each day for the 30 days. From quote cards to teaser images, every visual is crafted to grab attention in the feed."
          />
          <FeatureCard
            icon={<PenTool className="w-7 h-7 text-purple-500" />}
            title="Engaging Post Descriptions"
            desc="Say goodbye to writer's block with fully written captions for each post. Each caption is tailored to prompt engagement, spark curiosity, and build a connection with your followers."
          />
          <FeatureCard
            icon={<BookOpen className="w-7 h-7 text-purple-500" />}
            title="Excerpts & Teasers"
            desc="Share the most compelling parts of your book to draw readers in. We'll help you choose the best excerpts to post and provide graphics to showcase these snippets in a way that creates intrigue and excitement."
          />
          <FeatureCard
            icon={<Hash className="w-7 h-7 text-purple-500" />}
            title="Curated Hashtags & Caption Prompts"
            desc="Reach the right readers with targeted hashtag recommendations that increase your visibility on each platform. Plus, we provide prompts and tips for customizing your captions."
          />
          <FeatureCard
            icon={<Users className="w-7 h-7 text-purple-500" />}
            title="Engagement Tips"
            desc="We go beyond posting to help you connect with your audience. Each day includes a quick engagement strategy, like responding to comments or asking questions, to build stronger relationships."
          />
        </div>

        <div className="mt-16 text-center text-xl text-muted leading-relaxed">
          <span className="block mb-4 font-bold text-fg uppercase tracking-widest text-lg">
            Why Choose Our Done-For-You 30-Day Social Media Content Plan?
          </span>
          <p className="mt-8 text-xl text-muted leading-relaxed">
            Building an online presence that does justice to your book takes
            time, creativity, and social media savvy. Our 30-Day Social Media
            Content Plan takes the guesswork out of your book launch, providing
            you with fully designed, ready-to-post content and strategic
            guidance so you can focus on what you do best—writing! This service
            is ideal for authors who want a cohesive, professional social media
            presence without having to create each post from scratch. Let us
            help you turn your book launch into a successful social media
            campaign that captivates readers, sparks conversation, and drives
            sales. With our 30-Day Social Media Content Plan, you'll have
            everything you need to make a splash on social media—all prepped,
            planned, and ready to go.
          </p>
        </div>
        <div className="text-center mt-16 shadow-2xl relative">
          <h3 className="text-3xl md:text-4xl font-bold mb-6 italic tracking-tight">
            The 2026 Social Media Landscape
          </h3>

          <p className="text-xl leading-relaxed font-light max-w-3xl mx-auto">
            <span className="block mb-4 font-bold not-italic text-purple-400 uppercase tracking-widest text-sm">
              What You Need to Know 2026
            </span>
            Facebook remains the world’s largest social media platform, with
            2.11 billion daily active users and over 3.2 billion monthly users
            worldwide. In the US, 71% of adults are Facebook users, maintaining
            a steady majority. However, YouTube now holds the highest overall
            reach in the US, used by 84% of adults. Instagram has seen explosive
            growth, reaching 3 billion monthly active users globally, with 50%
            of the US adult population now active on the platform.
          </p>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="bg-card py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-4xl font-bold italic tracking-tight text-fg">
              30-Day Social Media Content Plan – Package Comparison
            </span>
            <p className="text-muted mt-4 text-lg">
              Select a plan to highlight details.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 items-stretch">
            {socialMediaPlans.map((plan) => {
              const isActive = activePlan === plan.name;
              return (
                <div
                  key={plan.name}
                  onClick={() => setActivePlan(plan.name)}
                  className={`relative rounded-3xl overflow-hidden flex flex-col cursor-pointer transition-all duration-500 transform min-h-[750px] 
                    ${
                      isActive
                        ? "bg-surface ring-8 ring-purple-500 scale-105 z-10 shadow-2xl shadow-purple-500/20"
                        : "bg-surface/50 hover:scale-[1.02] border border-subtle opacity-80"
                    }`}
                >
                  {isActive && (
                    <div className="bg-purple-600 text-white text-center py-2 text-xl font-black uppercase tracking-widest text-fg">
                      {plan.name}
                    </div>
                  )}

                  <div className="text-center p-10 border-b border-subtle">
                    {!isActive && (
                      <h3 className="text-2xl font-black uppercase tracking-widest text-fg">
                        {plan.name}
                      </h3>
                    )}
                    <div className="mt-6">
                      <span className="text-5xl font-extrabold tracking-tight text-fg">
                        ${plan.price}
                      </span>
                      <span className="ml-1 text-2xl font-semibold text-muted">
                        .00
                      </span>
                    </div>
                  </div>

                  <div className="p-10 flex-grow">
                    <ul className="space-y-6">
                      {(
                        Object.entries(plan.features) as [
                          keyof SocialMediaPlanFeatures,
                          string | boolean,
                        ][]
                      ).map(([key, value]) => (
                        <li key={key} className="flex items-start text-base">
                          {value === false ? (
                            <X className="w-6 h-6 text-muted opacity-40 mr-4 shrink-0 mt-0.5" />
                          ) : (
                            <Check className="w-6 h-6 text-purple-500 mr-4 shrink-0 mt-0.5" />
                          )}

                          {/* Added min-h-[44px] to ensure items with/without subtext align */}
                          <div
                            className={`min-h-[44px] flex flex-col justify-center ${
                              value === false
                                ? "text-muted opacity-50"
                                : "text-fg"
                            }`}
                          >
                            <span className="font-bold leading-tight">
                              {featureLabels[key]}
                            </span>

                            {/* Render the p tag even if empty or use a fixed height container */}
                            {typeof value === "string" ? (
                              <p className="text-sm opacity-80 mt-1 font-medium italic leading-none">
                                {value}
                              </p>
                            ) : (
                              /* This empty div maintains spacing for boolean (true/false) items */
                              <div className="h-4" />
                            )}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
