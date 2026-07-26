import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, Terminal } from "lucide-react";
import { aboutParagraphs, developerTools, personalInfo } from "../data/portfolio";
import { fadeInUp, staggerContainer, softSpring } from "../lib/motion";
import { SocialIcons } from "./icons/SocialIcons";
import { ToolLogos } from "./icons/ToolLogos";
import { LinkedInCard } from "./LinkedInCard";

interface AboutProps {
  onShowToast?: (message: string) => void;
}

export function About({ onShowToast }: AboutProps) {
  return (
    <section id="about" className="py-20 border-t border-border/60 relative">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="space-y-12"
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center space-y-3">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3.5 py-1 text-xs font-mono font-bold text-ink">
              <Sparkles className="h-3.5 w-3.5 text-ink-muted" />
              <span>About & Workflow</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-ink tracking-tight">
              Here's what sets me apart & how I build
            </h2>
          </motion.div>

          {/* 4-Tile Bento Grid Layout */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-12 gap-4"
          >
            {/* BENTO TILE 1: Learn More About Me */}
            <a
              href="#contact"
              className="group relative md:col-span-7 flex flex-col justify-between rounded-3xl border border-border bg-surface p-4 sm:p-8 hover:border-border-strong hover:bg-surface-elevated transition-all duration-300 overflow-hidden shadow-xs"
            >
              <div className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-surface-elevated border border-border text-ink opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all">
                <ArrowUpRight className="h-4 w-4" />
              </div>

              <div className="space-y-4 max-w-md z-10">
                <h3 className="font-display text-xl font-bold text-ink">Learn more about me</h3>
                <p className="text-sm text-ink-muted leading-relaxed">
                  {aboutParagraphs[0]}
                </p>
                <div className="pt-2 flex flex-wrap items-center gap-2 text-xs font-mono font-semibold text-ink">
                  <span className="rounded-full bg-surface-elevated border border-border px-3 py-1">
                    {personalInfo.degree}
                  </span>
                  <span className="rounded-full bg-surface-elevated border border-border px-3 py-1 text-ink-muted">
                    {personalInfo.timeline}
                  </span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between text-xs text-ink-faint font-mono">
                <span>{personalInfo.college}</span>
                <span className="text-ink font-bold">Open for Roles</span>
              </div>
            </a>

            {/* BENTO TILE 2: GitHub & Social Presence */}
            <div className="group relative md:col-span-5 flex flex-col justify-between rounded-3xl border border-border bg-surface p-4 sm:p-8 hover:border-border-strong hover:bg-surface-elevated transition-all duration-300 overflow-hidden shadow-xs">
              <div className="space-y-4 z-10">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-ink-muted">
                    Building in Public
                  </span>
                  <div className="flex items-center gap-2">
                    <a
                      href={personalInfo.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full border border-border bg-surface text-ink hover:text-white hover:bg-surface-elevated transition-colors"
                      title="GitHub Profile"
                    >
                      <SocialIcons.github className="h-4 w-4" />
                    </a>
                    <a
                      href={personalInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full border border-border bg-surface text-ink hover:text-white hover:bg-surface-elevated transition-colors"
                      title="LinkedIn Profile"
                    >
                      <SocialIcons.linkedin className="h-4 w-4" />
                    </a>
                    <a
                      href={personalInfo.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full border border-border bg-surface text-ink hover:text-white hover:bg-surface-elevated transition-colors"
                      title="Instagram Profile"
                    >
                      <SocialIcons.instagram className="h-4 w-4" />
                    </a>
                  </div>
                </div>

                <div className="space-y-1">
                  <h3 className="font-display text-2xl font-black text-ink">GitHub & Socials</h3>
                  <p className="text-xs text-ink-muted leading-relaxed">
                    Clean code, modular repositories, and full-stack MERN projects hosted on GitHub. Connect on Instagram & LinkedIn.
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-ink hover:underline font-mono"
                >
                  <span>@abhishekx17 on GitHub</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            {/* BENTO TILE 3: Developer Tools Card */}
            <div className="group relative md:col-span-6 flex flex-col justify-between rounded-3xl border border-border bg-surface p-4 sm:p-8 hover:border-border-strong hover:bg-surface-elevated transition-all duration-300 overflow-hidden shadow-xs">
              <div className="space-y-3 z-10">
                <h3 className="font-display text-xl font-bold text-ink flex items-center gap-2">
                  <Terminal className="h-5 w-5 text-ink-muted" />
                  <span>Developer Tools</span>
                </h3>
                <p className="text-xs text-ink-muted">
                  Daily editor tools, AI assistants, API clients, and documentation suite.
                </p>
              </div>

              {/* Developer Tools Grid with Vector Logos */}
              <div className="my-6 grid grid-cols-4 gap-2.5">
                {developerTools.map((tool) => (
                  <motion.div
                    key={tool.key}
                    whileHover={{ y: -3, scale: 1.04 }}
                    transition={softSpring}
                    className="flex flex-col items-center justify-center p-3 rounded-2xl border border-border bg-surface-elevated text-center transition-colors hover:border-border-strong"
                  >
                    <div className="h-6 w-6 mb-1 text-ink flex items-center justify-center">
                      {tool.key === "vscode" && <ToolLogos.vscode className="h-5 w-5" />}
                      {tool.key === "antigravity" && <ToolLogos.antigravity className="h-5 w-5" />}
                      {tool.key === "postman" && <ToolLogos.postman className="h-5 w-5" />}
                      {tool.key === "cursorai" && <ToolLogos.cursorai className="h-5 w-5" />}
                      {tool.key === "codex" && <ToolLogos.codex className="h-5 w-5" />}
                      {tool.key === "notion" && <ToolLogos.notion className="h-5 w-5" />}
                      {tool.key === "github" && <ToolLogos.github className="h-5 w-5" />}
                      {tool.key === "internet" && <ToolLogos.internet className="h-5 w-5" />}
                    </div>
                    <span className="text-[10px] font-bold text-ink font-mono tracking-tight">{tool.name}</span>
                  </motion.div>
                ))}
              </div>

              <div className="pt-2 flex items-center justify-between text-xs text-ink-faint font-mono">
                <span>Daily Engineering Stack</span>
                <span>AI-Assisted Workflow</span>
              </div>
            </div>

            {/* BENTO TILE 4: LinkedIn Profile Card (Portfolio Theme Bento Card) */}
            <LinkedInCard onShowToast={onShowToast} className="md:col-span-6" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
