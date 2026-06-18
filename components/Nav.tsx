'use client';

import { useEffect, useState } from 'react';
import { profile } from '@/lib/data';

const links = [
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const initials = profile.name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-cyan/15 bg-background/80 backdrop-blur-md'
          : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="clip-corner grid h-9 w-9 place-items-center bg-gradient-to-br from-cyan to-magenta text-sm font-black text-[#05060d]">
            {initials}
          </span>
          <span className="hidden font-mono text-sm uppercase tracking-widest sm:inline">
            {profile.name}
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-xs uppercase tracking-widest text-foreground/60 transition-colors hover:text-cyan"
            >
              {l.label}
            </a>
          ))}
          {profile.resumeUrl && (
            <a
              href={profile.resumeUrl}
              className="clip-corner border border-cyan/40 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-cyan transition-colors hover:bg-cyan/10"
            >
              Resume
            </a>
          )}
        </div>

        <button
          className="md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M18 6 6 18M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t border-cyan/15 bg-background/95 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-mono text-sm uppercase tracking-widest text-foreground/80 hover:text-cyan"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
