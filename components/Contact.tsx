import { profile, socials } from '@/lib/data';
import Reveal from './Reveal';
import { SocialIcon } from './Icons';

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-32">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-accent">
            Contact
          </h2>
          <p className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Let&apos;s build something
          </p>
          <p className="mx-auto mt-4 max-w-xl text-lg text-foreground/60">
            Have a project, role, or idea in mind? My inbox is always open.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <a
            href={`mailto:${profile.email}`}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-2 px-8 py-4 text-lg font-medium text-white transition-transform hover:scale-105"
          >
            {profile.email}
          </a>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-10 flex items-center justify-center gap-6">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="text-foreground/50 transition-colors hover:text-foreground"
              >
                <SocialIcon name={s.icon} className="h-6 w-6" />
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
