Personal website for [king.gdn](https://king.gdn)

## Run locally

Requires Node 26 and pnpm 11.

```sh
pnpm install
pnpm dev
```

## Content

Pages live in `content/` (`home.md`, `projects/`, `updates/`) and use Nuxt Content.

## Checks

CI runs `pnpm generate` on every PR (`.github/workflows/ci.yml`). Lint and the Vitest suite are known to be broken until the Nuxt 4 / Content 3 upgrade.

## Deploy

The Cloudflare Pages project `king-gdn` builds from `main`. Merging deploys https://king.gdn.
