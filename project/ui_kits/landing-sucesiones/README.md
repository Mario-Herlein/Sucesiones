# Landing Sucesiones · UI Kit

A click-thru recreation of the single-page Saucedo & Asociados landing
page targeted at paid traffic for *sucesiones* (inheritance proceedings).

## Files

- `index.html` — the full landing page wired together.
- `Header.jsx` — sticky top bar (logo + phone + CTA).
- `Hero.jsx` — headline, subhead, dual CTAs, hero placeholder image.
- `TrustBar.jsx` — credentials strip (años · sucesiones · jurisdicciones).
- `ProcessSteps.jsx` — 4-step "Cómo trabajamos" block with gold numerals.
- `ServicesGrid.jsx` — 3 service cards (sucesión simple / venta inmueble / conflicto).
- `LawyerBio.jsx` — portrait + bio + credentials block.
- `FAQ.jsx` — accordion (5 items, expand/collapse).
- `ContactForm.jsx` — form with validation states.
- `Footer.jsx` — navy footer with hours + offices + legal.
- `StickyWhatsApp.jsx` — bottom-right floating WhatsApp bubble.

## How it runs
React 18 + Babel inline. Each component is loaded as its own
`<script type="text/babel">` and exports onto `window` so the main
script can compose them.

## Interactions
- Header CTA scrolls to `#contacto` form.
- FAQ items expand/collapse on click.
- Form does live validation (required name + phone, email format).
  Submit → shows a thank-you confirmation.
- Sticky WhatsApp opens `wa.me/...` (placeholder number).
