# EigenSys — website

A single-page site for EigenSys, an AI, data and software engineering studio.
It's a static React build with no backend, so it hosts free on Cloudflare Pages or Vercel.

**Stack:** React 19 · Vite 8 · Tailwind CSS 4 · Motion (Framer Motion) · Lucide icons · self-hosted Geist fonts.

> **The name.** *eigen* is German for "own" or "characteristic". An **eigenvector** is the one direction a
> transformation leaves pointing the same way — everything else rotates around it. That is the work:
> find the few characteristic directions in a business and build the system along them. The mark draws
> exactly that: a grey vector knocked off its line, and an orange one that holds.

---

## Run it locally

Requires **Node.js 20.19+** (or 22.12+). Check with `node -v`.

```bash
npm install
npm run dev        # http://localhost:5173
```

```bash
npm run build      # production build into dist/
npm run preview    # serve the production build locally
```

## Deploy

The build output is a folder of static files. Build command `npm run build`, output directory `dist`.

**Cloudflare Pages (free, and its terms don't restrict commercial use):**

1. Push this repository to GitHub.
2. Cloudflare dashboard → **Workers & Pages → Create → Pages → Connect to Git**.
3. Framework preset **Vite**, build command `npm run build`, output directory `dist`.
4. Deploy. Every push to `main` rebuilds.

**Vercel:** import the repo at vercel.com → Add New → Project; the Vite defaults are correct.
Note that Vercel's free Hobby plan is for non-commercial personal use only — an agency site needs Pro.
`vercel.json` in this repo sets long-cache headers for hashed assets; Cloudflare handles that itself.

**Custom domain:** add it in your host's dashboard and follow the DNS instructions, then update the
domain in the places listed below.

---

## Project structure

```text
eigensys-website/
├── index.html                 SEO meta, Open Graph, JSON-LD, no-flash theme script
├── vite.config.js
├── vercel.json
├── package.json
├── public/
│   ├── favicon.svg
│   ├── og-image.png           1200×630 social preview
│   ├── robots.txt
│   └── sitemap.xml
└── src/
    ├── main.jsx               entry; loads fonts + CSS
    ├── App.jsx                section order, MotionConfig (reduced motion)
    ├── index.css              Tailwind v4 @theme tokens, light + dark palettes, base styles
    ├── content/               ← edit copy here, not in components
    │   ├── site.js            email, domain, availability, nav, the name's etymology
    │   ├── capabilities.js    marquee items + "What we build" cards
    │   ├── services.js        16 services with summaries and outputs
    │   ├── work.js            case studies + index (Product/Open source/R&D/Concept labels)
    │   ├── stack.js           technology wall
    │   ├── approach.js        process steps + "Why EigenSys" principles
    │   ├── engagements.js     the three ways to work together
    │   └── faq.js             eight questions and answers
    ├── hooks/
    │   ├── useScrolled.js
    │   ├── useActiveSection.js
    │   ├── useClock.js
    │   └── useTheme.js        light/dark, follows the OS until the visitor chooses
    └── components/
        ├── Navbar.jsx         sticky, blur on scroll, active-section underline, theme toggle, mobile menu
        ├── Hero.jsx           word-by-word headline reveal
        ├── SystemField.jsx    canvas signal-path visualization (theme-aware, pauses off-screen)
        ├── Capabilities.jsx   slow marquee
        ├── WhatWeBuild.jsx    four practice cards with cursor spotlight
        ├── Services.jsx       interactive rows + live detail panel (accordion on mobile)
        ├── Work.jsx           featured case studies + filterable index
        ├── WorkVisuals.jsx    code-drawn figures: citations, terminal, state graph, CAD
        ├── Technologies.jsx   tech wall, shows which builds use each tool
        ├── Approach.jsx       scroll-linked timeline
        ├── Engagements.jsx    discovery / build / retainer
        ├── About.jsx          "Why EigenSys", the name, live world-time meridian
        ├── FAQ.jsx            accordion
        ├── CTA.jsx            contact block with copy-email
        ├── Footer.jsx
        └── ui/                ArrowButton, Reveal, SectionHeader, KindTag, Logo, ThemeToggle
```

`Technologies.jsx` builds the "In N builds" line from the `stack` arrays in `content/work.js`, so the two stay in sync.

## Theming

`src/index.css` defines one set of role-named tokens (`paper`, `ink`, `mist`, `graphite`, `line`, …)
and redefines their values for dark mode, so both themes are the same design with swapped values.

- The default follows the operating system. The inline script in `index.html` applies it before first
  paint, and `App.jsx` also stamps the resolved theme on the app shell, so the palette holds even when
  the page is embedded somewhere that owns the `<html>` attributes.
- The toggle in the nav pins a choice in `localStorage` for that browser. `useTheme` keeps one
  module-level store, so every component reading the theme agrees.
- **The `band*` tokens** are the full-width contrast section (About). Near-black on the light theme, a
  raised charcoal on the dark theme — dark mode is dark everywhere rather than flipping one band to
  white.
- `void` and `chalk` never invert — used by the terminal figure, which should stay a terminal in both
  themes.
- The accent is one clay orange with four steps: `accent` for graphics and marks, `accent-text` for
  small text (contrast-safe on both grounds), and `accent-btn` / `accent-btn-text` for solid buttons.
  It carries the primary buttons, the `SYS` in the wordmark, the hero's second line, section numbers,
  selected chips, the process timeline, citation markers, the RAG diagram's correction loops and the
  CAD figure's changed dimension. Change those values and the whole site re-tints.

## Replace before launch

| What | Where |
| --- | --- |
| Contact email `hello@eigensys.dev` | `src/content/site.js` (also JSON-LD in `index.html`) |
| Domain `eigensys.dev` | `src/content/site.js`, `index.html` (canonical, og:url, og:image, JSON-LD), `public/robots.txt`, `public/sitemap.xml` |
| Availability line and response-time promise | `src/content/site.js`. Keep them true. |
| Engagement lengths and pricing wording | `src/content/engagements.js` — currently "fixed price", no numbers |
| FAQ answers, especially IP, data handling and support | `src/content/faq.js` |
| Typical timelines per stage ("Week 1–2"…) | `src/content/approach.js` |
| Case-study wording, facts and labels | `src/content/work.js` |
| Sample data inside figures (names in the TalentLens mock, ctxray sample numbers, tower dimensions) | `src/components/WorkVisuals.jsx`, captioned as illustrative or sample on the page |
| Social preview image | `public/og-image.png` (1200×630) |

There are no social links on the site by design. To add them later, put them in `site.js` and render
them in `Footer.jsx`.

## Accessibility and motion

- Semantic landmarks, one `h1`, ordered `h2`/`h3`, and a skip link.
- Every control is a real `<a>` or `<button>` with a visible focus ring in the accent colour.
- `prefers-reduced-motion` is respected: Motion is set to `reducedMotion="user"`, CSS animations are
  disabled, and the hero canvas renders a single still frame.
- Text colours meet WCAG AA contrast in both themes.

## Ideas for the next iteration

1. Case-study pages (`/work/talentlens`…) with architecture diagrams, real screenshots and links to repos or demos.
2. A project brief form in place of `mailto:` — Formspree, Web3Forms or a Cloudflare Worker.
3. A real evaluation number for Corrective RAG once the full 32-question run finishes. A measured figure beats any adjective.
4. A founders block with names, photos and roles — the biggest remaining trust gap for a small studio.
5. Publish the production RAG and AI-reliability material as articles for SEO.
6. Analytics and a Lighthouse pass. Loading Motion through `LazyMotion` would shrink the JavaScript bundle.
