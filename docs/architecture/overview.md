# Architecture Overview

## System Architecture

Unorepo Builder is a visual monorepo orchestration platform built with a hybrid monorepo structure optimized for both v0 and Vercel deployment.

## Structure Philosophy

### Root App (`/app`)
The main **Unorepo Builder Platform** - the visual builder application itself.
- Next.js 15 App Router
- Visual flow builder (React Flow)
- Package registry UI
- Template management
- Project generator

### Apps Folder (`/apps`)
Additional applications built WITH or FOR the platform:
- **app-000**: Full-featured demo (uses all monorepo features)
- **app-001**: Lightweight demo (minimal dependencies)
- **docs-site**: Future documentation site
- **api**: Future standalone API

### Packages Folder (`/packages`)
Shared code used across all applications:
- **ui**: Shared UI components (shadcn/ui + custom)
- **config**: Shared configurations (TypeScript, ESLint, Tailwind)
- **utils**: Shared utilities and helpers
- **database**: Future database client and schemas
- **registry**: Future package registry logic

## Data Flow

\`\`\`
User → Builder App (root /app) → Visual Flow → Generator → Output Apps (/apps)
                ↓                                              ↓
         Packages (/packages/ui, /packages/utils)  ←──────────┘
\`\`\`

## Technology Stack

- **Monorepo**: Turborepo + pnpm workspaces
- **Frontend**: Next.js 15, React 19, TypeScript
- **UI**: shadcn/ui, Tailwind CSS v4, Radix UI
- **State**: Zustand, SWR
- **Database**: Supabase (PostgreSQL)
- **Storage**: Vercel Blob
- **Visual**: React Flow
- **Validation**: Zod
- **Testing**: Vitest, Playwright
- **CI/CD**: GitHub Actions, Vercel

## Design Principles

1. **Minimal Bloat**: Only essential files and dependencies
2. **Clear Separation**: Root app vs generated apps vs shared packages
3. **Progressive Enhancement**: Start simple, add complexity as needed
4. **Developer Experience**: Fast, intuitive, well-documented
5. **AI-Friendly**: Works seamlessly with v0 and Cursor
