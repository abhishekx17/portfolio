import { useState } from "react";
import { motion } from "framer-motion";
import {
  ReactLogo,
  NodeLogo,
  MongoLogo,
  ExpressLogo,
  TypeScriptLogo,
  TailwindLogo,
  GitLogo,
  RestApiLogo,
} from "./icons/TechLogos";
import { techStack } from "../data/portfolio";
import { fadeInUp, staggerContainer, softSpring } from "../lib/motion";
import { Cpu, Sparkles, CheckCircle2 } from "lucide-react";

const logoMap: Record<string, React.ComponentType<{ className?: string }>> = {
  react: ReactLogo,
  node: NodeLogo,
  mongo: MongoLogo,
  express: ExpressLogo,
  typescript: TypeScriptLogo,
  tailwind: TailwindLogo,
  git: GitLogo,
  rest: RestApiLogo,
};

export function TechStack() {
  const [selectedTech, setSelectedTech] = useState(techStack[0].name);

  const activeItem = techStack.find((t) => t.name === selectedTech) || techStack[0];

  return (
    <section id="stack" className="py-16 border-t border-border/60 relative">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="space-y-8"
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="text-center space-y-2">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3.5 py-1 text-xs font-mono font-bold text-ink">
              <Cpu className="h-3.5 w-3.5 text-ink-muted" />
              <span>Engineering Stack</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-ink tracking-tight">
              Tech Stack & Core Runtimes
            </h2>
            <p className="text-xs sm:text-sm text-ink-muted max-w-md mx-auto">
              Production frameworks and database systems used across full-stack applications.
            </p>
          </motion.div>

          {/* Compact Rounded Animated Tech Stack Container */}
          <motion.div
            variants={fadeInUp}
            className="rounded-3xl border border-border bg-surface p-6 sm:p-8 shadow-sm space-y-6"
          >
            {/* Tech Stack Pills Deck (Short & Space-Efficient) */}
            <div className="flex flex-wrap items-center justify-center gap-2.5">
              {techStack.map((tech) => {
                const IconComponent = logoMap[tech.iconKey];
                const isSelected = selectedTech === tech.name;

                return (
                  <motion.button
                    key={tech.name}
                    type="button"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    transition={softSpring}
                    onClick={() => setSelectedTech(tech.name)}
                    className={`flex items-center gap-2 rounded-2xl px-4 py-2.5 text-xs font-mono font-bold transition-all border ${
                      isSelected
                        ? "bg-ink text-primary border-ink shadow-md"
                        : "bg-surface-elevated text-ink border-border hover:border-border-strong"
                    }`}
                  >
                    {IconComponent && (
                      <span className="h-4 w-4 shrink-0 flex items-center justify-center">
                        <IconComponent className="h-4 w-4" />
                      </span>
                    )}
                    <span>{tech.name}</span>
                    <span
                      className={`text-[9px] px-1.5 py-0.5 rounded-full font-bold ${
                        isSelected
                          ? "bg-primary/20 text-primary"
                          : "bg-surface border border-border text-ink-muted"
                      }`}
                    >
                      {tech.category}
                    </span>
                  </motion.button>
                );
              })}
            </div>

            {/* Active Tech Stack Compact Detail Card */}
            <motion.div
              key={activeItem.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="p-5 rounded-2xl border border-border bg-surface-elevated flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-display font-bold text-base text-ink">{activeItem.name}</h3>
                  <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded-md bg-surface border border-border text-ink-muted">
                    {activeItem.level}
                  </span>
                </div>
                <p className="text-xs text-ink-muted max-w-xl">{activeItem.description}</p>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-emerald-500 font-bold shrink-0">
                <CheckCircle2 className="h-4 w-4" />
                <span>Production Verified</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
