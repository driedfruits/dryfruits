import { FormInput, FormCheckbox } from "@/components/forms/FormElements";

interface EditorPackagingSectionProps {
  bulk: string;
  setBulk: (v: string) => void;
  retail: string;
  setRetail: (v: string) => void;
  custom: boolean;
  setCustom: (v: boolean) => void;
  errors?: Record<string, string>;
}

const EditorPackagingSection = ({ bulk, setBulk, retail, setRetail, custom, setCustom, errors }: EditorPackagingSectionProps) => (
  <div className="space-y-4 rounded-lg border border-border p-4">
    <p className="text-sm font-medium text-foreground">Packaging</p>
    <FormInput label="Bulk" value={bulk} onChange={(e) => setBulk(e.target.value)} placeholder="e.g. 10-12.5kg carton with PE liner" required error={errors?.packagingBulk} />
    <FormInput label="Retail" value={retail} onChange={(e) => setRetail(e.target.value)} placeholder="e.g. 50g-500g stand-up pouches" required error={errors?.packagingRetail} />
    <FormCheckbox label="Custom Packaging Available" checked={custom} onCheckedChange={(v) => setCustom(!!v)} />
  </div>
);

export default EditorPackagingSection;
