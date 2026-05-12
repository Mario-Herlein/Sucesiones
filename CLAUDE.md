# CLAUDE.md

This file provides guidance to Claude Code when working on the Saucedo & Asociados project.

## Project Overview

Landing page for **Saucedo & Asociados**, an Argentine law firm specializing in successions (sucesiones).
Target: paid Google Ads and Meta traffic.
Goal: convert visitors into consultations via contact form, phone, or WhatsApp.

**Status:** Front-end complete. PHP backend complete. GTM installed. Legal pages added. Ready for FTP deployment and real-server testing.

**Production URL:** `https://saucedo-asociados.com.ar/sucesiones/`

## Working Directories

| Path | Purpose |
|------|---------|
| `C:\Dev\sucesiones\` | Active development — run ALL npm commands here |
| `G:\My Drive\Varios\Maria\Web\Sucesiones\repo-clone\` | Git mirror — sync here before committing |

**Critical:** Google Drive blocks npm file locking. Never run `npm install` or `npm run` from the Google Drive path. Always work in `C:\Dev\sucesiones\` and copy changed files to `repo-clone\` before committing.

## Running the Project

```bash
cd C:\Dev\sucesiones
npm run dev -- --port 4322   # dev server → http://localhost:4322
npm run build                 # production build → dist/
```

## Architecture

### Stack

- **Astro 5** with `@astrojs/react` integration
- **React 18 + TypeScript** (`.tsx` components as Astro islands)
- **Output:** `static` — flat HTML/CSS/JS for FTP upload to PHP shared hosting
- **No SSR** on the hosting server
- `astro.config.mjs`: `site: 'https://saucedo-asociados.com.ar'`, `base: '/sucesiones'`

### Project Structure

```
src/
  assets/
    Logo-sin-fondo.png     ← source PNG (2.36 MB) → Astro generates 11 KB WebP at build
  components/              ← React TSX components (one per section)
  pages/
    index.astro            ← single page, composes all components, runs getImage()
    aviso-legal.astro      ← legal notice page
    politica-privacidad.astro ← privacy policy page
  styles/
    tokens.css             ← CSS custom properties (colors, type, spacing, motion)
    global.css             ← reset, typography, .btn, .field, shared utilities
    landing.css            ← component-scoped classes, one block per section
public/
  assets/
    equipo.webp            ← team photo (LawyerBio section)
    og-sucesiones.jpg      ← OG image 1200×630 for social sharing
  contact.php              ← form handler
```

### Section Order & Component Map

| # | Component | Client directive | Role |
|---|-----------|-----------------|------|
| 1 | `Header` | `client:load` | Sticky nav + hamburger (needs immediate JS) |
| 2 | `Hero` | `client:load` | Headline left + contact form right; form has `id="consulta"` |
| 3 | `TrustBar` | static | 4 trust signals: +15 años, +500 casos, CPACF, 5★ Google |
| 4 | `PainPoints` | static | 4 empathy cards identifying visitor situations |
| 5 | `ServicesGrid` | static | 5 service cards |
| 6 | `ProcessSteps` | static | 5-step process on navy background |
| 7 | `LawyerBio` | static | Team photo + CPACF/CASI/UBA credentials |
| 8 | `TransparentFees` | static | 3 fee transparency cards + CTA |
| 9 | `Testimonials` | static | 4 real Google reviews |
| 10 | `FAQ` | `client:visible` | 8-item accordion — hydrates only when scrolled into view |
| 11 | `FinalCTA` | static | Navy closing section with CTA + contact info |
| 12 | `Footer` | static | Logo + nav + contact + legal links |
| 13 | `StickyWhatsApp` | static | WA bubble bottom-right — hidden on mobile (≤800px) |
| 14 | `StickyMobileCTA` | `client:idle` | Bottom bar mobile-only — appears after 600px scroll |

### Logo: how it works

`src/assets/Logo-sin-fondo.png` (source, 2.36 MB) is processed by Astro at build time via `getImage()` in `index.astro` → outputs a WebP at 220px wide, quality 85 → **11 KB**.
The resulting URL is passed as `logoSrc` prop to `Header` and `Footer`.

### CSS Architecture

| File | Scope |
|------|-------|
| `tokens.css` | Design tokens — single source of truth for brand values |
| `global.css` | Reset, base typography, `.btn` variants, `.field` form styles, `.section`, `.container` |
| `landing.css` | Component classes (`.hdr`, `.hero`, `.trust`, `.svc`, `.bio`, `.ft`, etc.) |

Mobile breakpoints: `640px` reduces tokens (font sizes, gutter, section-py). Component layouts shift between `540px`–`900px`.

## Design Tokens (key values)

```css
--navy-deep:  #0A2540   /* primary brand dark */
--gold:       #C8A24A   /* accent, CTAs, decorative rules */
--off-white:  #FAFAF7   /* page background */
--whatsapp:   #25D366

