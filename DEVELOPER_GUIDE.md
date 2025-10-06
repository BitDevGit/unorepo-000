# Developer Guide - Unorepo Builder

**The Single Source of Truth for Development**

This guide is your complete reference for understanding, building, and contributing to Unorepo Builder. Whether you're a human developer, AI assistant (v0/Cursor), or CI/CD system, this document explains everything you need to know.

---

## 📚 Documentation Map

Start here, then navigate to specific docs as needed:

\`\`\`
unorepo-builder/
├── README.md                          # Quick start & project overview
├── DEVELOPER_GUIDE.md                 # ⭐ YOU ARE HERE - Complete dev reference
├── CONTRIBUTING.md                    # Contribution guidelines
├── TODO.md                            # Current tasks & roadmap
├── PROJECT.md                         # Vision, architecture, features
├── docs/
│   ├── architecture/
│   │   ├── overview.md               # Monorepo architecture
│   │   ├── tech-stack.md             # Technology choices
│   │   └── decisions/                # Architecture Decision Records (ADRs)
│   ├── guides/
│   │   ├── getting-started.md        # Setup guide
│   │   ├── development.md            # Development workflows
│   │   ├── adding-packages.md        # Package management
│   │   ├── api-documentation.md      # API standards
│   │   └── vercel-tools.md           # Vercel integration
│   └── standards/
│       └── coding-standards.md       # Code style & conventions
├── .cursorrules                       # Cursor AI development rules
└── .github/
    ├── SECURITY.md                    # Security policies
    └── workflows/                     # CI/CD pipelines
\`\`\`

---

## 🎯 What's Been Built

### ✅ Phase 0: Foundation Setup (COMPLETE)
- [x] Turborepo monorepo structure
- [x] Next.js 15 app with App Router
- [x] Tailwind CSS v4 + shadcn/ui
- [x] TypeScript configuration
- [x] ESLint + Prettier
- [x] Git hooks (Husky)
- [x] CI/CD workflows (GitHub Actions)
- [x] Security scanning
- [x] Comprehensive documentation

### 🚧 Current Phase: Phase 1 - Database & Auth
See [TODO.md](./TODO.md) for detailed task breakdown.

---

## 🏗️ Architecture Overview

### Project Structure

**IMPORTANT:** Understand the distinction between these folders:

\`\`\`
unorepo-builder/
├── app/                    # ⭐ THE BUILDER PLATFORM (this application)
│   ├── page.tsx           # Platform homepage
│   ├── layout.tsx         # Platform layout
│   └── globals.css        # Platform styles
├── components/            # Platform UI components
├── lib/                   # Platform utilities
├── hooks/                 # Platform React hooks
├── public/                # Platform static assets
│
├── apps/                  # 🔮 FUTURE: Additional applications
│   ├── docs/             # (Future) Documentation website
│   └── examples/         # (Future) Example projects
│
├── packages/              # 🔮 FUTURE: Shared code libraries
│   ├── ui/               # (Future) Shared UI components
│   ├── config/           # (Future) Shared configurations
│   └── utils/            # (Future) Shared utilities
│
└── templates/             # 🔮 FUTURE: Project templates
\`\`\`

**Key Concepts:**

1. **`app/` = The Builder Platform**
   - This is the Unorepo Builder application itself
   - The visual interface users interact with
   - Built with Next.js 15 App Router
   - Lives at the root for v0 compatibility

2. **`apps/` = Future Additional Apps**
   - Documentation website (separate Next.js app)
   - Example applications built with the platform
   - Each app can be deployed independently
   - Currently empty - will be added in later phases

3. **`packages/` = Future Shared Code**
   - Reusable UI components
   - Shared utilities and helpers
   - Common configurations
   - Used by multiple apps
   - Currently empty - will be added as needed

### Monorepo Strategy

**Current:** Single Next.js app at root (the Builder Platform)  
**Future:** Multiple apps + shared packages

**Why root-level app?**
- v0 compatibility and preview functionality
- Simpler initial development
- Faster iteration

**When to add apps/ and packages/?**
- Phase 2-3: Create `packages/ui` for shared components
- Phase 3-4: Create `apps/docs` for documentation site
- Phase 5+: Add more packages as needed

### Tech Stack
- **Monorepo**: Turborepo + pnpm workspaces
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript 5.x
- **Styling**: Tailwind CSS v4 + shadcn/ui
- **Database**: Supabase (PostgreSQL)
- **Storage**: Vercel Blob
- **State**: Zustand (future)
- **Validation**: Zod
- **Deployment**: Vercel

**Why these choices?** See [docs/architecture/tech-stack.md](./docs/architecture/tech-stack.md)

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.17+ or 20.x
- pnpm 8.x or 9.x
- Git

### Installation
\`\`\`bash
# Clone repository
git clone <repo-url>
cd unorepo-builder

# Install dependencies
pnpm install

# Copy environment variables
cp env.example .env.local

# Run development server
pnpm dev
\`\`\`

### Available Commands
\`\`\`bash
# Development
pnpm dev              # Start dev server (localhost:3000)
pnpm build            # Build for production
pnpm start            # Start production server
pnpm lint             # Run ESLint
pnpm format           # Format with Prettier
pnpm type-check       # TypeScript type checking

# Monorepo (Turborepo)
pnpm turbo dev        # Run dev in all workspaces
pnpm turbo build      # Build all workspaces
pnpm turbo lint       # Lint all workspaces

# Testing (future)
pnpm test             # Run tests
pnpm test:watch       # Watch mode
pnpm test:coverage    # Coverage report

# Database (future)
pnpm db:push          # Push schema changes
pnpm db:studio        # Open database studio
\`\`\`

---

## 📝 Coding Standards

### File Naming Conventions

**Components** (PascalCase)
\`\`\`
components/
├── PackageCard.tsx
├── TemplateBuilder.tsx
└── ui/
    ├── Button.tsx
    └── Dialog.tsx
\`\`\`

**Utilities** (kebab-case)
\`\`\`
lib/
├── format-date.ts
├── validate-schema.ts
└── api/
    ├── fetch-packages.ts
    └── create-template.ts
\`\`\`

**Pages** (kebab-case)
\`\`\`
app/
├── page.tsx                    # Builder Platform home
├── dashboard/
│   └── page.tsx               # Dashboard
└── packages/
    ├── page.tsx               # Package list
    └── [id]/
        └── page.tsx           # Package detail

apps/
├── app-000/                   # Full-featured demo app
│   └── app/
│       └── page.tsx
└── app-001/                   # Lightweight demo app
    └── app/
        └── page.tsx
\`\`\`

**Hooks** (camelCase with 'use' prefix)
\`\`\`
hooks/
├── usePackages.ts
├── useTemplateBuilder.ts
└── useAuth.ts
\`\`\`

### Code Style

**TypeScript**
- Use explicit types for function parameters and returns
- Prefer interfaces over types for objects
- Use enums for fixed sets of values
- Avoid `any` - use `unknown` if type is truly unknown

**React**
- Functional components only
- Use hooks for state and side effects
- Prefer composition over inheritance
- Keep components small and focused (< 200 lines)

**Imports**
\`\`\`typescript
// 1. External dependencies
import { useState } from 'react'
import { z } from 'zod'

// 2. Internal packages (future)
import { Button } from '@repo/ui'

// 3. Local imports
import { formatDate } from '@/lib/format-date'
import { PackageCard } from '@/components/PackageCard'

// 4. Types
import type { Package } from '@/types'
\`\`\`

**Naming**
- Components: PascalCase (`PackageCard`)
- Functions: camelCase (`formatDate`)
- Constants: UPPER_SNAKE_CASE (`MAX_PACKAGES`)
- Types/Interfaces: PascalCase (`PackageMetadata`)
- Files: kebab-case (`package-card.tsx`)

### Git Commit Conventions

We use [Conventional Commits](https://www.conventionalcommits.org/):

\`\`\`bash
feat: add package search functionality
fix: resolve template generation bug
docs: update developer guide
style: format code with prettier
refactor: simplify package validation
test: add tests for template engine
chore: update dependencies
\`\`\`

**Scopes** (optional):
\`\`\`bash
feat(registry): add package filtering
fix(auth): resolve login redirect
docs(readme): add installation steps
\`\`\`

---

## 🔧 Adding New Features

### 1. Check TODO.md
Before starting, check [TODO.md](./TODO.md) to see if the feature is planned and which phase it belongs to.

### 2. Create Feature Branch
\`\`\`bash
git checkout -b feat/package-search
\`\`\`

### 3. Follow Architecture Patterns

**Adding a new page:**
\`\`\`typescript
// app/packages/page.tsx
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Packages | Unorepo Builder',
  description: 'Browse available packages',
}

export default function PackagesPage() {
  return (
    <main className="container py-8">
      <h1 className="text-4xl font-bold">Packages</h1>
      {/* Content */}
    </main>
  )
}
\`\`\`

**Adding a component:**
\`\`\`typescript
// components/PackageCard.tsx
import type { Package } from '@/types'

interface PackageCardProps {
  package: Package
  onSelect?: (id: string) => void
}

export function PackageCard({ package: pkg, onSelect }: PackageCardProps) {
  return (
    <div className="rounded-lg border p-4">
      <h3 className="font-semibold">{pkg.name}</h3>
      <p className="text-sm text-muted-foreground">{pkg.description}</p>
    </div>
  )
}
\`\`\`

**Adding a utility:**
\`\`\`typescript
// lib/format-date.ts
export function formatDate(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
\`\`\`

### 4. Add Tests (Future)
\`\`\`typescript
// __tests__/lib/format-date.test.ts
import { formatDate } from '@/lib/format-date'

describe('formatDate', () => {
  it('formats date correctly', () => {
    const result = formatDate(new Date('2025-01-06'))
    expect(result).toBe('January 6, 2025')
  })
})
\`\`\`

### 5. Update Documentation
- Add to TODO.md if it's a new task
- Update DEVELOPER_GUIDE.md if it changes architecture
- Add JSDoc comments for complex functions

---

## 📦 Adding New Packages

### NPM Packages
\`\`\`bash
# Add to root (workspace tools)
pnpm add -D <package> -w

# Add to specific workspace
pnpm add <package> --filter web

# Add to all workspaces
pnpm add <package> -r
\`\`\`

### Workspace Packages (Future)
\`\`\`bash
# Create new package
cd packages
mkdir my-package
cd my-package
pnpm init

# Add to workspace
# Edit pnpm-workspace.yaml to include new package
\`\`\`

### Update Documentation
When adding a package, update:
1. `docs/architecture/tech-stack.md` - Why you chose it
2. `package.json` - Add to dependencies
3. This guide - If it changes architecture

---

## 🔐 Environment Variables

### Required Variables
\`\`\`bash
# Database (Supabase)
DATABASE_URL=                    # PostgreSQL connection string
NEXT_PUBLIC_SUPABASE_URL=       # Supabase project URL
NEXT_PUBLIC_SUPABASE_ANON_KEY=  # Supabase anonymous key
SUPABASE_SERVICE_ROLE_KEY=      # Supabase service role key

# Storage (Vercel Blob)
BLOB_READ_WRITE_TOKEN=          # Vercel Blob token

# Authentication (future)
NEXTAUTH_URL=                   # App URL
NEXTAUTH_SECRET=                # Auth secret

# GitHub Integration (future)
GITHUB_CLIENT_ID=               # GitHub OAuth client ID
GITHUB_CLIENT_SECRET=           # GitHub OAuth secret
GITHUB_TOKEN=                   # GitHub personal access token
\`\`\`

### Adding New Variables
1. Add to `env.example` with description
2. Add to Vercel project settings
3. Document in this guide
4. Update `.env.local` for local development

---

## 🚢 Deployment

### Vercel (Recommended)
\`\`\`bash
# Install Vercel CLI
pnpm add -g vercel

# Link project
vercel link

# Deploy preview
vercel

# Deploy production
vercel --prod
\`\`\`

### Environment Setup
1. Go to Vercel project settings
2. Add environment variables from `env.example`
3. Configure build settings:
   - Framework: Next.js
   - Build Command: `pnpm build`
   - Output Directory: `.next`

### CI/CD
GitHub Actions automatically:
- Runs tests on PR
- Checks code quality
- Scans for security issues
- Deploys to Vercel on merge to main

See `.github/workflows/` for pipeline details.

---

## 🤖 Working with AI (v0 / Cursor)

### For AI Assistants
This project is optimized for AI-assisted development:

**Context Files:**
- `.cursorrules` - Cursor AI rules and conventions
- `DEVELOPER_GUIDE.md` - Complete development reference
- `docs/coding-standards.md` - Code style guide

**When Making Changes:**
1. Read relevant files first (don't assume structure)
2. Follow existing patterns and conventions
3. Update documentation if architecture changes
4. Add comments for complex logic
5. Run linting and type checking

**File Reading Priority:**
1. `DEVELOPER_GUIDE.md` - Overall context
2. `TODO.md` - Current tasks
3. Relevant source files
4. `docs/` - Specific technical details

### For Human Developers
When working with AI assistants:
- Point them to this guide first
- Reference specific sections for context
- Ask them to explain their changes
- Review generated code for best practices

---

## 🧪 Testing Strategy (Future)

### Test Structure
\`\`\`
__tests__/
├── unit/              # Unit tests
├── integration/       # Integration tests
└── e2e/              # End-to-end tests
\`\`\`

### Testing Tools
- **Unit**: Vitest
- **Integration**: React Testing Library
- **E2E**: Playwright
- **Coverage**: Vitest coverage

---

## 🐛 Debugging

### Development Tools
- React DevTools
- Vercel Toolbar (in development)
- Next.js DevTools
- Browser DevTools

### Common Issues

**Build Errors:**
\`\`\`bash
# Clear cache
pnpm clean
rm -rf .next node_modules
pnpm install
\`\`\`

**Type Errors:**
\`\`\`bash
# Check types
pnpm type-check
\`\`\`

**Linting Issues:**
\`\`\`bash
# Auto-fix
pnpm lint --fix
pnpm format
\`\`\`

---

## 📊 Project Status

### Current Phase: Phase 1 - Foundation Complete
See [TODO.md](./TODO.md) for detailed progress.

### What's Next
1. Complete Supabase integration
2. Build authentication system
3. Create database schema
4. Implement package registry

### Long-term Roadmap
See [PROJECT.md](./PROJECT.md) for complete vision.

---

## 🤝 Contributing

### Before Contributing
1. Read this guide completely
2. Check [TODO.md](./TODO.md) for available tasks
3. Review [CONTRIBUTING.md](./CONTRIBUTING.md)
4. Set up development environment

### Pull Request Process
1. Create feature branch
2. Make changes following conventions
3. Add tests (when testing is set up)
4. Update documentation
5. Submit PR with clear description
6. Wait for CI/CD checks
7. Address review feedback

---

## 📞 Getting Help

### Documentation
- Start with this guide
- Check specific docs in `docs/`
- Review code comments
- Read TODO.md for context

### Issues
- Check existing GitHub issues
- Search closed issues
- Create new issue with template

### Community
- GitHub Discussions (future)
- Discord server (future)

---

## 🔄 Keeping This Guide Updated

This guide should be updated when:
- Architecture changes
- New tools/packages added
- Conventions change
- New phases begin
- Major features completed

**Last Updated**: 2025-01-06  
**Current Phase**: Phase 1 - Foundation Complete  
**Status**: MVP Ready ✅

---

**Remember**: This guide is the single source of truth. When in doubt, refer here first, then dive into specific documentation as needed.
