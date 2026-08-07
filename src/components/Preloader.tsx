import { useEffect, useState, useRef } from "react";
import gsap from "gsap";

export function Preloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const topHalfRef = useRef<HTMLDivElement>(null);
  const bottomHalfRef = useRef<HTMLDivElement>(null);
  const centerContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Progress counter simulation
    const obj = { val: 0 };
    const ctx = gsap.context(() => {
      gsap.to(obj, {
        val: 100,
        duration: 2.2,
        ease: "power2.out",
        onUpdate: () => {
          setProgress(Math.floor(obj.val));
        },
        onComplete: () => {
          // Trigger the split animation
          const tl = gsap.timeline({
            onComplete: () => {
              onComplete();
            }
          });

          // First fade out center text
          tl.to(centerContentRef.current, {
            opacity: 0,
            scale: 0.9,
            duration: 0.4,
            ease: "power2.in"
          });

          // Tear/Split halves away
          tl.to(topHalfRef.current, {
            yPercent: -100,
            duration: 0.8,
            ease: "power3.inOut"
          }, "-=0.1");

          tl.to(bottomHalfRef.current, {
            yPercent: 100,
            duration: 0.8,
            ease: "power3.inOut"
          }, "<");
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-transparent select-none font-mono"
    >
      {/* Top Half */}
      <div
        ref={topHalfRef}
        className="absolute top-0 left-0 w-full h-[50.5vh] grid-paper border-b-2 border-dashed border-zinc-400 flex flex-col justify-end items-center"
      />

      {/* Bottom Half */}
      <div
        ref={bottomHalfRef}
        className="absolute bottom-0 left-0 w-full h-[50.5vh] grid-paper border-t-2 border-dashed border-zinc-400 flex flex-col justify-start items-center"
      />

      {/* Center Console UI */}
      <div
        ref={centerContentRef}
        className="relative z-10 flex flex-col items-center bg-[#faf9f6] border-4 border-neutral-900 p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-neutral-900 max-w-sm w-full mx-4"
      >
        <div className="w-full flex justify-between items-center text-xs font-bold border-b-2 border-neutral-900 pb-2 mb-4">
          <span>SYSTEM_INIT.EXE</span>
          <span className="animate-pulse">● LIVE</span>
        </div>

        <div className="text-left w-full space-y-2 text-sm font-semibold">
          <p className="text-zinc-600 font-bold">PORTFOLIO LOAD SEQUENCER</p>
          <div className="text-[11px] text-zinc-500 font-bold tracking-tight leading-normal">
            &gt; IMPORTING THREE.JS PACKAGES... OK<br />
            &gt; ASSEMBLING GEN-Z GRAPHICS... OK<br />
            &gt; TEARING PAPER COVERS... ACTIVE
          </div>
        </div>

        <div className="my-6 w-full bg-neutral-200 border-2 border-neutral-900 h-6 p-0.5 overflow-hidden">
          <div
            className="bg-[#ff8a00] h-full transition-all duration-75 border-r border-neutral-900"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex items-baseline justify-between w-full">
          <span className="font-handwritten text-2xl font-bold text-[#ff8a00] rotate-[-4deg]">
            Loading...
          </span>
          <span className="text-4xl font-black font-display tracking-tighter">
            {progress}%
          </span>
        </div>
      </div>
    </div>
  );
}
