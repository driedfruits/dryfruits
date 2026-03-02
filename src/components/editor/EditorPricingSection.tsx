import { FormInput } from "@/components/forms/FormElements";
import { Button } from "@/components/ui/button";
import { Plus, Trash2 } from "lucide-react";

interface EditorPricingSectionProps {
  fobBase: string;
  setFobBase: (v: string) => void;
  priceTiers: Array<{ volume: string; priceRange: string }>;
  addTier: () => void;
  removeTier: (i: number) => void;
  updateTier: (i: number, field: "volume" | "priceRange", val: string) => void;
  samplePolicy: string;
  setSamplePolicy: (v: string) => void;
  moq: string;
  setMoq: (v: string) => void;
  leadTime: string;
  setLeadTime: (v: string) => void;
  sizeForm: string;
  setSizeForm: (v: string) => void;
}

const EditorPricingSection = ({ fobBase, setFobBase, priceTiers, addTier, removeTier, updateTier, samplePolicy, setSamplePolicy, moq, setMoq, leadTime, setLeadTime, sizeForm, setSizeForm }: EditorPricingSectionProps) => (
  <>
    <div className="space-y-4 rounded-lg border border-border p-4">
      <p className="text-sm font-medium text-foreground">Pricing</p>
      <FormInput label="FOB Base Price" value={fobBase} onChange={(e) => setFobBase(e.target.value)} placeholder="e.g. From $7.50/kg FOB" />
      <div className="space-y-3">
        <p className="text-sm font-medium text-foreground">Price Tiers</p>
        {priceTiers.map((tier, i) => (
          <div key={i} className="flex items-end gap-2">
            <div className="flex-1">
              <FormInput label="Volume" value={tier.volume} onChange={(e) => updateTier(i, "volume", e.target.value)} placeholder="e.g. MOQ - 1 Ton" />
            </div>
            <div className="flex-1">
              <FormInput label="Price Range" value={tier.priceRange} onChange={(e) => updateTier(i, "priceRange", e.target.value)} placeholder="e.g. $8.50 - $9.50/kg" />
            </div>
            <Button variant="ghost" size="icon" onClick={() => removeTier(i)} className="shrink-0 mb-0.5">
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        ))}
        <Button variant="outline" size="sm" onClick={addTier}>
          <Plus className="h-4 w-4 mr-1" /> Add Tier
        </Button>
      </div>
      <FormInput label="Sample Policy" value={samplePolicy} onChange={(e) => setSamplePolicy(e.target.value)} placeholder="e.g. Free sample available, buyer pays courier" />
    </div>
    <FormInput label="MOQ" value={moq} onChange={(e) => setMoq(e.target.value)} placeholder="e.g. 500 kg" />
    <FormInput label="Lead Time" value={leadTime} onChange={(e) => setLeadTime(e.target.value)} placeholder="e.g. 2-3 weeks" />
    <FormInput label="Size & Form" value={sizeForm} onChange={(e) => setSizeForm(e.target.value)} placeholder="e.g. Chunks 1-2cm, Shreds, Slices" />
  </>
);

export default EditorPricingSection;
