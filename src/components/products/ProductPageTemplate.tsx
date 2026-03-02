import { Link } from "react-router-dom";
import { type Product, getRelatedProducts, companyInfo } from "@/data/companyData";
import { SEO } from "@/components/SEO";
import { getCategorySocialImage } from "@/lib/socialImages";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { PrimaryButton, SecondaryButton } from "@/components/CTAButton";
import { Badge } from "@/components/ui/badge";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { Leaf, Package, FileText, ChevronRight, Thermometer, ExternalLink } from "lucide-react";
import { ProductSpecsTable } from "./ProductSpecsTable";
import { ProductPriceTiers } from "./ProductPriceTiers";
import { ProductLogistics } from "./ProductLogistics";
import { ProductFAQ } from "./ProductFAQ";
import { ProductCompliance } from "./ProductCompliance";
import { ProductSensoryApplications } from "./ProductSensoryApplications";
import { ProductSeasonality } from "./ProductSeasonality";

import { StickyInquiryBar } from "./StickyInquiryBar";
import { ContainerCalculator } from "./ContainerCalculator";
import { generateProductSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";
import { SITE_URL, categoryLabels } from "@/lib/constants";

interface ProductPageTemplateProps {
  product: Product;
}

export function ProductPageTemplate({ product }: ProductPageTemplateProps) {
  const relatedProducts = getRelatedProducts(product.id);

  const seoTitle = product.metaTitle || `Wholesale ${product.name} - Bulk Export from Indonesia`;
  const seoDescription = product.metaDescription || `Direct manufacturer of premium ${product.name.toLowerCase()} from Indonesia. ${product.isOrganic ? "USDA/EU Organic certified. " : ""}Bulk packaging available. MOQ ${product.pricing.moq}. View specs & pricing.`;
  const seoKeywords = product.keywords || [`bulk ${product.name.toLowerCase()}`, `wholesale ${product.name.toLowerCase()} Indonesia`, `${product.name.toLowerCase()} supplier`];

  // Get OG image - prefer product image, fall back to category image
  const ogImage = product.images?.main 
    ? `${SITE_URL}${product.images.main}` 
    : getCategorySocialImage(product.category);

  const breadcrumbItems = [
    { name: "Home", url: SITE_URL },
    { name: "Wholesale Dried Fruits", url: `${SITE_URL}/products` },
    { name: categoryLabels[product.category], url: `${SITE_URL}/products` },
    { name: `${product.name} Bulk`, url: `${SITE_URL}/products/${product.category}/${product.id}` },
  ];

  return (
    <>
      <SEO
        title={seoTitle}
        description={seoDescription}
        keywords={seoKeywords}
        canonical={`/products/${product.category}/${product.id}`}
        ogType="product"
        ogImage={ogImage}
      />
      {/* Product Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateProductSchema(product)),
        }}
      />

      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbItems)),
        }}
      />

      {/* Product FAQ Schema */}
      {product.faqs && product.faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateFAQSchema(product.faqs)),
          }}
        />
      )}

      <div className="min-h-screen bg-background pb-20 lg:pb-0">
        {/* Breadcrumb */}
        <div className="bg-muted/50 py-4">
          <div className="container">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground overflow-x-auto scrollbar-hide whitespace-nowrap pb-1">
              <Link to="/" className="hover:text-primary transition-colors shrink-0 min-h-[44px] flex items-center">Home</Link>
              <ChevronRight className="h-4 w-4 shrink-0" />
              <Link to="/products" className="hover:text-primary transition-colors shrink-0 min-h-[44px] flex items-center">Products</Link>
              <ChevronRight className="h-4 w-4 shrink-0" />
              <Link to="/products" className="hover:text-primary transition-colors shrink-0 min-h-[44px] flex items-center">
                {categoryLabels[product.category]}
              </Link>
              <ChevronRight className="h-4 w-4 shrink-0" />
              <span className="text-foreground font-medium truncate max-w-[150px] sm:max-w-none">{product.name}</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-12 lg:py-16">
          <div className="container">
            <div className="grid gap-10 lg:grid-cols-2">
              {/* Product Image */}
              <div className="relative">
                <OptimizedImage
                  src={product.images?.main || ""}
                  alt={`${product.name} wholesale supplier Indonesia - ${product.isOrganic ? "USDA & EU organic certified " : ""}${categoryLabels[product.category].toLowerCase()} for bulk export`}
                  aspectRatio="square"
                  width={600}
                  height={600}
                  placeholderSrc={product.images?.thumbnail}
                  priority={true}
                  className="rounded-2xl"
                  fallbackIcon={<Package className="h-32 w-32 text-muted-foreground/30" />}
                />
                {product.isOrganic && (
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground z-10">
                    <Leaf className="h-3 w-3 mr-1" />
                    Organic Certified
                  </Badge>
                )}
              </div>

              {/* Wholesale Data Card */}
              <div className="flex flex-col justify-center">
                <Badge variant="outline" className="w-fit mb-3">
                  {categoryLabels[product.category]}
                </Badge>
                <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
                  Wholesale {product.name} – {product.specifications.size?.split(",")[0]}
                </h1>
                <p className="text-muted-foreground mb-4">
                  Origin: Indonesia | {product.availability?.currentStatus === "in-stock" ? "✓ In Stock" : "Pre-order Available"}
                </p>
                
                {/* Price */}
                <div className="mb-6">
                  <p className="text-2xl lg:text-3xl font-bold text-primary">{product.pricing.fobBase}</p>
                  <p className="text-sm text-muted-foreground">Volume discounts for container loads</p>
                </div>

                {/* Quick Highlights */}
                <ul className="space-y-2 mb-6 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="font-medium">Certifications:</span>
                    <span className="text-muted-foreground">{product.certifications.join(", ")}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="font-medium">MOQ:</span>
                    <span className="text-muted-foreground">{product.pricing.moq}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="font-medium">Lead Time:</span>
                    <span className="text-muted-foreground">{product.pricing.leadTime}</span>
                  </li>
                  {product.pricing.samplePolicy && (
                    <li className="flex items-center gap-2">
                      <span className="font-medium">Sample:</span>
                      <span className="text-muted-foreground">{product.pricing.samplePolicy}</span>
                    </li>
                  )}
                </ul>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-3">
                  <PrimaryButton to="/contact" size="lg">
                    <FileText className="h-5 w-5 mr-2" />
                    Request Bulk Quote
                  </PrimaryButton>
                  <SecondaryButton to="/samples" size="lg">
                    <Package className="h-5 w-5 mr-2" />
                    Order Free Sample
                  </SecondaryButton>
                  <WhatsAppButton 
                    message={`Hi! I'm interested in bulk ${product.name}. MOQ: ${product.pricing.moq}. Please share pricing and availability.`}
                    size="lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specifications Table */}
        <ProductSpecsTable product={product} />


        {/* Logistics & Packaging */}
        <ProductLogistics product={product} />

        {/* Container Calculator */}
        <section className="py-12">
          <div className="container max-w-3xl">
            <h2 className="text-2xl font-bold text-foreground mb-6">Container Load Estimator</h2>
            <ContainerCalculator defaultProductId={product.id} compact={true} headingLevel="h3" />
          </div>
        </section>

        {/* Storage Quick Reference */}
        {(product.specifications.storageTemp || product.specifications.storageHumidity) && (
          <section className="py-6">
            <div className="container max-w-3xl">
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Thermometer className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm">Storage Conditions</p>
                    <p className="text-xs text-muted-foreground">
                      {product.specifications.storageTemp && `Temp: ${product.specifications.storageTemp}`}
                      {product.specifications.storageTemp && product.specifications.storageHumidity && " | "}
                      {product.specifications.storageHumidity && `Humidity: ${product.specifications.storageHumidity}`}
                    </p>
                  </div>
                </div>
                <Link 
                  to="/storage-guide" 
                  className="text-sm text-primary hover:underline flex items-center gap-1 shrink-0"
                >
                  Full Storage Guide
                  <ExternalLink className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* Compliance */}
        <ProductCompliance product={product} />

        {/* Sensory Profile & Applications */}
        <ProductSensoryApplications product={product} />

        {/* Seasonality */}
        <ProductSeasonality availability={product.availability} productName={product.name} />

        {/* Price Tiers */}
        <ProductPriceTiers pricing={product.pricing} productName={product.name} />

        {/* Product FAQ */}
        <ProductFAQ faqs={product.faqs} productName={product.name} />

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="py-12 bg-muted/30">
            <div className="container">
              <h2 className="text-2xl font-bold text-foreground mb-6">Related Products</h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {relatedProducts.map((related) => (
                  <Link 
                    key={related.id} 
                    to={`/products/${related.category}/${related.id}`}
                    className="group bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-glow transition-all"
                  >
                    <OptimizedImage
                      src={related.images?.main || ""}
                      alt={`${related.name} - Wholesale ${categoryLabels[related.category].toLowerCase()} from Indonesia, ${related.pricing.fobBase}`}
                      aspectRatio="square"
                      width={280}
                      height={280}
                      className="group-hover:scale-105 transition-transform duration-300"
                      fallbackIcon={<Package className="h-12 w-12 text-muted-foreground/30 group-hover:scale-110 transition-transform" />}
                    />
                    <div className="p-4">
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm">
                        {related.name}
                      </h3>
                      <p className="text-xs text-muted-foreground">{related.pricing.fobBase}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Final CTA */}
        <section className="py-16">
          <div className="container text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-3">
              Ready to Order Bulk {product.name}?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Get in touch with our export team for pricing, samples, and custom requirements.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <PrimaryButton to="/contact" size="lg">
                Request Quote
              </PrimaryButton>
              <WhatsAppButton 
                variant="full" 
                size="lg"
                message={`Hi! I want to order bulk ${product.name}. Please share pricing and availability.`}
              />
            </div>
          </div>
        </section>

        {/* Sticky Mobile CTA */}
        <StickyInquiryBar product={product} />
      </div>
    </>
  );
}
