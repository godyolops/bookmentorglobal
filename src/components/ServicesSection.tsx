import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    title: "Website Development",
    descriptions: {
      Basic:
        "Launch a clean, conversion-ready site with core pages, responsive layout, and clear calls to action.",
      Deluxe:
        "Add custom sections, stronger UX flow, and on-page SEO setup to improve visibility and lead capture.",
      Premium:
        "Build a high-performance website experience with advanced integrations, optimization, and growth-focused architecture.",
    },
    color: "#C084FC",
    img: "https://images.unsplash.com/photo-1546776310-eef45dd6d63c?w=800",
  },
  {
    title: "Email Marketing",
    descriptions: {
      Basic:
        "Set up foundational campaigns and simple automations to start nurturing leads consistently.",
      Deluxe:
        "Create segmented sequences with better copywriting and design to improve open and click-through rates.",
      Premium:
        "Run a full-funnel email system with lifecycle automations, A/B testing, and revenue-focused reporting.",
    },
    color: "#A855F7",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
  },
  {
    title: "Social Media Management",
    descriptions: {
      Basic:
        "Maintain a consistent posting schedule with branded content and basic engagement handling.",
      Deluxe:
        "Strengthen growth with strategic content planning, deeper community engagement, and performance reviews.",
      Premium:
        "Scale your social presence with campaign-led content, proactive community management, and KPI-driven optimization.",
    },
    color: "#94a3b8",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
  },
];

type TierName = "Basic" | "Deluxe" | "Premium";

const packageTiers = [
  { name: "Basic" as TierName, description: "Starter plan" },
  { name: "Deluxe" as TierName, description: "Scale support" },
  { name: "Premium" as TierName, description: "Full growth engine" },
];

const StackingSlider = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const [activeTier, setActiveTier] = useState<TierName>("Basic");

  // GSAP Stacking Logic
  useGSAP(
    () => {
      const cardsElements = gsap.utils.toArray<HTMLElement>(".card-item");

      gsap.set(cardsElements, (index: number) => ({
        y: index === 0 ? 0 : "100vh",
      }));

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: `+=${Math.max(1, cardsElements.length - 1) * 100}%`,
          pin: true,
          pinSpacing: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      cardsElements.forEach((card, index) => {
        if (index === 0) return;

        // 1. Slide the NEXT card up
        tl.fromTo(
          card,
          { y: "100vh" },
          { y: "0vh", duration: 1, ease: "none" },
          index, // Use index as a clean starting point
        );

        // 2. SCALE DOWN PREVIOUS CARD
        // We add "+=0.5" to the start time so the previous card
        // stays at 100% opacity until the new card is halfway up.
        tl.to(
          cardsElements[index - 1],
          {
            scale: 0.9,
            // Change brightness to 0.4 or similar for the 'stacked' look
            filter: "blur(2px) brightness(0.5)",
            duration: 0.5, // Faster duration for the 'exit'
            ease: "none",
          },
          index + 0.5, // <--- THE KEY: Delays the dimming
        );
      });
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef}>
      {/* Scroll Track */}
      <div
        ref={triggerRef}
        className="relative h-screen w-full overflow-hidden"
      >
        {cards.map((card, i) => (
          <div
            key={i}
            className="card-item absolute inset-0 flex items-center justify-center"
            style={{ zIndex: i }}
          >
            <div
              className="relative w-full max-w-7xl h-[500px] md:h-[650px] rounded-[2rem] md:rounded-[3.5rem] p-6 md:p-20 flex flex-col md:flex-row items-center justify-between shadow-2xl border border-white/10 overflow-visible"
              style={{ backgroundColor: card.color }}
            >
              {/* Content Side */}
              <div className="flex-1 space-y-5 md:space-y-8">
                <h2 className="text-2xl md:text-6xl font-black italic text-white leading-tight">
                  {card.title.split(" & ").map((line, idx) => (
                    <span key={idx} className="block">
                      {line}
                    </span>
                  ))}
                </h2>

                <div
                  className="flex flex-wrap gap-2"
                  role="tablist"
                  aria-label="Package tiers"
                >
                  {packageTiers.map((tier) => (
                    <button
                      type="button"
                      key={tier.name}
                      role="tab"
                      aria-selected={activeTier === tier.name}
                      onClick={() => setActiveTier(tier.name)}
                      className={`px-3 md:px-5 py-1.5 md:py-2 rounded-full border text-white text-[9px] md:text-[10px] leading-tight transition-all duration-300 ${
                        activeTier === tier.name
                          ? "border-white bg-white/25 shadow-lg font-extrabold"
                          : "border-white/20 bg-white/10 font-bold hover:bg-white/15"
                      }`}
                    >
                      <span className="block text-[10px] md:text-xs">
                        {tier.name}
                      </span>
                      <span className="block text-[8px] md:text-[9px] font-medium text-white/85">
                        {tier.description}
                      </span>
                    </button>
                  ))}
                </div>

                <p className="max-w-md text-white/90 text-sm md:text-lg font-medium leading-relaxed">
                  {card.descriptions[activeTier]}
                </p>
              </div>

              {/* Image Side */}
              <div className="relative flex-1 flex justify-end items-center mt-5 md:mt-0 h-full">
                <div className="relative group">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full max-w-[220px] md:max-w-[450px] aspect-square object-cover rounded-[1.25rem] md:rounded-[2.5rem] shadow-2xl rotate-2 group-hover:rotate-0 transition-transform duration-700"
                  />
                  {/* Pinned Arrow - Top Right of Image */}
                  <button className="absolute -top-3 -right-3 md:-top-6 md:-right-6 w-9 h-9 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center text-black shadow-2xl hover:scale-110 transition-transform z-30">
                    <ArrowUpRight size={18} className="md:w-8 md:h-8" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StackingSlider;
