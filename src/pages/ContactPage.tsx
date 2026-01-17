import { Layout } from "@/components/layout";
import { SEO } from "@/components/SEO";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { ContactForm } from "@/components/forms";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { companyInfo, socialLinks } from "@/data/companyData";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { socialIcons } from "@/lib/socialIcons";
import { SITE_URL } from "@/lib/constants";

const breadcrumbItems = [
  { name: "Home", url: SITE_URL },
  { name: "Contact", url: `${SITE_URL}/contact` },
];

export default function ContactPage() {
  return (
    <Layout>
      <SEO
        title="Request a Bulk Quote - Contact DFT Indonesia"
        description={`Contact ${companyInfo.shortName} export team for bulk quotes and inquiries. Phone: ${companyInfo.phone}. Email: ${companyInfo.email}. Response within 24 hours.`}
        keywords={["contact dried fruit supplier", "bulk quote request", "Indonesian exporter contact", "wholesale dried fruit inquiry"]}
        canonical="/contact"
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
              Request a Quote
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Get in touch with our export team. We typically respond within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-foreground mb-6">Get In Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <a 
                      href={`mailto:${companyInfo.email}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {companyInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Phone / WhatsApp</p>
                    <a 
                      href={`tel:${companyInfo.phone}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {companyInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Address</p>
                    <p className="text-muted-foreground">{companyInfo.address.full}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Working Hours</p>
                    <p className="text-muted-foreground">{companyInfo.workingHours.full}</p>
                  </div>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="mt-8 p-6 rounded-xl bg-muted">
                <h3 className="font-semibold text-foreground mb-4">Quick Contact</h3>
                <WhatsAppButton variant="full" className="w-full" />
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <h3 className="font-semibold text-foreground mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  {Object.entries(socialLinks).map(([key, url]) => {
                    const Icon = socialIcons[key as keyof typeof socialIcons];
                    return (
                      <a
                        key={key}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                        aria-label={`Follow us on ${key}`}
                      >
                        <Icon className="h-5 w-5" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl bg-card p-8 shadow-soft">
                <ContactForm variant="quote" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-12 bg-muted/30">
        <div className="container">
          <div className="aspect-[21/9] rounded-2xl bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-muted-foreground/30 mx-auto mb-4" />
              <p className="text-muted-foreground">Map placeholder - {companyInfo.address.city}, Indonesia</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
