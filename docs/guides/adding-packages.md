# Adding New Packages

This guide explains how to add new packages to the monorepo.

## Quick Start

\`\`\`bash
# Create new package directory
mkdir -p packages/my-package

# Create package.json
cd packages/my-package
pnpm init
\`\`\`

## Package Structure

\`\`\`
packages/my-package/
├── src/
│   └── index.ts
├── package.json
├── tsconfig.json
└── README.md
\`\`\`

## Package Configuration

### 1. package.json

\`\`\`json
{
  "name": "@unorepo/my-package",
  "version": "0.0.0",
  "private": true,
  "main": "./src/index.ts",
  "types": "./src/index.ts",
  "scripts": {
    "lint": "eslint .",
    "type-check": "tsc --noEmit"
  },
  "dependencies": {},
  "devDependencies": {
    "@unorepo/config": "workspace:*",
    "typescript": "^5.7.2"
  }
}
\`\`\`

### 2. tsconfig.json

\`\`\`json
{
  "extends": "@unorepo/config/typescript/library.json",
  "compilerOptions": {
    "outDir": "dist"
  },
  "include": ["src"],
  "exclude": ["node_modules", "dist"]
}
\`\`\`

### 3. README.md

\`\`\`markdown
# @unorepo/my-package

Brief description of what this package does.

## Installation

\`\`\`bash
pnpm add @unorepo/my-package
\`\`\`

## Usage

\`\`\`typescript
import { something } from '@unorepo/my-package'
\`\`\`

## API

Document your exports here.
\`\`\`

## Using the Package

### In Apps

\`\`\`json
// apps/app-000/package.json
{
  "dependencies": {
    "@unorepo/my-package": "workspace:*"
  }
}
\`\`\`

\`\`\`typescript
// apps/app-000/app/page.tsx
import { something } from '@unorepo/my-package'
\`\`\`

### In Other Packages

\`\`\`json
// packages/utils/package.json
{
  "dependencies": {
    "@unorepo/my-package": "workspace:*"
  }
}
\`\`\`

## Adding to Turborepo Pipeline

Update `turbo.json` if your package has build steps:

\`\`\`json
{
  "pipeline": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": ["dist/**"]
    }
  }
}
\`\`\`

## Versioning with Changesets

When making changes:

\`\`\`bash
# Create a changeset
pnpm changeset

# Follow prompts to describe changes
# Commit the changeset file
git add .changeset/*
git commit -m "Add changeset for my-package"
\`\`\`

## Best Practices

1. **Use workspace protocol**: `"workspace:*"` for internal dependencies
2. **Keep packages focused**: Single responsibility principle
3. **Document exports**: Clear API documentation
4. **Add tests**: Test your package functionality
5. **Version properly**: Use changesets for versioning

## Common Package Types

### UI Component Package

\`\`\`
packages/ui/
├── components/
│   └── button/
│       ├── button.tsx
│       └── button.stories.tsx
├── styles/
│   └── globals.css
├── index.ts
└── package.json
\`\`\`

### Utility Package

\`\`\`
packages/utils/
├── lib/
│   ├── format.ts
│   └── validate.ts
├── index.ts
└── package.json
\`\`\`

### Configuration Package

\`\`\`
packages/config/
├── eslint/
│   └── base.js
├── typescript/
│   └── base.json
└── package.json
\`\`\`

## Troubleshooting

### Package not found

\`\`\`bash
# Reinstall dependencies
pnpm install

# Clear Turborepo cache
pnpm turbo clean
\`\`\`

### Type errors

\`\`\`bash
# Rebuild all packages
pnpm build

# Check types
pnpm type-check
\`\`\`

## See Also

- [Development Guide](./development.md)
- [Architecture Overview](../architecture/overview.md)
- [Coding Standards](../standards/coding-standards.md)
