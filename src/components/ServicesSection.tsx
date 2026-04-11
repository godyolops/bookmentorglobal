import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { cards } from "../constants/services";

gsap.registerPlugin(ScrollTrigger);

const StackingSlider = () => {
  const navigate = useNavigate();
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
          index,
        );

        // 2. SCALE DOWN PREVIOUS CARD
        tl.to(
          cardsElements[index - 1],
          {
            scale: 0.9,
            filter: "blur(2px) brightness(0.5)",
            duration: 0.5,
            ease: "none",
          },
          index + 0.5,
        );
      });
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef}>
      <div
        ref={triggerRef}
        className="relative h-screen w-full overflow-hidden"
      >
        {cards.map((card, i) => (
          <div
            key={i}
            className="card-item absolute inset-0 flex items-center justify-center cursor-pointer"
            style={{ zIndex: i }}
            onClick={() => navigate(card.route || "/")}
          >
            <div
              className="relative w-full max-w-6xl h-[400px] md:h-[550px] rounded-[2rem] md:rounded-[3.5rem] p-6 md:p-20 flex flex-col md:flex-row items-center justify-between shadow-2xl border border-white/10 overflow-visible"
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

                {card.badgeLabel && (
                  <div className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-4 py-2 text-[10px] md:text-xs font-extrabold uppercase tracking-wide text-white">
                    {card.badgeLabel}
                  </div>
                )}

                <p className="max-w-md text-white/90 text-sm md:text-lg font-medium leading-relaxed">
                  {card.description}
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
                  {/* Pinned Arrow */}
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
