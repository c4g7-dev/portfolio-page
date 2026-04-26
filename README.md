# c4g7 — personal profile site

A dark, minimal Next.js 16 + Tailwind v4 + shadcn-style profile page.

![preview](.github/assets/preview.png)

## Features

- Dark-only design with subtle violet/cyan radial glows + grid
- Geist + Geist Mono + Instrument Serif font mix
- Animated hero (shimmer name, staggered fade-in)
- Live `/api/status` endpoint that proxies the Uptime Kuma status page
  (`status.c4g7.com`) and aggregates monitor health
- Status pill in the hero + live status card that refresh every 60s
- Project showcase, link grid with cursor spotlight, stack chips
- Fully static pages (status route is ISR with 60s revalidation)

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm start
```

## Deploy to Cloudflare Workers

Uses [@opennextjs/cloudflare](https://opennext.js.org/cloudflare). Configured via
[`wrangler.jsonc`](./wrangler.jsonc) and [`open-next.config.ts`](./open-next.config.ts).

```bash
npm run cf:preview          # local Workers preview
npm run cf:deploy           # build + deploy with wrangler
```

When deploying via the Cloudflare dashboard / CI, set:

- **Build command:** `npm run cf:build`
- **Deploy command:** `npx opennextjs-cloudflare deploy`
- **Environment variables:** `RESEND_API_KEY`, `CONTACT_TO`,
  `NEXT_PUBLIC_STATUS_BASE`, `STATUS_SLUG`, `GITHUB_USER`
- The compatibility flag `nodejs_compat` must be enabled (already in `wrangler.jsonc`).

## Configuration

Copy `.env.example` to `.env.local` and adjust:

```
NEXT_PUBLIC_STATUS_BASE=https://status.c4g7.com
STATUS_SLUG=default
```

If the slug isn't `default`, find yours in the Uptime Kuma admin → Status Pages.

## Project layout

```
src/
  app/
    api/status/route.ts    # Uptime Kuma proxy & aggregator
    layout.tsx, page.tsx, globals.css
  components/
    hero.tsx, projects.tsx, links-grid.tsx,
    stack.tsx, site-nav.tsx, site-footer.tsx,
    status-indicator.tsx
    ui/                    # shadcn-style primitives
    icons/github.tsx
  lib/
    data.ts                # links + projects data
    utils.ts               # cn()
```

Edit `src/lib/data.ts` to update links, projects, and stack chips.
