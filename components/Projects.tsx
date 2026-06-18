import { projects } from '@/lib/data';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { GitHubIcon, ArrowIcon } from './Icons';

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="04" kicker="Projects" title="Selected Work" />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal
              key={p.title}
              delay={(i % 2) * 0.1}
              className={p.featured ? 'md:col-span-2' : ''}
            >
              <article className="card clip-corner group flex h-full flex-col p-7">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-magenta">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="text-xl font-bold uppercase tracking-wide sm:text-2xl">
                      {p.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-3 text-foreground/50">
                    {p.repo && (
                      <a
                        href={p.repo}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${p.title} repository`}
                        className="transition-colors hover:text-cyan"
                      >
                        <GitHubIcon className="h-5 w-5" />
                      </a>
                    )}
                    {p.link && (
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${p.title} live site`}
                        className="transition-colors hover:text-cyan"
                      >
                        <ArrowIcon className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="mt-4 flex-1 leading-relaxed text-foreground/60">
                  {p.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="border border-cyan/25 bg-cyan/5 px-3 py-1 font-mono text-xs uppercase tracking-wide text-cyan"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
