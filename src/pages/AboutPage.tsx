import { Layout } from "@/components/layout";
import { SEO } from "@/components/SEO";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { companyInfo, teamMembers, certifications } from "@/data/companyData";
import { PrimaryButton, SecondaryButton } from "@/components/CTAButton";
import { 
  Factory, 
  Users, 
  Award, 
  Leaf, 
  Globe, 
  Calendar,
  Mail,
  MapPin
} from "lucide-react";

const breadcrumbItems = [
  { name: "Home", url: "https://dryfruits.lovable.app" },
  { name: "About Us", url: "https://dryfruits.lovable.app/about" },
];

export default function AboutPage() {
  return (
    <Layout>
      <SEO
        title="About DFT Indonesia - Dried Fruit Manufacturer Since 2015"
        description={`Learn about ${companyInfo.name}, Indonesia's leading dried fruit manufacturer. Established ${companyInfo.established}, exporting to ${companyInfo.stats.exportCountries} countries with ${companyInfo.stats.productionCapacity} capacity.`}
        keywords={["about DFT Indonesia", "dried fruit manufacturer Indonesia", "Indonesian food exporter", "tropical fruit processor"]}
        canonical="/about"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbItems)),
        }}
      />
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-primary to-tropical-green-light">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center text-primary-foreground">
            <h1 className="text-4xl font-bold sm:text-5xl mb-6">
              About {companyInfo.shortName}
            </h1>
            <p className="text-xl text-primary-foreground/80">
              {companyInfo.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in {companyInfo.established}, {companyInfo.name} began with a simple 
                  mission: to bring Indonesia's finest tropical fruits to the world market 
                  while supporting local farming communities.
                </p>
                <p>
                  What started as a small operation has grown into Indonesia's premier 
                  export-oriented dried fruit processing facility, with production capacity 
                  exceeding {companyInfo.stats.productionCapacity}.
                </p>
                <p>
                  Today, we export to {companyInfo.stats.exportCountries} countries across 
                  North America, Europe, Asia Pacific, and the Middle East, serving food 
                  manufacturers, retailers, and trading companies worldwide.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <PrimaryButton to="/contact">Contact Us</PrimaryButton>
                <SecondaryButton to="/products">Our Products</SecondaryButton>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Calendar, value: `Est. ${companyInfo.established}`, label: "Year Founded" },
                { icon: Factory, value: companyInfo.stats.productionCapacity, label: "Capacity" },
                { icon: Globe, value: `${companyInfo.stats.exportCountries} Countries`, label: "Export Reach" },
                { icon: Award, value: "4 Certifications", label: "Quality Assured" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-xl bg-card p-6 shadow-soft">
                  <stat.icon className="h-8 w-8 text-primary mb-3" />
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground">Our Values</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Award,
                title: "Quality First",
                description: "Every batch is tested and certified. We never compromise on the quality of our products or the standards we maintain.",
              },
              {
                icon: Leaf,
                title: "Sustainability",
                description: "From organic farming practices to eco-friendly packaging, we're committed to protecting the environment.",
              },
              {
                icon: Users,
                title: "Partnership",
                description: "We believe in building long-term relationships with our farmers, customers, and communities.",
              },
            ].map((value) => (
              <div key={value.title} className="rounded-2xl bg-card p-8 shadow-soft">
                <value.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground">Our Team</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Meet the people behind {companyInfo.shortName}
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <div key={member.id} className="group rounded-xl bg-card p-6 shadow-soft hover:shadow-glow transition-all duration-300">
                <div className="mb-4 h-24 w-24 mx-auto rounded-full bg-gradient-to-br from-primary to-tropical-green-light flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary-foreground">
                    {member.name.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-foreground">{member.name}</h3>
                  <p className="text-sm text-primary mb-2">{member.role}</p>
                  <a 
                    href={`mailto:${member.email}`}
                    className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Mail className="h-4 w-4" />
                    {member.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Visit Our Factory</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our processing facility is located in the heart of Central Java, 
                surrounded by fertile agricultural land and close to major ports for efficient shipping.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium text-foreground">Address</p>
                    <p className="text-muted-foreground">{companyInfo.address.full}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Factory className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium text-foreground">Facility</p>
                    <p className="text-muted-foreground">
                      Modern processing facility with {companyInfo.stats.productionCapacity} capacity
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <PrimaryButton to="/contact">
                  Schedule a Visit
                </PrimaryButton>
              </div>
            </div>

            <div className="aspect-video rounded-2xl bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
              <Factory className="h-24 w-24 text-muted-foreground/30" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
