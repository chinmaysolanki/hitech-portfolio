import { experience, education } from '@/lib/data';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function Experience() {
  if (experience.length === 0 && education.length === 0) return null;

  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="05" kicker="Timeline" title="Experience" />

        {experience.length > 0 && (
          <div className="mt-12 space-y-2">
            {experience.map((e, i) => (
              <Reveal key={`${e.org}-${i}`} delay={i * 0.05}>
                <div className="grid gap-2 border-l-2 border-cyan/20 py-5 pl-6 transition-colors hover:border-cyan sm:grid-cols-[180px_1fr] sm:gap-6">
                  <div className="font-mono text-sm text-foreground/50">
                    {e.period}
                  </div>
                  <div>
                    <h3 className="font-bold uppercase tracking-wide">
                      {e.role} <span className="text-cyan">// {e.org}</span>
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
          <div className="mt-14">
            <Reveal>
              <h3 className="font-mono text-sm uppercase tracking-[0.3em] text-magenta">
                Education
              </h3>
            </Reveal>
            <div className="mt-4 space-y-2">
              {education.map((ed, i) => (
                <Reveal key={`${ed.school}-${i}`} delay={i * 0.05}>
                  <div className="grid gap-2 border-l-2 border-magenta/20 py-4 pl-6 transition-colors hover:border-magenta sm:grid-cols-[180px_1fr] sm:gap-6">
                    <div className="font-mono text-sm text-foreground/50">
                      {ed.period}
                    </div>
                    <div>
                      <h4 className="font-bold uppercase tracking-wide">
                        {ed.school}
                      </h4>
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
