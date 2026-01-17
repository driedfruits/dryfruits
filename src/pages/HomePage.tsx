import { Link } from "react-router-dom";
import { Layout } from "@/components/layout";
import { SEO } from "@/components/SEO";
import { socialImages } from "@/lib/socialImages";
import { PrimaryButton, SecondaryButton, SecondaryLightButton, AccentButton } from "@/components/CTAButton";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CatalogForm } from "@/components/forms";
import { generateWebSiteSchema } from "@/lib/schema";
import { 
  companyInfo, 
  certifications, 
  productCategories, 
  exportCountries, 
  targetSegments 
} from "@/data/companyData";
import { 
  Leaf, 
  Globe, 
  Factory, 
  Award, 
  Package, 
  Truck, 
  Users, 
  ArrowRight,
  CheckCircle,
  MapPin
} from "lucide-react";

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

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-tropical-green-dark via-primary to-tropical-green-light py-20 lg:py-32">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        <div className="container relative">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-2 text-sm text-on-primary">
              <Leaf className="h-4 w-4" />
              USDA & EU Organic Certified
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-on-primary sm:text-5xl lg:text-6xl">
              {companyInfo.tagline}
            </h1>
            <p className="mb-8 text-lg text-on-primary-muted sm:text-xl">
              Premium dried fruits, vacuum fried snacks, and spices from Indonesia. 
              Direct from source to B2B buyers worldwide.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <PrimaryButton to="/contact" size="xl" variant="gold">
                Request Quote
                <ArrowRight className="h-5 w-5" />
              </PrimaryButton>
              <SecondaryLightButton to="/samples" size="lg">
                Request Samples
              </SecondaryLightButton>
              <WhatsAppButton size="lg" />
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="container mt-16">
          <div className="mx-auto max-w-4xl grid grid-cols-2 gap-6 lg:grid-cols-4">
            {[
              { value: `${companyInfo.stats.yearsExperience}+`, label: "Years Experience" },
              { value: `${companyInfo.stats.exportCountries}`, label: "Export Countries" },
              { value: companyInfo.stats.productionCapacity, label: "Production Capacity" },
              { value: `${companyInfo.stats.productVarieties}`, label: "Product Varieties" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-bold text-on-primary lg:text-4xl">{stat.value}</p>
                <p className="text-sm text-on-primary-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              Why Choose DFT Indonesia?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Indonesia's only export-oriented dried fruit manufacturer with direct farmer partnerships
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Factory,
                title: "Direct From Source",
                description: "We own our processing facility and work directly with Indonesian farmers. No middlemen, better quality, competitive pricing.",
              },
              {
                icon: Award,
                title: "Certified Quality",
                description: "USDA Organic, EU Organic, and HACCP certified. Complete documentation for seamless import into any country.",
              },
              {
                icon: Package,
                title: "Flexible MOQ",
                description: "Starting from 500kg for most products. Trial orders available for new customers. Private label options included.",
              },
            ].map((feature) => (
              <div 
                key={feature.title}
                className="group rounded-2xl bg-card p-8 shadow-soft hover:shadow-glow transition-all duration-300"
              >
                <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <feature.icon className="h-7 w-7" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              Our Product Range
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              From tropical dried fruits to premium spices - all organically grown in Indonesia
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {productCategories.map((category) => (
              <Link
                key={category.id}
                to={`/products/${category.id}`}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-tropical-green-light p-8 text-on-primary transition-transform hover:scale-[1.02]"
              >
                <div className="relative z-10">
                  <Package className="h-12 w-12 mb-4 text-on-primary-muted" />
                  <h3 className="text-2xl font-bold mb-2 text-on-primary">{category.name}</h3>
                  <p className="text-on-primary-muted mb-4">{category.description}</p>
                  <div className="flex items-center gap-2 text-sm font-medium text-on-primary">
                    {category.productCount} Products
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
                  </div>
                </div>
                <div className="absolute -right-8 -bottom-8 h-32 w-32 rounded-full bg-primary-foreground/10" />
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <PrimaryButton to="/products" size="lg">
              View All Products
              <ArrowRight className="h-5 w-5" />
            </PrimaryButton>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              Certified Quality Assurance
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Meeting international standards for food safety and organic production
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {certifications.map((cert) => (
              <div 
                key={cert.id}
                className="flex flex-col items-center rounded-xl bg-card p-6 text-center shadow-soft"
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Leaf className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">{cert.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{cert.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <SecondaryButton to="/certifications" size="lg">
              View Certifications
            </SecondaryButton>
          </div>
        </div>
      </section>

      {/* Target Segments */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              Who We Serve
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              B2B partners across the food industry supply chain
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {targetSegments.map((segment) => (
              <div 
                key={segment.name}
                className="rounded-xl bg-card p-6 shadow-soft hover:shadow-glow transition-all duration-300"
              >
                <Users className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-semibold text-foreground mb-2">{segment.name}</h3>
                <p className="text-sm text-muted-foreground">{segment.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Export Map */}
      <section className="py-20">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-6">
                Exporting to {companyInfo.stats.exportCountries} Countries
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                From our facility in Central Java, we ship to buyers across North America, 
                Europe, Asia Pacific, and the Middle East.
              </p>
              
              <div className="space-y-4">
                {exportCountries.map((region) => (
                  <div key={region.region} className="flex items-start gap-3">
                    <Globe className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">{region.region}</p>
                      <p className="text-sm text-muted-foreground">{region.countries.join(", ")}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <SecondaryButton to="/shipping" size="lg">
                  <Truck className="h-5 w-5 mr-2" />
                  Shipping & Export Info
                </SecondaryButton>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
                <Globe className="h-48 w-48 text-primary/20" />
              </div>
              <div className="absolute top-4 right-4 bg-card rounded-xl p-4 shadow-lg">
                <p className="text-2xl font-bold text-primary">{companyInfo.stats.exportCountries}</p>
                <p className="text-sm text-muted-foreground">Countries</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Download */}
      <section className="py-20 bg-gradient-to-br from-primary to-tropical-green-light">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div className="text-on-primary">
                <h2 className="text-3xl font-bold sm:text-4xl mb-4 text-on-primary">
                  Download Our Product Catalog
                </h2>
                <p className="text-lg text-on-primary-muted mb-6">
                  Get our complete product catalog with specifications, pricing guidance, 
                  and packaging options. Perfect for your procurement team.
                </p>
                <ul className="space-y-3 text-on-primary">
                  {[
                    "Complete product specifications",
                    "FOB pricing guidelines",
                    "Packaging options & MOQs",
                    "Certification details",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-card rounded-2xl p-8 shadow-lg">
                <CatalogForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-4">
            Ready to Partner With Us?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you need samples, quotes, or have questions - our export team is ready to help.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <PrimaryButton to="/contact" size="xl">
              Request a Quote
            </PrimaryButton>
            <SecondaryButton to="/samples" size="lg">
              Request Samples
            </SecondaryButton>
            <WhatsAppButton variant="full" size="lg" />
          </div>
        </div>
      </section>
    </Layout>
  );
}
