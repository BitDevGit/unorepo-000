# App 000 - Full Featured Demo

A comprehensive demo application showcasing all monorepo capabilities including shared UI components, utilities, and configurations.

## Features

- **Shared UI Components**: Uses `@unorepo/ui` package with shadcn/ui
- **Shared Utilities**: Leverages `@unorepo/utils` for common functions
- **TypeScript Configuration**: Extends shared configs from `@unorepo/config`
- **Turborepo Caching**: Benefits from intelligent build caching
- **Vercel Analytics**: Integrated analytics tracking

## Development

\`\`\`bash
# From root
pnpm dev:app-000

# Or from this directory
pnpm dev
\`\`\`

Runs on http://localhost:3001

## Build

\`\`\`bash
pnpm build
\`\`\`

## Package Dependencies

- `@unorepo/ui` - Shared UI components
- `@unorepo/utils` - Common utilities
- `@unorepo/config` - Shared configurations

## Structure

\`\`\`
app-000/
├── app/
│   ├── layout.tsx       # Root layout with fonts
│   ├── page.tsx         # Home page
│   └── globals.css      # Tailwind styles
├── package.json
├── tsconfig.json
└── next.config.ts
\`\`\`

## Why This App?

This app demonstrates the **full power** of the monorepo:
- Multiple shared packages
- Complex dependency graph
- Full feature set
- Production-ready patterns

Compare with `app-001` to see the lightweight alternative.
