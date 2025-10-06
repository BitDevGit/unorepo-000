# Development Guide

## Development Workflow

### 1. Create a Feature Branch

\`\`\`bash
git checkout -b feature/your-feature-name
\`\`\`

### 2. Make Changes

Follow our [Coding Standards](../standards/coding-standards.md).

### 3. Test Your Changes

\`\`\`bash
pnpm test
pnpm typecheck
pnpm lint
\`\`\`

### 4. Commit Your Changes

We use Conventional Commits:

\`\`\`bash
git commit -m "feat: add new component"
git commit -m "fix: resolve navigation bug"
git commit -m "docs: update README"
\`\`\`

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

### 5. Push and Create PR

\`\`\`bash
git push origin feature/your-feature-name
\`\`\`

## Working with Packages

### Creating a New Package

\`\`\`bash
# Create package directory
mkdir -p packages/my-package/src

# Create package.json
cd packages/my-package
pnpm init
\`\`\`

**package.json template:**

\`\`\`json
{
  "name": "@unorepo/my-package",
  "version": "0.0.0",
  "private": true,
  "main": "./src/index.ts",
  "types": "./src/index.ts",
  "scripts": {
    "lint": "eslint .",
    "typecheck": "tsc --noEmit"
  },
  "dependencies": {},
  "devDependencies": {
    "@unorepo/config": "workspace:*",
    "typescript": "^5.3.3"
  }
}
\`\`\`

### Using a Package

\`\`\`json
// In app or another package
{
  "dependencies": {
    "@unorepo/my-package": "workspace:*"
  }
}
\`\`\`

\`\`\`typescript
// Import and use
import { something } from '@unorepo/my-package'
\`\`\`

## Working with Apps

### Creating a New App

\`\`\`bash
# Create app directory
mkdir -p apps/my-app

# Initialize Next.js app
cd apps/my-app
pnpm create next-app@latest . --typescript --tailwind --app
\`\`\`

### Using Shared Packages

\`\`\`json
// apps/my-app/package.json
{
  "dependencies": {
    "@unorepo/ui": "workspace:*",
    "@unorepo/utils": "workspace:*"
  }
}
\`\`\`

## Hot Reload and Fast Refresh

Turborepo watches for changes in packages and automatically rebuilds:

\`\`\`bash
pnpm dev  # All apps watch for package changes
\`\`\`

## Debugging

### VS Code

Create `.vscode/launch.json`:

\`\`\`json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Next.js: debug server-side",
      "type": "node-terminal",
      "request": "launch",
      "command": "pnpm dev"
    }
  ]
}
\`\`\`

### Console Logging

Use `console.log("[v0] ...")` for debugging:

\`\`\`typescript
console.log("[v0] User data:", userData)
console.log("[v0] API response:", response)
\`\`\`

Remove debug logs before committing.

## Testing

### Unit Tests (Vitest)

\`\`\`bash
# Run all tests
pnpm test

# Watch mode
pnpm test:watch

# Coverage
pnpm test:coverage
\`\`\`

### E2E Tests (Playwright)

\`\`\`bash
# Run E2E tests
pnpm test:e2e

# UI mode
pnpm test:e2e:ui
\`\`\`

## Storybook

View and develop UI components:

\`\`\`bash
pnpm storybook
\`\`\`

Opens at http://localhost:6006

## Performance

### Build Analysis

\`\`\`bash
# Analyze bundle size
pnpm build
pnpm analyze
\`\`\`

### Turborepo Cache

\`\`\`bash
# Clear cache
pnpm turbo clean

# Check cache status
pnpm turbo run build --dry-run
\`\`\`

## Common Issues

### Circular Dependencies

Avoid importing between packages in a circular way:

\`\`\`typescript
// ❌ Bad
// packages/a imports packages/b
// packages/b imports packages/a

// ✅ Good
// Extract shared code to packages/utils
\`\`\`

### Type Errors After Package Changes

\`\`\`bash
pnpm build:packages
pnpm typecheck
\`\`\`

### Stale Cache

\`\`\`bash
rm -rf .turbo
rm -rf node_modules/.cache
pnpm dev
