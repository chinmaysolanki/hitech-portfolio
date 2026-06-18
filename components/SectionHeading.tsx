import Reveal from './Reveal';

export default function SectionHeading({
  index,
  kicker,
  title,
}: {
  index: string;
  kicker: string;
  title: string;
}) {
  return (
    <Reveal>
      <div className="flex items-center gap-4">
        <span className="font-mono text-sm text-magenta">{index}</span>
        <span className="font-mono text-sm uppercase tracking-[0.3em] text-cyan">
          {kicker}
        </span>
        <span className="h-px flex-1 bg-gradient-to-r from-cyan/40 to-transparent" />
      </div>
      <h2 className="mt-3 text-3xl font-black uppercase tracking-tight sm:text-5xl">
        {title}
      </h2>
    </Reveal>
  );
}
