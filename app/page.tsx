import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import Services from '@/components/Services';
import About from '@/components/About';
import StatsBand from '@/components/StatsBand';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import { profile } from '@/lib/data';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <About />
        <StatsBand />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <footer className="border-t border-cyan/15 px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 font-mono text-xs uppercase tracking-widest text-foreground/40 sm:flex-row">
          <span>
            © {new Date().getFullYear()} {profile.name} · All systems operational
          </span>
          <span>Built with Next.js &amp; Tailwind</span>
        </div>
      </footer>
    </>
  );
}
