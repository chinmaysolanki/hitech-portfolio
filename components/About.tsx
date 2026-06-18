import { about } from '@/lib/data';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="02" kicker="About" title="Who I am" />

        <div className="mt-12 grid gap-10 md:grid-cols-[1.5fr_1fr]">
          <Reveal delay={0.1}>
            <div className="space-y-5 text-lg leading-relaxed text-foreground/70">
              {about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="card clip-corner p-6 font-mono text-sm">
              <div className="mb-4 flex gap-1.5">
                <span className="h-3 w-3 rounded-full bg-magenta" />
                <span className="h-3 w-3 rounded-full bg-yellow" />
                <span className="h-3 w-3 rounded-full bg-cyan" />
              </div>
              <p className="text-foreground/50">
                <span className="text-magenta">const</span>{' '}
                <span className="text-cyan">dev</span> = {'{'}
              </p>
              <p className="pl-4 text-foreground/70">
                status: <span className="text-yellow">&apos;building&apos;</span>,
              </p>
              <p className="pl-4 text-foreground/70">
                focus: <span className="text-yellow">&apos;shipping fast&apos;</span>,
              </p>
              <p className="pl-4 text-foreground/70">
                coffee: <span className="text-cyan">Infinity</span>,
              </p>
              <p className="text-foreground/50">{'}'}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
