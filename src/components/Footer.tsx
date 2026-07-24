import { ArrowUp } from "lucide-react";
import { navLinks, personalInfo } from "../data/portfolio";
import { Logo } from "./Logo";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border bg-surface/80 py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-border">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <Logo className="h-9 w-9 text-accent" />
            <div>
              <span className="font-display font-bold text-lg text-ink">
                {personalInfo.fullName}
              </span>
              <p className="text-xs text-ink-muted">{personalInfo.title}</p>
            </div>
          </div>

          {/* Quick Nav */}
          <ul className="flex flex-wrap items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-xs font-medium text-ink-muted hover:text-accent transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 rounded-full border border-border bg-surface-elevated px-4 py-2 text-xs font-semibold text-ink hover:border-accent/40 hover:text-accent transition-all shadow-sm"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ink-faint">
          <p>© {new Date().getFullYear()} {personalInfo.fullName}. All rights reserved.</p>
          <p>Designed & built with React, TypeScript & Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}
