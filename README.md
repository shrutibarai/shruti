# Shruti Barai — Portfolio (React + Vite + Framer Motion)

## Run it locally

```bash
npm install
npm run dev
```

Opens at http://localhost:5173

## Before deploying

Open `vite.config.js` and set `REPO_NAME` to match your actual GitHub repository name
(e.g. if your repo is `github.com/shrutibarai/portfolio`, set it to `'portfolio'`).
If you're deploying to a **user site** repo named exactly `shrutibarai.github.io`, set
`base: '/'` instead.

## Deploy to GitHub Pages

**Option A — GitHub Actions (recommended, already set up):**

1. Push this project to a GitHub repo.
2. In the repo, go to **Settings → Pages** and set "Source" to **GitHub Actions**.
3. Push to `main` — `.github/workflows/deploy.yml` will build and publish automatically.
   Your site will be live at `https://<username>.github.io/<repo-name>/`.

**Option B — manual, with the `gh-pages` package:**

```bash
npm run build
npm run deploy
```

This pushes the `dist/` folder to a `gh-pages` branch. Then in **Settings → Pages**,
set "Source" to the `gh-pages` branch.

## Editing content

All resume-derived content (name, summary, skills, experience, projects, education,
contact info) lives in `src/data.js` — edit it there without touching any component.

## Hero illustration

`public/hero-illustration.jpg` is the illustrated portrait, recolored to match the
site's dark blue/emerald/amber theme, shown in `src/components/Hero.jsx` inside the
`.illustration-card` frame. To swap in a different image (e.g. a real photo), replace
that file (keep the same filename, or update the `src` in `Hero.jsx`) — the glowing
gradient border and floating animation will apply automatically.

## Project structure

```
src/
  components/   UI sections (Hero, About, Skills, Experience, Projects, Contact, ...)
  hooks/        useTypewriter (hero tagline), useParallax (scroll-linked drift)
  data.js       all site content
  index.css     design tokens + all styling
```
