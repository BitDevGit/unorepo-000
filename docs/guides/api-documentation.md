# API Documentation Guide

This guide explains how to document APIs in the Unorepo Builder project.

## Overview

All APIs should be documented consistently using:
- **JSDoc comments** for TypeScript/JavaScript code
- **OpenAPI/Swagger** for REST APIs (future)
- **Markdown files** for high-level API guides

## JSDoc Standards

### Functions

\`\`\`typescript
/**
 * Fetches a package by ID from the registry
 * 
 * @param id - The unique package identifier
 * @param options - Optional fetch configuration
 * @returns Promise resolving to the package data
 * @throws {PackageNotFoundError} When package doesn't exist
 * @throws {NetworkError} When network request fails
 * 
 * @example
 * \`\`\`typescript
 * const pkg = await fetchPackage('ui-components')
 * console.log(pkg.name)
 * \`\`\`
 */
export async function fetchPackage(
  id: string,
  options?: FetchOptions
): Promise<Package> {
  // Implementation
}
\`\`\`

### Classes

\`\`\`typescript
/**
 * Template builder for generating project scaffolds
 * 
 * @example
 * \`\`\`typescript
 * const builder = new TemplateBuilder()
 * builder.addPackage('ui')
 * const result = await builder.generate()
 * \`\`\`
 */
export class TemplateBuilder {
  /**
   * Adds a package to the template
   * @param packageId - Package identifier
   */
  addPackage(packageId: string): void {
    // Implementation
  }
}
\`\`\`

### Types and Interfaces

\`\`\`typescript
/**
 * Package metadata from the registry
 */
export interface Package {
  /** Unique package identifier */
  id: string
  
  /** Display name */
  name: string
  
  /** Short description */
  description: string
  
  /** Semantic version */
  version: string
  
  /** Package dependencies */
  dependencies?: Record<string, string>
  
  /** Package tags for categorization */
  tags?: string[]
}
\`\`\`

## REST API Documentation (Future)

### Route Handlers

\`\`\`typescript
/**
 * GET /api/packages
 * 
 * Retrieves all packages from the registry
 * 
 * @query search - Optional search term
 * @query tags - Optional comma-separated tags
 * @query limit - Maximum results (default: 50)
 * @query offset - Pagination offset (default: 0)
 * 
 * @returns 200 - Array of packages
 * @returns 400 - Invalid query parameters
 * @returns 500 - Server error
 * 
 * @example
 * GET /api/packages?search=ui&tags=components&limit=10
 */
export async function GET(request: Request) {
  // Implementation
}
\`\`\`

### OpenAPI Specification

For REST APIs, we'll use OpenAPI 3.0 specification:

\`\`\`yaml
# docs/api/openapi.yaml
openapi: 3.0.0
info:
  title: Unorepo Builder API
  version: 1.0.0
  description: API for managing packages and templates

paths:
  /api/packages:
    get:
      summary: List all packages
      parameters:
        - name: search
          in: query
          schema:
            type: string
        - name: tags
          in: query
          schema:
            type: string
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/Package'
\`\`\`

## Documentation Structure

\`\`\`
docs/
├── api/
│   ├── README.md              # API overview
│   ├── openapi.yaml           # OpenAPI specification
│   ├── rest-api.md            # REST API guide
│   ├── packages/
│   │   ├── list.md           # GET /api/packages
│   │   ├── get.md            # GET /api/packages/:id
│   │   ├── create.md         # POST /api/packages
│   │   └── update.md         # PUT /api/packages/:id
│   └── templates/
│       ├── list.md
│       └── generate.md
\`\`\`

## API Documentation Template

Use this template for each API endpoint:

\`\`\`markdown
# [METHOD] /api/endpoint

Brief description of what this endpoint does.

## Request

### URL Parameters
- \`id\` (string, required) - Resource identifier

### Query Parameters
- \`search\` (string, optional) - Search term
- \`limit\` (number, optional) - Max results (default: 50)

### Headers
- \`Authorization\` (string, required) - Bearer token
- \`Content-Type\` (string) - application/json

### Body
\`\`\`json
{
  "name": "example",
  "description": "Example description"
}
\`\`\`

## Response

### Success (200)
\`\`\`json
{
  "id": "123",
  "name": "example",
  "createdAt": "2025-01-06T00:00:00Z"
}
\`\`\`

### Error (400)
\`\`\`json
{
  "error": "Invalid request",
  "message": "Name is required"
}
\`\`\`

## Examples

### cURL
\`\`\`bash
curl -X GET "https://api.example.com/api/endpoint?search=test" \\
  -H "Authorization: Bearer TOKEN"
\`\`\`

### JavaScript
\`\`\`javascript
const response = await fetch('/api/endpoint?search=test', {
  headers: {
    'Authorization': 'Bearer TOKEN'
  }
})
const data = await response.json()
\`\`\`

## Notes
- Additional implementation details
- Rate limiting information
- Caching behavior
\`\`\`

## Automated Documentation

### TypeDoc for Packages

Generate API documentation from TypeScript:

\`\`\`json
// packages/*/package.json
{
  "scripts": {
    "docs": "typedoc --out docs/api src/index.ts"
  }
}
\`\`\`

### Storybook for Components

UI components are documented in Storybook:

\`\`\`bash
pnpm storybook
\`\`\`

## Best Practices

1. **Be Consistent** - Follow the templates and standards
2. **Include Examples** - Show real usage examples
3. **Document Errors** - List all possible error responses
4. **Keep Updated** - Update docs when code changes
5. **Test Examples** - Ensure code examples actually work
6. **Link Related Docs** - Cross-reference related endpoints
7. **Version APIs** - Document breaking changes

## Checklist

When adding a new API:

- [ ] Add JSDoc comments to code
- [ ] Create markdown documentation file
- [ ] Add to OpenAPI specification (if REST)
- [ ] Include request/response examples
- [ ] Document all error cases
- [ ] Add to API index/README
- [ ] Test all examples
- [ ] Update CHANGELOG

## Tools

- **TypeDoc** - Generate docs from TypeScript
- **Swagger UI** - Interactive API documentation (future)
- **Storybook** - Component documentation
- **JSDoc** - Inline code documentation

## Resources

- [JSDoc documentation](https://jsdoc.app/)
- [OpenAPI specification](https://swagger.io/specification/)
- [TypeDoc guide](https://typedoc.org/)
- [API design best practices](https://swagger.io/resources/articles/best-practices-in-api-design/)
