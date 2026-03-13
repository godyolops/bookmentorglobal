import { motion, type Variants } from "framer-motion";

const words = [
  "editing",
  "publishing",
  "launch",
  "positioning",
  "visibility",
  "royalty growth",
];

const HeroSwitcher = () => {
  const marqueeVariants: Variants = {
    animate: {
      x: [0, "-50%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 25,
          ease: "linear",
        },
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative h-auto pt-32 md:pt-40 pb-16 md:pb-24 flex flex-col justify-center items-center transition-colors duration-500 overflow-hidden px-6"
    >
      <div className="flex flex-col items-center justify-center w-full">
        {/* Row 1: Heading + Side-Scrolling Pill */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-3 w-full">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[9rem] leading-[1.05] text-center text-fg">
            Book Mentor,
          </h1>
          <div className="inline-flex items-center rounded-full border border-purple-600/20 bg-icon-chip text-fg text-2xl sm:text-3xl md:text-5xl font-medium relative h-[40px] sm:h-[50px] md:h-[80px] w-[160px] sm:w-[200px] md:w-[280px] overflow-hidden">
            <motion.div
              className="flex whitespace-nowrap justify-center items-center"
              variants={marqueeVariants}
              animate="animate"
            >
              {/* Doubling the array for the infinite loop effect */}
              {[...words, ...words].map((word, idx) => (
                <div key={idx} className="flex items-center">
                  {/* 1. The Word */}
                  <span className="px-5">{word}</span>

                  {/* 2. The Separator Sparkle (Now moving infinitely) */}
                  <span className="text-2xl md:text-4xl">✦</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Row 2: Sparkle Icon + Tagline */}
        <div className="flex items-center justify-center gap-3 sm:gap-4">
          <span className="text-4xl sm:text-5xl md:text-7xl lg:text-[9rem] leading-[1.05] text-center text-fg">
            ✦
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[9rem] leading-[1.05] text-center text-fg">
            for global authors
          </h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSwitcher;
