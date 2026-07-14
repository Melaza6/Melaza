# Melaza Landing Page App Supervisor

## App Name

Melaza Landing Page, also called MLP.

## App Role

MLP is the public-facing trunk of the Melaza Ecosystem at `https://melazausa.com`.

It owns public brand messaging, public services, public contact/intake, published public content, featured project/app presentation when approved, and the login path to Melaza Network.

## Repository Boundary

This file is path-neutral for the current repository root. Run project commands from the directory that contains `package.json`, `pnpm-lock.yaml`, `next.config.mjs`, and this `AGENTS.md`.

The repository may be relocated from the old nested checkout shape into the ecosystem apps tree, but it must remain a single app root. Do not create or preserve an extra nested `Melaza/` project folder when relocating into `apps/public/melaza-landing-page`.

## Ecosystem Reporting

This app reports to the Melaza Ecosystem root governance and, when available in the parent workspace, `agents/supervisor-agent.md`.

Respect these ecosystem agents when their concerns apply:

- `app-work-gatekeeper-agent.md` before app folder changes.
- `app-agent-communication-gatekeeper-agent.md` when root and app instructions interact.
- `melaza-ecosystem-agent.md` for MN/MLP/client/product app boundaries.
- `supabase-rls-agent.md` for public Supabase, RLS, forms, auth, and data boundaries.
- `deployment-agent.md` for Vercel, domains, builds, and environment variables.
- `frontend-ui-agent.md` for public UX, brand, responsive design, and form clarity.
- `client-app-branch-agent.md` for featured app/project showcase rules.

## App Change Approval

Apply the ecosystem App Work Gatekeeper instructions before changing files in this app, including `agents/app-work-gatekeeper-agent.md` when that parent workspace file is available.

Default to documentation-only work unless runtime behavior, security, deployment, or a verified feature requires app code.

## Data Boundaries

MLP must not expose private MN data, Supabase service-role keys, admin credentials, private lead records, private client data, private product-user data, or operations data.

MLP may use MN's shared Supabase project only through public-safe `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` values. Public users may only insert safe lead/contact requests and read published/active public content or explicitly approved showcase records when RLS allows it.

## Learn / Grow / Bloom

- Learn: collect public leads, requests, feedback, project descriptions, and public content signals.
- Grow: route public interest into MN-owned operations without creating a separate admin system.
- Bloom: publish Melaza's public brand, services, content, and approved showcases.

## Final Report For App-Level Work

Report:

- What changed.
- Files changed.
- Whether runtime behavior changed.
- Public/private data impact.
- Supabase/RLS impact.
- Deployment impact.
- Build or verification result, when applicable.
- Ecosystem docs that were updated or should be updated.
