import { type Product } from "@/data/companyData";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { Package, ShoppingBag } from "lucide-react";

interface ProductDescriptionPackagingProps {
  product: Product;
}

export function ProductDescriptionPackaging({ product }: ProductDescriptionPackagingProps) {
  const hasSensory = product.flavorProfile || product.texture;
  const hasApplications = product.applications.length > 0;
  const hasPackaging = product.packaging?.retail || product.packaging?.bulk;

  if (!hasSensory && !hasApplications && !hasPackaging) return null;

  return (
    <section className="py-12 bg-muted/30">
      <div className="container">
        {/* Sensory + Applications */}
        {(hasSensory || hasApplications) && (
          <div className="grid gap-8 lg:grid-cols-2 mb-10">
            {hasSensory && (
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Product Description</h2>
                <div className="bg-card rounded-xl p-6 shadow-soft space-y-4">
                  {product.flavorProfile && (
                    <div>
                      <p className="font-medium text-foreground mb-1">Flavor Profile</p>
                      <p className="text-muted-foreground">{product.flavorProfile}</p>
                    </div>
                  )}
                  {product.texture && (
                    <div>
                      <p className="font-medium text-foreground mb-1">Texture</p>
                      <p className="text-muted-foreground">{product.texture}</p>
                    </div>
                  )}
                </div>
              </div>
            )}
            {hasApplications && (
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Industrial Applications</h2>
                <div className="bg-card rounded-xl p-6 shadow-soft">
                  <ul className="grid gap-2" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))' }}>
                    {product.applications.map((app) => (
                      <li key={app} className="flex items-center gap-2 text-sm">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                        {app}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Packaging Options */}
        {hasPackaging && (
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Packaging Options</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {/* Retail Pouch */}
              <div className="bg-card rounded-xl overflow-hidden shadow-soft">
                <OptimizedImage
                  src="/placeholder.svg"
                  alt={`${product.name} retail standing pouch with private label branding`}
                  aspectRatio="video"
                  width={400}
                  height={225}
                  fallbackIcon={<ShoppingBag className="h-16 w-16 text-muted-foreground/30" />}
                />
                <div className="p-5">
                  <h3 className="font-semibold text-foreground mb-1">Retail / Private Label Pouches</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {product.packaging?.retail || "50g–500g stand-up pouches"}
                  </p>
                  <p className="text-xs text-primary font-medium">Custom branding available</p>
                </div>
              </div>

              {/* Bulk HORECA */}
              <div className="bg-card rounded-xl overflow-hidden shadow-soft">
                <OptimizedImage
                  src="/placeholder.svg"
                  alt={`${product.name} bulk 10kg HORECA carton pack`}
                  aspectRatio="video"
                  width={400}
                  height={225}
                  fallbackIcon={<Package className="h-16 w-16 text-muted-foreground/30" />}
                />
                <div className="p-5">
                  <h3 className="font-semibold text-foreground mb-1">Bulk / HORECA Pack</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {product.packaging?.bulk || "10–12.5kg carton with PE liner"}
                  </p>
                  <p className="text-xs text-primary font-medium">Food-grade PE inner liner</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
