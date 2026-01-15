import { Layout } from "@/components/layout";
import { SEO } from "@/components/SEO";
import { ContactForm } from "@/components/forms";
import { companyInfo } from "@/data/companyData";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Package, CheckCircle, Clock, Truck } from "lucide-react";

export default function SamplesPage() {
  return (
    <Layout>
      <SEO
        title="Request Free Product Samples"
        description="Request free dried fruit samples for quality evaluation. 50g-500g sample packs available. DHL/FedEx express shipping. Processing time 3-5 business days."
        keywords={["dried fruit samples", "free product samples", "fruit sample request", "quality evaluation samples"]}
        canonical="/samples"
      />
      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-primary to-tropical-green-light">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center text-primary-foreground">
            <h1 className="text-4xl font-bold sm:text-5xl mb-4">
              Request Samples
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Try before you buy - request product samples for quality evaluation
            </p>
          </div>
        </div>
      </section>

      {/* Sample Info */}
      <section className="py-12">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { icon: Package, title: "Sample Size", value: "50g - 500g per product" },
              { icon: Clock, title: "Processing Time", value: "3-5 business days" },
              { icon: Truck, title: "Shipping", value: "DHL/FedEx Express" },
            ].map((item) => (
              <div key={item.title} className="rounded-xl bg-card p-6 shadow-soft text-center">
                <item.icon className="h-10 w-10 text-primary mx-auto mb-3" />
                <p className="text-sm text-muted-foreground">{item.title}</p>
                <p className="text-lg font-bold text-foreground">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Request Form */}
      <section className="py-20">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Info */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Sample Policy</h2>
              <div className="space-y-4 mb-8">
                {[
                  "Samples are provided free of charge for qualified buyers",
                  "Shipping costs are borne by the requester",
                  "Multiple product samples available in one shipment",
                  "COA and specifications included with samples",
                  "Sample costs may be credited against first order",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>

              <div className="rounded-xl bg-muted p-6">
                <h3 className="font-semibold text-foreground mb-3">Prefer to chat first?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Reach out on WhatsApp to discuss your sample requirements
                </p>
                <WhatsAppButton 
                  variant="full"
                  message="Hi! I'd like to request product samples. Can you help?"
                />
              </div>
            </div>

            {/* Form */}
            <div className="rounded-2xl bg-card p-8 shadow-soft">
              <ContactForm variant="sample" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
