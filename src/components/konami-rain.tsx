"use client";

import { useEffect, useRef, useState } from "react";

const KONAMI = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

export function KonamiRain() {
  const [active, setActive] = useState(false);
  const idx = useRef(0);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const expected = KONAMI[idx.current];
      if (e.key.toLowerCase() === expected.toLowerCase()) {
        idx.current += 1;
        if (idx.current === KONAMI.length) {
          idx.current = 0;
          setActive((v) => !v);
        }
      } else {
        idx.current = 0;
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (!active) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    function resize() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array.from({ length: columns }, () =>
      Math.random() * -100
    );
    const chars =
      "アァカサタナハマヤラワabcdefghijklmnopqrstuvwxyz0123456789{}<>/";

    let raf = 0;
    function draw() {
      if (!canvas || !ctx) return;
      ctx.fillStyle = "rgba(10, 10, 10, 0.08)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${fontSize}px var(--font-geist-mono), monospace`;
      for (let i = 0; i < drops.length; i++) {
        const ch = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;
        ctx.fillStyle =
          drops[i] > 0 && Math.random() > 0.975 ? "#fff" : "#34d39977";
        ctx.fillText(ch, x, y);
        if (y > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i] += 1;
      }
      raf = requestAnimationFrame(draw);
    }
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [active]);

  if (!active) return null;
  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 -z-[5] pointer-events-none opacity-60 mix-blend-screen"
      />
      <button
        type="button"
        onClick={() => setActive(false)}
        className="fixed bottom-4 right-4 z-50 rounded-full border border-white/10 bg-card/80 px-3 py-1.5 font-mono text-[10.5px] uppercase tracking-widest text-neutral-400 backdrop-blur-md transition hover:text-foreground"
        aria-label="Disable matrix mode"
      >
        ↳ exit matrix
      </button>
    </>
  );
}
