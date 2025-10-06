# Dependency Management Guide

## Philosophy

**Only install what you actively use.** Every dependency adds:
- Bundle size overhead
- Security surface area
- Maintenance burden
- Potential version conflicts

## Dependency Audit Process

### Before Adding Any Dependency

1. **Check if it already exists** in the monorepo
2. **Verify it's necessary** - Can you build it yourself?
3. **Check bundle size** - Use [bundlephobia.com](https://bundlephobia.com)
4. **Review security** - Check npm audit and Snyk
5. **Document the decision** - Add to ADR if significant

### Where Dependencies Belong

\`\`\`
Root package.json
├── Main builder app dependencies only
├── Workspace management tools (turbo, changesets)
├── Dev tools used across all packages (prettier, eslint)
└── NO UI libraries or app-specific deps

packages/ui/package.json
├── Shared UI components (shadcn, Radix UI)
├── Storybook dependencies
└── UI-related utilities only

packages/config/package.json
├── Shared config packages
└── Config-related utilities

packages/utils/package.json
├── Shared utility functions
└── Common helpers

apps/*/package.json
├── App-specific dependencies
└── Workspace package references (@unorepo/*)
\`\`\`

## Dependency Checklist

### Adding a New Dependency

- [ ] Read the package README and documentation
- [ ] Check bundle size impact
- [ ] Verify it's actively maintained (last update < 6 months)
- [ ] Check for security vulnerabilities
- [ ] Add to correct package.json (root vs package vs app)
- [ ] Document why it's needed (in commit message or ADR)
- [ ] Update relevant documentation
- [ ] Test that it works as expected

### Removing a Dependency

- [ ] Search codebase for all imports/usage
- [ ] Remove all code that uses it
- [ ] Remove from package.json
- [ ] Run `pnpm install` to clean lockfile
- [ ] Test that nothing breaks
- [ ] Update documentation

## Current Dependency Audit

### Root Dependencies (Main Builder App)

**UI Framework & Components** ✅ NEEDED
- `next`, `react`, `react-dom` - Core framework
- `@radix-ui/*` - UI primitives (AUDIT: Only keep what's used)
- `lucide-react` - Icons
- `tailwindcss`, `autoprefixer` - Styling

**Forms & Validation** ✅ NEEDED
- `react-hook-form` - Form management
- `@hookform/resolvers` - Form validation
- `zod` - Schema validation

**Utilities** ✅ NEEDED
- `clsx`, `tailwind-merge` - Class name utilities
- `class-variance-authority` - Component variants
- `date-fns` - Date utilities

**Analytics** ✅ NEEDED
- `@vercel/analytics` - Usage analytics

**Fonts** ✅ NEEDED
- `geist` - Typography

**Dev Tools** ✅ NEEDED
- `typescript`, `eslint`, `prettier` - Code quality
- `turbo` - Monorepo build system
- `@changesets/cli` - Version management
- `husky`, `lint-staged` - Git hooks
- `markdownlint-cli` - Documentation linting

**TO REMOVE** ❌
- `@storybook/*` - Should be in packages/ui only

**TO ADD LATER** (via TODO tasks)
- `@vercel/blob` - Phase 3 (Template storage)
- `@vercel/speed-insights` - Phase 1 (Performance)
- `@vercel/toolbar` - Phase 1 (Dev tools)
- `@next/bundle-analyzer` - Phase 5 (Optimization)
- `@vercel/flags` - Phase 7 (Feature flags)
- `@supabase/ssr` - Phase 1 (Database/Auth)
- `react-flow` - Phase 4 (Visual builder)
- `zustand` - Phase 4 (State management)

## Integration Management

### Integration Lifecycle

1. **Plan** - Add to TODO.md with phase
2. **Document** - Create integration guide in docs/guides/integrations/
3. **Install** - Add dependency to correct package.json
4. **Configure** - Set up environment variables and config
5. **Implement** - Write code that uses it
6. **Test** - Verify it works correctly
7. **Document Usage** - Update relevant docs
8. **Commit** - Atomic commit with clear message

### Integration Documentation Template

Each integration should have:

\`\`\`markdown
# [Integration Name] Integration

## Purpose
Why we're using this integration.

## Installation
\`\`\`bash
pnpm add [package-name]
\`\`\`

## Configuration
Environment variables needed, config files, etc.

## Usage
Code examples and patterns.

## Best Practices
How to use it correctly in this project.

## Troubleshooting
Common issues and solutions.
\`\`\`

## Keeping Dependencies in Sync

### Regular Audits

Run these commands monthly:

\`\`\`bash
# Check for outdated packages
pnpm outdated

# Check for security vulnerabilities
pnpm audit

# Check for unused dependencies
npx depcheck

# Check bundle size
pnpm build && npx bundle-analyzer
\`\`\`

### Update Strategy

- **Patch updates** (1.0.x) - Auto-update weekly
- **Minor updates** (1.x.0) - Review and update monthly
- **Major updates** (x.0.0) - Plan carefully, test thoroughly

### Version Pinning

- **Pin exact versions** for critical dependencies
- **Use ranges** (^) for dev dependencies
- **Lock file** - Always commit pnpm-lock.yaml

## Commands

\`\`\`bash
# Install dependencies
pnpm install

# Add dependency to root
pnpm add [package]

# Add dependency to specific package
pnpm add [package] --filter [package-name]

# Remove dependency
pnpm remove [package]

# Update all dependencies
pnpm update

# Clean install
pnpm clean && pnpm install

# Check what's using a dependency
pnpm why [package]
\`\`\`

## Red Flags

🚩 **Don't install if:**
- Last updated > 1 year ago
- Has known security vulnerabilities
- Bundle size > 100kb (without good reason)
- Duplicates existing functionality
- Has better alternatives
- You're not sure you need it

## Resources

- [Bundlephobia](https://bundlephobia.com) - Check bundle sizes
- [npm trends](https://npmtrends.com) - Compare packages
- [Snyk Advisor](https://snyk.io/advisor) - Security and quality scores
- [Can I Use](https://caniuse.com) - Browser compatibility
</parameter>
</invoke>
