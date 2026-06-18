// Prefix a public asset path with the GitHub Pages base path (if any),
// so /avatar.jpg works whether the site is served at the domain root or /<repo>/.
export function asset(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || '';
  if (!path) return path;
  if (/^https?:\/\//.test(path)) return path;
  return `${base}${path.startsWith('/') ? '' : '/'}${path}`;
}
