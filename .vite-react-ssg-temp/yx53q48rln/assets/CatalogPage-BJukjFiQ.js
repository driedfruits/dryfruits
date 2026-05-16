import { jsxs, jsx } from "react/jsx-runtime";
import "react";
import "../main.mjs";
import "clsx";
import { FileText, CheckCircle, Download } from "lucide-react";
import { L as Layout, f as generateBreadcrumbSchema, i as SITE_URL } from "./Layout-C1jIX7PL.js";
import { S as SEO, s as socialImages } from "./SEO-DyJUFjbz.js";
import "./FormElements-14gfErHn.js";
import { C as CatalogForm } from "./CatalogForm-VCm8DgWs.js";
import "vite-react-ssg";
import "react-router-dom";
import "react-helmet-async";
import "@radix-ui/react-toast";
import "class-variance-authority";
import "tailwind-merge";
import "next-themes";
import "sonner";
import "@radix-ui/react-tooltip";
import "@radix-ui/react-slot";
import "@supabase/supabase-js";
import "./label-DPO1kvhT.js";
import "@radix-ui/react-label";
import "@radix-ui/react-checkbox";
const breadcrumbItems = [
  { name: "Home", url: SITE_URL },
  { name: "Product Catalog", url: `${SITE_URL}/catalog` }
];
function CatalogPage() {
  return /* @__PURE__ */ jsxs(Layout, { children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: "Download Product Catalog - Specifications & Pricing",
        description: "Download our complete dried fruit catalog with product specifications, FOB pricing guidelines, packaging options, MOQs, and certification details. PDF format.",
        keywords: ["dried fruit catalog", "product catalog download", "price list dried fruit", "wholesale catalog"],
        canonical: "/catalog",
        ogImage: socialImages.catalog
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
      /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold sm:text-5xl mb-4", children: "Download Product Catalog" }),
      /* @__PURE__ */ jsx("p", { className: "text-xl text-primary-foreground/80", children: "Get our complete product catalog with specifications and pricing" })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-4xl", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-12 lg:grid-cols-2 lg:items-center", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(FileText, { className: "h-16 w-16 text-primary mb-6" }),
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-foreground mb-6", children: "What's Inside the Catalog" }),
        /* @__PURE__ */ jsx("div", { className: "space-y-4", children: [
          "Complete product range with photos",
          "Detailed specifications for each product",
          "FOB pricing guidelines",
          "Packaging options and MOQs",
          "Certification details",
          "Company profile and factory information"
        ].map((item) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle, { className: "h-5 w-5 text-primary" }),
          /* @__PURE__ */ jsx("span", { className: "text-foreground", children: item })
        ] }, item)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "rounded-2xl bg-card p-8 shadow-soft", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-6", children: [
          /* @__PURE__ */ jsx(Download, { className: "h-12 w-12 text-primary mx-auto mb-4" }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-foreground", children: "Get Your Copy" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Enter your details to download" })
        ] }),
        /* @__PURE__ */ jsx(CatalogForm, {})
      ] })
    ] }) }) }) })
  ] });
}
export {
  CatalogPage as default
};
