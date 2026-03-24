import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    title: "Author Positioning Lab",
    description:
      "Clarify your audience, message, and category so your book stands out before launch day.",
    color: "#C084FC",
    img: "https://images.unsplash.com/photo-1546776310-eef45dd6d63c?w=800",
  },
  {
    title: "Manuscript & Market",
    description:
      "Bridge writing and promoting strategy with practical mentoring from draft to distribution.",
    color: "#A855F7",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
  },
  {
    title: "Launch & PR Engine",
    description:
      "Execute a launch plan with content, outreach, and visibility tactics tailored to your genre.",
    color: "#94a3b8",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
  },
];

const StackingSlider = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

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
              className="relative w-full max-w-7xl h-[550px] md:h-[650px] rounded-[3.5rem] p-10 md:p-20 flex flex-col md:flex-row items-center justify-between shadow-2xl border border-white/10 overflow-visible"
              style={{ backgroundColor: card.color }}
            >
              {/* Content Side */}
              <div className="flex-1 space-y-8">
                <h2 className="text-4xl md:text-6xl font-black italic text-white">
                  {card.title.split(" & ").map((line, idx) => (
                    <span key={idx} className="block">
                      {line}
                    </span>
                  ))}
                </h2>

                <div className="flex flex-wrap gap-2">
                  {["Mentoring", "Promoting", "Visibility"].map((tag) => (
                    <span
                      key={tag}
                      className="px-5 py-2 rounded-full border border-white/20 bg-white/10 text-white text-[10px] font-bold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="max-w-md text-white/90 text-lg font-medium leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* Image Side */}
              <div className="relative flex-1 flex justify-end items-center mt-10 md:mt-0 h-full">
                <div className="relative group">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full max-w-[450px] aspect-square object-cover rounded-[2.5rem] shadow-2xl rotate-2 group-hover:rotate-0 transition-transform duration-700"
                  />
                  {/* Pinned Arrow - Top Right of Image */}
                  <button className="absolute -top-6 -right-6 w-16 h-16 bg-white rounded-full flex items-center justify-center text-black shadow-2xl hover:scale-110 transition-transform z-30">
                    <ArrowUpRight size={32} />
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
