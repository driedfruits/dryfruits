import { FormInput } from "@/components/forms/FormElements";

interface EditorComplianceSectionProps {
  usa: string;
  setUsa: (v: string) => void;
  eu: string;
  setEu: (v: string) => void;
  global: string;
  setGlobal: (v: string) => void;
}

const EditorComplianceSection = ({ usa, setUsa, eu, setEu, global: globalVal, setGlobal }: EditorComplianceSectionProps) => (
  <div className="space-y-4 rounded-lg border border-border p-4">
    <p className="text-sm font-medium text-foreground">Compliance</p>
    <FormInput label="USA" value={usa} onChange={(e) => setUsa(e.target.value)} placeholder="e.g. FDA facility registered; Prior Notice compliant" />
    <FormInput label="EU" value={eu} onChange={(e) => setEu(e.target.value)} placeholder="e.g. Phytosanitary certified; MRL compliant" />
    <FormInput label="Global" value={globalVal} onChange={(e) => setGlobal(e.target.value)} placeholder="e.g. Codex Alimentarius compliant" />
  </div>
);

export default EditorComplianceSection;
