'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { profile, socials } from '@/lib/data';
import { SocialIcon, ArrowIcon } from './Icons';
import PhotoCard3D from './PhotoCard3D';

function useTypewriter(words: string[]) {
  const [text, setText] = useState('');
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const current = words[i % words.length];
    const done = !del && text === current;
    const cleared = del && text === '';

    const timeout = setTimeout(
      () => {
        if (done) {
          setDel(true);
          return;
        }
        if (cleared) {
          setDel(false);
          setI((v) => v + 1);
          return;
        }
        setText((prev) =>
          del ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1)
        );
      },
      done ? 1600 : del ? 40 : 75
    );

    return () => clearTimeout(timeout);
  }, [text, del, i, words]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter(profile.roles?.length ? profile.roles : [profile.role]);
  const [first, ...rest] = profile.name.split(' ');

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center px-6 pt-28 pb-16"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Left: text */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/5 px-4 py-1.5 font-mono text-xs tracking-widest text-cyan"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan" />
            </span>
            SYSTEM ONLINE · AVAILABLE FOR WORK · {profile.location.toUpperCase()}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl font-black uppercase leading-[0.95] tracking-tight sm:text-7xl"
          >
            <span className="glitch text-foreground" data-text={first}>
              {first}
            </span>
            <br />
            <span className="gradient-text">{rest.join(' ')}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 h-8 font-mono text-lg text-foreground/80 sm:text-2xl"
          >
            <span className="neon-cyan">&gt;</span> {typed}
            <span className="ml-0.5 inline-block w-2 animate-pulse bg-cyan align-middle">
              &nbsp;
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/60"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="clip-corner inline-flex items-center gap-2 bg-gradient-to-r from-cyan to-purple px-7 py-3 font-semibold uppercase tracking-wide text-[#05060d] transition-transform hover:scale-105"
            >
              View work <ArrowIcon className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="clip-corner border border-magenta/50 px-7 py-3 font-semibold uppercase tracking-wide text-magenta transition-colors hover:bg-magenta/10"
            >
              Get in touch
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-9 flex items-center gap-5"
          >
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="text-foreground/50 transition-colors hover:text-cyan"
              >
                <SocialIcon name={s.icon} className="h-5 w-5" />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right: 3D photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <PhotoCard3D />
        </motion.div>
      </div>

      {/* scroll cue */}
      <div className="absolute inset-x-0 bottom-6 flex justify-center">
        <span className="font-mono text-xs tracking-[0.3em] text-foreground/30">
          SCROLL ▼
        </span>
      </div>
    </section>
  );
}
