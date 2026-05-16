import { jsxs, jsx } from "react/jsx-runtime";
import { memo, useMemo, useCallback } from "react";
import { u as useProducts } from "../main.mjs";
import "clsx";
import { P as PrimaryButton, S as SecondaryLightButton, c as companyInfo, g as getProductsByCategory, a as certifications, b as SecondaryButton, t as targetSegments, e as exportCountries, W as WhatsAppButton, L as Layout, d as generateWebSiteSchema } from "./Layout-C1jIX7PL.js";
import { S as SEO, s as socialImages } from "./SEO-CnBucqL5.js";
import { Package, Leaf, ArrowRight, Factory, Award, Users, Globe, Truck, CheckCircle, Sun, Zap } from "lucide-react";
import { O as OptimizedImage } from "./optimized-image--pNYP21E.js";
import { Link } from "react-router-dom";
import "./FormElements-14gfErHn.js";
import { C as CatalogForm } from "./CatalogForm-VCm8DgWs.js";
import { B as Badge } from "./badge-DObGNgcP.js";
import { T as Table, a as TableBody, b as TableRow, c as TableCell } from "./table-BSS22iTl.js";
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
import "./label-DPO1kvhT.js";
import "@radix-ui/react-label";
import "@radix-ui/react-checkbox";
const fruits$1 = [
  "Dragon Fruit",
  "Papaya",
  "Mango",
  "Pineapple",
  "Guava",
  "Jackfruit",
  "Longan",
  "Coconut",
  "Banana",
  "Breadfruit"
];
const HeroSection = memo(function HeroSection2() {
  return /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden min-h-[600px] lg:min-h-[700px]", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0", children: [
      /* @__PURE__ */ jsx("div", { className: "w-full h-full bg-muted", role: "img", "aria-label": "Dehydrated tropical fruits factory facility in Indonesia" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-tropical-green-dark/90 via-primary/80 to-tropical-green-light/70" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "container relative py-20 lg:py-32", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-4xl text-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-4 flex flex-wrap justify-center gap-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-2 text-sm text-on-primary backdrop-blur-sm", children: [
          /* @__PURE__ */ jsx(Package, { className: "h-4 w-4", "aria-hidden": "true" }),
          "Minimum order from 1 pallet (800 kg)"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-2 text-sm text-on-primary backdrop-blur-sm", children: [
          /* @__PURE__ */ jsx(Leaf, { className: "h-4 w-4", "aria-hidden": "true" }),
          "Organic & Fair Trade, HACCP Certified"
        ] })
      ] }),
      /* @__PURE__ */ jsx("h1", { className: "mb-6 text-3xl font-bold tracking-tight text-on-primary sm:text-5xl lg:text-6xl drop-shadow-lg", children: "Dehydrated Dried Tropical Fruits OEM Manufacturer from Indonesia" }),
      /* @__PURE__ */ jsx("h2", { className: "mb-6 text-lg font-normal text-on-primary-muted sm:text-xl drop-shadow-md", children: "Fully export licensed Manufacturer of organic and non organic dried dehydrated fruits in chunks, slices, cuts, packed with your brand. Delivered directly from the factory in Indonesia." }),
      /* @__PURE__ */ jsx("div", { className: "mb-8 flex flex-wrap justify-center gap-2", children: fruits$1.map((fruit) => /* @__PURE__ */ jsx("span", { className: "rounded-full bg-primary-foreground/15 px-3 py-1 text-sm text-on-primary backdrop-blur-sm", children: fruit }, fruit)) }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap justify-center gap-4", children: [
        /* @__PURE__ */ jsxs(PrimaryButton, { to: "/samples", size: "xl", variant: "gold", children: [
          "Request Free Samples",
          /* @__PURE__ */ jsx(ArrowRight, { className: "h-5 w-5", "aria-hidden": "true" })
        ] }),
        /* @__PURE__ */ jsx(SecondaryLightButton, { to: "/catalog", size: "lg", children: "Get Price List" })
      ] })
    ] }) })
  ] });
});
const features = [
  {
    icon: Factory,
    title: "Direct From Source",
    description: "We own our processing facility and work directly with Indonesian farmers. No middlemen, better quality, competitive pricing."
  },
  {
    icon: Award,
    title: "Certified Quality",
    description: "USDA Organic, EU Organic, and HACCP certified. Complete documentation for seamless import into any country."
  },
  {
    icon: Package,
    title: "Flexible MOQ",
    description: "Starting from 500kg for most products. Trial orders available for new customers. Private label options included."
  }
];
memo(function WhyChooseUs2() {
  return /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-3xl text-center mb-16", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-foreground sm:text-4xl", children: "Why Choose DFT Indonesia?" }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 text-lg text-muted-foreground", children: "Indonesia's only export-oriented dried fruit manufacturer with direct farmer partnerships" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid gap-8 md:grid-cols-3", children: features.map((feature) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: "group rounded-2xl bg-card p-8 shadow-soft hover:shadow-glow transition-all duration-300",
        children: [
          /* @__PURE__ */ jsx("div", { className: "mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors", children: /* @__PURE__ */ jsx(feature.icon, { className: "h-7 w-7", "aria-hidden": "true" }) }),
          /* @__PURE__ */ jsx("h3", { className: "mb-3 text-xl font-semibold text-foreground", children: feature.title }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: feature.description })
        ]
      },
      feature.title
    )) })
  ] }) });
});
const fruits = [
  "Dragon Fruit",
  "Papaya",
  "Mango",
  "Pineapple",
  "Guava",
  "Jackfruit",
  "Longan",
  "Coconut",
  "Banana",
  "Breadfruit"
];
const ManufacturingSection = memo(function ManufacturingSection2() {
  return /* @__PURE__ */ jsx("section", { className: "py-20 bg-muted/30", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-12 md:grid-cols-2 items-center", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-foreground sm:text-4xl mb-4", children: "About Our Factory" }),
      /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-foreground mb-4", children: "Family Owned Factory" }),
      /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground mb-6 leading-relaxed", children: [
        "We are a family-owned (second generation) factory with legal name",
        " ",
        /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: companyInfo.legalInfo.legalName }),
        " ",
        "(",
        companyInfo.legalInfo.npwp.label,
        ": ",
        companyInfo.legalInfo.npwp.value,
        ",",
        " ",
        companyInfo.legalInfo.nib.label,
        ": ",
        companyInfo.legalInfo.nib.value,
        "), located in",
        " ",
        companyInfo.address.city,
        ", ",
        companyInfo.address.province,
        ", ",
        companyInfo.address.country,
        ". We manufacture dehydrated (professional oven dried) fruits such as:"
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mb-6 flex flex-wrap gap-2", children: fruits.map((fruit) => /* @__PURE__ */ jsx(
        "span",
        {
          className: "rounded-full bg-primary/10 text-primary px-3 py-1 text-sm font-medium",
          children: fruit
        },
        fruit
      )) }),
      /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground mb-4 leading-relaxed", children: [
        "We are fully export certified with ",
        /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "USDA Organic" }),
        ",",
        " ",
        /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "EU Organic" }),
        ",",
        " ",
        /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "Fair Trade" }),
        ",",
        " ",
        /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "HACCP" }),
        ",",
        " ",
        /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "Halal" }),
        " &",
        " ",
        /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "Kosher" }),
        " certified."
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground leading-relaxed", children: [
        "Today, we export to ",
        companyInfo.stats.exportCountries,
        " countries across North America, Europe, Asia Pacific, and the Middle East, serving food manufacturers, retailers, and trading companies worldwide."
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "rounded-2xl overflow-hidden bg-muted aspect-[4/3]", children: /* @__PURE__ */ jsx(
      OptimizedImage,
      {
        src: "/lovable-uploads/00a1d19f-1a9d-4595-b63c-fbeb17f9e57d.jpg",
        alt: "PT Dried Fruits Total Indonesia factory facility in Magelang, Central Java",
        width: 600,
        height: 450,
        aspectRatio: "auto",
        className: "w-full h-full"
      }
    ) })
  ] }) }) });
});
const galleryPhotos = [
  { src: "/placeholder.svg", alt: "Cold storage facility for fresh tropical fruits at Indonesian dried fruit factory – unit 1", label: "Cold Storage – Unit 1", width: 400, height: 300 },
  { src: "/placeholder.svg", alt: "Fruit cleaning and peeling production line at dehydrated fruit manufacturing plant – station 1", label: "Cleaning & Peeling – Station 1", width: 400, height: 300 },
  { src: "/placeholder.svg", alt: "Fruit cleaning and peeling production line at dehydrated fruit manufacturing plant – station 2", label: "Cleaning & Peeling – Station 2", width: 400, height: 300 },
  { src: "/placeholder.svg", alt: "Industrial fruit blanching process at Indonesian dried fruit factory – line 1", label: "Blanching – Line 1", width: 400, height: 300 },
  { src: "/placeholder.svg", alt: "Professional dehydration ovens for drying tropical fruits at export facility – oven 1", label: "Dehydration Ovens – Oven 1", width: 400, height: 300 },
  { src: "/placeholder.svg", alt: "Professional dehydration ovens for drying tropical fruits at export facility – oven 2", label: "Dehydration Ovens – Oven 2", width: 400, height: 300 },
  { src: "/placeholder.svg", alt: "Bulk packaging area for wholesale dried fruit orders at Indonesian factory – line 1", label: "Packaging – Line 1", width: 400, height: 300 },
  { src: "/placeholder.svg", alt: "Bulk packaging area for wholesale dried fruit orders at Indonesian factory – line 2", label: "Packaging – Line 2", width: 400, height: 300 },
  { src: "/placeholder.svg", alt: "Export sales office at PT Dried Fruits Total Indonesia factory", label: "Export Sales Office", width: 400, height: 300 },
  { src: "/placeholder.svg", alt: "Palletized dried fruit shipments ready for export delivery – batch 1", label: "Palletized Shipments – Batch 1", width: 400, height: 300 },
  { src: "/placeholder.svg", alt: "Palletized dried fruit shipments ready for export delivery – batch 2", label: "Palletized Shipments – Batch 2", width: 400, height: 300 },
  { src: "/placeholder.svg", alt: "Container stuffing and loading of dried fruit export orders – container 1", label: "Container Loading – Container 1", width: 400, height: 300 }
];
const FactoryGallerySection = memo(function FactoryGallerySection2() {
  return /* @__PURE__ */ jsx("section", { className: "py-20 bg-background", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-foreground sm:text-4xl mb-12 text-center", children: "Factory Photos" }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4", children: galleryPhotos.map((photo, idx) => /* @__PURE__ */ jsxs("div", { className: "rounded-xl overflow-hidden border border-border flex flex-col", children: [
      /* @__PURE__ */ jsx("div", { className: "bg-secondary", children: /* @__PURE__ */ jsx(
        OptimizedImage,
        {
          src: photo.src,
          alt: photo.alt,
          width: photo.width,
          height: photo.height,
          aspectRatio: "video",
          className: "w-full h-full"
        }
      ) }),
      /* @__PURE__ */ jsx("p", { className: "p-2 text-center text-xs font-medium text-foreground bg-muted", children: photo.label })
    ] }, idx)) })
  ] }) });
});
const farmerPhotos = [
  { src: "/placeholder.svg", alt: "Local farmer family supplying fresh tropical fruits to Indonesian dried fruit factory – family 1", label: "Farmer Family 1", width: 400, height: 300 },
  { src: "/placeholder.svg", alt: "Local farmer family supplying fresh tropical fruits to Indonesian dried fruit factory – family 2", label: "Farmer Family 2", width: 400, height: 300 },
  { src: "/placeholder.svg", alt: "Dragon fruit plantation supplying fresh fruits for dehydration in Indonesia", label: "Dragon Fruit Plantation", width: 400, height: 300 },
  { src: "/placeholder.svg", alt: "Papaya plantation supplying fresh fruits for dehydration in Indonesia", label: "Papaya Plantation", width: 400, height: 300 },
  { src: "/placeholder.svg", alt: "Mango plantation supplying fresh fruits for dehydration in Indonesia", label: "Mango Plantation", width: 400, height: 300 },
  { src: "/placeholder.svg", alt: "Local farmer family harvesting fresh pineapples for dried fruit production – family 3", label: "Farmer Family 3", width: 400, height: 300 },
  { src: "/placeholder.svg", alt: "Coconut plantation supplying fresh coconuts for dehydrated coconut chips in Indonesia", label: "Coconut Plantation", width: 400, height: 300 },
  { src: "/placeholder.svg", alt: "Banana plantation supplying fresh bananas for dried banana production in Indonesia", label: "Banana Plantation", width: 400, height: 300 }
];
const FarmersSection = memo(function FarmersSection2() {
  return /* @__PURE__ */ jsx("section", { className: "py-20 bg-background", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-foreground sm:text-4xl mb-12 text-center", children: "Our Farmers and Fresh Fruits Suppliers" }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4", children: farmerPhotos.map((photo, idx) => /* @__PURE__ */ jsxs("div", { className: "rounded-xl overflow-hidden border border-border flex flex-col", children: [
      /* @__PURE__ */ jsx("div", { className: "bg-secondary", children: /* @__PURE__ */ jsx(
        OptimizedImage,
        {
          src: photo.src,
          alt: photo.alt,
          width: photo.width,
          height: photo.height,
          aspectRatio: "video",
          className: "w-full h-full"
        }
      ) }),
      /* @__PURE__ */ jsx("p", { className: "p-2 text-center text-xs font-medium text-foreground bg-muted", children: photo.label })
    ] }, idx)) })
  ] }) });
});
const ProductCategoriesSection = memo(function ProductCategoriesSection2() {
  const { products } = useProducts();
  const driedFruits = useMemo(() => getProductsByCategory(products, "dried-fruits"), [products]);
  return /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-3xl text-center mb-16", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-foreground sm:text-4xl", children: "Our Product Range" }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 text-lg text-muted-foreground", children: "Premium tropical dried fruits — organically grown and exported from Indonesia" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-5", children: driedFruits.map((product) => {
      var _a, _b;
      return /* @__PURE__ */ jsxs(
        Link,
        {
          to: `/products/dried-fruits/${product.id}`,
          className: "group rounded-xl bg-card overflow-hidden shadow-soft hover:shadow-glow transition-all",
          children: [
            /* @__PURE__ */ jsx(
              OptimizedImage,
              {
                src: ((_a = product.images) == null ? void 0 : _a.main) || "/placeholder.svg",
                alt: `${product.name} - bulk wholesale dried fruit from Indonesia`,
                width: 400,
                height: 400,
                aspectRatio: "square",
                placeholderSrc: (_b = product.images) == null ? void 0 : _b.thumbnail
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "p-4", children: /* @__PURE__ */ jsx("h3", { className: "font-semibold text-foreground group-hover:text-primary transition-colors", children: product.shortName }) })
          ]
        },
        product.id
      );
    }) }),
    /* @__PURE__ */ jsx("div", { className: "mt-12 text-center", children: /* @__PURE__ */ jsxs(PrimaryButton, { to: "/products", size: "lg", children: [
      "View All Products",
      /* @__PURE__ */ jsx(ArrowRight, { className: "h-5 w-5" })
    ] }) })
  ] }) });
});
const CertificationsSection = memo(function CertificationsSection2() {
  return /* @__PURE__ */ jsx("section", { className: "py-20 bg-muted/30", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-3xl text-center mb-16", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-foreground sm:text-4xl", children: "Certified Quality Assurance" }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 text-lg text-muted-foreground", children: "Meeting international standards for food safety and organic production" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-4", children: certifications.map((cert) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: "flex flex-col items-center rounded-xl bg-card p-6 text-center shadow-soft",
        children: [
          /* @__PURE__ */ jsx("div", { className: "mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10", "aria-label": cert.name, role: "img", children: /* @__PURE__ */ jsx(Leaf, { className: "h-8 w-8 text-primary", "aria-hidden": "true" }) }),
          /* @__PURE__ */ jsx("h3", { className: "font-semibold text-foreground", children: cert.name }),
          /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: cert.description })
        ]
      },
      cert.id
    )) }),
    /* @__PURE__ */ jsx("div", { className: "mt-12 grid gap-6 grid-cols-2 lg:grid-cols-4", children: certifications.map((cert) => /* @__PURE__ */ jsxs("div", { className: "rounded-xl bg-card shadow-soft overflow-hidden", children: [
      /* @__PURE__ */ jsx(
        OptimizedImage,
        {
          src: "/placeholder.svg",
          alt: `${cert.name} certificate – PT Dried Fruits Total Indonesia`,
          aspectRatio: "auto",
          className: "aspect-[210/297]",
          width: 210,
          height: 297
        }
      ),
      /* @__PURE__ */ jsxs("p", { className: "p-3 text-center text-sm font-medium text-foreground", children: [
        cert.name,
        " Certificate"
      ] })
    ] }, `cert-img-${cert.id}`)) }),
    /* @__PURE__ */ jsx("div", { className: "mt-12 text-center", children: /* @__PURE__ */ jsx(SecondaryButton, { to: "/certifications", size: "lg", children: "View Certifications" }) })
  ] }) });
});
const TargetSegmentsSection = memo(function TargetSegmentsSection2() {
  return /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-3xl text-center mb-16", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-foreground sm:text-4xl", children: "Who We Serve" }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 text-lg text-muted-foreground", children: "B2B partners across the food industry supply chain" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-4", children: targetSegments.map((segment) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: "rounded-xl bg-card p-6 shadow-soft hover:shadow-glow transition-all duration-300",
        children: [
          /* @__PURE__ */ jsx(Users, { className: "h-10 w-10 text-primary mb-4" }),
          /* @__PURE__ */ jsx("h3", { className: "font-semibold text-foreground mb-2", children: segment.name }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: segment.description })
        ]
      },
      segment.name
    )) })
  ] }) });
});
const ExportMapSection = memo(function ExportMapSection2() {
  return /* @__PURE__ */ jsx("section", { className: "py-20 bg-muted/30", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-12 lg:grid-cols-2 lg:items-center", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs("h2", { className: "text-3xl font-bold text-foreground sm:text-4xl mb-6", children: [
        "Exporting to ",
        companyInfo.stats.exportCountries,
        " Countries"
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground mb-8", children: "From our facility in Central Java, we ship to buyers across North America, Europe, Asia Pacific, and the Middle East." }),
      /* @__PURE__ */ jsx("div", { className: "space-y-4", children: exportCountries.map((region) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
        /* @__PURE__ */ jsx(Globe, { className: "h-5 w-5 text-primary mt-0.5" }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("p", { className: "font-medium text-foreground", children: region.region }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: region.countries.join(", ") })
        ] })
      ] }, region.region)) }),
      /* @__PURE__ */ jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxs(SecondaryButton, { to: "/shipping", size: "lg", children: [
        /* @__PURE__ */ jsx(Truck, { className: "h-5 w-5 mr-2" }),
        "Shipping & Export Info"
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxs("div", { className: "rounded-2xl overflow-hidden shadow-lg", children: [
        /* @__PURE__ */ jsx(OptimizedImage, { src: "/placeholder.svg", alt: "Shipping containers with dried fruit exports from Indonesia", width: 800, height: 400, aspectRatio: "auto", className: "h-[400px]" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "absolute bottom-6 left-6 right-6 flex justify-between", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-card/95 backdrop-blur-sm rounded-xl p-4 shadow-lg", children: [
          /* @__PURE__ */ jsx("p", { className: "text-2xl font-bold text-primary", children: companyInfo.stats.exportCountries }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Countries" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-card/95 backdrop-blur-sm rounded-xl p-4 shadow-lg", children: [
          /* @__PURE__ */ jsx("p", { className: "text-2xl font-bold text-primary", children: "40ft" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Container Ready" })
        ] })
      ] })
    ] })
  ] }) }) });
});
const catalogBenefits = [
  "Complete product specifications",
  "FOB pricing guidelines",
  "Packaging options & MOQs",
  "Certification details"
];
const CatalogDownloadSection = memo(function CatalogDownloadSection2() {
  return /* @__PURE__ */ jsx("section", { className: "py-20 bg-gradient-to-br from-primary to-tropical-green-light", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-5xl", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold sm:text-4xl mb-4 text-on-primary", children: "Download Our Product Catalog" }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-on-primary-muted max-w-2xl mx-auto", children: "Get our complete product catalog with specifications, pricing guidance, and packaging options. Perfect for your procurement team." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid gap-8 lg:grid-cols-2 lg:items-start", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsx("ul", { className: "space-y-4 text-on-primary", children: catalogBenefits.map((item) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-3 text-lg", children: [
          /* @__PURE__ */ jsx(CheckCircle, { className: "h-6 w-6 shrink-0" }),
          item
        ] }, item)) }),
        /* @__PURE__ */ jsxs("div", { className: "inline-block bg-accent text-accent-foreground rounded-xl p-4 shadow-lg", children: [
          /* @__PURE__ */ jsx("p", { className: "text-lg font-bold", children: "50+ Products" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm", children: "In Our Catalog" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "bg-card rounded-2xl p-8 shadow-lg", children: /* @__PURE__ */ jsx(CatalogForm, {}) })
    ] })
  ] }) }) });
});
const FinalCTASection = memo(function FinalCTASection2() {
  return /* @__PURE__ */ jsxs("section", { className: "relative py-24 overflow-hidden", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0", children: [
      /* @__PURE__ */ jsx("div", { className: "w-full h-full bg-muted" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/95" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "container relative text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-foreground sm:text-4xl mb-4", children: "Ready to Partner With Us?" }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground mb-8 max-w-2xl mx-auto", children: "Whether you need samples, quotes, or have questions - our export team is ready to help." }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap justify-center gap-4", children: [
        /* @__PURE__ */ jsx(PrimaryButton, { to: "/contact", size: "xl", children: "Request a Quote" }),
        /* @__PURE__ */ jsx(SecondaryButton, { to: "/samples", size: "lg", children: "Request Samples" }),
        /* @__PURE__ */ jsx(WhatsAppButton, { variant: "full", size: "lg" })
      ] })
    ] })
  ] });
});
const detailedBlocks = [
  {
    title: "Raw Material Intake & Sorting",
    imageSrc: "/lovable-uploads/891e186e-2a8c-4288-8a33-4d9138f48847.jpg",
    copy: "Fresh tropical fruits arrive in bulk crates from our partner farms across Indonesia. Each batch passes through a multi-point QA checkpoint where trained staff remove foreign matter and grade fruit by size, ripeness, and variety using industrial conveyor systems. Only fruit meeting our export-grade specifications proceeds to processing.",
    imageAlt: "Workers sorting fresh tropical fruit on industrial conveyor belt",
    imageCaption: "Fruit grading and sorting line",
    direction: "left"
  },
  {
    title: "Cleaning & Industrial Blanching",
    imageSrc: "/placeholder.svg",
    copy: "Industrial-grade fruit washers thoroughly clean produce using filtered water jets at high pressure. Cleaned fruit then enters our continuous blanching system operating at 85–95 °C for 2–5 minutes — inactivating enzymes responsible for browning, retaining natural color, and ensuring food safety compliance.",
    imageAlt: "Industrial blanching equipment processing tropical fruits",
    imageCaption: "Continuous blanching line",
    direction: "right"
  },
  {
    title: "Drying Process",
    imageSrc: "/placeholder.svg",
    copy: "Our facility runs 4 electric ovens powered by grid electricity supplemented by on-site solar panels, plus 3 industrial biomass-powered ovens. Temperature and humidity are precisely controlled per fruit type. Separate production lines allow simultaneous processing. Combined capacity: 3 tons of dried fruit per day with 12–18 hour turn-around per batch.",
    imageAlt: "Industrial electric drying ovens with solar panels in background",
    imageCaption: "Electric drying ovens — solar-assisted",
    direction: "left"
  },
  {
    title: "Quality Control & Packaging",
    imageSrc: "/placeholder.svg",
    copy: "Dried fruit undergoes final moisture testing to verify shelf-stability targets. Metal detection scanners ensure product purity. Automated weighing systems guarantee accurate fill weights. Product is hygienically packed in food-grade export packaging with full traceability labeling for international shipping.",
    imageAlt: "Quality control station with moisture testing and metal detection equipment",
    imageCaption: "QC and export packaging station",
    direction: "right"
  }
];
const technicalSpecs = [
  { key: "Electric Ovens", value: "4 units (industry-grade)" },
  { key: "Biomass Ovens", value: "3 units (industrial)" },
  { key: "Total Drying Capacity", value: "3 tons/day" },
  { key: "Blanching Equipment", value: "Industrial continuous blancher — stainless steel, steam-heated" },
  { key: "Washing", value: "Industrial fruit washers (high-pressure)" },
  { key: "Power Source", value: "Grid electricity + on-site solar panels (30% solar)" },
  { key: "Typical Batch Throughput", value: "500 kg fresh fruit per batch (12–18 hr cycle)" }
];
const processImages = [
  { src: "/lovable-uploads/8efed6de-7456-49c3-ad42-494d044a50bc.jpg", alt: "Panoramic view of drying ovens with solar panels in background", caption: "Our solar-assisted drying facility" },
  { src: "/placeholder.svg", alt: "Interior of electric drying oven showing loaded fruit racks", caption: "Electric oven interior with fruit racks" },
  { src: "/placeholder.svg", alt: "Close-up of industrial blanching equipment in operation", caption: "Continuous blanching system" },
  { src: "/placeholder.svg", alt: "Industrial fruit washing and cleaning line with water jets", caption: "High-pressure fruit washing line" },
  { src: "/placeholder.svg", alt: "Workers loading trays of sliced fruit into drying ovens", caption: "Loading trays into drying ovens" },
  { src: "/placeholder.svg", alt: "Horizontal process flow diagram showing fruit dehydration stages", caption: "Production process overview" }
];
const statCards = [
  { value: "4", label: "Electric Ovens", sublabel: "Solar-assisted" },
  { value: "3", label: "Biomass Ovens", sublabel: "Industrial-grade" },
  { value: "3", label: "Tons/Day", sublabel: "Drying capacity" }
];
const sustainabilityBadges = [
  "Solar-Powered",
  "Renewable Energy",
  "3 Tons/Day Capacity",
  "Export-Ready"
];
const ProductionProcessSection = memo(function ProductionProcessSection2() {
  var _a, _b;
  useCallback((eventName) => {
    console.log(`[Analytics] ${eventName}`);
  }, []);
  return /* @__PURE__ */ jsx("section", { id: "production-process", className: "py-20 bg-background", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid gap-8 lg:grid-cols-2 lg:items-center mb-16", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(
          OptimizedImage,
          {
            src: (_a = processImages[0]) == null ? void 0 : _a.src,
            alt: (_b = processImages[0]) == null ? void 0 : _b.alt,
            aspectRatio: "video",
            className: "rounded-xl"
          }
        ),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mt-2 text-center", children: processImages[0].caption })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-foreground sm:text-4xl font-heading", children: "How We Dehydrate Tropical Fruit for Export" }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground leading-relaxed", children: "Industry-grade dehydration from raw fruit to export-ready product. Solar-powered electric ovens plus biomass backup deliver 3 tons of dried fruit per day — with certified cleaning and blanching at every stage." }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-3 gap-3", children: statCards.map(
          (stat) => /* @__PURE__ */ jsxs(
            "div",
            {
              className: "bg-card rounded-xl p-4 shadow-soft text-center",
              children: [
                /* @__PURE__ */ jsx("span", { className: "block text-2xl font-bold text-primary", children: stat.value }),
                /* @__PURE__ */ jsx("span", { className: "block text-sm font-medium text-foreground", children: stat.label }),
                /* @__PURE__ */ jsx("span", { className: "block text-xs text-muted-foreground", children: stat.sublabel })
              ]
            },
            stat.label
          )
        ) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "space-y-16 mb-20", children: detailedBlocks.map(
      (block, i) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: `grid gap-8 lg:grid-cols-2 lg:items-center ${block.direction === "right" ? "lg:[&>*:first-child]:order-2" : ""}`,
          children: [
            /* @__PURE__ */ jsx(
              OptimizedImage,
              {
                src: block.imageSrc ?? "/placeholder.svg",
                alt: block.imageAlt,
                aspectRatio: "video",
                className: "rounded-xl"
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxs("span", { className: "text-sm font-semibold text-primary", children: [
                "Step ",
                i + 1,
                " of ",
                detailedBlocks.length
              ] }),
              /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-foreground", children: block.title }),
              /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: block.copy }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground italic", children: block.imageCaption })
            ] })
          ]
        },
        block.title
      )
    ) }),
    /* @__PURE__ */ jsxs("div", { className: "bg-card rounded-2xl shadow-soft p-6 sm:p-8 mb-12 max-w-2xl mx-auto", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-foreground mb-4", children: "Technical Specifications" }),
      /* @__PURE__ */ jsx(Table, { children: /* @__PURE__ */ jsx(TableBody, { children: technicalSpecs.map(
        (spec) => /* @__PURE__ */ jsxs(TableRow, { children: [
          /* @__PURE__ */ jsx(TableCell, { className: "font-medium text-foreground", children: spec.key }),
          /* @__PURE__ */ jsx(TableCell, { className: "text-muted-foreground", children: spec.value })
        ] }, spec.key)
      ) }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-wrap justify-center gap-3 mb-16", children: sustainabilityBadges.map(
      (badge) => /* @__PURE__ */ jsxs(Badge, { className: "bg-tropical-green/10 text-tropical-green border-tropical-green/20 px-4 py-1.5 text-sm", children: [
        badge === "Solar-Powered" && /* @__PURE__ */ jsx(Sun, { className: "w-4 h-4 mr-1.5" }),
        badge === "Renewable Energy" && /* @__PURE__ */ jsx(Leaf, { className: "w-4 h-4 mr-1.5" }),
        badge === "3 Tons/Day Capacity" && /* @__PURE__ */ jsx(Zap, { className: "w-4 h-4 mr-1.5" }),
        badge === "Export-Ready" && /* @__PURE__ */ jsx(Package, { className: "w-4 h-4 mr-1.5" }),
        badge
      ] }, badge)
    ) })
  ] }) });
});
function HomePage() {
  return /* @__PURE__ */ jsxs(Layout, { children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: "Dried Tropical Fruit OEM Manufacturer",
        description: "Indonesia OEM manufacturer of dehydrated tropical dried fruits. Private label, MOQ 800kg, HACCP & Fair Trade certified. Export to 18+ countries.",
        keywords: ["OEM dried fruit manufacturer", "dehydrated tropical fruits Indonesia", "private label dried fruit manufacturer", "wholesale dried fruit Indonesia", "B2B dried fruit supplier", "Indonesian fruit exporter"],
        canonical: "/",
        ogImage: socialImages.home
      }
    ),
    /* @__PURE__ */ jsx(
      "script",
      {
        type: "application/ld+json",
        dangerouslySetInnerHTML: {
          __html: JSON.stringify(generateWebSiteSchema())
        }
      }
    ),
    /* @__PURE__ */ jsx(HeroSection, {}),
    /* @__PURE__ */ jsx(ManufacturingSection, {}),
    /* @__PURE__ */ jsx(FactoryGallerySection, {}),
    /* @__PURE__ */ jsx(FarmersSection, {}),
    /* @__PURE__ */ jsx(ProductCategoriesSection, {}),
    /* @__PURE__ */ jsx(CertificationsSection, {}),
    /* @__PURE__ */ jsx(TargetSegmentsSection, {}),
    /* @__PURE__ */ jsx(ProductionProcessSection, {}),
    /* @__PURE__ */ jsx(ExportMapSection, {}),
    /* @__PURE__ */ jsx(CatalogDownloadSection, {}),
    /* @__PURE__ */ jsx(FinalCTASection, {})
  ] });
}
export {
  HomePage as default
};
