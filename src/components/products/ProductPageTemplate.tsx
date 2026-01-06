import { Link } from "react-router-dom";
import { type Product, getRelatedProducts } from "@/data/companyData";
import { Button } from "@/components/ui/button";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { PrimaryButton, SecondaryButton } from "@/components/CTAButton";
import { Badge } from "@/components/ui/badge";
import { Leaf, Package, Truck, FileText, ChevronRight } from "lucide-react";

interface ProductPageTemplateProps {
  product: Product;
}

export function ProductPageTemplate({ product }: ProductPageTemplateProps) {
  const relatedProducts = getRelatedProducts(product.id);
  
  const categoryLabels = {
    "dried-fruits": "Dried Fruits",
    "vacuum-fried": "Vacuum Fried Fruits",
    "ginger-turmeric": "Ginger & Turmeric",
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="bg-muted/50 py-4">
        <div className="container">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link to="/products" className="hover:text-primary transition-colors">Products</Link>
            <ChevronRight className="h-4 w-4" />
            <Link to={`/products/${product.category}`} className="hover:text-primary transition-colors">
              {categoryLabels[product.category]}
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground font-medium">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 lg:py-20">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Product Image */}
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-secondary to-muted overflow-hidden">
                <div className="flex h-full items-center justify-center text-muted-foreground">
                  <Package className="h-32 w-32 opacity-30" />
                </div>
              </div>
              {product.isOrganic && (
                <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                  <Leaf className="h-3 w-3 mr-1" />
                  Organic Certified
                </Badge>
              )}
            </div>

            {/* Product Info */}
            <div className="flex flex-col justify-center">
              <Badge variant="outline" className="w-fit mb-4">
                {categoryLabels[product.category]}
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
                {product.name}
              </h1>
              <p className="text-xl text-primary font-medium mb-4">
                {product.tagline}
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                {product.description}
              </p>
              
              {/* Certifications */}
              <div className="flex flex-wrap gap-2 mb-8">
                {product.certifications.map((cert) => (
                  <Badge key={cert} variant="secondary" className="text-sm">
                    <Leaf className="h-3 w-3 mr-1" />
                    {cert}
                  </Badge>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <PrimaryButton to="/contact?type=quote" size="lg">
                  <FileText className="h-5 w-5 mr-2" />
                  Request Quote
                </PrimaryButton>
                <SecondaryButton to="/samples" size="lg">
                  <Package className="h-5 w-5 mr-2" />
                  Request Sample
                </SecondaryButton>
                <WhatsAppButton 
                  message={`Hi! I'm interested in ${product.name}. Can you share more details?`}
                  size="lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl font-bold text-foreground mb-8">Specifications</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Object.entries(product.specifications).map(([key, value]) => (
              value && (
                <div key={key} className="bg-card rounded-xl p-6 shadow-soft">
                  <p className="text-sm text-muted-foreground uppercase tracking-wide mb-1">
                    {key.replace(/([A-Z])/g, " $1").trim()}
                  </p>
                  <p className="text-lg font-semibold text-foreground">{value}</p>
                </div>
              )
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-foreground mb-8">Applications</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {product.applications.map((app, index) => (
              <div 
                key={app} 
                className="flex items-center gap-3 bg-card rounded-xl p-4 shadow-soft"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary font-bold">
                  {index + 1}
                </div>
                <span className="text-foreground font-medium">{app}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packaging Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl font-bold text-foreground mb-8">Packaging Options</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-card rounded-xl p-6 shadow-soft">
              <Package className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Bulk Packaging</h3>
              <p className="text-muted-foreground">{product.packaging.bulk}</p>
            </div>
            <div className="bg-card rounded-xl p-6 shadow-soft">
              <Package className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Retail Ready</h3>
              <p className="text-muted-foreground">{product.packaging.retail}</p>
            </div>
            {product.packaging.custom && (
              <div className="bg-card rounded-xl p-6 shadow-soft">
                <Package className="h-10 w-10 text-accent mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Custom / Private Label</h3>
                <p className="text-muted-foreground">Your branding, your design</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Pricing & MOQ Section */}
      <section className="py-16">
        <div className="container">
          <div className="bg-gradient-to-br from-primary to-tropical-green-light rounded-2xl p-8 lg:p-12 text-primary-foreground">
            <div className="grid gap-8 lg:grid-cols-4">
              <div>
                <p className="text-primary-foreground/70 uppercase tracking-wide text-sm mb-1">FOB Pricing</p>
                <p className="text-2xl font-bold">{product.pricing.fobBase}</p>
              </div>
              <div>
                <p className="text-primary-foreground/70 uppercase tracking-wide text-sm mb-1">Minimum Order</p>
                <p className="text-2xl font-bold">{product.pricing.moq}</p>
              </div>
              <div>
                <p className="text-primary-foreground/70 uppercase tracking-wide text-sm mb-1">Lead Time</p>
                <p className="text-2xl font-bold">{product.pricing.leadTime}</p>
              </div>
              <div className="flex items-center">
                <Button variant="gold" size="lg" asChild className="w-full lg:w-auto">
                  <Link to="/contact?type=quote">
                    <Truck className="h-5 w-5 mr-2" />
                    Get Custom Quote
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 bg-muted/30">
          <div className="container">
            <h2 className="text-3xl font-bold text-foreground mb-8">Related Products</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {relatedProducts.map((related) => (
                <Link 
                  key={related.id} 
                  to={`/products/${related.category}/${related.id}`}
                  className="group bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-glow transition-all duration-300"
                >
                  <div className="aspect-square bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
                    <Package className="h-16 w-16 text-muted-foreground/30 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {related.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{related.tagline}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="py-20">
        <div className="container text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Ready to Order {product.name}?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get in touch with our export team for pricing, samples, and custom requirements.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <PrimaryButton to="/contact?type=quote" size="xl">
              Request Quote
            </PrimaryButton>
            <WhatsAppButton 
              variant="full" 
              size="lg"
              message={`Hi! I want to order ${product.name}. Please share pricing and availability.`}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
