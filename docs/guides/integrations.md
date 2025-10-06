# Integrations Guide

This guide explains how to add and use integrations in the Unorepo Builder platform.

## Available Integrations

The following integrations are available but **not required** for basic functionality:

### Storage

#### Vercel Blob
**Status**: Not configured (optional)  
**Use case**: File uploads, image storage, asset management  
**When to add**: When you need to store user-uploaded files or generated assets

\`\`\`bash
# To add Blob integration:
# 1. Go to Project Settings > Integrations
# 2. Click "Add Integration"
# 3. Select "Blob"
# 4. Follow the setup wizard
\`\`\`

**Usage example** (after integration is added):
\`\`\`typescript
import { put } from '@vercel/blob'

// Upload a file
const blob = await put('filename.png', file, {
  access: 'public',
})
\`\`\`

### Database

#### Supabase
**Status**: Not configured (optional)  
**Use case**: PostgreSQL database, authentication, real-time subscriptions  
**When to add**: When you need database functionality for the builder platform

#### Neon
**Status**: Not configured (optional)  
**Use case**: Serverless PostgreSQL database  
**When to add**: Alternative to Supabase for database needs

### Payments

#### Stripe
**Status**: Not configured (optional)  
**Use case**: Payment processing, subscriptions  
**When to add**: When you want to monetize the platform

## Integration Best Practices

### 1. Add Only When Needed
Don't add integrations until you actually need them. Each integration adds:
- Environment variables to manage
- Additional dependencies
- Potential security considerations

### 2. Use Environment Variables
All integrations use environment variables that are automatically added when you configure them:

\`\`\`bash
# Example: Blob integration adds
BLOB_READ_WRITE_TOKEN=...

# Example: Supabase integration adds
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
SUPABASE_SERVICE_ROLE_KEY=...
\`\`\`

### 3. Document Integration Usage
When you add an integration, document:
- Why you added it
- Where it's used in the codebase
- Any setup steps required
- Environment variables needed

### 4. Test Locally First
Before deploying with integrations:
1. Test locally with development credentials
2. Verify all functionality works
3. Check error handling
4. Review security implications

## Current Status

**Active Integrations**: None  
**Reason**: The platform is in Phase 1 (Foundation) and doesn't require external integrations yet.

**Future Integrations** (planned by phase):
- **Phase 2-3**: Supabase (for package registry database)
- **Phase 4**: Vercel Blob (for template storage)
- **Phase 5+**: Stripe (for marketplace/monetization)

## Adding Your First Integration

When you're ready to add an integration:

1. **Identify the need**: What problem are you solving?
2. **Choose the integration**: Which service best fits your needs?
3. **Add via UI**: Use Project Settings > Integrations
4. **Update code**: Import and use the integration SDK
5. **Test thoroughly**: Verify functionality in development
6. **Document**: Update this guide with your usage

## Troubleshooting

### Integration Popup Appearing
If you see an integration popup but don't need the integration:
- **Cause**: Code references an integration SDK without using it
- **Solution**: Remove unused integration imports from package.json

### Environment Variables Missing
If you get errors about missing environment variables:
- **Cause**: Integration not configured in Project Settings
- **Solution**: Add the integration via Project Settings > Integrations

### Integration Not Working Locally
If integration works in production but not locally:
- **Cause**: Environment variables not synced
- **Solution**: Run `vercel env pull` to sync environment variables

## Resources

- [Vercel Integrations Documentation](https://vercel.com/docs/integrations)
- [Vercel Blob Documentation](https://vercel.com/docs/storage/vercel-blob)
- [Supabase Documentation](https://supabase.com/docs)
- [Stripe Documentation](https://stripe.com/docs)
