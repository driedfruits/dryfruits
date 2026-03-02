import { type Product } from "@/data/companyData";

interface ProductSensoryApplicationsProps {
  product: Product;
}

export function ProductSensoryApplications({ product }: ProductSensoryApplicationsProps) {
  const hasSensory = product.flavorProfile || product.texture;
  
  if (!hasSensory && product.applications.length === 0) return null;

  return (
    <section className="py-12 bg-muted/30">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Sensory Profile */}
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

          {/* Applications */}
          {product.applications.length > 0 && (
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
      </div>
    </section>
  );
}
