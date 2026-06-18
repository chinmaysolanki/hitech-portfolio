'use client';

import { useEffect, useRef, useState } from 'react';
import { stats } from '@/lib/data';

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [val, setVal] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1400;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(Math.round(eased * to));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [to]);

  return (
    <span ref={ref} className="gradient-text tabular-nums">
      {val}
      {suffix}
    </span>
  );
}

export default function StatsBand() {
  if (!stats?.length) return null;
  return (
    <section className="px-6 py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-cyan/15 bg-cyan/10 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="bg-[#070a14] px-6 py-10 text-center">
            <div className="text-4xl font-black sm:text-6xl">
              <Counter to={s.value} suffix={s.suffix} />
            </div>
            <div className="mt-2 font-mono text-xs uppercase tracking-[0.2em] text-foreground/50">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
