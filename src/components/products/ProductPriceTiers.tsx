import { type Product } from "@/data/companyData";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { PrimaryButton } from "@/components/CTAButton";
import { FileText } from "lucide-react";

interface ProductPriceTiersProps {
  pricing: Product["pricing"];
  productName: string;
}

export function ProductPriceTiers({ pricing, productName }: ProductPriceTiersProps) {
  if (!pricing.priceTiers || pricing.priceTiers.length === 0) {
    return null;
  }

  return (
    <section className="py-12">
      <div className="container">
        <h2 className="text-2xl font-bold text-foreground mb-6">Wholesale Pricing Structure (FOB)</h2>
        <div className="bg-card rounded-xl overflow-hidden shadow-soft mb-6">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50">
                <TableHead className="font-semibold text-foreground">Order Volume</TableHead>
                <TableHead className="font-semibold text-foreground">Price Range (USD/kg)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pricing.priceTiers.map((tier, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{tier.volume}</TableCell>
                  <TableCell className={index === pricing.priceTiers!.length - 1 ? "font-bold text-primary" : ""}>
                    {tier.priceRange}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <p className="text-sm text-muted-foreground mb-4">
          Prices subject to market fluctuation. Contact us for a binding quote.
        </p>
        {pricing.samplePolicy && (
          <p className="text-sm text-muted-foreground">
            <strong>Sample Policy:</strong> {pricing.samplePolicy}
          </p>
        )}
      </div>
    </section>
  );
}
