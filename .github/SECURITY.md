# GitHub Security Configuration

## Branch Protection Rules

### Main Branch Protection
- **Required status checks**: All CI/CD jobs must pass
- **Require up-to-date branches**: Yes
- **Require pull request reviews**: 2 reviewers minimum
- **Dismiss stale reviews**: Yes
- **Require review from code owners**: Yes
- **Restrict pushes that create files**: Yes
- **Allow force pushes**: No
- **Allow deletions**: No

### Develop Branch Protection
- **Required status checks**: Lint and build jobs must pass
- **Require up-to-date branches**: Yes
- **Require pull request reviews**: 1 reviewer minimum
- **Dismiss stale reviews**: Yes
- **Allow force pushes**: No
- **Allow deletions**: No

## Required Status Checks
- `lint` - Lint & Type Check
- `build-and-test` - Build & Test
- `security` - Security Audit
- `codeql` - CodeQL Analysis
- `dependency-scan` - Dependency Vulnerability Scan

## Code Owners
```
# Global code owners
* @team-leads

# Package-specific owners
/packages/ui/ @ui-team
/packages/config/ @devops-team
/packages/schemas/ @backend-team
/packages/types/ @backend-team
/packages/utils/ @backend-team
/packages/registry/ @backend-team
/packages/generator/ @backend-team
/packages/flow-nodes/ @ui-team

# App-specific owners
/apps/web/ @frontend-team

# Configuration files
/.github/ @devops-team
/turbo.json @devops-team
/pnpm-workspace.yaml @devops-team
```

## Security Policies

### Dependency Management
- All dependencies must be approved by security team
- Regular security audits required
- Vulnerable dependencies must be updated within 48 hours
- License compliance checks required

### Access Control
- Repository access limited to team members only
- External contributors require approval
- Admin access restricted to team leads
- Regular access reviews required

### Secrets Management
- All secrets stored in GitHub Secrets
- No secrets in code or configuration files
- Regular secret rotation required
- Access logging enabled

### Code Review Requirements
- All code changes require review
- Security-sensitive changes require security team review
- Database schema changes require DBA review
- Infrastructure changes require DevOps review

## Incident Response
- Security incidents reported to security team immediately
- Automated alerts for failed security checks
- Regular security training for team members
- Incident response playbook maintained

## Compliance
- SOC 2 Type II compliance
- GDPR compliance for user data
- Regular security assessments
- Penetration testing annually
