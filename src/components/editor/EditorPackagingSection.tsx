import { FormInput } from "@/components/forms/FormElements";
import ImageUploader from "@/components/editor/ImageUploader";

interface EditorPackagingSectionProps {
  productId: string;
  bulk: string;
  setBulk: (v: string) => void;
  retail: string;
  setRetail: (v: string) => void;
  retailImage: string;
  setRetailImage: (v: string) => void;
  bulkImage: string;
  setBulkImage: (v: string) => void;
  errors?: Record<string, string>;
}

const EditorPackagingSection = ({ productId, bulk, setBulk, retail, setRetail, retailImage, setRetailImage, bulkImage, setBulkImage, errors }: EditorPackagingSectionProps) => (
  <div className="space-y-4 rounded-lg border border-border p-4">
    <p className="text-sm font-medium text-foreground">Packaging</p>
    <FormInput label="Bulk" value={bulk} onChange={(e) => setBulk(e.target.value)} placeholder="e.g. 10-12.5kg carton with PE liner" required error={errors?.packagingBulk} />
    <div className="space-y-2">
      <p className="text-xs font-medium text-muted-foreground">Bulk Packaging Photo</p>
      <ImageUploader currentSrc={bulkImage} productId={productId} slot="packaging-bulk" onUploaded={setBulkImage} onRemove={() => setBulkImage("")} />
    </div>
    <FormInput label="Retail" value={retail} onChange={(e) => setRetail(e.target.value)} placeholder="e.g. 50g-500g stand-up pouches" required error={errors?.packagingRetail} />
    <div className="space-y-2">
      <p className="text-xs font-medium text-muted-foreground">Retail Packaging Photo</p>
      <ImageUploader currentSrc={retailImage} productId={productId} slot="packaging-retail" onUploaded={setRetailImage} onRemove={() => setRetailImage("")} />
    </div>
  </div>
);

export default EditorPackagingSection;
