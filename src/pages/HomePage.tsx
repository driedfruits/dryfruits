import { Layout } from "@/components/layout";
import { SEO } from "@/components/SEO";
import { socialImages } from "@/lib/socialImages";
import { generateWebSiteSchema } from "@/lib/schema";
import { 
  HeroSection,
  ManufacturingSection,
  FactoryGallerySection,
  FarmersSection,
  ProductionProcessSection,
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
        title="Dried Tropical Fruit OEM Manufacturer"
        description="Indonesia OEM manufacturer of dehydrated tropical dried fruits. Private label, MOQ 800kg, HACCP & Fair Trade certified. Export to 18+ countries."
        keywords={["OEM dried fruit manufacturer", "dehydrated tropical fruits Indonesia", "private label dried fruit manufacturer", "wholesale dried fruit Indonesia", "B2B dried fruit supplier", "Indonesian fruit exporter"]}
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

      <HeroSection />
      <ManufacturingSection />
      <FactoryGallerySection />
      <FarmersSection />
      
      <ProductCategoriesSection />
      <CertificationsSection />
      <TargetSegmentsSection />
      <ProductionProcessSection />
      <ExportMapSection />
      <CatalogDownloadSection />
      <FinalCTASection />
    </Layout>
  );
}
