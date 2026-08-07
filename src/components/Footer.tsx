import { ArrowUp, FileText, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { GitHubIcon as Github, LinkedInIcon as Linkedin, InstagramIcon as Instagram } from "./icons/SocialIcons";
import { navLinks, personalInfo } from "../data/portfolio";
import { fadeInUp, slideInLeft, slideInRight, staggerContainer } from "../lib/motion";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#1e1e1e] border-t-4 border-neutral-900 pt-16 pb-12 overflow-hidden z-10 text-[#f4f4f5]">
      
      {/* Decorative torn paper header at top of footer */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] z-20">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[15px] text-neutral-900 fill-current">
          <path d="M0,0 L1200,0 L1200,20 L1170,10 L1140,25 L1100,12 L1070,30 L1040,15 L1000,28 L970,10 L940,24 L900,12 L870,28 L840,14 L800,25 L770,11 L740,26 L700,12 L670,29 L640,15 L600,27 L570,10 L540,24 L500,12 L470,29 L440,14 L400,25 L370,11 L340,26 L300,12 L270,28 L240,15 L200,27 L170,10 L140,24 L100,12 L70,29 L40,14 L0,20 Z" />
        </svg>
      </div>

      <div className="mx-auto max-w-6xl px-6 md:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b-2 border-zinc-800"
        >
          
          {/* Brand Pitch Column */}
          <motion.div variants={slideInLeft} className="md:col-span-5 space-y-4">
            <a href="#home" className="inline-block font-display font-extrabold text-2xl tracking-tight text-neutral-150 hover:text-[#ff8a00] transition-colors">
              ABHISHEK KUMAR<span className="text-[#ff8a00]">.</span>
            </a>
            
            <p className="text-zinc-400 text-xs sm:text-sm font-normal leading-relaxed max-w-sm">
              Full-Stack Developer specializing in building high-performance MERN web platforms, custom serverless crons, and AI API integrations. I write clean, maintainable code designed to scale.
            </p>

            <div className="inline-flex items-center gap-2 rounded-sm border-2 border-emerald-600/30 bg-emerald-950/20 px-3.5 py-1.5 text-xs font-mono font-bold text-emerald-400">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span>OPEN FOR DEVELOPER ROLES</span>
            </div>
          </motion.div>

          {/* Quick Nav Column */}
          <motion.div variants={fadeInUp} className="md:col-span-4 space-y-4 md:pl-8">
            <p className="text-[10px] font-mono font-black uppercase tracking-wider text-zinc-500">
              // INDEX_NAV
            </p>
            <ul className="space-y-2.5 text-xs font-bold text-zinc-350">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-[#ff8a00] transition-colors block py-0.5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#ff8a00] hover:underline inline-flex items-center gap-1.5 py-0.5"
                >
                  <FileText className="h-4 w-4" />
                  <span>Resume PDF</span>
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Social Links & Back to Top Column */}
          <motion.div variants={slideInRight} className="md:col-span-3 space-y-5 flex flex-col justify-between">
            <div className="space-y-3">
              <p className="text-[10px] font-mono font-black uppercase tracking-wider text-zinc-500">
                // CONNECT_CHANNELS
              </p>
              <div className="flex flex-wrap items-center gap-2">
                {[
                  { href: `mailto:${personalInfo.email}`, icon: Mail, label: "Email" },
                  { href: personalInfo.github, icon: Github, label: "GitHub" },
                  { href: personalInfo.linkedin, icon: Linkedin, label: "LinkedIn" },
                  { href: personalInfo.instagram, icon: Instagram, label: "Instagram" },
                ].map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border-2 border-zinc-800 bg-zinc-900 text-zinc-400 hover:text-white hover:border-zinc-600 hover:bg-zinc-800 transition-all duration-200 shadow-sm"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center justify-center gap-2 border-2 border-zinc-800 bg-zinc-900 text-zinc-300 hover:border-[#ff8a00] hover:text-[#ff8a00] px-4 py-2.5 text-xs font-bold rounded-sm transition-all duration-200"
            >
              <span>Back to Top</span>
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </motion.div>

        </motion.div>

        {/* Footer Bottom Metadata */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-zinc-500 font-bold"
        >
          <p>© {new Date().getFullYear()} {personalInfo.fullName}. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <span>Built with React 19, TypeScript, Tailwind, GSAP, &amp; Three.js</span>
          </p>
        </motion.div>

      </div>
    </footer>
  );
}
