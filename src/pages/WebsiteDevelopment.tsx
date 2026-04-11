import { Check, X } from "lucide-react";
import { useState } from "react";
import {
  webDevFeatureLabels,
  webDevPlans,
  type WebDevPlanFeatures,
} from "../constants/web-development";
import { BacktoHomeButton } from "../shared/BackToHomeButton";

export const WebsiteDevelopment = () => {
  const [activePlan, setActivePlan] = useState<string>("Premium");

  return (
    <div className="min-h-screen font-sans text-fg transition-colors duration-1000 pb-20">
      <header className="bg-surface border-b border-subtle py-20 px-6">
        <BacktoHomeButton />
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight">
            Strategic{" "}
            <span className="text-purple-600 dark:text-purple-400">
              Web Platforms
            </span>
          </h1>
          <p className="mt-8 text-xl text-muted leading-relaxed max-w-2xl mx-auto">
            A landing page acts as your book’s digital headquarters. While
            social media posts disappear in a feed and emails can be archived, a
            landing page is a permanent, polished destination designed for one
            thing: converting a curious visitor into a loyal reader. By
            streamlining the "path to purchase," BookMentor Global Promotions
            ensures that readers aren't distracted by external links, but are
            instead guided through the story, the author's brand, and directly
            to the checkout button.
          </p>
        </div>
      </header>

      {/* Pricing Table */}
      <section className="bg-card py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-4xl font-bold italic tracking-tight text-fg">
              Website Development Tier Comparison
            </span>
            <p className="text-muted mt-4 text-lg">
              Select a plan to highlight details.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 items-stretch">
            {webDevPlans.map((plan) => {
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
                          keyof WebDevPlanFeatures,
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
                              {webDevFeatureLabels[key]}
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
