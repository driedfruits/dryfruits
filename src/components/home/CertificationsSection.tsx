import { memo } from "react";
import { Leaf } from "lucide-react";
import { SecondaryButton } from "@/components/CTAButton";
import { certifications } from "@/data/companyData";
import { OptimizedImage } from "@/components/ui/optimized-image";

export const CertificationsSection = memo(function CertificationsSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Certified Quality Assurance
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Meeting international standards for food safety and organic production
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((cert) => (
            <div 
              key={cert.id}
              className="flex flex-col items-center rounded-xl bg-card p-6 text-center shadow-soft"
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10" aria-label={cert.name} role="img">
                <Leaf className="h-8 w-8 text-primary" aria-hidden="true" />
              </div>
              <h3 className="font-semibold text-foreground">{cert.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{cert.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-6 grid-cols-2 lg:grid-cols-4">
          {certifications.map((cert) => (
            <div key={`cert-img-${cert.id}`} className="rounded-xl bg-card shadow-soft overflow-hidden">
              <OptimizedImage
                src="/placeholder.svg"
                alt={`${cert.name} certificate – PT Dried Fruits Total Indonesia`}
                aspectRatio="auto"
                className="aspect-[210/297]"
                width={210}
                height={297}
              />
              <p className="p-3 text-center text-sm font-medium text-foreground">{cert.name} Certificate</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <SecondaryButton to="/certifications" size="lg">
            View Certifications
          </SecondaryButton>
        </div>
      </div>
    </section>
  );
});
