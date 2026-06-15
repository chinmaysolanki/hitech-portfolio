// ============================================================================
//  EDIT EVERYTHING HERE
//  This single file drives all the content on the portfolio site.
//  Anything marked TODO is a placeholder — replace it with real info.
// ============================================================================

export const profile = {
  name: 'Chinmay Solanki',
  // A short tag shown under the name in the hero (your title / role).
  role: 'Founder & Full-Stack Developer',
  // 1–2 punchy sentences for the hero section.
  tagline:
    'I build products end-to-end — from idea to shipped. Currently building HeatWise.',
  location: 'India', // TODO: city if you want
  email: 'shirssacksaha22@gmail.com', // TODO: confirm / change public email
  // Optional resume file. Drop a PDF at public/resume.pdf and set this to '/resume.pdf'.
  resumeUrl: '', // e.g. '/resume.pdf'
  // Optional avatar. Drop an image at public/avatar.jpg and set this to '/avatar.jpg'.
  avatarUrl: '', // e.g. '/avatar.jpg'
};

export const socials = [
  // Remove any you don't use. Add more as needed.
  { label: 'GitHub', href: 'https://github.com/' /* TODO */, icon: 'github' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/' /* TODO */, icon: 'linkedin' },
  { label: 'Email', href: 'mailto:shirssacksaha22@gmail.com', icon: 'mail' },
  { label: 'X', href: 'https://x.com/' /* TODO */, icon: 'x' },
];

// Short paragraphs for the About section.
export const about = [
  'I’m Chinmay Solanki, a developer who likes shipping real products. // TODO: rewrite this in your own voice.',
  'I founded HeatWise and have worked across full-stack web, mobile (Android/Capacitor), and DevSecOps tooling. // TODO',
];

// Each number renders as a stat chip in the About section. Keep it short, or set to [] to hide.
export const stats = [
  { value: '3+', label: 'Years coding' }, // TODO
  { value: '10+', label: 'Projects shipped' }, // TODO
  { value: '1', label: 'Startup founded' }, // TODO
];

// Group your skills however you like.
export const skillGroups = [
  {
    title: 'Languages',
    items: ['TypeScript', 'JavaScript', 'Java', 'Python', 'SQL'], // TODO
  },
  {
    title: 'Frameworks',
    items: ['Next.js', 'React', 'Node.js', 'Tailwind CSS', 'Capacitor'], // TODO
  },
  {
    title: 'Infra & Tools',
    items: ['Vercel', 'Neon Postgres', 'Git', 'Docker', 'CI/CD'], // TODO
  },
];

// Featured projects. Add/remove freely. `featured: true` gives it a bigger card.
export const projects = [
  {
    title: 'HeatWise',
    description:
      'A product I founded and ship end-to-end — web app + Android app + marketing site. // TODO: one-line of what it does.',
    tags: ['Next.js', 'Neon Postgres', 'Capacitor', 'Vercel'],
    link: 'https://heatwise.codes',
    repo: '', // optional GitHub URL
    featured: true,
  },
  {
    title: 'DevSecOps Portal',
    description:
      'A DevSecOps portal / dashboard. // TODO: describe what it does in one line.',
    tags: ['Security', 'Docker', 'CI/CD'],
    link: '',
    repo: 'https://github.com/pkainbe22-coder/DevSecOps',
    featured: false,
  },
  {
    title: 'Project Three', // TODO
    description: 'TODO: short description of another project.',
    tags: ['Tag', 'Tag'],
    link: '',
    repo: '',
    featured: false,
  },
];

// Optional. Set to [] to hide the Experience section entirely.
export const experience = [
  {
    role: 'Founder', // TODO
    org: 'HeatWise',
    period: '2025 — Present', // TODO
    description: 'Building HeatWise end-to-end. // TODO',
  },
  {
    role: 'Project Intern', // TODO
    org: 'TIET (Thapar Institute)',
    period: '2026', // TODO
    description: 'Project-semester work. // TODO',
  },
];

// Optional. Set to [] to hide.
export const education = [
  {
    school: 'Thapar Institute of Engineering & Technology', // TODO confirm
    degree: 'B.E. / B.Tech', // TODO
    period: '20XX — 20XX', // TODO
  },
];
