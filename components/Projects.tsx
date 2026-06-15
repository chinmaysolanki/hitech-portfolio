import { projects } from '@/lib/data';
import Reveal from './Reveal';
import { GitHubIcon, ArrowIcon } from './Icons';

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-accent">
            Projects
          </h2>
          <p className="mt-2 text-2xl font-semibold">Things I&apos;ve built</p>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal
              key={p.title}
              delay={(i % 2) * 0.1}
              className={p.featured ? 'md:col-span-2' : ''}
            >
              <article className="card group flex h-full flex-col rounded-2xl p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold">{p.title}</h3>
                  <div className="flex items-center gap-3 text-foreground/50">
                    {p.repo && (
                      <a
                        href={p.repo}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${p.title} repository`}
                        className="transition-colors hover:text-foreground"
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
                        className="transition-colors hover:text-accent"
                      >
                        <ArrowIcon className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="mt-3 flex-1 leading-relaxed text-foreground/60">
                  {p.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
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
