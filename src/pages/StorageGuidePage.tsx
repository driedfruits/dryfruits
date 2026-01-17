import { Layout } from "@/components/layout";
import { SEO } from "@/components/SEO";
import { socialImages } from "@/lib/socialImages";
import { PrimaryButton } from "@/components/CTAButton";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Link } from "react-router-dom";
import { 
  Thermometer, 
  Droplets, 
  AlertTriangle, 
  CheckCircle2, 
  XCircle,
  Warehouse,
  Package,
  ChevronRight,
  Snowflake,
  Wind,
  Timer,
  Shield,
  Leaf,
  Sparkles,
  Apple
} from "lucide-react";
import { storageGuidelines, products, storageFAQs } from "@/data/companyData";
import { generateFAQSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/constants";
import { FAQAccordion } from "@/components/ui/faq-accordion";

const categoryIcons: Record<string, React.ReactNode> = {
  "apple": <Apple className="h-6 w-6" />,
  "sparkles": <Sparkles className="h-6 w-6" />,
  "snowflake": <Snowflake className="h-6 w-6" />,
  "leaf": <Leaf className="h-6 w-6" />,
};

const practiceIcons: Record<string, React.ReactNode> = {
  "thermometer": <Thermometer className="h-5 w-5" />,
  "droplets": <Droplets className="h-5 w-5" />,
  "package": <Package className="h-5 w-5" />,
  "timer": <Timer className="h-5 w-5" />,
  "shield": <Shield className="h-5 w-5" />,
  "wind": <Wind className="h-5 w-5" />,
};

const breadcrumbItems = [
  { name: "Home", url: SITE_URL },
  { name: "Storage Guide", url: `${SITE_URL}/storage-guide` },
];

export default function StorageGuidePage() {
  // Get unique products with storage specs for reference table
  const productsWithStorage = products.filter(
    p => p.specifications.storageTemp || p.specifications.storageHumidity || p.specifications.waterActivity
  ).slice(0, 12);

  return (
    <Layout>
      <SEO
        title="Dried Fruit Storage Guide - Temperature, Humidity & Shelf Life"
        description="Expert guide on storing dried fruits and powders. Learn optimal temperature, humidity, water activity levels. Maximize shelf life for bulk wholesale orders."
        keywords={["dried fruit storage", "water activity", "humidity control warehouse", "dried fruit shelf life", "aw food safety"]}
        canonical="/storage-guide"
        ogImage={socialImages.storageGuide}
      />
      
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbItems)),
        }}
      />
      
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema(storageFAQs)),
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-16 lg:py-20">
        <div className="container">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground font-medium">Storage Guide</span>
          </nav>
          
          <div className="max-w-3xl">
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Storage & Handling Guide
            </h1>
            <p className="text-lg text-muted-foreground">
              Maximize shelf life and preserve quality with proper storage conditions. 
              Essential guidelines for warehouse managers, importers, and distributors.
            </p>
          </div>
        </div>
      </section>

      {/* Section 1: Understanding Water Activity */}
      <section className="py-12 lg:py-16">
        <div className="container">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Droplets className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Understanding Water Activity (aw)</h2>
            </div>
            
            <div className="bg-card rounded-xl p-6 lg:p-8 shadow-soft mb-8">
              <p className="text-muted-foreground mb-6">
                <strong className="text-foreground">Water activity (aw)</strong> measures the amount of water 
                available for microbial growth in food products. Unlike moisture content, aw directly indicates 
                product stability and shelf life potential.
              </p>
              
              <div className="mb-6">
                <p className="font-medium text-foreground mb-3">Why aw Matters for Dried Fruits:</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span><strong>aw ≤0.60:</strong> Prevents all bacterial and most mold growth</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span><strong>aw 0.60-0.70:</strong> Some molds may grow slowly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-yellow-500 mt-0.5 shrink-0" />
                    <span><strong>aw &gt;0.70:</strong> Risk of yeast and mold proliferation</span>
                  </li>
                </ul>
              </div>

              {/* Visual aw Scale */}
              <div className="bg-muted/50 rounded-lg p-4">
                <p className="text-xs font-medium text-muted-foreground mb-2 text-center">Water Activity Scale</p>
                <div className="relative h-8 bg-gradient-to-r from-primary via-yellow-500 to-destructive rounded-full overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-between px-4 text-xs font-medium text-white">
                    <span>0.0</span>
                    <span>0.60</span>
                    <span>0.85</span>
                    <span>1.0</span>
                  </div>
                </div>
                <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                  <span>Safe Zone</span>
                  <span>Caution</span>
                  <span>Danger</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Storage by Category */}
      <section className="py-12 lg:py-16 bg-muted/30">
        <div className="container">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
            Storage Conditions by Product Category
          </h2>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {storageGuidelines.categories.map((category) => (
              <div key={category.name} className="bg-card rounded-xl p-6 shadow-soft">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    {categoryIcons[category.icon] || <Package className="h-6 w-6" />}
                  </div>
                  <h3 className="font-semibold text-foreground">{category.name}</h3>
                </div>
                
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-muted-foreground">
                      <Thermometer className="h-4 w-4" />
                      Temperature
                    </span>
                    <span className="font-medium text-foreground">{category.tempRange}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-muted-foreground">
                      <Droplets className="h-4 w-4" />
                      Humidity
                    </span>
                    <span className="font-medium text-foreground">{category.humidityMax}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-muted-foreground">
                      <Timer className="h-4 w-4" />
                      Water Activity
                    </span>
                    <span className="font-medium text-foreground">{category.waterActivity}</span>
                  </div>
                  <div className="pt-2 border-t border-border">
                    <span className="text-muted-foreground">Shelf Life: </span>
                    <span className="font-medium text-primary">{category.shelfLife}</span>
                  </div>
                </div>
                
                {category.tips && category.tips.length > 0 && (
                  <ul className="mt-4 pt-4 border-t border-border space-y-1">
                    {category.tips.map((tip, idx) => (
                      <li key={idx} className="text-xs text-muted-foreground flex items-start gap-1.5">
                        <span className="text-primary">•</span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Warehouse Best Practices */}
      <section className="py-12 lg:py-16">
        <div className="container">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Warehouse className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-foreground">Warehouse Best Practices</h2>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {storageGuidelines.bestPractices.map((practice) => (
              <div key={practice.title} className="bg-card rounded-xl p-6 shadow-soft">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-muted rounded-lg text-primary">
                    {practiceIcons[practice.icon] || <CheckCircle2 className="h-5 w-5" />}
                  </div>
                  <h3 className="font-semibold text-foreground">{practice.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{practice.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Packaging Integrity */}
      <section className="py-12 lg:py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Package className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Packaging Integrity Guidelines</h2>
            </div>
            
            <div className="grid gap-4 md:grid-cols-2">
              {[
                { title: "Moisture Barrier Films", desc: "Use high-barrier packaging (MVTR <1g/m²/day) to prevent moisture ingress during storage and transit." },
                { title: "Nitrogen Flushing", desc: "Essential for high-fat products like coconut and avocado to prevent oxidation. Maintain O₂ <2%." },
                { title: "Vacuum Sealing", desc: "Extends shelf life by 30-50% for powders. Reduces oxidation and moisture absorption." },
                { title: "Re-sealing Protocol", desc: "After sampling, immediately reseal with heat sealer. Never use clips or folds for bulk storage." },
              ].map((item, idx) => (
                <div key={idx} className="bg-card rounded-lg p-5 shadow-soft">
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Common Mistakes */}
      <section className="py-12 lg:py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-destructive/10 rounded-lg">
                <AlertTriangle className="h-6 w-6 text-destructive" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Common Storage Mistakes to Avoid</h2>
            </div>
            
            <div className="space-y-4">
              {storageGuidelines.commonMistakes.map((item, idx) => (
                <div key={idx} className="bg-card rounded-xl p-5 shadow-soft border-l-4 border-destructive/50">
                  <div className="flex items-start gap-3">
                    <XCircle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <p className="font-medium text-foreground mb-1">{item.mistake}</p>
                      <p className="text-sm text-muted-foreground mb-2">
                        <span className="text-destructive font-medium">Consequence:</span> {item.consequence}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <span className="text-primary font-medium">Solution:</span> {item.solution}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Product Reference Table */}
      <section className="py-12 lg:py-16 bg-muted/30">
        <div className="container">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
            Product-Specific Storage Reference
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-card rounded-xl shadow-soft overflow-hidden text-sm">
              <thead className="bg-muted/50">
                <tr>
                  <th className="text-left p-4 font-semibold text-foreground">Product</th>
                  <th className="text-left p-4 font-semibold text-foreground">Temperature</th>
                  <th className="text-left p-4 font-semibold text-foreground">Humidity</th>
                  <th className="text-left p-4 font-semibold text-foreground">Water Activity</th>
                  <th className="text-left p-4 font-semibold text-foreground">Shelf Life</th>
                </tr>
              </thead>
              <tbody>
                {productsWithStorage.map((product, idx) => (
                  <tr key={product.id} className={idx % 2 === 0 ? "" : "bg-muted/20"}>
                    <td className="p-4">
                      <Link 
                        to={`/products/${product.category}/${product.id}`}
                        className="text-primary hover:underline font-medium"
                      >
                        {product.name}
                      </Link>
                    </td>
                    <td className="p-4 text-muted-foreground">{product.specifications.storageTemp || "-"}</td>
                    <td className="p-4 text-muted-foreground">{product.specifications.storageHumidity || "-"}</td>
                    <td className="p-4 text-muted-foreground">{product.specifications.waterActivity || "-"}</td>
                    <td className="p-4 text-muted-foreground">{product.specifications.shelfLife || "-"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
        <p className="text-center text-sm text-muted-foreground mt-4">
          View individual product pages for complete specifications and COA downloads.
        </p>
      </div>
    </section>

    {/* Storage FAQ Section */}
    <section className="py-12 lg:py-16">
      <div className="container">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
            Storage FAQ
          </h2>
          <FAQAccordion items={[...storageFAQs]} variant="separated" />
        </div>
      </div>
    </section>

    {/* CTA Section */}
      <section className="py-16">
        <div className="container text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-3">
            Need Custom Storage Guidance?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Our technical team can provide storage recommendations specific to your warehouse 
            conditions and product requirements.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <PrimaryButton to="/contact" size="lg">
              Contact Technical Team
            </PrimaryButton>
            <WhatsAppButton 
              variant="full" 
              size="lg"
              message="Hi! I need storage guidance for my warehouse. Can you help with temperature and humidity recommendations?"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}
