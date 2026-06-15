/** @type {import('next').NextConfig} */

// For GitHub Pages:
//  - User/org site (https://<user>.github.io)        -> leave BASE_PATH empty
//  - Project site  (https://<user>.github.io/<repo>) -> set BASE_PATH="/<repo>"
// The deploy workflow sets BASE_PATH automatically for project sites.
const basePath = process.env.BASE_PATH || '';

const nextConfig = {
  output: 'export',
  // Pin the workspace root so a stray lockfile elsewhere isn't picked up.
  turbopack: {
    root: import.meta.dirname,
  },
  basePath,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
