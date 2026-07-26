import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GitPullRequest, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { openSourceHighlights, personalInfo } from "../data/portfolio";
import { fadeInUp, staggerContainer } from "../lib/motion";

export function OpenSourceHighlights() {
  const [activeSnippetIndex, setActiveSnippetIndex] = useState<number | null>(0);

  return (
    <section id="highlights" className="py-20 border-t border-border/60 relative">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
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
              <GitPullRequest className="h-3.5 w-3.5 text-ink-muted" />
              <span>Full-Stack & Open Source Highlights</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-ink tracking-tight">
              Engineering Contributions & Merged PRs
            </h2>
            <p className="text-sm sm:text-base text-ink-muted max-w-xl mx-auto">
              Production security hardening, role-based auth, Razorpay webhooks, and database optimizations.
            </p>
          </motion.div>

          {/* Quick Stat Badges */}
          <motion.div variants={fadeInUp} className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto">
            <div className="p-4 rounded-2xl border border-border bg-surface text-center space-y-1">
              <span className="block font-mono text-2xl font-black text-ink">50+</span>
              <span className="block text-[11px] font-mono text-ink-muted uppercase">Merged PRs</span>
            </div>
            <div className="p-4 rounded-2xl border border-border bg-surface text-center space-y-1">
              <span className="block font-mono text-2xl font-black text-ink">100%</span>
              <span className="block text-[11px] font-mono text-ink-muted uppercase">JWT Auth Verified</span>
            </div>
            <div className="p-4 rounded-2xl border border-border bg-surface text-center space-y-1">
              <span className="block font-mono text-2xl font-black text-ink">MERN</span>
              <span className="block text-[11px] font-mono text-ink-muted uppercase">Full Stack</span>
            </div>
            <div className="p-4 rounded-2xl border border-border bg-surface text-center space-y-1">
              <span className="block font-mono text-2xl font-black text-ink">REST</span>
              <span className="block text-[11px] font-mono text-ink-muted uppercase">API Spec</span>
            </div>
          </motion.div>

          {/* List of Pull Requests / Highlights */}
          <motion.ul variants={fadeInUp} className="mx-auto max-w-3xl space-y-4">
            {openSourceHighlights.map((item, idx) => {
              const isExpanded = activeSnippetIndex === idx;

              return (
                <motion.li key={idx} variants={fadeInUp}>
                  <div
                    className={`rounded-2xl border transition-all duration-300 overflow-hidden bg-surface ${
                      isExpanded ? "border-border-strong shadow-md" : "border-border hover:border-border-strong"
                    }`}
                  >
                    <div
                      onClick={() => setActiveSnippetIndex(isExpanded ? null : idx)}
                      className="p-5 flex items-start gap-4 cursor-pointer select-none"
                    >
                      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-surface-elevated border border-border text-emerald-500">
                        <CheckCircle2 className="h-4 w-4" />
                      </span>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-2">
                          <span className="block text-sm font-bold text-ink font-mono tracking-tight">
                            {item.title}
                          </span>
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="p-1 text-ink-muted hover:text-ink transition-colors"
                            title="Open PR link"
                          >
                            <ArrowUpRight className="h-4 w-4" />
                          </a>
                        </div>
                        <div className="mt-1 flex flex-wrap items-center gap-3 text-xs text-ink-muted font-mono">
                          <span className="font-semibold text-ink">{item.repo}</span>
                          <span>•</span>
                          <span className="text-emerald-500 font-bold uppercase">{item.status}</span>
                          <span>•</span>
                          <span>{item.date}</span>
                        </div>
                      </div>
                    </div>

                    {/* Expandable Code Snippet Drawer */}
                    <AnimatePresence>
                      {isExpanded && item.snippet && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="border-t border-border bg-surface-elevated p-4 font-mono text-xs text-ink-muted leading-relaxed overflow-x-auto custom-scrollbar"
                        >
                          <div className="text-[10px] text-ink-faint mb-1.5 font-bold uppercase">// Code Implementation Snippet</div>
                          <pre className="text-ink bg-surface p-3 rounded-xl border border-border/80 text-[11px] overflow-x-auto">
                            <code>{item.snippet}</code>
                          </pre>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.li>
              );
            })}
          </motion.ul>

          {/* GitHub Action Link */}
          <motion.div variants={fadeInUp} className="text-center pt-2">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-ink hover:underline font-mono"
            >
              <span>Explore repository history on GitHub</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
