import { useEffect, useState } from "react";
import { useDarkMode } from "../hooks/useDarkMode";
import { Menu, Moon, Sun } from "lucide-react";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
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
          max-w-[98%] mx-auto flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500
          ${
            isScrolled
              ? "bg-nav-glass backdrop-blur-xl border border-subtle shadow-xl"
              : "bg-transparent border-transparent shadow-none"
          }
        `}
      >
        {/* Logo */}
        <div className="flex items-center gap-1 font-bold text-xl text-fg">
          <span>BookMentor</span>
          <span className="text-[#9d48f0]">Global</span>
        </div>

        {/* Action Items */}
        <div className="flex items-center gap-4">
          <button className="hidden md:block bg-purple-600 hover:bg-purple-700 text-white text-[14px] font-bold px-6 py-3 rounded-full transition-all uppercase">
            Get Started
          </button>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-subtle bg-surface cursor-pointer hover:bg-purple-600/10 transition-colors"
          >
            {theme === "dark" ? (
              <Sun size={18} className="text-fg" />
            ) : (
              <Moon size={18} className="text-fg" />
            )}
          </button>

          <div className="cursor-pointer text-fg">
            <Menu size={24} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
