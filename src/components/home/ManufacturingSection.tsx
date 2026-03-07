import { memo } from "react";
import { companyInfo } from "@/data/companyInfo";
import { OptimizedImage } from "@/components/ui/optimized-image";

const fruits = [
  "Dragon Fruit", "Papaya", "Mango", "Avocado", "Pineapple",
  "Snakefruit", "Guava", "Jackfruit", "Longan", "Rambutan",
];

export const ManufacturingSection = memo(function ManufacturingSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          {/* Left Column — Text */}
          <div>
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-4">
              About Our Factory
            </h2>
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Family Owned Factory
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We are a family-owned (second generation) factory with legal name{" "}
              <strong className="text-foreground">{companyInfo.legalInfo.legalName}</strong>{" "}
              ({companyInfo.legalInfo.npwp.label}: {companyInfo.legalInfo.npwp.value},{" "}
              {companyInfo.legalInfo.nib.label}: {companyInfo.legalInfo.nib.value}), located in{" "}
              {companyInfo.address.city}, {companyInfo.address.province}, {companyInfo.address.country}.
              We manufacture dehydrated (professional oven dried) fruits such as:
            </p>

            <div className="mb-6 flex flex-wrap gap-2">
              {fruits.map((fruit) => (
                <span
                  key={fruit}
                  className="rounded-full bg-primary/10 text-primary px-3 py-1 text-sm font-medium"
                >
                  {fruit}
                </span>
              ))}
            </div>

            <p className="text-muted-foreground mb-4 leading-relaxed">
              We are fully export certified with <strong className="text-foreground">USDA Organic</strong>,{" "}
              <strong className="text-foreground">EU Organic</strong>,{" "}
              <strong className="text-foreground">Fair Trade</strong>,{" "}
              <strong className="text-foreground">HACCP</strong>,{" "}
              <strong className="text-foreground">Halal</strong> &amp;{" "}
              <strong className="text-foreground">Kosher</strong> certified.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Today, we export to {companyInfo.stats.exportCountries} countries across North America,
              Europe, Asia Pacific, and the Middle East, serving food manufacturers, retailers, and
              trading companies worldwide.
            </p>
          </div>

          {/* Right Column — Image Placeholder */}
          <div className="rounded-2xl overflow-hidden bg-muted aspect-[4/3]">
            <OptimizedImage
              src="/lovable-uploads/00a1d19f-1a9d-4595-b63c-fbeb17f9e57d.jpg"
              alt="PT Dried Fruits Total Indonesia factory facility in Magelang, Central Java"
              width={600}
              height={450}
              aspectRatio="auto"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
});
