import { FormInput } from "@/components/forms/FormElements";

const specGroups = [
  {
    label: "Physical Properties",
    fields: [
      { key: "size", label: "Cut Size / Form" },
      { key: "color", label: "Color" },
      { key: "moisture", label: "Moisture Content" },
      { key: "waterActivity", label: "Water Activity (aw)" },
      { key: "grade", label: "Grade" },
      { key: "defects", label: "Defects" },
      { key: "origin", label: "Origin" },
    ],
  },
  {
    label: "Chemical / Safety",
    fields: [
      { key: "brixLevel", label: "Brix (Sweetness)" },
      { key: "so2Level", label: "SO₂ / Preservatives" },
      { key: "additives", label: "Additives" },
      { key: "foreignMatter", label: "Foreign Matter" },
    ],
  },
  {
    label: "Microbiology",
    fields: [
      { key: "totalPlateCount", label: "Total Plate Count (TPC)" },
      { key: "yeastMold", label: "Yeast & Mold" },
      { key: "salmonella", label: "Salmonella" },
      { key: "eColi", label: "E. coli" },
      
    ],
  },
  {
    label: "Storage / Processing",
    fields: [
      { key: "shelfLife", label: "Shelf Life" },
      { key: "storageTemp", label: "Storage Temperature" },
      { key: "storageHumidity", label: "Storage Humidity" },
      { key: "processingMethod", label: "Processing Method" },
      { key: "packagingMethod", label: "Bulk Packaging Method" },
    ],
  },
];

const requiredSpecKeys = ["moisture", "shelfLife", "origin"];

interface EditorSpecificationsSectionProps {
  specs: Record<string, string>;
  updateSpec: (key: string, value: string) => void;
  errors?: Record<string, string>;
}

const EditorSpecificationsSection = ({ specs, updateSpec, errors }: EditorSpecificationsSectionProps) => (
  <div className="space-y-4 rounded-lg border border-border p-4">
    <p className="text-sm font-medium text-foreground">Technical Specifications</p>
    {specGroups.map((group) => (
      <div key={group.label} className="space-y-3">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">{group.label}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {group.fields.map((field) => (
            <FormInput
              key={field.key}
              label={field.label}
              value={specs[field.key] || ""}
              onChange={(e) => updateSpec(field.key, e.target.value)}
              placeholder={`Enter ${field.label.toLowerCase()}`}
              required={requiredSpecKeys.includes(field.key)}
              error={errors?.[`specs.${field.key}`]}
            />
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default EditorSpecificationsSection;
