import { memo } from "react";
import { Factory, Award, Package } from "lucide-react";

const features = [
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
];

export const WhyChooseUs = memo(function WhyChooseUs() {
  return (
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
          {features.map((feature) => (
            <div 
              key={feature.title}
              className="group rounded-2xl bg-card p-8 shadow-soft hover:shadow-glow transition-all duration-300"
            >
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <feature.icon className="h-7 w-7" aria-hidden="true" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});
