'use client';

import { useEffect, useRef } from 'react';

// Lightweight animated cyberpunk background: drifting neon particles that
// link up into a network, plus a few "data rain" streaks. Pure canvas 2D.
export default function CyberBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let w = 0;
    let h = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    type P = { x: number; y: number; vx: number; vy: number; c: string };
    const colors = ['rgba(0,240,255,', 'rgba(255,43,214,', 'rgba(139,92,246,'];
    let pts: P[] = [];

    type Rain = { x: number; y: number; len: number; speed: number };
    let rain: Rain[] = [];

    const resize = () => {
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(90, Math.floor((w * h) / 16000));
      pts = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        c: colors[(Math.random() * colors.length) | 0],
      }));

      const rainCount = Math.min(28, Math.floor(w / 60));
      rain = Array.from({ length: rainCount }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        len: 60 + Math.random() * 140,
        speed: 1.5 + Math.random() * 3.5,
      }));
    };

    const mouse = { x: -9999, y: -9999 };
    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    let raf = 0;
    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      // data rain
      for (const r of rain) {
        const grad = ctx.createLinearGradient(r.x, r.y, r.x, r.y + r.len);
        grad.addColorStop(0, 'rgba(0,240,255,0)');
        grad.addColorStop(1, 'rgba(0,240,255,0.18)');
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(r.x, r.y);
        ctx.lineTo(r.x, r.y + r.len);
        ctx.stroke();
        r.y += r.speed;
        if (r.y > h) {
          r.y = -r.len;
          r.x = Math.random() * w;
        }
      }

      // particles + links
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        // gentle attraction to cursor
        const dxm = mouse.x - p.x;
        const dym = mouse.y - p.y;
        const dm2 = dxm * dxm + dym * dym;
        if (dm2 < 26000) {
          p.vx += dxm * 0.00004;
          p.vy += dym * 0.00004;
        }
        p.vx = Math.max(-0.7, Math.min(0.7, p.vx));
        p.vy = Math.max(-0.7, Math.min(0.7, p.vy));

        ctx.fillStyle = p.c + '0.9)';
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.6, 0, Math.PI * 2);
        ctx.fill();

        for (let j = i + 1; j < pts.length; j++) {
          const q = pts[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 13000) {
            const a = (1 - d2 / 13000) * 0.4;
            ctx.strokeStyle = p.c + a + ')';
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }
      }

      raf = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onMove);
    if (!reduce) draw();
    else {
      // one static frame
      draw();
      cancelAnimationFrame(raf);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full"
    />
  );
}
