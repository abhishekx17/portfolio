import { useEffect, useState, useRef } from "react";
import gsap from "gsap";

const BOOT_LINES = [
  { label: "IMPORTING THREE.JS PACKAGES", delay: 0 },
  { label: "ASSEMBLING GEN-Z GRAPHICS", delay: 280 },
  { label: "TEARING PAPER COVERS", delay: 560 },
  { label: "LOADING PORTFOLIO ASSETS", delay: 840 },
];

export function Preloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [visibleLines, setVisibleLines] = useState<number[]>([]);

  const containerRef = useRef<HTMLDivElement>(null);
  const topHalfRef = useRef<HTMLDivElement>(null);
  const bottomHalfRef = useRef<HTMLDivElement>(null);
  const centerContentRef = useRef<HTMLDivElement>(null);

  // Reveal boot lines one by one
  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    BOOT_LINES.forEach(({ delay }, idx) => {
      timers.push(setTimeout(() => setVisibleLines((p) => [...p, idx]), delay));
    });
    return () => timers.forEach(clearTimeout);
  }, []);

  // Animate progress 0 → 100 over ~2.2 s with ease-out
  useEffect(() => {
    const obj = { val: 0 };
    const ctx = gsap.context(() => {
      gsap.to(obj, {
        val: 100,
        duration: 2.2,
        ease: "power2.out",
        onUpdate: () => setProgress(Math.floor(obj.val)),
        onComplete: () => {
          setProgress(100);

          // ── EXIT ANIMATION ──────────────────────────────────────────
          const tl = gsap.timeline({ onComplete });

          // 1. Flash the percentage to orange, freeze briefly
          tl.to(centerContentRef.current, {
            duration: 0.12,
            ease: "none",
          });

          // 2. Fade + scale-down center card
          tl.to(centerContentRef.current, {
            opacity: 0,
            scale: 0.92,
            duration: 0.35,
            ease: "power2.in",
          });

          // 3. Tear: top half flies up, bottom half flies down — simultaneously
          tl.to(
            topHalfRef.current,
            { yPercent: -102, duration: 0.75, ease: "power3.inOut" },
            "-=0.08"
          );
          tl.to(
            bottomHalfRef.current,
            { yPercent: 102, duration: 0.75, ease: "power3.inOut" },
            "<"
          );
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center select-none overflow-hidden font-mono"
    >
      {/* ── TOP HALF (grid-paper) ── */}
      <div
        ref={topHalfRef}
        className="absolute top-0 left-0 w-full h-[50.5vh] grid-paper"
        style={{
          borderBottom: "2px dashed rgba(0,0,0,0.18)",
        }}
      />

      {/* ── BOTTOM HALF (grid-paper) ── */}
      <div
        ref={bottomHalfRef}
        className="absolute bottom-0 left-0 w-full h-[50.5vh] grid-paper"
        style={{
          borderTop: "2px dashed rgba(0,0,0,0.18)",
        }}
      />

      {/* ── CENTER CARD ── */}
      <div
        ref={centerContentRef}
        className="relative z-10 w-full max-w-sm mx-4 bg-[#faf9f6] border-4 border-neutral-950 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]"
      >
        {/* Card header */}
        <div className="flex items-center justify-between px-4 py-2.5 border-b-4 border-neutral-950 bg-neutral-950">
          <span className="text-[11px] font-black text-white tracking-widest uppercase">
            SYSTEM_INIT.EXE
          </span>
          <span className="text-[10px] font-bold text-[#ff8a00] animate-pulse tracking-widest">
            ● LIVE
          </span>
        </div>

        {/* Body */}
        <div className="px-5 pt-5 pb-4 space-y-4">
          {/* Title */}
          <div className="space-y-0.5">
            <p className="text-[10px] font-black uppercase tracking-widest text-neutral-500">
              // PORTFOLIO LOAD SEQUENCER
            </p>
          </div>

          {/* Boot log lines */}
          <div className="space-y-1.5">
            {BOOT_LINES.map(({ label }, idx) => {
              const visible = visibleLines.includes(idx);
              const isLast = idx === BOOT_LINES.length - 1;
              return (
                <div
                  key={idx}
                  className={`flex items-center gap-2 text-[11px] font-bold transition-all duration-300 ${
                    visible ? "opacity-100" : "opacity-0"
                  }`}
                  style={{ transform: visible ? "translateY(0)" : "translateY(4px)" }}
                >
                  <span className="text-neutral-400 shrink-0">&gt;</span>
                  <span className={isLast ? "text-neutral-700" : "text-neutral-500 truncate"}>
                    {label}...
                  </span>
                  {visible && (
                    <span
                      className="ml-auto shrink-0 font-black"
                      style={{ color: isLast ? "#ff8a00" : "#22c55e" }}
                    >
                      {isLast ? "ACTIVE" : "OK"}
                    </span>
                  )}
                </div>
              );
            })}
          </div>

          {/* Progress bar */}
          <div className="space-y-1.5 pt-1">
            <div className="w-full h-5 bg-neutral-200 border-2 border-neutral-950 overflow-hidden">
              <div
                className="h-full border-r-2 border-neutral-950 transition-all duration-75"
                style={{
                  width: `${progress}%`,
                  background:
                    progress === 100
                      ? "#ff8a00"
                      : `linear-gradient(to right, #ff8a00 ${progress - 20}%, #ffbd2e)`,
                }}
              />
            </div>
          </div>
        </div>

        {/* Card footer */}
        <div className="flex items-baseline justify-between px-5 pb-5">
          <span className="font-handwritten text-2xl font-bold text-[#ff8a00] rotate-[-3deg] inline-block">
            Loading...
          </span>
          <span className="text-5xl font-black font-display tracking-tighter text-neutral-950 tabular-nums">
            {progress}%
          </span>
        </div>
      </div>
    </div>
  );
}
