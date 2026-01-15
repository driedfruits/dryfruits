import { Skeleton } from "@/components/ui/skeleton";

export function ProductPageSkeleton() {
  return (
    <div className="min-h-screen bg-background pb-20 lg:pb-0">
      {/* Breadcrumb Skeleton */}
      <div className="bg-muted/50 py-4">
        <div className="container">
          <div className="flex items-center gap-2">
            <Skeleton className="h-4 w-12" />
            <Skeleton className="h-4 w-4" />
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-4" />
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-4 w-4" />
            <Skeleton className="h-4 w-28" />
          </div>
        </div>
      </div>

      {/* Hero Section Skeleton */}
      <section className="py-12 lg:py-16">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Product Image Skeleton */}
            <Skeleton className="aspect-square rounded-2xl" />

            {/* Product Info Skeleton */}
            <div className="flex flex-col justify-center space-y-4">
              <Skeleton className="h-6 w-24" />
              <Skeleton className="h-10 w-3/4" />
              <Skeleton className="h-5 w-48" />
              <Skeleton className="h-8 w-32" />
              <Skeleton className="h-4 w-56" />
              
              {/* Quick Highlights */}
              <div className="space-y-2 py-4">
                <Skeleton className="h-4 w-64" />
                <Skeleton className="h-4 w-48" />
                <Skeleton className="h-4 w-56" />
                <Skeleton className="h-4 w-40" />
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-3">
                <Skeleton className="h-11 w-40" />
                <Skeleton className="h-11 w-36" />
                <Skeleton className="h-11 w-32" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specs Table Skeleton */}
      <section className="py-12 bg-muted/30">
        <div className="container">
          <Skeleton className="h-8 w-48 mb-6" />
          <div className="bg-card rounded-xl p-6 shadow-sm">
            <div className="space-y-4">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="flex justify-between">
                  <Skeleton className="h-5 w-32" />
                  <Skeleton className="h-5 w-48" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Logistics Skeleton */}
      <section className="py-12">
        <div className="container">
          <Skeleton className="h-8 w-56 mb-6" />
          <div className="grid gap-6 lg:grid-cols-3">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-card rounded-xl p-6 shadow-sm">
                <Skeleton className="h-6 w-32 mb-4" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Products Skeleton */}
      <section className="py-12 bg-muted/30">
        <div className="container">
          <Skeleton className="h-8 w-40 mb-6" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-card rounded-xl overflow-hidden">
                <Skeleton className="aspect-square" />
                <div className="p-4 space-y-2">
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-3 w-1/2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
