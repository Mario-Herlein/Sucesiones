# Saucedo & Asociados — Landing Sucesiones · Design System

A focused design system for a single, paid-traffic landing page targeting
people in difficult life moments — recently bereaved, dealing with an
inherited property, or in the middle of a dispute between heirs.

The visual identity is **deliberately distinct** from the firm's main
website. It exists to convert paid traffic from Google Ads & Meta into
qualified consultations, and so it leans warmer, more human, and more
direct than a typical corporate-law brand.

> **One product, one surface.** This system covers a single Spanish-
> language landing page (desktop + mobile) and the components needed
> to build it. There is no app, no dashboard, no docs site.

---

## Sources

No codebase or Figma was attached for this brief. The system was built
directly from the written specification supplied by the client team
("Design System Setup — Claude Design · Saucedo & Asociados · Landing
Sucesiones"). Re-attach a codebase or Figma file if pixel-precise
recreation of an existing surface is needed.

Fonts: **Fraunces** and **Inter**, both loaded from Google Fonts.
Icons: **Lucide** (line/outline, 1.5px stroke), loaded from CDN.

---

## Brand context

**Who:** Saucedo & Asociados — a law firm in Argentina (CABA + Buenos
Aires Province) specialised in *sucesiones* (probate / inheritance
proceedings).

**Audience:** people who have recently lost a family member, need to
sell an inherited property, or are caught in a dispute between heirs.
This is not a curious browsing audience — they arrive anxious, often
overwhelmed, with a concrete problem and a budget concern.

**Goal of the surface:** turn paid traffic into a phone call, a
WhatsApp message, or a contact-form submission. Every screen pushes
the visitor toward a single primary action.

**Tone:** serious, warm, trustworthy, accessible. Not corporate-cold,
not a tech startup. The firm wants to feel like a *premium law firm
that actually listens* — credentialed enough to be trusted with a
family estate, human enough to take the call on a Saturday morning.

---

## Content fundamentals

**Language.** Spanish Rioplatense, **second-person "vos"** — never
*usted*, never *tú*. This anchors the brand in Buenos Aires and
signals warmth over formality. *"Te ayudamos a iniciar la sucesión."*
*"¿Heredaste un inmueble y no sabés cómo seguir?"*

**Sentence shape.** Short. Active. Present tense. A paragraph rarely
runs more than three sentences. Headlines are statements, not slogans.

**Plain-language always.** Legal jargon is allowed only when the next
clause explains it: *"declaratoria de herederos (la sentencia que te
reconoce como heredero)"*. If a term cannot be explained in one
parenthetical, it does not belong on the page.

**Specific over vague.** Numbers and timelines beat adjectives. *"En
la mayoría de los casos, la sucesión termina en 6 a 12 meses"* is the
voice. *"Rápida y eficiente"* is not.

**Warm but direct.** Acknowledge the moment without performing
sympathy. *"Sabemos que no es un trámite más"* is the floor;
*"Acompañamos a tu familia en este momento difícil con calidez y
profesionalismo"* is over the line.

**Voice examples.**

| ✅ Use | ❌ Avoid |
|---|---|
| Iniciamos la sucesión y te avisamos en cada paso. | Brindamos un servicio integral de excelencia. |
| Hablá hoy con un abogado, sin compromiso. | Consulte con uno de nuestros especialistas. |
| Si hay desacuerdo entre herederos, mediamos antes de ir a juicio. | Ofrecemos soluciones jurídicas a medida. |
| Costo claro desde la primera reunión. | Honorarios competitivos. |

**No emoji.** Not in headlines, not in body, not as bullets. The brand
uses gold rules and Lucide icons in their place.

**Casing.** Sentence case for headings and body. **All-caps only** for
the eyebrow label and button text — both come with letter-spacing.

---

## Visual foundations

**Palette.** Two anchors — deep navy (`#0A2540`) and gold
(`#C8A24A`) — over a warm off-white page (`#FAFAF7`). Navy carries
authority; gold is reserved for accents (decorative rules, step
numerals, **one** primary CTA per visible screen). The pale gold
(`#E8D9B0`) is used as a subtle band to differentiate sections, never
as a large flat fill. WhatsApp green (`#25D366`) is allowed *only* on
the WhatsApp button.

**Typography.** A two-family system: **Fraunces** (serif, 500/600) for
headlines and numerals — it carries the firm's craft and gravitas —
paired with **Inter** (sans, 400/500/600) for body, labels, and UI.
Fraunces is set tight (-0.01em on H1) and Inter is set normal. The
eyebrow and button labels use uppercase + 0.08–0.10em tracking to
read as small architectural elements rather than copy.

**Backgrounds.** Mostly flat. The page background is warm off-white;
emphasis bands invert to navy. No gradients, no photo-as-background,
no repeating patterns or textures. When a section needs to stand
apart, it shifts to the pale-gold band or the navy band — never to a
gradient.

**Imagery.** Real photography, warm and editorial — natural light,
muted tones, never stock-corporate. People (lawyers, families,
documents on a table) photographed in a documentary register.
Black-and-white is acceptable for the lawyer portrait. **No
illustrations, no isometric scenes, no 3D renders.** When imagery is
not yet available, leave a tasteful placeholder rather than guess.

**Layout.** A 12-column, 1200px-max grid with 24px gutters (16px on
mobile). Sections sit on 80px vertical padding (48px mobile). Generous
whitespace is part of the brand — the page should feel uncrowded
even when it carries a lot of information.

