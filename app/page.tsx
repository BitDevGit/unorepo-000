export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="max-w-3xl text-center space-y-6">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">Unorepo Builder</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          A visual monorepo orchestration platform for managing UI components, design systems, and packages. Transform
          monorepo management from command-line tasks into a visual, collaborative experience.
        </p>
        <div className="flex gap-4 justify-center pt-4">
          <div className="px-4 py-2 bg-muted rounded-lg">
            <p className="text-sm font-medium">Status</p>
            <p className="text-xs text-muted-foreground">Phase 1 - Foundation</p>
          </div>
          <div className="px-4 py-2 bg-muted rounded-lg">
            <p className="text-sm font-medium">Stack</p>
            <p className="text-xs text-muted-foreground">Next.js 15 + Turborepo</p>
          </div>
        </div>
      </div>
    </main>
  )
}
