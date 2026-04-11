import {
  Book,
  BookOpen,
  Check,
  Globe,
  Link,
  MousePointer2Icon,
  Send,
  Target,
  UserRoundPen,
  Users,
  X,
} from "lucide-react";
import { useState } from "react";
import {
  emailFeatureLabels,
  emailPlans,
  type EmailMarketingPlanFeatures,
} from "../constants/email-marketing";
import { BacktoHomeButton } from "../shared/BackToHomeButton";
import { FeatureCard } from "../shared/FeaturedCard";

export const EmailMarketing = () => {
  const [activePlan, setActivePlan] = useState<string>("Premium");

  return (
    <div className="min-h-screen font-sans text-fg transition-colors duration-1000 pb-20">
      <header className="bg-surface border-b border-subtle py-20 px-6">
        <BacktoHomeButton />
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight">
            Direct-to-Reader{" "}
            <span className="text-purple-600 dark:text-purple-400">
              Discovery
            </span>
          </h1>
          <p className="mt-8 text-xl text-muted leading-relaxed max-w-2xl mx-auto">
            Email Marketing is one of the most effective ways to promote books
            directly to readers who are actively interested in discovering new
            titles. At BookMentor Global Promotions, our Email Marketing service
            helps authors reach targeted reader audiences through curated email
            campaigns designed specifically for book promotion. Instead of
            relying solely on organic discovery, email marketing allows authors
            to present their book directly to readers who subscribe to
            book-related content and recommendations.
          </p>
        </div>
      </header>
      {/* Features Grid */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          <FeatureCard
            icon={<Book className="w-7 h-7 text-purple-500" />}
            title="Book Title and Cover"
            desc="A visual presentation of the book to immediately capture attention."
          />
          <FeatureCard
            icon={<BookOpen className="w-7 h-7 text-purple-500" />}
            title="Book Description"
            desc="A brief and compelling summary designed to interest potential readers."
          />
          <FeatureCard
            icon={<UserRoundPen className="w-7 h-7 text-purple-500" />}
            title="Author Introduction"
            desc="A short section introducing the author and their background."
          />
          <FeatureCard
            icon={<Link className="w-7 h-7 text-purple-500" />}
            title="Direct Purchase Links"
            desc="Links directing readers to platforms where the book can be purchased."
          />
          <FeatureCard
            icon={<MousePointer2Icon className="w-7 h-7 text-purple-500" />}
            title="Call-to-Action"
            desc="Encouragement for readers to explore or purchase the book."
          />
          <FeatureCard
            icon={<Send className="w-7 h-7 text-purple-500" />}
            title="Strategic Approach"
            desc="Email marketing is a core pillar of a comprehensive promotion strategy. We ensure your book hits the inbox of those most likely to engage and share."
          />
          <FeatureCard
            icon={<Target className="w-7 h-7 text-purple-500" />}
            title="Purpose & Connection"
            desc="Connect directly with readers who actively follow book recommendations to increase visibility, reach targeted communities, and generate interest."
          />
          <FeatureCard
            icon={<Globe className="w-7 h-7 text-purple-500" />}
            title="Why It Works"
            desc="By leveraging curated newsletters, you introduce your work to new audiences, drive traffic to purchase platforms, and strengthen your overall strategy."
          />
          <FeatureCard
            icon={<Users className="w-7 h-7 text-purple-500" />}
            title="Ideal for Authors"
            desc="Perfect for those wanting to increase exposure outside their existing network and support efforts like social media and landing pages."
          />
        </div>

        <div className="mt-16 text-center text-xl text-muted leading-relaxed">
          <span className="block mb-4 font-bold text-fg uppercase tracking-widest text-lg">
            BookMentor Global Promotions Approach
          </span>
          <p className="mt-8 text-xl text-muted leading-relaxed">
            At BookMentor Global Promotions, our goal is to help authors
            maximize their book’s visibility through strategic marketing
            campaigns. Email marketing is often used alongside other promotional
            services such as Social Media Marketing and Landing Pages to create
            a more comprehensive promotion strategy. with this in mind create me
            a excel comparison for services basic, premium and deluxe, the main
            premise is that they have different number in reach, basic lets say
            4500, premium, 8000 contacts and 15000 for deluxe,
          </p>
        </div>
      </section>
      {/* Pricing Table */}
      <section className="bg-card py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-4xl font-bold italic tracking-tight text-fg">
              Email Marketing Tier Comparison
            </span>
            <p className="text-muted mt-4 text-lg">
              Select a plan to highlight details.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 items-stretch">
            {emailPlans.map((plan) => {
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
                    <h3 className="bg-purple-600 text-white text-center py-2 text-xl font-black uppercase tracking-widest text-fg">
                      {plan.name}
                    </h3>
                  )}

                  <div className="text-center p-10 border-b border-subtle">
                    {!isActive && (
                      <h3 className="text-xl font-black uppercase tracking-widest text-fg">
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
                          keyof EmailMarketingPlanFeatures,
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
                              {emailFeatureLabels[key]}
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
