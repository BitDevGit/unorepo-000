import { Button } from "@unorepo/ui/components/button"

export default function Page() {
  return (
    <main className="container mx-auto min-h-screen p-8">
      <div className="mx-auto max-w-2xl space-y-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">App 001</h1>
          <p className="text-lg text-muted-foreground">Lightweight demo with minimal dependencies</p>
        </div>

        <div className="rounded-lg border bg-card p-6 space-y-4">
          <h2 className="text-2xl font-semibold">Minimal Setup</h2>
          <p className="text-muted-foreground">
            This app demonstrates a lightweight approach to using the monorepo. It only depends on the essential{" "}
            <code className="text-sm">@unorepo/ui</code> package.
          </p>

          <div className="space-y-2">
            <h3 className="font-semibold">Key Differences from App 000:</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>No @unorepo/utils dependency</li>
              <li>No Vercel Analytics</li>
              <li>Simpler configuration</li>
              <li>Faster build times</li>
              <li>Smaller bundle size</li>
            </ul>
          </div>

          <div className="flex gap-2 pt-4">
            <Button>Get Started</Button>
            <Button variant="outline">Learn More</Button>
          </div>
        </div>

        <div className="rounded-lg border bg-muted/50 p-6">
          <h3 className="font-semibold mb-2">When to use this approach?</h3>
          <p className="text-sm text-muted-foreground">
            Choose this lightweight setup when you need a simple app with minimal overhead. Perfect for landing pages,
            marketing sites, or simple tools that don't require the full monorepo feature set.
          </p>
        </div>
      </div>
    </main>
  )
}
