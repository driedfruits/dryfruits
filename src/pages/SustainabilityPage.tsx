import { Layout } from "@/components/layout";
import { companyInfo } from "@/data/companyData";
import { PrimaryButton, SecondaryButton } from "@/components/CTAButton";
import { 
  Leaf, 
  Users, 
  Recycle, 
  TreePine, 
  Package, 
  Heart,
  CheckCircle
} from "lucide-react";

const sustainabilityPillars = [
  {
    icon: Users,
    title: "Farmer Partnerships",
    description: "We work directly with local farming communities, providing fair prices and supporting sustainable farming practices.",
    details: [
      "Direct partnerships with 50+ farming families",
      "Fair trade pricing above market rates",
      "Training on organic farming methods",
      "Long-term contracts for income stability",
    ],
  },
  {
    icon: Leaf,
    title: "Organic Farming",
    description: "Our products come from organically certified farms that avoid harmful pesticides and synthetic fertilizers.",
    details: [
      "USDA & EU Organic certified sources",
      "No synthetic pesticides or fertilizers",
      "Natural pest management methods",
      "Soil health preservation practices",
    ],
  },
  {
    icon: Recycle,
    title: "Eco-Friendly Processing",
    description: "Our facility implements energy-efficient practices and waste reduction measures.",
    details: [
      "Solar power supplementation",
      "Water recycling systems",
      "Waste composting programs",
      "Energy-efficient drying equipment",
    ],
  },
  {
    icon: Package,
    title: "Sustainable Packaging",
    description: "We offer eco-friendly packaging options to reduce environmental impact.",
    details: [
      "Recyclable packaging materials",
      "Biodegradable options available",
      "Minimal packaging designs",
      "Bulk packaging to reduce waste",
    ],
  },
];

export default function SustainabilityPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-primary to-tropical-green-light">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center text-primary-foreground">
            <h1 className="text-4xl font-bold sm:text-5xl mb-4">
              Sustainability & Partnerships
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Growing together with our farmers and protecting our planet
            </p>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground">Our Commitment</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              At {companyInfo.shortName}, sustainability isn't just a buzzword—it's how we do business. 
              From farm to export, every step considers environmental and social impact.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {sustainabilityPillars.map((pillar) => (
              <div 
                key={pillar.title}
                className="rounded-2xl bg-card p-8 shadow-soft"
              >
                <pillar.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-3">{pillar.title}</h3>
                <p className="text-muted-foreground mb-6">{pillar.description}</p>
                <ul className="space-y-2">
                  {pillar.details.map((detail) => (
                    <li key={detail} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Farm to Factory */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Farm-to-Factory Traceability
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Every product can be traced back to the specific farms and farmers who grew it. 
                This transparency ensures quality and supports fair trade practices.
              </p>
              <div className="space-y-4">
                {[
                  { step: "1", title: "Farm Selection", desc: "Partner farms are audited for organic practices" },
                  { step: "2", title: "Harvest Tracking", desc: "Each batch is tagged with farm and date info" },
                  { step: "3", title: "Processing Records", desc: "Full documentation at every stage" },
                  { step: "4", title: "Export Documentation", desc: "Complete traceability in shipment docs" },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{item.title}</p>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="aspect-square rounded-2xl bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
              <TreePine className="h-32 w-32 text-primary/20" />
            </div>
          </div>
        </div>
      </section>

      {/* Community Impact */}
      <section className="py-20">
        <div className="container">
          <div className="rounded-2xl bg-gradient-to-br from-primary to-tropical-green-light p-12 text-primary-foreground">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <Heart className="h-12 w-12 mb-4" />
                <h2 className="text-3xl font-bold mb-4">Community Impact</h2>
                <p className="text-lg text-primary-foreground/80 mb-6">
                  Our operations support over 50 farming families in Central Java. 
                  By choosing {companyInfo.shortName}, you're supporting sustainable livelihoods 
                  and rural development in Indonesia.
                </p>
                <PrimaryButton to="/contact" variant="gold">
                  Partner With Us
                </PrimaryButton>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "50+", label: "Partner Farms" },
                  { value: "200+", label: "Jobs Created" },
                  { value: "100%", label: "Fair Trade" },
                  { value: "0", label: "Chemical Pesticides" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="text-4xl font-bold">{stat.value}</p>
                    <p className="text-primary-foreground/70">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted/30">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Join Our Sustainable Supply Chain
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Partner with us for sustainably sourced dried fruits and support both 
            environmental conservation and farmer livelihoods.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <PrimaryButton to="/contact" size="lg">
              Contact Us
            </PrimaryButton>
            <SecondaryButton to="/certifications" size="lg">
              View Certifications
            </SecondaryButton>
          </div>
        </div>
      </section>
    </Layout>
  );
}
