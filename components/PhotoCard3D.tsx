'use client';

import { useRef, useState } from 'react';
import { profile } from '@/lib/data';
import { asset } from '@/lib/asset';

export default function PhotoCard3D() {
  const ref = useRef<HTMLDivElement>(null);
  const [t, setT] = useState({ rx: 0, ry: 0, mx: 50, my: 50 });

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    setT({
      ry: (px - 0.5) * 22,
      rx: -(py - 0.5) * 22,
      mx: px * 100,
      my: py * 100,
    });
  };
  const reset = () => setT({ rx: 0, ry: 0, mx: 50, my: 50 });

  const hasPhoto = Boolean(profile.avatarUrl);

  return (
    <div className="tilt-wrap mx-auto w-full max-w-sm">
      <div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={reset}
        className="relative aspect-[4/5] w-full transition-transform duration-150 ease-out will-change-transform"
        style={{
          transform: `rotateX(${t.rx}deg) rotateY(${t.ry}deg)`,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* glow halo */}
        <div
          className="absolute -inset-6 -z-10 rounded-[2rem] opacity-70 blur-2xl"
          style={{
            background:
              'conic-gradient(from 180deg, #00f0ff, #8b5cf6, #ff2bd6, #00f0ff)',
          }}
        />

        {/* frame */}
        <div className="neon-border clip-corner relative h-full w-full overflow-hidden rounded-2xl bg-[#070a14]">
          {hasPhoto ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={asset(profile.avatarUrl)}
              alt={profile.name}
              className="h-full w-full object-cover"
            />
          ) : (
            <Placeholder />
          )}

          {/* scanline overlay on photo */}
          <div
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                'repeating-linear-gradient(transparent 0 2px, rgba(0,240,255,0.08) 2px 3px)',
            }}
          />

          {/* holographic shine following cursor */}
          <div
            className="holo-shine pointer-events-none absolute inset-0"
            style={{
              opacity: 0.5,
              backgroundPosition: `${t.mx}% ${t.my}%`,
            }}
          />

          {/* HUD corner brackets */}
          {(['tl', 'tr', 'bl', 'br'] as const).map((c) => (
            <span
              key={c}
              className="pointer-events-none absolute h-6 w-6 border-cyan"
              style={{
                top: c[0] === 't' ? 10 : undefined,
                bottom: c[0] === 'b' ? 10 : undefined,
                left: c[1] === 'l' ? 10 : undefined,
                right: c[1] === 'r' ? 10 : undefined,
                borderTopWidth: c[0] === 't' ? 2 : 0,
                borderBottomWidth: c[0] === 'b' ? 2 : 0,
                borderLeftWidth: c[1] === 'l' ? 2 : 0,
                borderRightWidth: c[1] === 'r' ? 2 : 0,
                borderColor: '#00f0ff',
              }}
            />
          ))}

          {/* bottom name plate */}
          <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-[#05060d] to-transparent px-4 pb-3 pt-10">
            <span className="text-xs font-semibold tracking-[0.3em] text-cyan">
              ONLINE
            </span>
            <span className="text-xs font-mono text-foreground/50">
              ID://CS-2026
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Placeholder() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-[radial-gradient(circle_at_50%_30%,rgba(0,240,255,0.12),transparent_60%)]">
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
        <circle cx="60" cy="44" r="24" stroke="#00f0ff" strokeWidth="2" opacity="0.7" />
        <path
          d="M20 104c0-22 18-34 40-34s40 12 40 34"
          stroke="#ff2bd6"
          strokeWidth="2"
          opacity="0.7"
        />
      </svg>
      <p className="px-6 text-center text-xs leading-relaxed text-foreground/45">
        Drop your photo at{' '}
        <code className="text-cyan">public/avatar.jpg</code> and set{' '}
        <code className="text-cyan">avatarUrl</code> in{' '}
        <code className="text-cyan">lib/data.ts</code>
      </p>
    </div>
  );
}
