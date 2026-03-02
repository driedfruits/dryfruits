import { Skeleton } from "@/components/ui/skeleton";

export function LayoutSkeleton() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Header skeleton */}
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <Skeleton className="h-8 w-32" />
          <div className="hidden items-center gap-6 md:flex">
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-4 w-14" />
            <Skeleton className="h-4 w-18" />
            <Skeleton className="h-4 w-16" />
          </div>
          <Skeleton className="h-10 w-28 rounded-lg" />
        </div>
      </header>

      {/* Content skeleton */}
      <main className="flex-1">
        <div className="container py-12 space-y-8">
          <Skeleton className="h-10 w-2/3 max-w-md" />
          <Skeleton className="h-5 w-full max-w-lg" />
          <Skeleton className="h-5 w-4/5 max-w-lg" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 pt-8">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="rounded-xl border bg-card p-6 space-y-4">
                <Skeleton className="h-40 w-full rounded-lg" />
                <Skeleton className="h-5 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-2/3" />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
