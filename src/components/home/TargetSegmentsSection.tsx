import { memo } from "react";
import { Users } from "lucide-react";
import { targetSegments } from "@/data/companyData";

export const TargetSegmentsSection = memo(function TargetSegmentsSection() {
  return (
    <section className="py-20">
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
  );
});
