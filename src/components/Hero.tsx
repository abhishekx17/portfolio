import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  Sparkles,
  Terminal,
  X,
} from "lucide-react";
import { personalInfo, resumeDetails } from "../data/portfolio";
import { staggerContainer, fadeInUp } from "../lib/motion";

interface HeroProps {
  onShowToast?: (message: string) => void;
}

export function Hero({ onShowToast }: HeroProps) {
  const [imageError, setImageError] = useState(false);
  const [activeTab, setActiveTab] = useState<"visual" | "code">("visual");
  const [zoomModalOpen, setZoomModalOpen] = useState(false);

  const handleDownload = () => {
    onShowToast?.("Resume download initiated!");
  };

  return (
    <section id="home" className="relative min-h-[88vh] flex flex-col justify-center pt-28 pb-16 overflow-hidden select-none">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6 relative z-10 flex-1 flex flex-col justify-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center"
        >
          {/* Left Column: Headline, Bio & CTAs */}
          <div className="lg:col-span-7 space-y-8 lg:pr-6">
            {/* Top Badges */}
            <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-500 shadow-xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span>{personalInfo.availability}</span>
              </div>

              <div className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-ink-muted bg-surface px-3.5 py-1.5 rounded-full border border-border">
                <MapPin className="h-3.5 w-3.5 text-ink-faint" />
                <span>{personalInfo.location}</span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={fadeInUp}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-extrabold tracking-tight leading-[1.06] text-ink"
            >
              Architecting <br className="hidden sm:block" />
              Full-Stack Web <br className="hidden sm:block" />
              Experiences.
            </motion.h1>

            {/* Bio Paragraph */}
            <motion.p
              variants={fadeInUp}
              className="max-w-xl text-base md:text-lg text-ink-muted leading-relaxed font-normal"
            >
              Hi, I'm <strong className="text-ink font-semibold">{personalInfo.fullName}</strong> — a Full-Stack Engineer & MERN Specialist building performant web applications, clean REST API architectures, and modern user interfaces.
            </motion.p>

            {/* CTA Buttons Group */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap items-center gap-3.5 pt-1"
            >
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2.5 rounded-full bg-ink px-7 py-3.5 text-xs font-bold text-primary hover:opacity-95 transition-all duration-300 shadow-md hover:scale-[1.02] active:scale-95"
              >
                <span>View Selected Work</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>

              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3.5 text-xs font-bold text-ink hover:bg-surface-elevated transition-all duration-300 shadow-xs"
              >
                <FileText className="h-4 w-4 text-ink-muted" />
                <span>View Resume</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-elevated px-6 py-3.5 text-xs font-bold text-ink hover:border-border-strong transition-all duration-300 shadow-xs"
              >
                <span>Contact</span>
              </a>
            </motion.div>

            {/* Bottom Quick Feature Highlights */}
            <motion.div
              variants={fadeInUp}
              className="pt-6 flex flex-wrap items-center gap-6 border-t border-border/80 text-xs text-ink-muted font-mono font-medium"
            >
              <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-surface border border-border text-ink-muted">
                  <Layers className="h-3.5 w-3.5" />
                </div>
                <span>2 Production Apps</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-surface border border-border text-ink-muted">
                  <Code2 className="h-3.5 w-3.5" />
                </div>
                <span>React & Node.js</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-surface border border-border text-ink-muted">
                  <Globe className="h-3.5 w-3.5" />
                </div>
                <span>REST APIs & MongoDB</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Dual-Tab Interactive Resume Card */}
          <motion.div variants={fadeInUp} className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-sm sm:max-w-md rounded-3xl border border-border bg-surface shadow-xl overflow-hidden transition-all duration-300 hover:border-border-strong">
              {/* Window Header + Tabs */}
              <div className="flex items-center justify-between border-b border-border bg-surface-elevated/80 px-4 py-3 select-none">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-border-strong inline-block" />
                  <span className="h-3 w-3 rounded-full bg-border-strong inline-block" />
                  <span className="h-3 w-3 rounded-full bg-border-strong inline-block" />
                </div>

                {/* Switcher Tabs */}
                <div className="flex items-center gap-1 rounded-xl bg-surface p-1 border border-border text-xs font-medium">
                  <button
                    type="button"
                    onClick={() => setActiveTab("visual")}
                    className={`flex items-center gap-1 px-3 py-1 rounded-lg transition-colors text-[11px] font-bold ${
                      activeTab === "visual"
                        ? "bg-ink text-primary shadow-xs"
                        : "text-ink-muted hover:text-ink"
                    }`}
                  >
                    <Eye className="h-3 w-3" />
                    <span>Visual</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveTab("code")}
                    className={`flex items-center gap-1 px-3 py-1 rounded-lg transition-colors text-[11px] font-bold ${
                      activeTab === "code"
                        ? "bg-ink text-primary shadow-xs"
                        : "text-ink-muted hover:text-ink"
                    }`}
                  >
                    <Terminal className="h-3 w-3" />
                    <span>Code</span>
                  </button>
                </div>

                <span className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-emerald-500">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  VERIFIED
                </span>
              </div>

              {/* Tab Content Body */}
              <div className="p-4 bg-surface/40 min-h-[350px] flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  {activeTab === "visual" ? (
                    <motion.div
                      key="visual"
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.2 }}
                      className="relative group/preview overflow-hidden rounded-2xl border border-border bg-surface shadow-xs"
                    >
                      {!imageError ? (
                        <img
                          src="/resume-preview.png"
                          alt="Abhishek Kumar Resume Preview"
                          onError={() => setImageError(true)}
                          className="w-full max-h-[360px] object-cover object-top transition-transform duration-500 group-hover/preview:scale-105"
                        />
                      ) : (
                        <div className="p-6 space-y-4 bg-surface text-ink font-sans text-xs">
                          <div className="flex items-center justify-between border-b border-border pb-3">
                            <div>
                              <h3 className="font-display font-extrabold text-lg text-ink tracking-tight">
                                {personalInfo.fullName}
                              </h3>
                              <p className="text-ink-muted font-semibold text-xs mt-0.5">
                                {personalInfo.title}
                              </p>
                            </div>
                            <span className="rounded-full bg-surface-elevated border border-border px-3 py-1 text-[10px] font-mono font-bold">
                              MERN & TS
                            </span>
                          </div>

                          <div className="space-y-1.5">
                            <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-ink-faint">
                              Education
                            </p>
                            <p className="font-bold text-ink text-xs">{personalInfo.degree}</p>
                            <p className="text-ink-muted text-[11px]">{personalInfo.college}</p>
                          </div>

                          <div className="space-y-1.5">
                            <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-ink-faint">
                              Primary Stack
                            </p>
                            <div className="flex flex-wrap gap-1.5 font-mono">
                              {resumeDetails.primarySkills.map((sk) => (
                                <span
                                  key={sk}
                                  className="rounded-md bg-surface-elevated border border-border px-2 py-0.5 text-[10px] font-semibold text-ink-muted"
                                >
                                  {sk}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div className="space-y-1.5 pt-1">
                            <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-ink-faint">
                              Highlights
                            </p>
                            <ul className="space-y-1.5 text-ink-muted text-[11px]">
                              {resumeDetails.highlights.map((h, idx) => (
                                <li key={idx} className="flex items-center gap-1.5">
                                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                                  <span>{h}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}

                      {/* Hover Overlay Button */}
                      <div className="absolute inset-0 bg-primary/60 backdrop-blur-xs opacity-0 group-hover/preview:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                        <button
                          type="button"
                          onClick={() => setZoomModalOpen(true)}
                          className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-xs font-extrabold text-primary shadow-xl hover:scale-105 transition-transform"
                        >
                          <ZoomIn className="h-4 w-4" />
                          <span>Expand Full View</span>
                        </button>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="code"
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.2 }}
                      className="rounded-2xl border border-border bg-surface p-5 font-mono text-[11px] text-ink-muted leading-relaxed overflow-x-auto custom-scrollbar"
                    >
                      <div className="text-ink-faint mb-2">// resume.config.ts</div>
                      <div>
                        <span className="text-ink font-bold">export const</span> candidate = &#123;
                        <br />
                        &nbsp;&nbsp;name: <span className="text-ink">"{personalInfo.fullName}"</span>,
                        <br />
                        &nbsp;&nbsp;role: <span className="text-ink">"{personalInfo.title}"</span>,
                        <br />
                        &nbsp;&nbsp;education: <span className="text-ink">"B.Tech CSE (2022–2026)"</span>,
                        <br />
                        &nbsp;&nbsp;location: <span className="text-ink">"{personalInfo.location}"</span>,
                        <br />
                        &nbsp;&nbsp;stack: [<span className="text-ink">"React"</span>, <span className="text-ink">"Node.js"</span>, <span className="text-ink">"Express"</span>, <span className="text-ink">"MongoDB"</span>, <span className="text-ink">"TypeScript"</span>],
                        <br />
                        &nbsp;&nbsp;projects: [<span className="text-ink">"QuickEMS"</span>, <span className="text-ink">"Velora"</span>],
                        <br />
                        &nbsp;&nbsp;status: <span className="text-emerald-500 font-bold">"Available for Roles"</span>
                        <br />
                        &#125;;
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Bottom Actions Bar */}
              <div className="border-t border-border bg-surface px-4 py-3.5">
                <div className="grid grid-cols-2 gap-2.5">
                  <a
                    href={personalInfo.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-ink px-4 py-2.5 text-xs font-bold text-primary hover:opacity-90 transition-all shadow-xs"
                  >
                    <Eye className="h-3.5 w-3.5" />
                    <span>View PDF</span>
                  </a>

                  <a
                    href={personalInfo.resumeUrl}
                    download="Abhishek_Kumar_Resume.pdf"
                    onClick={handleDownload}
                    className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-border bg-surface-elevated px-4 py-2.5 text-xs font-bold text-ink hover:border-border-strong transition-all shadow-xs"
                  >
                    <Download className="h-3.5 w-3.5 text-ink-muted" />
                    <span>Download</span>
                  </a>
                </div>

                <div className="flex items-center justify-between pt-3 text-[11px] font-mono text-ink-faint">
                  <span className="flex items-center gap-1.5 text-emerald-500 font-semibold">
                    <CheckCircle2 className="h-3 w-3" />
                    Official PDF Ready
                  </span>
                  <span>B.Tech CSE (2022–2026)</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Zoom Modal for Full Resume Preview */}
      <AnimatePresence>
        {zoomModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-primary/95 backdrop-blur-xl overflow-y-auto select-auto"
            onClick={(e) => {
              if (e.target === e.currentTarget) setZoomModalOpen(false);
            }}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              className="relative w-full max-w-3xl rounded-3xl border border-border bg-surface shadow-2xl p-6 sm:p-8 space-y-6 my-auto"
            >
              <button
                type="button"
                onClick={() => setZoomModalOpen(false)}
                className="absolute top-4 right-4 p-2 text-ink-muted hover:text-ink rounded-full bg-surface-elevated border border-border"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface-elevated border border-border text-ink">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-ink">{personalInfo.fullName} — Official Resume</h3>
                  <p className="text-xs text-ink-muted">{personalInfo.title} • {personalInfo.degree}</p>
                </div>
              </div>

              {/* Resume Image Container */}
              <div className="rounded-2xl border border-border overflow-hidden max-h-[60vh] overflow-y-auto custom-scrollbar bg-surface-elevated p-2">
                <img
                  src="/resume-preview.png"
                  alt="Resume Full Preview"
                  onError={() => setImageError(true)}
                  className="w-full h-auto object-contain rounded-xl"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-2 border-t border-border">
                <button
                  type="button"
                  onClick={() => setZoomModalOpen(false)}
                  className="px-5 py-2.5 text-xs font-bold text-ink-muted hover:text-ink"
                >
                  Close
                </button>
                <a
                  href={personalInfo.resumeUrl}
                  download="Abhishek_Kumar_Resume.pdf"
                  onClick={handleDownload}
                  className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-2.5 text-xs font-bold text-primary hover:opacity-90 shadow-lg font-mono"
                >
                  <Download className="h-4 w-4" />
                  <span>Download PDF Document</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
