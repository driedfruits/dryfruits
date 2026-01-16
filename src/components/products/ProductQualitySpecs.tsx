import { type Product } from "@/data/companyData";
import { Droplet, Flame, Sparkles, FlaskConical, ShieldCheck, Leaf } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ProductQualitySpecsProps {
  product: Product;
}

interface QualitySpec {
  icon: LucideIcon;
  label: string;
  value: string;
  description: string;
  iconColorClass: string;
}

export function ProductQualitySpecs({ product }: ProductQualitySpecsProps) {
  // Only show for ginger-turmeric category
  if (product.category !== "ginger-turmeric") return null;

  const isGinger = product.id.includes("ginger");
  const isTurmeric = product.id.includes("turmeric");
  
  const specs: QualitySpec[] = [];

  // Ginger-specific specs
  if (isGinger) {
    if (product.specifications.volatileOil) {
      specs.push({
        icon: Droplet,
        label: "Volatile Oil",
        value: product.specifications.volatileOil,
        description: "Aromatic compound indicator",
        iconColorClass: "text-blue-500",
      });
    }
    if (product.specifications.gingerolContent) {
      specs.push({
        icon: Flame,
        label: "Gingerol Content",
        value: product.specifications.gingerolContent,
        description: "Pungency & heat level",
        iconColorClass: "text-orange-500",
      });
    }
  }

  // Turmeric-specific specs
  if (isTurmeric) {
    if (product.specifications.curcuminContent) {
      specs.push({
        icon: Sparkles,
        label: "Curcumin Content",
        value: product.specifications.curcuminContent,
        description: "Bioactive compound level",
        iconColorClass: "text-yellow-500",
      });
    }
    if (product.specifications.astaColor) {
      specs.push({
        icon: Leaf,
        label: "ASTA Color Value",
        value: product.specifications.astaColor,
        description: "Color intensity rating",
        iconColorClass: "text-primary",
      });
    }
  }

  // Common specs for both
  if (product.specifications.totalAsh) {
    specs.push({
      icon: FlaskConical,
      label: "Total Ash",
      value: product.specifications.totalAsh,
      description: "Mineral content test",
      iconColorClass: "text-primary",
    });
  }
  
  if (product.specifications.acidInsolubleAsh) {
    specs.push({
      icon: ShieldCheck,
      label: "Acid Insoluble Ash",
      value: product.specifications.acidInsolubleAsh,
      description: "Purity indicator",
      iconColorClass: "text-green-500",
    });
  }

  // Chrome test for turmeric
  if (isTurmeric && product.specifications.chromeTest) {
    specs.push({
      icon: ShieldCheck,
      label: "Chrome Test",
      value: product.specifications.chromeTest,
      description: "Adulteration check",
      iconColorClass: "text-green-500",
    });
  }

  // Don't render if no specs available
  if (specs.length === 0) return null;

  return (
    <section className="py-12 bg-muted/30">
      <div className="container">
        <h2 className="text-2xl font-bold text-foreground mb-6">Chemical Analysis</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {specs.map((spec) => {
            const IconComponent = spec.icon;
            return (
              <div
                key={spec.label}
                className="bg-card rounded-xl p-6 shadow-soft text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                  <IconComponent className={`h-7 w-7 ${spec.iconColorClass}`} />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{spec.label}</h3>
                <p className="text-2xl font-bold text-primary mb-2">{spec.value}</p>
                <p className="text-xs text-muted-foreground">{spec.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
