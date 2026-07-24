import { motion } from "framer-motion";
import { ArrowUpRight, Award, BookOpen, Code, GraduationCap, Layers } from "lucide-react";
import { smoothEase } from "../lib/motion";
import { SectionHeading } from "./SectionHeading";
import { aboutParagraphs, personalInfo } from "../data/portfolio";

const metrics = [
  {
    icon: GraduationCap,
    value: "2022–2026",
    label: "B.Tech CSE Student",
    subtext: "Sri Sukhmani Institute (PTU)",
  },
  {
    icon: Layers,
    value: "4+",
    label: "Full-Stack Apps",
    subtext: "HRMS, E-Commerce, & Dashboards",
  },
  {
    icon: Code,
    value: "MERN",
    label: "Stack Specialization",
    subtext: "MongoDB, Express, React, Node",
  },
];

export function About() {
  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <SectionHeading
          index="01"
          title="About Me"
          subtitle="Engineering modern full-stack web applications with strong computer science foundations and clean architecture."
        />

        {/* Metric Highlight Cards */}
        <div className="grid sm:grid-cols-3 gap-4 md:gap-5 mb-14">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: smoothEase }}
              className="rounded-2xl border border-border bg-surface p-5 glass-card hover:border-accent/40 transition-all shadow-xs"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface-elevated text-accent">
                  <m.icon className="h-4 w-4" />
                </div>
                <span className="font-display text-xl font-extrabold text-ink">
                  {m.value}
                </span>
              </div>
              <h4 className="font-display font-bold text-ink text-sm mb-0.5">
                {m.label}
              </h4>
              <p className="text-xs text-ink-muted leading-relaxed">
                {m.subtext}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: About Paragraphs & Education Banner */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: smoothEase }}
            className="lg:col-span-7 space-y-6"
          >
            {aboutParagraphs.map((paragraph, i) => (
              <p
                key={i}
                className="text-base md:text-lg text-ink-muted leading-relaxed font-normal"
              >
                {paragraph}
              </p>
            ))}

            {/* Education Highlight Box */}
            <div className="rounded-2xl border border-border bg-surface p-6 space-y-3 glass-card shadow-xs">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent">
                <BookOpen className="h-4 w-4" />
                Education Background
              </div>
              <div>
                <h4 className="font-display text-base font-bold text-ink">
                  {personalInfo.degree}
                </h4>
                <p className="text-xs text-ink-muted mt-1">
                  <strong className="text-ink font-semibold">{personalInfo.college}</strong>
                </p>
                <p className="text-[11px] text-ink-faint mt-0.5">
                  Affiliated with {personalInfo.university} • Batch {personalInfo.timeline}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Code Card Version (education.config.ts) */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: smoothEase }}
            className="lg:col-span-5"
          >
            <div className="rounded-2xl border border-border bg-surface glass-card shadow-md overflow-hidden">
              {/* Code Card Top Bar */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-surface-elevated">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80 inline-block" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80 inline-block" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80 inline-block" />
                  <span className="text-xs font-mono text-ink-muted ml-2 font-semibold">
                    education.config.ts
                  </span>
                </div>
                <Award className="h-4 w-4 text-accent" />
              </div>

              {/* Code Snippet Body */}
              <div className="p-5 font-mono text-xs text-ink-muted leading-relaxed space-y-3 bg-surface">
                <div>
                  <span className="text-accent font-semibold">export const</span> studentProfile = &#123;
                  <br />
                  &nbsp;&nbsp;name: <span className="text-ink">"{personalInfo.fullName}"</span>,
                  <br />
                  &nbsp;&nbsp;location: <span className="text-ink">"{personalInfo.location}"</span>,
                  <br />
                  &nbsp;&nbsp;skills: [<span className="text-ink">"MERN"</span>, <span className="text-ink">"TypeScript"</span>, <span className="text-ink">"REST APIs"</span>],
                  <br />
                  &nbsp;&nbsp;status: <span className="text-emerald-500 font-semibold">"Seeking Opportunities"</span>
                  <br />
                  &#125;;
                </div>
              </div>

              {/* Footer LinkedIn Action */}
              <div className="px-5 py-4 border-t border-border bg-surface-elevated flex items-center justify-between">
                <span className="text-xs font-medium text-ink-muted">Connect & Collaborate</span>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 text-xs font-bold text-accent hover:underline"
                >
                  LinkedIn Profile
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
