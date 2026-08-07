import { motion, useReducedMotion } from 'framer-motion';

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative w-full min-h-[100svh] flex flex-col justify-center items-center grid-paper overflow-hidden select-none pb-20 sm:pb-28 pt-20 sm:pt-24"
    >
      {/* ===================== BACKGROUND DOTS ===================== */}
      {/* Top-left dot grid */}
      <div className="absolute top-[10%] left-[1.5%] w-14 h-14 grid grid-cols-4 gap-1.5 opacity-20 hidden xl:grid pointer-events-none">
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-neutral-950" />
        ))}
      </div>
      {/* Bottom-left dot grid */}
      <div className="absolute bottom-[20%] left-[1%] w-14 h-14 grid grid-cols-4 gap-1.5 opacity-20 hidden xl:grid pointer-events-none">
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-neutral-950" />
        ))}
      </div>
      {/* Top-right dot grid */}
      <div className="absolute top-[12%] right-[1.5%] w-14 h-14 grid grid-cols-4 gap-1.5 opacity-20 hidden xl:grid pointer-events-none">
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-neutral-950" />
        ))}
      </div>
      {/* Bottom-right dot grid */}
      <div className="absolute bottom-[25%] right-[1%] w-14 h-14 grid grid-cols-4 gap-1.5 opacity-20 hidden xl:grid pointer-events-none">
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-neutral-950" />
        ))}
      </div>

      {/* ===================== FLOATING BADGES ===================== */}
      {/* {} blue badge — top-left area */}
      <motion.div
        animate={shouldReduceMotion ? {} : { y: [0, -6, 0], rotate: [12, 8, 12] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
        style={{ willChange: 'transform' }}
        className="absolute top-[14%] left-[5%] hidden xl:flex items-center justify-center w-12 h-12 bg-white border-2 border-neutral-950 rounded-xl shadow-[4px_4px_0px_rgba(0,0,0,1)] text-blue-500 font-mono font-black text-xl pointer-events-none"
      >
        &#123;&#125;
      </motion.div>

      {/* </> dark badge — bottom-left area */}
      <motion.div
        animate={shouldReduceMotion ? {} : { y: [0, 6, 0], rotate: [-12, -8, -12] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        style={{ willChange: 'transform' }}
        className="absolute bottom-[26%] left-[4%] hidden xl:flex items-center justify-center w-12 h-10 bg-neutral-950 border-2 border-neutral-950 rounded-xl shadow-[4px_4px_0px_rgba(0,0,0,0.15)] text-orange-400 font-mono font-black text-lg pointer-events-none"
      >
        &lt;/&gt;
      </motion.div>

      {/* Orange arrow doodle — left mid */}
      <div className="absolute top-[32%] left-[14%] w-20 h-14 pointer-events-none hidden xl:block text-[#ff8a00] rotate-12">
        <svg viewBox="0 0 100 50" fill="none" stroke="currentColor" strokeWidth="2.5" strokeDasharray="3 3">
          <path d="M10,10 Q50,45 90,10" strokeLinecap="round" />
          <path d="M80,5 L90,10 L84,22" strokeLinecap="round" />
        </svg>
      </div>

      {/* JS yellow badge — top-right area */}
      <motion.div
        animate={shouldReduceMotion ? {} : { y: [0, -6, 0], rotate: [-8, -12, -8] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
        style={{ willChange: 'transform' }}
        className="absolute top-[14%] right-[5%] hidden xl:flex items-center justify-center w-12 h-12 bg-[#f7df1e] border-2 border-neutral-950 rounded-xl shadow-[4px_4px_0px_rgba(0,0,0,1)] text-neutral-950 font-mono font-black text-xl pointer-events-none"
      >
        JS
      </motion.div>

      {/* React atom badge — bottom-right, beside terminal card */}
      <motion.div
        animate={shouldReduceMotion ? {} : { y: [0, 6, 0], rotate: [15, 10, 15] }}
        transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut' }}
        style={{ willChange: 'transform' }}
        className="absolute bottom-[28%] right-[21%] hidden xl:flex items-center justify-center w-12 h-12 bg-white border-2 border-neutral-950 rounded-xl shadow-[4px_4px_0px_rgba(0,0,0,1)] text-sky-500 pointer-events-none z-20"
      >
        <svg className="w-8 h-8 animate-[spin_10s_linear_infinite]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4">
          <ellipse cx="50" cy="50" rx="38" ry="14" transform="rotate(0 50 50)" />
          <ellipse cx="50" cy="50" rx="38" ry="14" transform="rotate(60 50 50)" />
          <ellipse cx="50" cy="50" rx="38" ry="14" transform="rotate(120 50 50)" />
          <circle cx="50" cy="50" r="5" fill="currentColor" />
        </svg>
      </motion.div>

      {/* Arrow doodle — right mid */}
      <div className="absolute top-[28%] right-[15%] w-16 h-14 pointer-events-none hidden xl:block text-neutral-950 rotate-[-30deg]">
        <svg viewBox="0 0 100 50" fill="none" stroke="currentColor" strokeWidth="2.5" strokeDasharray="3 3">
          <path d="M10,40 Q50,10 90,30" strokeLinecap="round" />
          <path d="M80,18 L90,30 L76,32" strokeLinecap="round" />
        </svg>
      </div>

      {/* CSS Laptop — bottom right corner */}
      <motion.div
        animate={shouldReduceMotion ? {} : { y: [0, -4, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        style={{ willChange: 'transform' }}
        className="absolute bottom-[8%] right-[2%] w-36 h-26 hidden xl:block pointer-events-none rotate-[-6deg] z-10"
      >
        <div className="relative w-full h-full flex flex-col items-center">
          <div className="w-[85%] h-[68%] border-4 border-neutral-950 bg-neutral-900 rounded-t-xl flex items-center justify-center shadow-lg relative">
            <div className="absolute inset-1 bg-gradient-to-tr from-neutral-800 to-transparent opacity-30 pointer-events-none" />
            <span className="font-mono text-cyan-400 text-xl font-bold">&lt;/&gt;</span>
          </div>
          <div className="w-full h-[12%] border-4 border-neutral-950 bg-neutral-800 rounded-b-xl relative z-10 shadow-md" />
          <div className="w-[30%] h-[6%] bg-neutral-900 rounded-b-md -mt-1 border-r-2 border-l-2 border-b-2 border-neutral-950 z-20" />
        </div>
      </motion.div>

      {/* ===================== THREE-COLUMN MAIN LAYOUT ===================== */}
      <div className="relative z-10 w-full max-w-[1400px] px-4 sm:px-6 lg:px-8 flex items-center justify-center lg:justify-between gap-4 lg:gap-6">

        {/* ── LEFT COLUMN: Code Editor card ── */}
        <motion.div
          initial={{ opacity: 0, x: -60, rotate: -4 }}
          animate={{ opacity: 1, x: 0, rotate: -2 }}
          transition={{ duration: 0.9, type: 'spring', stiffness: 55 }}
          className="hidden lg:block shrink-0 w-[260px] xl:w-[300px] border-2 border-neutral-950 rounded-2xl bg-neutral-900 shadow-[8px_8px_0px_rgba(0,0,0,1)] overflow-hidden"
        >
          {/* Title bar */}
          <div className="flex items-center gap-1.5 px-4 py-2.5 border-b-2 border-neutral-950 bg-neutral-800">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56] border border-neutral-950" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-neutral-950" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f] border border-neutral-950" />
          </div>
          {/* Code Content */}
          <pre className="p-4 font-mono text-[11px] leading-relaxed text-zinc-100 overflow-x-auto">
            <code className="block">
              <span className="text-pink-500">const</span> <span className="text-blue-400">developer</span> = {'{'}{'\n'}
              {'  '}name: <span className="text-green-400">"Abhishek Kumar"</span>,{'\n'}
              {'  '}role: <span className="text-green-400">"Full-Stack Dev"</span>,{'\n'}
              {'  '}skills: [<span className="text-green-400">"React"</span>,{'\n'}
              {'    '}<span className="text-green-400">"Node.js"</span>,{'\n'}
              {'    '}<span className="text-green-400">"MongoDB"</span>],{'\n'}
              {'  '}passion:{'\n'}
              {'    '}<span className="text-green-400">"Building ideas{'\n'}     that solve{'\n'}     real problems"</span>{'\n'}
              {'};'}
            </code>
          </pre>
        </motion.div>

        {/* ── CENTER COLUMN: Title & Tags ── */}
        <div className="flex-1 min-w-0 text-center flex flex-col items-center">
          {/* Year Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative inline-block mb-4 px-5 py-1.5 border-2 border-neutral-950 rounded-full font-handwritten text-xl font-black bg-white text-neutral-900 shadow-sm"
          >
            <div className="absolute -top-1 left-3 right-3 h-[2px] bg-neutral-950 opacity-40 rounded-full" />
            <div className="absolute -bottom-1 left-3 right-3 h-[2px] bg-neutral-950 opacity-40 rounded-full" />
            2026
          </motion.div>

          {/* Welcome subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex items-center gap-2.5 text-[11px] sm:text-sm font-extrabold tracking-[0.25em] text-neutral-950 mb-4 font-display uppercase"
          >
            <span className="w-2 h-2 rounded-full bg-[#ff8a00]" />
            Welcome to My
            <span className="w-2 h-2 rounded-full bg-[#ff8a00]" />
          </motion.div>

          {/* ── PORTFOLIO title — clamp-sized so it always fits ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center justify-center gap-[clamp(2px,0.6vw,10px)] mb-3 select-none text-neutral-950 flex-nowrap w-full"
          >
            {/* P */}
            <span
              className="font-display font-extrabold leading-none relative"
              style={{ fontSize: 'clamp(2rem, 6.5vw, 7rem)' }}
            >
              P
              <svg className="absolute -top-2 -right-1 w-5 h-5 text-neutral-950" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M2,15 C8,10 12,8 18,12 M4,19 C9,14 13,12 19,16" strokeLinecap="round" />
              </svg>
            </span>

            {/* O smiley */}
            <div style={{ width: 'clamp(1.8rem, 5.8vw, 6.5rem)', height: 'clamp(1.8rem, 5.8vw, 6.5rem)' }} className="shrink-0">
              <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full text-yellow-400 drop-shadow-[3px_3px_0px_rgba(0,0,0,1)]">
                <circle cx="50" cy="50" r="45" stroke="#000" strokeWidth="6" />
                <circle cx="35" cy="40" r="6" fill="#000" />
                <circle cx="65" cy="40" r="6" fill="#000" />
                <path d="M30,60 C40,75 60,75 70,60" stroke="#000" strokeWidth="6" strokeLinecap="round" fill="none" />
              </svg>
            </div>

            {/* R */}
            <span
              className="font-handwritten font-black leading-none rotate-6 text-neutral-900"
              style={{ fontSize: 'clamp(2rem, 6.5vw, 7rem)' }}
            >
              R
            </span>

            {/* T */}
            <span
              className="font-display font-black leading-none text-neutral-950"
              style={{ fontSize: 'clamp(2rem, 6.5vw, 7rem)' }}
            >
              T
            </span>

            {/* f */}
            <span
              className="font-serif-display italic font-black leading-none text-neutral-900 -translate-y-2"
              style={{ fontSize: 'clamp(2rem, 6.5vw, 7rem)' }}
            >
              f
            </span>

            {/* O pill </> */}
            <div
              className="shrink-0 flex items-center justify-center bg-neutral-950 rounded-lg border-2 border-neutral-950 text-white font-mono font-bold rotate-[-4deg] shadow-[4px_4px_0px_rgba(0,0,0,0.15)]"
              style={{
                width: 'clamp(1.8rem, 5.5vw, 6rem)',
                height: 'clamp(1.3rem, 3.8vw, 4.2rem)',
                fontSize: 'clamp(0.6rem, 1.8vw, 1.5rem)',
              }}
            >
              &lt;/&gt;
            </div>

            {/* L */}
            <span
              className="font-playful font-black leading-none text-neutral-950"
              style={{ fontSize: 'clamp(2rem, 6.5vw, 7rem)' }}
            >
              l
            </span>

            {/* I */}
            <span
              className="font-display font-extrabold leading-none text-neutral-900"
              style={{ fontSize: 'clamp(2rem, 6.5vw, 7rem)' }}
            >
              i
            </span>

            {/* O target */}
            <div
              className="shrink-0"
              style={{ width: 'clamp(1.5rem, 5vw, 5.5rem)', height: 'clamp(1.5rem, 5vw, 5.5rem)' }}
            >
              <svg viewBox="0 0 100 100" className="w-full h-full text-neutral-950" fill="none">
                <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="9" />
                <circle cx="50" cy="50" r="24" stroke="currentColor" strokeWidth="9" />
                <circle cx="50" cy="50" r="8" fill="currentColor" />
              </svg>
            </div>
          </motion.div>

          {/* Yellow sweep underline */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0.6 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="w-[55%] h-3 text-[#ff8a00] mb-7"
          >
            <svg viewBox="0 0 300 20" fill="none" className="w-full h-full">
              <path d="M10,10 Q100,18 290,10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              <path d="M25,12 Q120,19 275,13" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </motion.div>

          {/* Tags Pill */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="inline-flex items-center flex-wrap justify-center gap-x-2 gap-y-1 sm:gap-3 px-4 sm:px-6 py-2 border-2 border-neutral-950 rounded-full font-handwritten text-sm sm:text-xl font-bold bg-white text-neutral-800 shadow-[4px_4px_0px_rgba(0,0,0,1)] max-w-[90vw]"
          >
            <span>Full-Stack Engineer</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff8a00] shrink-0" />
            <span>MERN Specialist</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff8a00] shrink-0" />
            <span>Creative Coder</span>
          </motion.div>
        </div>

        {/* ── RIGHT COLUMN: Terminal card ── */}
        <motion.div
          initial={{ opacity: 0, x: 60, rotate: 4 }}
          animate={{ opacity: 1, x: 0, rotate: 2 }}
          transition={{ duration: 0.9, type: 'spring', stiffness: 55 }}
          className="hidden lg:block shrink-0 w-[260px] xl:w-[290px] border-2 border-neutral-950 rounded-2xl bg-neutral-950 shadow-[8px_8px_0px_rgba(0,0,0,1)] overflow-hidden"
        >
          {/* Title bar */}
          <div className="flex items-center gap-1.5 px-4 py-2.5 border-b-2 border-neutral-800 bg-neutral-900">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56] border border-neutral-800" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-neutral-800" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f] border border-neutral-800" />
          </div>
          {/* Terminal Content */}
          <pre className="p-4 font-mono text-[11px] leading-relaxed text-zinc-300">
            <code className="block">
              <span className="text-zinc-500">$</span> whoami{'\n'}
              <span className="text-neutral-400">&gt; Abhishek Kumar</span>{'\n'}
              <span className="text-neutral-400">&gt; Full-Stack Developer</span>{'\n'}
              <span className="text-neutral-400">&gt; Building scalable</span>{'\n'}
              <span className="text-neutral-400">{'  '}web applications</span>{'\n'}
              {'\n'}
              <span className="text-zinc-500">$</span> skills{'\n'}
              <span className="text-green-400">&gt; React, Node.js</span>{'\n'}
              <span className="text-green-400">{'  '}MongoDB, Express</span>{'\n'}
              <span className="text-orange-500 animate-pulse font-black">_</span>
            </code>
          </pre>
        </motion.div>
      </div>

      {/* ===================== WAVE DIVIDER ===================== */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden z-20 translate-y-[2px] leading-[0]">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-[60px] md:h-[120px] block"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C240,110 480,120 720,60 C960,0 1200,40 1440,80 L1440,120 L0,120 Z"
            fill="#1e1e1e"
          />
        </svg>
      </div>
    </section>
  );
}
