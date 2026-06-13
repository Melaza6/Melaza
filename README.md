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

Optional future integration variables:

```env
NEXT_PUBLIC_MELAZA_NETWORK_URL=https://app.melazausa.com
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_APP_ID=
```

The public app is separate from the internal Melaza Network admin app, but it is structured so those systems can connect later.
