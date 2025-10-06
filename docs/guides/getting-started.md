# Getting Started

## Prerequisites

- **Node.js**: 18.17 or later
- **pnpm**: 8.0 or later
- **Git**: For version control

## Installation

### 1. Clone the Repository

\`\`\`bash
git clone https://github.com/your-org/unorepo-builder.git
cd unorepo-builder
\`\`\`

### 2. Install Dependencies

\`\`\`bash
pnpm install
\`\`\`

This installs dependencies for all packages and apps in the monorepo.

### 3. Set Up Environment Variables

\`\`\`bash
cp env.example .env.local
\`\`\`

Edit `.env.local` with your configuration:

\`\`\`env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Vercel Blob
BLOB_READ_WRITE_TOKEN=your_blob_token
\`\`\`

### 4. Run Development Server

\`\`\`bash
pnpm dev
\`\`\`

This starts:
- Main builder app: http://localhost:3000
- app-000: http://localhost:3001
- app-001: http://localhost:3002

## Project Structure

\`\`\`
unorepo-builder/
├── app/              # Main Unorepo Builder platform
├── apps/
│   ├── app-000/      # Full-featured demo app
│   └── app-001/      # Lightweight demo app
├── packages/
│   ├── ui/           # Shared UI components
│   ├── config/       # Shared configurations
│   └── utils/        # Shared utilities
└── docs/             # Documentation
\`\`\`

## Common Commands

\`\`\`bash
# Development
pnpm dev              # Start all apps in dev mode
pnpm dev:main         # Start main builder app only
pnpm dev:app-000      # Start app-000 only

# Building
pnpm build            # Build all apps and packages
pnpm build:main       # Build main app only

# Testing
pnpm test             # Run all tests
pnpm test:watch       # Run tests in watch mode

# Linting
pnpm lint             # Lint all code
pnpm lint:fix         # Fix linting issues

# Type Checking
pnpm typecheck        # Check TypeScript types

# Documentation
pnpm lint:docs        # Lint markdown files
pnpm storybook        # Start Storybook (UI components)
\`\`\`

## Next Steps

1. Read [Development Guide](./development.md)
2. Review [Architecture Overview](../architecture/overview.md)
3. Check [Coding Standards](../standards/coding-standards.md)
4. Explore the [TODO list](../../TODO.md)

## Troubleshooting

### Port Already in Use

If you see "Port 3000 is already in use":

\`\`\`bash
# Kill the process using the port
lsof -ti:3000 | xargs kill -9
\`\`\`

### pnpm Install Fails

Clear cache and reinstall:

\`\`\`bash
pnpm store prune
rm -rf node_modules
pnpm install
\`\`\`

### Type Errors

Rebuild packages:

\`\`\`bash
pnpm build:packages
\`\`\`

## Getting Help

- Check [DEVELOPER_GUIDE.md](../../DEVELOPER_GUIDE.md)
- Review [docs/](../)
- Open an issue on GitHub
- Ask in team chat
