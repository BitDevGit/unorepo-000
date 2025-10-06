# @unorepo/ui

Shared UI component library built with shadcn/ui and Tailwind CSS.

## Overview

This package contains reusable React components used across all apps in the monorepo. Components are built with:
- **shadcn/ui** - High-quality, accessible components
- **Radix UI** - Unstyled, accessible primitives
- **Tailwind CSS** - Utility-first styling
- **TypeScript** - Full type safety

## Installation

This package is part of the monorepo workspace:

\`\`\`json
{
  "dependencies": {
    "@unorepo/ui": "workspace:*"
  }
}
\`\`\`

## Usage

\`\`\`typescript
import { Button, Card, Dialog } from '@unorepo/ui'

export function MyComponent() {
  return (
    <Card>
      <Button variant="default">Click me</Button>
    </Card>
  )
}
\`\`\`

## Available Components

### Layout
- Card
- Separator
- Tabs
- Accordion
- Collapsible

### Forms
- Button
- Input
- Label
- Checkbox
- Radio Group
- Select
- Switch
- Slider
- Textarea

### Overlays
- Dialog
- Alert Dialog
- Popover
- Tooltip
- Dropdown Menu
- Context Menu
- Hover Card

### Feedback
- Alert
- Toast
- Progress

### Navigation
- Navigation Menu
- Menubar

### Data Display
- Avatar
- Badge
- Table
- Calendar
- Charts (Recharts)

## Storybook

View all components in Storybook:

\`\`\`bash
pnpm storybook
\`\`\`

This will open Storybook at http://localhost:6006

## Development

\`\`\`bash
# Type checking
pnpm type-check

# Linting
pnpm lint

# Build Storybook
pnpm build-storybook
\`\`\`

## Adding New Components

1. Create component file in \`components/\`
2. Export from \`index.ts\`
3. Add Storybook story
4. Update this README

Example:

\`\`\`typescript
// components/my-component/my-component.tsx
export function MyComponent() {
  return <div>My Component</div>
}

// components/my-component/my-component.stories.tsx
import type { Meta, StoryObj } from '@storybook/react'
import { MyComponent } from './my-component'

const meta = {
  title: 'Components/MyComponent',
  component: MyComponent,
} satisfies Meta<typeof MyComponent>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
\`\`\`

## Contributing

See [CONTRIBUTING.md](../../CONTRIBUTING.md) for guidelines.

## License

Private package - not for external use.
