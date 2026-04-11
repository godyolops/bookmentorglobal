import { useNavigate } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import StatsSection from "./components/StatsSection";

const App: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <HeroSection />
      <StatsSection />
      <ServicesSection />

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
