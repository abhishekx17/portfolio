import { motion } from "framer-motion";
import { personalInfo } from "../data/portfolio";
import { TechLogos } from "./icons/TechLogos";
import { ToolLogos } from "./icons/ToolLogos";

export function MainBio() {
  const experiences = [
    {
      timeline: "January 2026 – June 2026",
      company: "Excellence Technology, Mohali",
      role: "Full Stack Development Trainee (Industrial Training)",
      desc: "Built and deployed features including secure JWT authentication, RESTful APIs, and responsive MERN dashboard portals. Handled API testing, debugging, and Git collaboration workflows.",
    },
    {
      timeline: "2025 – Present",
      company: "Freelance Developer & Contributor",
      role: "Independent Web Architect",
      desc: "Architected customized full-stack client solutions, integrated Razorpay/COD payment structures, and optimized MongoDB query indexing for responsive applications.",
    },
  ];

  const personalTags = [
    "Adaptable",
    "Communication",
    "Desire to learn",
    "Positive Attitude",
    "Teamwork",
  ];

  const techCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React.js", key: "react", type: "tech" },
        { name: "Tailwind CSS", key: "tailwind", type: "tech" },
        { name: "JavaScript (ES6+)", key: "js", type: "text", short: "JS", style: "border-[#f7df1e]/20 text-[#f7df1e]" },
        { name: "HTML5", key: "html", type: "text", short: "H5", style: "border-[#e34f26]/20 text-[#e34f26]" },
        { name: "CSS3", key: "css", type: "text", short: "C3", style: "border-[#1572b6]/20 text-[#1572b6]" },
      ],
    },
    {
      title: "Backend & Database",
      skills: [
        { name: "Node.js", key: "node", type: "tech" },
        { name: "Express.js", key: "express", type: "tech" },
        { name: "REST APIs", key: "rest", type: "tech" },
        { name: "MongoDB", key: "mongo", type: "tech" },
        { name: "Mongoose", key: "mongoose", type: "text", short: "Mg", style: "border-amber-600/35 text-amber-500" },
        { name: "JWT Auth", key: "jwt", type: "text", short: "JWT", style: "border-purple-500/30 text-purple-400" },
        { name: "Bcrypt", key: "bcrypt", type: "text", short: "BC", style: "border-rose-500/30 text-rose-400" },
      ],
    },
    {
      title: "AI & GenAI",
      skills: [
        { name: "LLM Integration", key: "llm", type: "text", short: "LLM", style: "border-indigo-500/30 text-indigo-400" },
        { name: "Prompt Engineering", key: "prompt", type: "text", short: "PRM", style: "border-pink-500/30 text-pink-400" },
        { name: "AI APIs", key: "ai", type: "text", short: "AI", style: "border-cyan-500/30 text-cyan-400" },
      ],
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Git", key: "git", type: "tech" },
        { name: "GitHub", key: "github", type: "tool" },
        { name: "VS Code", key: "vscode", type: "tool" },
        { name: "Postman", key: "postman", type: "tool" },
        { name: "Vite", key: "vite", type: "text", short: "Vt", style: "border-violet-500/30 text-violet-400" },
        { name: "Vercel", key: "vercel", type: "text", short: "▲", style: "border-neutral-600 text-neutral-300" },
        { name: "Render", key: "render", type: "text", short: "Rn", style: "border-emerald-600/35 text-emerald-500" },
        { name: "Cursor AI", key: "cursorai", type: "tool" },
        { name: "Codex", key: "codex", type: "tool" },
        { name: "Antigravity", key: "antigravity", type: "tool" },
        { name: "Claude Code", key: "claude", type: "text", short: "CC", style: "border-orange-500/30 text-[#ff8a00]" },
      ],
    },
  ];

  return (
    <section id="about" className="relative w-full bg-[#1e1e1e] py-20 text-[#faf9f6] select-none border-t-4 border-neutral-900">
      <div className="mx-auto max-w-5xl px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-14 items-start">
          
          {/* LEFT COLUMN: Polaroid Frame, Contact links, Education, Pill Tags */}
          <div className="md:col-span-5 space-y-12">
            
            {/* Polaroid Frame Container */}
            <motion.div
              initial={{ rotate: -4, scale: 0.95, opacity: 0 }}
              whileInView={{ rotate: -2, scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 120 }}
              className="relative mx-auto max-w-[280px] polaroid-card p-4 pb-6 rounded-xs text-neutral-900 border-2 border-neutral-950"
            >
              {/* Semi-transparent sticky tape on top */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-7 masking-tape z-20" />

              {/* Picture Frame Box */}
              <div className="relative aspect-square w-full bg-zinc-200 overflow-hidden border-2 border-neutral-900 mb-4 flex items-center justify-center">
                
                {/* Developer Profile Image inside frame (No cyan multiply filters, No pink scribble circle) */}
                <img
                  src="/linkedin-pfp.jpeg"
                  alt="Abhishek Kumar"
                  className="w-full h-full object-cover"
                />

                {/* SVG White Doodled Lightning Bolts */}
                <div className="absolute top-12 left-2 w-8 h-8 text-white pointer-events-none drop-shadow-md rotate-[-15deg] z-10">
                  <svg viewBox="0 0 24 24" fill="currentColor" stroke="#121212" strokeWidth="1.5">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                </div>

                <div className="absolute bottom-12 right-2 w-8 h-8 text-white pointer-events-none drop-shadow-md rotate-[25deg] z-10">
                  <svg viewBox="0 0 24 24" fill="currentColor" stroke="#121212" strokeWidth="1.5">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                </div>

                {/* Vector Stickers */}
                {/* Alien Head Sticker */}
                <div className="absolute top-2 left-2 w-9 h-9 drop-shadow-md z-10 rotate-[-10deg]">
                  <svg viewBox="0 0 100 100" fill="#00ff66" className="w-full h-full">
                    <ellipse cx="50" cy="50" rx="35" ry="40" stroke="#121212" strokeWidth="6" />
                    <ellipse cx="32" cy="45" rx="10" ry="18" fill="#121212" transform="rotate(-15 32 45)" />
                    <ellipse cx="68" cy="45" rx="10" ry="18" fill="#121212" transform="rotate(15 68 45)" />
                    <circle cx="50" cy="72" r="5" fill="#121212" />
                  </svg>
                </div>

                {/* Yellow Smiley Face Sticker */}
                <div className="absolute bottom-2 right-2 w-9 h-9 drop-shadow-md z-10 rotate-[12deg]">
                  <svg viewBox="0 0 100 100" fill="#fbc02d" className="w-full h-full">
                    <circle cx="50" cy="50" r="40" stroke="#121212" strokeWidth="6" />
                    <circle cx="35" cy="40" r="5" fill="#121212" />
                    <circle cx="65" cy="40" r="5" fill="#121212" />
                    <path
                      d="M32,60 C40,72 60,72 68,60"
                      stroke="#121212"
                      strokeWidth="6"
                      strokeLinecap="round"
                      fill="none"
                    />
                  </svg>
                </div>

              </div>

              {/* Name Caption at Bottom */}
              <div className="text-center font-mono">
                <span className="font-bold text-lg tracking-tight text-neutral-900 font-sans">
                  {personalInfo.fullName}
                </span>
              </div>
            </motion.div>

            {/* Contact Box */}
            <div className="space-y-4">
              <h3 className="font-sketchy text-3xl text-neutral-100 pb-1">
                Contact
              </h3>
              <div className="space-y-3.5 text-sm font-semibold text-zinc-300">
                {/* Phone */}
                <a
                  href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-3 hover:text-emerald-400 transition-colors"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500 text-white shrink-0 shadow-sm">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-3.5 w-3.5">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </span>
                  <span className="font-mono text-xs">{personalInfo.phone}</span>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-3 hover:text-rose-400 transition-colors"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-rose-500 text-white shrink-0 shadow-sm">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-3.5 w-3.5">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </span>
                  <span className="font-mono text-xs truncate max-w-[220px]">{personalInfo.email}</span>
                </a>

                {/* LinkedIn */}
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-blue-400 transition-colors"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-white shrink-0 shadow-sm">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-3.5 w-3.5">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </span>
                  <span className="text-xs truncate max-w-[220px]">Abhishek Kumar</span>
                </a>
              </div>
            </div>

            {/* Education Box */}
            <div className="space-y-4">
              <h3 className="font-sketchy text-3xl text-neutral-100 pb-1">
                Education
              </h3>
              <div className="space-y-2">
                <span className="text-[11px] font-mono font-bold text-[#ff8a00] block">
                  {personalInfo.timeline}
                </span>
                <h4 className="text-sm font-bold text-neutral-100 tracking-tight leading-tight">
                  {personalInfo.college}
                </h4>
                <p className="text-[11px] text-zinc-400 font-semibold font-mono">
                  {personalInfo.university}
                </p>
                <p className="text-[11px] text-zinc-400 italic">
                  {personalInfo.degree}
                </p>
              </div>
            </div>

            {/* Personal tags block */}
            <div className="space-y-3">
              <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-500">
                Personal
              </p>
              <div className="flex flex-wrap gap-1.5">
                {personalTags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-sm border border-zinc-700 bg-zinc-900 text-[10px] font-bold text-zinc-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Hello! statement, Biography, Experience timeline, Horizontal Tech Stack */}
          <div className="md:col-span-7 space-y-12 md:pl-4">
            
            {/* Biography */}
            <div className="space-y-5">
              <h2 className="font-sketchy text-5xl text-neutral-150">
                Hello !
              </h2>
              <div className="space-y-4 text-zinc-350 text-xs sm:text-sm leading-relaxed font-normal">
                <p>
                  Hi, my name is Abhishek Kumar, a full stack developer based in India with a passion for art, drawing, clean coding, and visual communication, dedicated to crafting designs that captivate and communicate effectively.
                </p>
                <p>
                  Specializing in React, Node.js, Express, MongoDB, and TypeScript, I enjoy constructing robust web systems that scale. I focus on clean database modeling, API testing routines, and creative frontends.
                </p>
              </div>
            </div>

            {/* Experience timeline with Scroll-Animated Line */}
            <div className="space-y-8">
              <h3 className="font-sketchy text-3xl text-neutral-100 pb-1">
                Experience
              </h3>

              <div className="relative pl-6 ml-2 space-y-10">
                
                {/* Background static line */}
                <div className="absolute left-[7px] top-1.5 bottom-1.5 w-[2px] bg-zinc-800" />

                {/* Animated foreground line that draws on scroll */}
                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: "100%" }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  className="absolute left-[7px] top-1.5 bottom-1.5 w-[2px] bg-[#ff8a00] origin-top"
                />

                {experiences.map((exp, idx) => (
                  <div key={idx} className="relative space-y-1">
                    
                    {/* Timeline bullet dot */}
                    <span className="absolute -left-[23px] top-1 h-3.5 w-3.5 rounded-full bg-[#ff8a00] border-4 border-[#1e1e1e]" />

                    <span className="text-[11px] font-mono font-bold text-[#ff8a00] block">
                      {exp.timeline}
                    </span>
                    <h4 className="text-sm font-bold text-neutral-100 tracking-tight leading-tight">
                      {exp.company}
                    </h4>
                    <p className="text-[11px] text-zinc-400 italic">
                      {exp.role}
                    </p>
                    <p className="text-xs text-zinc-400 font-normal leading-relaxed pt-1">
                      [{exp.desc}]
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Redesigned Tech Stack: Moved to bottom-right of column, laid out horizontally in 2 sub-columns */}
            <div className="space-y-6 pt-8 border-t border-zinc-800">
              <h3 className="font-sketchy text-3xl text-neutral-100 pb-1">
                Tech Stack
              </h3>
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-45px" }}
                variants={{
                  hidden: { opacity: 0 },
                  show: {
                    opacity: 1,
                    transition: { staggerChildren: 0.08 }
                  }
                }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-8"
              >
                {/* Left Column: Frontend & Backend */}
                <div className="space-y-6">
                  {techCategories.slice(0, 2).map((cat) => (
                    <motion.div
                      key={cat.title}
                      variants={{
                        hidden: { opacity: 0, y: 12 },
                        show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80 } }
                      }}
                      className="space-y-2.5"
                    >
                      <h4 className="font-mono text-[9px] font-black uppercase tracking-wider text-zinc-500">
                        // {cat.title}
                      </h4>
                      <motion.div 
                        variants={{
                          hidden: { opacity: 0 },
                          show: { opacity: 1, transition: { staggerChildren: 0.03 } }
                        }}
                        className="flex flex-wrap gap-2"
                      >
                        {cat.skills.map((skill) => {
                          let LogoComponent = null;
                          if (skill.type === "tech") {
                            LogoComponent = TechLogos[skill.key as keyof typeof TechLogos];
                          } else if (skill.type === "tool") {
                            LogoComponent = ToolLogos[skill.key as keyof typeof ToolLogos];
                          }

                          return (
                            <motion.div
                              key={skill.name}
                              variants={{
                                hidden: { opacity: 0, scale: 0.8 },
                                show: { opacity: 1, scale: 1 }
                              }}
                              whileHover={{ scale: 1.05, y: -2 }}
                              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-bold cursor-help ${
                                skill.type === "text"
                                  ? skill.style + " bg-zinc-900"
                                  : "bg-zinc-900 border-zinc-800 text-zinc-300"
                              }`}
                            >
                              {skill.type !== "text" && LogoComponent && (
                                <LogoComponent className="h-3.5 w-3.5 shrink-0" />
                              )}
                              {skill.type === "text" && (
                                <span className="font-mono font-black text-[9px]">{skill.short}</span>
                              )}
                              <span>{skill.name}</span>
                            </motion.div>
                          );
                        })}
                      </motion.div>
                    </motion.div>
                  ))}
                </div>

                {/* Right Column: AI & Tools */}
                <div className="space-y-6">
                  {techCategories.slice(2, 4).map((cat) => (
                    <motion.div
                      key={cat.title}
                      variants={{
                        hidden: { opacity: 0, y: 12 },
                        show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80 } }
                      }}
                      className="space-y-2.5"
                    >
                      <h4 className="font-mono text-[9px] font-black uppercase tracking-wider text-zinc-500">
                        // {cat.title}
                      </h4>
                      <motion.div 
                        variants={{
                          hidden: { opacity: 0 },
                          show: { opacity: 1, transition: { staggerChildren: 0.03 } }
                        }}
                        className="flex flex-wrap gap-2"
                      >
                        {cat.skills.map((skill) => {
                          let LogoComponent = null;
                          if (skill.type === "tech") {
                            LogoComponent = TechLogos[skill.key as keyof typeof TechLogos];
                          } else if (skill.type === "tool") {
                            LogoComponent = ToolLogos[skill.key as keyof typeof ToolLogos];
                          }

                          return (
                            <motion.div
                              key={skill.name}
                              variants={{
                                hidden: { opacity: 0, scale: 0.8 },
                                show: { opacity: 1, scale: 1 }
                              }}
                              whileHover={{ scale: 1.05, y: -2 }}
                              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-bold cursor-help ${
                                skill.type === "text"
                                  ? skill.style + " bg-zinc-900"
                                  : "bg-zinc-900 border-zinc-800 text-zinc-300"
                              }`}
                            >
                              {skill.type !== "text" && LogoComponent && (
                                <LogoComponent className="h-3.5 w-3.5 shrink-0" />
                              )}
                              {skill.type === "text" && (
                                <span className="font-mono font-black text-[9px]">{skill.short}</span>
                              )}
                              <span>{skill.name}</span>
                            </motion.div>
                          );
                        })}
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
