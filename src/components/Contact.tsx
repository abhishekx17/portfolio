import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Copy, Mail, Check, Send, MapPin } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./icons/SocialIcons";
import { personalInfo } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";
import { smoothEase } from "../lib/motion";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-surface/30 border-t border-border relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-6xl px-6 md:px-8 relative">
        <SectionHeading
          index="05"
          title="Get In Touch"
          subtitle="Have a project idea, job opportunity, or just want to connect? Feel free to reach out."
        />

        {/* Refined Centered Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: smoothEase }}
          className="mx-auto max-w-3xl rounded-3xl border border-border/80 bg-surface-elevated/70 backdrop-blur-xl p-8 sm:p-10 shadow-xl text-center space-y-8"
        >
          {/* Header & Availability Badge */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-semibold text-ink shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span>Open to Full-Stack Roles & Projects</span>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-ink">
              Let's Build Something Great Together
            </h3>

            <p className="text-sm sm:text-base text-ink-muted leading-relaxed max-w-xl mx-auto font-normal">
              Whether you're looking for a MERN stack developer, building a new web application, or just want to talk tech — my inbox is open.
            </p>
          </div>

          {/* Clean Interactive Email Box */}
          <div className="max-w-lg mx-auto rounded-2xl border border-border bg-surface p-2 sm:p-2.5 shadow-xs transition-all hover:border-accent/40">
            <div className="flex flex-col sm:flex-row items-center gap-2">
              <div className="flex-1 flex items-center gap-3 px-3 py-2 text-xs sm:text-sm font-medium text-ink w-full truncate">
                <Mail className="h-4 w-4 text-accent shrink-0" />
                <span className="truncate font-mono">{personalInfo.email}</span>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto shrink-0">
                <button
                  type="button"
                  onClick={copyEmail}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 rounded-xl border border-border bg-surface-elevated px-4 py-2.5 text-xs font-bold text-ink hover:bg-surface transition-all shadow-xs"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-500" />
                      <span>Copied</span>
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
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 rounded-xl bg-accent px-4 py-2.5 text-xs font-bold text-primary hover:opacity-90 transition-all shadow-xs"
                >
                  <Send className="h-3.5 w-3.5" />
                  <span>Send</span>
                </a>
              </div>
            </div>
          </div>

          {/* Social Links Row */}
          <div className="pt-4 border-t border-border/60 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
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
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-xs font-semibold text-ink-muted hover:text-ink hover:border-accent/40 hover:bg-surface-elevated transition-all duration-300 shadow-xs"
                  >
                    <item.icon className="h-3.5 w-3.5" />
                    <span>{item.label}</span>
                    <ArrowUpRight className="h-3 w-3 text-ink-faint" />
                  </a>
                );
              }
              return (
                <div
                  key={item.label}
                  className="inline-flex items-center gap-2 rounded-full border border-border/50 bg-surface/50 px-4 py-2 text-xs font-medium text-ink-faint cursor-default"
                >
                  <item.icon className="h-3.5 w-3.5" />
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
