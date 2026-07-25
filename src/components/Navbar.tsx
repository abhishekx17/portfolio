import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, MoonStar, Sparkles, X } from "lucide-react";
import { navLinks, personalInfo } from "../data/portfolio";
import { useScrollProgress } from "../hooks/useScrollProgress";
import { useTheme } from "../hooks/useTheme";
import { smoothEase } from "../lib/motion";
import { Logo } from "./Logo";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const progress = useScrollProgress();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ["about", "stack", "projects", "contact"];
      const current = sections.find((sec) => {
        const el = document.getElementById(sec);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });
      if (current) setActiveSection(`#${current}`);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: smoothEase }}
        className="fixed top-0 left-0 right-0 z-40 flex justify-center px-4 pt-4 pb-2"
      >
        <div
          className={`w-full max-w-5xl rounded-full transition-all duration-300 ${
            scrolled
              ? "bg-surface/90 backdrop-blur-xl border border-border shadow-lg py-2.5 px-6"
              : "bg-surface/50 backdrop-blur-md border border-border/60 py-3 px-6"
          }`}
        >
          {/* Top scroll progress indicator */}
          <div
            className="absolute top-0 left-8 right-8 h-0.5 bg-accent/40 origin-left transition-transform duration-150 rounded-full"
            style={{ width: `${progress * 100}%` }}
          />

          <nav className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#"
              className="group flex items-center gap-2.5 hover:opacity-90 transition-opacity"
              aria-label="Home"
            >
              <Logo className="h-8 w-8 text-accent" />
              <span className="font-display font-bold text-base text-ink tracking-tight">
                {personalInfo.name}<span className="text-accent">.</span>
              </span>
            </a>

            {/* Desktop Nav Items - Clean Text Only (No Icons) */}
            <ul className="hidden md:flex items-center gap-1 bg-surface-elevated/60 border border-border/60 rounded-full px-3 py-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href;

                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className={`relative flex items-center rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide transition-all duration-300 ${
                        isActive
                          ? "text-ink bg-surface border border-border shadow-xs font-bold"
                          : "text-ink-muted hover:text-ink hover:bg-surface/60"
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* Right Action Controls */}
            <div className="flex items-center gap-2.5">
              {/* Theme Toggle Switcher */}
              <motion.button
                whileTap={{ scale: 0.92 }}
                onClick={toggleTheme}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-ink hover:border-accent/50 hover:bg-surface-elevated transition-all duration-300 shadow-xs"
                aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
                title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {theme === "dark" ? (
                    <motion.div
                      key="sparkles"
                      initial={{ scale: 0.5, rotate: -45, opacity: 0 }}
                      animate={{ scale: 1, rotate: 0, opacity: 1 }}
                      exit={{ scale: 0.5, rotate: 45, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Sparkles className="h-4 w-4 text-accent" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="moonstar"
                      initial={{ scale: 0.5, rotate: 45, opacity: 0 }}
                      animate={{ scale: 1, rotate: 0, opacity: 1 }}
                      exit={{ scale: 0.5, rotate: -45, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <MoonStar className="h-4 w-4 text-ink-muted hover:text-ink" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>

              {/* GitHub Button */}
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-semibold text-ink hover:border-border-strong hover:bg-surface-elevated transition-all duration-300 shadow-xs"
              >
                GitHub
                <ArrowUpRight className="h-3 w-3" />
              </a>

              {/* Mobile Hamburger */}
              <button
                type="button"
                onClick={() => setMobileOpen(true)}
                className="md:hidden p-1.5 text-ink hover:text-accent transition-colors"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-10%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-10%" }}
            transition={{ duration: 0.3, ease: smoothEase }}
            className="fixed inset-0 z-50 bg-primary/98 backdrop-blur-2xl md:hidden flex flex-col justify-between p-6"
          >
            <div className="flex items-center justify-between">
              <Logo className="h-9 w-9 text-accent" />
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="p-2 text-ink hover:text-accent transition-colors"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <motion.ul className="flex flex-col gap-5 my-auto">
              {navLinks.map((link) => (
                <motion.li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block font-display text-4xl font-extrabold text-ink hover:text-accent transition-colors py-1"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </motion.ul>

            <div className="flex gap-3 pt-6 border-t border-border">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center rounded-full border border-border bg-surface text-ink py-3 text-sm font-semibold hover:border-accent transition-colors"
              >
                GitHub
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center rounded-full bg-surface-elevated border border-border text-ink py-3 text-sm font-semibold hover:border-accent transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
