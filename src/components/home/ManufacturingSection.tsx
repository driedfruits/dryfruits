import { memo } from "react";

const ImagePlaceholder = ({ label, className = "h-48" }: { label: string; className?: string }) => (
  <div className={`bg-muted flex items-center justify-center ${className}`}>
    <span className="text-muted-foreground text-sm font-medium">{label}</span>
  </div>
);

const factoryItems = [
  {
    label: "Factory Photo",
    title: "Modern Facility",
    description: "5,000 m² certified production facility",
  },
  {
    label: "Sorting Photo",
    title: "Fruit Selection",
    description: "Hand-picked tropical fruits from local farms",
  },
  {
    label: "Process Photo",
    title: "Drying Process",
    description: "Advanced vacuum & air drying technology",
  },
  {
    label: "Packaging Photo",
    title: "Quality Packaging",
    description: "Food-grade packaging for export",
  },
];

export const ManufacturingSection = memo(function ManufacturingSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Our Manufacturing Facility
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            State-of-the-art processing facility in Central Java, Indonesia
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {factoryItems.map((item) => (
            <div 
              key={item.title}
              className="group rounded-2xl overflow-hidden bg-card shadow-soft hover:shadow-glow transition-all duration-300"
            >
              <ImagePlaceholder label={item.label} className="h-48" />
              <div className="p-5">
                <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});
