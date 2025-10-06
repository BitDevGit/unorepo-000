# Technology Stack Rationale

Comprehensive explanation of every technology choice in the Unorepo Builder.

## Core Framework

### Next.js 15 (App Router)

**Why**: Industry-leading React framework with best-in-class DX

**Alternatives Considered**:
- Remix: Great, but smaller ecosystem
- Vite + React Router: More setup required
- Nuxt: Vue-based, team knows React better

**Key Features**:
- Server Components for performance
- Built-in API routes
- Optimized image/font loading
- Vercel-native deployment

---

## Monorepo Management

### Turborepo

**Why**: Fastest build system with intelligent caching

**Alternatives Considered**:
- Nx: More features but heavier
- Lerna: Older, less maintained
- pnpm workspaces alone: No task orchestration

**Key Features**:
- Remote caching on Vercel
- Parallel task execution
- Dependency-aware builds
- Simple configuration

---

### pnpm

**Why**: Fastest, most efficient package manager

**Alternatives Considered**:
- npm: Slower, larger node_modules
- yarn: Good but pnpm is faster

**Key Features**:
- Disk space efficient
- Strict dependency resolution
- Fast installs
- Workspace support

---

## UI & Styling

### shadcn/ui

**Why**: Accessible, customizable components you own

**Alternatives Considered**:
- Material UI: Too opinionated
- Chakra UI: Runtime CSS-in-JS overhead
- Radix UI directly: More setup required

**Key Features**:
- Copy-paste components
- Full customization
- Accessibility built-in
- No runtime overhead

---

### Tailwind CSS v4

**Why**: Utility-first CSS with best performance

**Alternatives Considered**:
- CSS Modules: More boilerplate
- Styled Components: Runtime overhead
- Vanilla CSS: Hard to maintain

**Key Features**:
- Zero runtime
- Purged unused styles
- Design system in config
- Excellent DX

---

## State Management

### Zustand

**Why**: Simple, performant state management

**Alternatives Considered**:
- Redux: Too much boilerplate
- Jotai: Atomic but more complex
- Context API: Performance issues

**Key Features**:
- Minimal API
- No providers needed
- TypeScript support
- DevTools integration

---

## Database & Backend

### Supabase

**Why**: Complete backend with PostgreSQL, auth, and storage

**Alternatives Considered**:
- Firebase: NoSQL, vendor lock-in
- PlanetScale: MySQL, no auth
- Raw PostgreSQL: More setup

**Key Features**:
- PostgreSQL (relational)
- Built-in authentication
- Real-time subscriptions
- Row Level Security
- Storage included

---

### Vercel Blob

**Why**: Simple file storage with CDN

**Alternatives Considered**:
- S3: More complex setup
- Cloudinary: Expensive
- Supabase Storage: Using both

**Key Features**:
- Edge-cached
- Simple API
- Vercel-native
- Generous free tier

---

## Visual Builder

### React Flow

**Why**: Best library for node-based UIs

**Alternatives Considered**:
- Reaflow: Less maintained
- Custom solution: Too much work
- Excalidraw: Not for workflows

**Key Features**:
- Drag-and-drop nodes
- Custom node types
- Connection validation
- Minimap and controls

---

## Validation

### Zod

**Why**: TypeScript-first schema validation

**Alternatives Considered**:
- Yup: Less TypeScript support
- Joi: Node.js focused
- AJV: JSON Schema, verbose

**Key Features**:
- Type inference
- Composable schemas
- Great error messages
- Runtime + compile-time safety

---

## Documentation

### Storybook

**Why**: Industry standard for component documentation

**Alternatives Considered**:
- Docz: Less maintained
- Styleguidist: Older
- Custom docs: Too much work

**Key Features**:
- Visual component testing
- Interactive playground
- Addon ecosystem
- Snapshot testing

---

### Changesets

**Why**: Best tool for monorepo versioning

**Alternatives Considered**:
- Lerna: Older approach
- Manual versioning: Error-prone
- semantic-release: Less flexible

**Key Features**:
- Intent-based versioning
- Automated changelogs
- Monorepo-aware
- GitHub integration

---

## Code Quality

### TypeScript

**Why**: Type safety prevents bugs

**Alternatives Considered**:
- JavaScript: No type safety
- Flow: Less ecosystem support

**Key Features**:
- Compile-time errors
- Better IDE support
- Self-documenting code
- Refactoring confidence

---

### ESLint + Prettier

**Why**: Consistent code style and quality

**Alternatives Considered**:
- Just Prettier: No linting
- Just ESLint: No formatting
- Biome: Too new

**Key Features**:
- Automated formatting
- Error prevention
- Team consistency
- IDE integration

---

## Testing (Future)

### Vitest

**Why**: Fast, Vite-native testing

**Alternatives Considered**:
- Jest: Slower
- Mocha: More setup
- AVA: Less ecosystem

**Key Features**:
- Fast execution
- ESM support
- Compatible with Jest
- Watch mode

---

### Playwright

**Why**: Best E2E testing framework

**Alternatives Considered**:
- Cypress: Slower, more limitations
- Selenium: Outdated
- Puppeteer: Lower-level

**Key Features**:
- Multi-browser
- Auto-wait
- Parallel execution
- Great debugging

---

## CI/CD

### GitHub Actions

**Why**: Native to GitHub, free for public repos

**Alternatives Considered**:
- CircleCI: Extra service
- Travis CI: Less features
- GitLab CI: Not on GitLab

**Key Features**:
- Matrix builds
- Caching
- Secrets management
- Marketplace actions

---

## Deployment

### Vercel

**Why**: Best platform for Next.js

**Alternatives Considered**:
- Netlify: Less Next.js optimization
- AWS: More complex
- Railway: Less features

**Key Features**:
- Zero-config Next.js
- Preview deployments
- Edge network
- Analytics included
- Turborepo caching

---

## Summary

Our stack prioritizes:
1. **Developer Experience**: Fast, intuitive tools
2. **Performance**: Zero runtime overhead where possible
3. **Type Safety**: TypeScript everywhere
4. **Maintainability**: Simple, well-documented tools
5. **Scalability**: Monorepo-ready architecture

## See Also

- [Architecture Overview](./overview.md)
- [Development Guide](../guides/development.md)
- [Vercel Tools](../guides/vercel-tools.md)
