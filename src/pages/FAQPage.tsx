import { Layout } from "@/components/layout";
import { SEO } from "@/components/SEO";
import { faqItems, companyInfo } from "@/data/companyData";
import { PrimaryButton } from "@/components/CTAButton";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { generateFAQSchema } from "@/lib/schema";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQPage() {
  return (
    <Layout>
      <SEO
        title="FAQ - Wholesale Dried Fruit Questions Answered"
        description="Frequently asked questions about ordering wholesale dried fruits from Indonesia. Learn about MOQ, shipping, certifications, lead times, and payment terms."
        keywords={["dried fruit FAQ", "wholesale fruit questions", "MOQ dried fruit", "shipping dried fruit Indonesia"]}
        canonical="/faq"
      />
      {/* FAQPage Schema */}
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
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-card rounded-xl px-6 shadow-soft border-none"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary hover:no-underline py-6">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
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
