import { Link } from "react-router-dom";
import { Layout } from "@/components/layout";
import { productCategories, products } from "@/data/companyData";
import { PrimaryButton } from "@/components/CTAButton";
import { Package, ArrowRight, Leaf } from "lucide-react";

export default function ProductsPage() {
  return (
    <Layout>
      <section className="py-16 bg-gradient-to-br from-primary to-tropical-green-light">
        <div className="container text-center text-primary-foreground">
          <h1 className="text-4xl font-bold sm:text-5xl mb-4">Our Products</h1>
          <p className="text-xl text-primary-foreground/80">Premium dried fruits and spices from Indonesia</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-3 mb-16">
            {productCategories.map((cat) => (
              <Link key={cat.id} to={`/products/${cat.id}`} className="group rounded-2xl bg-gradient-to-br from-primary to-tropical-green-light p-8 text-primary-foreground hover:scale-[1.02] transition-transform">
                <Package className="h-12 w-12 mb-4 opacity-80" />
                <h2 className="text-2xl font-bold mb-2">{cat.name}</h2>
                <p className="text-primary-foreground/80 mb-4">{cat.description}</p>
                <span className="inline-flex items-center gap-2 text-sm font-medium">{cat.productCount} Products <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform" /></span>
              </Link>
            ))}
          </div>

          <h2 className="text-3xl font-bold text-foreground mb-8">All Products</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <Link key={product.id} to={`/products/${product.category}/${product.id}`} className="group rounded-xl bg-card overflow-hidden shadow-soft hover:shadow-glow transition-all">
                <div className="aspect-square bg-gradient-to-br from-secondary to-muted flex items-center justify-center relative">
                  <Package className="h-16 w-16 text-muted-foreground/30 group-hover:scale-110 transition-transform" />
                  {product.isOrganic && <span className="absolute top-2 left-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full flex items-center gap-1"><Leaf className="h-3 w-3" />Organic</span>}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">{product.name}</h3>
                  <p className="text-sm text-muted-foreground">{product.tagline}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
