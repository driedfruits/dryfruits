import { Link } from "react-router-dom";
import { Layout } from "@/components/layout";
import { SEO } from "@/components/SEO";
import { socialImages } from "@/lib/socialImages";
import { generateBreadcrumbSchema, generateItemListSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/constants";
import { products } from "@/data/companyData";
import { ProductCard, ProductComparisonTable } from "@/components/products";
import { ChevronRight } from "lucide-react";

const breadcrumbItems = [
  { name: "Home", url: SITE_URL },
  { name: "Products", url: `${SITE_URL}/products` },
];

export default function ProductsPage() {
  return (
    <Layout>
      <SEO
        title="Wholesale Dried Fruit Products - Bulk Export from Indonesia"
        description="Browse our complete range of premium dried tropical fruits. USDA & EU Organic certified. MOQ 500kg. Direct from Indonesian manufacturer."
        keywords={["wholesale dried fruit products", "bulk dried fruit Indonesia", "dried fruit catalog", "organic dried fruit range"]}
        canonical="/products"
        ogImage={socialImages.products}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbItems)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateItemListSchema(products, "Dried Fruits", `${SITE_URL}/products`)
          ),
        }}
      />

      <section className="py-16 bg-gradient-to-br from-primary to-tropical-green-light animate-content-reveal">
        <div className="container text-center text-primary-foreground">
          <h1 className="text-4xl font-bold sm:text-5xl mb-4">Our Products</h1>
          <p className="text-xl text-primary-foreground/80">Premium dried tropical fruits from Indonesia</p>
        </div>
      </section>

      {/* Breadcrumb Nav */}
      <div className="bg-muted/50 py-4 animate-content-reveal animation-delay-75">
        <div className="container">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors min-h-[44px] flex items-center">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground font-medium min-h-[44px] flex items-center">Products</span>
          </nav>
        </div>
      </div>

      <section className="py-20">
        <div className="container">
          {/* Product Comparison Tool */}
          <div className="mb-16">
            <ProductComparisonTable />
          </div>

          {/* All Products Grid */}
          <h2 className="text-3xl font-bold text-foreground mb-8">Our Dried Fruits</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                animationDelay={150 + index * 50}
                showImage
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
