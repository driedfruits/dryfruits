import { memo } from "react";
import { CheckCircle } from "lucide-react";
import { CatalogForm } from "@/components/forms";

const catalogBenefits = [
  "Complete product specifications",
  "FOB pricing guidelines",
  "Packaging options & MOQs",
  "Certification details",
];

export const CatalogDownloadSection = memo(function CatalogDownloadSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-tropical-green-light">
      <div className="container">
        <div className="mx-auto max-w-5xl">
          {/* Centered Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold sm:text-4xl mb-4 text-on-primary">
              Download Our Product Catalog
            </h2>
            <p className="text-lg text-on-primary-muted max-w-2xl mx-auto">
              Get our complete product catalog with specifications, pricing guidance,
              and packaging options. Perfect for your procurement team.
            </p>
          </div>

          {/* Two-column grid */}
          <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
            {/* Left: Benefits + Badge */}
            <div className="space-y-6">
              <ul className="space-y-4 text-on-primary">
                {catalogBenefits.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-lg">
                    <CheckCircle className="h-6 w-6 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="inline-block bg-accent text-accent-foreground rounded-xl p-4 shadow-lg">
                <p className="text-lg font-bold">50+ Products</p>
                <p className="text-sm">In Our Catalog</p>
              </div>
            </div>

            {/* Right: Form */}
            <div className="bg-card rounded-2xl p-8 shadow-lg">
              <CatalogForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
