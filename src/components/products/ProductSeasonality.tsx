import { type Product } from "@/data/companyData";
import { Calendar, CheckCircle, AlertCircle, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ProductSeasonalityProps {
  availability: Product["availability"];
  harvestMonths?: number[];
  productName: string;
}

const statusConfig = {
  "in-stock": { icon: CheckCircle, label: "In Stock", className: "bg-green-100 text-green-800 border-green-200" },
  "limited": { icon: AlertCircle, label: "Limited Supply", className: "bg-yellow-100 text-yellow-800 border-yellow-200" },
  "pre-order": { icon: Clock, label: "Pre-Order Only", className: "bg-blue-100 text-blue-800 border-blue-200" },
};

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const monthColorMap: Record<number, string> = {
  0: "bg-muted",
  1: "bg-amber-400",
  2: "bg-green-500",
};

const monthLabelMap: Record<number, string> = {
  0: "Low Production",
  1: "Available",
  2: "Peak Season",
};

export function ProductSeasonality({ availability, harvestMonths, productName }: ProductSeasonalityProps) {
  if (!availability) {
    return null;
  }

  const status = availability.currentStatus ? statusConfig[availability.currentStatus] : null;
  const StatusIcon = status?.icon || CheckCircle;
  const currentMonth = new Date().getMonth();

  return (
    <section className="py-12 bg-muted/30">
      <div className="container">
        <h2 className="text-2xl font-bold text-foreground mb-6">Harvest & Production Calendar</h2>
        <div className="bg-card rounded-xl p-6 shadow-soft">
          {/* Info cards */}
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

          {/* 12-Month Timeline */}
          {harvestMonths && harvestMonths.length === 12 && (
            <div className="mt-8">
              <p className="text-sm font-medium text-foreground mb-3">Monthly Production & Ordering Timeline</p>
              <div className="grid grid-cols-12 gap-1 sm:gap-1.5">
                {harvestMonths.map((level, i) => (
                  <div key={i} className="flex flex-col items-center gap-1.5">
                    <div
                      className={cn(
                        "w-full aspect-square rounded-md sm:rounded-lg transition-all",
                        monthColorMap[level] || "bg-muted",
                        i === currentMonth && "ring-2 ring-primary ring-offset-1 ring-offset-background"
                      )}
                      title={`${MONTHS[i]}: ${monthLabelMap[level] || "Unknown"}`}
                    />
                    <span
                      className={cn(
                        "text-[10px] sm:text-xs leading-none",
                        i === currentMonth ? "font-bold text-primary" : "text-muted-foreground"
                      )}
                    >
                      {MONTHS[i]}
                    </span>
                  </div>
                ))}
              </div>

              {/* Legend */}
              <div className="flex flex-wrap gap-4 mt-4 text-xs text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <span className="inline-block w-3 h-3 rounded-sm bg-green-500" />
                  Peak Season · Best Pricing
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="inline-block w-3 h-3 rounded-sm bg-amber-400" />
                  Available · Higher Cost
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="inline-block w-3 h-3 rounded-sm bg-muted border border-border" />
                  Low Production
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="inline-block w-3 h-3 rounded-sm ring-2 ring-primary" />
                  Current Month
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
