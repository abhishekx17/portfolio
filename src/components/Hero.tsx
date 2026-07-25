import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  Globe,
  Layers,
  MapPin,
  Download,
  Eye,
  FileText,
  CheckCircle2,
  ZoomIn,
} from "lucide-react";
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

export function Hero() {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden pt-28 pb-16">
      {/* Subtle Grid & Glow Background */}
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="absolute top-1/3 right-12 w-80 h-80 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 md:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center"
        >
          {/* Left Column: Headline & Action Buttons */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7">
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
              <h1 className="font-display text-[clamp(2.4rem,5.2vw,4.5rem)] font-extrabold leading-[1.04] tracking-tight text-ink">
                Architecting <br />
                <span className="text-gradient">Full-Stack Web</span> Experiences.
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              variants={item}
              className="max-w-xl text-base sm:text-lg text-ink-muted leading-relaxed font-normal"
            >
              Hi, I'm <strong className="text-ink font-semibold">{personalInfo.fullName}</strong> — a MERN Stack Developer building high-performance web applications, clean API architectures, and modern user interfaces.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              variants={item}
              className="flex flex-wrap items-center gap-3 pt-1"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-xs font-bold text-primary hover:opacity-90 transition-all duration-300 shadow-md hover:scale-[1.02]"
              >
                View Selected Work
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>

              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-5 py-3 text-xs font-bold text-accent hover:bg-accent/20 transition-all duration-300 shadow-xs"
              >
                <FileText className="h-4 w-4" />
                View Resume
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-3 text-xs font-bold text-ink hover:bg-surface-elevated transition-all duration-300 shadow-xs"
              >
                Contact
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

          {/* Right Column: Coder UI Window with Resume Preview Image */}
          <motion.div variants={item} className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-sm sm:max-w-md rounded-2xl border border-border bg-surface-elevated shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
              {/* Window Header */}
              <div className="flex items-center justify-between border-b border-border bg-surface/80 px-4 py-3 select-none">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-500/80 inline-block" />
                  <span className="h-3 w-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="h-3 w-3 rounded-full bg-emerald-500/80 inline-block" />
                </div>

                <div className="flex items-center gap-1.5 rounded-lg border border-border/60 bg-surface-elevated px-3 py-1 text-xs font-mono font-medium text-ink-muted">
                  <FileText className="h-3.5 w-3.5 text-accent" />
                  <span className="truncate max-w-[150px]">Abhishek_Resume.pdf</span>
                </div>

                <span className="inline-flex items-center gap-1 text-[11px] font-mono font-semibold text-emerald-500">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  PREVIEW
                </span>
              </div>

              {/* Window Content: Resume Image Preview Container */}
              <div className="p-4 bg-surface/50">
                <div className="relative group/preview overflow-hidden rounded-xl border border-border bg-surface shadow-xs transition-all">
                  {!imageError ? (
                    <img
                      src="/resume-preview.png"
                      alt="Abhishek Kumar Resume Preview"
                      onError={() => setImageError(true)}
                      className="w-full max-h-[380px] object-cover object-top transition-transform duration-500 group-hover/preview:scale-[1.02]"
                    />
                  ) : (
                    /* Styled Fallback Resume Card if image file hasn't been placed in public/ folder yet */
                    <div className="p-5 space-y-4 bg-surface text-ink font-sans text-xs">
                      <div className="flex items-center justify-between border-b border-border/80 pb-3">
                        <div>
                          <h3 className="font-display font-extrabold text-base text-ink">{personalInfo.fullName}</h3>
                          <p className="text-accent font-semibold text-xs mt-0.5">{personalInfo.title}</p>
                        </div>
                        <span className="rounded-full bg-accent/15 text-accent border border-accent/30 px-2.5 py-1 text-[10px] font-bold">
                          CV PREVIEW
                        </span>
                      </div>

                      <div className="space-y-1.5">
                        <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-ink-faint">Education</p>
                        <p className="font-semibold text-ink text-xs">{personalInfo.degree}</p>
                        <p className="text-ink-muted text-[11px]">{personalInfo.college}</p>
                      </div>

                      <div className="space-y-1.5">
                        <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-ink-faint">Key Technical Skills</p>
                        <div className="flex flex-wrap gap-1">
                          {["React", "Node.js", "Express", "MongoDB", "TypeScript", "Tailwind CSS"].map((sk) => (
                            <span key={sk} className="rounded bg-surface-elevated border border-border px-2 py-0.5 text-[11px] font-medium text-ink-muted">
                              {sk}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-1.5 pt-1">
                        <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-ink-faint">Highlighted Experience</p>
                        <ul className="space-y-1 text-ink-muted text-[11px]">
                          <li className="flex items-center gap-1.5">
                            <CheckCircle2 className="h-3 w-3 text-emerald-500 shrink-0" />
                            <span>QuickEMS — HR Management Platform with MERN</span>
                          </li>
                          <li className="flex items-center gap-1.5">
                            <CheckCircle2 className="h-3 w-3 text-emerald-500 shrink-0" />
                            <span>Velora — E-Commerce with Razorpay & Cloudinary</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-ink/40 backdrop-blur-[2px] opacity-0 group-hover/preview:opacity-100 transition-opacity flex items-center justify-center gap-3 p-4">
                    <a
                      href={personalInfo.resumeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-xs font-bold text-primary shadow-lg hover:scale-105 transition-transform"
                    >
                      <ZoomIn className="h-3.5 w-3.5" />
                      Expand View
                    </a>
                  </div>
                </div>
              </div>

              {/* Window Footer / Action Buttons */}
              <div className="border-t border-border bg-surface px-4 py-3.5">
                <div className="grid grid-cols-2 gap-2.5">
                  <a
                    href={personalInfo.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-accent px-4 py-2.5 text-xs font-bold text-primary hover:opacity-90 transition-all shadow-xs"
                  >
                    <Eye className="h-3.5 w-3.5" />
                    <span>View PDF</span>
                  </a>

                  <a
                    href={personalInfo.resumeUrl}
                    download="Abhishek_Kumar_Resume.pdf"
                    className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-border bg-surface-elevated px-4 py-2.5 text-xs font-bold text-ink hover:border-accent/40 transition-all shadow-xs"
                  >
                    <Download className="h-3.5 w-3.5 text-accent" />
                    <span>Download</span>
                  </a>
                </div>

                <div className="flex items-center justify-between pt-3 text-[11px] font-mono text-ink-faint">
                  <span className="flex items-center gap-1.5 text-emerald-500 font-medium">
                    <CheckCircle2 className="h-3 w-3" />
                    PDF Ready
                  </span>
                  <span>B.Tech CSE (2022–2026)</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
