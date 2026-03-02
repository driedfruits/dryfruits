import { Skeleton } from "@/components/ui/skeleton";

export function ContentPageSkeleton() {
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
            <Skeleton className="h-4 w-16" />
          </div>
          <Skeleton className="h-10 w-28 rounded-lg" />
        </div>
      </header>

      {/* PageHero skeleton */}
      <section className="py-16 bg-gradient-to-br from-primary/20 to-accent/10">
        <div className="container text-center space-y-4">
          <Skeleton className="h-10 w-72 mx-auto" />
          <Skeleton className="h-5 w-96 max-w-full mx-auto" />
        </div>
      </section>

      {/* Content blocks skeleton */}
      <section className="py-12">
        <div className="container max-w-4xl space-y-8">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="space-y-3">
              <Skeleton className="h-7 w-48" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-5/6" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
