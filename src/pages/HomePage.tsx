import { Layout } from "@/components/layout";
import { SEO } from "@/components/SEO";
import { socialImages } from "@/lib/socialImages";
import { generateWebSiteSchema, generateOrganizationSchema } from "@/lib/schema";
import { 
  HeroSection,
  WhyChooseUs,
  ManufacturingSection,
  ProductCategoriesSection,
  CertificationsSection,
  TargetSegmentsSection,
  ExportMapSection,
  CatalogDownloadSection,
  FinalCTASection
} from "@/components/home";

export default function HomePage() {
  return (
    <Layout>
      <SEO
        title="Wholesale Dried Fruit Manufacturer & Exporter from Indonesia"
        description="Indonesia's premier B2B dried fruit manufacturer. USDA & EU Organic certified. Vacuum-fried snacks, dried tropical fruits & private label solutions. MOQ 500kg. Export to 18+ countries."
        keywords={["wholesale dried fruit Indonesia", "dried fruit manufacturer", "organic dried fruit exporter", "B2B dried fruit supplier", "Indonesian fruit exporter"]}
        canonical="/"
        ogImage={socialImages.home}
      />
      {/* WebSite Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateWebSiteSchema()),
        }}
      />
      {/* Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateOrganizationSchema()),
        }}
      />

      <HeroSection />
      <ManufacturingSection />
      <WhyChooseUs />
      <ProductCategoriesSection />
      <CertificationsSection />
      <TargetSegmentsSection />
      <ExportMapSection />
      <CatalogDownloadSection />
      <FinalCTASection />
    </Layout>
  );
}
