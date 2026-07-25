import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Code2, ExternalLink, X } from "lucide-react";
import { GitHubIcon as GithubIcon } from "./icons/SocialIcons";
import { projects } from "../data/portfolio";
import { smoothEase } from "../lib/motion";
import { SectionHeading } from "./SectionHeading";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const activeProject = projects.find((p) => p.title === selectedProject);

  return (
    <section id="projects" className="py-20 md:py-28 relative bg-surface/30 border-y border-border">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <SectionHeading
          index="03"
          title="Selected Work"
          subtitle="Production-ready applications demonstrating complex state management, scalable APIs, and clean UI design."
        />

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: smoothEase }}
              className="group relative flex flex-col rounded-3xl border border-border bg-surface glass-card overflow-hidden shadow-md hover:shadow-xl transition-all"
            >
              <div
                className="relative aspect-[16/10] overflow-hidden bg-surface-elevated cursor-pointer"
                onClick={() => setSelectedProject(project.title)}
              >
                <div className="absolute inset-0 bg-ink/10 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-primary/40 backdrop-blur-sm">
                  <span className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-xs font-bold text-primary shadow-xl">
                    View Case Study
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </div>

              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[11px] font-mono font-semibold text-ink-faint">
                      {project.overview.split(" ")[0] || "Full-Stack"}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-ink mb-3 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-ink-muted leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg border border-border/60 bg-surface-elevated px-2.5 py-1 text-[10px] font-mono font-medium text-ink-muted"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="rounded-lg border border-border/60 bg-surface-elevated px-2.5 py-1 text-[10px] font-mono font-medium text-ink-faint">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12 bg-primary/95 backdrop-blur-xl overflow-y-auto custom-scrollbar"
            onClick={(e) => {
              if (e.target === e.currentTarget) setSelectedProject(null);
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl rounded-3xl border border-border bg-surface shadow-2xl overflow-hidden my-auto"
            >
              <div className="absolute top-4 right-4 z-20">
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/80 backdrop-blur-md border border-border text-ink hover:text-accent hover:border-accent/40 transition-all shadow-md"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="relative aspect-video w-full border-b border-border bg-surface-elevated overflow-hidden">
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="h-full w-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-80" />
              </div>

              <div className="p-6 sm:p-8 md:p-10">
                <div className="flex flex-wrap items-start justify-between gap-6 mb-8">
                  <div>
                    <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-ink mb-3 tracking-tight">
                      {activeProject.title}
                    </h3>
                    <div className="flex items-center gap-3 text-xs font-mono font-medium text-ink-muted">
                      <span className="text-accent">{activeProject.overview.split(" ")[0] || "Full-Stack"}</span>
                      <span>•</span>
                      <span>{activeProject.domainUrl}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {activeProject.github && (
                      <a
                        href={activeProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-elevated px-4 py-2.5 text-xs font-bold text-ink hover:border-accent/40 hover:text-accent transition-all shadow-xs"
                      >
                        <GithubIcon className="h-4 w-4" />
                        Code
                      </a>
                    )}
                    {activeProject.live && (
                      <a
                        href={activeProject.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-xs font-bold text-primary hover:opacity-90 transition-all shadow-xs"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-10 border-t border-border/60 pt-8">
                  <div className="md:col-span-2 space-y-6">
                    <div>
                      <h4 className="font-display text-sm font-bold uppercase tracking-widest text-ink mb-3">
                        Project Overview
                      </h4>
                      <p className="text-sm text-ink-muted leading-relaxed">
                        {activeProject.description}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-display text-sm font-bold uppercase tracking-widest text-ink mb-3 flex items-center gap-2">
                        <Code2 className="h-4 w-4 text-accent" />
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {activeProject.highlights.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-ink-muted leading-relaxed">
                            <span className="text-emerald-500 font-bold mt-0.5">▹</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-6 bg-surface-elevated/30 rounded-2xl p-6 border border-border/40 h-fit">
                    <div>
                      <h4 className="font-display text-sm font-bold uppercase tracking-widest text-ink mb-3">
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {activeProject.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-lg border border-border/60 bg-surface px-2.5 py-1 text-[11px] font-mono font-medium text-ink-muted"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
