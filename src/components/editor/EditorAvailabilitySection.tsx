import { FormInput, FormSelect } from "@/components/forms/FormElements";
import { cn } from "@/lib/utils";

const STATUS_OPTIONS = [
  { value: "in-stock", label: "In Stock" },
  { value: "limited", label: "Limited" },
  { value: "pre-order", label: "Pre-Order" },
];

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const levelConfig: Record<number, { bg: string; label: string }> = {
  0: { bg: "bg-muted", label: "Low" },
  1: { bg: "bg-amber-400", label: "Available" },
  2: { bg: "bg-green-500", label: "Peak" },
};

interface EditorAvailabilitySectionProps {
  peakSeason: string;
  setPeakSeason: (v: string) => void;
  offPeakSeason: string;
  setOffPeakSeason: (v: string) => void;
  currentStatus: string;
  setCurrentStatus: (v: string) => void;
  harvestMonths: number[];
  setHarvestMonths: (v: number[]) => void;
}

const EditorAvailabilitySection = ({ peakSeason, setPeakSeason, offPeakSeason, setOffPeakSeason, currentStatus, setCurrentStatus, harvestMonths, setHarvestMonths }: EditorAvailabilitySectionProps) => {
  const cycleMonth = (i: number) => {
    const next = [...harvestMonths];
    next[i] = (next[i] + 1) % 3;
    setHarvestMonths(next);
  };

  return (
    <div className="space-y-4 rounded-lg border border-border p-4">
      <p className="text-sm font-medium text-foreground">Harvest & Production Calendar</p>
      <FormInput label="Peak Season" value={peakSeason} onChange={(e) => setPeakSeason(e.target.value)} placeholder="e.g. Year-round" />
      <FormInput label="Off-Peak Season" value={offPeakSeason} onChange={(e) => setOffPeakSeason(e.target.value)} placeholder="e.g. March - September" />
      <FormSelect label="Current Status" options={STATUS_OPTIONS} value={currentStatus} onChange={(e) => setCurrentStatus(e.target.value)} />

      {/* Harvest Months Editor */}
      <div>
        <p className="text-xs font-medium text-muted-foreground mb-2">Monthly Production (click to cycle: Low → Available → Peak)</p>
        <div className="grid grid-cols-12 gap-1">
          {MONTHS.map((month, i) => {
            const level = harvestMonths[i] || 0;
            const config = levelConfig[level];
            return (
              <button
                key={month}
                type="button"
                onClick={() => cycleMonth(i)}
                className={cn("flex flex-col items-center gap-1 rounded-md p-1.5 transition-colors border border-border hover:border-primary/50", config.bg)}
                title={`${month}: ${config.label} — click to cycle`}
              >
                <span className="text-[10px] font-medium leading-none">{month}</span>
                <span className="text-[9px] leading-none opacity-70">{config.label}</span>
              </button>
            );
          })}
        </div>
        <div className="flex gap-3 mt-2 text-[10px] text-muted-foreground">
          <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-sm bg-green-500" />Peak</span>
          <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-sm bg-amber-400" />Available</span>
          <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-sm bg-muted border border-border" />Low</span>
        </div>
      </div>
    </div>
  );
};

export default EditorAvailabilitySection;
