import { memo, useMemo } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PrimaryButton } from "@/components/CTAButton";
import { getProductsByCategory } from "@/data/companyData";

export const ProductCategoriesSection = memo(function ProductCategoriesSection() {
  const driedFruits = useMemo(() => getProductsByCategory("dried-fruits"), []);

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
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-tropical-green-light p-6 text-on-primary transition-transform hover:scale-[1.03]"
            >
              <div className="relative z-10">
                <h3 className="text-lg font-bold mb-2 text-on-primary">{product.name}</h3>
                <div className="flex items-center gap-1 text-sm font-medium text-on-primary-muted">
                  View
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
              <div className="absolute -right-6 -bottom-6 h-20 w-20 rounded-full bg-primary-foreground/10" />
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
