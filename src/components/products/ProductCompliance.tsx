import { type Product, companyInfo } from "@/data/companyData";
import { Shield, Flag } from "lucide-react";

interface ProductComplianceProps {
  product: Product;
}

export function ProductCompliance({ product }: ProductComplianceProps) {
  const compliance = product.compliance || companyInfo.defaultCompliance;

  return (
    <section className="py-12">
      <div className="container">
        <h2 className="text-2xl font-bold text-foreground mb-6">International Compliance Standards</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {compliance.usa && (
            <div className="bg-card rounded-xl p-6 shadow-soft border-l-4 border-blue-500">
              <div className="flex items-center gap-2 mb-2">
                <Flag className="h-5 w-5 text-blue-500" />
                <h3 className="font-semibold text-foreground">USA</h3>
              </div>
              <p className="text-sm text-muted-foreground">{compliance.usa}</p>
            </div>
          )}
          {compliance.eu && (
            <div className="bg-card rounded-xl p-6 shadow-soft border-l-4 border-yellow-500">
              <div className="flex items-center gap-2 mb-2">
                <Flag className="h-5 w-5 text-yellow-500" />
                <h3 className="font-semibold text-foreground">European Union</h3>
              </div>
              <p className="text-sm text-muted-foreground">{compliance.eu}</p>
            </div>
          )}
          {compliance.global && (
            <div className="bg-card rounded-xl p-6 shadow-soft border-l-4 border-primary">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-foreground">Global</h3>
              </div>
              <p className="text-sm text-muted-foreground">{compliance.global}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
