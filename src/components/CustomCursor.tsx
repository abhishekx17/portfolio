import { useEffect, useRef } from "react";

export function CustomCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const pointer = pointerRef.current;
    if (!canvas || !pointer) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const mouse = { x: -100, y: -100 };
    const pointerBlob = { x: -100, y: -100 };

    const trailPoints: Array<{ x: number; y: number }> = [];
    const maxPoints = 20;
    let time = 0;

    let isMagnet = false;
    let isHovered = false;
    const magnetTarget = { x: 0, y: 0 };

    // Realistic smoke puff particles
    const smokePuffs: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      alpha: number;
      expansion: number;
    }> = [];

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      // Spawn smoke puffs upon movement
      if (Math.random() < 0.4 && pointerBlob.x > 0) {
        smokePuffs.push({
          x: pointerBlob.x,
          y: pointerBlob.y,
          vx: (Math.random() - 0.5) * 0.6,
          vy: (Math.random() - 0.5) * 0.4 - 0.15, // drifts slightly upward
          size: 6 + Math.random() * 8,
          alpha: 0.55,
          expansion: 0.25 + Math.random() * 0.2, // expands as it floats
        });
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest("a, button, .cursor-pointer");
      
      const svg = pointer.querySelector("svg");
      const path = svg?.querySelector("path");

      if (interactive) {
        isHovered = true;
        const rect = interactive.getBoundingClientRect();
        magnetTarget.x = rect.left + rect.width / 2;
        magnetTarget.y = rect.top + rect.height / 2;
        isMagnet = true;

        if (svg && path) {
          svg.style.transform = "scale(1.2) rotate(-5deg)";
          path.setAttribute("fill", "#ffffff");
        }
      } else {
        isHovered = false;
        isMagnet = false;

        if (svg && path) {
          svg.style.transform = "scale(1) rotate(0deg)";
          path.setAttribute("fill", "#00e5ff"); // matching blue/cyan theme
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    // Animation Loop
    let animationFrameId: number;

    const render = () => {
      time += 0.08;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Coordinate LERP
      const targetX = isMagnet ? magnetTarget.x + (mouse.x - magnetTarget.x) * 0.2 : mouse.x;
      const targetY = isMagnet ? magnetTarget.y + (mouse.y - magnetTarget.y) * 0.2 : mouse.y;

      pointerBlob.x += (targetX - pointerBlob.x) * 0.25;
      pointerBlob.y += (targetY - pointerBlob.y) * 0.25;

      // Update DOM cursor position
      pointer.style.transform = `translate3d(${pointerBlob.x}px, ${pointerBlob.y}px, 0)`;

      // Add to trail history
      trailPoints.push({ x: pointerBlob.x, y: pointerBlob.y });
      if (trailPoints.length > maxPoints) {
        trailPoints.shift();
      }

      // Enable additive blend for realistic smoke glow
      ctx.globalCompositeOperation = "screen";

      // 1. Draw glowing blue ribbon vapor trail
      if (trailPoints.length > 3) {
        for (let waveIdx = 0; waveIdx < 2; waveIdx++) {
          ctx.beginPath();
          const startPt = trailPoints[0];
          ctx.moveTo(startPt.x, startPt.y);

          for (let i = 1; i < trailPoints.length - 1; i++) {
            // Wobble physics
            const offsetMultiplier = (i / trailPoints.length) * 5;
            const wobbleY = Math.sin(time + i * 0.5 + waveIdx * Math.PI) * offsetMultiplier;
            const wobbleX = Math.cos(time + i * 0.4 + waveIdx * Math.PI) * (offsetMultiplier * 0.5);

            const xc = (trailPoints[i].x + wobbleX + trailPoints[i + 1].x) / 2;
            const yc = (trailPoints[i].y + wobbleY + trailPoints[i + 1].y) / 2;
            
            ctx.quadraticCurveTo(trailPoints[i].x + wobbleX, trailPoints[i].y + wobbleY, xc, yc);
          }

          const endPt = trailPoints[trailPoints.length - 1];
          const grad = ctx.createLinearGradient(
            trailPoints[0].x, trailPoints[0].y,
            endPt.x, endPt.y
          );

          // Glowing blue-indigo gradient matching reference
          if (waveIdx === 0) {
            grad.addColorStop(0, "rgba(0, 229, 255, 0.45)");
            grad.addColorStop(0.5, "rgba(0, 120, 255, 0.2)");
            grad.addColorStop(1, "rgba(0, 40, 255, 0)");
            ctx.lineWidth = 12;
          } else {
            grad.addColorStop(0, "rgba(0, 255, 180, 0.25)");
            grad.addColorStop(0.5, "rgba(0, 229, 255, 0.12)");
            grad.addColorStop(1, "rgba(0, 120, 255, 0)");
            ctx.lineWidth = 6;
          }

          ctx.strokeStyle = grad;
          ctx.lineCap = "round";
          ctx.lineJoin = "round";
          ctx.shadowBlur = waveIdx === 0 ? 10 : 0;
          ctx.shadowColor = "rgba(0, 229, 255, 0.5)";
          ctx.stroke();
          ctx.shadowBlur = 0;
        }
      }

      // 2. Draw and update expanding smoke puff particles
      for (let i = smokePuffs.length - 1; i >= 0; i--) {
        const p = smokePuffs[i];
        p.x += p.vx;
        p.y += p.vy;
        p.size += p.expansion; // expands
        p.alpha -= 0.016; // fades

        if (p.alpha <= 0) {
          smokePuffs.splice(i, 1);
          continue;
        }

        // Draw soft radial blur puff
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size);
        grad.addColorStop(0, isHovered ? `rgba(255, 255, 255, ${p.alpha * 0.4})` : `rgba(0, 229, 255, ${p.alpha * 0.45})`);
        grad.addColorStop(0.5, `rgba(0, 100, 255, ${p.alpha * 0.15})`);
        grad.addColorStop(1, "rgba(0, 0, 0, 0)");

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
      }

      // Reset composite operation
      ctx.globalCompositeOperation = "source-over";

      animationFrameId = requestAnimationFrame(render);
    };
    render();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      {/* Fluid trail canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-40 hidden md:block"
      />

      {/* Sleek Custom Vector Pointer Arrow (Cyan theme) */}
      <div
        ref={pointerRef}
        className="fixed top-0 left-0 w-6 h-6 pointer-events-none z-50 hidden md:block origin-top-left"
        style={{
          marginLeft: "-2px",
          marginTop: "-2px",
        }}
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          className="transition-all duration-300 transform"
          style={{ transform: "scale(1) rotate(0deg)" }}
        >
          <path
            d="M4.5 3V21L9.75 15.75H18.75L4.5 3Z"
            fill="#00e5ff"
            stroke="#121212"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </>
  );
}
