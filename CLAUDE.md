# CLAUDE.md — EigenSys website

Context and working rules for Claude Code in this repository.

## What this is

The marketing site for **EigenSys**, an AI, data and software engineering studio.
Single page, static, no backend. React 19 · Vite 8 · Tailwind CSS 4 · Motion · Lucide ·
self-hosted Geist fonts. `README.md` has the full architecture; this file covers the
repo's current state and how to work in it.

## Current state

- Branch `main`, three commits, working tree clean.
- 47 tracked files. `node_modules/` and `dist/` are ignored.
- Remote `origin` → `https://github.com/SamyakVaghela/anamnos-website-1.git`
  **This name is stale** — it predates the EigenSys rebrand. See the task below.
- Nothing has been pushed yet. The remote repository is empty.

---

## Task: push this to GitHub

Owner: `SamyakVaghela`. Do the rename first, then the push.

### 1. Fix the remote name

The GitHub repo is still called `anamnos-website-1`. Pick one:

**Option A — rename the existing repo (keeps it empty and ready):**

1. github.com/SamyakVaghela/anamnos-website-1 → Settings → rename to `eigensys-website`.
2. Then locally:

```bash
git remote set-url origin https://github.com/SamyakVaghela/eigensys-website.git
git remote -v    # confirm both lines show eigensys-website
```

**Option B — create a fresh repo** named `eigensys-website` at github.com/new
(no README, no .gitignore, no licence — it must be empty), then run the same
`git remote set-url` command above.

Do not delete `anamnos-website-1` unless Sam says so.

### 2. Push

```bash
git push -u origin main
```

Authentication: use whatever credentials this machine already has —
`gh auth login` if `gh` is installed, or the macOS keychain helper. **Do not** ask Sam
to paste a personal access token, and do not use any token that appears in chat history;
an earlier fine-grained token was created for this and should be treated as revoked.

### 3. Verify

```bash
git status                 # clean, "Your branch is up to date with 'origin/main'"
git log --oneline -3
gh repo view --web         # or open the URL and confirm 47 files and the README render
```

Report back: the repo URL, the branch, and the commit that is now on the remote.

### If the push is rejected

- `403 / permission denied` → the credential lacks write access to that repo. Re-auth with
  `gh auth login`; don't work around it with a token from chat.
- `non-fast-forward` / `fetch first` → the remote is not empty. Inspect it with
  `git ls-remote origin` and **ask Sam before** force-pushing or merging.
- `repository not found` → the rename in step 1 hasn't happened yet, or the URL is wrong.

---

## After the push (only if asked)

Deploy is Cloudflare Pages: connect the repo, framework preset **Vite**, build command
`npm run build`, output directory `dist`. Vercel also works, but its free Hobby plan
forbids commercial use, so an agency site needs Pro there. Details in `README.md`.

## Working rules for this repo

**Copy lives in `src/content/`, not in components.** `site.js` (name, email, domain,
availability, the eigen etymology), `work.js`, `services.js`, `engagements.js`, `faq.js`,
`approach.js`, `stack.js`, `capabilities.js`. If a text change can be made in `content/`,
make it there.

**Never hard-code a colour.** Everything comes from the tokens in `src/index.css`:

- `paper` `ink` `charcoal` `graphite` `ash` `mist` `fog` `line` `line-strong` — page roles,
  each redefined for dark mode.
- `band*` — the full-width contrast section (About). Near-black in light, raised charcoal
  in dark. This exists so dark mode is dark *everywhere*; do not reintroduce an inverted
  section.
- `void` / `chalk` — the two that never invert, for the terminal figure.
- Accent (clay orange) has four steps and picking the wrong one breaks contrast:
  `accent` graphics and marks · `accent-text` small text · `accent-btn` + `accent-btn-text`
  solid buttons.
- Inside SVG and canvas, read the tokens (`var(--color-ink)`, `getComputedStyle`) rather
  than literals — see `WorkVisuals.jsx` and `SystemField.jsx`.

**Theming.** `useTheme` keeps one module-level store; the resolved theme is stamped on
`<html>` by the inline script in `index.html` and on the app shell in `App.jsx`. Both are
needed — the shell is what keeps the palette correct when the page is embedded.

**Tailwind class-order trap.** A plain utility in a component's base string can beat a
responsive one passed in via `className` (`hidden sm:inline-flex` lost to `inline-flex`
and put the nav CTA on phones). Prefer a media-query variant like `max-sm:hidden`.

**Formatting.** Prettier, no semicolons, single quotes, print width 120:

```bash
npx prettier --no-semi --single-quote --print-width 120 --write "src/**/*.{js,jsx}"
```

**Before committing UI changes**, run `npm run build` and check the page at both
`prefers-color-scheme` settings and at 390px width. There are no tests.

**Honesty rules that are part of the design.** Case studies in `work.js` carry a `kind`
label — Product, Open source, R&D or Concept — and the Concept ones are not shipped work.
Sample data inside the figures is captioned as illustrative. Don't quietly upgrade a
label, invent metrics, or drop the captions.

**Placeholder still in the code:** the domain `eigensys.dev` (in `site.js`, `index.html`,
`robots.txt`, `sitemap.xml`). The pre-launch checklist is at the bottom of `README.md`.

**Contact is a form, not a mailto.** All CTAs (`Start a Project`, `Start a Conversation`,
footer, FAQ, Engagements) link to `#contact`, which renders an inline form (`CTA.jsx`)
that posts to Web3Forms — no backend needed. The access key lives in
`site.web3formsAccessKey`; it's meant to be public (it just identifies where submissions
get delivered), not a secret to hide. Don't reintroduce a `mailto:` link.

## Commit style

Imperative subject under ~60 chars, a blank line, then bullets explaining *why* where it
isn't obvious. Example from this repo:

```
Rebrand to EigenSys: black and orange, true dark mode

- Dark mode reworked: band* tokens replace the inverted section, so the
  dark theme is dark on every section instead of flipping one band white
- Accent split into graphic / text / button steps to keep contrast above 4.5:1
```
