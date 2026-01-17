import { memo } from "react";
import { GradientCard } from "@/components/ui/gradient-card";
import { Package, ArrowRight } from "lucide-react";

interface CategoryCardProps {
  category: {
    id: string;
    name: string;
    description: string;
    productCount: number;
  };
}

export const CategoryCard = memo(function CategoryCard({ category }: CategoryCardProps) {
  return (
    <GradientCard to={`/products/${category.id}`}>
      <Package className="h-12 w-12 mb-4 opacity-80" />
      <h2 className="text-2xl font-bold mb-2">{category.name}</h2>
      <p className="text-primary-foreground/80 mb-4">{category.description}</p>
      <span className="inline-flex items-center gap-2 text-sm font-medium">
        {category.productCount} Products 
        <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform" />
      </span>
    </GradientCard>
  );
});
