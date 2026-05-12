# AGENTS.md

Operational guide for coding agents working on the Saucedo & Asociados landing page.

## Project Overview

Saucedo & Asociados is a Spanish-language landing page for an Argentine law firm focused on succession cases (`sucesiones`).

The page is intended for paid Google Ads and Meta traffic. The conversion goals are consultation form submissions, phone calls, and WhatsApp contacts.

Current status: front end is implemented, PHP form backend exists, GTM is installed, and the site is configured for static Astro output plus FTP deployment to PHP shared hosting under `/sucesiones`.

## Critical Directories

| Path | Purpose |
|------|---------|
| `G:\My Drive\Varios\Maria\Web\Sucesiones\repo-clone\` | Active development directory and git repository. Use this as the default project directory. |
| `G:\My Drive\Varios\Maria\Web\Sucesiones\` | Project notes, source assets, and agent documentation. |

Legacy note: `C:\Dev\sucesiones\` was removed. Work from `repo-clone` unless the user explicitly creates a new external development copy.

## Commands

Run from `G:\My Drive\Varios\Maria\Web\Sucesiones\repo-clone\`:

```bash
npm run dev -- --port 4322
npm run build
npm run preview
```

The dev server should be available at `http://localhost:4322` when using the command above.

## Stack

- Astro 5 with `@astrojs/react`.
- React 18 + TypeScript for interactive islands.
- Static output. No SSR and no Node runtime on hosting.
- PHP shared hosting receives the built `dist/` files by FTP.

## Project Structure

```text
src/
  assets/
    Logo-sin-fondo.png
  components/
    Header.tsx
    Hero.tsx
    TrustBar.tsx
    PainPoints.tsx
    ServicesGrid.tsx
    ProcessSteps.tsx
    LawyerBio.tsx
    TransparentFees.tsx
    Testimonials.tsx
    FAQ.tsx
    FinalCTA.tsx
    Footer.tsx
    StickyWhatsApp.tsx
    StickyMobileCTA.tsx
  pages/
    index.astro
  styles/
    tokens.css
    global.css
    landing.css
public/
  assets/
    equipo.webp
  contact.php
```

## Page Composition

`src/pages/index.astro` is the single page and composes sections in this order:

| # | Component | Hydration | Purpose |
|---|-----------|-----------|---------|
| 1 | `Header` | `client:load` | Sticky navigation and mobile hamburger. |
| 2 | `Hero` | `client:load` | Main headline and contact form. The form wrapper has `id="consulta"`. |
| 3 | `TrustBar` | static | Trust signals. |
| 4 | `PainPoints` | static | Visitor situations and empathy cards. |
| 5 | `ServicesGrid` | static | Succession services. |
| 6 | `ProcessSteps` | static | Process explanation. |
| 7 | `LawyerBio` | static | Team photo and credentials. |
| 8 | `TransparentFees` | static | Fee transparency section. |
| 9 | `Testimonials` | static | Google review-style testimonials. |
| 10 | `FAQ` | `client:visible` | Accordion. |
| 11 | `FinalCTA` | static | Closing CTA and contact info. |
| 12 | `Footer` | static | Logo, nav, and contact. |
| 13 | `StickyWhatsApp` | static | Desktop WhatsApp floating button. |
| 14 | `StickyMobileCTA` | `client:idle` | Mobile bottom CTA after scroll. |

## Astro Notes

- `astro.config.mjs` sets `output: 'static'`, `site: 'https://saucedo-asociados.com.ar'`, and `base: '/sucesiones'`.
- The logo source is `src/assets/Logo-sin-fondo.png`.
- `index.astro` uses `getImage()` to generate a WebP logo and passes `logoSrc` to `Header` and `Footer`.
- `public/assets/equipo.webp` is copied as-is and is used for the lawyer/team image.
- `public/assets/og-sucesiones.jpg` is the dedicated Open Graph image, optimized to `1200x630`.

## CSS Architecture

| File | Role |
|------|------|
| `src/styles/tokens.css` | Brand tokens: color, type, spacing, radius, motion. |
| `src/styles/global.css` | Reset, base typography, buttons, fields, layout utilities. |
| `src/styles/landing.css` | Section-specific classes for the landing page. |

