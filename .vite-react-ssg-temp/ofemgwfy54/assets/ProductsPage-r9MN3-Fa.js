import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";
import { u as useProducts, B as Button } from "../main.mjs";
import "clsx";
import { Scale, X, Plus, ExternalLink, Leaf, ChevronRight, Loader2 } from "lucide-react";
import { L as Layout, f as generateBreadcrumbSchema, h as generateItemListSchema, i as SITE_URL } from "./Layout-C1jIX7PL.js";
import { S as SEO, s as socialImages } from "./SEO-CnBucqL5.js";
import { B as Badge } from "./badge-DObGNgcP.js";
import { T as Table, d as TableHeader, b as TableRow, e as TableHead, a as TableBody, c as TableCell } from "./table-BSS22iTl.js";
import "./accordion-Blg67-Ce.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem, C as Carousel, e as CarouselContent, f as CarouselItem, P as ProductCard } from "./CategoryCard-CcsUvgyi.js";
import "vite-react-ssg";
import "@radix-ui/react-toast";
import "class-variance-authority";
import "tailwind-merge";
import "next-themes";
import "sonner";
import "@radix-ui/react-tooltip";
import "@radix-ui/react-slot";
import "@supabase/supabase-js";
import "react-fast-compare";
import "invariant";
import "shallowequal";
import "@radix-ui/react-accordion";
import "embla-carousel-react";
import "@radix-ui/react-select";
import "./optimized-image--pNYP21E.js";
const comparisonSpecs = [
  { key: "fobBase", label: "FOB Base Price", category: "pricing", getValue: (p) => p.pricing.fobBase },
  { key: "moq", label: "MOQ", category: "pricing", getValue: (p) => p.pricing.moq },
  { key: "leadTime", label: "Lead Time", category: "pricing", getValue: (p) => p.pricing.leadTime },
  { key: "moisture", label: "Moisture", category: "quality", getValue: (p) => p.specifications.moisture || "-" },
  { key: "waterActivity", label: "Water Activity", category: "quality", getValue: (p) => p.specifications.waterActivity || "-" },
  { key: "brixLevel", label: "Brix Level", category: "quality", getValue: (p) => p.specifications.brixLevel || "-" },
  { key: "grade", label: "Grade", category: "quality", getValue: (p) => p.specifications.grade || "-" },
  { key: "so2Level", label: "SO₂ Level", category: "safety", getValue: (p) => p.specifications.so2Level || "-" },
  { key: "totalPlateCount", label: "Total Plate Count", category: "safety", getValue: (p) => p.specifications.totalPlateCount || "-" },
  { key: "yeastMold", label: "Yeast & Mold", category: "safety", getValue: (p) => p.specifications.yeastMold || "-" },
  { key: "storageTemp", label: "Storage Temp", category: "storage", getValue: (p) => p.specifications.storageTemp || "-" },
  { key: "storageHumidity", label: "Storage Humidity", category: "storage", getValue: (p) => p.specifications.storageHumidity || "-" },
  { key: "shelfLife", label: "Shelf Life", category: "storage", getValue: (p) => p.specifications.shelfLife || "-" },
  { key: "containerLoad20ft", label: "20ft Container", category: "logistics", getValue: (p) => {
    var _a;
    return ((_a = p.logistics) == null ? void 0 : _a.containerLoad20ft) || "-";
  } },
  { key: "containerLoad40ft", label: "40ft Container", category: "logistics", getValue: (p) => {
    var _a;
    return ((_a = p.logistics) == null ? void 0 : _a.containerLoad40ft) || "-";
  } },
  { key: "portOfLoading", label: "Port of Loading", category: "logistics", getValue: (p) => {
    var _a;
    return ((_a = p.logistics) == null ? void 0 : _a.portOfLoading) || "-";
  } },
  {
    key: "organic",
    label: "Organic Certified",
    category: "certifications",
    getValue: (p) => p.isOrganic ? /* @__PURE__ */ jsxs(Badge, { variant: "default", className: "bg-primary/10 text-primary border-primary/20", children: [
      /* @__PURE__ */ jsx(Leaf, { className: "h-3 w-3 mr-1" }),
      " Yes"
    ] }) : "No"
  },
  {
    key: "certifications",
    label: "Certifications",
    category: "certifications",
    getValue: (p) => p.certifications.length > 0 ? p.certifications.join(", ") : "-"
  }
];
const categoryLabels = {
  "all": "All Products",
  "dried-fruits": "Dried Fruits"
};
const specCategoryLabels = {
  pricing: "Pricing",
  quality: "Quality Parameters",
  safety: "Safety & Microbiology",
  storage: "Storage Conditions",
  logistics: "Logistics",
  certifications: "Certifications"
};
function ProductComparisonTable() {
  const { products } = useProducts();
  const [selectedProductIds, setSelectedProductIds] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [carouselApi, setCarouselApi] = useState();
  const maxProducts = 4;
  useEffect(() => {
    if (!carouselApi) return;
    const onSelect = () => setActiveCardIndex(carouselApi.selectedScrollSnap());
    carouselApi.on("select", onSelect);
    onSelect();
    return () => {
      carouselApi.off("select", onSelect);
    };
  }, [carouselApi]);
  const filteredProducts = useMemo(() => {
    if (categoryFilter === "all") return products;
    return products.filter((p) => p.category === categoryFilter);
  }, [categoryFilter, products]);
  const availableProducts = useMemo(() => {
    return filteredProducts.filter((p) => !selectedProductIds.includes(p.id));
  }, [filteredProducts, selectedProductIds]);
  const selectedProducts = useMemo(() => {
    return selectedProductIds.map((id) => products.find((p) => p.id === id)).filter(Boolean);
  }, [selectedProductIds, products]);
  const handleAddProduct = (productId) => {
    if (selectedProductIds.length < maxProducts && !selectedProductIds.includes(productId)) {
      setSelectedProductIds([...selectedProductIds, productId]);
    }
  };
  const handleRemoveProduct = (productId) => {
    setSelectedProductIds(selectedProductIds.filter((id) => id !== productId));
  };
  const handleCategoryChange = (value) => {
    setCategoryFilter(value);
    if (value !== "all") {
      setSelectedProductIds(
        selectedProductIds.filter((id) => {
          const product = products.find((p) => p.id === id);
          return (product == null ? void 0 : product.category) === value;
        })
      );
    }
  };
  const specsByCategory = useMemo(() => {
    const grouped = {};
    comparisonSpecs.forEach((spec) => {
      if (!grouped[spec.category]) grouped[spec.category] = [];
      grouped[spec.category].push(spec);
    });
    return grouped;
  }, []);
  const valuesDiffer = (spec) => {
    if (selectedProducts.length < 2) return false;
    const values = selectedProducts.map((p) => {
      const val = spec.getValue(p);
      return typeof val === "string" ? val : JSON.stringify(val);
    });
    return new Set(values).size > 1;
  };
  return /* @__PURE__ */ jsxs("div", { className: "bg-card rounded-xl p-6 shadow-soft border border-border/50", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
      /* @__PURE__ */ jsx(Scale, { className: "h-6 w-6 text-primary" }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-foreground", children: "Compare Products" }),
        /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground text-sm", children: [
          "Select up to ",
          maxProducts,
          " products to compare specifications side-by-side"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
      /* @__PURE__ */ jsx("label", { className: "text-sm font-medium text-foreground mb-2 block", children: "Filter by Category" }),
      /* @__PURE__ */ jsxs(Select, { value: categoryFilter, onValueChange: handleCategoryChange, children: [
        /* @__PURE__ */ jsx(SelectTrigger, { className: "w-full sm:w-64", children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Select category" }) }),
        /* @__PURE__ */ jsx(SelectContent, { children: Object.entries(categoryLabels).map(([value, label]) => /* @__PURE__ */ jsx(SelectItem, { value, children: label }, value)) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6", children: Array.from({ length: maxProducts }).map((_, index) => {
      const product = selectedProducts[index];
      return /* @__PURE__ */ jsx("div", { className: `rounded-lg border-2 border-dashed p-3 min-h-[80px] flex items-center justify-center transition-colors ${product ? "border-primary/50 bg-primary/5" : "border-muted-foreground/20 bg-muted/30"}`, children: product ? /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 w-full", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsx("p", { className: "font-medium text-sm text-foreground truncate", children: product.shortName }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground truncate", children: categoryLabels[product.category] || product.category })
        ] }),
        /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "icon", className: "h-8 w-8 min-h-[48px] min-w-[48px] shrink-0", onClick: () => handleRemoveProduct(product.id), "aria-label": `Remove ${product.name}`, children: /* @__PURE__ */ jsx(X, { className: "h-4 w-4" }) })
      ] }) : /* @__PURE__ */ jsxs(Select, { value: "", onValueChange: handleAddProduct, disabled: availableProducts.length === 0, children: [
        /* @__PURE__ */ jsx(SelectTrigger, { className: "border-0 shadow-none bg-transparent h-auto p-0 w-full", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-1 text-muted-foreground", children: [
          /* @__PURE__ */ jsx(Plus, { className: "h-5 w-5" }),
          /* @__PURE__ */ jsx("span", { className: "text-xs", children: "Add Product" })
        ] }) }),
        /* @__PURE__ */ jsx(SelectContent, { children: availableProducts.map((p) => /* @__PURE__ */ jsx(SelectItem, { value: p.id, children: p.shortName }, p.id)) })
      ] }) }, index);
    }) }),
    selectedProducts.length > 0 ? /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("div", { className: "hidden md:block overflow-x-auto -mx-6 px-6", children: /* @__PURE__ */ jsxs(Table, { children: [
        /* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, { children: [
          /* @__PURE__ */ jsx(TableHead, { className: "min-w-[160px] sticky left-0 bg-card z-10", children: "Specification" }),
          selectedProducts.map((product) => /* @__PURE__ */ jsx(TableHead, { className: "min-w-[140px] text-center", children: product.shortName }, product.id))
        ] }) }),
        /* @__PURE__ */ jsxs(TableBody, { children: [
          Object.entries(specsByCategory).map(([category, specs]) => /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx(TableRow, { className: "bg-muted/50", children: /* @__PURE__ */ jsx(TableCell, { colSpan: selectedProducts.length + 1, className: "font-semibold text-foreground py-2", children: specCategoryLabels[category] }) }, `cat-${category}`),
            specs.map((spec) => {
              const differs = valuesDiffer(spec);
              return /* @__PURE__ */ jsxs(TableRow, { className: differs ? "bg-amber-50/50 dark:bg-amber-950/20" : "", children: [
                /* @__PURE__ */ jsx(TableCell, { className: "font-medium text-muted-foreground sticky left-0 bg-inherit", children: spec.label }),
                selectedProducts.map((product) => /* @__PURE__ */ jsx(TableCell, { className: "text-center text-sm", children: spec.getValue(product) }, product.id))
              ] }, spec.key);
            })
          ] })),
          /* @__PURE__ */ jsxs(TableRow, { children: [
            /* @__PURE__ */ jsx(TableCell, { className: "font-medium text-muted-foreground sticky left-0 bg-card", children: "Details" }),
            selectedProducts.map((product) => /* @__PURE__ */ jsx(TableCell, { className: "text-center", children: /* @__PURE__ */ jsx(Button, { asChild: true, variant: "outline", size: "sm", children: /* @__PURE__ */ jsxs(Link, { to: `/products/${product.category}/${product.id}`, children: [
              "View ",
              /* @__PURE__ */ jsx(ExternalLink, { className: "h-3 w-3 ml-1" })
            ] }) }) }, product.id))
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "md:hidden", children: [
        /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center gap-2 mb-3", children: selectedProducts.map((_, idx) => /* @__PURE__ */ jsx("button", { className: "min-h-[48px] min-w-[48px] flex items-center justify-center", onClick: () => carouselApi == null ? void 0 : carouselApi.scrollTo(idx), "aria-label": `Go to product ${idx + 1}`, children: /* @__PURE__ */ jsx("span", { className: `block w-2.5 h-2.5 rounded-full transition-colors ${idx === activeCardIndex ? "bg-primary" : "bg-muted-foreground/30"}` }) }, idx)) }),
        selectedProducts.length >= 2 && /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground text-center mb-3", children: "Swipe to compare" }),
        /* @__PURE__ */ jsx(Carousel, { opts: { align: "start" }, setApi: setCarouselApi, children: /* @__PURE__ */ jsx(CarouselContent, { children: selectedProducts.map((product) => /* @__PURE__ */ jsx(CarouselItem, { children: /* @__PURE__ */ jsxs("div", { className: "rounded-lg border border-border bg-background p-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-4", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-bold text-lg text-foreground", children: product.shortName }),
            /* @__PURE__ */ jsx(Button, { asChild: true, variant: "outline", size: "sm", className: "min-h-[44px]", children: /* @__PURE__ */ jsxs(Link, { to: `/products/${product.category}/${product.id}`, children: [
              "View ",
              /* @__PURE__ */ jsx(ExternalLink, { className: "h-3 w-3 ml-1" })
            ] }) })
          ] }),
          Object.entries(specsByCategory).map(([category, specs]) => /* @__PURE__ */ jsxs("div", { className: "mb-3 last:mb-0", children: [
            /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold text-primary uppercase tracking-wide mb-2", children: specCategoryLabels[category] }),
            /* @__PURE__ */ jsx("div", { className: "space-y-1.5", children: specs.map((spec) => /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-4 py-1.5 border-b border-border/30 last:border-0", children: [
              /* @__PURE__ */ jsx("span", { className: "text-sm text-muted-foreground", children: spec.label }),
              /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-foreground text-right", children: spec.getValue(product) })
            ] }, spec.key)) })
          ] }, category))
        ] }) }, product.id)) }) })
      ] })
    ] }) : /* @__PURE__ */ jsxs("div", { className: "text-center py-12 text-muted-foreground", children: [
      /* @__PURE__ */ jsx(Scale, { className: "h-12 w-12 mx-auto mb-3 opacity-30" }),
      /* @__PURE__ */ jsx("p", { children: "Select products above to compare their specifications" })
    ] }),
    selectedProducts.length >= 2 && /* @__PURE__ */ jsxs("div", { className: "mt-4 flex items-center gap-2 text-xs text-muted-foreground", children: [
      /* @__PURE__ */ jsx("div", { className: "w-4 h-4 bg-amber-50 dark:bg-amber-950/40 rounded border border-amber-200 dark:border-amber-800" }),
      /* @__PURE__ */ jsx("span", { children: "Highlighted rows indicate differing values" })
    ] })
  ] });
}
const breadcrumbItems = [
  { name: "Home", url: SITE_URL },
  { name: "Products", url: `${SITE_URL}/products` }
];
function ProductsPage() {
  const { products, loading } = useProducts();
  return /* @__PURE__ */ jsxs(Layout, { children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: "Wholesale Dried Fruit Products - Bulk Export from Indonesia",
        description: "Browse our complete range of premium dried tropical fruits. USDA & EU Organic certified. MOQ 500kg. Direct from Indonesian manufacturer.",
        keywords: ["wholesale dried fruit products", "bulk dried fruit Indonesia", "dried fruit catalog", "organic dried fruit range"],
        canonical: "/products",
        ogImage: socialImages.products
      }
    ),
    /* @__PURE__ */ jsx(
      "script",
      {
        type: "application/ld+json",
        dangerouslySetInnerHTML: {
          __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbItems))
        }
      }
    ),
    products.length > 0 && /* @__PURE__ */ jsx(
      "script",
      {
        type: "application/ld+json",
        dangerouslySetInnerHTML: {
          __html: JSON.stringify(
            generateItemListSchema(products, "Dried Fruits", `${SITE_URL}/products`)
          )
        }
      }
    ),
    /* @__PURE__ */ jsx("section", { className: "py-16 bg-gradient-to-br from-primary to-tropical-green-light animate-content-reveal", children: /* @__PURE__ */ jsxs("div", { className: "container text-center text-primary-foreground", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold sm:text-5xl mb-4", children: "Our Products" }),
      /* @__PURE__ */ jsx("p", { className: "text-xl text-primary-foreground/80", children: "Premium dried tropical fruits from Indonesia" })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "bg-muted/50 py-4 animate-content-reveal animation-delay-75", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs("nav", { className: "flex items-center gap-2 text-sm text-muted-foreground", children: [
      /* @__PURE__ */ jsx(Link, { to: "/", className: "hover:text-primary transition-colors min-h-[44px] flex items-center", children: "Home" }),
      /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4" }),
      /* @__PURE__ */ jsx("span", { className: "text-foreground font-medium min-h-[44px] flex items-center", children: "Products" })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsx("div", { className: "mb-16", children: /* @__PURE__ */ jsx(ProductComparisonTable, {}) }),
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-foreground mb-8", children: "Our Dried Fruits" }),
      loading ? /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center py-12", children: /* @__PURE__ */ jsx(Loader2, { className: "h-8 w-8 animate-spin text-primary" }) }) : /* @__PURE__ */ jsx("div", { className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-4", children: products.map((product, index) => /* @__PURE__ */ jsx(
        ProductCard,
        {
          product,
          animationDelay: 150 + index * 50,
          showImage: true
        },
        product.id
      )) })
    ] }) })
  ] });
}
export {
  ProductsPage as default
};
