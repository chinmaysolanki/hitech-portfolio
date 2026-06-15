import { experience, education } from '@/lib/data';
import Reveal from './Reveal';

export default function Experience() {
  if (experience.length === 0 && education.length === 0) return null;

  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-accent">
            Experience
          </h2>
        </Reveal>

        {experience.length > 0 && (
          <div className="mt-10 space-y-2">
            {experience.map((e, i) => (
              <Reveal key={`${e.org}-${i}`} delay={i * 0.05}>
                <div className="grid gap-2 border-l border-white/10 py-5 pl-6 sm:grid-cols-[180px_1fr] sm:gap-6">
                  <div className="text-sm text-foreground/50">{e.period}</div>
                  <div>
                    <h3 className="font-semibold">
                      {e.role} <span className="text-accent">· {e.org}</span>
                    </h3>
                    <p className="mt-1 leading-relaxed text-foreground/60">
                      {e.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        )}

        {education.length > 0 && (
          <div className="mt-12">
            <Reveal>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-foreground/40">
                Education
              </h3>
            </Reveal>
            <div className="mt-4 space-y-2">
              {education.map((ed, i) => (
                <Reveal key={`${ed.school}-${i}`} delay={i * 0.05}>
                  <div className="grid gap-2 border-l border-white/10 py-4 pl-6 sm:grid-cols-[180px_1fr] sm:gap-6">
                    <div className="text-sm text-foreground/50">{ed.period}</div>
                    <div>
                      <h4 className="font-semibold">{ed.school}</h4>
                      <p className="mt-1 text-foreground/60">{ed.degree}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
