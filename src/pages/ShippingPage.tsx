import { Layout } from "@/components/layout";
import { SEO } from "@/components/SEO";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { companyInfo, exportCountries } from "@/data/companyData";
import { PrimaryButton, SecondaryButton } from "@/components/CTAButton";
import { 
  Truck, 
  FileText, 
  Clock, 
  CreditCard, 
  Globe, 
  Package,
  CheckCircle,
  Ship
} from "lucide-react";

const shippingProcess = [
  {
    step: "1",
    title: "Order Confirmation",
    description: "Receive proforma invoice, confirm order details and specifications",
  },
  {
    step: "2",
    title: "Deposit Payment",
    description: "50% deposit via T/T or L/C opening",
  },
  {
    step: "3",
    title: "Production",
    description: "2-3 weeks production and quality control",
  },
  {
    step: "4",
    title: "Balance Payment",
    description: "50% balance before shipment",
  },
  {
    step: "5",
    title: "Shipment",
    description: "Container loading and shipping with full documentation",
  },
  {
    step: "6",
    title: "Delivery",
    description: "Arrival at destination port with customs-ready documents",
  },
];

const exportDocs = [
  "Commercial Invoice",
  "Packing List",
  "Bill of Lading",
  "Certificate of Origin",
  "Phytosanitary Certificate",
  "Health Certificate",
  "Certificate of Analysis",
  "Organic Certificate",
  "Fumigation Certificate (if required)",
  "Insurance Certificate (if required)",
];

const breadcrumbItems = [
  { name: "Home", url: "https://dryfruits.lovable.app" },
  { name: "Shipping & Export", url: "https://dryfruits.lovable.app/shipping" },
];

export default function ShippingPage() {
  return (
    <Layout>
      <SEO
        title="Shipping & Export - Global Dried Fruit Delivery"
        description={`Seamless export process to ${companyInfo.stats.exportCountries} countries. FOB & CIF terms available. Complete documentation for customs clearance. Lead time ${companyInfo.paymentTerms.leadTime}.`}
        keywords={["dried fruit shipping", "FOB Indonesia", "export dried fruit", "container shipping fruit", "international fruit delivery"]}
        canonical="/shipping"
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
              Shipping & Export
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Seamless export process with complete documentation for hassle-free import
            </p>
          </div>
        </div>
      </section>

      {/* Key Info */}
      <section className="py-20">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Clock, title: "Lead Time", value: companyInfo.paymentTerms.leadTime },
              { icon: Package, title: "Minimum Order", value: companyInfo.paymentTerms.moq },
              { icon: CreditCard, title: "Payment", value: "50% + 50%" },
              { icon: Globe, title: "Export To", value: `${companyInfo.stats.exportCountries} Countries` },
            ].map((item) => (
              <div key={item.title} className="rounded-xl bg-card p-6 shadow-soft text-center">
                <item.icon className="h-10 w-10 text-primary mx-auto mb-3" />
                <p className="text-sm text-muted-foreground">{item.title}</p>
                <p className="text-xl font-bold text-foreground">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shipping Process */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground">Export Process</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              From order to delivery in 6 simple steps
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {shippingProcess.map((item) => (
              <div key={item.step} className="rounded-xl bg-card p-6 shadow-soft">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Terms */}
      <section className="py-20">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Payment Terms</h2>
              <div className="space-y-6">
                <div className="rounded-xl bg-card p-6 shadow-soft">
                  <CreditCard className="h-8 w-8 text-primary mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">T/T (Bank Transfer)</h3>
                  <p className="text-muted-foreground">
                    {companyInfo.paymentTerms.deposit} deposit upon order confirmation, 
                    {companyInfo.paymentTerms.balance} before shipment
                  </p>
                </div>
                <div className="rounded-xl bg-card p-6 shadow-soft">
                  <FileText className="h-8 w-8 text-primary mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">L/C (Letter of Credit)</h3>
                  <p className="text-muted-foreground">
                    Available for orders above 5 tons. Irrevocable L/C at sight.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Shipping Terms</h2>
              <div className="space-y-6">
                <div className="rounded-xl bg-card p-6 shadow-soft">
                  <Ship className="h-8 w-8 text-primary mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">FOB Indonesia</h3>
                  <p className="text-muted-foreground">
                    Free on Board from Semarang or Jakarta port. 
                    Buyer arranges and pays for ocean freight.
                  </p>
                </div>
                <div className="rounded-xl bg-card p-6 shadow-soft">
                  <Truck className="h-8 w-8 text-primary mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">CIF Available</h3>
                  <p className="text-muted-foreground">
                    Cost, Insurance & Freight available upon request. 
                    We can quote door-to-door delivery.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground">Export Documentation</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Complete documentation for seamless customs clearance
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
            {exportDocs.map((doc) => (
              <div key={doc} className="flex items-center gap-2 bg-card rounded-lg p-4 shadow-soft">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-foreground">{doc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Countries */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground">Countries We Export To</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Regular shipments to {companyInfo.stats.exportCountries} countries across 5 regions
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {exportCountries.map((region) => (
              <div key={region.region} className="rounded-xl bg-card p-6 shadow-soft">
                <Globe className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-semibold text-foreground mb-3">{region.region}</h3>
                <div className="flex flex-wrap gap-2">
                  {region.countries.map((country) => (
                    <span 
                      key={country}
                      className="rounded-full bg-muted px-3 py-1 text-sm text-muted-foreground"
                    >
                      {country}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary to-tropical-green-light">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Ready to Place an Order?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Contact our export team for pricing, shipping quotes, and custom requirements.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <PrimaryButton to="/contact?type=quote" variant="gold" size="xl">
              Request Quote
            </PrimaryButton>
            <SecondaryButton to="/faq" className="bg-primary-foreground/10 text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/20">
              View FAQ
            </SecondaryButton>
          </div>
        </div>
      </section>
    </Layout>
  );
}
