# Coding Standards

## General Principles

1. **Write for humans first** - Code is read more than written
2. **Keep it simple** - Avoid unnecessary complexity
3. **Be consistent** - Follow established patterns
4. **Document decisions** - Use comments for "why", not "what"
5. **Test your code** - Write tests for critical functionality

## TypeScript

### Naming Conventions

\`\`\`typescript
// PascalCase for types, interfaces, classes, components
type UserData = { ... }
interface ButtonProps { ... }
class UserService { ... }
function Button() { ... }

// camelCase for variables, functions, methods
const userData = { ... }
function getUserData() { ... }

// UPPER_SNAKE_CASE for constants
const API_BASE_URL = "https://api.example.com"
const MAX_RETRIES = 3

// kebab-case for file names
user-profile.tsx
api-client.ts
use-auth.ts
\`\`\`

### Type Safety

\`\`\`typescript
// ✅ Use explicit types for function parameters and returns
function calculateTotal(items: CartItem[]): number {
  return items.reduce((sum, item) => sum + item.price, 0)
}

// ✅ Use type guards
function isUser(value: unknown): value is User {
  return typeof value === 'object' && value !== null && 'id' in value
}

// ❌ Avoid 'any'
function processData(data: any) { ... }  // Bad

// ✅ Use 'unknown' and narrow
function processData(data: unknown) {
  if (isUser(data)) {
    // data is User here
  }
}
\`\`\`

### Imports

\`\`\`typescript
// ✅ Use absolute imports with path aliases
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { UserSchema } from '@unorepo/schemas'

// ✅ Group imports
// 1. External packages
import { useState } from 'react'
import { z } from 'zod'

// 2. Internal packages
import { Button } from '@unorepo/ui'

// 3. Local imports
import { Header } from './header'
import type { User } from './types'
\`\`\`

## React

### Component Structure

\`\`\`typescript
// ✅ Good component structure
import { useState } from 'react'
import { Button } from '@unorepo/ui'
import type { UserProps } from './types'

interface UserCardProps {
  user: UserProps
  onEdit?: () => void
}

export function UserCard({ user, onEdit }: UserCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  
  return (
    <div className="rounded-lg border p-4">
      <h3 className="font-semibold">{user.name}</h3>
      {isExpanded && <p>{user.bio}</p>}
      <Button onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? 'Show Less' : 'Show More'}
      </Button>
    </div>
  )
}
\`\`\`

### Hooks

\`\`\`typescript
// ✅ Custom hooks start with 'use'
function useAuth() {
  const [user, setUser] = useState<User | null>(null)
  // ...
  return { user, login, logout }
}

// ✅ Extract complex logic to custom hooks
function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState(value)
  
  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay)
    return () => clearTimeout(handler)
  }, [value, delay])
  
  return debouncedValue
}
\`\`\`

### Server Components vs Client Components

\`\`\`typescript
// ✅ Server Component (default in Next.js 15)
// No 'use client' directive
export default async function Page() {
  const data = await fetchData()  // Can fetch directly
  return <div>{data.title}</div>
}

// ✅ Client Component (when needed)
'use client'

import { useState } from 'react'

export function Counter() {
  const [count, setCount] = useState(0)
  return <button onClick={() => setCount(count + 1)}>{count}</button>
}
\`\`\`

## Styling

### Tailwind CSS

\`\`\`typescript
// ✅ Use semantic class names
<div className="flex items-center justify-between gap-4 rounded-lg border bg-card p-4">

// ✅ Use cn() for conditional classes
import { cn } from '@/lib/utils'

<button className={cn(
  "rounded-md px-4 py-2",
  isActive && "bg-primary text-primary-foreground",
  isDisabled && "opacity-50 cursor-not-allowed"
)}>

// ✅ Extract repeated patterns to components
function Card({ children, className }: CardProps) {
  return (
    <div className={cn("rounded-lg border bg-card p-4", className)}>
      {children}
    </div>
  )
}
\`\`\`

### Design Tokens

\`\`\`typescript
// ✅ Use design tokens from globals.css
className="bg-background text-foreground"
className="border-border"
className="text-muted-foreground"

// ❌ Avoid arbitrary values unless necessary
className="bg-[#ff0000]"  // Bad

// ✅ Use theme colors
className="bg-destructive"  // Good
\`\`\`

## File Organization

\`\`\`
component-name/
├── component-name.tsx       # Main component
├── component-name.test.tsx  # Tests
├── component-name.stories.tsx  # Storybook
├── types.ts                 # Types
├── utils.ts                 # Helper functions
└── index.ts                 # Exports
\`\`\`

## Comments

\`\`\`typescript
// ✅ Explain "why", not "what"
// We use a Set here to ensure uniqueness and O(1) lookup
const uniqueIds = new Set(ids)

// ✅ Document complex logic
/**
 * Calculates the optimal cache size based on available memory
 * and expected load. Uses exponential backoff for memory pressure.
 */
function calculateCacheSize(memory: number, load: number): number {
  // ...
}

// ❌ Don't state the obvious
// Increment counter by 1
counter++
\`\`\`

## Error Handling

\`\`\`typescript
// ✅ Use try-catch for async operations
async function fetchUser(id: string) {
  try {
    const response = await fetch(`/api/users/${id}`)
    if (!response.ok) throw new Error('Failed to fetch user')
    return await response.json()
  } catch (error) {
    console.error('Error fetching user:', error)
    throw error
  }
}

// ✅ Use Zod for validation
import { z } from 'zod'

const UserSchema = z.object({
  id: z.string(),
  name: z.string().min(1),
  email: z.string().email()
})

const result = UserSchema.safeParse(data)
if (!result.success) {
  console.error('Validation failed:', result.error)
}
\`\`\`

## Performance

\`\`\`typescript
// ✅ Memoize expensive calculations
const expensiveValue = useMemo(() => {
  return complexCalculation(data)
}, [data])

// ✅ Use useCallback for functions passed as props
const handleClick = useCallback(() => {
  doSomething(id)
}, [id])

// ✅ Lazy load components
const HeavyComponent = lazy(() => import('./heavy-component'))
\`\`\`

## Security

\`\`\`typescript
// ✅ Sanitize user input
import DOMPurify from 'isomorphic-dompurify'

const clean = DOMPurify.sanitize(userInput)

// ✅ Use environment variables for secrets
const apiKey = process.env.API_KEY

// ❌ Never commit secrets
const apiKey = "sk_live_..." // Bad!

// ✅ Validate on server
// Server Action
export async function createUser(formData: FormData) {
  const result = UserSchema.safeParse(Object.fromEntries(formData))
  if (!result.success) {
    return { error: 'Invalid data' }
  }
  // ...
}
\`\`\`

## Testing

\`\`\`typescript
// ✅ Write descriptive test names
describe('UserCard', () => {
  it('displays user name and email', () => {
    // ...
  })
  
  it('calls onEdit when edit button is clicked', () => {
    // ...
  })
  
  it('shows loading state while fetching data', () => {
    // ...
  })
})

// ✅ Use data-testid for E2E tests
<button data-testid="submit-button">Submit</button>

// In test
await page.click('[data-testid="submit-button"]')
