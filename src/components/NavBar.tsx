import { Menu, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { useDarkMode } from "../hooks/useDarkMode";

const NavBar = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useDarkMode();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-[100] px-4 md:px-8 py-4 transition-all duration-300">
      <div
        className={`
          max-w-[98%] mx-auto flex items-center justify-between px-4 md:px-6 py-2 md:py-3 rounded-full transition-all duration-500
          ${
            isScrolled
              ? "bg-nav-glass backdrop-blur-xl border border-subtle shadow-xl"
              : "bg-transparent border-transparent shadow-none"
          }
        `}
      >
        {/* Logo */}
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 font-bold text-lg md:text-xl text-fg hover:opacity-80 transition-opacity whitespace-nowrap"
        >
          <img
            src={logo}
            alt="BookMentor Global logo"
            className="h-12 w-12 md:h-16 md:w-16 object-contain"
          />
          <div className="h-12 md:h-16 flex items-center leading-none">
            <span>
              BookMentor <span className="text-[#9d48f0]">Global</span>
            </span>
          </div>
        </button>

        {/* Action Items */}
        <div className="flex items-center gap-2 md:gap-4">
          <button
            onClick={() => navigate("/book-a-call")}
            className="hidden md:block bg-purple-600 hover:bg-purple-700 text-white text-[14px] font-bold px-6 py-3 rounded-full transition-all uppercase whitespace-nowrap"
          >
            Get Started
          </button>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-subtle bg-surface cursor-pointer hover:bg-purple-600/10 transition-colors flex-shrink-0"
          >
            {theme === "dark" ? (
              <Sun size={18} className="text-fg" />
            ) : (
              <Moon size={18} className="text-fg" />
            )}
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden cursor-pointer text-fg hover:opacity-80 transition-opacity"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden max-w-[98%] mx-auto bg-nav-glass backdrop-blur-xl rounded-b-lg shadow-xl animate-in fade-in duration-200 overflow-hidden">
          <button
            onClick={() => {
              navigate("/book-a-call");
              setIsMobileMenuOpen(false);
            }}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 transition-all font-bold uppercase"
          >
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
