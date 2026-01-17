import { Layout } from "@/components/layout";
import { SEO } from "@/components/SEO";
import { SITE_URL } from "@/lib/constants";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { companyInfo } from "@/data/companyInfo";

const breadcrumbItems = [
  { name: "Home", url: SITE_URL },
  { name: "Terms of Service", url: `${SITE_URL}/terms` },
];

export default function TermsPage() {
  return (
    <Layout>
      <SEO
        title="Terms of Service"
        description="Terms and conditions for conducting business with DFT Indonesia. Understand our wholesale dried fruit ordering, payment, and shipping policies."
        keywords={["terms of service", "business terms", "wholesale terms", "DFT Indonesia terms"]}
        canonical="/terms"
      />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbItems)),
        }}
      />

      <section className="bg-primary/5 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">
            Terms of Service
          </h1>
          <p className="mt-2 text-muted-foreground">
            Last updated: January 17, 2026
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="prose prose-lg max-w-4xl text-foreground">
            <p className="lead text-muted-foreground">
              These Terms of Service ("Terms") govern the business relationship between {companyInfo.name} ("we," "our," or "us") and wholesale buyers, importers, and distributors ("you" or "Buyer") engaging in transactions for our dried fruit products.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground">
              By placing an order, requesting a quote, or engaging in business with {companyInfo.name}, you acknowledge that you have read, understood, and agree to be bound by these Terms. These Terms apply to all B2B transactions and supersede any prior agreements or communications.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Business Relationship</h2>
            <p className="text-muted-foreground mb-4">
              Our products and services are exclusively for business-to-business (B2B) wholesale transactions. By engaging with us, you confirm that:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>You are a registered business entity or authorized representative</li>
              <li>You have the legal authority to enter into binding contracts</li>
              <li>Orders meet our minimum order quantities (MOQ)</li>
              <li>Products are intended for commercial resale or manufacturing purposes</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Product Information</h2>
            <p className="text-muted-foreground">
              We strive to provide accurate product descriptions, specifications, and imagery. However, natural agricultural products may vary in appearance, size, and characteristics between batches. Specifications provided are typical values and not guarantees. Samples are available upon request for quality verification before placing bulk orders.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Ordering and Pricing</h2>
            <p className="text-muted-foreground mb-4">
              All quotes and pricing are valid for the period specified in the quotation document. Prices are subject to change based on:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Market conditions and raw material availability</li>
              <li>Currency exchange rate fluctuations</li>
              <li>Shipping and logistics costs</li>
              <li>Order volume and specifications</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              Orders are confirmed only upon written acceptance and receipt of agreed payment terms.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Payment Terms</h2>
            <p className="text-muted-foreground mb-4">
              Standard payment terms are specified in each quotation and may include:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Deposit requirement before production commencement</li>
              <li>Balance payment before shipment or against documents</li>
              <li>Letter of Credit (L/C) for qualified buyers</li>
              <li>Wire transfer (T/T) to designated bank accounts</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              Late payments may incur additional charges and affect future order processing.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Shipping and Delivery</h2>
            <p className="text-muted-foreground">
              Shipping terms (Incoterms) are specified in each quotation. Lead times are estimates and may vary based on production schedules, product availability, and shipping conditions. We are not liable for delays caused by customs, port congestion, or force majeure events. Risk of loss transfers according to the agreed Incoterms.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Quality and Claims</h2>
            <p className="text-muted-foreground mb-4">
              All products are manufactured according to our quality standards and relevant certifications. Claims regarding product quality must be:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Submitted in writing within 14 days of receipt</li>
              <li>Accompanied by photographic evidence and samples</li>
              <li>Verified by independent laboratory testing if required</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              We are not responsible for quality deterioration due to improper storage or handling after delivery.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">8. Limitation of Liability</h2>
            <p className="text-muted-foreground">
              Our liability is limited to the value of the products supplied. We are not liable for indirect, consequential, or incidental damages including lost profits, business interruption, or third-party claims. Maximum liability shall not exceed the invoice value of the specific order in question.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">9. Intellectual Property</h2>
            <p className="text-muted-foreground">
              All trademarks, logos, and product information on our website and materials are the property of {companyInfo.name}. Use of our intellectual property requires prior written consent. Private label arrangements are governed by separate agreements.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">10. Governing Law</h2>
            <p className="text-muted-foreground">
              These Terms are governed by the laws of the Republic of Indonesia. Any disputes shall be resolved through good-faith negotiation. If unresolved, disputes shall be submitted to arbitration in accordance with Indonesian arbitration rules.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Information</h2>
            <p className="text-muted-foreground">
              For questions regarding these Terms, please contact us at{" "}
              <a href={`mailto:${companyInfo.email}`} className="text-primary hover:underline">
                {companyInfo.email}
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
