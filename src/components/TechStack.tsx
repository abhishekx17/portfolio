import { useState, useEffect, useRef } from "react";
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
import { fadeInUp, staggerContainer, softSpring } from "../lib/motion";
import { Cpu, CheckCircle2, Pause, Play, Sparkles, Activity } from "lucide-react";

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
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const userInteractedRef = useRef(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const activeItem = techStack[selectedIndex] || techStack[0];
  const IconComponent = logoMap[activeItem.iconKey];

  // Auto-cycling continuous spotlight animation
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setSelectedIndex((prev) => (prev + 1) % techStack.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  // Handle manual tech click with temporary pause
  const handleSelectTech = (index: number) => {
    setSelectedIndex(index);
    userInteractedRef.current = true;

    // Reset user interaction timer after 7 seconds of inactivity
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      userInteractedRef.current = false;
    }, 7000);
  };

  return (
    <section id="stack" className="py-16 border-t border-border/60 relative overflow-hidden">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="space-y-8"
        >
          {/* Section Header */}
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

          {/* Main Interactive Deck */}
          <motion.div
            variants={fadeInUp}
            className="group/deck relative rounded-3xl border border-border bg-surface p-6 sm:p-8 shadow-sm space-y-6 overflow-hidden"
          >
            {/* Ambient Background Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293708_1px,transparent_1px),linear-gradient(to_bottom,#1f293708_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

            {/* Top Deck Control Header */}
            <div className="flex items-center justify-between z-10 relative">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-ink-muted uppercase tracking-wider">
                <Activity className="h-3.5 w-3.5 text-emerald-500 animate-pulse" />
                <span>Primary Tech Stack</span>
              </div>

              {/* Auto Spotlight Toggle */}
              <button
                type="button"
                onClick={() => setIsAutoPlay(!isAutoPlay)}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface-elevated px-3 py-1 text-[11px] font-mono font-bold text-ink-muted hover:text-ink hover:border-border-strong transition-all shadow-xs"
                title={isAutoPlay ? "Pause Auto-Rotate" : "Resume Auto-Rotate"}
              >
                {isAutoPlay ? (
                  <>
                    <Pause className="h-3 w-3 text-emerald-500" />
                    <span>Auto-Rotate: ON</span>
                  </>
                ) : (
                  <>
                    <Play className="h-3 w-3 text-ink-faint" />
                    <span>Auto-Rotate: OFF</span>
                  </>
                )}
              </button>
            </div>

            {/* Floating Staggered Micro-Pulsing Tech Nodes */}
            <div className="relative z-10 flex flex-wrap items-center justify-center gap-2.5 py-2">
              {techStack.map((tech, idx) => {
                const NodeIcon = logoMap[tech.iconKey];
                const isSelected = selectedIndex === idx;

                return (
                  <motion.div
                    key={tech.name}
                    animate={{
                      y: isSelected ? [0, -3, 0] : [0, -4, 0],
                    }}
                    transition={{
                      duration: 2.8 + (idx % 4) * 0.3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: idx * 0.15,
                    }}
                    className="relative"
                  >
                    <motion.button
                      type="button"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={softSpring}
                      onClick={() => handleSelectTech(idx)}
                      className={`relative flex items-center gap-2 rounded-2xl px-3 sm:px-4 py-2 sm:py-2.5 text-xs font-mono font-bold transition-all border ${
                        isSelected
                          ? "bg-ink text-primary border-ink shadow-lg ring-2 ring-emerald-500/30"
                          : "bg-surface-elevated text-ink border-border hover:border-border-strong"
                      }`}
                    >
                      {NodeIcon && (
                        <span className="h-4 w-4 shrink-0 flex items-center justify-center">
                          <NodeIcon className="h-4 w-4" />
                        </span>
                      )}
                      <span className="whitespace-nowrap">{tech.name}</span>
                      <span
                        className={`hidden sm:inline-block text-[9px] px-1.5 py-0.5 rounded-full font-bold ${
                          isSelected
                            ? "bg-primary/20 text-primary"
                            : "bg-surface border border-border text-ink-muted"
                        }`}
                      >
                        {tech.category}
                      </span>

                      {/* Continuous Auto-Spotlight Progress Beam for Selected Item */}
                      {isSelected && isAutoPlay && (
                        <motion.div
                          key={`progress-${idx}-${selectedIndex}`}
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 3.5, ease: "linear" }}
                          className="absolute bottom-0 left-2 right-2 h-0.5 bg-emerald-400 rounded-full"
                        />
                      )}
                    </motion.button>
                  </motion.div>
                );
              })}
            </div>

            {/* Active Tech Stack Live Detail HUD Card with Continuous Beam */}
            <div className="relative z-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeItem.name}
                  initial={{ opacity: 0, y: 12, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -12, scale: 0.98 }}
                  transition={{ duration: 0.25 }}
                  className="relative overflow-hidden p-5 sm:p-6 rounded-2xl border border-border bg-surface-elevated/90 backdrop-blur-md shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                >
                  {/* Continuous Scanning Beam Line */}
                  <motion.div
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-0 left-0 h-[1.5px] w-1/3 bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-80"
                  />

                  {/* Left Tech Details */}
                  <div className="space-y-1.5 min-w-0 flex-1">
                    <div className="flex items-center gap-2.5 flex-wrap">
                      {IconComponent && (
                        <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-surface border border-border text-ink shadow-xs shrink-0">
                          <IconComponent className="h-4.5 w-4.5" />
                        </div>
                      )}
                      <div>
                        <h3 className="font-display font-extrabold text-base sm:text-lg text-ink tracking-tight">
                          {activeItem.name}
                        </h3>
                      </div>
                      <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded-md bg-surface border border-border text-ink-muted">
                        {activeItem.level}
                      </span>
                    </div>

                    <p className="text-xs text-ink-muted leading-relaxed max-w-xl">
                      {activeItem.description}
                    </p>
                  </div>

                  {/* Right Live Status Badge */}
                  <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto gap-2 border-t sm:border-t-0 sm:border-l border-border/60 pt-3 sm:pt-0 sm:pl-5 shrink-0">
                    <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-500 font-bold">
                      <CheckCircle2 className="h-4 w-4 shrink-0" />
                      <span>Production Verified</span>
                    </div>

                    <div className="inline-flex items-center gap-1 text-[10px] font-mono text-ink-faint">
                      <Sparkles className="h-3 w-3 text-accent" />
                      <span>Runtime Active</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
