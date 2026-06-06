
# TWYN Events Agency — Website Plan

A single-page, scroll-driven site with a **playful & expressive** tone — pastel lilac + lime from the logo, oversized warm serif headlines, squiggle/star accents from the deck, and real event photos extracted from the PDF doing the visual storytelling.

## Brand direction

- **Palette** (tokens in `src/styles.css`, all oklch):
  - `--background`: warm cream `oklch(0.98 0.015 95)`
  - `--foreground` / aubergine ink: `oklch(0.25 0.06 310)`
  - `--primary` lilac: `oklch(0.78 0.09 305)` (from logo)
  - `--accent` lime: `oklch(0.94 0.13 115)` (from logo)
  - Sticker-style chips alternating lilac/lime fills
- **Type**: Fraunces (display serif, soft/wonky) + DM Sans (body) via Google Fonts
- **Motif**: hand-drawn squiggle SVGs and small star icons (matching the deck's decorative elements), sticker-pill chips, slight rotation on cards for playful feel
- **Motion**: gentle fade/slide-up on scroll, marquee strip of past clients, subtle hover lift + rotate on case-study cards

## Page structure (single route `/`, anchor-based nav)

1. **Sticky nav** — TWYN logo left, anchor links (Work · Services · About · Contact), "Let's talk" CTA right
2. **Hero** — oversized serif "From Concept to Experience.", playful lilac squiggle underline, tagline "Events Production Agency · Lisbon", scroll cue. Logo as floating sticker.
3. **Manifesto** — "Tell us what you need." big quote + 4 sticker chips: Simple communication · Solution-driven · Strong execution · Stress-free delivery
4. **Selected Work** — editorial card grid (slightly off-grid, alternating card heights) with 6 projects from the deck:
   - Crypto AI Conference · Block Party Lisbon · WOW Gala · Adidas Retreat · Freaking Hot · Yoga at MAAT
   - Each card: photo, project name, type chip, one-line description
5. **Services** — 7-item grid (Corporate, Brand Activations, Private & Social, Creative Concept, Event Management, Logistics, Venue Sourcing) with squiggle dividers
6. **Production Capabilities** — wrap of sticker chips (AV, lighting, set design, catering, photo/video, merch, performers, partnerships)
7. **About / Founder** — Mariana's portrait left, "TWYN is led by hands-on production experience." headline right, CV highlights as bullet stickers (festivals, conferences, film/TV, international crews)
8. **Marquee strip** — past brands/venues (Adidas, MAAT, Crypto AI Con, WOW Gala, Tezos, Michelin Guide) scrolling
9. **Contact** — big "Tell us what you need." headline, Mariana's name, phone (+351 914932082), email (mariana@twynagency.com), simple footer

## Technical

- TanStack Start route: replace `src/routes/index.tsx` placeholder with the new home page; update `head()` with TWYN-specific title/description/OG tags
- New components under `src/components/twyn/`: `Nav`, `Hero`, `Manifesto`, `WorkGrid`, `Services`, `Capabilities`, `About`, `Marquee`, `Contact`, `Squiggle` (inline SVG)
- Design tokens in `src/styles.css` (light theme only — cream background); Google Fonts loaded via `<link>` in `__root.tsx` head
- Animations via `framer-motion` (install)
- Images: extract the strongest photos from the parsed PDF (Crypto AI conference shots, WOW Gala feathers/drapes, Freaking Hot yoga/bamboo, Adidas/MAAT, founder portrait, long-table hero) → upload via `lovable-assets` CLI → reference via `.asset.json` pointers
- Logo: upload the user's TWYN logo PNG as an asset
- No backend needed (contact = static details)

## Out of scope

- No inquiry form / database / Lovable Cloud
- No case-study subpages (single-page only)
- No CMS — content hardcoded
