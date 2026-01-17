import { memo } from "react";
import { Link } from "react-router-dom";
import { Package, ArrowRight } from "lucide-react";
import { PrimaryButton } from "@/components/CTAButton";
import { productCategories } from "@/data/companyData";

export const ProductCategoriesSection = memo(function ProductCategoriesSection() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Our Product Range
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            From tropical dried fruits to premium spices - all organically grown in Indonesia
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {productCategories.map((category) => (
            <Link
              key={category.id}
              to={`/products/${category.id}`}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-tropical-green-light p-8 text-on-primary transition-transform hover:scale-[1.02]"
            >
              <div className="relative z-10">
                <Package className="h-12 w-12 mb-4 text-on-primary-muted" />
                <h3 className="text-2xl font-bold mb-2 text-on-primary">{category.name}</h3>
                <p className="text-on-primary-muted mb-4">{category.description}</p>
                <div className="flex items-center gap-2 text-sm font-medium text-on-primary">
                  {category.productCount} Products
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
                </div>
              </div>
              <div className="absolute -right-8 -bottom-8 h-32 w-32 rounded-full bg-primary-foreground/10" />
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
