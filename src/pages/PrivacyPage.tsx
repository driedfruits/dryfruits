import { Layout } from "@/components/layout";
import { SEO } from "@/components/SEO";
import { SITE_URL } from "@/lib/constants";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { companyInfo } from "@/data/companyInfo";

const breadcrumbItems = [
  { name: "Home", url: SITE_URL },
  { name: "Privacy Policy", url: `${SITE_URL}/privacy` },
];

export default function PrivacyPage() {
  return (
    <Layout>
      <SEO
        title="Privacy Policy"
        description="Privacy policy for DFT Indonesia. Learn how we collect, use, and protect your data when you interact with our wholesale dried fruit services."
        keywords={["privacy policy", "data protection", "DFT Indonesia privacy"]}
        canonical="/privacy"
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
            Privacy Policy
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
              {companyInfo.name} ("we," "our," or "us") is committed to protecting the privacy of our business partners and website visitors. This Privacy Policy explains how we collect, use, and safeguard your information.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Information We Collect</h2>
            <p className="text-muted-foreground mb-4">
              As a B2B wholesale supplier, we collect information necessary to conduct business relationships:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Business contact information (company name, contact person, email, phone number)</li>
              <li>Shipping and billing addresses</li>
              <li>Order history and product preferences</li>
              <li>Communication records related to inquiries and orders</li>
              <li>Website usage data through cookies and analytics</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">How We Use Your Information</h2>
            <p className="text-muted-foreground mb-4">
              We use the collected information for the following purposes:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Processing and fulfilling wholesale orders</li>
              <li>Communicating about products, pricing, and shipments</li>
              <li>Providing customer support and responding to inquiries</li>
              <li>Sending relevant product updates and industry information</li>
              <li>Improving our website and services</li>
              <li>Complying with legal and regulatory requirements</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Information Sharing</h2>
            <p className="text-muted-foreground mb-4">
              We do not sell or rent your personal information. We may share information with:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Shipping carriers to fulfill orders</li>
              <li>Payment processors for transaction completion</li>
              <li>Service providers who assist our operations (under confidentiality agreements)</li>
              <li>Legal authorities when required by law</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Data Security</h2>
            <p className="text-muted-foreground">
              We implement appropriate technical and organizational measures to protect your business information against unauthorized access, alteration, disclosure, or destruction. This includes secure data transmission, access controls, and regular security assessments.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Cookies</h2>
            <p className="text-muted-foreground">
              Our website uses cookies to enhance your browsing experience and analyze website traffic. You can control cookie preferences through your browser settings. Essential cookies are required for basic website functionality.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Your Rights</h2>
            <p className="text-muted-foreground mb-4">
              Depending on your jurisdiction, you may have the right to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information (subject to legal retention requirements)</li>
              <li>Opt out of marketing communications</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Information</h2>
            <p className="text-muted-foreground">
              For privacy-related inquiries or to exercise your rights, please contact us at{" "}
              <a href={`mailto:${companyInfo.email}`} className="text-primary hover:underline">
                {companyInfo.email}
              </a>
              .
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Policy Updates</h2>
            <p className="text-muted-foreground">
              We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. We encourage you to review this page regularly. Continued use of our services after changes constitutes acceptance of the updated policy.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
