import { useState, useMemo } from "react";
import { products, type Product } from "@/data/products";
import { FormInput, FormTextarea, FormSelect, FormCheckbox } from "@/components/forms/FormElements";
import { Button } from "@/components/ui/button";
import { Copy, Check, Plus, Trash2 } from "lucide-react";
import ImagePreview from "@/components/products/ImagePreview";

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

  // Existing fields
  const [name, setName] = useState("");
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [fobBase, setFobBase] = useState("");
  const [certs, setCerts] = useState<string[]>([]);
  const [moq, setMoq] = useState("");
  const [leadTime, setLeadTime] = useState("");
  const [peakSeason, setPeakSeason] = useState("");
  const [offPeakSeason, setOffPeakSeason] = useState("");
  const [currentStatus, setCurrentStatus] = useState("in-stock");
  const [sizeForm, setSizeForm] = useState("");

  // New fields
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [packagingBulk, setPackagingBulk] = useState("");
  const [packagingRetail, setPackagingRetail] = useState("");
  const [packagingCustom, setPackagingCustom] = useState(false);
  const [priceTiers, setPriceTiers] = useState<Array<{ volume: string; priceRange: string }>>([]);
  const [samplePolicy, setSamplePolicy] = useState("");
  const [portOfLoading, setPortOfLoading] = useState("");
  const [incoterms, setIncoterms] = useState("");
  const [containerLoad20ft, setContainerLoad20ft] = useState("");
  const [containerLoad40ft, setContainerLoad40ft] = useState("");

  // Applications, Compliance, FAQs, Related Products
  const [applications, setApplications] = useState<string[]>([]);
  const [newApp, setNewApp] = useState("");
  const [complianceUsa, setComplianceUsa] = useState("");
  const [complianceEu, setComplianceEu] = useState("");
  const [complianceGlobal, setComplianceGlobal] = useState("");
  const [faqs, setFaqs] = useState<Array<{ question: string; answer: string }>>([]);
  const [relatedProducts, setRelatedProducts] = useState<string[]>([]);

  // Images
  const [imgMain, setImgMain] = useState("");
  const [imgMainAlt, setImgMainAlt] = useState("");
  const [imgThumb, setImgThumb] = useState("");
  const [imgThumbAlt, setImgThumbAlt] = useState("");
  const [imgGallery, setImgGallery] = useState<Array<{ src: string; alt: string }>>([]);

  const loadProduct = (product: Product) => {
    setName(product.name);
    setMetaTitle(product.metaTitle || "");
    setMetaDescription(product.metaDescription || "");
    setTagline(product.tagline);
    setDescription(product.description);
    setFobBase(product.pricing.fobBase);
    setCerts([...product.certifications]);
    setMoq(product.pricing.moq);
    setLeadTime(product.pricing.leadTime);
    setPeakSeason(product.availability?.peakSeason || "");
    setOffPeakSeason(product.availability?.offPeakSeason || "");
    setCurrentStatus(product.availability?.currentStatus || "in-stock");
    setSizeForm(product.specifications.size || "");
    setPackagingBulk(product.packaging.bulk);
    setPackagingRetail(product.packaging.retail);
    setPackagingCustom(product.packaging.custom);
    setPriceTiers(product.pricing.priceTiers?.map((t) => ({ ...t })) || []);
    setSamplePolicy(product.pricing.samplePolicy || "");
    setPortOfLoading(product.logistics?.portOfLoading || "");
    setIncoterms(product.logistics?.incoterms?.join(", ") || "");
    setContainerLoad20ft(product.logistics?.containerLoad20ft || "");
    setContainerLoad40ft(product.logistics?.containerLoad40ft || "");
    setApplications([...(product.applications || [])]);
    setNewApp("");
    setComplianceUsa(product.compliance?.usa || "");
    setComplianceEu(product.compliance?.eu || "");
    setComplianceGlobal(product.compliance?.global || "");
    setFaqs(product.faqs?.map((f) => ({ ...f })) || []);
    setRelatedProducts([...(product.relatedProducts || [])]);
    // Images
    setImgMain(product.images?.main || "");
    setImgMainAlt(product.images?.mainAlt || "");
    setImgThumb(product.images?.thumbnail || "");
    setImgThumbAlt(product.images?.thumbnailAlt || "");
    setImgGallery(product.images?.gallery?.map((g) => ({ ...g })) || []);
  };

  useState(() => {
    const p = products.find((p) => p.id === selectedId);
    if (p) loadProduct(p);
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

  const addTier = () => setPriceTiers((prev) => [...prev, { volume: "", priceRange: "" }]);
  const removeTier = (i: number) => setPriceTiers((prev) => prev.filter((_, idx) => idx !== i));
  const updateTier = (i: number, field: "volume" | "priceRange", val: string) => {
    setPriceTiers((prev) => prev.map((t, idx) => (idx === i ? { ...t, [field]: val } : t)));
  };

  // Application helpers
  const addApplication = () => {
    if (newApp.trim()) {
      setApplications((prev) => [...prev, newApp.trim()]);
      setNewApp("");
    }
  };
  const removeApplication = (i: number) => setApplications((prev) => prev.filter((_, idx) => idx !== i));

  // FAQ helpers
  const addFaq = () => setFaqs((prev) => [...prev, { question: "", answer: "" }]);
  const removeFaq = (i: number) => setFaqs((prev) => prev.filter((_, idx) => idx !== i));
  const updateFaq = (i: number, field: "question" | "answer", val: string) => {
    setFaqs((prev) => prev.map((f, idx) => (idx === i ? { ...f, [field]: val } : f)));
  };

  // Gallery helpers
  const addGalleryImage = () => setImgGallery((prev) => [...prev, { src: "", alt: "" }]);
  const removeGalleryImage = (i: number) => setImgGallery((prev) => prev.filter((_, idx) => idx !== i));
  const updateGalleryImage = (i: number, field: "src" | "alt", val: string) => {
    setImgGallery((prev) => prev.map((g, idx) => (idx === i ? { ...g, [field]: val } : g)));
  };

  // Related products toggle
  const toggleRelated = (id: string) => {
    setRelatedProducts((prev) =>
      prev.includes(id) ? prev.filter((r) => r !== id) : [...prev, id]
    );
  };

  const jsonOutput = useMemo(() => {
    return JSON.stringify(
      {
        id: selectedId,
        name,
        images: (imgMain || imgThumb || imgGallery.length > 0) ? {
          main: imgMain || undefined,
          mainAlt: imgMainAlt || undefined,
          thumbnail: imgThumb || undefined,
          thumbnailAlt: imgThumbAlt || undefined,
          gallery: imgGallery.length > 0 ? imgGallery : undefined,
        } : undefined,
        metaTitle: metaTitle || undefined,
        metaDescription: metaDescription || undefined,
        tagline,
        description,
        pricing: {
          fobBase,
          moq,
          leadTime,
          priceTiers: priceTiers.length > 0 ? priceTiers : undefined,
          samplePolicy: samplePolicy || undefined,
        },
        certifications: certs,
        availability: {
          peakSeason: peakSeason || undefined,
          offPeakSeason: offPeakSeason || undefined,
          currentStatus,
        },
        specifications: { size: sizeForm },
        applications: applications.length > 0 ? applications : undefined,
        packaging: {
          bulk: packagingBulk,
          retail: packagingRetail,
          custom: packagingCustom,
        },
        logistics: {
          portOfLoading: portOfLoading || undefined,
          incoterms: incoterms ? incoterms.split(",").map((s) => s.trim()) : undefined,
          containerLoad20ft: containerLoad20ft || undefined,
          containerLoad40ft: containerLoad40ft || undefined,
        },
        compliance: (complianceUsa || complianceEu || complianceGlobal) ? {
          usa: complianceUsa || undefined,
          eu: complianceEu || undefined,
          global: complianceGlobal || undefined,
        } : undefined,
        faqs: faqs.length > 0 ? faqs : undefined,
        relatedProducts: relatedProducts.length > 0 ? relatedProducts : undefined,
      },
      null,
      2
    );
  }, [selectedId, name, imgMain, imgMainAlt, imgThumb, imgThumbAlt, imgGallery, metaTitle, metaDescription, tagline, description, fobBase, moq, leadTime, priceTiers, samplePolicy, certs, peakSeason, offPeakSeason, currentStatus, sizeForm, applications, packagingBulk, packagingRetail, packagingCustom, portOfLoading, incoterms, containerLoad20ft, containerLoad40ft, complianceUsa, complianceEu, complianceGlobal, faqs, relatedProducts]);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(jsonOutput);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const productOptions = products.map((p) => ({ value: p.id, label: p.name }));

  return (
    <div className="min-h-screen bg-background p-4 sm:p-8 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-foreground">Product Data Editor</h1>

      <FormSelect label="Select Product" options={productOptions} value={selectedId} onChange={handleProductChange} />

      <div className="mt-8 space-y-6">
        {/* SEO & Page Settings */}
        <div className="space-y-4 rounded-lg border border-border p-4">
          <p className="text-sm font-medium text-foreground">SEO & Page Settings</p>
          <FormInput label="Hero H1 Title" value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. Premium Dried Pineapple" />
          <FormInput label="Meta Title" value={metaTitle} onChange={(e) => setMetaTitle(e.target.value)} placeholder="e.g. Buy Dried Pineapple Wholesale | DFT Indonesia" />
          <FormTextarea label="Meta Description" value={metaDescription} onChange={(e) => setMetaDescription(e.target.value)} placeholder="SEO description for search results (150-160 chars recommended)" />
        </div>

        {/* Images */}
        <div className="space-y-4 rounded-lg border border-border p-4">
          <p className="text-sm font-medium text-foreground">Images</p>
          <p className="text-xs text-muted-foreground">Enter file paths relative to /public (e.g. /images/dried-papaya-hero.webp). Upload images via Lovable chat first.</p>
          <div className="flex items-start gap-3">
            <div className="flex-1 space-y-4">
              <FormInput label="Main Image Path" value={imgMain} onChange={(e) => setImgMain(e.target.value)} placeholder="/images/product-hero.webp" />
              <FormInput label="Main Image Alt Text" value={imgMainAlt} onChange={(e) => setImgMainAlt(e.target.value)} placeholder="Descriptive alt text for SEO" />
            </div>
            <div className="pt-6"><ImagePreview src={imgMain} /></div>
          </div>
          <div className="flex items-start gap-3">
            <div className="flex-1 space-y-4">
              <FormInput label="Thumbnail Path" value={imgThumb} onChange={(e) => setImgThumb(e.target.value)} placeholder="/images/product-thumb.webp" />
              <FormInput label="Thumbnail Alt Text" value={imgThumbAlt} onChange={(e) => setImgThumbAlt(e.target.value)} placeholder="Thumbnail alt text" />
            </div>
            <div className="pt-6"><ImagePreview src={imgThumb} /></div>
          </div>
          <div className="space-y-3">
            <p className="text-sm font-medium text-foreground">Gallery Images</p>
            {imgGallery.map((img, i) => (
              <div key={i} className="flex items-end gap-2">
                <div className="pt-5"><ImagePreview src={img.src} /></div>
                <div className="flex-1">
                  <FormInput label={`Image ${i + 1} Path`} value={img.src} onChange={(e) => updateGalleryImage(i, "src", e.target.value)} placeholder="/images/gallery-1.webp" />
                </div>
                <div className="flex-1">
                  <FormInput label={`Image ${i + 1} Alt`} value={img.alt} onChange={(e) => updateGalleryImage(i, "alt", e.target.value)} placeholder="Alt text" />
                </div>
                <Button variant="ghost" size="icon" onClick={() => removeGalleryImage(i)} className="shrink-0 mb-0.5">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
            <Button variant="outline" size="sm" onClick={addGalleryImage}>
              <Plus className="h-4 w-4 mr-1" /> Add Gallery Image
            </Button>
          </div>
        </div>

        {/* Tagline */}
        <FormInput label="Tagline" value={tagline} onChange={(e) => setTagline(e.target.value)} placeholder="e.g. Tropical sweetness in every bite" />

        {/* Description */}
        <FormTextarea label="Description" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Product description..." />

        {/* Price Section */}
        <div className="space-y-4 rounded-lg border border-border p-4">
          <p className="text-sm font-medium text-foreground">Pricing</p>
          <FormInput label="FOB Base Price" value={fobBase} onChange={(e) => setFobBase(e.target.value)} placeholder="e.g. From $7.50/kg FOB" />

          {/* Price Tiers */}
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

        {/* MOQ, Lead Time, Size */}
        <FormInput label="MOQ" value={moq} onChange={(e) => setMoq(e.target.value)} placeholder="e.g. 500 kg" />
        <FormInput label="Lead Time" value={leadTime} onChange={(e) => setLeadTime(e.target.value)} placeholder="e.g. 2-3 weeks" />
        <FormInput label="Size & Form" value={sizeForm} onChange={(e) => setSizeForm(e.target.value)} placeholder="e.g. Chunks 1-2cm, Shreds, Slices" />

        {/* Certifications */}
        <div className="space-y-2">
          <p className="text-sm font-medium text-foreground">Certifications</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-1">
            {ALL_CERTIFICATIONS.map((cert) => (
              <FormCheckbox key={cert} label={cert} checked={certs.includes(cert)} onCheckedChange={() => toggleCert(cert)} />
            ))}
          </div>
        </div>

        {/* Harvest Calendar */}
        <div className="space-y-4 rounded-lg border border-border p-4">
          <p className="text-sm font-medium text-foreground">Harvest & Production Calendar</p>
          <FormInput label="Peak Season" value={peakSeason} onChange={(e) => setPeakSeason(e.target.value)} placeholder="e.g. Year-round" />
          <FormInput label="Off-Peak Season" value={offPeakSeason} onChange={(e) => setOffPeakSeason(e.target.value)} placeholder="e.g. March - September" />
          <FormSelect label="Current Status" options={STATUS_OPTIONS} value={currentStatus} onChange={(e) => setCurrentStatus(e.target.value)} />
        </div>

        {/* Packaging */}
        <div className="space-y-4 rounded-lg border border-border p-4">
          <p className="text-sm font-medium text-foreground">Packaging</p>
          <FormInput label="Bulk" value={packagingBulk} onChange={(e) => setPackagingBulk(e.target.value)} placeholder="e.g. 10-12.5kg carton with PE liner" />
          <FormInput label="Retail" value={packagingRetail} onChange={(e) => setPackagingRetail(e.target.value)} placeholder="e.g. 50g-500g stand-up pouches" />
          <FormCheckbox label="Custom Packaging Available" checked={packagingCustom} onCheckedChange={(v) => setPackagingCustom(!!v)} />
        </div>

        {/* Logistics */}
        <div className="space-y-4 rounded-lg border border-border p-4">
          <p className="text-sm font-medium text-foreground">Logistics</p>
          <FormInput label="Port of Loading" value={portOfLoading} onChange={(e) => setPortOfLoading(e.target.value)} placeholder="e.g. Semarang, Indonesia" />
          <FormInput label="Incoterms (comma-separated)" value={incoterms} onChange={(e) => setIncoterms(e.target.value)} placeholder="e.g. FOB, CIF, CFR" />
          <FormInput label="Container Load 20ft" value={containerLoad20ft} onChange={(e) => setContainerLoad20ft(e.target.value)} placeholder="e.g. 15-18 MT" />
          <FormInput label="Container Load 40ft" value={containerLoad40ft} onChange={(e) => setContainerLoad40ft(e.target.value)} placeholder="e.g. 22-26 MT" />
        </div>

        {/* Applications */}
        <div className="space-y-4 rounded-lg border border-border p-4">
          <p className="text-sm font-medium text-foreground">Applications</p>
          <div className="flex flex-wrap gap-2">
            {applications.map((app, i) => (
              <span key={i} className="inline-flex items-center gap-1 rounded-full bg-muted px-3 py-1 text-sm text-foreground">
                {app}
                <button onClick={() => removeApplication(i)} className="ml-1 text-muted-foreground hover:text-destructive">×</button>
              </span>
            ))}
          </div>
          <div className="flex gap-2">
            <FormInput label="" value={newApp} onChange={(e) => setNewApp(e.target.value)} placeholder="e.g. Snacking, Trail mix" onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addApplication())} />
            <Button variant="outline" size="sm" onClick={addApplication} className="shrink-0 mt-auto">
              <Plus className="h-4 w-4 mr-1" /> Add
            </Button>
          </div>
        </div>

        {/* Compliance */}
        <div className="space-y-4 rounded-lg border border-border p-4">
          <p className="text-sm font-medium text-foreground">Compliance</p>
          <FormInput label="USA" value={complianceUsa} onChange={(e) => setComplianceUsa(e.target.value)} placeholder="e.g. FDA facility registered; Prior Notice compliant" />
          <FormInput label="EU" value={complianceEu} onChange={(e) => setComplianceEu(e.target.value)} placeholder="e.g. Phytosanitary certified; MRL compliant" />
          <FormInput label="Global" value={complianceGlobal} onChange={(e) => setComplianceGlobal(e.target.value)} placeholder="e.g. Codex Alimentarius compliant" />
        </div>

        {/* FAQs */}
        <div className="space-y-4 rounded-lg border border-border p-4">
          <p className="text-sm font-medium text-foreground">FAQs</p>
          {faqs.map((faq, i) => (
            <div key={i} className="space-y-2 rounded-lg border border-border p-3">
              <div className="flex items-start gap-2">
                <div className="flex-1 space-y-2">
                  <FormInput label="Question" value={faq.question} onChange={(e) => updateFaq(i, "question", e.target.value)} placeholder="e.g. What are the microbiological specifications?" />
                  <FormTextarea label="Answer" value={faq.answer} onChange={(e) => updateFaq(i, "answer", e.target.value)} placeholder="Detailed answer..." />
                </div>
                <Button variant="ghost" size="icon" onClick={() => removeFaq(i)} className="shrink-0 mt-6">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
          <Button variant="outline" size="sm" onClick={addFaq}>
            <Plus className="h-4 w-4 mr-1" /> Add FAQ
          </Button>
        </div>

        {/* Related Products */}
        <div className="space-y-2 rounded-lg border border-border p-4">
          <p className="text-sm font-medium text-foreground">Related Products</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-1">
            {products.filter((p) => p.id !== selectedId).map((p) => (
              <FormCheckbox key={p.id} label={p.name} checked={relatedProducts.includes(p.id)} onCheckedChange={() => toggleRelated(p.id)} />
            ))}
          </div>
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
