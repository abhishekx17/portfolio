import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Copy, Mail, Check, Send, MapPin } from "lucide-react";
import { GitHubIcon, LinkedInIcon, InstagramIcon } from "./icons/SocialIcons";
import { personalInfo } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";
import { smoothEase } from "../lib/motion";

interface ContactProps {
  onShowToast?: (message: string) => void;
}

export function Contact({ onShowToast }: ContactProps) {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    onShowToast?.("Email address copied to clipboard!");
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative overflow-hidden bg-surface/30 border-t border-border">
      <div className="mx-auto max-w-6xl px-6 md:px-8 relative z-10">
        <SectionHeading
          index="05"
          title="Contact"
          subtitle="Have a project idea, job opportunity, or just want to connect? Feel free to reach out anytime."
        />

        {/* Centered Glass Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: smoothEase }}
          className="mx-auto max-w-3xl rounded-3xl border border-border bg-surface p-5 sm:p-12 glass-card shadow-lg text-center space-y-8 relative overflow-hidden"
        >
          {/* Header & Availability Badge */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-500 shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>{personalInfo.availability}</span>
            </div>

            <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-ink">
              Let's Build Something <br className="hidden sm:block" />
              Great Together
            </h3>

            <p className="text-sm sm:text-base text-ink-muted leading-relaxed max-w-xl mx-auto font-normal">
              Whether you're looking for a MERN stack developer, building a new web application, or discussing software engineering roles — my inbox is open.
            </p>
          </div>

          {/* Clean Interactive Email Box */}
          <div className="max-w-lg mx-auto rounded-2xl border border-border bg-surface-elevated p-2.5 shadow-xs transition-all hover:border-accent/40">
            <div className="flex flex-col sm:flex-row items-center gap-2">
              <div className="flex-1 flex items-center gap-3 px-3 py-2 text-xs sm:text-sm font-medium text-ink w-full truncate">
                <Mail className="h-4 w-4 text-accent shrink-0" />
                <span className="truncate font-mono font-semibold">{personalInfo.email}</span>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto shrink-0">
                <button
                  type="button"
                  onClick={copyEmail}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 rounded-xl border border-border bg-surface px-4 py-2.5 text-xs font-bold text-ink hover:bg-surface-elevated transition-all shadow-xs"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-500" />
                      <span className="text-emerald-500">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5 text-ink-muted" />
                      <span>Copy</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 rounded-xl bg-ink px-5 py-2.5 text-xs font-bold text-primary hover:opacity-90 transition-all shadow-md"
                >
                  <Send className="h-3.5 w-3.5" />
                  <span>Send Email</span>
                </a>
              </div>
            </div>
          </div>

          {/* Social Links Row */}
          <div className="pt-4 border-t border-border/80 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {[
              {
                label: "GitHub",
                href: personalInfo.github,
                icon: GitHubIcon,
              },
              {
                label: "LinkedIn",
                href: personalInfo.linkedin,
                icon: LinkedInIcon,
              },
              {
                label: "Instagram",
                href: personalInfo.instagram,
                icon: InstagramIcon,
              },
              {
                label: personalInfo.location,
                icon: MapPin,
              },
            ].map((item) => {
              if (item.href) {
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2 text-xs font-bold text-ink-muted hover:text-ink hover:border-accent/40 hover:bg-surface-elevated transition-all duration-300 shadow-xs group"
                  >
                    <item.icon className="h-4 w-4 text-accent" />
                    <span>{item.label}</span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-ink-faint transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                );
              }
              return (
                <div
                  key={item.label}
                  className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-surface/50 px-5 py-2 text-xs font-semibold text-ink-faint cursor-default"
                >
                  <item.icon className="h-4 w-4 text-emerald-500" />
                  <span>{item.label}</span>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
