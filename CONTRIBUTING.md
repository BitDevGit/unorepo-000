# Contributing to Unorepo Builder

Thank you for your interest in contributing! This document provides guidelines for contributing to the project.

## 📋 Before You Start

1. **Read the Developer Guide**: Start with [DEVELOPER_GUIDE.md](./DEVELOPER_GUIDE.md) for complete context
2. **Check TODO.md**: See [TODO.md](./TODO.md) for available tasks and current priorities
3. **Review Project Vision**: Read [PROJECT.md](./PROJECT.md) to understand our goals

## 🎯 Ways to Contribute

### Code Contributions
- Implement features from TODO.md
- Fix bugs and issues
- Improve performance
- Add tests
- Refactor code

### Documentation
- Improve existing docs
- Add examples
- Fix typos
- Translate documentation

### Design
- UI/UX improvements
- Component designs
- Visual assets
- Accessibility enhancements

### Testing
- Write unit tests
- Add integration tests
- E2E test scenarios
- Bug reports

## 🚀 Getting Started

### 1. Fork & Clone
\`\`\`bash
# Fork the repository on GitHub
# Then clone your fork
git clone https://github.com/YOUR_USERNAME/unorepo-builder.git
cd unorepo-builder
\`\`\`

### 2. Set Up Development Environment
\`\`\`bash
# Install dependencies
pnpm install

# Copy environment variables
cp env.example .env.local

# Start development server
pnpm dev
\`\`\`

### 3. Create a Branch
\`\`\`bash
# Create feature branch
git checkout -b feat/your-feature-name

# Or bug fix branch
git checkout -b fix/bug-description
\`\`\`

## 📝 Coding Standards

### Commit Messages
We use [Conventional Commits](https://www.conventionalcommits.org/):

\`\`\`
feat: add package search functionality
fix: resolve template generation bug
docs: update developer guide
style: format code with prettier
refactor: simplify package validation
test: add tests for template engine
chore: update dependencies
\`\`\`

### Code Style
- Follow existing patterns in the codebase
- Use TypeScript for type safety
- Write meaningful variable and function names
- Add comments for complex logic
- Keep functions small and focused

See [DEVELOPER_GUIDE.md](./DEVELOPER_GUIDE.md#coding-standards) for detailed conventions.

### File Naming
- Components: PascalCase (`PackageCard.tsx`)
- Utilities: kebab-case (`format-date.ts`)
- Pages: kebab-case (`packages/page.tsx`)
- Hooks: camelCase with 'use' prefix (`usePackages.ts`)

## ✅ Pull Request Process

### 1. Before Submitting
- [ ] Code follows project conventions
- [ ] All tests pass (when testing is set up)
- [ ] No linting errors (`pnpm lint`)
- [ ] Types are correct (`pnpm type-check`)
- [ ] Code is formatted (`pnpm format`)
- [ ] Documentation updated if needed
- [ ] Commit messages follow conventions

### 2. Submit PR
\`\`\`bash
# Push your branch
git push origin feat/your-feature-name

# Create PR on GitHub with:
# - Clear title following conventional commits
# - Description of changes
# - Link to related issue (if applicable)
# - Screenshots (for UI changes)
\`\`\`

### 3. PR Template
\`\`\`markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Related Issue
Closes #123

## Testing
How to test these changes

## Screenshots (if applicable)
Add screenshots for UI changes

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex code
- [ ] Documentation updated
- [ ] No new warnings
- [ ] Tests added/updated
\`\`\`

### 4. Review Process
- Maintainers will review your PR
- CI/CD checks must pass
- Address feedback promptly
- Keep PR focused and small
- Be patient and respectful

## 🐛 Reporting Bugs

### Before Reporting
1. Check existing issues
2. Search closed issues
3. Try latest version
4. Verify it's reproducible

### Bug Report Template
\`\`\`markdown
## Description
Clear description of the bug

## Steps to Reproduce
1. Go to '...'
2. Click on '...'
3. See error

## Expected Behavior
What should happen

## Actual Behavior
What actually happens

## Environment
- OS: [e.g., macOS 14.0]
- Browser: [e.g., Chrome 120]
- Node: [e.g., 20.10.0]
- pnpm: [e.g., 8.15.0]

## Screenshots
If applicable

## Additional Context
Any other relevant information
\`\`\`

## 💡 Suggesting Features

### Feature Request Template
\`\`\`markdown
## Feature Description
Clear description of the feature

## Problem It Solves
What problem does this address?

## Proposed Solution
How should it work?

## Alternatives Considered
Other approaches you've thought about

## Additional Context
Mockups, examples, etc.
\`\`\`

## 🔐 Security Issues

**DO NOT** open public issues for security vulnerabilities.

Instead:
1. Email security@unorepo-builder.com (future)
2. Or see [SECURITY.md](.github/SECURITY.md)
3. We'll respond within 48 hours

## 📚 Documentation Contributions

### Documentation Standards
- Use clear, concise language
- Include code examples
- Add screenshots for UI features
- Keep formatting consistent
- Update table of contents

### Where to Contribute
- `README.md` - Quick start guide
- `DEVELOPER_GUIDE.md` - Development reference
- `docs/` - Technical documentation
- Code comments - Inline documentation

## 🎨 Design Contributions

### Design Guidelines
- Follow existing design system
- Use shadcn/ui components
- Maintain accessibility standards
- Provide Figma files or mockups
- Consider mobile responsiveness

## 🧪 Testing Contributions

### Testing Guidelines (Future)
- Write clear test descriptions
- Cover edge cases
- Keep tests focused
- Mock external dependencies
- Aim for high coverage

## 📊 Project Phases

We're currently in **Phase 1: Database & Auth**

See [TODO.md](./TODO.md) for:
- Current phase tasks
- Upcoming features
- Long-term roadmap

## 🤝 Code of Conduct

### Our Standards
- Be respectful and inclusive
- Welcome newcomers
- Accept constructive criticism
- Focus on what's best for the project
- Show empathy towards others

### Unacceptable Behavior
- Harassment or discrimination
- Trolling or insulting comments
- Personal or political attacks
- Publishing private information
- Unprofessional conduct

## 📞 Getting Help

### Resources
1. [DEVELOPER_GUIDE.md](./DEVELOPER_GUIDE.md) - Complete reference
2. [TODO.md](./TODO.md) - Current tasks
3. [PROJECT.md](./PROJECT.md) - Project vision
4. GitHub Issues - Ask questions
5. GitHub Discussions (future)

### Questions?
- Check documentation first
- Search existing issues
- Ask in GitHub Discussions (future)
- Create a new issue

## 🙏 Recognition

Contributors will be:
- Listed in CONTRIBUTORS.md (future)
- Mentioned in release notes
- Credited in documentation
- Invited to contributor discussions

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

**Thank you for contributing to Unorepo Builder!** 🎉

Your contributions help make monorepo management visual, intuitive, and accessible to everyone.
