import { services } from '@/lib/data';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function Services() {
  if (!services?.length) return null;
  return (
    <section id="services" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="01" kicker="What I do" title="Capabilities" />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <div className="card clip-corner h-full p-6">
                <div className="text-3xl text-cyan">{s.icon}</div>
                <h3 className="mt-4 text-lg font-bold uppercase tracking-wide">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/60">
                  {s.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
