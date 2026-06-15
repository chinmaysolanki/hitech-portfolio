import { about, stats } from '@/lib/data';
import Reveal from './Reveal';

export default function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-accent">
            About
          </h2>
        </Reveal>

        <div className="mt-6 grid gap-12 md:grid-cols-[1.6fr_1fr]">
          <Reveal delay={0.1}>
            <div className="space-y-5 text-lg leading-relaxed text-foreground/70">
              {about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </Reveal>

          {stats.length > 0 && (
            <Reveal delay={0.2}>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
                {stats.map((s) => (
                  <div key={s.label} className="card rounded-2xl p-5">
                    <div className="text-3xl font-bold gradient-text">{s.value}</div>
                    <div className="mt-1 text-sm text-foreground/60">{s.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
