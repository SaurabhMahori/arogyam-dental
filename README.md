# Arogyam Dental Clinic Website

A warm, boutique dental clinic website for **Arogyam Dental Clinic By Dr. Akanksha**, built with React 19 + Vite + Tailwind CSS v4.

## Tech Stack

- **React 19** + TypeScript
- **Vite 6** (build tool)
- **Tailwind CSS v4** via `@tailwindcss/vite` plugin (CSS-first config — no `tailwind.config.js` needed)
- **Framer Motion** (animations)
- **shadcn/ui** components (Radix UI primitives)
- **Wouter** (routing)
- **Lucide React** (icons)

> **Note:** This project uses **Tailwind CSS v4**, which is configured entirely in `src/index.css` using `@import "tailwindcss"` — there is no separate `tailwind.config.js` file. This is the new standard for Tailwind v4.

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open in browser
# → http://localhost:5173
```

## Build for Production

```bash
npm run build
npm run preview
```

The built files will be in the `dist/` folder — ready to upload to any static host (Netlify, Vercel, GitHub Pages, etc.).

## Deployment

### Netlify (Recommended)
1. Run `npm run build`
2. Drag the `dist/` folder into [app.netlify.com](https://app.netlify.com/drop)

### Vercel
```bash
npm install -g vercel
vercel
```

### GitHub Pages
Set `base: '/your-repo-name/'` in `vite.config.ts` before building.

## Project Structure

```
arogyam-dental/
├── public/
│   ├── hero.png          # AI-generated clinic interior image
│   ├── doctor.png        # AI-generated doctor portrait
│   ├── comfort.png       # AI-generated comfort room image
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navigation.tsx        # Sticky nav with mobile menu
│   │   ├── Hero.tsx              # Hero section with floating card
│   │   ├── AboutDoctor.tsx       # Doctor intro section
│   │   ├── Services.tsx          # 6 service cards
│   │   ├── JourneyTimeline.tsx   # Patient journey steps
│   │   ├── FamilyCare.tsx        # Children/Adults/Seniors
│   │   ├── ComfortExperience.tsx # Clinic experience
│   │   ├── Testimonials.tsx      # Review cards
│   │   ├── FAQ.tsx               # Accordion FAQ
│   │   ├── ContactBook.tsx       # Contact + booking form
│   │   ├── Footer.tsx            # Footer
│   │   └── ui/                   # shadcn/ui components
│   ├── hooks/
│   │   ├── use-toast.ts
│   │   └── use-mobile.tsx
│   ├── lib/
│   │   └── utils.ts              # cn() helper
│   ├── pages/
│   │   ├── Home.tsx              # Main landing page
│   │   └── not-found.tsx         # 404 page
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css                 # Theme + Tailwind config
├── index.html
├── package.json
├── vite.config.ts
└── tsconfig.json
```

## No Backend Required

This is a **fully static** website. The appointment booking form shows a success toast — to connect it to a real backend, edit `ContactBook.tsx` and replace the `setTimeout` mock with your API call.

## Customization

- **Colors & fonts** — edit the CSS variables in `src/index.css` under `:root`
- **Clinic info** (phone, address) — search for `08368504849` and `Raghu Nagar` across components
- **Images** — replace `public/hero.png`, `public/doctor.png`, `public/comfort.png` with real photos
- **Services** — edit the `services` array in `src/components/Services.tsx`
- **Reviews** — edit the `reviews` array in `src/components/Testimonials.tsx`
- **FAQ** — edit the `faqs` array in `src/components/FAQ.tsx`
