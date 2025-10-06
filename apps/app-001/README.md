# App 001 - Lightweight Demo

A minimal demo application showing how to use the monorepo with minimal dependencies.

## Features

- **Minimal Dependencies**: Only uses `@unorepo/ui`
- **Fast Builds**: Fewer dependencies = faster build times
- **Simple Setup**: Easy to understand and maintain
- **Small Bundle**: Optimized for performance

## Development

\`\`\`bash
# From root
pnpm dev:app-001

# Or from this directory
pnpm dev
\`\`\`

Runs on http://localhost:3002

## Build

\`\`\`bash
pnpm build
\`\`\`

## Package Dependencies

- `@unorepo/ui` - Shared UI components (only dependency)

## Structure

\`\`\`
app-001/
├── app/
│   ├── layout.tsx       # Minimal layout
│   ├── page.tsx         # Simple home page
│   └── globals.css      # Basic Tailwind styles
├── package.json
├── tsconfig.json
└── next.config.ts
\`\`\`

## Why This App?

This app demonstrates a **lightweight approach**:
- Minimal package dependencies
- Simpler configuration
- Faster development cycle
- Smaller production bundle

Perfect for:
- Landing pages
- Marketing sites
- Simple tools
- MVPs

Compare with `app-000` to see the full-featured alternative.
