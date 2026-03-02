import { memo } from "react";
import { Leaf, ArrowRight, Package } from "lucide-react";
import { PrimaryButton, SecondaryLightButton } from "@/components/CTAButton";

const fruits = [
  "Dragon Fruit", "Papaya", "Mango", "Avocado", "Pineapple",
  "Snakefruit", "Guava", "Jackfruit", "Longan", "Rambutan",
];

export const HeroSection = memo(function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-[600px] lg:min-h-[700px]">
      {/* Background Placeholder */}
      <div className="absolute inset-0">
        <div className="w-full h-full bg-muted" />
        <div className="absolute inset-0 bg-gradient-to-br from-tropical-green-dark/90 via-primary/80 to-tropical-green-light/70" />
      </div>
      
      <div className="container relative py-20 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-4 flex flex-wrap justify-center gap-3">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-2 text-sm text-on-primary backdrop-blur-sm">
              <Package className="h-4 w-4" aria-hidden="true" />
              Minimum order from 1 pallet (800 kg)
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-2 text-sm text-on-primary backdrop-blur-sm">
              <Leaf className="h-4 w-4" aria-hidden="true" />
              Organic &amp; Fair Trade, HACCP Certified
            </div>
          </div>
          <h1 className="mb-6 text-3xl font-bold tracking-tight text-on-primary sm:text-5xl lg:text-6xl drop-shadow-lg">
            Dehydrated Dried Tropical Fruits OEM Manufacturer from Indonesia
          </h1>
          <h2 className="mb-6 text-lg font-normal text-on-primary-muted sm:text-xl drop-shadow-md">
            Fully export licensed Manufacturer of organic and non organic dried dehydrated fruits in chunks, slices, cuts, packed with your brand. Delivered directly from the factory in Indonesia.
          </h2>
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            {fruits.map((fruit) => (
              <span key={fruit} className="rounded-full bg-primary-foreground/15 px-3 py-1 text-sm text-on-primary backdrop-blur-sm">
                {fruit}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <PrimaryButton to="/samples" size="xl" variant="gold">
              Request Free Samples
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </PrimaryButton>
            <SecondaryLightButton to="/catalog" size="lg">
              Get Price List
            </SecondaryLightButton>
          </div>
        </div>
      </div>
    </section>
  );
});
