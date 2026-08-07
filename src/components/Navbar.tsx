import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, personalInfo } from "../data/portfolio";
import { useScrollProgress } from "../hooks/useScrollProgress";
import { smoothEase, springTransition } from "../lib/motion";
import { SocialIcons } from "./icons/SocialIcons";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const progress = useScrollProgress();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 25);

      const sections = ["home", "about", "projects", "contact"];
      const current = sections.find((sec) => {
        const el = document.getElementById(sec);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 240 && rect.bottom >= 200;
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
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: smoothEase }}
        className="fixed top-0 left-0 right-0 z-40 flex justify-center px-3 pt-3.5 pb-2"
      >
        <div
          className={`relative w-full max-w-6xl rounded-full transition-all duration-300 ${
            scrolled
              ? "bg-surface/90 backdrop-blur-xl border border-border shadow-lg py-2 px-5"
              : "bg-surface/60 backdrop-blur-md border border-border/60 py-2.5 px-5"
          }`}
        >
          {/* Scroll Progress Line */}
          <div
            className="absolute top-0 left-8 right-8 h-[2px] bg-accent/50 origin-left transition-transform duration-150 rounded-full"
            style={{ transform: `scaleX(${progress})` }}
          />

          <nav className="flex items-center justify-between gap-2">
            {/* Left: Avatar Logo + Title */}
            <a
              href="#home"
              className="group flex items-center gap-2.5 hover:opacity-90 transition-opacity"
              aria-label="Home"
            >
              <div className="relative flex h-8 w-8 items-center justify-center rounded-full border border-border bg-surface-elevated overflow-hidden shadow-xs">
                <span className="font-display font-black text-xs text-accent">AK</span>
              </div>
              <span className="hidden sm:inline-block font-display font-bold text-sm text-ink tracking-tight">
                {personalInfo.fullName}
              </span>
            </a>

            {/* Center: Floating Pill Navigation Menu */}
            <ul className="hidden md:flex items-center gap-1 bg-surface-elevated/90 border border-border/80 rounded-full px-3 py-1.5 shadow-xs">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href;

                return (
                  <li key={link.href} className="relative">
                    <a
                      href={link.href}
                      className={`relative z-10 block rounded-full px-3.5 py-1 text-xs font-semibold tracking-wide transition-colors duration-300 ${
                        isActive ? "text-ink font-extrabold" : "text-ink-muted hover:text-ink"
                      }`}
                    >
                      {link.label}
                    </a>
                    {isActive && (
                      <motion.div
                        layoutId="activeNavPill"
                        transition={springTransition}
                        className="absolute inset-0 rounded-full bg-surface border border-border/80 shadow-xs"
                      />
                    )}
                  </li>
                );
              })}
            </ul>

            {/* Right: Social Links */}
            <div className="flex items-center gap-2">
              <div className="hidden md:flex items-center gap-1 rounded-full bg-surface-elevated/80 border border-border/70 p-1 shadow-xs">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="p-1.5 text-ink-muted hover:text-ink transition-colors rounded-full"
                >
                  <SocialIcons.github className="h-4 w-4" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="p-1.5 text-ink-muted hover:text-ink transition-colors rounded-full"
                >
                  <SocialIcons.linkedin className="h-4 w-4" />
                </a>
                <a
                  href={personalInfo.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="p-1.5 text-ink-muted hover:text-ink transition-colors rounded-full"
                >
                  <SocialIcons.instagram className="h-4 w-4" />
                </a>
              </div>

              <button
                type="button"
                onClick={() => setMobileOpen(true)}
                className="md:hidden p-2 text-ink hover:text-[#ff8a00] transition-colors"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.35, ease: smoothEase }}
            className="fixed inset-0 z-50 bg-primary/98 backdrop-blur-2xl md:hidden flex flex-col justify-between p-6"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface-elevated font-display font-black text-sm text-accent">
                  AK
                </div>
                <span className="font-display font-bold text-lg text-ink">
                  {personalInfo.fullName}
                </span>
              </div>
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
              {navLinks.map((link, idx) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 + 0.1 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block font-display text-3xl font-extrabold text-ink hover:text-accent transition-colors py-1"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </motion.ul>

            <div className="flex flex-col gap-3 pt-6 border-t border-border">
              <div className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 py-2.5 text-xs font-semibold text-emerald-500 mb-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span>Available for Engineering Roles</span>
              </div>

              <div className="flex gap-2">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center rounded-full border border-border bg-surface text-ink py-2.5 text-xs font-bold hover:border-accent transition-colors"
                >
                  GitHub
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center rounded-full bg-accent text-primary py-2.5 text-xs font-bold hover:opacity-90 transition-opacity"
                >
                  LinkedIn
                </a>
                <a
                  href={personalInfo.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center rounded-full border border-border bg-surface text-ink py-2.5 text-xs font-bold hover:border-accent transition-colors"
                >
                  Instagram
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
