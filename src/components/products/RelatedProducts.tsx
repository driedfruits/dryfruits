import { Link } from "react-router-dom";
import { Package } from "lucide-react";
import { type Product } from "@/data/companyData";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { categoryLabels } from "@/lib/constants";

interface RelatedProductsProps {
  products: Product[];
}

export function RelatedProducts({ products }: RelatedProductsProps) {
  if (products.length === 0) return null;

  return (
    <section className="py-12 bg-muted/30">
      <div className="container">
        <h2 className="text-2xl font-bold text-foreground mb-6">Related Products</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((related) => (
            <Link
              key={related.id}
              to={`/products/${related.category}/${related.id}`}
              className="group bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-glow transition-all"
            >
              <OptimizedImage
                src={related.images?.main || ""}
                alt={`${related.name} - Wholesale ${categoryLabels[related.category].toLowerCase()} from Indonesia, ${related.pricing.fobBase}`}
                aspectRatio="square"
                width={280}
                height={280}
                className="group-hover:scale-105 transition-transform duration-300"
                fallbackIcon={<Package className="h-12 w-12 text-muted-foreground/30 group-hover:scale-110 transition-transform" />}
              />
              <div className="p-4">
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm">
                  {related.shortName}
                </h3>
                <p className="text-xs text-muted-foreground">{related.pricing.fobBase}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
