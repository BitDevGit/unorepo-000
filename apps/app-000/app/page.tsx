import { Button } from "@unorepo/ui/components/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@unorepo/ui/components/card"
import { cn } from "@unorepo/utils"

export default function Page() {
  return (
    <main className="container mx-auto min-h-screen p-8">
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">App 000</h1>
          <p className="text-lg text-muted-foreground">Full-featured demo showcasing all monorepo capabilities</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Monorepo Features</CardTitle>
            <CardDescription>This app demonstrates the full power of the monorepo structure</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <FeatureCard
                title="Shared UI Components"
                description="Uses @unorepo/ui package with shadcn/ui components"
                icon="🎨"
              />
              <FeatureCard
                title="Shared Utilities"
                description="Leverages @unorepo/utils for common functions like cn()"
                icon="🛠️"
              />
              <FeatureCard
                title="TypeScript Config"
                description="Extends shared TypeScript configuration from @unorepo/config"
                icon="📘"
              />
              <FeatureCard
                title="Turborepo Caching"
                description="Benefits from intelligent build caching and parallel execution"
                icon="⚡"
              />
            </div>

            <div className="flex gap-2 pt-4">
              <Button>Primary Action</Button>
              <Button variant="outline">Secondary Action</Button>
              <Button variant="ghost">Tertiary Action</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Package Dependencies</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <span className="font-mono text-xs text-muted-foreground">@unorepo/ui</span>
                <span>→ Shared UI components and design system</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="font-mono text-xs text-muted-foreground">@unorepo/utils</span>
                <span>→ Common utility functions</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="font-mono text-xs text-muted-foreground">@unorepo/config</span>
                <span>→ Shared TypeScript and ESLint configs</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}

function FeatureCard({ title, description, icon }: { title: string; description: string; icon: string }) {
  return (
    <div className={cn("rounded-lg border bg-card p-4 transition-colors hover:bg-accent")}>
      <div className="mb-2 text-2xl">{icon}</div>
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  )
}
