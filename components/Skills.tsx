import { skillGroups } from '@/lib/data';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="03" kicker="Skills" title="Tech Arsenal" />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.1}>
              <div className="card clip-corner h-full p-6">
                <h3 className="font-mono text-sm uppercase tracking-[0.2em] text-cyan">
                  {group.title}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="border border-foreground/10 bg-foreground/5 px-3 py-1 text-sm text-foreground/75 transition-colors hover:border-cyan/50 hover:text-cyan"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
