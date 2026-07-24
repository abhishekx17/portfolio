import { motion } from "framer-motion";
import { ArrowUpRight, Copy, Mail, Check, Send } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./icons/SocialIcons";
import { useState } from "react";
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
    <section id="contact" className="py-24 md:py-32 bg-surface/40 border-t border-border relative">
      <div className="mx-auto max-w-6xl px-6 md:px-8 relative">
        <SectionHeading
          index="04"
          title="Get In Touch"
          subtitle="Have a project idea, job opportunity, or just want to talk tech? Drop a message or connect directly."
        />

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: smoothEase }}
            className="space-y-6"
          >
            <h3 className="font-display text-3xl md:text-4xl font-extrabold text-ink leading-tight">
              Let's Build Something <span className="text-accent">Exceptional</span> Together.
            </h3>
            <p className="text-ink-muted leading-relaxed">
              I am currently open to full-stack developer roles, freelance projects, and technology discussions. Send me an email or click below to copy my address.
            </p>

            {/* Quick Copy Email Card */}
            <div className="rounded-2xl border border-border bg-surface p-6 glass-card shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                  Direct Contact
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs text-emerald-500 font-medium">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  Available Now
                </span>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <div className="flex-1 flex items-center gap-3 rounded-xl border border-border bg-surface-elevated px-4 py-3 text-sm font-medium text-ink truncate">
                  <Mail className="h-4 w-4 text-accent shrink-0" />
                  <span className="truncate">{personalInfo.email}</span>
                </div>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3 text-xs font-bold text-primary hover:bg-accent-dark transition-all shrink-0 shadow-sm"
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4" /> Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" /> Copy Email
                    </>
                  )}
                </button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: smoothEase }}
            className="space-y-4"
          >
            {[
              {
                label: "GitHub Profile",
                value: "Explore full-stack repositories & open-source work",
                href: personalInfo.github,
                icon: GitHubIcon,
              },
              {
                label: "LinkedIn Network",
                value: "Connect professionally and check career updates",
                href: personalInfo.linkedin,
                icon: LinkedInIcon,
              },
              {
                label: "Send Direct Email",
                value: personalInfo.email,
                href: `mailto:${personalInfo.email}`,
                icon: Send,
              },
            ].map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 + i * 0.08, duration: 0.5 }}
                whileHover={{ x: 4 }}
                className="group flex items-center justify-between rounded-2xl border border-border bg-surface p-5 glass-card hover:border-accent/40 transition-all duration-300 shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface-elevated text-ink group-hover:border-accent/40 group-hover:text-accent transition-all duration-300">
                    <link.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-ink text-base group-hover:text-accent transition-colors">
                      {link.label}
                    </div>
                    <div className="text-xs text-ink-muted mt-0.5">{link.value}</div>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-ink-faint group-hover:text-accent transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
