# Documentation Index

Welcome to the Unorepo Builder documentation! This index helps you find the right documentation for your needs.

## 📖 Quick Navigation

### Getting Started
- **[Getting Started Guide](./guides/getting-started.md)** - Installation, setup, and first steps
- **[Development Guide](./guides/development.md)** - Day-to-day development workflows
- **[Contributing Guide](../CONTRIBUTING.md)** - How to contribute to the project

### Architecture
- **[Architecture Overview](./architecture/overview.md)** - System design and structure
- **[Technology Stack](./architecture/tech-stack.md)** - Why we chose each technology
- **[Architecture Decisions](./architecture/decisions/)** - ADRs documenting key decisions
  - [ADR 001: Turborepo](./architecture/decisions/001-turborepo.md)
  - [ADR 002: Hybrid Structure](./architecture/decisions/002-hybrid-structure.md)
  - [ADR Template](./architecture/decisions/template.md)

### Development Guides
- **[Adding Packages](./guides/adding-packages.md)** - Create and manage workspace packages
- **[API Documentation](./guides/api-documentation.md)** - API documentation standards
- **[Dependency Management](./guides/dependency-management.md)** - Managing dependencies properly
- **[Integrations Guide](./guides/integrations.md)** - Adding Vercel integrations
- **[Vercel Tools](./guides/vercel-tools.md)** - Using Vercel ecosystem tools

### Standards
- **[Coding Standards](./standards/coding-standards.md)** - Code style and conventions

## 🎯 Documentation by Role

### New Contributors
1. Start with [Getting Started](./guides/getting-started.md)
2. Read [DEVELOPER_GUIDE.md](../DEVELOPER_GUIDE.md)
3. Review [CONTRIBUTING.md](../CONTRIBUTING.md)
4. Check [TODO.md](../TODO.md) for available tasks

### Developers
1. [Development Guide](./guides/development.md) - Daily workflows
2. [Coding Standards](./standards/coding-standards.md) - Code conventions
3. [Adding Packages](./guides/adding-packages.md) - Package management
4. [API Documentation](./guides/api-documentation.md) - API standards

### Architects
1. [Architecture Overview](./architecture/overview.md) - System design
2. [Technology Stack](./architecture/tech-stack.md) - Tech choices
3. [Architecture Decisions](./architecture/decisions/) - ADRs
4. [PROJECT.md](../PROJECT.md) - Vision and roadmap

### DevOps/Platform Engineers
1. [Vercel Tools](./guides/vercel-tools.md) - Vercel ecosystem
2. [Integrations Guide](./guides/integrations.md) - Adding integrations
3. [Dependency Management](./guides/dependency-management.md) - Dependency strategy
4. [Getting Started](./guides/getting-started.md) - Environment setup

## 📚 Documentation Structure

\`\`\`
docs/
├── README.md                          # This file - documentation index
├── architecture/                      # System architecture
│   ├── overview.md                   # Architecture overview
│   ├── tech-stack.md                 # Technology choices
│   └── decisions/                    # Architecture Decision Records
│       ├── 001-turborepo.md         # ADR: Turborepo choice
│       ├── 002-hybrid-structure.md  # ADR: Hybrid structure
│       └── template.md              # ADR template
├── guides/                           # How-to guides
│   ├── getting-started.md           # Setup and installation
│   ├── development.md               # Development workflows
│   ├── adding-packages.md           # Package management
│   ├── api-documentation.md         # API standards
│   ├── dependency-management.md     # Dependency strategy
│   ├── integrations.md              # Vercel integrations
│   └── vercel-tools.md              # Vercel tools usage
└── standards/                        # Standards and conventions
    └── coding-standards.md          # Code style guide
\`\`\`

## 🔍 Finding What You Need

### "How do I...?"
- **Set up the project?** → [Getting Started](./guides/getting-started.md)
- **Add a new package?** → [Adding Packages](./guides/adding-packages.md)
- **Add an integration?** → [Integrations Guide](./guides/integrations.md)
- **Follow code standards?** → [Coding Standards](./standards/coding-standards.md)
- **Document an API?** → [API Documentation](./guides/api-documentation.md)
- **Manage dependencies?** → [Dependency Management](./guides/dependency-management.md)
- **Use Vercel tools?** → [Vercel Tools](./guides/vercel-tools.md)

### "Why did we...?"
- **Choose Turborepo?** → [ADR 001](./architecture/decisions/001-turborepo.md)
- **Use hybrid structure?** → [ADR 002](./architecture/decisions/002-hybrid-structure.md)
- **Pick these technologies?** → [Technology Stack](./architecture/tech-stack.md)

### "What is...?"
- **The project vision?** → [PROJECT.md](../PROJECT.md)
- **The architecture?** → [Architecture Overview](./architecture/overview.md)
- **The current status?** → [TODO.md](../TODO.md)
- **The development process?** → [DEVELOPER_GUIDE.md](../DEVELOPER_GUIDE.md)

## 📝 Contributing to Documentation

### Documentation Standards
- Use clear, concise language
- Include code examples
- Add screenshots for UI features
- Keep formatting consistent
- Update this index when adding new docs

### Adding New Documentation
1. Create the file in the appropriate directory
2. Follow the existing structure and style
3. Add it to this index
4. Update relevant cross-references
5. Submit a PR with your changes

### Documentation Types

**Guides** (`docs/guides/`)
- Step-by-step instructions
- How-to articles
- Tutorials and walkthroughs

**Architecture** (`docs/architecture/`)
- System design documents
- Technical decisions (ADRs)
- Technology rationale

**Standards** (`docs/standards/`)
- Code conventions
- Best practices
- Style guides

## 🔄 Keeping Documentation Updated

Documentation should be updated when:
- Architecture changes
- New features are added
- Processes change
- Technologies are added/removed
- Best practices evolve

**Last Updated**: 2025-01-06  
**Documentation Version**: 1.0.0

---

**Need help?** Check [DEVELOPER_GUIDE.md](../DEVELOPER_GUIDE.md) or open an issue on GitHub.
