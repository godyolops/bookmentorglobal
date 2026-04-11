import {
  Calendar,
  CheckCircle2,
  Eye,
  MousePointer2Icon,
  PlayCircle,
  Videotape,
} from "lucide-react";
import ImageAds from "../assets/video.png";
import { BacktoHomeButton } from "../shared/BackToHomeButton";

export const SixtySecondVideo = () => {
  const detailedFeatures = [
    {
      icon: <Videotape className="w-7 h-7 text-purple-500" />,
      title: "60-Second Custom Video",
      desc: "A custom-made video ad of your book featuring high-quality production and a professional voice-over to capture reader interest.",
    },
    {
      icon: <Eye className="w-7 h-7 text-purple-500" />,
      title: "350,000 YouTube Views",
      desc: "Your video ad shown 350,000 times on YouTube, targeting an engaged and captive audience on the world's biggest video platform.",
    },
  ];

  return (
    <div className="min-h-screen font-sans text-fg transition-colors duration-1000 pb-20">
      {/* Hero Section */}
      <header className="bg-surface border-b border-subtle py-20 px-6">
        <BacktoHomeButton />

        <div className="max-w-4xl mx-auto text-center">
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight">
            Captivate Readers with{" "}
            <span className="text-purple-600 dark:text-purple-400">
              60-Second Video Marketing
            </span>
          </h1>
          <p className="mt-8 text-xl text-muted leading-relaxed max-w-2xl mx-auto">
            Leverage the power of the world's biggest video platform to turn
            scrollers into buyers with high-impact YouTube advertising.
          </p>
        </div>
      </header>

      {/* Main Content & Pricing Card */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        {/* Added items-stretch to force columns to equal height */}
        <div className="grid lg:grid-cols-2 gap-16 items-stretch">
          {/* Left Column */}
          <div className="flex flex-col">
            <div className="mb-10">
              <p className="text-lg text-muted leading-relaxed">
                With over two billion monthly visitors, YouTube has become a
                staple in our daily lives. Promoting your book through short
                video ads gets your work the attention of an engaged audience on
                the biggest online video platform in the world.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 flex-grow">
              {detailedFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="p-8 bg-card rounded-3xl border border-subtle hover:border-purple-500/50 transition-colors group h-full"
                >
                  <div className="bg-icon-chip w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Video Package Card */}
          <div className="relative">
            {/* lg:sticky and h-full ensures the card fills the available 
        vertical space of the parent grid while staying sticky 
      */}
            <div className="lg:sticky lg:top-24 h-full flex flex-col justify-between bg-surface rounded-[3rem] p-10 md:p-12 border border-subtle shadow-2xl shadow-purple-500/10 overflow-hidden">
              {/* Decorative Play Icon */}
              <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
                <PlayCircle size={120} />
              </div>

              {/* Top Content Group */}
              <div>
                <h3 className="text-2xl font-black uppercase tracking-widest text-muted">
                  The Video Package
                </h3>

                <div className="mt-6 flex items-baseline">
                  <span className="text-6xl font-extrabold tracking-tight text-fg">
                    $5,199
                  </span>
                  <span className="ml-1 text-2xl font-semibold text-muted">
                    .00
                  </span>
                </div>

                <ul className="mt-10 space-y-6">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-purple-500 mr-3 shrink-0 mt-0.5" />
                    <span className="italic text-fg font-medium">
                      Custom banner of your book that links to the ordering page
                      and displayed alongside your video ad (for desktop)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Calendar className="w-6 h-6 text-purple-500 mr-3 shrink-0 mt-0.5" />
                    <span className="italic text-fg font-medium">
                      30 days running ad
                    </span>
                  </li>
                  <li className="flex items-start">
                    <MousePointer2Icon className="w-6 h-6 text-purple-500 mr-3 shrink-0 mt-0.5" />
                    <span className="italic text-fg font-medium">
                      With CTA (call to action) that would route the customers
                      to the desired landing page to purchase
                    </span>
                  </li>
                </ul>
              </div>

              {/* This pushes the button to the bottom if the card is extra tall */}
              <div className="mt-12">
                <button className="w-full py-5 px-8 rounded-2xl font-black text-xl bg-contrast text-contrast shadow-xl hover:scale-[1.02] transition-transform">
                  Get Started Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Landscape Info Section (Matching your Footer Card style) */}
      <section className="pt-16 px-6 max-w-5xl mx-auto text-center">
        <div className="p-12 md:p-16 rounded-[3rem] shadow-2xl relative overflow-hidden transition-colors duration-1000">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 italic tracking-tight">
            Here's how a 60-sec ad will look like on a desktop.
          </h3>
          <img
            src={ImageAds}
            alt="Video Ad Preview"
            // Use className for styling instead of width/height props if you want responsiveness
            className="mx-auto rounded-2xl shadow-lg w-full max-w-[800px] h-auto"
          />
        </div>
      </section>
    </div>
  );
};
