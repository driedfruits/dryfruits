import { memo } from "react";
import { Leaf, ArrowRight } from "lucide-react";
import { PrimaryButton, SecondaryLightButton } from "@/components/CTAButton";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { companyInfo } from "@/data/companyData";

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
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-2 text-sm text-on-primary backdrop-blur-sm">
            <Leaf className="h-4 w-4" />
            USDA & EU Organic Certified
          </div>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-on-primary sm:text-5xl lg:text-6xl drop-shadow-lg">
            {companyInfo.tagline}
          </h1>
          <p className="mb-8 text-lg text-on-primary-muted sm:text-xl drop-shadow-md">
            Premium dried fruits, vacuum fried snacks, and spices from Indonesia. 
            Direct from source to B2B buyers worldwide.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <PrimaryButton to="/contact" size="xl" variant="gold">
              Request Quote
              <ArrowRight className="h-5 w-5" />
            </PrimaryButton>
            <SecondaryLightButton to="/samples" size="lg">
              Request Samples
            </SecondaryLightButton>
            <WhatsAppButton size="lg" />
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="container relative pb-16">
        <div className="mx-auto max-w-4xl grid grid-cols-2 gap-6 lg:grid-cols-4">
          {[
            { value: `${companyInfo.stats.yearsExperience}+`, label: "Years Experience" },
            { value: `${companyInfo.stats.exportCountries}`, label: "Export Countries" },
            { value: companyInfo.stats.productionCapacity, label: "Production Capacity" },
            { value: `${companyInfo.stats.productVarieties}`, label: "Product Varieties" },
          ].map((stat) => (
            <div key={stat.label} className="text-center bg-primary-foreground/5 backdrop-blur-sm rounded-xl p-4">
              <p className="text-3xl font-bold text-on-primary lg:text-4xl drop-shadow-sm">{stat.value}</p>
              <p className="text-sm text-on-primary-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});
