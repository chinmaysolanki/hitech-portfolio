# Chinmay Solanki — Portfolio

A fast, modern, single-page developer portfolio built with **Next.js (App Router)** + **Tailwind CSS v4**, statically exported and deployed to **GitHub Pages**.

## Editing content

All text, links, projects, and skills live in **one file**:

```
lib/data.ts
```

Edit that file — no need to touch any components. Placeholders are marked with `// TODO`.

- **Photo:** drop an image at `public/avatar.jpg` and set `avatarUrl: '/avatar.jpg'` in `lib/data.ts`.
- **Resume:** drop a PDF at `public/resume.pdf` and set `resumeUrl: '/resume.pdf'`.

## Develop locally

```bash
npm install
npm run dev          # http://localhost:3000
```

## Build a static export

```bash
npm run build        # outputs static site to ./out
```

## Deploy to GitHub Pages

1. Create a GitHub repo and push this folder to the `main` branch.
2. In the repo: **Settings → Pages → Build and deployment → Source → GitHub Actions**.
3. Push to `main`. The workflow in `.github/workflows/deploy.yml` builds and deploys automatically.

The workflow auto-detects whether you're using a **project site**
(`https://<user>.github.io/<repo>`) or a **user site** (`https://<user>.github.io`)
and sets the base path accordingly — no manual config needed.

### Custom domain

Add a `CNAME` file in `public/` containing your domain (e.g. `chinmaysolanki.com`),
then configure the domain under **Settings → Pages**.
