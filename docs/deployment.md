# Deployment Guide

Complete guide for deploying Unorepo Builder to production.

---

## Table of Contents

- [Prerequisites](#prerequisites)
- [Vercel Deployment](#vercel-deployment)
- [Environment Variables](#environment-variables)
- [Database Setup](#database-setup)
- [Post-Deployment](#post-deployment)
- [Monitoring](#monitoring)
- [Troubleshooting](#troubleshooting)

---

## Prerequisites

Before deploying, ensure you have:

- ✅ Vercel account
- ✅ Supabase project (for database)
- ✅ GitHub repository
- ✅ All environment variables ready
- ✅ Production build tested locally

---

## Vercel Deployment

### Option 1: Deploy via v0 (Recommended)

1. **Click "Publish" in v0 UI**
   - Automatically creates Vercel project
   - Configures build settings
   - Sets up environment variables

2. **Configure Integrations**
   - Add Supabase integration
   - Add Vercel Blob integration
   - Configure environment variables

3. **Deploy**
   - Click "Deploy to Production"
   - Wait for build to complete
   - Visit your production URL

### Option 2: Deploy via Vercel Dashboard

1. **Import Repository**
   \`\`\`
   https://vercel.com/new
   \`\`\`
   - Select your GitHub repository
   - Choose "Next.js" framework preset

2. **Configure Build Settings**
   - Framework: Next.js
   - Build Command: `pnpm build`
   - Output Directory: `.next`
   - Install Command: `pnpm install`
   - Root Directory: `./` (root)

3. **Add Environment Variables**
   - Copy from `env.example`
   - Add production values
   - See [Environment Variables](#environment-variables) section

4. **Deploy**
   - Click "Deploy"
   - Wait for build to complete

### Option 3: Deploy via CLI

\`\`\`bash
# Install Vercel CLI
pnpm add -g vercel

# Login to Vercel
vercel login

# Link project (first time only)
vercel link

# Deploy to preview
vercel

# Deploy to production
vercel --prod
\`\`\`

---

## Environment Variables

### Required Variables

Add these in Vercel Project Settings → Environment Variables:

#### Database (Supabase)
\`\`\`bash
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
\`\`\`

#### Storage (Vercel Blob)
\`\`\`bash
BLOB_READ_WRITE_TOKEN=vercel_blob_token
\`\`\`

#### Authentication (Future)
\`\`\`bash
NEXTAUTH_URL=https://your-domain.vercel.app
NEXTAUTH_SECRET=your_secret_key
\`\`\`

#### GitHub Integration (Future)
\`\`\`bash
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
GITHUB_TOKEN=your_github_token
\`\`\`

#### Analytics (Optional)
\`\`\`bash
NEXT_PUBLIC_GA_ID=your_google_analytics_id
\`\`\`

### Environment Variable Scopes

Set appropriate scopes for each variable:
- **Production**: Production deployments only
- **Preview**: Preview deployments (PRs)
- **Development**: Local development (not needed in Vercel)

---

## Database Setup

### 1. Create Supabase Project

\`\`\`bash
# Go to https://supabase.com/dashboard
# Click "New Project"
# Note your project URL and keys
\`\`\`

### 2. Run Database Migrations

\`\`\`bash
# Install Supabase CLI
pnpm add -g supabase

# Login
supabase login

# Link project
supabase link --project-ref your-project-ref

# Push schema
supabase db push
\`\`\`

### 3. Set Up Row Level Security (RLS)

\`\`\`sql
-- Enable RLS on all tables
ALTER TABLE packages ENABLE ROW LEVEL SECURITY;
ALTER TABLE templates ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

-- Create policies (example)
CREATE POLICY "Users can read all packages"
  ON packages FOR SELECT
  USING (true);

CREATE POLICY "Users can create their own projects"
  ON projects FOR INSERT
  WITH CHECK (auth.uid() = user_id);
\`\`\`

### 4. Seed Initial Data (Optional)

\`\`\`bash
# Run seed script
pnpm db:seed
\`\`\`

---

## Post-Deployment

### 1. Verify Deployment

- ✅ Visit production URL
- ✅ Check homepage loads
- ✅ Test authentication (when implemented)
- ✅ Verify database connection
- ✅ Test API routes

### 2. Configure Custom Domain (Optional)

\`\`\`bash
# Via Vercel Dashboard
# Project Settings → Domains → Add Domain
# Follow DNS configuration instructions
\`\`\`

### 3. Set Up Monitoring

- Enable Vercel Analytics
- Configure error tracking (Sentry)
- Set up uptime monitoring
- Configure alerts

### 4. Enable Security Features

- Configure security headers
- Enable rate limiting
- Set up CORS policies
- Configure CSP headers

---

## Monitoring

### Vercel Analytics

Automatically enabled for all Vercel projects:
- Page views
- Web Vitals (CLS, FID, LCP)
- User sessions
- Geographic data

### Speed Insights

\`\`\`typescript
// Already configured in app/layout.tsx
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

### Error Tracking (Future)

\`\`\`bash
# Install Sentry
pnpm add @sentry/nextjs

# Configure
npx @sentry/wizard@latest -i nextjs
\`\`\`

---

## Troubleshooting

### Build Failures

**Issue**: Build fails with dependency errors
\`\`\`bash
# Solution: Clear cache and rebuild
vercel --force
\`\`\`

**Issue**: TypeScript errors in build
\`\`\`bash
# Solution: Run type check locally first
pnpm type-check
\`\`\`

### Runtime Errors

**Issue**: Environment variables not found
\`\`\`bash
# Solution: Verify variables are set in Vercel dashboard
# Check variable names match exactly (case-sensitive)
# Ensure NEXT_PUBLIC_ prefix for client-side variables
\`\`\`

**Issue**: Database connection fails
\`\`\`bash
# Solution: Verify Supabase credentials
# Check RLS policies allow access
# Verify service role key for server-side operations
\`\`\`

### Performance Issues

**Issue**: Slow page loads
\`\`\`bash
# Solution: Enable caching
# Optimize images with next/image
# Use ISR for static pages
# Enable Vercel Edge Network
\`\`\`

**Issue**: High bundle size
\`\`\`bash
# Solution: Analyze bundle
pnpm build
pnpm analyze

# Use dynamic imports for large components
# Remove unused dependencies
\`\`\`

---

## Rollback

### Via Vercel Dashboard

1. Go to Deployments
2. Find previous working deployment
3. Click "..." → "Promote to Production"

### Via CLI

\`\`\`bash
# List deployments
vercel ls

# Rollback to specific deployment
vercel rollback [deployment-url]
\`\`\`

---

## CI/CD Pipeline

### GitHub Actions

Automatic deployment on:
- **Push to main**: Deploy to production
- **Pull requests**: Deploy preview
- **Tags**: Deploy specific versions

See `.github/workflows/deploy.yml` for configuration.

### Manual Deployment

\`\`\`bash
# Deploy specific branch
vercel --prod --branch feature-branch

# Deploy with specific commit
vercel --prod --commit abc123
\`\`\`

---

## Security Checklist

Before going live:

- [ ] All secrets in environment variables (not in code)
- [ ] RLS enabled on all database tables
- [ ] CORS configured properly
- [ ] Rate limiting enabled
- [ ] Security headers configured
- [ ] HTTPS enforced
- [ ] CSP headers set
- [ ] Authentication tested
- [ ] Authorization tested
- [ ] Input validation working
- [ ] Error messages don't leak sensitive info

---

## Performance Checklist

- [ ] Images optimized with next/image
- [ ] Fonts optimized with next/font
- [ ] Bundle size analyzed
- [ ] Core Web Vitals passing
- [ ] Caching configured
- [ ] ISR/SSG used where appropriate
- [ ] API routes optimized
- [ ] Database queries optimized
- [ ] CDN configured

---

## Support

**Issues?**
- Check [Troubleshooting](#troubleshooting) section
- Review Vercel deployment logs
- Check Supabase logs
- Open GitHub issue

**Need Help?**
- Vercel Support: https://vercel.com/support
- Supabase Support: https://supabase.com/support
- GitHub Issues: [Your repo]/issues

---

**Last Updated**: 2025-01-06  
**Status**: Ready for Phase 1 deployment
