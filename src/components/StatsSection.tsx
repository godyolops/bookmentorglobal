import { useEffect, useRef, useState } from "react";

const stats = [
  { target: 50, suffix: "+", label: "Authors" },
  { target: 40, suffix: "+", label: "States" },
  { target: 10, suffix: "+", label: "Genres" },
  { target: 94, suffix: "%", label: "Goal Hit" },
];

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

const Stats = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [counts, setCounts] = useState(() => stats.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasAnimated) return;

    const duration = 1600;
    const start = performance.now();
    let frameId = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = easeOutCubic(progress);

      setCounts(stats.map((item) => Math.round(item.target * eased)));

      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frameId);
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} className="py-24 border-y border-subtle">
      <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-between gap-12">
        {stats.map((item, index) => (
          <div
            key={item.label}
            className="flex-1 min-w-[150px] border-l border-subtle pl-8"
          >
            <div className="text-5xl text-[#9d48f0] font-black mb-1">
              {counts[index]}
              {item.suffix}
            </div>
            <div className="text-muted text-[10px] font-bold">{item.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
