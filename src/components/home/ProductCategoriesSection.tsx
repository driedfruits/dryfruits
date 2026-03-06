import { memo, useMemo } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PrimaryButton } from "@/components/CTAButton";
import { getProductsByCategory } from "@/data/products";
import { useProducts } from "@/contexts/ProductsContext";
import { OptimizedImage } from "@/components/ui/optimized-image";


export const ProductCategoriesSection = memo(function ProductCategoriesSection() {
  const { products } = useProducts();
  const driedFruits = useMemo(() => getProductsByCategory(products, "dried-fruits"), [products]);

  return (
    <section className="py-20">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Our Product Range
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Premium tropical dried fruits — organically grown and exported from Indonesia
          </p>
        </div>

        <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {driedFruits.map((product) => (
            <Link
              key={product.id}
              to={`/products/dried-fruits/${product.id}`}
              className="group rounded-xl bg-card overflow-hidden shadow-soft hover:shadow-glow transition-all"
            >
              <OptimizedImage
                src={product.images?.main || "/placeholder.svg"}
                alt={`${product.name} - bulk wholesale dried fruit from Indonesia`}
                width={400}
                height={400}
                aspectRatio="square"
                placeholderSrc={product.images?.thumbnail}
              />
              <div className="p-4">
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">{product.shortName}</h3>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <PrimaryButton to="/products" size="lg">
            View All Products
            <ArrowRight className="h-5 w-5" />
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
});
