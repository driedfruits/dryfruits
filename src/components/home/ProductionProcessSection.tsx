import { memo, useCallback } from "react";
import { PackageSearch, Droplets, Flame, Sun, Leaf, Zap, Package } from "lucide-react";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { Badge } from "@/components/ui/badge";
import { PrimaryButton, SecondaryButton } from "@/components/CTAButton";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import {
  processSteps,
  detailedBlocks,
  technicalSpecs,
  processImages,
  statCards,
  sustainabilityBadges,
} from "@/data/productionData";

const stepIcons = {
  PackageSearch,
  Droplets,
  Flame,
} as const;

export const ProductionProcessSection = memo(function ProductionProcessSection() {
  const handleCtaClick = useCallback((eventName: string) => {
    console.log(`[Analytics] ${eventName}`);
  }, []);

  return (
    <section id="production-process" className="py-20 bg-background">
      <div className="container">
        {/* ── Top Row: Carousel + Stats ── */}
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center mb-16">
          {/* Carousel */}
          <div className="relative">
            <Carousel opts={{ loop: true }} className="w-full">
              <CarouselContent>
                {processImages.map((img, i) => (
                  <CarouselItem key={i}>
                    <OptimizedImage
                      src={img.src}
                      alt={img.alt}
                      aspectRatio="video"
                      className="rounded-xl"
                    />
                    <p className="text-sm text-muted-foreground mt-2 text-center">{img.caption}</p>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
          </div>

          {/* Heading + Stat Cards */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl font-heading">
              How We Dehydrate Tropical Fruit for Export
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Industry-grade dehydration from raw fruit to export-ready product. Solar-powered electric ovens plus biomass backup deliver 3&nbsp;tons of dried fruit per day — with certified cleaning and blanching at every stage.
            </p>
            <div className="grid grid-cols-3 gap-3">
              {statCards.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-card rounded-xl p-4 shadow-soft text-center"
                >
                  <span className="block text-2xl font-bold text-primary">{stat.value}</span>
                  <span className="block text-sm font-medium text-foreground">{stat.label}</span>
                  <span className="block text-xs text-muted-foreground">{stat.sublabel}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Three-Step Icons Row ── */}
        <div className="grid gap-8 md:grid-cols-3 mb-20">
          {processSteps.map((step, i) => {
            const Icon = stepIcons[step.icon];
            return (
              <div key={step.title} className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-sm font-semibold text-muted-foreground">Step {i + 1}</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                <Badge variant="secondary" className="text-xs">
                  {step.statLabel}: {step.statValue}
                </Badge>
              </div>
            );
          })}
        </div>

        {/* ── Detailed Flow Blocks ── */}
        <div className="space-y-16 mb-20">
          {detailedBlocks.map((block, i) => (
            <div
              key={block.title}
              className={`grid gap-8 lg:grid-cols-2 lg:items-center ${
                block.direction === "right" ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <OptimizedImage
                src="/placeholder.svg"
                alt={block.imageAlt}
                aspectRatio="video"
                className="rounded-xl"
              />
              <div className="space-y-4">
                <span className="text-sm font-semibold text-primary">Step {i + 1} of {detailedBlocks.length}</span>
                <h3 className="text-2xl font-bold text-foreground">{block.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{block.copy}</p>
                <p className="text-xs text-muted-foreground italic">{block.imageCaption}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Technical Specs Card ── */}
        <div className="bg-card rounded-2xl shadow-soft p-6 sm:p-8 mb-12 max-w-2xl mx-auto">
          <h3 className="text-xl font-bold text-foreground mb-4">Technical Specifications</h3>
          <Table>
            <TableBody>
              {technicalSpecs.map((spec) => (
                <TableRow key={spec.key}>
                  <TableCell className="font-medium text-foreground">{spec.key}</TableCell>
                  <TableCell className="text-muted-foreground">{spec.value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* ── Sustainability Badges ── */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {sustainabilityBadges.map((badge) => (
            <Badge key={badge} className="bg-tropical-green/10 text-tropical-green border-tropical-green/20 px-4 py-1.5 text-sm">
              {badge === "Solar-Powered" && <Sun className="w-4 h-4 mr-1.5" />}
              {badge === "Renewable Energy" && <Leaf className="w-4 h-4 mr-1.5" />}
              {badge === "3 Tons/Day Capacity" && <Zap className="w-4 h-4 mr-1.5" />}
              {badge === "Export-Ready" && <Package className="w-4 h-4 mr-1.5" />}
              {badge}
            </Badge>
          ))}
        </div>

        {/* ── Process Flow Infographic (SVG) ── */}
        <div className="mb-16 overflow-x-auto">
          <svg
            viewBox="0 0 800 120"
            className="w-full max-w-3xl mx-auto"
            aria-label="Production process flow: Intake, Clean, Dry, Pack"
            role="img"
          >
            {/* Connector lines */}
            <line x1="140" y1="50" x2="260" y2="50" stroke="hsl(var(--border))" strokeWidth="2" />
            <line x1="340" y1="50" x2="460" y2="50" stroke="hsl(var(--border))" strokeWidth="2" />
            <line x1="540" y1="50" x2="660" y2="50" stroke="hsl(var(--border))" strokeWidth="2" />

            {/* Arrows */}
            <polygon points="255,45 265,50 255,55" fill="hsl(var(--primary))" />
            <polygon points="455,45 465,50 455,55" fill="hsl(var(--primary))" />
            <polygon points="655,45 665,50 655,55" fill="hsl(var(--primary))" />

            {/* Nodes */}
            {[
              { cx: 100, label: "Intake" },
              { cx: 300, label: "Clean" },
              { cx: 500, label: "Dry" },
              { cx: 700, label: "Pack" },
            ].map((node) => (
              <g key={node.label}>
                <circle cx={node.cx} cy={50} r={36} fill="hsl(var(--primary))" opacity={0.1} />
                <circle cx={node.cx} cy={50} r={28} fill="hsl(var(--primary))" opacity={0.15} />
                <circle cx={node.cx} cy={50} r={20} fill="hsl(var(--primary))" />
                <text
                  x={node.cx}
                  y={55}
                  textAnchor="middle"
                  fill="hsl(var(--primary-foreground))"
                  fontSize="11"
                  fontWeight="bold"
                >
                  {node.label}
                </text>
                <text
                  x={node.cx}
                  y={105}
                  textAnchor="middle"
                  fill="hsl(var(--foreground))"
                  fontSize="13"
                  fontWeight="600"
                >
                  {node.label}
                </text>
              </g>
            ))}
          </svg>
        </div>

      </div>
    </section>
  );
});
