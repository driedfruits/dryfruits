import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Layout } from "@/components/layout";
import { SEO } from "@/components/SEO";
import { CategoryPageSkeleton } from "@/components/products";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { getProductsByCategory, productCategories } from "@/data/companyData";
import { generateItemListSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { SITE_URL, categoryLabels } from "@/lib/constants";
import { Package, Leaf, ChevronRight } from "lucide-react";

export default function ProductCategoryPage() {
  const { category } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 300);
    return () => clearTimeout(timer);
  }, [category]);

  const products = getProductsByCategory(category as any);
  const categoryInfo = productCategories.find(c => c.id === category);

  if (!categoryInfo) {
    return <Layout><div className="container py-20 text-center"><h1 className="text-2xl font-bold">Category not found</h1></div></Layout>;
  }

  if (isLoading) {
    return <Layout><CategoryPageSkeleton /></Layout>;
  }

  const breadcrumbItems = [
    { name: "Home", url: SITE_URL },
    { name: "Products", url: `${SITE_URL}/products` },
    { name: categoryInfo.name, url: `${SITE_URL}/products/${category}` },
  ];

  return (
    <Layout>
      <SEO
        title={`Wholesale ${categoryInfo.name} - Bulk Export from Indonesia`}
        description={`Premium ${categoryInfo.name.toLowerCase()} from Indonesia. Direct manufacturer with USDA/EU Organic certification. MOQ 500kg. ${products.length} products available. Export to 18+ countries.`}
        keywords={[`wholesale ${categoryInfo.name.toLowerCase()}`, `bulk ${categoryInfo.name.toLowerCase()} Indonesia`, `${categoryInfo.name.toLowerCase()} supplier`]}
        canonical={`/products/${category}`}
      />
      {/* ItemList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateItemListSchema(products, categoryInfo.name, `${SITE_URL}/products/${category}`)
          ),
        }}
      />

      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbItems)),
        }}
      />

      <section className="py-16 bg-gradient-to-br from-primary to-tropical-green-light animate-content-reveal">
        <div className="container text-center text-primary-foreground">
          <h1 className="text-4xl font-bold sm:text-5xl mb-4">{categoryInfo.name}</h1>
          <p className="text-xl text-primary-foreground/80">{categoryInfo.description}</p>
        </div>
      </section>

      <div className="bg-muted/50 py-4 animate-content-reveal animation-delay-75">
        <div className="container">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link to="/products" className="hover:text-primary">Products</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground font-medium">{categoryInfo.name}</span>
          </nav>
        </div>
      </div>

      <section className="py-20">
        <div className="container">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product, index) => (
              <Link 
                key={product.id} 
                to={`/products/${category}/${product.id}`} 
                className="group rounded-xl bg-card overflow-hidden shadow-soft hover:shadow-glow transition-all animate-content-reveal opacity-0"
                style={{ animationDelay: `${150 + index * 50}ms`, animationFillMode: 'forwards' }}
              >
                <div className="relative">
                  <OptimizedImage
                    src={product.images?.main || ""}
                    alt={`${product.name} - Premium Indonesian dried fruit for wholesale export`}
                    aspectRatio="square"
                    width={400}
                    height={400}
                    placeholderSrc={product.images?.thumbnail}
                    fallbackIcon={<Package className="h-20 w-20 text-muted-foreground/30 group-hover:scale-110 transition-transform" />}
                  />
                  {product.isOrganic && (
                    <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full flex items-center gap-1 z-10">
                      <Leaf className="h-3 w-3" />Organic
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-2">{product.name}</h3>
                  <p className="text-muted-foreground mb-4">{product.tagline}</p>
                  <p className="text-sm text-primary font-medium">View Details →</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
