import { Layout } from "@/components/layout";
import { SEO } from "@/components/SEO";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/constants";
import { ContactForm } from "@/components/forms";
import { companyInfo } from "@/data/companyData";
import { PrimaryButton } from "@/components/CTAButton";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { 
  Package, 
  Palette, 
  Tag, 
  Truck, 
  CheckCircle,
  FileText
} from "lucide-react";

const privateLabelServices = [
  {
    icon: Palette,
    title: "Custom Packaging Design",
    description: "Work with our team to create packaging that reflects your brand identity",
  },
  {
    icon: Tag,
    title: "Private Labeling",
    description: "Your brand name, logo, and design on our premium products",
  },
  {
    icon: Package,
    title: "Flexible Pack Sizes",
    description: "From 50g retail pouches to 25kg bulk bags - any size you need",
  },
  {
    icon: Truck,
    title: "Direct Shipping",
    description: "Ship directly to your warehouse or distribution centers",
  },
];

const packagingOptions = [
  { name: "Retail Pouches", sizes: "50g, 100g, 200g, 500g" },
  { name: "Stand-up Bags", sizes: "100g, 250g, 500g, 1kg" },
  { name: "Bulk Bags", sizes: "5kg, 10kg, 15kg, 25kg" },
  { name: "Carton Boxes", sizes: "10kg, 15kg, 20kg" },
  { name: "Gift Boxes", sizes: "Custom sizes available" },
];

const breadcrumbItems = [
  { name: "Home", url: SITE_URL },
  { name: "Private Label", url: `${SITE_URL}/private-label` },
];

export default function PrivateLabelPage() {
  return (
    <Layout>
      <SEO
        title="Private Label & OEM Dried Fruit Services"
        description="Launch your own brand with our private label dried fruit solutions. Custom packaging, flexible MOQ, complete OEM services. From 500kg. Artwork support included."
        keywords={["private label dried fruit", "OEM fruit manufacturer", "white label dried fruit", "custom packaging fruit", "branded dried fruit"]}
        canonical="/private-label"
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
              Private Label & OEM
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Your brand, our premium Indonesian dried fruits
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground">Our Services</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Complete private label solutions from product selection to delivery
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {privateLabelServices.map((service) => (
              <div 
                key={service.title}
                className="rounded-2xl bg-card p-6 shadow-soft text-center hover:shadow-glow transition-all duration-300"
              >
                <service.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground">How It Works</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              From concept to container in 4 simple steps
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { step: "1", title: "Consultation", desc: "Discuss your product needs, target market, and brand vision" },
              { step: "2", title: "Sampling", desc: "Receive product samples with your packaging mockup" },
              { step: "3", title: "Production", desc: "We produce and package according to your specifications" },
              { step: "4", title: "Delivery", desc: "Direct shipping to your preferred destination" },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-2xl mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packaging Options */}
      <section className="py-20">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Packaging Options</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Choose from a wide range of packaging formats to suit your market and distribution channels.
              </p>
              
              <div className="space-y-4">
                {packagingOptions.map((option) => (
                  <div key={option.name} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">{option.name}</p>
                      <p className="text-sm text-muted-foreground">{option.sizes}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-primary to-tropical-green-light p-8 text-primary-foreground">
              <Package className="h-12 w-12 mb-4" />
              <h3 className="text-2xl font-bold mb-4">MOQ & Pricing</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-primary-foreground/70 text-sm">Minimum Order</p>
                  <p className="text-xl font-bold">{companyInfo.paymentTerms.moq}</p>
                </div>
                <div>
                  <p className="text-primary-foreground/70 text-sm">Lead Time</p>
                  <p className="text-xl font-bold">{companyInfo.paymentTerms.leadTime} + design approval</p>
                </div>
                <div>
                  <p className="text-primary-foreground/70 text-sm">Artwork Support</p>
                  <p className="text-xl font-bold">Included</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Start Your Private Label Project</h2>
              <p className="text-lg text-muted-foreground">
                Tell us about your requirements and we'll create a custom proposal
              </p>
            </div>

            <div className="rounded-2xl bg-card p-8 shadow-soft">
              <ContactForm variant="quote" />
            </div>

            <div className="mt-8 text-center">
              <p className="text-muted-foreground mb-4">Or contact us directly</p>
              <WhatsAppButton 
                variant="full" 
                message="Hi! I'm interested in private label/OEM services. Can we discuss?"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
