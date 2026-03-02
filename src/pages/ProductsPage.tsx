import { Layout } from "@/components/layout";
import { SEO } from "@/components/SEO";
import { socialImages } from "@/lib/socialImages";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/constants";
import { products } from "@/data/companyData";
import { ProductCard } from "@/components/products";
import { ProductComparisonTable } from "@/components/products";

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
      <section className="py-16 bg-gradient-to-br from-primary to-tropical-green-light">
        <div className="container text-center text-primary-foreground">
          <h1 className="text-4xl font-bold sm:text-5xl mb-4">Our Products</h1>
          <p className="text-xl text-primary-foreground/80">Premium dried tropical fruits from Indonesia</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          {/* Product Comparison Tool */}
          <div className="mb-16">
            <ProductComparisonTable />
          </div>

          {/* All Products Grid */}
          <h2 className="text-3xl font-bold text-foreground mb-8">Our Dried Fruits</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
