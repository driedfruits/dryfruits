import { type Product } from "@/data/companyData";
import { Calendar, CheckCircle, AlertCircle, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ProductSeasonalityProps {
  availability: Product["availability"];
  productName: string;
}

const statusConfig = {
  "in-stock": { icon: CheckCircle, label: "In Stock", className: "bg-green-100 text-green-800 border-green-200" },
  "limited": { icon: AlertCircle, label: "Limited Supply", className: "bg-yellow-100 text-yellow-800 border-yellow-200" },
  "pre-order": { icon: Clock, label: "Pre-Order Only", className: "bg-blue-100 text-blue-800 border-blue-200" },
};

export function ProductSeasonality({ availability, productName }: ProductSeasonalityProps) {
  if (!availability) {
    return null;
  }

  const status = availability.currentStatus ? statusConfig[availability.currentStatus] : null;
  const StatusIcon = status?.icon || CheckCircle;

  return (
    <section className="py-12 bg-muted/30">
      <div className="container">
        <h2 className="text-2xl font-bold text-foreground mb-6">Harvest & Production Calendar</h2>
        <div className="bg-card rounded-xl p-6 shadow-soft">
          <div className="grid gap-6 md:grid-cols-3">
            {availability.peakSeason && (
              <div className="flex items-start gap-3">
                <Calendar className="h-6 w-6 text-primary mt-1" />
                <div>
                  <p className="font-medium text-foreground">Peak Season</p>
                  <p className="text-sm text-muted-foreground">{availability.peakSeason}</p>
                  <p className="text-xs text-primary mt-1">Best Pricing</p>
                </div>
              </div>
            )}
            {availability.offPeakSeason && (
              <div className="flex items-start gap-3">
                <Calendar className="h-6 w-6 text-muted-foreground mt-1" />
                <div>
                  <p className="font-medium text-foreground">Off-Peak</p>
                  <p className="text-sm text-muted-foreground">{availability.offPeakSeason}</p>
                  <p className="text-xs text-muted-foreground mt-1">Supply available, higher cost</p>
                </div>
              </div>
            )}
            {status && (
              <div className="flex items-start gap-3">
                <StatusIcon className="h-6 w-6 text-primary mt-1" />
                <div>
                  <p className="font-medium text-foreground">Current Status</p>
                  <Badge variant="outline" className={status.className}>
                    {status.label}
                  </Badge>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
