import { Layout } from "@/components/layout";
import { SEO } from "@/components/SEO";
import { socialImages } from "@/lib/socialImages";
import { generateWebSiteSchema } from "@/lib/schema";
import { 
  HeroSection,
  ManufacturingSection,
  FactoryGallerySection,
  FarmersSection,
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
        title="Dehydrated Dried Tropical Fruits OEM Manufacturer from Indonesia"
        description="Fully export licensed OEM manufacturer of organic and non-organic dehydrated dried fruits from Indonesia. Chunks, slices, cuts packed with your brand. MOQ 800kg. HACCP & Fair Trade certified."
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
      <ExportMapSection />
      <CatalogDownloadSection />
      <FinalCTASection />
    </Layout>
  );
}
