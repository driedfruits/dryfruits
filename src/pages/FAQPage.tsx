import { Layout } from "@/components/layout";
import { SEO } from "@/components/SEO";
import { faqItems, companyInfo } from "@/data/companyData";
import { generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/constants";
import { PrimaryButton } from "@/components/CTAButton";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { FAQAccordion } from "@/components/ui/faq-accordion";

const breadcrumbItems = [
  { name: "Home", url: SITE_URL },
  { name: "FAQ", url: `${SITE_URL}/faq` },
];

export default function FAQPage() {
  return (
    <Layout>
      <SEO
        title="FAQ - Wholesale Dried Fruit Questions Answered"
        description="Frequently asked questions about ordering wholesale dried fruits from Indonesia. Learn about MOQ, shipping, certifications, lead times, and payment terms."
        keywords={["dried fruit FAQ", "wholesale fruit questions", "MOQ dried fruit", "shipping dried fruit Indonesia"]}
        canonical="/faq"
      />
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbItems)),
        }}
      />
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema(faqItems)),
        }}
      />

      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-primary to-tropical-green-light">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center text-primary-foreground">
            <h1 className="text-4xl font-bold sm:text-5xl mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Everything you need to know about ordering from {companyInfo.shortName}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <FAQAccordion items={[...faqItems]} variant="separated" />
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Still Have Questions?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our export team is here to help. Reach out via email or WhatsApp for quick responses.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <PrimaryButton to="/contact">
                Contact Us
              </PrimaryButton>
              <WhatsAppButton variant="full" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
