import { type Product, companyInfo } from "@/data/companyData";
import { Ship, FileCheck, Container } from "lucide-react";
import { OptimizedImage } from "@/components/ui/optimized-image";

interface ProductLogisticsProps {
  product: Product;
}

export function ProductLogistics({ product }: ProductLogisticsProps) {
  const logistics = product.logistics || companyInfo.defaultLogistics;
  const exportDocs = product.exportDocuments || companyInfo.standardExportDocuments;

  return (
    <section className="py-12 bg-muted/30">
      <div className="container">
        <h2 className="text-2xl font-bold text-foreground mb-6">Logistics & Shipping</h2>
        
        {/* Export Docs — full width */}
        <div className="bg-card rounded-xl p-6 shadow-soft mb-6">
          <FileCheck className="h-8 w-8 text-primary mb-4" />
          <h3 className="font-semibold text-foreground mb-3">Export Documentation</h3>
          <ul className="columns-2 gap-x-8 space-y-1 text-sm text-muted-foreground">
            {exportDocs.map((doc, i) => (
              <li key={i}>• {doc}</li>
            ))}
          </ul>
        </div>

        {/* Shipping cards — 2-col grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* LCL — Pallet Shipment */}
          <div className="bg-card rounded-xl overflow-hidden shadow-soft">
            <OptimizedImage
              src="/placeholder.svg"
              alt="Euro pallet loaded with wholesale dried fruit cartons for LCL shipment"
              aspectRatio="video"
              width={600}
              height={338}
              fallbackIcon={<Ship className="h-16 w-16 text-muted-foreground/30" />}
            />
            <div className="p-6">
              <h3 className="font-semibold text-foreground mb-3">LCL — Pallet Shipment</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><strong>Pallet Size:</strong> 120 × 100 × 150 cm (Euro pallet)</li>
                <li><strong>Material:</strong> ISPM-15 certified heat-treated wood</li>
                <li><strong>Max Load:</strong> 1,000 kg per pallet</li>
                <li><strong>Volume:</strong> ~1.8 m³ per pallet</li>
                <li><strong>Port of Loading:</strong> {logistics.portOfLoading}</li>
              </ul>
            </div>
          </div>

          {/* FCL — Full Container Load */}
          <div className="bg-card rounded-xl overflow-hidden shadow-soft">
            <OptimizedImage
              src="/placeholder.svg"
              alt="Full container load with dried fruit cartons for FCL export shipment"
              aspectRatio="video"
              width={600}
              height={338}
              fallbackIcon={<Container className="h-16 w-16 text-muted-foreground/30" />}
            />
            <div className="p-6">
              <h3 className="font-semibold text-foreground mb-3">FCL — Full Container Load</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><strong>20ft Container:</strong> ~33 m³ / {logistics.containerLoad20ft}</li>
                <li><strong>40ft Container:</strong> ~67 m³ / {logistics.containerLoad40ft}</li>
                <li><strong>Incoterms:</strong> {logistics.incoterms?.join(", ")}</li>
                <li><strong>Port of Loading:</strong> {logistics.portOfLoading}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
