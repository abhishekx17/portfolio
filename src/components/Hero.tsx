import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative w-full min-h-[50vh] flex flex-col justify-center items-center grid-paper overflow-hidden select-none pb-24 pt-20">
      {/* Decorative Star Doodles (SVG Vector) */}
      <motion.div
        animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-12 left-[10%] w-10 h-10 text-[#ff8a00] hidden md:block"
      >
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4Z" />
        </svg>
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-16 right-[12%] w-12 h-12 text-[#ff8a00] hidden md:block"
      >
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4Z" />
        </svg>
      </motion.div>

      {/* Floating Outline Sparkles */}
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-16 right-[20%] w-6 h-6 text-zinc-400 hidden sm:block"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9Z" />
        </svg>
      </motion.div>

      <div className="relative z-10 max-w-4xl w-full px-4 text-center flex flex-col items-center">
        {/* Year Badge inside a sketchy loop */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative inline-block mb-3"
        >
          {/* Sketchy Circle Loop Border */}
          <svg
            viewBox="0 0 100 40"
            fill="none"
            className="absolute inset-0 -top-2 -left-2 w-[116%] h-[120%] text-neutral-800 opacity-80"
          >
            <path
              d="M10,20 C30,5 80,8 90,20 C100,32 30,38 12,30 C5,27 6,18 25,12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <span className="font-handwritten text-3xl font-bold text-neutral-800 px-4 py-1 relative z-10">
            {new Date().getFullYear()}
          </span>
        </motion.div>

        {/* Custom Mismatched stylized hand-drawn title "Portfolio" */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center space-x-1 sm:space-x-3 mb-6 flex-wrap select-none text-neutral-900"
        >
          {/* P */}
          <span className="font-display font-extrabold text-6xl sm:text-8xl tracking-tight scale-x-95">
            P
          </span>

          {/* o (smiley face) */}
          <div className="relative w-14 h-14 sm:w-20 sm:h-20 flex items-center justify-center shrink-0">
            <svg
              viewBox="0 0 100 100"
              fill="currentColor"
              className="w-full h-full text-yellow-400 drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]"
            >
              <circle cx="50" cy="50" r="45" stroke="#121212" strokeWidth="5" />
              <circle cx="35" cy="40" r="6" fill="#121212" />
              <circle cx="65" cy="40" r="6" fill="#121212" />
              <path
                d="M30,60 C40,75 60,75 70,60"
                stroke="#121212"
                strokeWidth="6"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </div>

          {/* r */}
          <span className="font-handwritten font-black text-6xl sm:text-8xl tracking-tight rotate-6 text-neutral-800">
            r
          </span>

          {/* t */}
          <span className="font-display font-black text-6xl sm:text-8xl tracking-tighter text-neutral-900">
            t
          </span>

          {/* f */}
          <span className="font-serif-display italic font-black text-6xl sm:text-8xl text-neutral-800 -translate-y-2">
            f
          </span>

          {/* o (striped circle) */}
          <div className="relative w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center shrink-0">
            <svg viewBox="0 0 100 100" className="w-full h-full text-neutral-900">
              <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="8" fill="none" />
              <line x1="25" y1="25" x2="75" y2="75" stroke="currentColor" strokeWidth="8" />
              <line x1="20" y1="50" x2="80" y2="50" stroke="currentColor" strokeWidth="8" />
              <line x1="25" y1="75" x2="75" y2="25" stroke="currentColor" strokeWidth="8" />
            </svg>
          </div>

          {/* l */}
          <span className="font-playful font-black text-6xl sm:text-8xl text-neutral-900">
            l
          </span>

          {/* i */}
          <span className="font-display font-light text-6xl sm:text-8xl text-neutral-800">
            i
          </span>

          {/* o (target swirl) */}
          <div className="relative w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center shrink-0">
            <svg viewBox="0 0 100 100" className="w-full h-full text-neutral-900" fill="none">
              <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="6" />
              <circle cx="50" cy="50" r="24" stroke="currentColor" strokeWidth="6" />
              <circle cx="50" cy="50" r="8" fill="currentColor" />
            </svg>
          </div>
        </motion.div>

        {/* Categories / Tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-2 text-neutral-600 text-base sm:text-xl font-bold font-handwritten tracking-wider"
        >
          <span>Full-Stack Engineer</span>
          <span className="text-[#ff8a00] font-black text-lg sm:text-xl">•</span>
          <span>MERN Specialist</span>
          <span className="text-[#ff8a00] font-black text-lg sm:text-xl">•</span>
          <span>Creative Coder</span>
        </motion.div>
      </div>

      {/* Jagged Torn Paper SVG Divider at bottom of Header */}
      <div className="absolute bottom-0 left-0 w-full overflow-visible z-20 translate-y-[2px]">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full overflow-visible block"
          preserveAspectRatio="none"
        >
          {/* Shadow/Edge accent layer */}
          <path
            d="M0,0 L0,50 L25,43 L50,56 L75,41 L110,54 L145,46 L180,58 L215,44 L250,55 L285,42 L320,53 L355,45 L390,56 L425,41 L460,54 L495,46 L530,58 L565,43 L600,55 L635,42 L670,53 L705,45 L740,56 L775,41 L810,54 L845,46 L880,58 L915,43 L950,55 L985,42 L1020,53 L1055,45 L1090,56 L1125,41 L1160,54 L1195,46 L1230,58 L1265,43 L1300,55 L1335,42 L1370,53 L1405,45 L1440,50 L1440,0 Z"
            fill="#faf9f6"
          />
          {/* Sketchy pencil line for high-quality depth */}
          <path
            d="M0,50 L25,43 L50,56 L75,41 L110,54 L145,46 L180,58 L215,44 L250,55 L285,42 L320,53 L355,45 L390,56 L425,41 L460,54 L495,46 L530,58 L565,43 L600,55 L635,42 L670,53 L705,45 L740,56 L775,41 L810,54 L845,46 L880,58 L915,43 L950,55 L985,42 L1020,53 L1055,45 L1090,56 L1125,41 L1160,54 L1195,46 L1230,58 L1265,43 L1300,55 L1335,42 L1370,53 L1405,45 L1440,50"
            stroke="#d4ceb8"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </section>
  );
}
