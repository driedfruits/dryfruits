import { memo, useCallback } from "react";
import { Sun, Leaf, Zap, Package } from "lucide-react";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { Badge } from "@/components/ui/badge";
import { PrimaryButton, SecondaryButton } from "@/components/CTAButton";
import {
  Table,
  TableBody,
  TableCell,
  TableRow } from
"@/components/ui/table";
import {
  detailedBlocks,
  technicalSpecs,
  processImages,
  statCards,
  sustainabilityBadges } from
"@/data/productionData";


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
          <div>
            <OptimizedImage
              src={processImages[0]?.src ?? "/placeholder.svg"}
              alt={processImages[0]?.alt ?? "Production process"}
              aspectRatio="video"
              className="rounded-xl" />
            
            {processImages[0]?.caption &&
            <p className="text-sm text-muted-foreground mt-2 text-center">{processImages[0].caption}</p>
            }
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
              {statCards.map((stat) =>
              <div
                key={stat.label}
                className="bg-card rounded-xl p-4 shadow-soft text-center">
                
                  <span className="block text-2xl font-bold text-primary">{stat.value}</span>
                  <span className="block text-sm font-medium text-foreground">{stat.label}</span>
                  <span className="block text-xs text-muted-foreground">{stat.sublabel}</span>
                </div>
              )}
            </div>
          </div>
        </div>


        {/* ── Detailed Flow Blocks ── */}
        <div className="space-y-16 mb-20">
          {detailedBlocks.map((block, i) =>
          <div
            key={block.title}
            className={`grid gap-8 lg:grid-cols-2 lg:items-center ${
            block.direction === "right" ? "lg:[&>*:first-child]:order-2" : ""}`
            }>
            
              <OptimizedImage
              src="/placeholder.svg"
              alt={block.imageAlt}
              aspectRatio="video"
              className="rounded-xl" />
            
              <div className="space-y-4">
                <span className="text-sm font-semibold text-primary">Step {i + 1} of {detailedBlocks.length}</span>
                <h3 className="text-2xl font-bold text-foreground">{block.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{block.copy}</p>
                <p className="text-xs text-muted-foreground italic">{block.imageCaption}</p>
              </div>
            </div>
          )}
        </div>

        {/* ── Technical Specs Card ── */}
        <div className="bg-card rounded-2xl shadow-soft p-6 sm:p-8 mb-12 max-w-2xl mx-auto">
          <h3 className="text-xl font-bold text-foreground mb-4">Technical Specifications</h3>
          <Table>
            <TableBody>
              {technicalSpecs.map((spec) =>
              <TableRow key={spec.key}>
                  <TableCell className="font-medium text-foreground">{spec.key}</TableCell>
                  <TableCell className="text-muted-foreground">{spec.value}</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>

        {/* ── Sustainability Badges ── */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {sustainabilityBadges.map((badge) =>
          <Badge key={badge} className="bg-tropical-green/10 text-tropical-green border-tropical-green/20 px-4 py-1.5 text-sm">
              {badge === "Solar-Powered" && <Sun className="w-4 h-4 mr-1.5" />}
              {badge === "Renewable Energy" && <Leaf className="w-4 h-4 mr-1.5" />}
              {badge === "3 Tons/Day Capacity" && <Zap className="w-4 h-4 mr-1.5" />}
              {badge === "Export-Ready" && <Package className="w-4 h-4 mr-1.5" />}
              {badge}
            </Badge>
          )}
        </div>

        {/* ── Process Flow Infographic (SVG) ── */}
        


















































        

      </div>
    </section>);

});