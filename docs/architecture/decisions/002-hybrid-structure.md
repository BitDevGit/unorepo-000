# ADR 002: Hybrid Monorepo Structure

**Status**: Accepted  
**Date**: 2025-01-06  
**Deciders**: Core Team

## Context

We need to balance monorepo best practices with v0's expectations for Next.js apps at the root level, while also supporting future multi-app scenarios.

## Decision

We will use a hybrid structure:
- Main builder app at root (`/app`)
- Additional apps in `/apps` folder
- Shared code in `/packages` folder

## Rationale

### Why Hybrid?

1. **v0 Compatibility**: v0 expects Next.js app at root for preview
2. **Monorepo Benefits**: Still get shared packages and multi-app support
3. **Clear Separation**: Root app is THE platform, apps/ are examples/additions
4. **Scalability**: Can add more apps without restructuring

### Structure

\`\`\`
unorepo-builder/
├── app/              # Main builder platform (Next.js)
├── apps/             # Additional apps (demos, docs, api)
├── packages/         # Shared code
└── docs/             # Documentation
\`\`\`

## Consequences

### Positive
- Works seamlessly with v0 preview
- Clear distinction between platform and generated apps
- Easy to understand for developers
- Supports future growth

### Negative
- Slightly unconventional (most monorepos put everything in apps/)
- Need to document this clearly to avoid confusion

## Implementation

The root `app/` directory contains the Unorepo Builder platform itself. The `apps/` directory contains example applications and future additions like docs sites or APIs.

## References

- [Next.js App Router](https://nextjs.org/docs/app)
- [Turborepo Handbook](https://turbo.build/repo/docs/handbook)
