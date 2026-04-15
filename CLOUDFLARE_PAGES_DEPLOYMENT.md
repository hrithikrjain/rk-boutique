# Cloudflare Pages Deployment (Static + Decap OAuth)

This project is configured for a standard Cloudflare Pages static deployment.

## Required deployment mode

- Build command: `npm run build`
- Build output directory: `dist`
- Do not use `npx wrangler deploy` for this project.

## Why Functions still exist

- The `functions/api/auth.js` and `functions/api/callback.js` files are Cloudflare **Pages Functions** used only for Decap CMS GitHub OAuth.
- The main site remains a static Vite build in `dist`.

## Cloudflare Pages dashboard settings

Use these exact settings in **Cloudflare Dashboard > Workers & Pages > your project > Settings > Builds & deployments**:

- Framework preset: `None` (or `Vite`, as long as command/output stay exactly below)
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: project root (`/`) unless your repo is monorepo-nested
- Node version: default Cloudflare-provided Node is fine for this Vite 5 setup

In **Settings > Environment variables**, add:

- `GITHUB_CLIENT_ID` (Secret)
- `GITHUB_CLIENT_SECRET` (Secret)

Set both for Production and Preview environments.

## GitHub OAuth app settings

In GitHub OAuth App configuration:

- Homepage URL: `https://rk-boutique.pages.dev`
- Authorization callback URL: `https://rk-boutique.pages.dev/api/callback`

Update both URLs after moving to a custom domain.

