import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
import { SectionHeading } from "./SectionHeading";
import { smoothEase } from "../lib/motion";

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

const categories = ["All", "Frontend", "Backend", "Database", "Tools"];

export function TechStack() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredTech =
    activeCategory === "All"
      ? techStack
      : techStack.filter((tech) => tech.category === activeCategory);

  return (
    <section id="stack" className="relative py-16 md:py-20 bg-surface/40 border-y border-border overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 md:px-8 relative">
        <SectionHeading
          index="02"
          title="Tech Stack"
          subtitle="Core technologies & frameworks I utilize to architect scalable full-stack web applications."
        />

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`relative rounded-full px-5 py-2 text-xs font-bold tracking-wide transition-colors ${
                activeCategory === cat
                  ? "text-primary shadow-xs"
                  : "text-ink-muted hover:text-ink border border-border bg-surface"
              }`}
            >
              {activeCategory === cat && (
                <motion.div
                  layoutId="activeCategoryTab"
                  className="absolute inset-0 rounded-full bg-ink"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          ))}
        </div>

        {/* Tech Grid Cards with Official Logos */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredTech.map((tech) => {
              const LogoComp = logoMap[tech.iconKey] || ReactLogo;

              return (
                <motion.div
                  layout
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25, ease: smoothEase }}
                  whileHover={{ y: -4 }}
                  className="group relative rounded-xl border border-border bg-surface p-5 glass-card hover:border-border-strong transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface-elevated text-ink group-hover:border-accent/40 transition-all duration-300 shadow-xs">
                        <LogoComp className="h-5 w-5" />
                      </div>

                      <span className="text-[9px] font-extrabold tracking-wider uppercase px-2.5 py-1 rounded-full border border-border text-ink-muted bg-surface-elevated">
                        {tech.category}
                      </span>
                    </div>

                    <h3 className="font-display text-base font-bold text-ink mb-1 group-hover:text-accent transition-colors">
                      {tech.name}
                    </h3>
                    <p className="text-xs text-ink-muted leading-relaxed font-normal">
                      {tech.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-border/50 flex items-center justify-between">
                    <span className="text-[10px] text-ink-faint uppercase tracking-wider font-semibold">Proficiency</span>
                    <span className="text-xs font-bold text-ink">
                      {tech.level || "Advanced"}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
