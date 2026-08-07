import { useEffect, useRef } from "react";

const CODE_CHARS = [
  "{}", "</>", "=>", "()", "[]", "&&",
  "//", "??", "++", "===", "!==", "||",
  ";", "::", "/*", "*/", "fn()", "=>",
];

interface CodeParticle {
  x: number; y: number;
  vx: number; vy: number;
  char: string;
  alpha: number;
  size: number;
  color: string;
}

export function CustomCursor() {
  const canvasRef  = useRef<HTMLCanvasElement>(null);
  // The custom SVG arrow — follows mouse exactly
  const arrowRef   = useRef<HTMLDivElement>(null);
  // Lagged position tracker (for trail)
  const laggedRef  = useRef({ x: -300, y: -300 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const arrow  = arrowRef.current;
    if (!canvas || !arrow) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    /* ── canvas sizing ── */
    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    /* ── state ── */
    const mouse   = { x: -300, y: -300 };
    const lagged  = laggedRef.current;
    let isClicking = false;

    const trail: { x: number; y: number }[] = [];
    const MAX_TRAIL = 20;
    const particles: CodeParticle[] = [];
    const COLORS = ["#ff8a00", "#fbbf24", "#34d399", "#60a5fa", "#c084fc"];
    let frame = 0;

    /* ── events ── */
    const onMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      // Spawn code char particle every ~5 frames while moving
      if (frame % 5 === 0 && particles.length < 18 && lagged.x > 0) {
        particles.push({
          x: lagged.x, y: lagged.y,
          vx: (Math.random() - 0.5) * 1.4,
          vy: -0.5 - Math.random() * 1.0,
          char: CODE_CHARS[Math.floor(Math.random() * CODE_CHARS.length)],
          alpha: 0.85,
          size: 9 + Math.floor(Math.random() * 5),
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
        });
      }
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      void target; // no-op — keep handler for future use
    };

    const onMouseDown = () => { isClicking = true; };
    const onMouseUp   = () => { isClicking = false; };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", onMouseOver);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup",   onMouseUp);

    /* ── render loop ── */
    let animId: number;

    const render = () => {
      animId = requestAnimationFrame(render);
      frame++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      /* LERP lagged position (used for trail) */
      lagged.x += (mouse.x - lagged.x) * 0.18;
      lagged.y += (mouse.y - lagged.y) * 0.18;

      /* ── Position arrow ── */
      const scale = isClicking ? 0.88 : 1;
      arrow.style.transform = `translate3d(${mouse.x}px,${mouse.y}px,0) scale(${scale})`;

      /* ── Trail ── */
      trail.push({ x: lagged.x, y: lagged.y });
      if (trail.length > MAX_TRAIL) trail.shift();

      if (trail.length > 3) {
        for (let pass = 0; pass < 2; pass++) {
          ctx.beginPath();
          ctx.moveTo(trail[0].x, trail[0].y);
          for (let i = 1; i < trail.length - 1; i++) {
            const mx = (trail[i].x + trail[i + 1].x) / 2;
            const my = (trail[i].y + trail[i + 1].y) / 2;
            ctx.quadraticCurveTo(trail[i].x, trail[i].y, mx, my);
          }
          const first = trail[0], last = trail[trail.length - 1];
          const g = ctx.createLinearGradient(first.x, first.y, last.x, last.y);
          if (pass === 0) {
            g.addColorStop(0,   "rgba(255,138,0,0)");
            g.addColorStop(0.4, "rgba(255,138,0,0.12)");
            g.addColorStop(1,   "rgba(255,138,0,0.45)");
            ctx.lineWidth = 9;
          } else {
            g.addColorStop(0,   "rgba(255,200,50,0)");
            g.addColorStop(0.5, "rgba(255,200,50,0.18)");
            g.addColorStop(1,   "rgba(255,200,50,0.7)");
            ctx.lineWidth = 2;
          }
          ctx.globalCompositeOperation = "screen";
          ctx.strokeStyle = g;
          ctx.lineCap = "round";
          ctx.lineJoin = "round";
          ctx.stroke();
          ctx.globalCompositeOperation = "source-over";
        }
      }

      /* ── Code char particles ── */
      ctx.globalCompositeOperation = "screen";
      ctx.textBaseline = "middle";
      ctx.textAlign    = "center";

      const alive: CodeParticle[] = [];
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.vy -= 0.018;
        p.alpha -= 0.024;
        if (p.alpha <= 0) continue;

        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.font = `bold ${p.size}px "JetBrains Mono", monospace`;
        ctx.fillStyle = p.color;
        ctx.fillText(p.char, p.x, p.y);
        ctx.restore();
        alive.push(p);
      }
      particles.length = 0;
      for (const p of alive) particles.push(p);

      ctx.globalAlpha = 1;
      ctx.globalCompositeOperation = "source-over";
    };
    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup",   onMouseUp);
    };
  }, []);

  return (
    <>
      {/* Canvas — trail + particles */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-[9997] hidden md:block"
      />

      {/* ── Custom SVG arrow pointer ──
          Hot-spot = top-left corner of the SVG (0,0).
          Design: sharp code arrow with orange fill + dark drop-shadow.
      */}
      <div
        ref={arrowRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block"
        style={{ width: 22, height: 26 }}
      >
        <svg
          width="22"
          height="26"
          viewBox="0 0 22 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Dark shadow path */}
          <path
            d="M2 2L2 21.5L6.8 16.2L10.6 24L13.2 22.8L9.4 15L16.2 14.5L2 2Z"
            fill="#0d0d0d"
            stroke="#0d0d0d"
            strokeWidth="3.5"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          {/* Orange arrow body */}
          <path
            d="M2 2L2 21.5L6.8 16.2L10.6 24L13.2 22.8L9.4 15L16.2 14.5L2 2Z"
            fill="#ff8a00"
            strokeWidth="0.5"
            strokeLinejoin="round"
          />
          {/* Highlight shard */}
          <path
            d="M2 2L2 18L5.5 14.2"
            stroke="#ffd080"
            strokeWidth="1.2"
            strokeLinecap="round"
            opacity="0.6"
          />
        </svg>
      </div>
    </>
  );
}
