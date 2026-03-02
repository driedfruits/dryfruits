import { memo } from "react";
import { Globe, Truck } from "lucide-react";
import { SecondaryButton } from "@/components/CTAButton";
import { companyInfo, exportCountries } from "@/data/companyData";
import { OptimizedImage } from "@/components/ui/optimized-image";

export const ExportMapSection = memo(function ExportMapSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-6">
              Exporting to {companyInfo.stats.exportCountries} Countries
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              From our facility in Central Java, we ship to buyers across North America, 
              Europe, Asia Pacific, and the Middle East.
            </p>
            
            <div className="space-y-4">
              {exportCountries.map((region) => (
                <div key={region.region} className="flex items-start gap-3">
                  <Globe className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">{region.region}</p>
                    <p className="text-sm text-muted-foreground">{region.countries.join(", ")}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <SecondaryButton to="/shipping" size="lg">
                <Truck className="h-5 w-5 mr-2" />
                Shipping & Export Info
              </SecondaryButton>
            </div>
          </div>

          {/* Export Image with Overlay Stats */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <OptimizedImage src="/placeholder.svg" alt="Shipping containers with dried fruit exports from Indonesia" width={800} height={400} aspectRatio="auto" className="h-[400px]" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
            </div>
            <div className="absolute bottom-6 left-6 right-6 flex justify-between">
              <div className="bg-card/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <p className="text-2xl font-bold text-primary">{companyInfo.stats.exportCountries}</p>
                <p className="text-sm text-muted-foreground">Countries</p>
              </div>
              <div className="bg-card/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <p className="text-2xl font-bold text-primary">40ft</p>
                <p className="text-sm text-muted-foreground">Container Ready</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
