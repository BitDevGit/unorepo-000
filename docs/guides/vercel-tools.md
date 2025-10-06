# Vercel Tools Integration

Comprehensive guide for integrating Vercel tools and packages into the monorepo.

## Overview

This guide covers all Vercel-native tools and when to use them in your development workflow.

## Analytics & Monitoring

### @vercel/analytics

**Purpose**: Real-time web analytics and user insights

**When to use**: Production apps that need user behavior tracking

**Integration**:

\`\`\`bash
pnpm add @vercel/analytics
\`\`\`

\`\`\`typescript
// app/layout.tsx
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
\`\`\`

**Phase**: Phase 1 (Foundation) - Add to main builder app

---

### @vercel/speed-insights

**Purpose**: Core Web Vitals monitoring and performance tracking

**When to use**: All production apps

**Integration**:

\`\`\`bash
pnpm add @vercel/speed-insights
\`\`\`

\`\`\`typescript
// app/layout.tsx
import { SpeedInsights } from '@vercel/speed-insights/next'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}
\`\`\`

**Phase**: Phase 1 (Foundation)

---

## Development Tools

### @vercel/toolbar

**Purpose**: Development toolbar with deployment info and preview controls

**When to use**: Development environment for team collaboration

**Integration**:

\`\`\`bash
pnpm add @vercel/toolbar
\`\`\`

\`\`\`typescript
// app/layout.tsx
import { VercelToolbar } from '@vercel/toolbar/next'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        {process.env.NODE_ENV === 'development' && <VercelToolbar />}
      </body>
    </html>
  )
}
\`\`\`

**Phase**: Phase 2 (Package Registry)

---

## Storage & Data

### @vercel/blob

**Purpose**: File storage with CDN and edge caching

**When to use**: Storing templates, user uploads, generated files

**Integration**:

\`\`\`bash
pnpm add @vercel/blob
\`\`\`

\`\`\`typescript
// app/api/upload/route.ts
import { put } from '@vercel/blob'

export async function POST(request: Request) {
  const { searchParams } = new URL(request.url)
  const filename = searchParams.get('filename')
  
  const blob = await put(filename, request.body, {
    access: 'public',
  })
  
  return Response.json(blob)
}
\`\`\`

**Environment Variables**:
- `BLOB_READ_WRITE_TOKEN` (auto-configured via integration)

**Phase**: Phase 3 (Templates) - For storing template files

---

## Performance

### @next/bundle-analyzer

**Purpose**: Visualize bundle sizes and optimize

**When to use**: Regular performance audits

**Integration**:

\`\`\`bash
pnpm add @next/bundle-analyzer
\`\`\`

\`\`\`javascript
// next.config.mjs
import bundleAnalyzer from '@next/bundle-analyzer'

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

export default withBundleAnalyzer({
  // your config
})
\`\`\`

**Usage**:
\`\`\`bash
ANALYZE=true pnpm build
\`\`\`

**Phase**: Phase 2 onwards - Regular optimization

---

### @next/third-parties

**Purpose**: Optimized third-party script loading

**When to use**: Loading analytics, ads, or external scripts

**Integration**:

\`\`\`typescript
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <GoogleAnalytics gaId="G-XYZ" />
      </body>
    </html>
  )
}
\`\`\`

**Phase**: Phase 4+ (as needed)

---

## Image Generation

### @vercel/og

**Purpose**: Dynamic Open Graph image generation

**When to use**: Social sharing previews for packages, templates

**Integration**:

\`\`\`bash
pnpm add @vercel/og
\`\`\`

\`\`\`typescript
// app/api/og/route.tsx
import { ImageResponse } from '@vercel/og'

export async function GET(request: Request) {
  return new ImageResponse(
    (
      <div style={{ display: 'flex' }}>
        <h1>Unorepo Builder</h1>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
\`\`\`

**Phase**: Phase 3 (Templates) - For template previews

---

## Feature Management

### @vercel/flags (Beta)

**Purpose**: Feature flags and A/B testing

**When to use**: Gradual feature rollouts, experimentation

**Integration**:

\`\`\`bash
pnpm add @vercel/flags
\`\`\`

\`\`\`typescript
import { flag } from '@vercel/flags/next'

export const showNewBuilder = flag({
  key: 'show-new-builder',
  decide: () => false, // or your logic
})
\`\`\`

**Phase**: Phase 5+ (Advanced features)

---

## Monorepo-Specific Tools

### @changesets/cli

**Purpose**: Version management and changelog generation

**When to use**: Managing package versions in monorepo

**Integration**: Already configured! See `.changeset/config.json`

**Usage**:

\`\`\`bash
# Create a changeset
pnpm changeset

# Version packages
pnpm changeset version

# Publish (if public)
pnpm changeset publish
\`\`\`

**Phase**: Phase 1 (Foundation) - Already set up

---

### @turbo/gen

**Purpose**: Code generation for packages and components

**When to use**: Scaffolding new packages consistently

**Integration**:

\`\`\`bash
pnpm add @turbo/gen -D
\`\`\`

\`\`\`typescript
// turbo/generators/config.ts
import type { PlopTypes } from '@turbo/gen'

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setGenerator('package', {
    description: 'Generate a new package',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Package name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'packages/{{name}}/package.json',
        templateFile: 'templates/package.json.hbs',
      },
    ],
  })
}
\`\`\`

**Phase**: Phase 2+ (when adding multiple packages)

---

## Installation Priority

### Must-Have (Phase 1)
1. ✅ @vercel/analytics
2. ✅ @vercel/speed-insights
3. ✅ @changesets/cli

### High Priority (Phase 2-3)
4. @vercel/blob
5. @vercel/toolbar
6. @next/bundle-analyzer

### Nice-to-Have (Phase 4+)
7. @vercel/og
8. @turbo/gen
9. @next/third-parties

### Advanced (Phase 5+)
10. @vercel/flags

## See Also

- [Development Guide](./development.md)
- [Deployment Guide](./deployment.md)
- [Architecture Overview](../architecture/overview.md)