--font-display: 'Fraunces', Georgia, serif   /* headings, 500/600 weight */
--font-body:    'Inter', sans-serif

--radius-md:   12px
--radius-pill: 50px
--section-py:  80px   /* 48px at ≤640px via token override */
--gutter:      24px   /* 16px at ≤640px */
```

## Content & Voice Rules

- **Language:** Spanish Rioplatense — **"vos"** always, never "usted" or "tú"
- **Tone:** Serious, warm, trustworthy. Not corporate-cold.
- **Numbers beat adjectives:** "6 a 12 meses" not "proceso ágil"
- **No emoji.** Use Lucide icons (`Icon` component) and gold `<hr className="rule-gold">` instead.
- **Legal jargon** must be followed by a plain-language explanation in the same sentence.
- **Phone:** `+54 9 11 4166-4386` (hardcoded in Header, Hero, Footer, FinalCTA)
- **Email:** `info@saucedo-asociados.com.ar`
- **Address:** Av. Pte. Julio A. Roca 695 5°B, CABA

## CTAs — Unified Text Rule

All non-WhatsApp CTAs: text **"Consultar sin cargo"**, href `#consulta` (the hero form div).
WhatsApp CTAs: href `https://wa.me/5491141664386`, open in new tab.
Never use "Iniciar mi consulta", "Enviar consulta", "Consultar este caso" or similar variations.

## Contact Form — PHP Backend

`public/contact.php` handles Hero form POST:
- Honeypot: silent success if `$_POST['website']` non-empty
- Sanitizes with `strip_tags` + `trim` + header injection protection (`clean_header`)
- Validates nombre, teléfono, email (`FILTER_VALIDATE_EMAIL`), consentimiento (`=== '1'`)
- Whitelists `situacion` values
- Sends via PHP `mail()`:
  - **From:** `info@saucedo-asociados.com.ar`
  - **To:** `saucedoabogada@gmail.com`
  - **CC:** `marioherlein@gmail.com`
  - **Reply-To:** the visitor's email
- Returns JSON `{ok: bool, error?: string}` with HTTP status codes

**Testing:** PHP `mail()` requires a real PHP server. Cannot test with Astro dev server. Build + FTP deploy, then test on hosting.

## Tracking

- **Google Tag Manager:** `GTM-M6MMHMWL` (installed in `<head>` and `<body>`)
- Successful form submit pushes `lead_form_submit` to `dataLayer` with `form_name: 'sucesiones_hero'`

## Git Workflow

```bash
# 1. Edit files in C:\Dev\sucesiones\src\ (or public\, astro.config.mjs, etc.)
# 2. Test with npm run dev -- --port 4322
# 3. Copy changed files to repo-clone\ (PowerShell Copy-Item -Force)
# 4. From repo-clone directory:
git add <specific files>
git commit -m "descriptive message"
git push
```

Remote: `github.com/Mario-Herlein/Sucesiones` (branch: main)

## Deployment

PHP shared hosting via FTP. No Node.js on server. Site lives at `/sucesiones/` subfolder.

```bash
cd C:\Dev\sucesiones
npm run build
# Upload entire dist/ contents to /sucesiones/ folder on hosting via FTP
```

## Pending Work

- [ ] **Test form on hosting** — upload `dist/` via FTP, submit a real test form
- [ ] **Sitemap** — add `@astrojs/sitemap` if required (domain confirmed: `saucedo-asociados.com.ar`)
- [ ] **Validate social preview** — check OG image renders correctly in WhatsApp/Facebook after deploy

## Installed Skills

| Skill | Invoke | Use for |
|-------|--------|---------|
| `astro` | `/astro` | Astro config, adapters, image optimization, SSG, build |
| `landing-page-design` | `/landing-page-design` | Conversion optimization, CTA, mobile UX, section order |
| `find-skills` | `/find-skills` | Search and install new skills |

## Reference Files

| File | Purpose |
|------|---------|
| `claude-design-prompt.md` | Original design brief with full section copy specs |
| `G:\My Drive\Varios\Maria\Web\Sucesiones\assets\` | Original source assets |
