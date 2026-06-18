import { profile, socials } from '@/lib/data';
import Reveal from './Reveal';
import { SocialIcon } from './Icons';

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-32">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <span className="font-mono text-sm uppercase tracking-[0.3em] text-cyan">
            // Contact
          </span>
          <p className="mt-5 text-4xl font-black uppercase tracking-tight sm:text-6xl">
            Let&apos;s build <span className="gradient-text">something</span>
          </p>
          <p className="mx-auto mt-5 max-w-xl text-lg text-foreground/60">
            Have a project, role, or idea in mind? My inbox is always open.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <a
            href={`mailto:${profile.email}`}
            className="clip-corner mt-9 inline-flex items-center gap-2 bg-gradient-to-r from-cyan to-magenta px-8 py-4 text-lg font-bold text-[#05060d] transition-transform hover:scale-105"
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
                className="text-foreground/50 transition-colors hover:text-cyan"
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
