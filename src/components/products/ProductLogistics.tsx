import { type Product, companyInfo } from "@/data/companyData";
import { Package, Ship, FileCheck } from "lucide-react";

interface ProductLogisticsProps {
  product: Product;
}

export function ProductLogistics({ product }: ProductLogisticsProps) {
  const logistics = product.logistics || companyInfo.defaultLogistics;
  const exportDocs = product.exportDocuments || companyInfo.standardExportDocuments;

  return (
    <section className="py-12 bg-muted/30">
      <div className="container">
        <h2 className="text-2xl font-bold text-foreground mb-6">Wholesale Packaging & Logistics</h2>
        
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Packaging */}
          <div className="bg-card rounded-xl p-6 shadow-soft">
            <Package className="h-8 w-8 text-primary mb-4" />
            <h3 className="font-semibold text-foreground mb-3">Packaging Options</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><strong>Bulk:</strong> {product.packaging.bulk}</li>
              <li><strong>Retail Ready:</strong> {product.packaging.retail}</li>
              {product.packaging.custom && (
                <li><strong>Private Label (OEM):</strong> Available upon request</li>
              )}
            </ul>
          </div>

          {/* Shipping */}
          <div className="bg-card rounded-xl p-6 shadow-soft">
            <Ship className="h-8 w-8 text-primary mb-4" />
            <h3 className="font-semibold text-foreground mb-3">Shipping Data</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><strong>Port of Loading:</strong> {logistics.portOfLoading}</li>
              <li><strong>Incoterms:</strong> {logistics.incoterms?.join(", ")}</li>
              <li><strong>20ft Container:</strong> {logistics.containerLoad20ft}</li>
              <li><strong>40ft Container:</strong> {logistics.containerLoad40ft}</li>
            </ul>
          </div>

          {/* Export Docs */}
          <div className="bg-card rounded-xl p-6 shadow-soft">
            <FileCheck className="h-8 w-8 text-primary mb-4" />
            <h3 className="font-semibold text-foreground mb-3">Export Documentation</h3>
            <ul className="space-y-1 text-sm text-muted-foreground">
              {exportDocs.map((doc, i) => (
                <li key={i}>• {doc}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
