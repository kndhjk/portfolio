# Ming Zhao — Portfolio

**Live site:** https://kndhjk.github.io/portfolio

Personal portfolio for Ming Zhao — MInfoTech student at the University of Auckland, NZ, specialising in AI-powered applications, full-stack web development, and polished desktop software.

---

## Project Structure

```
portfolio/
├── index.html        # Complete single-page portfolio (HTML + CSS, no build step)
├── favicon.svg       # Branded SVG favicon
├── 404.html          # Custom error page for GitHub Pages
├── LICENSE           # MIT License
└── .gitignore        # Standard ignores (OS files, editor configs, etc.)
```

---

## Quick Start

No dependencies, no build step.

```bash
# Open directly in browser
open index.html

# Or serve locally
python3 -m http.server 8000
# → http://localhost:8000
```

---

## Tech Stack

| Layer | Choice | Why |
|---|---|---|
| Structure | Plain HTML5 | Zero build overhead, maximum compatibility |
| Styling | CSS custom properties | Dark theme, responsive, no framework |
| Fonts | Google Fonts (Inter + JetBrains Mono) | Clean, professional, no web font CLS |
| Hosting | GitHub Pages + GitHub Actions | Free, fast, zero maintenance |

---

## Sections

- **Hero** — Name, title, one-liner pitch, CTAs
- **About** — Story + 3 highlighted achievements
- **Skills** — Four cards: Languages, Frameworks/UI, AI/ML, Infra/Tools
- **Projects** — 6 featured projects with tech stacks and GitHub links
- **Education** — MInfoTech (in progress) + Bachelor's
- **Job Search** — Open roles, work rights, timing, location
- **Contact** — 6 contact/social channels

---

## Deployment

Every push to `master` automatically triggers a GitHub Actions workflow that deploys to GitHub Pages. No manual steps required.

```bash
git push origin master
# → Deployment starts automatically
```

---

## Customisation Tips

- **Change accent colour**: Edit `--accent` in the `:root` CSS block
- **Update status badge**: Edit the `<div class="status">` in `<nav>`
- **Add a project**: Copy a `.project-card` block and update title, description, tags, and links
- **Open Graph image**: Replace `og-image.png` at the root (recommended: 1200×630px)
- **Domain**: Update `og:url` and `<link rel="canonical">` if switching to a custom domain

---

## License

MIT © 2026 Ming Zhao. Free to use as a reference or template.
