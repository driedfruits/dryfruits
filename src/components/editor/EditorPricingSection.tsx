import { FormInput } from "@/components/forms/FormElements";

interface EditorPricingSectionProps {
  fobBase: string;
  setFobBase: (v: string) => void;
  samplePolicy: string;
  setSamplePolicy: (v: string) => void;
  moq: string;
  setMoq: (v: string) => void;
  leadTime: string;
  setLeadTime: (v: string) => void;
  errors?: Record<string, string>;
}

const EditorPricingSection = ({ fobBase, setFobBase, samplePolicy, setSamplePolicy, moq, setMoq, leadTime, setLeadTime, errors }: EditorPricingSectionProps) => (
  <>
    <div className="space-y-4 rounded-lg border border-border p-4">
      <p className="text-sm font-medium text-foreground">Pricing</p>
      <FormInput label="FOB Base Price" value={fobBase} onChange={(e) => setFobBase(e.target.value)} placeholder="e.g. From $7.50/kg FOB" required error={errors?.fobBase} />
      <FormInput label="Sample Policy" value={samplePolicy} onChange={(e) => setSamplePolicy(e.target.value)} placeholder="e.g. Free sample available, buyer pays courier" />
    </div>
    <FormInput label="MOQ" value={moq} onChange={(e) => setMoq(e.target.value)} placeholder="e.g. 500 kg" required error={errors?.moq} />
    <FormInput label="Lead Time" value={leadTime} onChange={(e) => setLeadTime(e.target.value)} placeholder="e.g. 2-3 weeks" required error={errors?.leadTime} />
  </>
);

export default EditorPricingSection;
