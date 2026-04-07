# Basil Metrics v4 — Homepage Redesign Handoff

## Session Summary
We rebuilt the homepage from scratch with a new hero layout, dark section design, interactive animations, and a full animation system.

## Current State — What's Working
- Hero: centred headline, wave dot grid (mouse-reactive), hero spotlight follows cursor
- Two pillar cards in hero: Ads Work (dark terminal, cycling metrics) + Brand Work (food photo crossfade)
- Tilt effect on both pillar cards (mouse move)
- Cycling metric animation with progress bar (cost_per_click → avg_ctr → profile_visits)
- Brand Work slideshow crossfades every 3.5s with dot indicators
- Services section: cream background, lime left border grows on hover, stagger entrance
- Results section: dark background, numbers count up on scroll, double-click opens modal
- Result card modal: slides up from bottom, X to close, ESC key closes
- How We Work: 4-column grid, sequential reveal on scroll, number glow on hover
- FAQ: dark forest background, alternating slide-in animation
- CTA band: lime background, scale-up entrance
- Custom cursor: lime glow follows mouse, expands on links
- Magnetic button effect on CTA buttons
- Typewriter effect on section labels

## File Locations
- **Homepage:** `src/pages/index.astro`
- **Backup (original):** `src/pages/index.astro.bak`
- **Clean base:** `src/pages/index.astro.clean`

## Brand Colors
- `#263519` forest green (primary dark)
- `#F6FBF0` cream (light background)
- `#82976E` sage (muted text)
- `#89F337` lime green (accent/CTA)
- `#C8DDB8` light sage (hero body text)
- `#111a0b` near black (results section bg)
- `#0d1509` darkest (ads card bg)

## Section Color Alternation
1. Hero → `#263519` dark forest
2. Services → `#F6FBF0` cream
3. Results → `#111a0b` near black
4. How We Work → `#F6FBF0` cream
5. FAQ → `#263519` dark forest
6. CTA → `#89F337` lime

## Cloudinary Image URLs (Brand Work slideshow)
- Slide 1: `https://res.cloudinary.com/dk6qpakzw/image/upload/v1774925583/cld-sample-2.jpg`
- Slide 2: `https://res.cloudinary.com/dk6qpakzw/image/upload/v1774925584/cld-sample-4.jpg`
- Slide 3: `https://res.cloudinary.com/dk6qpakzw/image/upload/v1774925584/cld-sample-4.jpg`
- **Note:** Upload real brand photos via `basilmetrics.com/admin` → Brand Work collection

## Known Issues / Next Steps
1. The gap between the hero text and the pillar cards — still slight space due to section padding
2. Real brand photos need uploading to replace Cloudinary sample images
3. Modal double-click on result cards — confirm it's working in browser
4. Mobile responsiveness — grid collapses to 1 column via media query, needs testing
5. Blog posts — CMS ready, no posts written yet

## How to Continue in New Chat
Paste this:

> I'm continuing the Basil Metrics v4 homepage redesign. Local path: `/Users/marketingworks/Downloads/basilmetrics/d-bm-v3`. The homepage (`src/pages/index.astro`) has been fully rebuilt with: centred hero headline, two pillar cards (Ads Work with cycling terminal metrics + Brand Work with food photo crossfade), wave dot grid animation, spotlight mouse effect, tilt cards, typewriter labels, stagger entrances, result card modals on double-click, custom lime cursor, and magnetic buttons. Section colors alternate: hero dark → services cream → results dark → HWW cream → FAQ dark → CTA lime. Please run `npm run dev` and send me a screenshot before touching any code.

## Stack Reminder
- Astro 4.16.19
- Tailwind CSS (not used in v4 pages — all inline styles)
- Decap CMS at `basilmetrics.com/admin`
- Cloudflare Pages (auto-deploys from `main` branch)
- GitHub repo: `basilmetrics/basil-metrics` (private)
- Font: Sora via Google Fonts
