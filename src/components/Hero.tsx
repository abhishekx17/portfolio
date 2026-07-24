import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Globe, Layers, Mail, MapPin, Sparkles } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./icons/SocialIcons";
import {
  ReactLogo,
  NodeLogo,
  MongoLogo,
  ExpressLogo,
  TypeScriptLogo,
  TailwindLogo,
  GitLogo,
} from "./icons/TechLogos";
import { personalInfo } from "../data/portfolio";
import { smoothEase } from "../lib/motion";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: smoothEase },
  },
};

const floatingTech = [
  { name: "React", logo: ReactLogo, category: "Frontend" },
  { name: "Node.js", logo: NodeLogo, category: "Backend" },
  { name: "Express.js", logo: ExpressLogo, category: "Backend" },
  { name: "MongoDB", logo: MongoLogo, category: "Database" },
  { name: "TypeScript", logo: TypeScriptLogo, category: "Language" },
  { name: "Tailwind CSS", logo: TailwindLogo, category: "Styling" },
  { name: "Git", logo: GitLogo, category: "Tools" },
];

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden pt-32 pb-20">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      <div className="relative mx-auto w-full max-w-6xl px-6 md:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center"
        >
          {/* Left Column: Main Headline & CTA */}
          <div className="lg:col-span-7 space-y-7">
            {/* Availability Badge */}
            <motion.div variants={item} className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-semibold text-ink shadow-xs">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                {personalInfo.availability}
              </span>
              <span className="text-ink-faint hidden sm:inline">•</span>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-ink-muted">
                <MapPin className="h-3.5 w-3.5 text-ink-faint" />
                {personalInfo.location}
              </span>
            </motion.div>

            {/* Display Headline */}
            <motion.div variants={item}>
              <h1 className="font-display text-[clamp(2.5rem,5.8vw,5rem)] font-extrabold leading-[1.02] tracking-tight text-ink">
                Architecting <br />
                <span className="text-gradient">Full-Stack Web</span> Experiences.
              </h1>
            </motion.div>

            {/* Subtitle / Tagline */}
            <motion.p
              variants={item}
              className="max-w-xl text-base md:text-lg text-ink-muted leading-relaxed font-normal"
            >
              Hi, I'm <strong className="text-ink font-semibold">{personalInfo.fullName}</strong> — a MERN Stack Developer building high-performance web applications, clean API architectures, and modern user interfaces.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              variants={item}
              className="flex flex-wrap items-center gap-4 pt-1"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2.5 rounded-full bg-ink px-7 py-3.5 text-xs font-bold text-primary hover:opacity-90 transition-all duration-300 shadow-md hover:scale-[1.02]"
              >
                View Selected Work
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-7 py-3.5 text-xs font-bold text-ink hover:bg-surface-elevated transition-all duration-300 shadow-xs"
              >
                Get In Touch
              </a>
            </motion.div>

            {/* Micro Highlights */}
            <motion.div
              variants={item}
              className="pt-4 flex flex-wrap items-center gap-6 border-t border-border/50 text-xs text-ink-muted font-medium"
            >
              <div className="flex items-center gap-2">
                <Layers className="h-4 w-4 text-ink-faint" />
                <span>4+ Production Apps</span>
              </div>
              <div className="flex items-center gap-2">
                <Code2 className="h-4 w-4 text-ink-faint" />
                <span>React & Node.js</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-ink-faint" />
                <span>Scalable REST APIs</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Floating Interactive Tech Badge Matrix & Metrics (ZERO CARDS!) */}
          <motion.div variants={item} className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent">
                <Sparkles className="h-3.5 w-3.5" />
                Core Technologies & Tools
              </div>

              {/* Floating Pill Matrix */}
              <div className="flex flex-wrap gap-2.5">
                {floatingTech.map((tech, idx) => {
                  const LogoComponent = tech.logo;
                  return (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 + idx * 0.05, duration: 0.4 }}
                      whileHover={{ y: -3, scale: 1.03 }}
                      className="flex items-center gap-2.5 rounded-full border border-border bg-surface/90 px-4 py-2 text-xs font-bold text-ink shadow-xs hover:border-accent/40 hover:bg-surface transition-all cursor-default"
                    >
                      <LogoComponent className="h-4 w-4 shrink-0" />
                      <span>{tech.name}</span>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Floating Metric Counters (No Card Container!) */}
            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-border/60">
              <div>
                <span className="font-display text-3xl font-extrabold text-ink">4+</span>
                <p className="text-xs font-semibold text-ink-muted mt-1">Full-Stack Projects Built</p>
                <p className="text-[11px] text-ink-faint">HRMS, E-Commerce, & Dashboards</p>
              </div>

              <div>
                <span className="font-display text-3xl font-extrabold text-accent">100%</span>
                <p className="text-xs font-semibold text-ink-muted mt-1">Clean API Architecture</p>
                <p className="text-[11px] text-ink-faint">JWT Auth, MongoDB, & Express</p>
              </div>
            </div>

            {/* Floating Quick Social Links (No Card Container!) */}
            <div className="pt-2 flex items-center justify-between">
              <span className="text-xs font-bold text-ink-faint uppercase tracking-wider">Connect Directly</span>
              <div className="flex items-center gap-2">
                {[
                  { href: personalInfo.github, icon: GitHubIcon, label: "GitHub" },
                  { href: personalInfo.linkedin, icon: LinkedInIcon, label: "LinkedIn" },
                  { href: `mailto:${personalInfo.email}`, icon: Mail, label: "Email" },
                ].map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-ink-muted hover:text-ink hover:border-accent/40 transition-all duration-300 shadow-xs"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
