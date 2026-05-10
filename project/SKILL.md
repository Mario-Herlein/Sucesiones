---
name: saucedo-design
description: Use this skill to generate well-branded interfaces and assets for Saucedo & Asociados — a Buenos Aires law firm specialised in inheritance proceedings (sucesiones) — for the paid-traffic landing page or related marketing surfaces. Contains the brand's design tokens, type system, color rules, voice & tone in Spanish Rioplatense ("vos"), Lucide-based iconography rules, and a full landing-page UI kit with React components.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files. The system is single-surface — one paid-traffic Spanish landing page — so the visual rules and voice are tight: serious, warm, trustworthy, accessible. Navy + gold over warm off-white. Fraunces (display) + Inter (body). One primary CTA per visible screen. Lucide line icons only — no emoji.

Key files to reference before designing:
- `colors_and_type.css` — every token (color, type, spacing, radii, shadow, motion).
- `README.md` — brand context, content fundamentals (voice in vos), visual foundations, iconography.
- `preview/` — small specimen cards for every token / component.
- `ui_kits/landing-sucesiones/` — production-fidelity landing page with modular JSX components (Header, Hero, TrustBar, ProcessSteps, ServicesGrid, LawyerBio, FAQ, ContactForm, Footer, StickyWhatsApp). Lift these directly when building new screens.
- `assets/` — logo (`logo.svg`, `logo-light.svg`) and the WhatsApp glyph (`whatsapp.svg`). The logo is a placeholder — flag and ask before using on real production work.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc.), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some clarifying questions (audience, surface, page goal, whether the visual should match the existing landing or diverge), and act as an expert designer who outputs HTML artifacts or production code, depending on the need.

When writing copy, default to Spanish Rioplatense, second-person "vos". Short active sentences. No legal jargon without an immediate plain-language gloss. Numbers and timelines beat adjectives. Never emoji.
