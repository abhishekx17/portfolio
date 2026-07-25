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
import { Sparkles, Terminal, Code2, Cpu, Database, Wrench } from "lucide-react";

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

const categoryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Frontend: Code2,
  Backend: Cpu,
  Database: Database,
  Tools: Wrench,
  Language: Terminal,
  Styling: Sparkles,
};

const projectsUsed: Record<string, string[]> = {
  React: ["QuickEMS", "Velora", "ShopNest", "WeatherScope"],
  "Node.js": ["QuickEMS", "Velora", "ShopNest"],
  MongoDB: ["QuickEMS", "Velora"],
  "Express.js": ["QuickEMS", "Velora", "ShopNest"],
  TypeScript: ["WeatherScope", "Portfolio"],
  "Tailwind CSS": ["QuickEMS", "Velora", "ShopNest"],
  "Git & GitHub": ["All Projects"],
  "REST APIs": ["QuickEMS", "Velora"],
};

const categories = ["All", "Frontend", "Backend", "Database", "Tools"];

export function TechStack() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredTech =
    activeCategory === "All"
      ? techStack
      : techStack.filter(
          (tech) =>
            tech.category === activeCategory ||
            (activeCategory === "Backend" && tech.category === "Language") ||
            (activeCategory === "Frontend" && tech.category === "Styling")
        );

  return (
    <section id="stack" className="relative py-20 bg-surface/30 border-y border-border overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-6xl px-6 md:px-8 relative">
        <SectionHeading
          index="02"
          title="Tech Stack & Expertise"
          subtitle="Core engineering tools, frameworks, and technologies I rely on to build scalable full-stack web applications."
        />

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`relative rounded-full px-5 py-2 text-xs font-bold tracking-wide transition-all duration-300 ${
                  isActive
                    ? "text-primary shadow-sm"
                    : "text-ink-muted hover:text-ink border border-border bg-surface hover:bg-surface-elevated"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTechTab"
                    className="absolute inset-0 rounded-full bg-ink"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Tech Bento Cards Grid */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredTech.map((tech) => {
              const LogoComp = logoMap[tech.iconKey] || ReactLogo;
              const CategoryIcon = categoryIcons[tech.category] || Code2;
              const usedIn = projectsUsed[tech.name] || ["Production Apps"];

              return (
                <motion.div
                  layout
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25, ease: smoothEase }}
                  whileHover={{ y: -5 }}
                  className="group relative rounded-2xl border border-border bg-surface-elevated/80 p-5 backdrop-blur-md hover:border-accent/40 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
                >
                  {/* Subtle hover gradient light */}
                  <div className="absolute top-0 right-0 h-24 w-24 bg-accent/5 rounded-full blur-xl pointer-events-none group-hover:bg-accent/15 transition-all" />

                  <div>
                    {/* Header Row: Logo + Category Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-surface text-ink group-hover:border-accent/50 group-hover:scale-105 transition-all duration-300 shadow-xs">
                        <LogoComp className="h-6 w-6" />
                      </div>

                      <span className="inline-flex items-center gap-1 text-[10px] font-extrabold tracking-wider uppercase px-2.5 py-1 rounded-full border border-border bg-surface text-ink-muted group-hover:border-accent/30 transition-colors">
                        <CategoryIcon className="h-3 w-3 text-accent" />
                        {tech.category}
                      </span>
                    </div>

                    {/* Tech Title & Description */}
                    <div className="space-y-1.5 mb-3">
                      <h3 className="font-display text-base font-extrabold text-ink group-hover:text-accent transition-colors flex items-center gap-2">
                        {tech.name}
                        {tech.level === "Expert" && (
                          <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" title="Expert Level" />
                        )}
                      </h3>
                      <p className="text-xs text-ink-muted leading-relaxed font-normal">
                        {tech.description}
                      </p>
                    </div>
                  </div>

                  {/* Footer Row: Projects Tags & Proficiency */}
                  <div className="pt-3 border-t border-border/60 mt-2 space-y-2">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-ink-faint font-mono text-[10px] uppercase tracking-wider font-semibold">Proficiency</span>
                      <span className={`font-mono text-[11px] font-bold ${tech.level === 'Expert' ? 'text-emerald-500' : 'text-accent'}`}>
                        {tech.level || "Advanced"}
                      </span>
                    </div>

                    {/* Project Tags */}
                    <div className="flex items-center gap-1 flex-wrap">
                      <span className="text-[10px] text-ink-faint font-medium">Used in:</span>
                      {usedIn.slice(0, 2).map((proj) => (
                        <span
                          key={proj}
                          className="text-[10px] font-semibold px-2 py-0.5 rounded bg-surface border border-border/80 text-ink-muted"
                        >
                          {proj}
                        </span>
                      ))}
                      {usedIn.length > 2 && (
                        <span className="text-[10px] font-mono text-ink-faint">+{usedIn.length - 2}</span>
                      )}
                    </div>
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