Preserve the current visual system unless the user explicitly asks for a redesign.

## Visual QA Notes

- After visual changes, verify desktop and mobile locally at `http://127.0.0.1:4322/sucesiones/`.
- Mobile hero/form overflow was previously observed in Chrome headless captures. Preserve the mobile safeguards in `global.css` and `landing.css`: hidden horizontal overflow, full-width form controls, block hero layout at `max-width: 640px`, and `calc(100vw - 32px)` constraints for hero CTAs/form elements.
- Known screenshot files from the latest review are stored in `G:\My Drive\Varios\Maria\Web\Sucesiones\` with names beginning `visual-review-`.

## Content Rules

- Write user-facing copy in Spanish Rioplatense.
- Use `vos`, never `usted` or `tu`.
- Tone: serious, warm, trustworthy, not corporate-cold.
- Prefer concrete numbers over vague claims.
- Do not use emoji in UI copy.
- Legal jargon must be explained in plain language in the same sentence.

## Contact And CTA Rules

Use these values consistently:

| Item | Value |
|------|-------|
| Phone | `+54 9 11 4166-4386` |
| Phone href | `tel:+5491141664386` |
| WhatsApp href | `https://wa.me/5491141664386` |
| Email | `info@saucedo-asociados.com.ar` |
| Address | `Av. Pte. Julio A. Roca 695 5°B, CABA` |

All non-WhatsApp CTAs must use the text `Consultar sin cargo` and link to `#consulta`.

WhatsApp CTAs should open in a new tab when they are normal page links. Use the prefilled succession query when possible.

Do not introduce alternate CTA labels such as `Iniciar mi consulta`, `Enviar consulta`, or `Consultar este caso` unless the user explicitly requests new CTA copy.

## Contact Form Backend

`public/contact.php` handles the hero form POST.

Current behavior:

- Honeypot field: if `website` is non-empty, return silent success.
- Consent field: `consentimiento` must be `1`.
- Sanitization uses `strip_tags` and `trim`.
- Email validation uses `filter_var`.
- Mail is sent through PHP `mail()` to `saucedoabogada@gmail.com` with `marioherlein@gmail.com` in CC.
- JSON response shape is `{ok: bool, error?: string}`.

## Tracking

- Google Tag Manager container: `GTM-M6MMHMWL`.
- Successful form submissions push `lead_form_submit` to `dataLayer` with `form_name: 'sucesiones_hero'`.

## Claims

- Do not use unverified claims such as `+15 años`, `+500 juicios` or visible professional matriculation labels unless the user explicitly confirms them.
- The verified trust claim is the Google 5-star reputation, linking to `https://maps.app.goo.gl/yBnCdwSroLb8HQqh7`.

Important: PHP `mail()` cannot be validated through the Astro dev server. Test the form only after building and uploading to the real PHP hosting environment.

## Deployment

Build from `G:\My Drive\Varios\Maria\Web\Sucesiones\repo-clone\`:

```bash
npm run build
```

Upload the full contents of `dist/` to the `/sucesiones` directory on the hosting server via FTP.

## Git And Sync Workflow

There may be a dirty worktree. Do not revert or overwrite unrelated user changes.

Recommended workflow:

1. Edit and test in `G:\My Drive\Varios\Maria\Web\Sucesiones\repo-clone\`.
2. Stage only the files relevant to the task unless the user explicitly asks to commit all changes.
3. Commit only when the user explicitly asks for a commit.

Never use destructive git commands unless the user explicitly approves them.

## Pending Work

- Test `public/contact.php` on real PHP hosting after FTP deploy.
- Test social preview cache after deploy and refresh WhatsApp/Facebook preview if needed.
- Add `@astrojs/sitemap` if sitemap generation is required. The production `site` is already set in Astro config.
- Add analytics or Google Tag Manager if requested.

## Reference Files

- `CLAUDE.md`: existing project guidance and historical context.
- `claude-design-prompt.md`: original design brief, if present.
- `G:\My Drive\Varios\Maria\Web\Sucesiones\assets\`: original source assets.
