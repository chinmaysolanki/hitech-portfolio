import { marquee } from '@/lib/data';

export default function Marquee() {
  const items = [...marquee, ...marquee];
  return (
    <div className="relative border-y border-cyan/15 bg-[#070a14]/60 py-4">
      <div className="marquee-track">
        {items.map((m, i) => (
          <span
            key={i}
            className="mx-6 inline-flex items-center gap-6 text-2xl font-black uppercase tracking-tight text-foreground/70 sm:text-3xl"
          >
            {m}
            <span className="text-magenta">✦</span>
          </span>
        ))}
      </div>
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
    </div>
  );
}
