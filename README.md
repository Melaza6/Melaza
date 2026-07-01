# Melaza Public App

Professional public-facing web app for MelazaUSA LLC, publicly branded as Melaza.

Melaza helps small businesses organize operations, improve processes, build modern digital tools, and prepare for sustainable growth across the U.S. and Colombia.

## Tech Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- pnpm
- Supabase-ready structure
- Firebase-ready structure

## Commands

Use pnpm for project commands.

```bash
pnpm install
pnpm dev
pnpm build
```

## Public Routes

- `/`
- `/about`
- `/services`
- `/industries`
- `/projects`
- `/contact`
- `/privacy`
- `/terms`

## App Structure

```text
src/
  app/
    page.tsx
    about/page.tsx
    services/page.tsx
    industries/page.tsx
    projects/page.tsx
    contact/page.tsx
    privacy/page.tsx
    terms/page.tsx
  components/
    home/
    layout/
    projects/
    services/
    ui/
  lib/
    data/
    firebase/
    supabase/
  styles/
    globals.css
```

Legacy Create React App files have been removed; the public site is served from
the Next.js App Router under `src/app`.

## Environment Variables

Public deployment variables:

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
NEXT_PUBLIC_APP_URL=https://melazausa.com
NEXT_PUBLIC_MELAZA_NETWORK_URL=https://app.melazausa.com
NEXT_PUBLIC_MELAZA_PUBLIC_SITE_ID=site-melazausa-public
```

Optional future Firebase public variables:

```env
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_APP_ID=
```

The public app is separate from the internal Melaza Network admin app, but it is structured so those systems can connect later.

## Vercel Deployment

Recommended Vercel settings:

```text
Framework preset: Next.js
Install command: pnpm install
Build command: pnpm build
Output directory: out
Production domain: melazausa.com
```

This app uses static export through `next.config.mjs`, so Vercel should serve the generated `out` directory after `pnpm build`.

Before production deployment:

1. Confirm `melazausa.com` is assigned to the MLP Vercel project.
2. Confirm `app.melazausa.com` remains assigned to the MN Vercel project.
3. Add the public deployment variables above in Vercel Project Settings.
4. Run `pnpm build` locally.
5. Deploy a preview only after the repository is clean or the intended changes are committed.
