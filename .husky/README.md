# Husky Git Hooks

## Pre-commit Hook
- Run lint-staged to check code quality
- Ensure all staged files pass linting and formatting

## Pre-push Hook
- Run type checking
- Run tests
- Ensure code quality before pushing

## Commit Message Hook
- Enforce conventional commit format
- Validate commit message structure

## Post-commit Hook
- Update package versions if needed
- Generate changelog entries

## Post-merge Hook
- Install dependencies after merge
- Update lock files
- Run post-merge scripts

## Pre-rebase Hook
- Ensure working directory is clean
- Run tests before rebase
- Validate branch state

## Post-checkout Hook
- Install dependencies after checkout
- Update environment variables
- Run post-checkout scripts

## Post-merge Hook
- Install dependencies after merge
- Update lock files
- Run post-merge scripts

## Pre-rebase Hook
- Ensure working directory is clean
- Run tests before rebase
- Validate branch state

## Post-checkout Hook
- Install dependencies after checkout
- Update environment variables
- Run post-checkout scripts
