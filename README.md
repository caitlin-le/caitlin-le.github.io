# caitlin-le.github.io

Personal website for Caitlin Le — PhD candidate at Princeton's Faboratory.

Built with [Astro](https://astro.build) and deployed to GitHub Pages.

## Structure

```
src/
  assets/        # Images processed by Astro (headshot, etc.)
  content/
    papers/      # Research papers (JSON)
    recipes/     # Ice cream recipes (JSON)
  layouts/       # Base layout
  pages/         # Site pages (index, research, icecream, about)
  styles/        # Global CSS design system
public/
  assets/        # Static assets (photos, videos, thumbnails)
  cv.pdf         # CV served at /cv.pdf
.github/
  workflows/     # GitHub Actions deploy workflow
```

## Development

```bash
npm install
npm run dev       # localhost:4321
npm run build     # builds to dist/ and runs pagefind
```

## Deploy

Pushes to `main` automatically deploy via GitHub Actions to GitHub Pages.
