import { ArrowUp, FileText, MapPin, Sparkles } from "lucide-react";
import { GitHubIcon, LinkedInIcon, InstagramIcon } from "./icons/SocialIcons";
import { navLinks, personalInfo } from "../data/portfolio";
import { Logo } from "./Logo";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-border bg-surface/80 backdrop-blur-md pt-16 pb-12 overflow-hidden z-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-8 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-border/80">
          {/* Col 1: Brand & Availability (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <a href="#" className="inline-flex items-center gap-3 group">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface-elevated text-accent group-hover:border-accent/40 transition-colors shadow-xs">
                <Logo className="h-5 w-5" />
              </div>
              <div>
                <span className="font-display font-bold text-lg text-ink tracking-tight block">
                  {personalInfo.fullName}<span className="text-accent">.</span>
                </span>
                <span className="text-xs text-ink-muted">{personalInfo.title}</span>
              </div>
            </a>

            <p className="text-xs text-ink-muted leading-relaxed max-w-sm">
              Architecting full-stack web applications with React, Node.js, Express, MongoDB & TypeScript.
            </p>

            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-[11px] font-semibold text-emerald-500">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Available for Software Engineering Roles</span>
            </div>
          </div>

          {/* Col 2: Navigation Links (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <p className="text-xs font-bold text-ink uppercase tracking-wider font-mono">Navigation</p>
            <ul className="grid grid-cols-2 gap-2.5 text-xs font-medium">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-ink-muted hover:text-accent transition-colors block py-0.5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline inline-flex items-center gap-1 py-0.5 font-bold"
                >
                  <FileText className="h-3.5 w-3.5" />
                  Resume PDF
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Social & Back to Top (3 cols) */}
          <div className="md:col-span-3 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <p className="text-xs font-bold text-ink uppercase tracking-wider font-mono">Connect</p>
              <div className="flex flex-wrap items-center gap-2">
                {[
                  { href: personalInfo.github, icon: GitHubIcon, label: "GitHub" },
                  { href: personalInfo.linkedin, icon: LinkedInIcon, label: "LinkedIn" },
                  { href: personalInfo.instagram, icon: InstagramIcon, label: "Instagram" },
                ].map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-surface-elevated text-ink-muted hover:text-ink hover:border-accent/40 transition-all shadow-xs"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}

                <span className="inline-flex items-center gap-1.5 text-xs text-ink-faint border border-border/80 rounded-xl px-3 py-2 bg-surface">
                  <MapPin className="h-3.5 w-3.5 text-accent" />
                  {personalInfo.location}
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-surface-elevated px-4 py-2.5 text-xs font-bold text-ink hover:border-accent/40 hover:text-accent transition-all shadow-xs group w-full sm:w-auto"
            >
              <span>Back to Top</span>
              <ArrowUp className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-1" />
            </button>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ink-faint">
          <p>© {new Date().getFullYear()} {personalInfo.fullName}. All rights reserved.</p>
          <p className="font-mono text-[11px] flex items-center gap-1">
            <Sparkles className="h-3 w-3 text-accent" />
            Engineered with React, TS, Tailwind CSS & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
