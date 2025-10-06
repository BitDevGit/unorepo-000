# Unorepo Builder

> **A visual monorepo orchestration platform for managing UI components, design systems, and packages.**

Transform monorepo management from command-line complexity into an intuitive, drag-and-drop experience.

---

## 🚀 Quick Start

\`\`\`bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Open http://localhost:3000
\`\`\`

## 📚 Documentation Hub

**New here? Start with the Developer Guide - it's your complete reference.**

| Document | Purpose | Audience |
|----------|---------|----------|
| **[DEVELOPER_GUIDE.md](./DEVELOPER_GUIDE.md)** | 🎯 **START HERE** - Complete development reference | All developers |
| [CONTRIBUTING.md](./CONTRIBUTING.md) | How to contribute code | Contributors |
| [TODO.md](./TODO.md) | Current tasks & roadmap | Team members |
| [PROJECT.md](./PROJECT.md) | Vision & architecture overview | Stakeholders |

**Technical Documentation:**
- [Architecture Overview](./docs/architecture/overview.md) - Monorepo architecture & design
- [Tech Stack](./docs/architecture/tech-stack.md) - Technology choices & rationale
- [Getting Started](./docs/guides/getting-started.md) - Setup & installation guide
- [Development Guide](./docs/guides/development.md) - Development workflows
- [Adding Packages](./docs/guides/adding-packages.md) - How to add dependencies
- [API Documentation](./docs/guides/api-documentation.md) - API standards & guidelines
- [Vercel Tools](./docs/guides/vercel-tools.md) - Vercel ecosystem integration
- [Coding Standards](./docs/standards/coding-standards.md) - Code conventions & style guide
- [Deployment Guide](./docs/deployment.md) - How to deploy to production

---

## 🎯 What We're Building

A platform that enables teams to:
- 📦 **Browse packages** through an intuitive UI
- 🎨 **Compose projects** by dragging and dropping components
- 🔗 **Visualize dependencies** and relationships
- ⚡ **Generate code** with best practices built-in
- 🚀 **Deploy instantly** to Vercel with one click

---

## 🏗️ Tech Stack

- **Monorepo**: Turborepo + pnpm workspaces
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript 5.x
- **Styling**: Tailwind CSS v4 + shadcn/ui
- **Database**: Supabase (PostgreSQL)
- **Storage**: Vercel Blob
- **Deployment**: Vercel

**Why these choices?** See [Tech Stack Documentation](./docs/architecture/tech-stack.md)

---

## 📁 Monorepo Structure

\`\`\`
unorepo-builder/
├── app/                    # Next.js App Router (Builder Platform)
│   ├── page.tsx           # Homepage
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ui/                # shadcn/ui components
│   └── ...                # Custom components
├── lib/                   # Utilities & helpers
├── hooks/                 # Custom React hooks
├── public/                # Static assets
├── apps/                  # Demo applications
│   ├── app-000/          # Full-featured demo (uses all packages)
│   └── app-001/          # Lightweight demo (minimal dependencies)
├── packages/              # Shared workspace packages
│   ├── ui/               # Shared UI components + Storybook
│   ├── utils/            # Shared utilities
│   └── config/           # Shared TypeScript configs
├── docs/                  # Organized documentation
│   ├── architecture/     # Architecture docs & ADRs
│   ├── guides/           # Development guides
│   └── standards/        # Coding standards
├── .github/               # GitHub config & workflows
└── ...config files
\`\`\`

**Why this structure?**
- Main Next.js app at root (Builder Platform) for v0 compatibility
- `apps/` contains demo applications showing monorepo usage patterns
- `packages/` for shared code across applications
- Ready to scale with additional apps and packages

See [Architecture Overview](./docs/architecture/overview.md) for details.

---

## 🛠️ Development

### Prerequisites
- Node.js 20.x or later
- pnpm 9.x or later
- Git

### Available Commands

\`\`\`bash
# Development
pnpm dev              # Start dev server (Next.js)
pnpm build            # Build for production
pnpm start            # Start production server
pnpm lint             # Run ESLint
pnpm format           # Format with Prettier
pnpm type-check       # TypeScript type checking

# Quality
pnpm lint:fix         # Fix linting issues
pnpm format:check     # Check formatting
pnpm audit            # Security audit

# Cleanup
pnpm clean            # Remove build artifacts
\`\`\`

### Environment Variables

Copy `env.example` to `.env.local` and configure:

\`\`\`bash
cp env.example .env.local
\`\`\`

Required variables are added automatically when you connect integrations via v0.

See [DEVELOPER_GUIDE.md](./DEVELOPER_GUIDE.md#environment-variables) for details.

---

## 📊 Current Status

**Phase**: Phase 1 - Foundation  
**Progress**: Setup Complete ✅

### ✅ Completed
- ✅ Turborepo monorepo setup
- ✅ Next.js 15 with App Router
- ✅ Tailwind CSS v4 + shadcn/ui
- ✅ TypeScript configuration
- ✅ ESLint + Prettier + Husky
- ✅ CI/CD workflows (GitHub Actions)
- ✅ Comprehensive documentation
- ✅ Vercel Blob integration

### 🚧 Next Up
- Database integration (Supabase)
- Authentication system
- Package registry foundation
- Visual builder prototype

See [TODO.md](./TODO.md) for detailed roadmap.

---

## 🤝 Contributing

We welcome contributions! Here's how:

1. **Read the guides**:
   - [DEVELOPER_GUIDE.md](./DEVELOPER_GUIDE.md) - Complete development reference
   - [CONTRIBUTING.md](./CONTRIBUTING.md) - Contribution guidelines
   - [Coding Standards](./docs/standards/coding-standards.md) - Code style guide

2. **Check available tasks**: [TODO.md](./TODO.md)

3. **Set up your environment**:
   \`\`\`bash
   git clone <repo-url>
   cd unorepo-builder
   pnpm install
   pnpm dev
   \`\`\`

4. **Make your changes**:
   - Follow coding standards
   - Write meaningful commits (Conventional Commits)
   - Update documentation
   - Add tests where appropriate

5. **Submit a PR**:
   - Clear description
   - Link related issues
   - Wait for review

See [CONTRIBUTING.md](./CONTRIBUTING.md) for detailed guidelines.

---

## 🚀 Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

**Via v0:**
1. Click "Publish" button in v0 UI
2. Configure environment variables
3. Deploy!

**Via CLI:**
\`\`\`bash
# Install Vercel CLI
pnpm add -g vercel

# Deploy
vercel --prod
\`\`\`

See [Deployment Guide](./docs/deployment.md) for detailed instructions.

---

## 🔐 Security

Found a security vulnerability? **Do not** open a public issue.

See [.github/SECURITY.md](.github/SECURITY.md) for reporting instructions.

---

## 📄 License

MIT License - see [LICENSE](./LICENSE) for details.

---

## 🙏 Acknowledgments

Built with:
- [Next.js](https://nextjs.org/) - React framework
- [Turborepo](https://turbo.build/) - Monorepo tool
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Supabase](https://supabase.com/) - Database & auth
- [Vercel](https://vercel.com/) - Deployment platform

---

## 📞 Support

- 📖 **Documentation**: [DEVELOPER_GUIDE.md](./DEVELOPER_GUIDE.md)
- 🐛 **Bug Reports**: [GitHub Issues](https://github.com/yourusername/unorepo-builder/issues)
- 🔒 **Security**: [SECURITY.md](.github/SECURITY.md)

---

## 🗺️ Roadmap

### Phase 1: Foundation ✅
- Monorepo setup
- Next.js + TypeScript
- CI/CD pipelines

### Phase 2: Database & Auth (Current)
- Supabase integration
- Authentication system
- Database schema

### Phase 3: Package Registry
- CRUD operations
- Search & filtering
- Metadata management

### Phase 4: Templates
- Template management
- Template engine
- Preview system

### Phase 5: Visual Builder
- React Flow integration
- Drag-and-drop interface
- Real-time validation

### Phase 6: Generator
- Code generation
- Build pipeline
- Preview system

### Phase 7: Git Integration
- GitHub connection
- Deployment automation
- CI/CD setup

See [PROJECT.md](./PROJECT.md) for complete vision and [TODO.md](./TODO.md) for detailed tasks.

---

**Built with ❤️ by the Unorepo Builder team**

*Making monorepo management visual, intuitive, and accessible to everyone.*
