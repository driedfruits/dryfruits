import { useState, useEffect } from "react";
import { useProducts } from "@/contexts/ProductsContext";
import { supabase } from "@/integrations/supabase/client";
import { mapProductToRow } from "@/lib/productMapper";
import type { Product } from "@/data/products";
import { useToast } from "@/hooks/use-toast";

const EMPTY_PRODUCT: Product = {
  id: "",
  name: "",
  shortName: "",
  category: "dried-fruits",
  isOrganic: false,
  tagline: "",
  description: "",
  specifications: {},
  applications: [],
  packaging: { bulk: "", retail: "", custom: false },
  pricing: { fobBase: "", moq: "", leadTime: "" },
  certifications: [],
  relatedProducts: [],
};

export function useProductEditor() {
  const { products, loading: productsLoading, refetch } = useProducts();
  const [selectedId, setSelectedId] = useState("");
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [isNewProduct, setIsNewProduct] = useState(false);
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});
  const { toast } = useToast();

  // Form state
  const [name, setName] = useState("");
  const [shortName, setShortName] = useState("");
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
  const [harvestMonths, setHarvestMonths] = useState<number[]>(Array(12).fill(0));
  const [keywords, setKeywords] = useState("");
  const [specs, setSpecs] = useState<Record<string, string>>({});
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [flavorProfile, setFlavorProfile] = useState("");
  const [texture, setTexture] = useState("");
  const [packagingBulk, setPackagingBulk] = useState("");
  const [packagingRetail, setPackagingRetail] = useState("");
  const [portOfLoading, setPortOfLoading] = useState("");
  const [incoterms, setIncoterms] = useState("");
  const [containerLoad20ft, setContainerLoad20ft] = useState("");
  const [containerLoad40ft, setContainerLoad40ft] = useState("");
  const [estimatedDelivery, setEstimatedDelivery] = useState("");
  const [exportDocuments, setExportDocuments] = useState("");
  const [applications, setApplications] = useState<string[]>([]);
  const [faqs, setFaqs] = useState<Array<{ question: string; answer: string }>>([]);
  const [relatedProducts, setRelatedProducts] = useState<string[]>([]);
  const [imgMain, setImgMain] = useState("");
  const [imgMainAlt, setImgMainAlt] = useState("");
  const [imgThumb, setImgThumb] = useState("");
  const [imgThumbAlt, setImgThumbAlt] = useState("");
  const [imgGallery, setImgGallery] = useState<Array<{ src: string; alt: string }>>([
    { src: "", alt: "" }, { src: "", alt: "" }, { src: "", alt: "" }, { src: "", alt: "" },
  ]);

  const loadProduct = (product: Product) => {
    setName(product.name);
    setShortName(product.shortName || "");
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
    setHarvestMonths(product.harvestMonths || Array(12).fill(0));
    setKeywords((product.keywords || []).join(", "));
    const specEntries: Record<string, string> = {};
    if (product.specifications) {
      Object.entries(product.specifications).forEach(([key, value]) => {
        specEntries[key] = value || "";
      });
    }
    setSpecs(specEntries);
    setPackagingBulk(product.packaging.bulk);
    setPackagingRetail(product.packaging.retail);
    setPortOfLoading(product.logistics?.portOfLoading || "");
    setIncoterms(product.logistics?.incoterms?.join(", ") || "");
    setContainerLoad20ft(product.logistics?.containerLoad20ft || "");
    setContainerLoad40ft(product.logistics?.containerLoad40ft || "");
    setEstimatedDelivery(product.logistics?.estimatedDelivery || "");
    setExportDocuments((product.exportDocuments || []).join("\n"));
    setApplications([...(product.applications || [])]);
    setFaqs(product.faqs?.map((f) => ({ ...f })) || []);
    setRelatedProducts([...(product.relatedProducts || [])]);
    setImgMain(product.images?.main || "");
    setImgMainAlt(product.images?.mainAlt || "");
    setImgThumb(product.images?.thumbnail || "");
    setImgThumbAlt(product.images?.thumbnailAlt || "");
    const rawGallery = product.images?.gallery?.map((g) => ({ ...g })) || [];
    setImgGallery([...rawGallery, ...Array(4).fill(null).map(() => ({ src: "", alt: "" }))].slice(0, 4));
  };

  // Load first product when products arrive
  useEffect(() => {
    if (products.length > 0 && !selectedId && !isNewProduct) {
      setSelectedId(products[0].id);
      loadProduct(products[0]);
    }
  }, [products]);

  const handleProductChange = (id: string) => {
    setSelectedId(id);
    setIsNewProduct(false);
    setValidationErrors({});
    const product = products.find((p) => p.id === id);
    if (product) loadProduct(product);
  };

  const handleNewProduct = () => {
    setIsNewProduct(true);
    setSelectedId("");
    setValidationErrors({});
    loadProduct(EMPTY_PRODUCT);
  };

  const validate = (): boolean => {
    const errors: Record<string, string> = {};
    if (!name.trim()) errors.name = "Product name is required";
    if (!shortName.trim()) errors.shortName = "Short name is required";
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
    if (!flavorProfile.trim()) errors.flavorProfile = "Flavor profile is required";
    if (isNewProduct) {
      const newId = name.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
      if (!newId) errors.name = "Product name must generate a valid ID";
      if (products.some((p) => p.id === newId)) errors.name = "A product with this name already exists";
    }
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Helpers
  const toggleCert = (cert: string) => setCerts((prev) => prev.includes(cert) ? prev.filter((c) => c !== cert) : [...prev, cert]);
  const addApplication = (app: string) => setApplications((prev) => [...prev, app]);
  const removeApplication = (i: number) => setApplications((prev) => prev.filter((_, idx) => idx !== i));
  const addFaq = () => setFaqs((prev) => [...prev, { question: "", answer: "" }]);
  const removeFaq = (i: number) => setFaqs((prev) => prev.filter((_, idx) => idx !== i));
  const updateFaq = (i: number, field: "question" | "answer", val: string) => setFaqs((prev) => prev.map((f, idx) => (idx === i ? { ...f, [field]: val } : f)));
  const updateGalleryImage = (i: number, field: "src" | "alt", val: string) => setImgGallery((prev) => prev.map((g, idx) => (idx === i ? { ...g, [field]: val } : g)));
  const reorderGalleryImages = (fromIndex: number, toIndex: number) => {
    setImgGallery((prev) => {
      const next = [...prev];
      const [moved] = next.splice(fromIndex, 1);
      next.splice(toIndex, 0, moved);
      return next;
    });
  };
  const toggleRelated = (id: string) => setRelatedProducts((prev) => prev.includes(id) ? prev.filter((r) => r !== id) : [...prev, id]);
  const updateSpec = (key: string, value: string) => setSpecs((prev) => ({ ...prev, [key]: value }));

  const buildProduct = (): Product => {
    const productId = isNewProduct
      ? name.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")
      : selectedId;

    return {
      id: productId,
      name,
      shortName,
      category,
      isOrganic,
      sku: sku || undefined,
      hsCode: hsCode || undefined,
      images: {
        main: imgMain || undefined,
        mainAlt: imgMainAlt || undefined,
        thumbnail: imgThumb || undefined,
        thumbnailAlt: imgThumbAlt || undefined,
        gallery: imgGallery.filter(g => g.src.trim()),
      },
      metaTitle: metaTitle || undefined,
      metaDescription: metaDescription || undefined,
      keywords: keywords.trim() ? keywords.split(",").map(k => k.trim()).filter(Boolean) : undefined,
      tagline,
      description,
      flavorProfile: flavorProfile || undefined,
      texture: texture || undefined,
      pricing: { fobBase, moq, leadTime },
      certifications: certs,
      availability: {
        peakSeason: peakSeason || undefined,
        offPeakSeason: offPeakSeason || undefined,
        currentStatus: currentStatus as Product["availability"]["currentStatus"],
      },
      harvestMonths: harvestMonths.some(v => v > 0) ? harvestMonths : undefined,
      specifications: Object.fromEntries(Object.entries(specs).filter(([, v]) => v)) as Product["specifications"],
      applications: applications.length > 0 ? applications : [],
      packaging: { bulk: packagingBulk, retail: packagingRetail, custom: products.find(p => p.id === selectedId)?.packaging.custom ?? false },
      logistics: {
        portOfLoading: portOfLoading || undefined,
        incoterms: incoterms ? incoterms.split(",").map(s => s.trim()) : undefined,
        containerLoad20ft: containerLoad20ft || undefined,
        containerLoad40ft: containerLoad40ft || undefined,
        estimatedDelivery: estimatedDelivery || undefined,
      },
      exportDocuments: exportDocuments.trim() ? exportDocuments.split("\n").map(s => s.trim()).filter(Boolean) : undefined,
      faqs: faqs.length > 0 ? faqs : undefined,
      relatedProducts: relatedProducts.length > 0 ? relatedProducts : [],
    };
  };

  const handleSave = async () => {
    if (!validate()) {
      toast({ title: "Validation failed", description: `${Object.keys(validationErrors).length || "Some"} required fields are missing.`, variant: "destructive" });
      return;
    }

    setSaving(true);
    const product = buildProduct();
    const row = mapProductToRow(product);
    const { created_at, updated_at, ...upsertData } = row;

    const { error } = await supabase
      .from("products")
      .upsert(upsertData as any, { onConflict: "id" });

    if (error) {
      console.error("Save failed:", error);
      toast({ title: "Save failed", description: error.message, variant: "destructive" });
    } else {
      toast({ title: isNewProduct ? "Product created!" : "Product saved!", description: `${product.name} has been saved to the database.` });
      setIsNewProduct(false);
      setSelectedId(product.id);
      await refetch();
    }
    setSaving(false);
  };

  const handleDelete = async () => {
    if (!selectedId || isNewProduct) return;
    const confirmed = window.confirm(`Are you sure you want to delete "${name}"? This cannot be undone.`);
    if (!confirmed) return;

    setDeleting(true);
    const { error } = await supabase
      .from("products")
      .delete()
      .eq("id", selectedId);

    if (error) {
      toast({ title: "Delete failed", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Product deleted", description: `${name} has been removed.` });
      await refetch();
      setSelectedId("");
      loadProduct(EMPTY_PRODUCT);
    }
    setDeleting(false);
  };

  return {
    // Data
    products, productsLoading, selectedId, saving, deleting, isNewProduct, validationErrors,
    // Form fields
    name, setName, shortName, setShortName, metaTitle, setMetaTitle, metaDescription, setMetaDescription,
    fobBase, setFobBase, certs, moq, setMoq, leadTime, setLeadTime,
    category, isOrganic, sku, setSku, hsCode, setHsCode,
    peakSeason, setPeakSeason, offPeakSeason, setOffPeakSeason, currentStatus, setCurrentStatus,
    harvestMonths, setHarvestMonths, keywords, setKeywords, specs, tagline, setTagline,
    description, setDescription, flavorProfile, setFlavorProfile, texture, setTexture,
    packagingBulk, setPackagingBulk, packagingRetail, setPackagingRetail,
    portOfLoading, setPortOfLoading, incoterms, setIncoterms,
    containerLoad20ft, setContainerLoad20ft, containerLoad40ft, setContainerLoad40ft,
    estimatedDelivery, setEstimatedDelivery, exportDocuments, setExportDocuments,
    applications, faqs, relatedProducts,
    imgMain, setImgMain, imgMainAlt, setImgMainAlt, imgThumb, setImgThumb, imgThumbAlt, setImgThumbAlt, imgGallery,
    // Actions
    handleProductChange, handleNewProduct, handleSave, handleDelete,
    toggleCert, addApplication, removeApplication, addFaq, removeFaq, updateFaq,
    updateGalleryImage, reorderGalleryImages, toggleRelated, updateSpec,
  };
}
