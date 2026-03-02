import { useState, useMemo } from "react";
import { products, type Product } from "@/data/products";
import { FormInput, FormSelect, FormCheckbox } from "@/components/forms/FormElements";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";

const ALL_CERTIFICATIONS = [
  "USDA Organic",
  "EU Organic",
  "HACCP",
  "Halal",
  "ISO 22000",
  "Kosher",
  "BRC",
  "FSSC 22000",
  "GMP",
];

const STATUS_OPTIONS = [
  { value: "in-stock", label: "In Stock" },
  { value: "limited", label: "Limited" },
  { value: "pre-order", label: "Pre-Order" },
];

const ProductEditorPage = () => {
  const [selectedId, setSelectedId] = useState(products[0]?.id || "");
  const [copied, setCopied] = useState(false);

  const selectedProduct = products.find((p) => p.id === selectedId);

  // Editable fields state
  const [name, setName] = useState("");
  const [fobBase, setFobBase] = useState("");
  const [certs, setCerts] = useState<string[]>([]);
  const [moq, setMoq] = useState("");
  const [leadTime, setLeadTime] = useState("");
  const [peakSeason, setPeakSeason] = useState("");
  const [offPeakSeason, setOffPeakSeason] = useState("");
  const [currentStatus, setCurrentStatus] = useState("in-stock");
  const [sizeForm, setSizeForm] = useState("");

  // Load product data when selection changes
  const loadProduct = (product: Product) => {
    setName(product.name);
    setFobBase(product.pricing.fobBase);
    setCerts([...product.certifications]);
    setMoq(product.pricing.moq);
    setLeadTime(product.pricing.leadTime);
    setPeakSeason(product.availability?.peakSeason || "");
    setOffPeakSeason(product.availability?.offPeakSeason || "");
    setCurrentStatus(product.availability?.currentStatus || "in-stock");
    setSizeForm(product.specifications.size || "");
  };

  // Initialize on first render
  useState(() => {
    if (selectedProduct) loadProduct(selectedProduct);
  });

  const handleProductChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const id = e.target.value;
    setSelectedId(id);
    const product = products.find((p) => p.id === id);
    if (product) loadProduct(product);
  };

  const toggleCert = (cert: string) => {
    setCerts((prev) =>
      prev.includes(cert) ? prev.filter((c) => c !== cert) : [...prev, cert]
    );
  };

  const jsonOutput = useMemo(() => {
    return JSON.stringify(
      {
        id: selectedId,
        name,
        pricing: {
          fobBase,
          moq,
          leadTime,
        },
        certifications: certs,
        availability: {
          peakSeason: peakSeason || undefined,
          offPeakSeason: offPeakSeason || undefined,
          currentStatus,
        },
        specifications: {
          size: sizeForm,
        },
      },
      null,
      2
    );
  }, [selectedId, name, fobBase, moq, leadTime, certs, peakSeason, offPeakSeason, currentStatus, sizeForm]);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(jsonOutput);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const productOptions = products.map((p) => ({
    value: p.id,
    label: p.name,
  }));

  return (
    <div className="min-h-screen bg-background p-4 sm:p-8 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-foreground">Product Data Editor</h1>

      {/* Product Selector */}
      <FormSelect
        label="Select Product"
        options={productOptions}
        value={selectedId}
        onChange={handleProductChange}
      />

      <div className="mt-8 space-y-6">
        {/* H1 / Product Name */}
        <FormInput
          label="H1 (Product Name)"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        {/* Price */}
        <FormInput
          label="FOB Base Price"
          value={fobBase}
          onChange={(e) => setFobBase(e.target.value)}
          placeholder="e.g. From $7.50/kg FOB"
        />

        {/* MOQ */}
        <FormInput
          label="MOQ"
          value={moq}
          onChange={(e) => setMoq(e.target.value)}
          placeholder="e.g. 500 kg"
        />

        {/* Lead Time */}
        <FormInput
          label="Lead Time"
          value={leadTime}
          onChange={(e) => setLeadTime(e.target.value)}
          placeholder="e.g. 2-3 weeks"
        />

        {/* Size & Form */}
        <FormInput
          label="Size & Form (cuts/slices/chunks)"
          value={sizeForm}
          onChange={(e) => setSizeForm(e.target.value)}
          placeholder="e.g. Chunks 1-2cm, Shreds, Slices, Dices"
        />

        {/* Certifications */}
        <div className="space-y-2">
          <p className="text-sm font-medium text-foreground">Certifications</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-1">
            {ALL_CERTIFICATIONS.map((cert) => (
              <FormCheckbox
                key={cert}
                label={cert}
                checked={certs.includes(cert)}
                onCheckedChange={() => toggleCert(cert)}
              />
            ))}
          </div>
        </div>

        {/* Harvest & Production Calendar */}
        <div className="space-y-4 rounded-lg border border-border p-4">
          <p className="text-sm font-medium text-foreground">Harvest & Production Calendar</p>
          <FormInput
            label="Peak Season"
            value={peakSeason}
            onChange={(e) => setPeakSeason(e.target.value)}
            placeholder="e.g. Year-round or October - February"
          />
          <FormInput
            label="Off-Peak Season"
            value={offPeakSeason}
            onChange={(e) => setOffPeakSeason(e.target.value)}
            placeholder="e.g. March - September"
          />
          <FormSelect
            label="Current Status"
            options={STATUS_OPTIONS}
            value={currentStatus}
            onChange={(e) => setCurrentStatus(e.target.value)}
          />
        </div>
      </div>

      {/* JSON Output */}
      <div className="mt-8 space-y-2">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-foreground">JSON Output</p>
          <Button variant="outline" size="sm" onClick={handleCopy}>
            {copied ? <Check className="h-4 w-4 mr-1" /> : <Copy className="h-4 w-4 mr-1" />}
            {copied ? "Copied!" : "Copy"}
          </Button>
        </div>
        <pre className="bg-muted text-muted-foreground rounded-lg p-4 text-sm overflow-x-auto whitespace-pre-wrap border border-border">
          {jsonOutput}
        </pre>
      </div>
    </div>
  );
};

export default ProductEditorPage;
