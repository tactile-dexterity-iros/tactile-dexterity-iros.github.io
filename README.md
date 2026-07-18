# Scalable Tactile Sensing for Dexterous Manipulation

Website for the IROS 2026 workshop in Pittsburgh, Pennsylvania.

## Local development

Requires Node.js 22 and pnpm 11.

```bash
pnpm install
pnpm dev
```

The development server runs at `http://localhost:3000`.

## Verification

```bash
pnpm test
pnpm run export
```

The static GitHub Pages build is written to `out/`. Pushes to `main` deploy the site through the included GitHub Actions workflow.
