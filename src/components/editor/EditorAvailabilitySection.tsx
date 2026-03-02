import { FormInput, FormSelect } from "@/components/forms/FormElements";

const STATUS_OPTIONS = [
  { value: "in-stock", label: "In Stock" },
  { value: "limited", label: "Limited" },
  { value: "pre-order", label: "Pre-Order" },
];

interface EditorAvailabilitySectionProps {
  peakSeason: string;
  setPeakSeason: (v: string) => void;
  offPeakSeason: string;
  setOffPeakSeason: (v: string) => void;
  currentStatus: string;
  setCurrentStatus: (v: string) => void;
}

const EditorAvailabilitySection = ({ peakSeason, setPeakSeason, offPeakSeason, setOffPeakSeason, currentStatus, setCurrentStatus }: EditorAvailabilitySectionProps) => (
  <div className="space-y-4 rounded-lg border border-border p-4">
    <p className="text-sm font-medium text-foreground">Harvest & Production Calendar</p>
    <FormInput label="Peak Season" value={peakSeason} onChange={(e) => setPeakSeason(e.target.value)} placeholder="e.g. Year-round" />
    <FormInput label="Off-Peak Season" value={offPeakSeason} onChange={(e) => setOffPeakSeason(e.target.value)} placeholder="e.g. March - September" />
    <FormSelect label="Current Status" options={STATUS_OPTIONS} value={currentStatus} onChange={(e) => setCurrentStatus(e.target.value)} />
  </div>
);

export default EditorAvailabilitySection;
