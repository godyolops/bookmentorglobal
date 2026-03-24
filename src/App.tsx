import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Target, Mail, Palette, ExternalLink } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import HeroSection from "./components/HeroSection";
import StatsSection from "./components/StatsSection";
import ServicesSection from "./components/ServicesSection";

// --- Types ---
interface ServiceProps {
  icon: LucideIcon;
  title: string;
  desc: string;
}

interface Project {
  title: string;
  category: string;
  image: string;
}

const ProjectCard: React.FC<Project> = ({ title, category, image }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="group relative aspect-[16/11] sm:aspect-[4/5] overflow-hidden rounded-2xl sm:rounded-3xl bg-card cursor-pointer"
  >
    <img
      src={image}
      alt={title}
      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-5 sm:p-8">
      <span className="text-purple-400 text-xs font-bold mb-2">{category}</span>
      <h3 className="text-white text-xl sm:text-3xl font-black flex items-center gap-2 sm:gap-3">
        {title} <ExternalLink size={18} className="sm:w-5 sm:h-5" />
      </h3>
    </div>
  </motion.div>
);

const ServiceCard: React.FC<ServiceProps> = ({ icon: Icon, title, desc }) => (
  <motion.div
    whileHover={{ y: -12 }}
    className="p-6 md:p-12 border border-subtle rounded-[2rem] md:rounded-[2.5rem] bg-surface shadow-sm hover:shadow-2xl transition-all group"
  >
    <div className="w-16 h-16 bg-icon-chip text-purple-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-500">
      <Icon size={32} />
    </div>
    <h3 className="text-2xl font-black mb-4 text-fg">{title}</h3>
    <p className="text-muted leading-relaxed mb-8 text-lg">{desc}</p>
    <div className="inline-flex items-center gap-2 font-black text-xs group-hover:text-purple-600 transition-colors cursor-pointer text-fg">
      View Details <ArrowRight size={14} />
    </div>
  </motion.div>
);

const App: React.FC = () => {
  const navigate = useNavigate();

  const projects: Project[] = [
    {
      title: "The Debut Blueprint",
      category: "Author Positioning",
      image:
        "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Founder to Author",
      category: "Ghostwriting",
      image:
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Global Launch Playbook",
      category: "Book Marketing",
      image:
        "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800",
    },
  ];

  return (
    <div>
      <HeroSection />
      <StatsSection />
      <ServicesSection />

      {/* Portfolio Grid */}
      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 md:mb-20">
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-black mb-6">
              Author Success Stories
            </h2>
            <div className="h-2 w-24 bg-purple-600 rounded-full" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((p, i) => (
              <ProjectCard key={i} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
            <ServiceCard
              icon={Target}
              title="Author Positioning"
              desc="Define your unique author voice, audience, and market angle before you publish."
            />
            <ServiceCard
              icon={Mail}
              title="Manuscript Mentoring"
              desc="Get chapter-level feedback, story flow guidance, and a clear editing roadmap."
            />
            <ServiceCard
              icon={Palette}
              title="Launch Campaigns"
              desc="Build pre-launch buzz, review momentum, and post-launch visibility that lasts."
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 md:py-32 px-6 text-center border-t border-subtle">
        <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-8 md:mb-12">
          Ready to promote <br />{" "}
          <span className="text-purple-600 underline">with confidence</span>.
        </h2>
        <button
          onClick={() => navigate("/book-a-call")}
          className="bg-contrast text-contrast px-8 py-5 md:px-16 md:py-8 rounded-full font-black text-base md:text-xl hover:bg-purple-600 hover:text-white transition-all"
        >
          BOOK A MENTOR CALL
        </button>
      </footer>
    </div>
  );
};

export default App;
