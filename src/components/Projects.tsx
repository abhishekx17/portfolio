import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Code2, ExternalLink, X, Sparkles, CheckCircle2, Layers } from "lucide-react";
import { GitHubIcon } from "./icons/SocialIcons";
import { projects } from "../data/portfolio";
import { smoothEase, fadeInUp, staggerContainer } from "../lib/motion";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const activeProject = projects.find((p) => p.title === selectedProject);

  return (
    <section id="projects" className="py-20 md:py-28 relative overflow-hidden select-none">
      <div className="mx-auto max-w-6xl px-4 md:px-6 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="space-y-12"
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="text-center space-y-3">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3.5 py-1 text-xs font-mono font-bold text-ink">
              <Layers className="h-3.5 w-3.5 text-ink-muted" />
              <span>Selected Work</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-ink tracking-tight">
              Featured Full-Stack Web Applications
            </h2>
            <p className="text-sm sm:text-base text-ink-muted max-w-xl mx-auto">
              Production web platforms featuring role-based auth, payroll automation, Cloudinary hosting, and Razorpay gateways.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                variants={fadeInUp}
                className="group relative flex flex-col rounded-3xl border border-border bg-surface overflow-hidden shadow-md hover:border-border-strong hover:shadow-xl transition-all duration-500"
              >
                {/* Image Preview Container */}
                <div
                  className="relative aspect-[16/10] overflow-hidden bg-surface-elevated cursor-pointer"
                  onClick={() => setSelectedProject(project.title)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />

                  {/* Top Domain & Status Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20 pointer-events-none">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface/90 backdrop-blur-md px-3.5 py-1.5 text-[11px] font-mono font-bold text-ink shadow-xs">
                      <Sparkles className="h-3 w-3 text-ink-muted" />
                      {project.domainUrl}
                    </span>

                    <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 backdrop-blur-md px-3 py-1 text-[10px] font-mono font-bold text-emerald-500">
                      Live App
                    </span>
                  </div>

                  {/* Hover Overlay Trigger */}
                  <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-primary/60 backdrop-blur-xs">
                    <span className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-xs font-bold text-primary shadow-xl hover:scale-105 transition-transform font-mono">
                      <span>Explore Architecture</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>

                {/* Card Body Info */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div>
                    <div className="flex items-center justify-between gap-4 mb-2">
                      <h3 className="font-display text-2xl font-bold text-ink tracking-tight">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-2">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface-elevated text-ink hover:text-white hover:border-border-strong transition-all shadow-xs"
                            title="View GitHub Repository"
                          >
                            <GitHubIcon className="h-4 w-4" />
                          </a>
                        )}
                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-primary hover:opacity-90 transition-all shadow-md"
                            title="Open Live Application"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        )}
                      </div>
                    </div>

                    <p className="text-xs text-ink-muted leading-relaxed mb-4">
                      {project.overview}
                    </p>

                    {/* Feature Highlights Pills */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.highlights.map((h) => (
                        <span
                          key={h}
                          className="inline-flex items-center gap-1 rounded-lg bg-surface-elevated border border-border px-2.5 py-1 text-[11px] font-mono font-semibold text-ink"
                        >
                          <CheckCircle2 className="h-3 w-3 text-emerald-500" />
                          <span>{h}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Tech Tags */}
                  <div className="pt-4 border-t border-border flex items-center justify-between text-xs font-mono">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((t) => (
                        <span key={t} className="text-ink-faint">
                          #{t}
                        </span>
                      ))}
                    </div>
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project.title)}
                      className="text-ink font-bold hover:underline"
                    >
                      Details →
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Interactive Modal View */}
      <AnimatePresence>
        {selectedProject && activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-primary/95 backdrop-blur-xl overflow-y-auto select-auto"
            onClick={(e) => {
              if (e.target === e.currentTarget) setSelectedProject(null);
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
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 text-ink-muted hover:text-ink rounded-full bg-surface-elevated border border-border"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-ink">
                    {activeProject.title}
                  </h3>
                  <span className="rounded-full bg-surface-elevated border border-border px-3 py-1 text-xs font-mono font-bold text-ink">
                    MERN Stack
                  </span>
                </div>
                <p className="text-xs font-mono text-ink-muted">{activeProject.domainUrl}</p>
              </div>

              <div className="rounded-2xl border border-border overflow-hidden max-h-[40vh]">
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <div className="space-y-3">
                <h4 className="font-display font-bold text-sm text-ink uppercase tracking-wider">
                  Project Description & Architecture
                </h4>
                <p className="text-sm text-ink-muted leading-relaxed font-sans">
                  {activeProject.description}
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-border">
                <div className="flex gap-2">
                  {activeProject.github && (
                    <a
                      href={activeProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-elevated px-5 py-2.5 text-xs font-bold text-ink hover:border-border-strong font-mono"
                    >
                      <GitHubIcon className="h-4 w-4" />
                      <span>GitHub Codebase</span>
                    </a>
                  )}
                  {activeProject.live && (
                    <a
                      href={activeProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-2.5 text-xs font-bold text-primary hover:opacity-90 font-mono shadow-md"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>Open Live Demo</span>
                    </a>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 text-xs font-bold text-ink-muted hover:text-ink"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
