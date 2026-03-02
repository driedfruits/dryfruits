import { FormInput, FormTextarea } from "@/components/forms/FormElements";

interface EditorSeoSectionProps {
  name: string;
  setName: (v: string) => void;
  metaTitle: string;
  setMetaTitle: (v: string) => void;
  metaDescription: string;
  setMetaDescription: (v: string) => void;
  errors?: Record<string, string>;
}

const EditorSeoSection = ({ name, setName, metaTitle, setMetaTitle, metaDescription, setMetaDescription, errors }: EditorSeoSectionProps) => (
  <div className="space-y-4 rounded-lg border border-border p-4">
    <p className="text-sm font-medium text-foreground">SEO & Page Settings</p>
    <FormInput label="Hero H1 Title" value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. Premium Dried Pineapple" required error={errors?.name} />
    <FormInput label="Meta Title" value={metaTitle} onChange={(e) => setMetaTitle(e.target.value)} placeholder="e.g. Buy Dried Pineapple Wholesale | DFT Indonesia" />
    <FormTextarea label="Meta Description" value={metaDescription} onChange={(e) => setMetaDescription(e.target.value)} placeholder="SEO description for search results (150-160 chars recommended)" />
  </div>
);

export default EditorSeoSection;
