import { useNavigate } from "react-router-dom";
import { Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react";

const SiteFooter = () => {
  const navigate = useNavigate();

  return (
    <footer className="border-t border-subtle bg-surface transition-colors duration-500">
      <div className="mx-auto max-w-7xl px-6 py-14 md:py-20">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-1 text-xl font-bold text-fg hover:opacity-80 transition-opacity"
            >
              <span>BookMentor</span>
              <span className="text-purple-600">Global</span>
            </button>
            <p className="text-sm text-muted leading-relaxed">
              Helping authors write, position, and launch books that change
              careers and industries worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xs font-black uppercase tracking-widest text-fg">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm text-muted">
              <li>
                <button
                  onClick={() => navigate("/")}
                  className="hover:text-purple-600 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/book-a-call")}
                  className="hover:text-purple-600 transition-colors"
                >
                  Book a Mentor Call
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-xs font-black uppercase tracking-widest text-fg">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-muted">
              <li>
                <a
                  href="tel:+15550101000"
                  className="inline-flex items-center gap-2 hover:text-purple-600 transition-colors"
                >
                  <Phone size={14} />
                  +1 555 010 1000
                </a>
              </li>
              <li>
                <a
                  href="mailto:admin@bookmentorglobal.com"
                  className="inline-flex items-center gap-2 hover:text-purple-600 transition-colors"
                >
                  <Mail size={14} />
                  admin@bookmentorglobal.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h3 className="text-xs font-black uppercase tracking-widest text-fg">
              Follow Us
            </h3>
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-subtle bg-[var(--color-bg)] text-fg hover:border-purple-600 hover:text-purple-600 transition-colors"
              >
                <Facebook size={15} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-subtle bg-[var(--color-bg)] text-fg hover:border-purple-600 hover:text-purple-600 transition-colors"
              >
                <Instagram size={15} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-subtle bg-[var(--color-bg)] text-fg hover:border-purple-600 hover:text-purple-600 transition-colors"
              >
                <Twitter size={15} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-subtle pt-8 text-xs text-muted sm:flex-row">
          <span>
            © {new Date().getFullYear()} BookMentor Global. All rights reserved.
          </span>
          <span>Built for authors who mean business.</span>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
