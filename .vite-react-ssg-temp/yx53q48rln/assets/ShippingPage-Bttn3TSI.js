import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState, useMemo } from "react";
import { c as companyInfo, L as Layout, f as generateBreadcrumbSchema, e as exportCountries, P as PrimaryButton, S as SecondaryLightButton, i as SITE_URL } from "./Layout-C1jIX7PL.js";
import { Calculator, Ship, Clock, Package, CreditCard, Globe, FileText, Truck, CheckCircle } from "lucide-react";
import { u as useProducts } from "../main.mjs";
import "clsx";
import { S as SEO, s as socialImages } from "./SEO-DyJUFjbz.js";
import "./badge-DObGNgcP.js";
import "./table-BSS22iTl.js";
import "./accordion-Blg67-Ce.js";
import "./CategoryCard-CcsUvgyi.js";
import "react-router-dom";
import "vite-react-ssg";
import "react-helmet-async";
import "@radix-ui/react-toast";
import "class-variance-authority";
import "tailwind-merge";
import "next-themes";
import "sonner";
import "@radix-ui/react-tooltip";
import "@radix-ui/react-slot";
import "@supabase/supabase-js";
import "@radix-ui/react-accordion";
import "embla-carousel-react";
import "@radix-ui/react-select";
import "./optimized-image--pNYP21E.js";
const shippingProcess = [
  {
    step: "1",
    title: "Order Confirmation",
    description: "Receive proforma invoice, confirm order details and specifications"
  },
  {
    step: "2",
    title: "Deposit Payment",
    description: "50% deposit via T/T or L/C opening"
  },
  {
    step: "3",
    title: "Production",
    description: "2-3 weeks production and quality control"
  },
  {
    step: "4",
    title: "Balance Payment",
    description: "50% balance before shipment"
  },
  {
    step: "5",
    title: "Shipment",
    description: "Container loading and shipping with full documentation"
  },
  {
    step: "6",
    title: "Delivery",
    description: "Arrival at destination port with customs-ready documents"
  }
];
const exportDocs = [
  "Commercial Invoice",
  "Packing List",
  "Bill of Lading",
  "Certificate of Origin",
  "Phytosanitary Certificate",
  "Health Certificate",
  "Certificate of Analysis",
  "Organic Certificate",
  "Fumigation Certificate (if required)",
  "Insurance Certificate (if required)"
];
const bagSizeOptions = [
  { value: "10", label: "10 kg bag" },
  { value: "12.5", label: "12.5 kg bag" },
  { value: "15", label: "15 kg bag" },
  { value: "20", label: "20 kg bag" },
  { value: "25", label: "25 kg bag" }
];
const categoryLabels = {
  "dried-fruits": "Dried Fruits"
};
function parseContainerLoad(loadStr) {
  const match = loadStr.match(/([\d.]+)\s*-\s*([\d.]+)\s*(MT|mt|T|t)?/);
  if (match) {
    return {
      min: parseFloat(match[1]) * 1e3,
      max: parseFloat(match[2]) * 1e3
    };
  }
  const singleMatch = loadStr.match(/~?([\d.]+)\s*(MT|mt|T|t)?/);
  if (singleMatch) {
    const val = parseFloat(singleMatch[1]) * 1e3;
    return { min: val * 0.9, max: val * 1.1 };
  }
  return { min: 15e3, max: 18e3 };
}
function ContainerCalculator({ defaultProductId, compact = false, headingLevel = "h2" }) {
  var _a;
  const { products } = useProducts();
  const [selectedProductId, setSelectedProductId] = useState(defaultProductId || "");
  const [bagSize, setBagSize] = useState("25");
  const productsByCategory = useMemo(() => {
    const grouped = {};
    products.forEach((product) => {
      if (!grouped[product.category]) {
        grouped[product.category] = [];
      }
      grouped[product.category].push(product);
    });
    return grouped;
  }, [products]);
  const selectedProduct = useMemo(() => {
    return products.find((p) => p.id === selectedProductId);
  }, [selectedProductId, products]);
  const calculations = useMemo(() => {
    var _a2, _b;
    const bagSizeKg = parseFloat(bagSize);
    const load20ftStr = ((_a2 = selectedProduct == null ? void 0 : selectedProduct.logistics) == null ? void 0 : _a2.containerLoad20ft) || companyInfo.defaultLogistics.containerLoad20ft;
    const load40ftStr = ((_b = selectedProduct == null ? void 0 : selectedProduct.logistics) == null ? void 0 : _b.containerLoad40ft) || companyInfo.defaultLogistics.containerLoad40ft;
    const load20ft = parseContainerLoad(load20ftStr);
    const load40ft = parseContainerLoad(load40ftStr);
    return {
      container20ft: {
        tonnageMin: (load20ft.min / 1e3).toFixed(0),
        tonnageMax: (load20ft.max / 1e3).toFixed(0),
        bagsMin: Math.floor(load20ft.min / bagSizeKg),
        bagsMax: Math.floor(load20ft.max / bagSizeKg)
      },
      container40ft: {
        tonnageMin: (load40ft.min / 1e3).toFixed(0),
        tonnageMax: (load40ft.max / 1e3).toFixed(0),
        bagsMin: Math.floor(load40ft.min / bagSizeKg),
        bagsMax: Math.floor(load40ft.max / bagSizeKg)
      }
    };
  }, [selectedProduct, bagSize]);
  return /* @__PURE__ */ jsxs("div", { className: `rounded-xl bg-card shadow-soft ${compact ? "p-4" : "p-6"}`, children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
      /* @__PURE__ */ jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-full bg-primary/10", children: /* @__PURE__ */ jsx(Calculator, { className: "h-5 w-5 text-primary" }) }),
      /* @__PURE__ */ jsxs("div", { children: [
        headingLevel === "h2" ? /* @__PURE__ */ jsx("h2", { className: `font-bold text-foreground ${compact ? "text-lg" : "text-xl"}`, children: "Container Load Calculator" }) : /* @__PURE__ */ jsx("h3", { className: `font-bold text-foreground ${compact ? "text-lg" : "text-xl"}`, children: "Container Load Calculator" }),
        !compact && /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Estimate how many bags fit in your container" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid gap-4 sm:grid-cols-2 mb-6", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-foreground mb-2", children: "Product Type" }),
        /* @__PURE__ */ jsxs(
          "select",
          {
            value: selectedProductId,
            onChange: (e) => setSelectedProductId(e.target.value),
            className: "w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20",
            children: [
              /* @__PURE__ */ jsx("option", { value: "", children: "Select a product..." }),
              Object.entries(productsByCategory).map(([category, prods]) => /* @__PURE__ */ jsx("optgroup", { label: categoryLabels[category], children: prods.map((product) => /* @__PURE__ */ jsx("option", { value: product.id, children: product.name }, product.id)) }, category))
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-foreground mb-2", children: "Bag Size" }),
        /* @__PURE__ */ jsx(
          "select",
          {
            value: bagSize,
            onChange: (e) => setBagSize(e.target.value),
            className: "w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20",
            children: bagSizeOptions.map((option) => /* @__PURE__ */ jsx("option", { value: option.value, children: option.label }, option.value))
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid gap-4 sm:grid-cols-2", children: [
      /* @__PURE__ */ jsxs("div", { className: "rounded-lg bg-muted/50 p-4 border border-border", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
          /* @__PURE__ */ jsx(Ship, { className: "h-5 w-5 text-primary" }),
          /* @__PURE__ */ jsx("span", { className: "font-semibold text-foreground", children: "20ft Container" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsx("span", { className: "text-sm text-muted-foreground", children: "Capacity" }),
            /* @__PURE__ */ jsxs("span", { className: "font-bold text-foreground", children: [
              calculations.container20ft.tonnageMin,
              "-",
              calculations.container20ft.tonnageMax,
              " MT"
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxs("span", { className: "text-sm text-muted-foreground", children: [
              "Bags (",
              bagSize,
              "kg)"
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "font-bold text-primary", children: [
              calculations.container20ft.bagsMin.toLocaleString(),
              "-",
              calculations.container20ft.bagsMax.toLocaleString()
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "rounded-lg bg-muted/50 p-4 border border-border", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
          /* @__PURE__ */ jsx(Ship, { className: "h-5 w-5 text-primary" }),
          /* @__PURE__ */ jsx("span", { className: "font-semibold text-foreground", children: "40ft Container" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsx("span", { className: "text-sm text-muted-foreground", children: "Capacity" }),
            /* @__PURE__ */ jsxs("span", { className: "font-bold text-foreground", children: [
              calculations.container40ft.tonnageMin,
              "-",
              calculations.container40ft.tonnageMax,
              " MT"
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxs("span", { className: "text-sm text-muted-foreground", children: [
              "Bags (",
              bagSize,
              "kg)"
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "font-bold text-primary", children: [
              calculations.container40ft.bagsMin.toLocaleString(),
              "-",
              calculations.container40ft.bagsMax.toLocaleString()
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("p", { className: "mt-4 text-xs text-muted-foreground text-center", children: [
      "* Estimates based on product density and standard packing. Actual capacity may vary.",
      selectedProduct && ((_a = selectedProduct.logistics) == null ? void 0 : _a.containerLoad20ft) && /* @__PURE__ */ jsx(Fragment, { children: " Product-specific container loads applied." })
    ] })
  ] });
}
const breadcrumbItems = [
  { name: "Home", url: SITE_URL },
  { name: "Shipping & Export", url: `${SITE_URL}/shipping` }
];
function ShippingPage() {
  return /* @__PURE__ */ jsxs(Layout, { children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: "Shipping & Export to 18+ Countries",
        description: `Export to ${companyInfo.stats.exportCountries} countries. FOB & CIF terms with full customs documentation. Lead time ${companyInfo.paymentTerms.leadTime}.`,
        keywords: ["dried fruit shipping", "FOB Indonesia", "export dried fruit", "container shipping fruit", "international fruit delivery"],
        canonical: "/shipping",
        ogImage: socialImages.shipping
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
    /* @__PURE__ */ jsx("section", { className: "py-16 bg-gradient-to-br from-primary to-tropical-green-light", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-3xl text-center text-primary-foreground", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold sm:text-5xl mb-4", children: "Shipping & Export" }),
      /* @__PURE__ */ jsx("p", { className: "text-xl text-primary-foreground/80", children: "Seamless export process with complete documentation for hassle-free import" })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsx("div", { className: "grid gap-6 md:grid-cols-2 lg:grid-cols-4", children: [
      { icon: Clock, title: "Lead Time", value: companyInfo.paymentTerms.leadTime },
      { icon: Package, title: "Minimum Order", value: companyInfo.paymentTerms.moq },
      { icon: CreditCard, title: "Payment", value: "50% + 50%" },
      { icon: Globe, title: "Export To", value: `${companyInfo.stats.exportCountries} Countries` }
    ].map((item) => /* @__PURE__ */ jsxs("div", { className: "rounded-xl bg-card p-6 shadow-soft text-center", children: [
      /* @__PURE__ */ jsx(item.icon, { className: "h-10 w-10 text-primary mx-auto mb-3" }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: item.title }),
      /* @__PURE__ */ jsx("p", { className: "text-xl font-bold text-foreground", children: item.value })
    ] }, item.title)) }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-muted/30", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-3xl text-center mb-16", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-foreground", children: "Export Process" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-lg text-muted-foreground", children: "From order to delivery in 6 simple steps" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3", children: shippingProcess.map((item) => /* @__PURE__ */ jsxs("div", { className: "rounded-xl bg-card p-6 shadow-soft", children: [
        /* @__PURE__ */ jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold mb-4", children: item.step }),
        /* @__PURE__ */ jsx("h3", { className: "font-semibold text-foreground mb-2", children: item.title }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: item.description })
      ] }, item.step)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-12 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-foreground mb-6", children: "Payment Terms" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "rounded-xl bg-card p-6 shadow-soft", children: [
            /* @__PURE__ */ jsx(CreditCard, { className: "h-8 w-8 text-primary mb-3" }),
            /* @__PURE__ */ jsx("h3", { className: "font-semibold text-foreground mb-2", children: "T/T (Bank Transfer)" }),
            /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground", children: [
              companyInfo.paymentTerms.deposit,
              " deposit upon order confirmation,",
              companyInfo.paymentTerms.balance,
              " before shipment"
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "rounded-xl bg-card p-6 shadow-soft", children: [
            /* @__PURE__ */ jsx(FileText, { className: "h-8 w-8 text-primary mb-3" }),
            /* @__PURE__ */ jsx("h3", { className: "font-semibold text-foreground mb-2", children: "L/C (Letter of Credit)" }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Available for orders above 5 tons. Irrevocable L/C at sight." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-foreground mb-6", children: "Shipping Terms" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "rounded-xl bg-card p-6 shadow-soft", children: [
            /* @__PURE__ */ jsx(Ship, { className: "h-8 w-8 text-primary mb-3" }),
            /* @__PURE__ */ jsx("h3", { className: "font-semibold text-foreground mb-2", children: "FOB Indonesia" }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Free on Board from Semarang or Jakarta port. Buyer arranges and pays for ocean freight." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "rounded-xl bg-card p-6 shadow-soft", children: [
            /* @__PURE__ */ jsx(Truck, { className: "h-8 w-8 text-primary mb-3" }),
            /* @__PURE__ */ jsx("h3", { className: "font-semibold text-foreground mb-2", children: "CIF Available" }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Cost, Insurance & Freight available upon request. We can quote door-to-door delivery." })
          ] })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-muted/30", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsx("div", { className: "max-w-2xl mx-auto", children: /* @__PURE__ */ jsx(ContainerCalculator, { headingLevel: "h2" }) }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-muted/30", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-3xl text-center mb-16", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-foreground", children: "Export Documentation" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-lg text-muted-foreground", children: "Complete documentation for seamless customs clearance" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto", children: exportDocs.map((doc) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 bg-card rounded-lg p-4 shadow-soft", children: [
        /* @__PURE__ */ jsx(CheckCircle, { className: "h-5 w-5 text-primary flex-shrink-0" }),
        /* @__PURE__ */ jsx("span", { className: "text-foreground", children: doc })
      ] }, doc)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-3xl text-center mb-16", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-foreground", children: "Countries We Export To" }),
        /* @__PURE__ */ jsxs("p", { className: "mt-4 text-lg text-muted-foreground", children: [
          "Regular shipments to ",
          companyInfo.stats.exportCountries,
          " countries across 5 regions"
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3", children: exportCountries.map((region) => /* @__PURE__ */ jsxs("div", { className: "rounded-xl bg-card p-6 shadow-soft", children: [
        /* @__PURE__ */ jsx(Globe, { className: "h-8 w-8 text-primary mb-3" }),
        /* @__PURE__ */ jsx("h3", { className: "font-semibold text-foreground mb-3", children: region.region }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: region.countries.map((country) => /* @__PURE__ */ jsx(
          "span",
          {
            className: "rounded-full bg-muted px-3 py-1 text-sm text-muted-foreground",
            children: country
          },
          country
        )) })
      ] }, region.region)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-gradient-to-br from-primary to-tropical-green-light", children: /* @__PURE__ */ jsxs("div", { className: "container text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-primary-foreground mb-4", children: "Ready to Place an Order?" }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto", children: "Contact our export team for pricing, shipping quotes, and custom requirements." }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap justify-center gap-4", children: [
        /* @__PURE__ */ jsx(PrimaryButton, { to: "/contact", variant: "gold", size: "xl", children: "Request Quote" }),
        /* @__PURE__ */ jsx(SecondaryLightButton, { to: "/faq", children: "View FAQ" })
      ] })
    ] }) })
  ] });
}
export {
  ShippingPage as default
};
