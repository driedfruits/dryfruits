import { FormCheckbox } from "@/components/forms/FormElements";
import { products } from "@/data/products";

interface EditorRelatedSectionProps {
  selectedId: string;
  relatedProducts: string[];
  toggleRelated: (id: string) => void;
}

const EditorRelatedSection = ({ selectedId, relatedProducts, toggleRelated }: EditorRelatedSectionProps) => (
  <div className="space-y-2 rounded-lg border border-border p-4">
    <p className="text-sm font-medium text-foreground">Related Products</p>
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-1">
      {products.filter((p) => p.id !== selectedId).map((p) => (
        <FormCheckbox key={p.id} label={p.shortName} checked={relatedProducts.includes(p.id)} onCheckedChange={() => toggleRelated(p.id)} />
      ))}
    </div>
  </div>
);

export default EditorRelatedSection;
