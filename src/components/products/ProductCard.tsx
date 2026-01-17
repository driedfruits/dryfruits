import { memo } from "react";
import { Link } from "react-router-dom";
import { Package, Leaf } from "lucide-react";
import { OptimizedImage } from "@/components/ui/optimized-image";

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    tagline: string;
    category: string;
    isOrganic?: boolean;
    images?: { main?: string; thumbnail?: string };
  };
  animationDelay?: number;
  showImage?: boolean;
}

export const ProductCard = memo(function ProductCard({ 
  product, 
  animationDelay = 0,
  showImage = false 
}: ProductCardProps) {
  return (
    <Link 
      to={`/products/${product.category}/${product.id}`}
      className="group rounded-xl bg-card overflow-hidden shadow-soft hover:shadow-glow transition-all animate-content-reveal opacity-0"
      style={animationDelay ? { animationDelay: `${animationDelay}ms`, animationFillMode: 'forwards' } : { animationFillMode: 'forwards' }}
    >
      <article>
        {showImage ? (
          <div className="relative">
            <OptimizedImage
              src={product.images?.main || ""}
              alt={`${product.name} - Premium Indonesian dried fruit for wholesale export`}
              aspectRatio="square"
              width={400}
              height={400}
              placeholderSrc={product.images?.thumbnail}
              fallbackIcon={<Package className="h-20 w-20 text-muted-foreground/30 group-hover:scale-110 transition-transform" />}
            />
            {product.isOrganic && (
              <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full flex items-center gap-1 z-10">
                <Leaf className="h-3 w-3" />Organic
              </span>
            )}
          </div>
        ) : (
          <div className="aspect-square bg-gradient-to-br from-secondary to-muted flex items-center justify-center relative">
            <Package className="h-16 w-16 text-muted-foreground/30 group-hover:scale-110 transition-transform" />
            {product.isOrganic && (
              <span className="absolute top-2 left-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full flex items-center gap-1">
                <Leaf className="h-3 w-3" />Organic
              </span>
            )}
          </div>
        )}
        <div className="p-4">
          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">{product.name}</h3>
          <p className="text-sm text-muted-foreground">{product.tagline}</p>
          {showImage && <p className="text-sm text-primary font-medium mt-2">View Details →</p>}
        </div>
      </article>
    </Link>
  );
});
