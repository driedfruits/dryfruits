import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState, useEffect, useRef, useCallback } from "react";
import { u as useProducts, a as useToast, m as mapProductToRow, s as supabase, B as Button, c as cn } from "../main.mjs";
import { F as FormInput, b as FormTextarea, c as FormCheckbox, a as FormSelect } from "./FormElements-14gfErHn.js";
import { Upload, Loader2, X, GripVertical, Plus, Trash2, Lock, AlertTriangle, Save } from "lucide-react";
import "vite-react-ssg";
import "react-router-dom";
import "@radix-ui/react-toast";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "next-themes";
import "sonner";
import "@radix-ui/react-tooltip";
import "@radix-ui/react-slot";
import "@supabase/supabase-js";
import "./label-DPO1kvhT.js";
import "@radix-ui/react-label";
import "@radix-ui/react-checkbox";
const EMPTY_PRODUCT = {
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
  relatedProducts: []
};
function useProductEditor() {
  const { products, loading: productsLoading, refetch } = useProducts();
  const [selectedId, setSelectedId] = useState("");
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [isNewProduct, setIsNewProduct] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [shortName, setShortName] = useState("");
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [fobBase, setFobBase] = useState("");
  const [certs, setCerts] = useState([]);
  const [moq, setMoq] = useState("");
  const [leadTime, setLeadTime] = useState("");
  const [category, setCategory] = useState("dried-fruits");
  const [isOrganic, setIsOrganic] = useState(false);
  const [sku, setSku] = useState("");
  const [hsCode, setHsCode] = useState("");
  const [peakSeason, setPeakSeason] = useState("");
  const [offPeakSeason, setOffPeakSeason] = useState("");
  const [currentStatus, setCurrentStatus] = useState("in-stock");
  const [harvestMonths, setHarvestMonths] = useState(Array(12).fill(0));
  const [keywords, setKeywords] = useState("");
  const [specs, setSpecs] = useState({});
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [flavorProfile, setFlavorProfile] = useState("");
  const [texture, setTexture] = useState("");
  const [packagingBulk, setPackagingBulk] = useState("");
  const [packagingRetail, setPackagingRetail] = useState("");
  const [packagingRetailImage, setPackagingRetailImage] = useState("");
  const [packagingBulkImage, setPackagingBulkImage] = useState("");
  const [portOfLoading, setPortOfLoading] = useState("");
  const [incoterms, setIncoterms] = useState("");
  const [containerLoad20ft, setContainerLoad20ft] = useState("");
  const [containerLoad40ft, setContainerLoad40ft] = useState("");
  const [estimatedDelivery, setEstimatedDelivery] = useState("");
  const [exportDocuments, setExportDocuments] = useState("");
  const [applications, setApplications] = useState([]);
  const [faqs, setFaqs] = useState([]);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [imgMain, setImgMain] = useState("");
  const [imgMainAlt, setImgMainAlt] = useState("");
  const [imgThumb, setImgThumb] = useState("");
  const [imgThumbAlt, setImgThumbAlt] = useState("");
  const [imgGallery, setImgGallery] = useState([
    { src: "", alt: "" },
    { src: "", alt: "" },
    { src: "", alt: "" },
    { src: "", alt: "" }
  ]);
  const loadProduct = (product) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p;
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
    setPeakSeason(((_a = product.availability) == null ? void 0 : _a.peakSeason) || "");
    setOffPeakSeason(((_b = product.availability) == null ? void 0 : _b.offPeakSeason) || "");
    setCurrentStatus(((_c = product.availability) == null ? void 0 : _c.currentStatus) || "in-stock");
    setHarvestMonths(product.harvestMonths || Array(12).fill(0));
    setKeywords((product.keywords || []).join(", "));
    const specEntries = {};
    if (product.specifications) {
      Object.entries(product.specifications).forEach(([key, value]) => {
        specEntries[key] = value || "";
      });
    }
    setSpecs(specEntries);
    setPackagingBulk(product.packaging.bulk);
    setPackagingRetail(product.packaging.retail);
    setPackagingRetailImage(product.packaging.retailImage || "");
    setPackagingBulkImage(product.packaging.bulkImage || "");
    setPortOfLoading(((_d = product.logistics) == null ? void 0 : _d.portOfLoading) || "");
    setIncoterms(((_f = (_e = product.logistics) == null ? void 0 : _e.incoterms) == null ? void 0 : _f.join(", ")) || "");
    setContainerLoad20ft(((_g = product.logistics) == null ? void 0 : _g.containerLoad20ft) || "");
    setContainerLoad40ft(((_h = product.logistics) == null ? void 0 : _h.containerLoad40ft) || "");
    setEstimatedDelivery(((_i = product.logistics) == null ? void 0 : _i.estimatedDelivery) || "");
    setExportDocuments((product.exportDocuments || []).join("\n"));
    setApplications([...product.applications || []]);
    setFaqs(((_j = product.faqs) == null ? void 0 : _j.map((f) => ({ ...f }))) || []);
    setRelatedProducts([...product.relatedProducts || []]);
    setImgMain(((_k = product.images) == null ? void 0 : _k.main) || "");
    setImgMainAlt(((_l = product.images) == null ? void 0 : _l.mainAlt) || "");
    setImgThumb(((_m = product.images) == null ? void 0 : _m.thumbnail) || "");
    setImgThumbAlt(((_n = product.images) == null ? void 0 : _n.thumbnailAlt) || "");
    const rawGallery = ((_p = (_o = product.images) == null ? void 0 : _o.gallery) == null ? void 0 : _p.map((g) => ({ ...g }))) || [];
    setImgGallery([...rawGallery, ...Array(4).fill(null).map(() => ({ src: "", alt: "" }))].slice(0, 4));
  };
  useEffect(() => {
    if (products.length > 0 && !selectedId && !isNewProduct) {
      setSelectedId(products[0].id);
      loadProduct(products[0]);
    }
  }, [products]);
  const handleProductChange = (id) => {
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
  const validate = () => {
    var _a, _b, _c;
    const errors = {};
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
    if (!((_a = specs.moisture) == null ? void 0 : _a.trim())) errors["specs.moisture"] = "Moisture content is required";
    if (!((_b = specs.shelfLife) == null ? void 0 : _b.trim())) errors["specs.shelfLife"] = "Shelf life is required";
    if (!((_c = specs.origin) == null ? void 0 : _c.trim())) errors["specs.origin"] = "Origin is required";
    if (!flavorProfile.trim()) errors.flavorProfile = "Flavor profile is required";
    if (isNewProduct) {
      const newId = name.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
      if (!newId) errors.name = "Product name must generate a valid ID";
      if (products.some((p) => p.id === newId)) errors.name = "A product with this name already exists";
    }
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const toggleCert = (cert) => setCerts((prev) => prev.includes(cert) ? prev.filter((c) => c !== cert) : [...prev, cert]);
  const addApplication = (app) => setApplications((prev) => [...prev, app]);
  const removeApplication = (i) => setApplications((prev) => prev.filter((_, idx) => idx !== i));
  const addFaq = () => setFaqs((prev) => [...prev, { question: "", answer: "" }]);
  const removeFaq = (i) => setFaqs((prev) => prev.filter((_, idx) => idx !== i));
  const updateFaq = (i, field, val) => setFaqs((prev) => prev.map((f, idx) => idx === i ? { ...f, [field]: val } : f));
  const updateGalleryImage = (i, field, val) => setImgGallery((prev) => prev.map((g, idx) => idx === i ? { ...g, [field]: val } : g));
  const reorderGalleryImages = (fromIndex, toIndex) => {
    setImgGallery((prev) => {
      const next = [...prev];
      const [moved] = next.splice(fromIndex, 1);
      next.splice(toIndex, 0, moved);
      return next;
    });
  };
  const toggleRelated = (id) => setRelatedProducts((prev) => prev.includes(id) ? prev.filter((r) => r !== id) : [...prev, id]);
  const updateSpec = (key, value) => setSpecs((prev) => ({ ...prev, [key]: value }));
  const buildProduct = () => {
    var _a;
    const productId = isNewProduct ? name.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") : selectedId;
    return {
      id: productId,
      name,
      shortName,
      category,
      isOrganic,
      sku: sku || void 0,
      hsCode: hsCode || void 0,
      images: {
        main: imgMain || void 0,
        mainAlt: imgMainAlt || void 0,
        thumbnail: imgThumb || void 0,
        thumbnailAlt: imgThumbAlt || void 0,
        gallery: imgGallery.filter((g) => g.src.trim())
      },
      metaTitle: metaTitle || void 0,
      metaDescription: metaDescription || void 0,
      keywords: keywords.trim() ? keywords.split(",").map((k) => k.trim()).filter(Boolean) : void 0,
      tagline,
      description,
      flavorProfile: flavorProfile || void 0,
      texture: texture || void 0,
      pricing: { fobBase, moq, leadTime },
      certifications: certs,
      availability: {
        peakSeason: peakSeason || void 0,
        offPeakSeason: offPeakSeason || void 0,
        currentStatus
      },
      harvestMonths: harvestMonths.some((v) => v > 0) ? harvestMonths : void 0,
      specifications: Object.fromEntries(Object.entries(specs).filter(([, v]) => v)),
      applications: applications.length > 0 ? applications : [],
      packaging: { bulk: packagingBulk, retail: packagingRetail, custom: ((_a = products.find((p) => p.id === selectedId)) == null ? void 0 : _a.packaging.custom) ?? false, retailImage: packagingRetailImage || void 0, bulkImage: packagingBulkImage || void 0 },
      logistics: {
        portOfLoading: portOfLoading || void 0,
        incoterms: incoterms ? incoterms.split(",").map((s) => s.trim()) : void 0,
        containerLoad20ft: containerLoad20ft || void 0,
        containerLoad40ft: containerLoad40ft || void 0,
        estimatedDelivery: estimatedDelivery || void 0
      },
      exportDocuments: exportDocuments.trim() ? exportDocuments.split("\n").map((s) => s.trim()).filter(Boolean) : void 0,
      faqs: faqs.length > 0 ? faqs : void 0,
      relatedProducts: relatedProducts.length > 0 ? relatedProducts : []
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
    const { error } = await supabase.from("products").upsert(upsertData, { onConflict: "id" });
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
    const { error } = await supabase.from("products").delete().eq("id", selectedId);
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
    products,
    productsLoading,
    selectedId,
    saving,
    deleting,
    isNewProduct,
    validationErrors,
    // Form fields
    name,
    setName,
    shortName,
    setShortName,
    metaTitle,
    setMetaTitle,
    metaDescription,
    setMetaDescription,
    fobBase,
    setFobBase,
    certs,
    moq,
    setMoq,
    leadTime,
    setLeadTime,
    category,
    isOrganic,
    sku,
    setSku,
    hsCode,
    setHsCode,
    peakSeason,
    setPeakSeason,
    offPeakSeason,
    setOffPeakSeason,
    currentStatus,
    setCurrentStatus,
    harvestMonths,
    setHarvestMonths,
    keywords,
    setKeywords,
    specs,
    tagline,
    setTagline,
    description,
    setDescription,
    flavorProfile,
    setFlavorProfile,
    texture,
    setTexture,
    packagingBulk,
    setPackagingBulk,
    packagingRetail,
    setPackagingRetail,
    packagingRetailImage,
    setPackagingRetailImage,
    packagingBulkImage,
    setPackagingBulkImage,
    portOfLoading,
    setPortOfLoading,
    incoterms,
    setIncoterms,
    containerLoad20ft,
    setContainerLoad20ft,
    containerLoad40ft,
    setContainerLoad40ft,
    estimatedDelivery,
    setEstimatedDelivery,
    exportDocuments,
    setExportDocuments,
    applications,
    faqs,
    relatedProducts,
    imgMain,
    setImgMain,
    imgMainAlt,
    setImgMainAlt,
    imgThumb,
    setImgThumb,
    imgThumbAlt,
    setImgThumbAlt,
    imgGallery,
    // Actions
    handleProductChange,
    handleNewProduct,
    handleSave,
    handleDelete,
    toggleCert,
    addApplication,
    removeApplication,
    addFaq,
    removeFaq,
    updateFaq,
    updateGalleryImage,
    reorderGalleryImages,
    toggleRelated,
    updateSpec
  };
}
const EditorSeoSection = ({ name, setName, shortName, setShortName, tagline, setTagline, description, setDescription, metaTitle, setMetaTitle, metaDescription, setMetaDescription, keywords, setKeywords, errors }) => /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
  /* @__PURE__ */ jsxs("div", { className: "space-y-4 rounded-lg border border-border p-4", children: [
    /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-foreground", children: "Page Display" }),
    /* @__PURE__ */ jsx(FormInput, { label: "Hero H1 Title (SEO)", value: name, onChange: (e) => setName(e.target.value), placeholder: "e.g. Premium Dried Pineapple", required: true, error: errors == null ? void 0 : errors.name }),
    /* @__PURE__ */ jsx(FormInput, { label: "Short Name (UI labels)", value: shortName, onChange: (e) => setShortName(e.target.value), placeholder: "e.g. Dried Pineapple", required: true, error: errors == null ? void 0 : errors.shortName }),
    /* @__PURE__ */ jsx(FormInput, { label: "Tagline", value: tagline, onChange: (e) => setTagline(e.target.value), placeholder: "e.g. Tropical sweetness in every bite", required: true, error: errors == null ? void 0 : errors.tagline }),
    /* @__PURE__ */ jsx(FormTextarea, { label: "Description", value: description, onChange: (e) => setDescription(e.target.value), placeholder: "Product description...", required: true, error: errors == null ? void 0 : errors.description })
  ] }),
  /* @__PURE__ */ jsxs("div", { className: "space-y-4 rounded-lg border border-border p-4", children: [
    /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-foreground", children: "SEO Meta Tags" }),
    /* @__PURE__ */ jsx(FormInput, { label: "Meta Title", value: metaTitle, onChange: (e) => setMetaTitle(e.target.value), placeholder: "e.g. Buy Dried Pineapple Wholesale | DFT Indonesia" }),
    /* @__PURE__ */ jsx(FormTextarea, { label: "Meta Description", value: metaDescription, onChange: (e) => setMetaDescription(e.target.value), placeholder: "SEO description for search results (150-160 chars recommended)" }),
    /* @__PURE__ */ jsx(FormInput, { label: "SEO Keywords (comma-separated)", value: keywords, onChange: (e) => setKeywords(e.target.value), placeholder: "e.g. bulk dried pineapple, wholesale dried fruit Indonesia" })
  ] })
] });
const ACCEPTED_TYPES = ["image/jpeg", "image/png", "image/webp"];
const ACCEPTED = ".jpg,.jpeg,.png,.webp";
const MAX_SIZE = 5 * 1024 * 1024;
const ImageUploader = ({ currentSrc, productId, slot, onUploaded, onRemove }) => {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const [dragOver, setDragOver] = useState(false);
  const inputRef = useRef(null);
  const processFile = useCallback(async (file) => {
    var _a;
    if (!ACCEPTED_TYPES.includes(file.type)) {
      setError("Only JPEG, PNG, and WebP files are accepted");
      return;
    }
    if (file.size > MAX_SIZE) {
      setError("File must be under 5MB");
      return;
    }
    setError("");
    setUploading(true);
    const ext = ((_a = file.name.split(".").pop()) == null ? void 0 : _a.toLowerCase()) || "jpg";
    const path = `${productId || "new"}/${slot}-${Date.now()}.${ext}`;
    const { error: uploadError } = await supabase.storage.from("product-images").upload(path, file, { upsert: true });
    if (uploadError) {
      setError(uploadError.message);
      setUploading(false);
      return;
    }
    const { data } = supabase.storage.from("product-images").getPublicUrl(path);
    onUploaded(data.publicUrl);
    setUploading(false);
  }, [productId, slot, onUploaded]);
  const handleChange = (e) => {
    var _a;
    const file = (_a = e.target.files) == null ? void 0 : _a[0];
    if (file) processFile(file);
    if (inputRef.current) inputRef.current.value = "";
  };
  const handleDrop = useCallback((e) => {
    var _a;
    e.preventDefault();
    setDragOver(false);
    const file = (_a = e.dataTransfer.files) == null ? void 0 : _a[0];
    if (file) processFile(file);
  }, [processFile]);
  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    setDragOver(true);
  }, []);
  const handleDragLeave = useCallback((e) => {
    e.preventDefault();
    setDragOver(false);
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
    /* @__PURE__ */ jsxs(
      "div",
      {
        onDragOver: handleDragOver,
        onDragLeave: handleDragLeave,
        onDrop: handleDrop,
        className: `flex items-center gap-2 rounded-lg border-2 border-dashed p-2 transition-colors ${dragOver ? "border-primary bg-primary/5" : "border-transparent"}`,
        children: [
          currentSrc ? /* @__PURE__ */ jsx(
            "img",
            {
              src: currentSrc,
              alt: "Preview",
              className: "w-16 h-16 rounded border border-border object-cover shrink-0"
            }
          ) : /* @__PURE__ */ jsx("div", { className: "w-16 h-16 rounded border border-dashed border-border bg-muted flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsx(Upload, { className: "h-4 w-4 text-muted-foreground" }) }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-1", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex gap-1.5", children: [
              /* @__PURE__ */ jsxs(
                Button,
                {
                  type: "button",
                  variant: "outline",
                  size: "sm",
                  disabled: uploading,
                  onClick: () => {
                    var _a;
                    return (_a = inputRef.current) == null ? void 0 : _a.click();
                  },
                  children: [
                    uploading ? /* @__PURE__ */ jsx(Loader2, { className: "h-3.5 w-3.5 animate-spin" }) : /* @__PURE__ */ jsx(Upload, { className: "h-3.5 w-3.5" }),
                    /* @__PURE__ */ jsx("span", { className: "ml-1.5", children: currentSrc ? "Replace" : "Upload" })
                  ]
                }
              ),
              currentSrc && /* @__PURE__ */ jsx(
                Button,
                {
                  type: "button",
                  variant: "ghost",
                  size: "sm",
                  onClick: onRemove,
                  className: "text-destructive hover:text-destructive",
                  children: /* @__PURE__ */ jsx(X, { className: "h-3.5 w-3.5" })
                }
              )
            ] }),
            /* @__PURE__ */ jsx("span", { className: "text-[10px] text-muted-foreground", children: "or drag & drop" })
          ] }),
          /* @__PURE__ */ jsx(
            "input",
            {
              ref: inputRef,
              type: "file",
              accept: ACCEPTED,
              onChange: handleChange,
              className: "hidden"
            }
          )
        ]
      }
    ),
    error && /* @__PURE__ */ jsx("p", { className: "text-xs text-destructive", children: error })
  ] });
};
const EditorImagesSection = ({
  productId,
  imgMain,
  setImgMain,
  imgMainAlt,
  setImgMainAlt,
  imgGallery,
  updateGalleryImage,
  reorderGalleryImages
}) => {
  const [dragIdx, setDragIdx] = useState(null);
  const [overIdx, setOverIdx] = useState(null);
  const handleDragStart = useCallback((e, i) => {
    setDragIdx(i);
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/plain", String(i));
  }, []);
  const handleDragOver = useCallback((e, i) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    setOverIdx(i);
  }, []);
  const handleDrop = useCallback((e, toIndex) => {
    e.preventDefault();
    const fromIndex = dragIdx;
    setDragIdx(null);
    setOverIdx(null);
    if (fromIndex !== null && fromIndex !== toIndex) {
      reorderGalleryImages(fromIndex, toIndex);
    }
  }, [dragIdx, reorderGalleryImages]);
  const handleDragEnd = useCallback(() => {
    setDragIdx(null);
    setOverIdx(null);
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "space-y-4 rounded-lg border border-border p-4", children: [
    /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-foreground", children: "Images" }),
    /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: "Upload product images (JPEG, PNG, WebP — max 5 MB each)." }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsx("p", { className: "text-xs font-medium text-muted-foreground", children: "Main Image" }),
      /* @__PURE__ */ jsx(ImageUploader, { currentSrc: imgMain, productId, slot: "main", onUploaded: setImgMain, onRemove: () => setImgMain("") }),
      /* @__PURE__ */ jsx(FormInput, { label: "Main Image Alt Text", value: imgMainAlt, onChange: (e) => setImgMainAlt(e.target.value), placeholder: "Descriptive alt text for SEO" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-foreground", children: "Gallery Images (4 slots)" }),
      /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: "Drag the handle to reorder gallery images." }),
      imgGallery.map((img, i) => /* @__PURE__ */ jsxs(
        "div",
        {
          draggable: true,
          onDragStart: (e) => handleDragStart(e, i),
          onDragOver: (e) => handleDragOver(e, i),
          onDrop: (e) => handleDrop(e, i),
          onDragEnd: handleDragEnd,
          className: `space-y-2 rounded border p-3 transition-colors ${overIdx === i && dragIdx !== null && dragIdx !== i ? "border-primary bg-primary/5" : dragIdx === i ? "border-muted opacity-50" : "border-border/50"}`,
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(GripVertical, { className: "h-4 w-4 text-muted-foreground cursor-grab shrink-0" }),
              /* @__PURE__ */ jsxs("p", { className: "text-xs font-medium text-muted-foreground", children: [
                "Gallery ",
                i + 1
              ] })
            ] }),
            /* @__PURE__ */ jsx(
              ImageUploader,
              {
                currentSrc: img.src,
                productId,
                slot: `gallery-${i}`,
                onUploaded: (url) => updateGalleryImage(i, "src", url),
                onRemove: () => updateGalleryImage(i, "src", "")
              }
            ),
            /* @__PURE__ */ jsx(FormInput, { label: `Gallery ${i + 1} Alt`, value: img.alt, onChange: (e) => updateGalleryImage(i, "alt", e.target.value), placeholder: `Alt text for gallery image ${i + 1}` })
          ]
        },
        i
      ))
    ] })
  ] });
};
const EditorPricingSection = ({ fobBase, setFobBase, moq, setMoq, leadTime, setLeadTime, errors }) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsxs("div", { className: "space-y-4 rounded-lg border border-border p-4", children: [
    /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-foreground", children: "Pricing" }),
    /* @__PURE__ */ jsx(FormInput, { label: "FOB Base Price", value: fobBase, onChange: (e) => setFobBase(e.target.value), placeholder: "e.g. From $7.50/kg FOB", required: true, error: errors == null ? void 0 : errors.fobBase })
  ] }),
  /* @__PURE__ */ jsx(FormInput, { label: "MOQ", value: moq, onChange: (e) => setMoq(e.target.value), placeholder: "e.g. 500 kg", required: true, error: errors == null ? void 0 : errors.moq }),
  /* @__PURE__ */ jsx(FormInput, { label: "Lead Time", value: leadTime, onChange: (e) => setLeadTime(e.target.value), placeholder: "e.g. 2-3 weeks", required: true, error: errors == null ? void 0 : errors.leadTime })
] });
const ALL_CERTIFICATIONS = [
  "USDA Organic",
  "EU Organic",
  "HACCP",
  "Halal",
  "ISO 22000",
  "Kosher",
  "BRC",
  "FSSC 22000",
  "GMP"
];
const EditorCertificationsSection = ({ certs, toggleCert, errors }) => /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
  /* @__PURE__ */ jsxs("p", { className: `text-sm font-medium ${(errors == null ? void 0 : errors.certs) ? "text-destructive" : "text-foreground"}`, children: [
    "Certifications ",
    (errors == null ? void 0 : errors.certs) ? `— ${errors.certs}` : ""
  ] }),
  /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 gap-1", children: ALL_CERTIFICATIONS.map((cert) => /* @__PURE__ */ jsx(FormCheckbox, { label: cert, checked: certs.includes(cert), onCheckedChange: () => toggleCert(cert) }, cert)) })
] });
const STATUS_OPTIONS = [
  { value: "in-stock", label: "In Stock" },
  { value: "limited", label: "Limited" },
  { value: "pre-order", label: "Pre-Order" }
];
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const levelConfig = {
  0: { bg: "bg-muted", label: "Low" },
  1: { bg: "bg-amber-400", label: "Available" },
  2: { bg: "bg-green-500", label: "Peak" }
};
const EditorAvailabilitySection = ({ peakSeason, setPeakSeason, offPeakSeason, setOffPeakSeason, currentStatus, setCurrentStatus, harvestMonths, setHarvestMonths }) => {
  const cycleMonth = (i) => {
    const next = [...harvestMonths];
    next[i] = (next[i] + 1) % 3;
    setHarvestMonths(next);
  };
  return /* @__PURE__ */ jsxs("div", { className: "space-y-4 rounded-lg border border-border p-4", children: [
    /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-foreground", children: "Harvest & Production Calendar" }),
    /* @__PURE__ */ jsx(FormInput, { label: "Peak Season", value: peakSeason, onChange: (e) => setPeakSeason(e.target.value), placeholder: "e.g. Year-round" }),
    /* @__PURE__ */ jsx(FormInput, { label: "Off-Peak Season", value: offPeakSeason, onChange: (e) => setOffPeakSeason(e.target.value), placeholder: "e.g. March - September" }),
    /* @__PURE__ */ jsx(FormSelect, { label: "Current Status", options: STATUS_OPTIONS, value: currentStatus, onChange: (e) => setCurrentStatus(e.target.value) }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("p", { className: "text-xs font-medium text-muted-foreground mb-2", children: "Monthly Production (click to cycle: Low → Available → Peak)" }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-12 gap-1", children: MONTHS.map((month, i) => {
        const level = harvestMonths[i] || 0;
        const config = levelConfig[level];
        return /* @__PURE__ */ jsxs(
          "button",
          {
            type: "button",
            onClick: () => cycleMonth(i),
            className: cn("flex flex-col items-center gap-1 rounded-md p-1.5 transition-colors border border-border hover:border-primary/50", config.bg),
            title: `${month}: ${config.label} — click to cycle`,
            children: [
              /* @__PURE__ */ jsx("span", { className: "text-[10px] font-medium leading-none", children: month }),
              /* @__PURE__ */ jsx("span", { className: "text-[9px] leading-none opacity-70", children: config.label })
            ]
          },
          month
        );
      }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-3 mt-2 text-[10px] text-muted-foreground", children: [
        /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ jsx("span", { className: "w-2.5 h-2.5 rounded-sm bg-green-500" }),
          "Peak"
        ] }),
        /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ jsx("span", { className: "w-2.5 h-2.5 rounded-sm bg-amber-400" }),
          "Available"
        ] }),
        /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ jsx("span", { className: "w-2.5 h-2.5 rounded-sm bg-muted border border-border" }),
          "Low"
        ] })
      ] })
    ] })
  ] });
};
const EditorPackagingSection = ({ productId, bulk, setBulk, retail, setRetail, retailImage, setRetailImage, bulkImage, setBulkImage, errors }) => /* @__PURE__ */ jsxs("div", { className: "space-y-4 rounded-lg border border-border p-4", children: [
  /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-foreground", children: "Packaging" }),
  /* @__PURE__ */ jsx(FormInput, { label: "Bulk", value: bulk, onChange: (e) => setBulk(e.target.value), placeholder: "e.g. 10-12.5kg carton with PE liner", required: true, error: errors == null ? void 0 : errors.packagingBulk }),
  /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
    /* @__PURE__ */ jsx("p", { className: "text-xs font-medium text-muted-foreground", children: "Bulk Packaging Photo" }),
    /* @__PURE__ */ jsx(ImageUploader, { currentSrc: bulkImage, productId, slot: "packaging-bulk", onUploaded: setBulkImage, onRemove: () => setBulkImage("") })
  ] }),
  /* @__PURE__ */ jsx(FormInput, { label: "Retail", value: retail, onChange: (e) => setRetail(e.target.value), placeholder: "e.g. 50g-500g stand-up pouches", required: true, error: errors == null ? void 0 : errors.packagingRetail }),
  /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
    /* @__PURE__ */ jsx("p", { className: "text-xs font-medium text-muted-foreground", children: "Retail Packaging Photo" }),
    /* @__PURE__ */ jsx(ImageUploader, { currentSrc: retailImage, productId, slot: "packaging-retail", onUploaded: setRetailImage, onRemove: () => setRetailImage("") })
  ] })
] });
const EditorLogisticsSection = ({ portOfLoading, setPortOfLoading, incoterms, setIncoterms, containerLoad20ft, setContainerLoad20ft, containerLoad40ft, setContainerLoad40ft, estimatedDelivery, setEstimatedDelivery, exportDocuments, setExportDocuments }) => /* @__PURE__ */ jsxs("div", { className: "space-y-4 rounded-lg border border-border p-4", children: [
  /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-foreground", children: "Logistics" }),
  /* @__PURE__ */ jsx(FormInput, { label: "Port of Loading", value: portOfLoading, onChange: (e) => setPortOfLoading(e.target.value), placeholder: "e.g. Semarang, Indonesia" }),
  /* @__PURE__ */ jsx(FormInput, { label: "Incoterms (comma-separated)", value: incoterms, onChange: (e) => setIncoterms(e.target.value), placeholder: "e.g. FOB, CIF, CFR" }),
  /* @__PURE__ */ jsx(FormInput, { label: "Container Load 20ft", value: containerLoad20ft, onChange: (e) => setContainerLoad20ft(e.target.value), placeholder: "e.g. 15-18 MT" }),
  /* @__PURE__ */ jsx(FormInput, { label: "Container Load 40ft", value: containerLoad40ft, onChange: (e) => setContainerLoad40ft(e.target.value), placeholder: "e.g. 22-26 MT" }),
  /* @__PURE__ */ jsx(FormInput, { label: "Estimated Delivery", value: estimatedDelivery, onChange: (e) => setEstimatedDelivery(e.target.value), placeholder: "e.g. 14-21 days from port of loading" }),
  /* @__PURE__ */ jsx(FormTextarea, { label: "Export Documents (one per line)", value: exportDocuments, onChange: (e) => setExportDocuments(e.target.value), placeholder: "e.g.\nCertificate of Origin\nPhytosanitary Certificate\nHealth Certificate" })
] });
const EditorApplicationsSection = ({ applications, addApplication, removeApplication }) => {
  const [newApp, setNewApp] = useState("");
  const handleAdd = () => {
    if (newApp.trim()) {
      addApplication(newApp.trim());
      setNewApp("");
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "space-y-4 rounded-lg border border-border p-4", children: [
    /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-foreground", children: "Applications" }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: applications.map((app, i) => /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1 rounded-full bg-muted px-3 py-1 text-sm text-foreground", children: [
      app,
      /* @__PURE__ */ jsx("button", { onClick: () => removeApplication(i), className: "ml-1 text-muted-foreground hover:text-destructive", children: "×" })
    ] }, i)) }),
    /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
      /* @__PURE__ */ jsx(FormInput, { label: "", value: newApp, onChange: (e) => setNewApp(e.target.value), placeholder: "e.g. Snacking, Trail mix", onKeyDown: (e) => e.key === "Enter" && (e.preventDefault(), handleAdd()) }),
      /* @__PURE__ */ jsxs(Button, { variant: "outline", size: "sm", onClick: handleAdd, className: "shrink-0 mt-auto", children: [
        /* @__PURE__ */ jsx(Plus, { className: "h-4 w-4 mr-1" }),
        " Add"
      ] })
    ] })
  ] });
};
const EditorFaqsSection = ({ faqs, addFaq, removeFaq, updateFaq }) => /* @__PURE__ */ jsxs("div", { className: "space-y-4 rounded-lg border border-border p-4", children: [
  /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-foreground", children: "FAQs" }),
  faqs.map((faq, i) => /* @__PURE__ */ jsx("div", { className: "space-y-2 rounded-lg border border-border p-3", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex-1 space-y-2", children: [
      /* @__PURE__ */ jsx(FormInput, { label: "Question", value: faq.question, onChange: (e) => updateFaq(i, "question", e.target.value), placeholder: "e.g. What are the microbiological specifications?" }),
      /* @__PURE__ */ jsx(FormTextarea, { label: "Answer", value: faq.answer, onChange: (e) => updateFaq(i, "answer", e.target.value), placeholder: "Detailed answer..." })
    ] }),
    /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "icon", onClick: () => removeFaq(i), className: "shrink-0 mt-6", children: /* @__PURE__ */ jsx(Trash2, { className: "h-4 w-4" }) })
  ] }) }, i)),
  /* @__PURE__ */ jsxs(Button, { variant: "outline", size: "sm", onClick: addFaq, children: [
    /* @__PURE__ */ jsx(Plus, { className: "h-4 w-4 mr-1" }),
    " Add FAQ"
  ] })
] });
const EditorRelatedSection = ({ selectedId, relatedProducts, toggleRelated, allProducts }) => /* @__PURE__ */ jsxs("div", { className: "space-y-2 rounded-lg border border-border p-4", children: [
  /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-foreground", children: "Related Products" }),
  /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 gap-1", children: allProducts.filter((p) => p.id !== selectedId).map((p) => /* @__PURE__ */ jsx(FormCheckbox, { label: p.shortName, checked: relatedProducts.includes(p.id), onCheckedChange: () => toggleRelated(p.id) }, p.id)) })
] });
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
      { key: "origin", label: "Origin" }
    ]
  },
  {
    label: "Chemical / Safety",
    fields: [
      { key: "brixLevel", label: "Brix (Sweetness)" },
      { key: "so2Level", label: "SO₂ / Preservatives" },
      { key: "additives", label: "Additives" },
      { key: "foreignMatter", label: "Foreign Matter" }
    ]
  },
  {
    label: "Microbiology",
    fields: [
      { key: "totalPlateCount", label: "Total Plate Count (TPC)" },
      { key: "yeastMold", label: "Yeast & Mold" },
      { key: "salmonella", label: "Salmonella" },
      { key: "eColi", label: "E. coli" }
    ]
  },
  {
    label: "Storage / Processing",
    fields: [
      { key: "shelfLife", label: "Shelf Life" },
      { key: "storageTemp", label: "Storage Temperature" },
      { key: "storageHumidity", label: "Storage Humidity" },
      { key: "processingMethod", label: "Processing Method" },
      { key: "packagingMethod", label: "Bulk Packaging Method" }
    ]
  }
];
const requiredSpecKeys = ["moisture", "shelfLife", "origin"];
const EditorSpecificationsSection = ({ specs, updateSpec, errors }) => /* @__PURE__ */ jsxs("div", { className: "space-y-4 rounded-lg border border-border p-4", children: [
  /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-foreground", children: "Technical Specifications" }),
  specGroups.map((group) => /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
    /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wide", children: group.label }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: group.fields.map((field) => /* @__PURE__ */ jsx(
      FormInput,
      {
        label: field.label,
        value: specs[field.key] || "",
        onChange: (e) => updateSpec(field.key, e.target.value),
        placeholder: `Enter ${field.label.toLowerCase()}`,
        required: requiredSpecKeys.includes(field.key),
        error: errors == null ? void 0 : errors[`specs.${field.key}`]
      },
      field.key
    )) })
  ] }, group.label))
] });
const ADMIN_PASSWORD = "dryfruits2024";
const ProductEditorPage = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState(false);
  if (!authenticated) {
    return /* @__PURE__ */ jsx("div", { className: "min-h-screen bg-background flex items-center justify-center p-4", children: /* @__PURE__ */ jsxs("div", { className: "w-full max-w-sm space-y-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsx("div", { className: "inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4", children: /* @__PURE__ */ jsx(Lock, { className: "h-6 w-6 text-primary" }) }),
        /* @__PURE__ */ jsx("h1", { className: "text-xl font-bold text-foreground", children: "Admin Access" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Enter the admin password to continue" })
      ] }),
      /* @__PURE__ */ jsxs("form", { onSubmit: (e) => {
        e.preventDefault();
        if (password === ADMIN_PASSWORD) {
          setAuthenticated(true);
          setAuthError(false);
        } else {
          setAuthError(true);
        }
      }, className: "space-y-3", children: [
        /* @__PURE__ */ jsx(
          FormInput,
          {
            label: "Password",
            type: "password",
            value: password,
            onChange: (e) => {
              setPassword(e.target.value);
              setAuthError(false);
            },
            placeholder: "Enter admin password",
            error: authError ? "Incorrect password" : void 0
          }
        ),
        /* @__PURE__ */ jsxs(Button, { type: "submit", className: "w-full", children: [
          /* @__PURE__ */ jsx(Lock, { className: "h-4 w-4 mr-2" }),
          " Unlock"
        ] })
      ] })
    ] }) });
  }
  return /* @__PURE__ */ jsx(ProductEditorContent, {});
};
const ProductEditorContent = () => {
  const editor = useProductEditor();
  if (editor.productsLoading) {
    return /* @__PURE__ */ jsx("div", { className: "min-h-screen bg-background flex items-center justify-center", children: /* @__PURE__ */ jsx(Loader2, { className: "h-8 w-8 animate-spin text-primary" }) });
  }
  const productOptions = editor.products.map((p) => ({ value: p.id, label: p.shortName }));
  const errorCount = Object.keys(editor.validationErrors).length;
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background p-4 sm:p-8 max-w-3xl mx-auto", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold mb-6 text-foreground", children: "Product Data Editor" }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-end gap-3 mb-4", children: [
      /* @__PURE__ */ jsx("div", { className: "flex-1", children: /* @__PURE__ */ jsx(FormSelect, { label: "Select Product", options: productOptions, value: editor.selectedId, onChange: (e) => editor.handleProductChange(e.target.value) }) }),
      /* @__PURE__ */ jsxs(Button, { variant: "outline", onClick: editor.handleNewProduct, className: "mb-0.5", children: [
        /* @__PURE__ */ jsx(Plus, { className: "h-4 w-4 mr-1" }),
        " New Product"
      ] })
    ] }),
    editor.isNewProduct && /* @__PURE__ */ jsx("div", { className: "rounded-lg border border-primary/50 bg-primary/5 p-3 mb-6 text-sm text-foreground", children: "Creating a new product. The ID will be auto-generated from the product name." }),
    /* @__PURE__ */ jsxs("div", { className: "mt-4 space-y-6", children: [
      /* @__PURE__ */ jsx(EditorSeoSection, { name: editor.name, setName: editor.setName, shortName: editor.shortName, setShortName: editor.setShortName, tagline: editor.tagline, setTagline: editor.setTagline, description: editor.description, setDescription: editor.setDescription, metaTitle: editor.metaTitle, setMetaTitle: editor.setMetaTitle, metaDescription: editor.metaDescription, setMetaDescription: editor.setMetaDescription, keywords: editor.keywords, setKeywords: editor.setKeywords, errors: editor.validationErrors }),
      /* @__PURE__ */ jsx(EditorImagesSection, { productId: editor.selectedId || editor.name.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") || "new", imgMain: editor.imgMain, setImgMain: editor.setImgMain, imgMainAlt: editor.imgMainAlt, setImgMainAlt: editor.setImgMainAlt, imgGallery: editor.imgGallery, updateGalleryImage: editor.updateGalleryImage, reorderGalleryImages: editor.reorderGalleryImages }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-4 rounded-lg border border-border p-4", children: [
        /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-foreground", children: "Trade Identification" }),
        /* @__PURE__ */ jsx(FormInput, { label: "SKU", value: editor.sku, onChange: (e) => editor.setSku(e.target.value), placeholder: "e.g. DF-PAP-001" }),
        /* @__PURE__ */ jsx(FormInput, { label: "HS Code", value: editor.hsCode, onChange: (e) => editor.setHsCode(e.target.value), placeholder: "e.g. 0813.40.00" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-4 rounded-lg border border-border p-4", children: [
        /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-foreground", children: "Product Description (Sensory)" }),
        /* @__PURE__ */ jsx(FormTextarea, { label: "Flavor Profile", value: editor.flavorProfile, onChange: (e) => editor.setFlavorProfile(e.target.value), placeholder: "e.g. Sweet, tangy tropical flavor with caramelized notes", required: true, error: editor.validationErrors.flavorProfile }),
        /* @__PURE__ */ jsx(FormInput, { label: "Texture", value: editor.texture, onChange: (e) => editor.setTexture(e.target.value), placeholder: "e.g. Chewy, soft, slightly crispy edges" }),
        /* @__PURE__ */ jsx(FormInput, { label: "Processing Method", value: editor.specs.processingMethod || "", onChange: (e) => editor.updateSpec("processingMethod", e.target.value), placeholder: "e.g. Sun-dried, Low-temp dehydrated, Freeze-dried" }),
        /* @__PURE__ */ jsx(EditorApplicationsSection, { applications: editor.applications, addApplication: editor.addApplication, removeApplication: editor.removeApplication })
      ] }),
      /* @__PURE__ */ jsx(EditorPricingSection, { fobBase: editor.fobBase, setFobBase: editor.setFobBase, moq: editor.moq, setMoq: editor.setMoq, leadTime: editor.leadTime, setLeadTime: editor.setLeadTime, errors: editor.validationErrors }),
      /* @__PURE__ */ jsx(EditorSpecificationsSection, { specs: editor.specs, updateSpec: editor.updateSpec, errors: editor.validationErrors }),
      /* @__PURE__ */ jsx(EditorCertificationsSection, { certs: editor.certs, toggleCert: editor.toggleCert, errors: editor.validationErrors }),
      /* @__PURE__ */ jsx(EditorAvailabilitySection, { peakSeason: editor.peakSeason, setPeakSeason: editor.setPeakSeason, offPeakSeason: editor.offPeakSeason, setOffPeakSeason: editor.setOffPeakSeason, currentStatus: editor.currentStatus, setCurrentStatus: editor.setCurrentStatus, harvestMonths: editor.harvestMonths, setHarvestMonths: editor.setHarvestMonths }),
      /* @__PURE__ */ jsx(EditorPackagingSection, { productId: editor.selectedId || editor.name.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") || "new", bulk: editor.packagingBulk, setBulk: editor.setPackagingBulk, retail: editor.packagingRetail, setRetail: editor.setPackagingRetail, retailImage: editor.packagingRetailImage, setRetailImage: editor.setPackagingRetailImage, bulkImage: editor.packagingBulkImage, setBulkImage: editor.setPackagingBulkImage, errors: editor.validationErrors }),
      /* @__PURE__ */ jsx(EditorLogisticsSection, { portOfLoading: editor.portOfLoading, setPortOfLoading: editor.setPortOfLoading, incoterms: editor.incoterms, setIncoterms: editor.setIncoterms, containerLoad20ft: editor.containerLoad20ft, setContainerLoad20ft: editor.setContainerLoad20ft, containerLoad40ft: editor.containerLoad40ft, setContainerLoad40ft: editor.setContainerLoad40ft, estimatedDelivery: editor.estimatedDelivery, setEstimatedDelivery: editor.setEstimatedDelivery, exportDocuments: editor.exportDocuments, setExportDocuments: editor.setExportDocuments }),
      /* @__PURE__ */ jsx(EditorFaqsSection, { faqs: editor.faqs, addFaq: editor.addFaq, removeFaq: editor.removeFaq, updateFaq: editor.updateFaq }),
      /* @__PURE__ */ jsx(EditorRelatedSection, { selectedId: editor.selectedId, relatedProducts: editor.relatedProducts, toggleRelated: editor.toggleRelated, allProducts: editor.products })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-8 space-y-3", children: [
      errorCount > 0 && /* @__PURE__ */ jsxs("div", { className: "rounded-lg border border-destructive/50 bg-destructive/10 p-4 text-sm text-destructive", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 font-medium mb-2", children: [
          /* @__PURE__ */ jsx(AlertTriangle, { className: "h-4 w-4" }),
          errorCount,
          " required field",
          errorCount > 1 ? "s" : "",
          " missing:"
        ] }),
        /* @__PURE__ */ jsx("ul", { className: "list-disc list-inside space-y-0.5 text-xs", children: Object.values(editor.validationErrors).map((msg, i) => /* @__PURE__ */ jsx("li", { children: msg }, i)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxs(Button, { onClick: editor.handleSave, disabled: editor.saving, className: "flex-1", children: [
          editor.saving ? /* @__PURE__ */ jsx(Loader2, { className: "h-4 w-4 mr-2 animate-spin" }) : /* @__PURE__ */ jsx(Save, { className: "h-4 w-4 mr-2" }),
          editor.isNewProduct ? "Create Product" : "Save Changes"
        ] }),
        !editor.isNewProduct && editor.selectedId && /* @__PURE__ */ jsxs(Button, { variant: "destructive", onClick: editor.handleDelete, disabled: editor.deleting, children: [
          editor.deleting ? /* @__PURE__ */ jsx(Loader2, { className: "h-4 w-4 mr-2 animate-spin" }) : /* @__PURE__ */ jsx(Trash2, { className: "h-4 w-4 mr-2" }),
          "Delete"
        ] })
      ] })
    ] })
  ] });
};
export {
  ProductEditorPage as default
};
