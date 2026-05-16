import { jsxs, jsx } from "react/jsx-runtime";
import "react";
import { Link } from "react-router-dom";
import { L as Layout, f as generateBreadcrumbSchema, m as generateFAQSchema, P as PrimaryButton, W as WhatsAppButton, i as SITE_URL } from "./Layout-C1jIX7PL.js";
import { ChevronRight, Droplets, CheckCircle2, AlertTriangle, Package, Thermometer, Timer, Warehouse, XCircle, Apple, Sparkles, Snowflake, Leaf, Shield, Wind } from "lucide-react";
import { u as useProducts } from "../main.mjs";
import "clsx";
import { S as SEO, s as socialImages } from "./SEO-DyJUFjbz.js";
import { F as FAQAccordion } from "./faq-accordion-DBWb51MQ.js";
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
import "./accordion-Blg67-Ce.js";
import "@radix-ui/react-accordion";
const storageGuidelines = {
  categories: [
    {
      name: "Dried Fruits",
      tempRange: "10-20°C (50-68°F)",
      humidityMax: "<60% RH",
      waterActivity: "≤0.60 aw",
      shelfLife: "12-24 months",
      icon: "apple",
      tips: ["Store in cool, dark area", "Keep sealed when not in use", "Check for condensation regularly"]
    }
  ],
  bestPractices: [
    {
      title: "Temperature Monitoring",
      description: "Use data loggers to track 24/7 temperature. Set alerts for deviations >2°C from target range.",
      icon: "thermometer"
    },
    {
      title: "Humidity Control",
      description: "Install industrial dehumidifiers in tropical climates. Maintain consistent RH levels year-round.",
      icon: "droplets"
    },
    {
      title: "Pallet Placement",
      description: "Keep pallets minimum 10cm off floor and 50cm from walls. Allows air circulation and prevents condensation.",
      icon: "package"
    },
    {
      title: "FIFO Rotation",
      description: "First-In-First-Out system is essential. Label all incoming stock with receipt dates clearly visible.",
      icon: "timer"
    },
    {
      title: "Pest Control",
      description: "Regular fumigation schedule. Use pheromone traps for early detection. Seal all entry points.",
      icon: "shield"
    },
    {
      title: "Ventilation",
      description: "Ensure adequate air circulation to prevent moisture pockets. Avoid dead zones in warehouse corners.",
      icon: "wind"
    }
  ],
  commonMistakes: [
    {
      mistake: "Storing near heat sources",
      consequence: "Accelerates oxidation, causes moisture migration, and degrades color/flavor compounds",
      solution: "Maintain 2+ meter distance from heaters, machinery, or sun-exposed walls"
    },
    {
      mistake: "Direct sunlight exposure",
      consequence: "UV degradation of natural pigments (carotenoids, anthocyanins) and vitamins",
      solution: "Use opaque packaging and store in windowless areas or use UV-blocking films"
    },
    {
      mistake: "Humidity fluctuations",
      consequence: "Causes moisture cycling - products absorb/release water, leading to caking and mold",
      solution: "Maintain steady RH with HVAC systems; avoid opening warehouse doors frequently"
    },
    {
      mistake: "Improper sealing after sampling",
      consequence: "Exposed product absorbs ambient moisture rapidly, especially finely cut products",
      solution: "Use heat sealers or zip-lock closures immediately. Never leave bags open overnight"
    },
    {
      mistake: "Floor storage without pallets",
      consequence: "Ground condensation transfers moisture to bottom cartons; pest access easier",
      solution: "Always use pallets. Consider moisture-barrier floor sheets in humid climates"
    }
  ]
};
const storageFAQs = [
  {
    question: "What is water activity (aw) and why does it matter?",
    answer: "Water activity measures moisture available for microbial growth. Dried fruits with aw ≤0.60 prevent bacteria and mold growth, extending shelf life to 18-24 months."
  },
  {
    question: "What temperature should I store dried fruits at?",
    answer: "Most dried fruits should be stored at 10-20°C (50-68°F). Avoid temperature fluctuations."
  },
  {
    question: "How does humidity affect dried fruit storage?",
    answer: "High humidity causes moisture reabsorption, leading to mold growth and quality degradation. Keep relative humidity below 60% for dried fruits."
  }
];
const categoryIcons = {
  "apple": /* @__PURE__ */ jsx(Apple, { className: "h-6 w-6" }),
  "sparkles": /* @__PURE__ */ jsx(Sparkles, { className: "h-6 w-6" }),
  "snowflake": /* @__PURE__ */ jsx(Snowflake, { className: "h-6 w-6" }),
  "leaf": /* @__PURE__ */ jsx(Leaf, { className: "h-6 w-6" })
};
const practiceIcons = {
  "thermometer": /* @__PURE__ */ jsx(Thermometer, { className: "h-5 w-5" }),
  "droplets": /* @__PURE__ */ jsx(Droplets, { className: "h-5 w-5" }),
  "package": /* @__PURE__ */ jsx(Package, { className: "h-5 w-5" }),
  "timer": /* @__PURE__ */ jsx(Timer, { className: "h-5 w-5" }),
  "shield": /* @__PURE__ */ jsx(Shield, { className: "h-5 w-5" }),
  "wind": /* @__PURE__ */ jsx(Wind, { className: "h-5 w-5" })
};
const breadcrumbItems = [
  { name: "Home", url: SITE_URL },
  { name: "Storage Guide", url: `${SITE_URL}/storage-guide` }
];
function StorageGuidePage() {
  const { products } = useProducts();
  const productsWithStorage = products.filter(
    (p) => p.specifications.storageTemp || p.specifications.storageHumidity || p.specifications.waterActivity
  ).slice(0, 12);
  return /* @__PURE__ */ jsxs(Layout, { children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: "Dried Fruit Storage Guide - Temperature, Humidity & Shelf Life",
        description: "Expert guide on storing dried fruits. Learn optimal temperature, humidity, water activity levels. Maximize shelf life for bulk wholesale orders.",
        keywords: ["dried fruit storage", "water activity", "humidity control warehouse", "dried fruit shelf life", "aw food safety"],
        canonical: "/storage-guide",
        ogImage: socialImages.storageGuide
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
    /* @__PURE__ */ jsx(
      "script",
      {
        type: "application/ld+json",
        dangerouslySetInnerHTML: {
          __html: JSON.stringify(generateFAQSchema(storageFAQs))
        }
      }
    ),
    /* @__PURE__ */ jsx("section", { className: "bg-gradient-to-b from-primary/5 to-background py-16 lg:py-20", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsxs("nav", { className: "flex items-center gap-2 text-sm text-muted-foreground mb-6", children: [
        /* @__PURE__ */ jsx(Link, { to: "/", className: "hover:text-primary transition-colors", children: "Home" }),
        /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4" }),
        /* @__PURE__ */ jsx("span", { className: "text-foreground font-medium", children: "Storage Guide" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "max-w-3xl", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-3xl lg:text-4xl font-bold text-foreground mb-4", children: "Storage & Handling Guide" }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground", children: "Maximize shelf life and preserve quality with proper storage conditions. Essential guidelines for warehouse managers, importers, and distributors." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-12 lg:py-16", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
        /* @__PURE__ */ jsx("div", { className: "p-2 bg-primary/10 rounded-lg", children: /* @__PURE__ */ jsx(Droplets, { className: "h-6 w-6 text-primary" }) }),
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-foreground", children: "Understanding Water Activity (aw)" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-card rounded-xl p-6 lg:p-8 shadow-soft mb-8", children: [
        /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground mb-6", children: [
          /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "Water activity (aw)" }),
          " measures the amount of water available for microbial growth in food products. Unlike moisture content, aw directly indicates product stability and shelf life potential."
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
          /* @__PURE__ */ jsx("p", { className: "font-medium text-foreground mb-3", children: "Why aw Matters for Dried Fruits:" }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-primary mt-0.5 shrink-0" }),
              /* @__PURE__ */ jsxs("span", { children: [
                /* @__PURE__ */ jsx("strong", { children: "aw ≤0.60:" }),
                " Prevents all bacterial and most mold growth"
              ] })
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-primary mt-0.5 shrink-0" }),
              /* @__PURE__ */ jsxs("span", { children: [
                /* @__PURE__ */ jsx("strong", { children: "aw 0.60-0.70:" }),
                " Some molds may grow slowly"
              ] })
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsx(AlertTriangle, { className: "h-4 w-4 text-yellow-500 mt-0.5 shrink-0" }),
              /* @__PURE__ */ jsxs("span", { children: [
                /* @__PURE__ */ jsx("strong", { children: "aw >0.70:" }),
                " Risk of yeast and mold proliferation"
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-muted/50 rounded-lg p-4", children: [
          /* @__PURE__ */ jsx("p", { className: "text-xs font-medium text-muted-foreground mb-2 text-center", children: "Water Activity Scale" }),
          /* @__PURE__ */ jsx("div", { className: "relative h-8 bg-gradient-to-r from-primary via-yellow-500 to-destructive rounded-full overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 flex items-center justify-between px-4 text-xs font-medium text-white", children: [
            /* @__PURE__ */ jsx("span", { children: "0.0" }),
            /* @__PURE__ */ jsx("span", { children: "0.60" }),
            /* @__PURE__ */ jsx("span", { children: "0.85" }),
            /* @__PURE__ */ jsx("span", { children: "1.0" })
          ] }) }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between mt-2 text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsx("span", { children: "Safe Zone" }),
            /* @__PURE__ */ jsx("span", { children: "Caution" }),
            /* @__PURE__ */ jsx("span", { children: "Danger" })
          ] })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-12 lg:py-16 bg-muted/30", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-foreground mb-8 text-center", children: "Storage Conditions by Product Category" }),
      /* @__PURE__ */ jsx("div", { className: "grid gap-6 md:grid-cols-2 lg:grid-cols-4", children: storageGuidelines.categories.map((category) => /* @__PURE__ */ jsxs("div", { className: "bg-card rounded-xl p-6 shadow-soft", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
          /* @__PURE__ */ jsx("div", { className: "p-2 bg-primary/10 rounded-lg text-primary", children: categoryIcons[category.icon] || /* @__PURE__ */ jsx(Package, { className: "h-6 w-6" }) }),
          /* @__PURE__ */ jsx("h3", { className: "font-semibold text-foreground", children: category.name })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-sm", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2 text-muted-foreground", children: [
              /* @__PURE__ */ jsx(Thermometer, { className: "h-4 w-4" }),
              "Temperature"
            ] }),
            /* @__PURE__ */ jsx("span", { className: "font-medium text-foreground", children: category.tempRange })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2 text-muted-foreground", children: [
              /* @__PURE__ */ jsx(Droplets, { className: "h-4 w-4" }),
              "Humidity"
            ] }),
            /* @__PURE__ */ jsx("span", { className: "font-medium text-foreground", children: category.humidityMax })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2 text-muted-foreground", children: [
              /* @__PURE__ */ jsx(Timer, { className: "h-4 w-4" }),
              "Water Activity"
            ] }),
            /* @__PURE__ */ jsx("span", { className: "font-medium text-foreground", children: category.waterActivity })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "pt-2 border-t border-border", children: [
            /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Shelf Life: " }),
            /* @__PURE__ */ jsx("span", { className: "font-medium text-primary", children: category.shelfLife })
          ] })
        ] }),
        category.tips && category.tips.length > 0 && /* @__PURE__ */ jsx("ul", { className: "mt-4 pt-4 border-t border-border space-y-1", children: category.tips.map((tip, idx) => /* @__PURE__ */ jsxs("li", { className: "text-xs text-muted-foreground flex items-start gap-1.5", children: [
          /* @__PURE__ */ jsx("span", { className: "text-primary", children: "•" }),
          tip
        ] }, idx)) })
      ] }, category.name)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-12 lg:py-16", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-8", children: [
        /* @__PURE__ */ jsx("div", { className: "p-2 bg-primary/10 rounded-lg", children: /* @__PURE__ */ jsx(Warehouse, { className: "h-6 w-6 text-primary" }) }),
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-foreground", children: "Warehouse Best Practices" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3", children: storageGuidelines.bestPractices.map((practice) => /* @__PURE__ */ jsxs("div", { className: "bg-card rounded-xl p-6 shadow-soft", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
          /* @__PURE__ */ jsx("div", { className: "p-2 bg-muted rounded-lg text-primary", children: practiceIcons[practice.icon] || /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsx("h3", { className: "font-semibold text-foreground", children: practice.title })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: practice.description })
      ] }, practice.title)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-12 lg:py-16 bg-muted/30", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-8", children: [
        /* @__PURE__ */ jsx("div", { className: "p-2 bg-primary/10 rounded-lg", children: /* @__PURE__ */ jsx(Package, { className: "h-6 w-6 text-primary" }) }),
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-foreground", children: "Packaging Integrity Guidelines" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid gap-4 md:grid-cols-2", children: [
        { title: "Moisture Barrier Films", desc: "Use high-barrier packaging (MVTR <1g/m²/day) to prevent moisture ingress during storage and transit." },
        { title: "Nitrogen Flushing", desc: "Essential for high-fat products like coconut to prevent oxidation. Maintain O₂ <2%." },
        { title: "Vacuum Sealing", desc: "Extends shelf life by 30-50% for dried fruits. Reduces oxidation and moisture absorption." },
        { title: "Re-sealing Protocol", desc: "After sampling, immediately reseal with heat sealer. Never use clips or folds for bulk storage." }
      ].map((item, idx) => /* @__PURE__ */ jsxs("div", { className: "bg-card rounded-lg p-5 shadow-soft", children: [
        /* @__PURE__ */ jsx("h3", { className: "font-semibold text-foreground mb-2", children: item.title }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: item.desc })
      ] }, idx)) })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-12 lg:py-16", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-8", children: [
        /* @__PURE__ */ jsx("div", { className: "p-2 bg-destructive/10 rounded-lg", children: /* @__PURE__ */ jsx(AlertTriangle, { className: "h-6 w-6 text-destructive" }) }),
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-foreground", children: "Common Storage Mistakes to Avoid" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "space-y-4", children: storageGuidelines.commonMistakes.map((item, idx) => /* @__PURE__ */ jsx("div", { className: "bg-card rounded-xl p-5 shadow-soft border-l-4 border-destructive/50", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
        /* @__PURE__ */ jsx(XCircle, { className: "h-5 w-5 text-destructive shrink-0 mt-0.5" }),
        /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsx("p", { className: "font-medium text-foreground mb-1", children: item.mistake }),
          /* @__PURE__ */ jsxs("p", { className: "text-sm text-muted-foreground mb-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-destructive font-medium", children: "Consequence:" }),
            " ",
            item.consequence
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsx("span", { className: "text-primary font-medium", children: "Solution:" }),
            " ",
            item.solution
          ] })
        ] })
      ] }) }, idx)) })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-12 lg:py-16 bg-muted/30", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-foreground mb-8 text-center", children: "Product-Specific Storage Reference" }),
      /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full bg-card rounded-xl shadow-soft overflow-hidden text-sm", children: [
        /* @__PURE__ */ jsx("thead", { className: "bg-muted/50", children: /* @__PURE__ */ jsxs("tr", { children: [
          /* @__PURE__ */ jsx("th", { className: "text-left p-4 font-semibold text-foreground", children: "Product" }),
          /* @__PURE__ */ jsx("th", { className: "text-left p-4 font-semibold text-foreground", children: "Temperature" }),
          /* @__PURE__ */ jsx("th", { className: "text-left p-4 font-semibold text-foreground", children: "Humidity" }),
          /* @__PURE__ */ jsx("th", { className: "text-left p-4 font-semibold text-foreground", children: "Water Activity" }),
          /* @__PURE__ */ jsx("th", { className: "text-left p-4 font-semibold text-foreground", children: "Shelf Life" })
        ] }) }),
        /* @__PURE__ */ jsx("tbody", { children: productsWithStorage.map((product, idx) => /* @__PURE__ */ jsxs("tr", { className: idx % 2 === 0 ? "" : "bg-muted/20", children: [
          /* @__PURE__ */ jsx("td", { className: "p-4", children: /* @__PURE__ */ jsx(
            Link,
            {
              to: `/products/${product.category}/${product.id}`,
              className: "text-primary hover:underline font-medium",
              children: product.name
            }
          ) }),
          /* @__PURE__ */ jsx("td", { className: "p-4 text-muted-foreground", children: product.specifications.storageTemp || "-" }),
          /* @__PURE__ */ jsx("td", { className: "p-4 text-muted-foreground", children: product.specifications.storageHumidity || "-" }),
          /* @__PURE__ */ jsx("td", { className: "p-4 text-muted-foreground", children: product.specifications.waterActivity || "-" }),
          /* @__PURE__ */ jsx("td", { className: "p-4 text-muted-foreground", children: product.specifications.shelfLife || "-" })
        ] }, product.id)) })
      ] }) }),
      /* @__PURE__ */ jsx("p", { className: "text-center text-sm text-muted-foreground mt-4", children: "View individual product pages for complete specifications and COA downloads." })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-12 lg:py-16", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-3xl", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-foreground mb-6 text-center", children: "Storage FAQ" }),
      /* @__PURE__ */ jsx(FAQAccordion, { items: [...storageFAQs], variant: "separated" })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16", children: /* @__PURE__ */ jsxs("div", { className: "container text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl lg:text-3xl font-bold text-foreground mb-3", children: "Need Custom Storage Guidance?" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-6 max-w-xl mx-auto", children: "Our technical team can provide storage recommendations specific to your warehouse conditions and product requirements." }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap justify-center gap-3", children: [
        /* @__PURE__ */ jsx(PrimaryButton, { to: "/contact", size: "lg", children: "Contact Technical Team" }),
        /* @__PURE__ */ jsx(
          WhatsAppButton,
          {
            variant: "full",
            size: "lg",
            message: "Hi! I need storage guidance for my warehouse. Can you help with temperature and humidity recommendations?"
          }
        )
      ] })
    ] }) })
  ] });
}
export {
  StorageGuidePage as default
};
