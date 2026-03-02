import { useState, useMemo } from "react";
import { products, type Product } from "@/data/products";
import { FormInput, FormTextarea, FormSelect } from "@/components/forms/FormElements";
import { Button } from "@/components/ui/button";
import { Copy, Check, AlertTriangle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  EditorSeoSection,
  EditorImagesSection,
  EditorPricingSection,
  EditorCertificationsSection,
  EditorAvailabilitySection,
  EditorPackagingSection,
  EditorLogisticsSection,
  EditorApplicationsSection,
  EditorComplianceSection,
  EditorFaqsSection,
  EditorRelatedSection,
  EditorSpecificationsSection,
} from "@/components/editor";

const ProductEditorPage = () => {
  const [selectedId, setSelectedId] = useState(products[0]?.id || "");
  const [copied, setCopied] = useState(false);
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});
  const { toast } = useToast();

  // State
  const [name, setName] = useState("");
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [fobBase, setFobBase] = useState("");
  const [certs, setCerts] = useState<string[]>([]);
  const [moq, setMoq] = useState("");
  const [leadTime, setLeadTime] = useState("");
  const [category, setCategory] = useState<"dried-fruits">("dried-fruits");
  const [isOrganic, setIsOrganic] = useState(false);
  const [sku, setSku] = useState("");
  const [hsCode, setHsCode] = useState("");
  const [peakSeason, setPeakSeason] = useState("");
  const [offPeakSeason, setOffPeakSeason] = useState("");
  const [currentStatus, setCurrentStatus] = useState("in-stock");
  const [specs, setSpecs] = useState<Record<string, string>>({});
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [flavorProfile, setFlavorProfile] = useState("");
  const [texture, setTexture] = useState("");
  const [packagingBulk, setPackagingBulk] = useState("");
  const [packagingRetail, setPackagingRetail] = useState("");
  const [packagingCustom, setPackagingCustom] = useState(false);
  const [priceTiers, setPriceTiers] = useState<Array<{ volume: string; priceRange: string }>>([]);
  const [samplePolicy, setSamplePolicy] = useState("");
  const [portOfLoading, setPortOfLoading] = useState("");
  const [incoterms, setIncoterms] = useState("");
  const [containerLoad20ft, setContainerLoad20ft] = useState("");
  const [containerLoad40ft, setContainerLoad40ft] = useState("");
  const [applications, setApplications] = useState<string[]>([]);
  const [complianceUsa, setComplianceUsa] = useState("");
  const [complianceEu, setComplianceEu] = useState("");
  const [complianceGlobal, setComplianceGlobal] = useState("");
  const [faqs, setFaqs] = useState<Array<{ question: string; answer: string }>>([]);
  const [relatedProducts, setRelatedProducts] = useState<string[]>([]);
  const [imgMain, setImgMain] = useState("");
  const [imgMainAlt, setImgMainAlt] = useState("");
  const [imgThumb, setImgThumb] = useState("");
  const [imgThumbAlt, setImgThumbAlt] = useState("");
  const [imgGallery, setImgGallery] = useState<Array<{ src: string; alt: string }>>([]);

  const loadProduct = (product: Product) => {
    setName(product.name);
    setCategory(product.category);
    setIsOrganic(product.isOrganic);
    setSku(product.sku || "");
    setHsCode(product.hsCode || "");
    setMetaTitle(product.metaTitle || "");
    setMetaDescription(product.metaDescription || "");
    setTagline(product.tagline);
    setDescription(product.description);
    setFlavorProfile(product.flavorProfile || "");
    setTexture(product.texture || "");
    setFobBase(product.pricing.fobBase);
    setCerts([...product.certifications]);
    setMoq(product.pricing.moq);
    setLeadTime(product.pricing.leadTime);
    setPeakSeason(product.availability?.peakSeason || "");
    setOffPeakSeason(product.availability?.offPeakSeason || "");
    setCurrentStatus(product.availability?.currentStatus || "in-stock");
    const specEntries: Record<string, string> = {};
    if (product.specifications) {
      Object.entries(product.specifications).forEach(([key, value]) => {
        specEntries[key] = value || "";
      });
    }
    setSpecs(specEntries);
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
    setComplianceUsa(product.compliance?.usa || "");
    setComplianceEu(product.compliance?.eu || "");
    setComplianceGlobal(product.compliance?.global || "");
    setFaqs(product.faqs?.map((f) => ({ ...f })) || []);
    setRelatedProducts([...(product.relatedProducts || [])]);
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
    setValidationErrors({});
    const product = products.find((p) => p.id === id);
    if (product) loadProduct(product);
  };

  // Validation
  const validate = (): boolean => {
    const errors: Record<string, string> = {};
    if (!name.trim()) errors.name = "Product name is required";
    if (!tagline.trim()) errors.tagline = "Tagline is required";
    if (!description.trim()) errors.description = "Description is required";
    if (!fobBase.trim()) errors.fobBase = "FOB base price is required";
    if (!moq.trim()) errors.moq = "MOQ is required";
    if (!leadTime.trim()) errors.leadTime = "Lead time is required";
    if (!packagingBulk.trim()) errors.packagingBulk = "Bulk packaging is required";
    if (!packagingRetail.trim()) errors.packagingRetail = "Retail packaging is required";
    if (certs.length === 0) errors.certs = "At least one certification is required";
    if (!specs.moisture?.trim()) errors["specs.moisture"] = "Moisture content is required";
    if (!specs.shelfLife?.trim()) errors["specs.shelfLife"] = "Shelf life is required";
    if (!specs.origin?.trim()) errors["specs.origin"] = "Origin is required";
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Helpers
  const toggleCert = (cert: string) => setCerts((prev) => prev.includes(cert) ? prev.filter((c) => c !== cert) : [...prev, cert]);
  const addTier = () => setPriceTiers((prev) => [...prev, { volume: "", priceRange: "" }]);
  const removeTier = (i: number) => setPriceTiers((prev) => prev.filter((_, idx) => idx !== i));
  const updateTier = (i: number, field: "volume" | "priceRange", val: string) => setPriceTiers((prev) => prev.map((t, idx) => (idx === i ? { ...t, [field]: val } : t)));
  const addApplication = (app: string) => setApplications((prev) => [...prev, app]);
  const removeApplication = (i: number) => setApplications((prev) => prev.filter((_, idx) => idx !== i));
  const addFaq = () => setFaqs((prev) => [...prev, { question: "", answer: "" }]);
  const removeFaq = (i: number) => setFaqs((prev) => prev.filter((_, idx) => idx !== i));
  const updateFaq = (i: number, field: "question" | "answer", val: string) => setFaqs((prev) => prev.map((f, idx) => (idx === i ? { ...f, [field]: val } : f)));
  const updateGalleryImage = (i: number, field: "alt", val: string) => setImgGallery((prev) => prev.map((g, idx) => (idx === i ? { ...g, [field]: val } : g)));
  const toggleRelated = (id: string) => setRelatedProducts((prev) => prev.includes(id) ? prev.filter((r) => r !== id) : [...prev, id]);

  const jsonOutput = useMemo(() => {
    return JSON.stringify(
      {
        id: selectedId, name, category, isOrganic,
        sku: sku || undefined, hsCode: hsCode || undefined,
        images: (imgMain || imgThumb || imgGallery.length > 0) ? {
          main: imgMain || undefined, mainAlt: imgMainAlt || undefined,
          thumbnail: imgThumb || undefined, thumbnailAlt: imgThumbAlt || undefined,
          gallery: imgGallery.length > 0 ? imgGallery : undefined,
        } : undefined,
        metaTitle: metaTitle || undefined, metaDescription: metaDescription || undefined,
        tagline, description,
        flavorProfile: flavorProfile || undefined, texture: texture || undefined,
        pricing: { fobBase, moq, leadTime, priceTiers: priceTiers.length > 0 ? priceTiers : undefined, samplePolicy: samplePolicy || undefined },
        certifications: certs,
        availability: { peakSeason: peakSeason || undefined, offPeakSeason: offPeakSeason || undefined, currentStatus },
        specifications: Object.fromEntries(Object.entries(specs).filter(([_, v]) => v)),
        applications: applications.length > 0 ? applications : undefined,
        packaging: { bulk: packagingBulk, retail: packagingRetail, custom: packagingCustom },
        logistics: { portOfLoading: portOfLoading || undefined, incoterms: incoterms ? incoterms.split(",").map((s) => s.trim()) : undefined, containerLoad20ft: containerLoad20ft || undefined, containerLoad40ft: containerLoad40ft || undefined },
        compliance: (complianceUsa || complianceEu || complianceGlobal) ? { usa: complianceUsa || undefined, eu: complianceEu || undefined, global: complianceGlobal || undefined } : undefined,
        faqs: faqs.length > 0 ? faqs : undefined,
        relatedProducts: relatedProducts.length > 0 ? relatedProducts : undefined,
      },
      null, 2
    );
  }, [selectedId, name, category, isOrganic, sku, hsCode, imgMain, imgMainAlt, imgThumb, imgThumbAlt, imgGallery, metaTitle, metaDescription, tagline, description, flavorProfile, texture, fobBase, moq, leadTime, priceTiers, samplePolicy, certs, peakSeason, offPeakSeason, currentStatus, specs, applications, packagingBulk, packagingRetail, packagingCustom, portOfLoading, incoterms, containerLoad20ft, containerLoad40ft, complianceUsa, complianceEu, complianceGlobal, faqs, relatedProducts]);

  const handleCopy = async () => {
    if (!validate()) {
      toast({ title: "Validation failed", description: `${Object.keys(validationErrors).length || "Some"} required fields are missing.`, variant: "destructive" });
      return;
    }
    await navigator.clipboard.writeText(jsonOutput);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const productOptions = products.map((p) => ({ value: p.id, label: p.name }));
  const errorCount = Object.keys(validationErrors).length;

  return (
    <div className="min-h-screen bg-background p-4 sm:p-8 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-foreground">Product Data Editor</h1>
      <FormSelect label="Select Product" options={productOptions} value={selectedId} onChange={handleProductChange} />

      <div className="mt-8 space-y-6">
        <EditorSeoSection name={name} setName={setName} metaTitle={metaTitle} setMetaTitle={setMetaTitle} metaDescription={metaDescription} setMetaDescription={setMetaDescription} errors={validationErrors} />
        <EditorImagesSection imgMain={imgMain} imgMainAlt={imgMainAlt} setImgMainAlt={setImgMainAlt} imgThumb={imgThumb} imgThumbAlt={imgThumbAlt} setImgThumbAlt={setImgThumbAlt} imgGallery={imgGallery} updateGalleryImage={updateGalleryImage} />
        <FormInput label="Tagline" value={tagline} onChange={(e) => setTagline(e.target.value)} placeholder="e.g. Tropical sweetness in every bite" required error={validationErrors.tagline} />
        <FormTextarea label="Description" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Product description..." required error={validationErrors.description} />
        <div className="space-y-4 rounded-lg border border-border p-4">
          <p className="text-sm font-medium text-foreground">Product Description (Sensory)</p>
          <FormTextarea label="Flavor Profile" value={flavorProfile} onChange={(e) => setFlavorProfile(e.target.value)} placeholder="e.g. Sweet, tangy tropical flavor with caramelized notes" />
          <FormInput label="Texture" value={texture} onChange={(e) => setTexture(e.target.value)} placeholder="e.g. Chewy, soft, slightly crispy edges" />
        </div>
        <EditorPricingSection fobBase={fobBase} setFobBase={setFobBase} priceTiers={priceTiers} addTier={addTier} removeTier={removeTier} updateTier={updateTier} samplePolicy={samplePolicy} setSamplePolicy={setSamplePolicy} moq={moq} setMoq={setMoq} leadTime={leadTime} setLeadTime={setLeadTime} errors={validationErrors} />
        <EditorSpecificationsSection specs={specs} updateSpec={(key, value) => setSpecs(prev => ({ ...prev, [key]: value }))} errors={validationErrors} />
        <EditorCertificationsSection certs={certs} toggleCert={toggleCert} errors={validationErrors} />
        <EditorAvailabilitySection peakSeason={peakSeason} setPeakSeason={setPeakSeason} offPeakSeason={offPeakSeason} setOffPeakSeason={setOffPeakSeason} currentStatus={currentStatus} setCurrentStatus={setCurrentStatus} />
        <EditorPackagingSection bulk={packagingBulk} setBulk={setPackagingBulk} retail={packagingRetail} setRetail={setPackagingRetail} custom={packagingCustom} setCustom={setPackagingCustom} errors={validationErrors} />
        <EditorLogisticsSection portOfLoading={portOfLoading} setPortOfLoading={setPortOfLoading} incoterms={incoterms} setIncoterms={setIncoterms} containerLoad20ft={containerLoad20ft} setContainerLoad20ft={setContainerLoad20ft} containerLoad40ft={containerLoad40ft} setContainerLoad40ft={setContainerLoad40ft} />
        <EditorApplicationsSection applications={applications} addApplication={addApplication} removeApplication={removeApplication} />
        <EditorComplianceSection usa={complianceUsa} setUsa={setComplianceUsa} eu={complianceEu} setEu={setComplianceEu} global={complianceGlobal} setGlobal={setComplianceGlobal} />
        <EditorFaqsSection faqs={faqs} addFaq={addFaq} removeFaq={removeFaq} updateFaq={updateFaq} />
        <EditorRelatedSection selectedId={selectedId} relatedProducts={relatedProducts} toggleRelated={toggleRelated} />
      </div>

      {/* JSON Output */}
      <div className="mt-8 space-y-3">
        {errorCount > 0 && (
          <div className="rounded-lg border border-destructive/50 bg-destructive/10 p-4 text-sm text-destructive">
            <div className="flex items-center gap-2 font-medium mb-2">
              <AlertTriangle className="h-4 w-4" />
              {errorCount} required field{errorCount > 1 ? "s" : ""} missing:
            </div>
            <ul className="list-disc list-inside space-y-0.5 text-xs">
              {Object.values(validationErrors).map((msg, i) => (
                <li key={i}>{msg}</li>
              ))}
            </ul>
          </div>
        )}
        <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 text-sm text-blue-800 dark:border-blue-800 dark:bg-blue-950/30 dark:text-blue-300">
          <p className="font-medium mb-1">How to apply changes:</p>
          <ol className="list-decimal list-inside space-y-1 text-xs">
            <li>Click <strong>Copy</strong> to copy the JSON output below</li>
            <li>Open <code className="rounded bg-blue-100 px-1 py-0.5 dark:bg-blue-900">src/data/products.ts</code></li>
            <li>Find the product entry matching <code className="rounded bg-blue-100 px-1 py-0.5 dark:bg-blue-900">{selectedId}</code></li>
            <li>Replace the entire product object with the copied JSON</li>
            <li>Save the file</li>
          </ol>
        </div>
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
