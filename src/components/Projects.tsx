import { useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Sparkles, ArrowUpRight, Plus } from "lucide-react";
import { GitHubIcon as GithubIcon } from "./icons/SocialIcons";
import { projects, personalInfo } from "../data/portfolio";
import { ThreeDScene } from "./ThreeDScene";

interface Project {
  title: string;
  domainUrl: string;
  overview: string;
  description: string;
  image: string;
  highlights: string[];
  tags: string[];
  github?: string;
  live?: string;
}

// 3D Perspective Tilt Card Component (Compact Sizing)
function ProjectCard({ project, color }: { project: Project; color: string }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), { damping: 20, stiffness: 180 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), { damping: 20, stiffness: 180 });

  const imageX = useSpring(useTransform(mouseX, [-0.5, 0.5], [3, -3]), { damping: 25, stiffness: 160 });
  const imageY = useSpring(useTransform(mouseY, [-0.5, 0.5], [3, -3]), { damping: 25, stiffness: 160 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    
    const relX = (e.clientX - rect.left) / rect.width - 0.5;
    const relY = (e.clientY - rect.top) / rect.height - 0.5;

    mouseX.set(relX);
    mouseY.set(relY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      className="relative w-full rounded-lg border border-zinc-850 bg-[#1a1a1a]/80 backdrop-blur-xs p-4 flex flex-col justify-between shadow-md hover:shadow-[0_10px_30px_rgba(0,0,0,0.35)] hover:border-zinc-700 hover:bg-[#1e1e1e]/95 transition-all duration-300 group cursor-default"
    >
      {/* Glossy Overlay Reflection */}
      <div 
        className="absolute inset-0 pointer-events-none z-30 opacity-40 rounded-lg transition-opacity duration-300"
        style={{
          background: "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 50%, rgba(255,255,255,0) 100%)",
        }}
      />

      {/* 3D Browser Mockup Block */}
      <div 
        style={{ transform: "translateZ(10px)" }}
        className="relative w-full rounded-md border border-zinc-800 bg-zinc-950 overflow-hidden flex flex-col mb-4 shrink-0 shadow-xs"
      >
        {/* Browser Top Bar */}
        <div className="h-7.5 bg-zinc-900 border-b border-zinc-850 px-2.5 flex items-center gap-1.5 shrink-0 select-none">
          <div className="w-1.5 h-1.5 rounded-full bg-rose-500" />
          <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          <div className="ml-3 flex-1 h-4.5 bg-zinc-950/80 rounded border border-zinc-800/40 flex items-center px-2 text-[8px] font-mono text-zinc-500 truncate">
            https://{project.domainUrl}
          </div>
        </div>

        {/* Screenshot Container */}
        <div className="relative w-full overflow-hidden bg-zinc-950">
          <motion.img
            src={project.image}
            alt={project.title}
            style={{
              x: imageX,
              y: imageY,
              scale: 1.04,
            }}
            className="w-full h-auto block select-none transition-transform duration-500"
          />
        </div>
      </div>

      {/* Project Details */}
      <div style={{ transform: "translateZ(5px)" }} className="flex-1 flex flex-col justify-between space-y-3">
        
        <div className="space-y-1.5">
          {/* Title & Domain URL */}
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-serif-display text-xl sm:text-2xl font-black text-[#faf9f6] uppercase tracking-tight">
              {project.title}
            </h3>
            <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded-sm border border-zinc-800 bg-zinc-900/50 text-zinc-400">
              {project.domainUrl}
            </span>
          </div>

          {/* Description */}
          <p className="text-zinc-400 text-[11px] sm:text-xs leading-relaxed font-normal min-h-[44px]">
            {project.overview}
          </p>

          {/* Highlights List */}
          <div className="space-y-1 pt-0.5">
            <ul className="space-y-0.5 text-[10px] text-zinc-500 font-semibold font-mono">
              {project.highlights.slice(0, 2).map((highlight, hIdx) => (
                <li key={hIdx} className="flex items-center gap-1.5">
                  <span className="h-1 w-1 rounded-full shrink-0" style={{ backgroundColor: color }} />
                  <span className="truncate">{highlight.toUpperCase()}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Tech tags & links */}
        <div className="space-y-3 pt-2.5 border-t border-zinc-850">
          <div className="flex flex-wrap gap-1">
            {project.tags.slice(0, 4).map((tag) => (
              <span key={tag} className="px-1.5 py-0.5 rounded-sm border border-zinc-800 bg-zinc-900 text-[8px] font-mono text-zinc-400">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 group inline-flex items-center justify-center gap-1 px-4 py-2 rounded-full border text-[10px] font-bold transition-all duration-300 text-white hover:text-zinc-950 shadow-xs text-center cursor-pointer font-mono"
                style={{
                  borderColor: color,
                  backgroundColor: "transparent",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = color;
                  e.currentTarget.style.borderColor = color;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.borderColor = color;
                }}
              >
                <span>LIVE_APP</span>
                <ArrowUpRight className="h-3 w-3 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-8.5 w-8.5 items-center justify-center rounded-full border border-zinc-800 bg-transparent text-zinc-400 hover:text-white hover:border-zinc-500 transition-colors cursor-pointer"
                title="GitHub Repo"
              >
                <GithubIcon className="h-3.5 w-3.5" />
              </a>
            )}
          </div>
        </div>

      </div>
    </motion.div>
  );
}

// 3D Perspective Tilt for the "More Projects" placeholder card
function MoreProjectsCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), { damping: 20, stiffness: 180 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), { damping: 20, stiffness: 180 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      className="relative w-full rounded-lg border border-dashed border-zinc-800 bg-[#161616]/40 backdrop-blur-xs p-5 flex flex-col justify-between min-h-[350px] shadow-sm hover:shadow-[0_8px_20px_rgba(0,0,0,0.25)] hover:border-zinc-700 transition-all duration-300 group cursor-default"
    >
      <div style={{ transform: "translateZ(10px)" }} className="space-y-4 pt-4">
        {/* Placeholder Icon */}
        <div className="w-10 h-10 rounded-lg border border-zinc-800 bg-zinc-900/50 flex items-center justify-center text-zinc-500 group-hover:text-[#ff8a00] group-hover:border-[#ff8a00]/30 transition-all">
          <Plus className="h-5 w-5 animate-pulse" />
        </div>

        {/* Text Details */}
        <div className="space-y-1.5">
          <h3 className="font-serif-display text-lg font-black text-zinc-300 uppercase tracking-tight">
            More Coming Soon
          </h3>
          <p className="text-zinc-550 text-[11px] sm:text-xs leading-relaxed font-normal">
            Building serverless API workflows, custom databases, and autonomous AI agents. Check my GitHub repository list for live experiments.
          </p>
        </div>
      </div>

      {/* Explore GitHub CTA */}
      <div style={{ transform: "translateZ(5px)" }} className="pt-4 border-t border-zinc-900">
        <a
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full group inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full border border-zinc-800 bg-zinc-900/50 hover:bg-[#ff8a00] hover:text-neutral-950 hover:border-[#ff8a00] text-[10px] font-bold text-zinc-350 transition-all duration-300 cursor-pointer font-mono"
        >
          <span>EXPLORE_ARCHIVE.DB</span>
          <ArrowUpRight className="h-3.5 w-3.5 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </div>
    </motion.div>
  );
}

export function Projects() {
  const projectColors = ["#ff8a00", "#10b981", "#f59e0b"];

  return (
    <section 
      id="projects" 
      className="relative w-full py-16 sm:py-20 text-[#f4f4f5] overflow-hidden select-none border-t border-zinc-900 bg-[#121212]"
    >
      
      {/* 3D Scene Background */}
      <ThreeDScene />

      <div className="relative z-10 mx-auto max-w-5xl w-full px-6 md:px-8">
        
        {/* Header Block */}
        <div className="mb-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-850 bg-zinc-900/50 px-4 py-1 text-xs font-mono font-bold text-zinc-400">
            <Sparkles className="h-3.5 w-3.5 text-[#ff8a00]" />
            <span>SELECTED_BUILDS.DB</span>
          </div>
          <h2 className="font-sketchy text-4xl sm:text-5xl text-[#faf9f6]">
            Selected Works
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto font-normal">
            Explore my production integrations arranged as compact 3D hover-interactive card decks.
          </p>
        </div>

        {/* 2-Column Responsive Card Grid (Compact) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, idx) => {
            const color = projectColors[idx % projectColors.length];
            return (
              <div key={project.title} className="w-full flex">
                <ProjectCard project={project} color={color} />
              </div>
            );
          })}
          
          {/* 4th Card Slot: Zine-themed More Coming Soon */}
          <div className="w-full flex">
            <MoreProjectsCard />
          </div>
        </div>

      </div>
    </section>
  );
}
