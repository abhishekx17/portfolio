import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  ExternalLink,
  Eye,
  Globe,
  Lock,
  Maximize2,
  Sparkles,
  X,
} from "lucide-react";
import { GitHubIcon } from "./icons/SocialIcons";
import { projects } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";
import { smoothEase } from "../lib/motion";

export function Projects() {
  const [activePreview, setActivePreview] = useState<(typeof projects)[0] | null>(null);

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="mx-auto max-w-6xl px-6 md:px-8 relative">
        <SectionHeading
          index="03"
          title="Featured Projects"
          subtitle="Selected full-stack web applications — complete with homepage visual mockups, live preview drawers, and code architecture details."
        />

        {/* Compact & Arranged Project Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.08,
                ease: smoothEase,
              }}
              className="group flex flex-col rounded-2xl border border-border bg-surface glass-card overflow-hidden hover:border-border-strong hover:shadow-md transition-all duration-300"
            >
              {/* macOS Window Header */}
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-border bg-surface-elevated">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80 inline-block" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80 inline-block" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80 inline-block" />
                  <span className="text-[10px] font-mono text-ink-muted ml-2 truncate max-w-[150px]">
                    {project.domainUrl}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="hidden sm:flex items-center gap-1.5 rounded-full border border-border bg-primary px-3 py-0.5 text-[10px] text-ink-muted font-mono">
                    <Lock className="h-2.5 w-2.5 text-emerald-500 shrink-0" />
                    <span className="truncate">https://</span>
                  </div>
                  <button
                    onClick={() => setActivePreview(project)}
                    className="flex h-6 w-6 items-center justify-center rounded-md border border-border bg-primary/50 text-ink-muted hover:text-ink transition-colors"
                    title="Expand Live Preview"
                  >
                    <Maximize2 className="h-3 w-3" />
                  </button>
                </div>
              </div>

              {/* Compact Homepage Image Frame */}
              <div
                className="relative h-44 sm:h-52 overflow-hidden bg-primary group/img cursor-pointer"
                onClick={() => setActivePreview(project)}
              >
                <img
                  src={project.image}
                  alt={`${project.title} homepage preview`}
                  className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover/img:scale-105"
                  loading="lazy"
                />

                {/* Subtle Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-70 group-hover/img:opacity-30 transition-opacity duration-300" />

                {/* Hover Preview Badge */}
                <div className="absolute inset-0 flex items-center justify-center bg-primary/60 backdrop-blur-xs opacity-0 group-hover/img:opacity-100 transition-opacity duration-300">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-2 text-xs font-bold text-primary shadow-md">
                    <Eye className="h-3.5 w-3.5" />
                    Live Preview
                  </span>
                </div>

                {/* Top Badge */}
                <div className="absolute top-2.5 left-3">
                  <span className="rounded-full border border-border bg-surface/90 backdrop-blur-md px-2.5 py-0.5 text-[10px] font-bold text-ink font-display shadow-xs">
                    0{i + 1}
                  </span>
                </div>
              </div>

              {/* Compact Card Content */}
              <div className="flex-1 p-5 md:p-6 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <h3 className="font-display text-lg font-bold text-ink group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-accent hover:underline flex items-center gap-1 shrink-0"
                    >
                      Live <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>

                  <p className="text-xs text-ink-muted leading-relaxed font-normal mb-3">
                    {project.overview}
                  </p>

                  {/* Highlights pills */}
                  {project.highlights && (
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.highlights.slice(0, 3).map((h) => (
                        <span
                          key={h}
                          className="inline-flex items-center gap-1 rounded-md bg-surface-elevated border border-border px-2 py-0.5 text-[10px] font-medium text-ink-muted"
                        >
                          <Sparkles className="h-2.5 w-2.5 text-accent" />
                          {h}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Tags & Action Links */}
                <div className="space-y-3 pt-1">
                  <div className="flex flex-wrap gap-1">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-surface-elevated border border-border px-2 py-0.5 text-[10px] font-medium text-ink-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Footer Links */}
                  <div className="flex items-center justify-between pt-3 border-t border-border/60">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link inline-flex items-center gap-1.5 text-xs font-semibold text-ink hover:text-accent transition-colors"
                    >
                      <GitHubIcon className="h-3.5 w-3.5" />
                      Source Code
                      <ArrowUpRight className="h-3 w-3 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                    </a>

                    <button
                      onClick={() => setActivePreview(project)}
                      className="inline-flex items-center gap-1 rounded-full border border-border bg-surface-elevated px-3 py-1 text-[11px] font-bold text-ink hover:border-accent transition-all shadow-xs"
                    >
                      <Globe className="h-3 w-3 text-accent" />
                      Preview
                    </button>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Interactive Preview Drawer / Modal */}
      <AnimatePresence>
        {activePreview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-md"
            onClick={() => setActivePreview(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 16 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 16 }}
              transition={{ duration: 0.25, ease: smoothEase }}
              className="relative w-full max-w-4xl h-[82vh] rounded-2xl border border-border bg-surface shadow-2xl flex flex-col overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Window Header */}
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-border bg-surface-elevated">
                <div className="flex items-center gap-2.5">
                  <div className="flex items-center gap-1.5">
                    <span className="h-3 w-3 rounded-full bg-rose-500" />
                    <span className="h-3 w-3 rounded-full bg-amber-500" />
                    <span className="h-3 w-3 rounded-full bg-emerald-500" />
                  </div>
                  <span className="font-display font-bold text-xs md:text-sm text-ink ml-2 truncate">
                    {activePreview.title} — Homepage Preview
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={activePreview.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-ink px-3.5 py-1 text-xs font-bold text-primary hover:opacity-90 transition-colors"
                  >
                    Open Live <ExternalLink className="h-3 w-3" />
                  </a>
                  <button
                    onClick={() => setActivePreview(null)}
                    className="p-1 rounded-lg border border-border text-ink-muted hover:text-ink transition-colors"
                    aria-label="Close modal"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Modal Body */}
              <div className="flex-1 overflow-y-auto bg-primary p-4 md:p-6 flex flex-col items-center justify-start">
                <div className="w-full max-w-3xl rounded-xl overflow-hidden border border-border shadow-sm bg-surface">
                  <div className="p-2.5 border-b border-border bg-surface-elevated flex items-center justify-between text-[11px] text-ink-muted font-mono">
                    <span>https://{activePreview.domainUrl}</span>
                    <span className="text-emerald-500">● Live Deployment</span>
                  </div>
                  <img
                    src={activePreview.image}
                    alt={activePreview.title}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="mt-5 text-center max-w-lg">
                  <p className="text-xs text-ink-muted leading-relaxed">
                    {activePreview.description}
                  </p>
                  <div className="mt-3 flex justify-center gap-4">
                    <a
                      href={activePreview.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-accent hover:underline"
                    >
                      Visit Deployment <ExternalLink className="h-3.5 w-3.5" />
                    </a>
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