**Corner radii.** Three values only — 8px (inputs), 12px (cards), and
50px (pill buttons). The pill is the firm's signature button shape and
must not be flattened to a smaller radius.

**Borders.** 1px solid `--border` (#E8E2D5) — a warm bone tone, not
neutral grey. Used for inputs, accordion dividers, and the soft
boundaries around card content. Never use a 1px navy or black hairline.

**Shadows.** Soft and navy-tinted, never grey/black. The default card
shadow is `0 2px 8px rgba(10,37,64,0.06)`; on hover it lifts to
`0 8px 24px rgba(10,37,64,0.10)`. Reserve the deep variant
(`0 12px 40px rgba(10,37,64,0.16)`) for floating elements like the
sticky WhatsApp bubble.

**Decorative gold rule.** A 2px × 48px gold bar (`hr.rule-gold`)
appears above most H2s as a section anchor. It replaces the role
that an icon or emoji would play in a more casual brand.

**Hover states.** Buttons darken by ~8% (gold→bronze, navy→navy-soft);
secondary outline buttons fill solid navy with white text. Cards
lift via shadow change only — no scale, no translate. Links shift
from `--navy-deep` to `--navy-soft`. Press states drop opacity to
0.85; **no shrinking** of buttons on press.

**Animation.** Restrained. 140–220ms transitions on color, background,
shadow, and border. Easing is a single curve: `cubic-bezier(0.2, 0.6,
0.2, 1)`. No bounces, no springs, no scroll-triggered reveals beyond a
single subtle fade-up if used at all. The brand should never feel
"web-app-y."

**Transparency / blur.** Almost none. The only acceptable use is a
sticky header that picks up a faint white-translucent fill once the
page scrolls. No glassmorphism, no backdrop-blur on cards.

**Iconography vibe.** Line-only, 1.5px stroke, navy or gold depending
on context. See the dedicated section below.

**Layout fixed elements.** Two: a top header (logo left, phone +
primary CTA right) and a sticky WhatsApp button bottom-right on
mobile. No floating chat widget, no cookie banner styled as a card.

---

## Iconography

**System:** [Lucide](https://lucide.dev) — line / outline icons,
1.5px stroke. Loaded from the Lucide CDN bundle so the icon set is
versioned and tree-shaken on use.

```html
<script src="https://unpkg.com/lucide@latest"></script>
<i data-lucide="scale"></i>
<i data-lucide="message-circle"></i>
<i data-lucide="phone"></i>
<script>lucide.createIcons();</script>
```

**Color rules.** Icons inherit color via `currentColor`. On light
sections they sit in `--navy-deep`; on navy sections they invert to
white; in step numerals and decorative accents they take `--gold`.
Stroke width is fixed at 1.5px — never increased to "make it pop."

**Sizing.** 20px (inline UI), 24px (default), 32px (feature blocks),
48px (hero/process step). Do not stretch.

**What we do not use.**

- ❌ Filled icon styles (Heroicons solid, FontAwesome solid, etc.)
- ❌ Coloured / flat / 3D icon packs
- ❌ Emoji as icons (this brand never ships emoji)
- ❌ Unicode symbols as icons (★, ✓, →) — use the Lucide equivalent
- ❌ Hand-drawn illustrations

**WhatsApp logo.** The WhatsApp button uses the official WhatsApp
glyph (white on `--whatsapp` green) — this is the *one* exception
to the line-icon rule, because it must read as the WhatsApp brand.
See `assets/whatsapp.svg`.

---

## File index

```
README.md                  ← you are here
SKILL.md                   ← agent skill manifest
colors_and_type.css        ← all design tokens + base element styles

assets/
  logo.svg                 ← Saucedo & Asociados wordmark
  logo-light.svg           ← inverted variant for navy sections
  whatsapp.svg             ← official WhatsApp glyph (button-only)

preview/                   ← Design System tab cards
  colors-primary.html
  colors-neutrals.html
  colors-semantic.html
  type-display.html
  type-body.html
  type-scale.html
  spacing.html
  radii.html
  shadows.html
  buttons.html
  whatsapp-button.html
  form-input.html
  card.html
  accordion.html
  eyebrow-rule.html

ui_kits/
  landing-sucesiones/
    README.md
    index.html             ← full landing page click-thru
    Icon.jsx
    Header.jsx
    Hero.jsx                 ← copy + CTAs + in-hero contact form
    TrustBar.jsx
    PainPoints.jsx           ← "¿Estás pasando por alguna de estas situaciones?"
    ServicesGrid.jsx         ← 5 service cards
    ProcessSteps.jsx         ← 5-step navy timeline w/ time estimates
    TransparentFees.jsx      ← honorarios — gold-soft band
    LawyerBio.jsx            ← Dra. María Saucedo
    Testimonials.jsx         ← 4 Google-style testimonial cards
    FAQ.jsx                  ← 8 accordion items, full answers
    FinalCTA.jsx             ← navy band, contact info
    Footer.jsx
    StickyWhatsApp.jsx       ← floating WhatsApp bubble
    StickyMobileCTA.jsx      ← bottom bar, mobile only, post-hero
```

---

## Caveats

- **No assets were provided.** The logo is a typographic placeholder
  built from Fraunces; replace `assets/logo.svg` with the real wordmark
  before shipping.
- **No reference photography was provided.** The landing page uses
  tasteful neutral placeholders for the hero and lawyer-bio images.
- **Fonts are best-guess.** Fraunces + Inter were chosen to match the
  spec exactly and are free / Google-served; if the real brand uses a
  paid serif (e.g. Tiempos), swap it in via `--font-display`.
