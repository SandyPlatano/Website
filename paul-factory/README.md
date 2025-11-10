# GTMwithFerm

GTMwithFerm is a go-to-market systems site built with Next.js 14 (App Router) and Tailwind CSS.  
All imagery and copy are placeholder assets sourced from open-license networks to be replaced with your own content.

## Getting Started

```bash
pnpm install   # or npm install / yarn install
pnpm dev       # starts Next.js dev server on http://localhost:3000
pnpm lint      # runs ESLint
pnpm build     # production build
```

> **Note:** Ensure Node.js ≥ 18.18.0 is installed locally before running the commands above.

## Structure

- `src/app` – App Router pages mirroring the GTMwithFerm sitemap (excluding the Play page).
- `src/components` – Shared UI primitives: layout shell, navigation, cards, CTA buttons, grids.
- `src/content` – Typed data objects feeding cards and sections with placeholder text/images.
- `public/` – Reserved for static assets; add your own logos and imagery here.
- `tailwind.config.ts` – Theme tokens (colors, typography, spacing) referencing the GTMwithFerm visual system.

## Placeholder Assets

- Images referenced from Unsplash with direct URLs (see `src/content/projects.ts`).
- Testimonials, clients, and legal details are fictional and must be replaced before launch.
- Logos are typographic badges; substitute with actual SVGs in `LogoCloud`.

## Customisation Checklist

1. Update fonts or theme tokens in `tailwind.config.ts` if you need different typography/colors.
2. Swap placeholder data inside `src/content/*` with real copy, image paths, and links.
3. Replace CTA email addresses and phone numbers in `src/content/contact.ts`.
4. Add real legal information in `src/content/legal.ts`.
5. Import your own imagery into `public/` and update components to use local assets if preferred.

## QA Notes

- Responsive layouts were tested via Tailwind breakpoints (`sm`, `md`, `lg`) to mimic the original design cadence.
- Mobile navigation renders a drop-down menu and closes on selection.
- Grids use fluid auto-fit columns and should adapt down to 320px wide viewports.
- Remote images permitted via Next.js `remotePatterns` for `images.unsplash.com`.

Before deploying, run `pnpm build` (or equivalent) to ensure the project compiles without errors once dependencies are installed.

