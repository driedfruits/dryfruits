import { Layout } from "@/components/layout";
import { SEO } from "@/components/SEO";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { certifications, companyInfo } from "@/data/companyData";
import { PrimaryButton, SecondaryButton } from "@/components/CTAButton";
import { Leaf, Shield, FileCheck, Download, CheckCircle } from "lucide-react";

const qualityDocuments = [
  "Certificate of Analysis (COA)",
  "Phytosanitary Certificate",
  "Organic Certification",
  "Bill of Lading",
  "Commercial Invoice",
  "Packing List",
  "Certificate of Origin",
  "Health Certificate",
];

const breadcrumbItems = [
  { name: "Home", url: "https://dryfruits.lovable.app" },
  { name: "Certifications", url: "https://dryfruits.lovable.app/certifications" },
];

export default function CertificationsPage() {
  return (
    <Layout>
      <SEO
        title="Certifications & Quality - USDA Organic, EU Organic, HACCP"
        description="View our food safety and organic certifications: USDA Organic, EU Organic, HACCP, and Halal. Complete export documentation for seamless customs clearance."
        keywords={["USDA organic dried fruit", "EU organic certification", "HACCP certified manufacturer", "Halal dried fruit", "food safety certifications"]}
        canonical="/certifications"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbItems)),
        }}
      />
      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-primary to-tropical-green-light">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center text-primary-foreground">
            <h1 className="text-4xl font-bold sm:text-5xl mb-4">
              Certifications & Quality
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Meeting international standards for food safety and organic production
            </p>
          </div>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground">Our Certifications</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Every product we export meets the highest international standards
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {certifications.map((cert) => (
              <div 
                key={cert.id}
                className="rounded-2xl bg-card p-8 shadow-soft text-center hover:shadow-glow transition-all duration-300"
              >
                <div className="mb-6 mx-auto h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center">
                  <Leaf className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{cert.name}</h3>
                <p className="text-muted-foreground">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Quality Assurance Process
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                From farm to shipment, every step of our production process is monitored 
                and documented to ensure consistent quality.
              </p>
              
              <div className="space-y-4">
                {[
                  "Raw material inspection upon arrival",
                  "Multi-stage quality checkpoints",
                  "Batch testing and documentation",
                  "Pre-shipment quality verification",
                  "Full traceability from farm to container",
                ].map((step, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-sm">
                      {index + 1}
                    </div>
                    <span className="text-foreground">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-card p-8 shadow-soft">
              <Shield className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-xl font-bold text-foreground mb-4">
                Quality Promise
              </h3>
              <p className="text-muted-foreground mb-6">
                We guarantee that every shipment meets your specifications. If any product 
                doesn't meet the agreed quality standards, we'll work with you to make it right.
              </p>
              <PrimaryButton to="/contact">
                Learn More
              </PrimaryButton>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground">Export Documentation</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Complete documentation for seamless customs clearance
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {qualityDocuments.map((doc) => (
              <div 
                key={doc}
                className="flex items-center gap-3 rounded-xl bg-card p-4 shadow-soft"
              >
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-foreground">{doc}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <SecondaryButton to="/catalog">
              <Download className="h-5 w-5 mr-2" />
              Download Certificate Samples
            </SecondaryButton>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary to-tropical-green-light">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Need Certification Documents?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Request copies of our certifications or ask about specific requirements for your market.
          </p>
          <PrimaryButton to="/contact" variant="gold" size="xl">
            Contact Export Team
          </PrimaryButton>
        </div>
      </section>
    </Layout>
  );
}
