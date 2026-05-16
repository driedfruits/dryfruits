import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { c as companyInfo, q as categoryLabels, P as PrimaryButton, W as WhatsAppButton, r as getRelatedProducts, i as SITE_URL, u as generateProductSchema, f as generateBreadcrumbSchema, m as generateFAQSchema, b as SecondaryButton } from "./Layout-C1jIX7PL.js";
import { c as cn, u as useProducts } from "../main.mjs";
import { g as getCategorySocialImage, S as SEO } from "./SEO-CnBucqL5.js";
import { B as Badge } from "./badge-DObGNgcP.js";
import { O as OptimizedImage } from "./optimized-image--pNYP21E.js";
import { FileCheck, Clock, Ship, Container, ShoppingBag, Package, CheckCircle, Calendar, AlertCircle, FileText, ChevronRight, Leaf } from "lucide-react";
import { T as Table, d as TableHeader, b as TableRow, e as TableHead, a as TableBody, c as TableCell } from "./table-BSS22iTl.js";
import { F as FAQAccordion } from "./faq-accordion-DBWb51MQ.js";
import "vite-react-ssg";
import "@radix-ui/react-toast";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "next-themes";
import "sonner";
import "@radix-ui/react-tooltip";
import "@radix-ui/react-slot";
import "@supabase/supabase-js";
import "react-fast-compare";
import "invariant";
import "shallowequal";
import "./accordion-Blg67-Ce.js";
import "@radix-ui/react-accordion";
const specLabels = {
  size: "Cut Size / Form",
  moisture: "Moisture Content",
  color: "Color",
  shelfLife: "Shelf Life",
  origin: "Origin",
  brixLevel: "Brix (Sweetness)",
  additives: "Additives",
  foreignMatter: "Foreign Matter",
  processingMethod: "Processing Method",
  grade: "Grade",
  so2Level: "SO₂ / Preservatives",
  totalPlateCount: "Total Plate Count (TPC)",
  waterActivity: "Water Activity (aw)",
  storageTemp: "Storage Temperature",
  storageHumidity: "Storage Humidity",
  yeastMold: "Yeast & Mold",
  packagingMethod: "Bulk Packaging Method",
  salmonella: "Salmonella",
  eColi: "E. coli",
  defects: "Defects"
};
function ProductSpecsTable({ product }) {
  const specs = Object.entries(product.specifications).filter(
    ([key, value]) => value && value !== "--" && value !== "-" && key in specLabels
  );
  const allRows = [
    { label: "Product Name", value: product.name },
    ...product.hsCode ? [{ label: "HS Code", value: /* @__PURE__ */ jsxs(Fragment, { children: [
      product.hsCode,
      " ",
      /* @__PURE__ */ jsx("span", { className: "text-muted-foreground text-xs", children: "(for import duty calculation)" })
    ] }) }] : [],
    ...specs.map(([key, value]) => ({
      label: specLabels[key] || key,
      value
    }))
  ];
  return /* @__PURE__ */ jsx("section", { className: "py-8 bg-muted/30", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-foreground mb-4", children: "Technical Specifications & Quality Parameters" }),
    /* @__PURE__ */ jsx("div", { className: "md:hidden bg-card rounded-xl shadow-soft divide-y divide-border", children: allRows.map((row, i) => /* @__PURE__ */ jsxs("div", { className: "px-4 py-2.5", children: [
      /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold text-muted-foreground", children: row.label }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-foreground mt-0.5", children: row.value })
    ] }, i)) }),
    (() => {
      const mid = Math.ceil(allRows.length / 2);
      const leftRows = allRows.slice(0, mid);
      const rightRows = allRows.slice(mid);
      const renderColumn = (rows) => /* @__PURE__ */ jsx("div", { className: "bg-card rounded-xl overflow-hidden shadow-soft", children: /* @__PURE__ */ jsxs(Table, { children: [
        /* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, { className: "bg-muted/50", children: [
          /* @__PURE__ */ jsx(TableHead, { className: "font-semibold text-foreground w-2/5 px-3 py-2 h-auto text-sm", children: "Parameter" }),
          /* @__PURE__ */ jsx(TableHead, { className: "font-semibold text-foreground px-3 py-2 h-auto text-sm", children: "Value" })
        ] }) }),
        /* @__PURE__ */ jsx(TableBody, { children: rows.map((row, i) => /* @__PURE__ */ jsxs(TableRow, { className: i % 2 === 0 ? "bg-muted/20" : "", children: [
          /* @__PURE__ */ jsx(TableCell, { className: "font-medium px-3 py-2 text-sm", children: row.label }),
          /* @__PURE__ */ jsx(TableCell, { className: "px-3 py-2 text-sm", children: row.value })
        ] }, i)) })
      ] }) });
      return /* @__PURE__ */ jsxs("div", { className: "hidden md:grid grid-cols-2 gap-4", children: [
        renderColumn(leftRows),
        renderColumn(rightRows)
      ] });
    })()
  ] }) });
}
function ProductLogistics({ product }) {
  var _a;
  const logistics = product.logistics || companyInfo.defaultLogistics;
  const exportDocs = product.exportDocuments || companyInfo.standardExportDocuments;
  return /* @__PURE__ */ jsx("section", { className: "py-12 bg-muted/30", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-foreground mb-6", children: "Logistics & Shipping" }),
    /* @__PURE__ */ jsxs("div", { className: "bg-card rounded-xl p-6 shadow-soft mb-6", children: [
      /* @__PURE__ */ jsx(FileCheck, { className: "h-8 w-8 text-primary mb-4" }),
      /* @__PURE__ */ jsx("h3", { className: "font-semibold text-foreground mb-3", children: "Export Documentation" }),
      /* @__PURE__ */ jsx("ul", { className: "columns-2 gap-x-8 space-y-1 text-sm text-muted-foreground", children: exportDocs.map((doc, i) => /* @__PURE__ */ jsxs("li", { children: [
        "• ",
        doc
      ] }, i)) })
    ] }),
    "estimatedDelivery" in logistics && logistics.estimatedDelivery && /* @__PURE__ */ jsxs("div", { className: "bg-card rounded-xl p-6 shadow-soft mb-6 flex items-start gap-4", children: [
      /* @__PURE__ */ jsx(Clock, { className: "h-8 w-8 text-primary shrink-0" }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "font-semibold text-foreground mb-1", children: "Estimated Delivery" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: logistics.estimatedDelivery })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid gap-6 md:grid-cols-2", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-card rounded-xl overflow-hidden shadow-soft", children: [
        /* @__PURE__ */ jsx(
          OptimizedImage,
          {
            src: "/placeholder.svg",
            alt: "Euro pallet loaded with wholesale dried fruit cartons for LCL shipment",
            aspectRatio: "video",
            width: 600,
            height: 338,
            fallbackIcon: /* @__PURE__ */ jsx(Ship, { className: "h-16 w-16 text-muted-foreground/30" })
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-semibold text-foreground mb-3", children: "LCL — Pallet Shipment" }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Pallet Size:" }),
              " 120 × 100 × 150 cm (Euro pallet)"
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Material:" }),
              " ISPM-15 certified heat-treated wood"
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Max Load:" }),
              " 1,000 kg per pallet"
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Volume:" }),
              " ~1.8 m³ per pallet"
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Port of Loading:" }),
              " ",
              logistics.portOfLoading
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-card rounded-xl overflow-hidden shadow-soft", children: [
        /* @__PURE__ */ jsx(
          OptimizedImage,
          {
            src: "/placeholder.svg",
            alt: "Full container load with dried fruit cartons for FCL export shipment",
            aspectRatio: "video",
            width: 600,
            height: 338,
            fallbackIcon: /* @__PURE__ */ jsx(Container, { className: "h-16 w-16 text-muted-foreground/30" })
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-semibold text-foreground mb-3", children: "FCL — Full Container Load" }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "20ft Container:" }),
              " ~33 m³ / ",
              logistics.containerLoad20ft
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "40ft Container:" }),
              " ~67 m³ / ",
              logistics.containerLoad40ft
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Incoterms:" }),
              " ",
              (_a = logistics.incoterms) == null ? void 0 : _a.join(", ")
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Port of Loading:" }),
              " ",
              logistics.portOfLoading
            ] })
          ] })
        ] })
      ] })
    ] })
  ] }) });
}
function ProductFAQ({ faqs, productName }) {
  if (!faqs || faqs.length === 0) {
    return null;
  }
  return /* @__PURE__ */ jsx("section", { className: "py-12", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
    /* @__PURE__ */ jsxs("h2", { className: "text-2xl font-bold text-foreground mb-6", children: [
      "FAQ for ",
      productName,
      " Importers"
    ] }),
    /* @__PURE__ */ jsx(FAQAccordion, { items: faqs, variant: "separated" })
  ] }) });
}
function ProductDescriptionPackaging({ product }) {
  var _a, _b, _c, _d, _e, _f;
  const hasSensory = product.flavorProfile || product.texture;
  const hasApplications = product.applications.length > 0;
  const hasPackaging = ((_a = product.packaging) == null ? void 0 : _a.retail) || ((_b = product.packaging) == null ? void 0 : _b.bulk);
  if (!hasSensory && !hasApplications && !hasPackaging) return null;
  return /* @__PURE__ */ jsx("section", { className: "py-12 bg-muted/30", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
    (hasSensory || hasApplications) && /* @__PURE__ */ jsxs("div", { className: "grid gap-8 lg:grid-cols-2 mb-10", children: [
      hasSensory && /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-foreground mb-4", children: "Product Description" }),
        /* @__PURE__ */ jsxs("div", { className: "bg-card rounded-xl p-6 shadow-soft space-y-4", children: [
          product.flavorProfile && /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-medium text-foreground mb-1", children: "Flavor Profile" }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: product.flavorProfile })
          ] }),
          product.texture && /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-medium text-foreground mb-1", children: "Texture" }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: product.texture })
          ] })
        ] })
      ] }),
      hasApplications && /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-foreground mb-4", children: "Industrial Applications" }),
        /* @__PURE__ */ jsx("div", { className: "bg-card rounded-xl p-6 shadow-soft", children: /* @__PURE__ */ jsx("ul", { className: "grid gap-2", style: { gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))" }, children: product.applications.map((app) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2 text-sm", children: [
          /* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-primary shrink-0" }),
          app
        ] }, app)) }) })
      ] })
    ] }),
    hasPackaging && /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-foreground mb-4", children: "Packaging Options" }),
      /* @__PURE__ */ jsxs("div", { className: "grid gap-6 sm:grid-cols-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-card rounded-xl overflow-hidden shadow-soft", children: [
          /* @__PURE__ */ jsx(
            OptimizedImage,
            {
              src: ((_c = product.packaging) == null ? void 0 : _c.retailImage) || "/placeholder.svg",
              alt: `${product.name} retail standing pouch with private label branding`,
              aspectRatio: "video",
              width: 400,
              height: 225,
              fallbackIcon: /* @__PURE__ */ jsx(ShoppingBag, { className: "h-16 w-16 text-muted-foreground/30" })
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "p-5", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-semibold text-foreground mb-1", children: "Retail / Private Label Pouches" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mb-2", children: ((_d = product.packaging) == null ? void 0 : _d.retail) || "50g–500g stand-up pouches" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-primary font-medium", children: "Custom branding available" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-card rounded-xl overflow-hidden shadow-soft", children: [
          /* @__PURE__ */ jsx(
            OptimizedImage,
            {
              src: ((_e = product.packaging) == null ? void 0 : _e.bulkImage) || "/placeholder.svg",
              alt: `${product.name} bulk 10kg HORECA carton pack`,
              aspectRatio: "video",
              width: 400,
              height: 225,
              fallbackIcon: /* @__PURE__ */ jsx(Package, { className: "h-16 w-16 text-muted-foreground/30" })
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "p-5", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-semibold text-foreground mb-1", children: "Bulk / HORECA Pack" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mb-2", children: ((_f = product.packaging) == null ? void 0 : _f.bulk) || "10–12.5kg carton with PE liner" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-primary font-medium", children: "Food-grade PE inner liner" })
          ] })
        ] })
      ] })
    ] })
  ] }) });
}
const statusConfig = {
  "in-stock": { icon: CheckCircle, label: "In Stock", className: "bg-green-100 text-green-800 border-green-200" },
  "limited": { icon: AlertCircle, label: "Limited Supply", className: "bg-yellow-100 text-yellow-800 border-yellow-200" },
  "pre-order": { icon: Clock, label: "Pre-Order Only", className: "bg-blue-100 text-blue-800 border-blue-200" }
};
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const monthColorMap = {
  0: "bg-muted",
  1: "bg-amber-400",
  2: "bg-green-500"
};
const monthLabelMap = {
  0: "Low Production",
  1: "Available",
  2: "Peak Season"
};
function ProductSeasonality({ availability, harvestMonths, productName }) {
  if (!availability) {
    return null;
  }
  const status = availability.currentStatus ? statusConfig[availability.currentStatus] : null;
  const StatusIcon = (status == null ? void 0 : status.icon) || CheckCircle;
  const currentMonth = (/* @__PURE__ */ new Date()).getMonth();
  return /* @__PURE__ */ jsx("section", { className: "py-12 bg-muted/30", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-foreground mb-6", children: "Harvest & Production Calendar" }),
    /* @__PURE__ */ jsxs("div", { className: "bg-card rounded-xl p-6 shadow-soft", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid gap-6 md:grid-cols-3", children: [
        availability.peakSeason && /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsx(Calendar, { className: "h-6 w-6 text-primary mt-1" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-medium text-foreground", children: "Peak Season" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: availability.peakSeason }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-primary mt-1", children: "Best Pricing" })
          ] })
        ] }),
        availability.offPeakSeason && /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsx(Calendar, { className: "h-6 w-6 text-muted-foreground mt-1" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-medium text-foreground", children: "Off-Peak" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: availability.offPeakSeason }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Supply available, higher cost" })
          ] })
        ] }),
        status && /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsx(StatusIcon, { className: "h-6 w-6 text-primary mt-1" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-medium text-foreground", children: "Current Status" }),
            /* @__PURE__ */ jsx(Badge, { variant: "outline", className: status.className, children: status.label })
          ] })
        ] })
      ] }),
      harvestMonths && harvestMonths.length === 12 && /* @__PURE__ */ jsxs("div", { className: "mt-8", children: [
        /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-foreground mb-3", children: "Monthly Production & Ordering Timeline" }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-12 gap-1 sm:gap-1.5", children: harvestMonths.map((level, i) => /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-1.5", children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: cn(
                "w-full aspect-square rounded-md sm:rounded-lg transition-all",
                monthColorMap[level] || "bg-muted",
                i === currentMonth && "ring-2 ring-primary ring-offset-1 ring-offset-background"
              ),
              title: `${MONTHS[i]}: ${monthLabelMap[level] || "Unknown"}`
            }
          ),
          /* @__PURE__ */ jsx(
            "span",
            {
              className: cn(
                "text-[10px] sm:text-xs leading-none",
                i === currentMonth ? "font-bold text-primary" : "text-muted-foreground"
              ),
              children: MONTHS[i]
            }
          )
        ] }, i)) }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-4 mt-4 text-xs text-muted-foreground", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsx("span", { className: "inline-block w-3 h-3 rounded-sm bg-green-500" }),
            "Peak Season · Best Pricing"
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsx("span", { className: "inline-block w-3 h-3 rounded-sm bg-amber-400" }),
            "Available · Higher Cost"
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsx("span", { className: "inline-block w-3 h-3 rounded-sm bg-muted border border-border" }),
            "Low Production"
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsx("span", { className: "inline-block w-3 h-3 rounded-sm ring-2 ring-primary" }),
            "Current Month"
          ] })
        ] })
      ] })
    ] })
  ] }) });
}
function ProductQuickHighlights({ product }) {
  var _a;
  const highlights = [
    { label: "Certifications", value: product.certifications.join(", ") },
    { label: "MOQ", value: product.pricing.moq },
    { label: "Lead Time", value: product.pricing.leadTime },
    { label: "Cut Size / Form", value: product.specifications.size },
    { label: "Season", value: (_a = product.availability) == null ? void 0 : _a.peakSeason },
    { label: "Moisture", value: product.specifications.moisture },
    { label: "Shelf Life", value: product.specifications.shelfLife },
    { label: "Origin", value: product.specifications.origin }
  ].filter((item) => item.value);
  return /* @__PURE__ */ jsx("ul", { className: "space-y-2 mb-6 text-sm", children: highlights.map((item) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
    /* @__PURE__ */ jsxs("span", { className: "font-medium", children: [
      item.label,
      ":"
    ] }),
    /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: item.value })
  ] }, item.label)) });
}
function RelatedProducts({ products }) {
  if (products.length === 0) return null;
  return /* @__PURE__ */ jsx("section", { className: "py-12 bg-muted/30", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-foreground mb-6", children: "Related Products" }),
    /* @__PURE__ */ jsx("div", { className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4", children: products.map((related) => {
      var _a;
      return /* @__PURE__ */ jsxs(
        Link,
        {
          to: `/products/${related.category}/${related.id}`,
          className: "group bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-glow transition-all",
          children: [
            /* @__PURE__ */ jsx(
              OptimizedImage,
              {
                src: ((_a = related.images) == null ? void 0 : _a.main) || "",
                alt: `${related.name} - Wholesale ${categoryLabels[related.category].toLowerCase()} from Indonesia, ${related.pricing.fobBase}`,
                aspectRatio: "square",
                width: 280,
                height: 280,
                className: "group-hover:scale-105 transition-transform duration-300",
                fallbackIcon: /* @__PURE__ */ jsx(Package, { className: "h-12 w-12 text-muted-foreground/30 group-hover:scale-110 transition-transform" })
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "p-4", children: [
              /* @__PURE__ */ jsx("h3", { className: "font-semibold text-foreground group-hover:text-primary transition-colors text-sm", children: related.shortName }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: related.pricing.fobBase })
            ] })
          ]
        },
        related.id
      );
    }) })
  ] }) });
}
function StickyInquiryBar({ product }) {
  return /* @__PURE__ */ jsx("div", { className: "fixed bottom-16 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-t border-border shadow-lg lg:hidden", children: /* @__PURE__ */ jsx("div", { className: "container py-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-3", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
      /* @__PURE__ */ jsxs("p", { className: "text-base font-medium text-foreground truncate", children: [
        "Bulk ",
        product.shortName,
        "?"
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: product.pricing.fobBase })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
      /* @__PURE__ */ jsxs(PrimaryButton, { to: "/contact", size: "sm", children: [
        /* @__PURE__ */ jsx(FileText, { className: "h-4 w-4 mr-1" }),
        "Quote"
      ] }),
      /* @__PURE__ */ jsx(
        WhatsAppButton,
        {
          message: `Hi! I'm interested in bulk ${product.name}. MOQ: ${product.pricing.moq}`,
          size: "sm"
        }
      )
    ] })
  ] }) }) });
}
function ProductPageTemplate({ product }) {
  var _a, _b, _c, _d, _e, _f;
  const { products } = useProducts();
  const relatedProducts = getRelatedProducts(products, product.id);
  const gallery = ((_a = product.images) == null ? void 0 : _a.gallery) || [];
  const mainImage = ((_b = product.images) == null ? void 0 : _b.main) || "";
  const gallerySrcs = gallery.map((g) => g.src);
  const galleryAlts = gallery.map((g) => g.alt);
  const rawImages = [mainImage, ...gallerySrcs].filter(Boolean);
  const allImages = [...rawImages, ...Array(4).fill("/placeholder.svg")].slice(0, 4);
  const allAlts = [
    ((_c = product.images) == null ? void 0 : _c.mainAlt) || `${product.name} wholesale`,
    ...galleryAlts,
    ...Array(4).fill(`${product.name} view`)
  ].slice(0, 4);
  const [selectedImage, setSelectedImage] = useState(allImages[0]);
  useEffect(() => {
    setSelectedImage(allImages[0]);
  }, [product.id]);
  const seoTitle = product.metaTitle || `Wholesale ${product.name} - Bulk Export from Indonesia`;
  const seoDescription = product.metaDescription || `Direct manufacturer of premium ${product.name.toLowerCase()} from Indonesia. ${product.isOrganic ? "USDA/EU Organic certified. " : ""}Bulk packaging available. MOQ ${product.pricing.moq}. View specs & pricing.`;
  const seoKeywords = product.keywords || [`bulk ${product.name.toLowerCase()}`, `wholesale ${product.name.toLowerCase()} Indonesia`, `${product.name.toLowerCase()} supplier`];
  const ogImage = ((_d = product.images) == null ? void 0 : _d.main) ? `${SITE_URL}${product.images.main}` : getCategorySocialImage(product.category);
  const breadcrumbItems = [
    { name: "Home", url: SITE_URL },
    { name: "Wholesale Dried Fruits", url: `${SITE_URL}/products` },
    { name: categoryLabels[product.category], url: `${SITE_URL}/products` },
    { name: `${product.name} Bulk`, url: `${SITE_URL}/products/${product.category}/${product.id}` }
  ];
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: seoTitle,
        description: seoDescription,
        keywords: seoKeywords,
        canonical: `/products/${product.category}/${product.id}`,
        ogType: "product",
        ogImage
      }
    ),
    /* @__PURE__ */ jsx(
      "script",
      {
        type: "application/ld+json",
        dangerouslySetInnerHTML: {
          __html: JSON.stringify(generateProductSchema(product))
        }
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
    product.faqs && product.faqs.length > 0 && /* @__PURE__ */ jsx(
      "script",
      {
        type: "application/ld+json",
        dangerouslySetInnerHTML: {
          __html: JSON.stringify(generateFAQSchema(product.faqs))
        }
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background pb-36 lg:pb-0", children: [
      /* @__PURE__ */ jsx("div", { className: "bg-muted/50 py-4", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs("nav", { className: "flex items-center gap-2 text-sm text-muted-foreground overflow-x-auto scrollbar-hide whitespace-nowrap pb-1", children: [
        /* @__PURE__ */ jsx(Link, { to: "/", className: "hover:text-primary transition-colors shrink-0 min-h-[44px] flex items-center", children: "Home" }),
        /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4 shrink-0" }),
        /* @__PURE__ */ jsx(Link, { to: "/products", className: "hover:text-primary transition-colors shrink-0 min-h-[44px] flex items-center", children: "Products" }),
        /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4 shrink-0" }),
        /* @__PURE__ */ jsx(Link, { to: "/products", className: "hover:text-primary transition-colors shrink-0 min-h-[44px] flex items-center", children: categoryLabels[product.category] }),
        /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4 shrink-0" }),
        /* @__PURE__ */ jsx("span", { className: "text-foreground font-medium truncate max-w-[150px] sm:max-w-none", children: product.shortName })
      ] }) }) }),
      /* @__PURE__ */ jsx("section", { className: "py-12 lg:py-16", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-10 lg:grid-cols-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx(
            OptimizedImage,
            {
              src: selectedImage,
              alt: ((_e = product.images) == null ? void 0 : _e.mainAlt) || `${product.name} wholesale supplier Indonesia - ${product.isOrganic ? "USDA & EU organic certified " : ""}${categoryLabels[product.category].toLowerCase()} for bulk export`,
              aspectRatio: "square",
              width: 600,
              height: 600,
              placeholderSrc: (_f = product.images) == null ? void 0 : _f.thumbnail,
              priority: true,
              className: "rounded-2xl",
              fallbackIcon: /* @__PURE__ */ jsx(Package, { className: "h-32 w-32 text-muted-foreground/30" })
            }
          ),
          product.isOrganic && /* @__PURE__ */ jsxs(Badge, { className: "absolute top-4 left-4 bg-primary text-primary-foreground z-10", children: [
            /* @__PURE__ */ jsx(Leaf, { className: "h-3 w-3 mr-1" }),
            "Organic Certified"
          ] }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-4 gap-3 mt-4", children: allImages.map((img, index) => /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => setSelectedImage(img),
              className: cn(
                "rounded-lg overflow-hidden transition-all",
                selectedImage === img ? "ring-2 ring-primary ring-offset-2 ring-offset-background" : "ring-1 ring-border opacity-70 hover:opacity-100"
              ),
              "aria-label": allAlts[index] || `${product.name} view ${index + 1}`,
              children: /* @__PURE__ */ jsx(
                OptimizedImage,
                {
                  src: img,
                  alt: allAlts[index] || `${product.name} view ${index + 1}`,
                  aspectRatio: "square",
                  width: 80,
                  height: 80,
                  fallbackIcon: /* @__PURE__ */ jsx(Package, { className: "h-6 w-6 text-muted-foreground/30" })
                }
              )
            },
            index
          )) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-center", children: [
          /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "w-fit mb-3", children: categoryLabels[product.category] }),
          /* @__PURE__ */ jsxs("h1", { className: "text-3xl lg:text-4xl font-bold text-foreground mb-2", children: [
            "Wholesale ",
            product.name
          ] }),
          product.tagline && /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground mb-2", children: product.tagline }),
          product.description && /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-3", children: product.description }),
          /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
            /* @__PURE__ */ jsx("p", { className: "text-2xl lg:text-3xl font-bold text-primary", children: product.pricing.fobBase }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Volume discounts for container loads" })
          ] }),
          /* @__PURE__ */ jsx(ProductQuickHighlights, { product }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-3", children: [
            /* @__PURE__ */ jsxs(PrimaryButton, { to: "/contact", size: "lg", children: [
              /* @__PURE__ */ jsx(FileText, { className: "h-5 w-5 mr-2" }),
              "Request Bulk Quote"
            ] }),
            /* @__PURE__ */ jsxs(SecondaryButton, { to: "/samples", size: "lg", children: [
              /* @__PURE__ */ jsx(Package, { className: "h-5 w-5 mr-2" }),
              "Get Free Samples"
            ] })
          ] })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsx(ProductDescriptionPackaging, { product }),
      /* @__PURE__ */ jsx(ProductSpecsTable, { product }),
      /* @__PURE__ */ jsx(ProductLogistics, { product }),
      /* @__PURE__ */ jsx(ProductSeasonality, { availability: product.availability, harvestMonths: product.harvestMonths, productName: product.name }),
      /* @__PURE__ */ jsx(ProductFAQ, { faqs: product.faqs, productName: product.name }),
      /* @__PURE__ */ jsx(RelatedProducts, { products: relatedProducts }),
      /* @__PURE__ */ jsx("section", { className: "py-16", children: /* @__PURE__ */ jsxs("div", { className: "container text-center", children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-2xl lg:text-3xl font-bold text-foreground mb-3", children: [
          "Ready to Order Bulk ",
          product.name,
          "?"
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-6 max-w-xl mx-auto", children: "Get in touch with our export team for pricing, samples, and custom requirements." }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap justify-center gap-3", children: [
          /* @__PURE__ */ jsx(PrimaryButton, { to: "/contact", size: "lg", children: "Request Quote" }),
          /* @__PURE__ */ jsx(
            WhatsAppButton,
            {
              variant: "full",
              size: "lg",
              message: `Hi! I want to order bulk ${product.name}. Please share pricing and availability.`
            }
          )
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(StickyInquiryBar, { product })
    ] })
  ] });
}
export {
  ProductPageTemplate
};
