import { memo } from "react";
import { CheckCircle } from "lucide-react";
import { CatalogForm } from "@/components/forms";
import { OptimizedImage } from "@/components/ui/optimized-image";

const catalogBenefits = [
  "Complete product specifications",
  "FOB pricing guidelines",
  "Packaging options & MOQs",
  "Certification details",
];

export const CatalogDownloadSection = memo(function CatalogDownloadSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-tropical-green-light">
      <div className="container">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            {/* Product Image */}
            <div className="relative order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <OptimizedImage src="/placeholder.svg" alt="Premium dehydrated tropical fruit products catalog display" width={700} height={350} aspectRatio="auto" className="h-[350px]" />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground rounded-xl p-4 shadow-lg">
                <p className="text-lg font-bold">50+ Products</p>
                <p className="text-sm">In Our Catalog</p>
              </div>
            </div>

            {/* Form Side */}
            <div className="order-1 lg:order-2">
              <div className="text-on-primary mb-6">
                <h2 className="text-3xl font-bold sm:text-4xl mb-4 text-on-primary">
                  Download Our Product Catalog
                </h2>
                <p className="text-lg text-on-primary-muted mb-6">
                  Get our complete product catalog with specifications, pricing guidance, 
                  and packaging options. Perfect for your procurement team.
                </p>
                <ul className="space-y-3 text-on-primary mb-6">
                  {catalogBenefits.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-card rounded-2xl p-8 shadow-lg">
                <CatalogForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
