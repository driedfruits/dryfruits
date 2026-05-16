import { jsxs, jsx } from "react/jsx-runtime";
import "react";
import { L as Layout, f as generateBreadcrumbSchema, a as certifications, P as PrimaryButton, b as SecondaryButton, i as SITE_URL } from "./Layout-C1jIX7PL.js";
import { Leaf, Shield, CheckCircle, Download } from "lucide-react";
import "../main.mjs";
import "clsx";
import { S as SEO, s as socialImages } from "./SEO-DyJUFjbz.js";
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
const qualityDocuments = [
  "Certificate of Analysis (COA)",
  "Phytosanitary Certificate",
  "Organic Certification",
  "Bill of Lading",
  "Commercial Invoice",
  "Packing List",
  "Certificate of Origin",
  "Health Certificate"
];
const breadcrumbItems = [
  { name: "Home", url: SITE_URL },
  { name: "Certifications", url: `${SITE_URL}/certifications` }
];
function CertificationsPage() {
  return /* @__PURE__ */ jsxs(Layout, { children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: "Certifications – USDA Organic, HACCP, Halal",
        description: "Our food safety and organic certifications: USDA Organic, EU Organic, HACCP, and Halal. Complete export documentation for customs clearance.",
        keywords: ["USDA organic dried fruit", "EU organic certification", "HACCP certified manufacturer", "Halal dried fruit", "food safety certifications"],
        canonical: "/certifications",
        ogImage: socialImages.certifications
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
      /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold sm:text-5xl mb-4", children: "Certifications & Quality" }),
      /* @__PURE__ */ jsx("p", { className: "text-xl text-primary-foreground/80", children: "Meeting international standards for food safety and organic production" })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-3xl text-center mb-16", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-foreground", children: "Our Certifications" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-lg text-muted-foreground", children: "Every product we export meets the highest international standards" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid gap-8 md:grid-cols-2 lg:grid-cols-4", children: certifications.map((cert) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "rounded-2xl bg-card p-8 shadow-soft text-center hover:shadow-glow transition-all duration-300",
          children: [
            /* @__PURE__ */ jsx("div", { className: "mb-6 mx-auto h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsx(Leaf, { className: "h-12 w-12 text-primary" }) }),
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-foreground mb-2", children: cert.name }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: cert.description })
          ]
        },
        cert.id
      )) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-muted/30", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-12 lg:grid-cols-2 lg:items-center", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-foreground mb-6", children: "Quality Assurance Process" }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground mb-8", children: "From farm to shipment, every step of our production process is monitored and documented to ensure consistent quality." }),
        /* @__PURE__ */ jsx("div", { className: "space-y-4", children: [
          "Raw material inspection upon arrival",
          "Multi-stage quality checkpoints",
          "Batch testing and documentation",
          "Pre-shipment quality verification",
          "Full traceability from farm to container"
        ].map((step, index) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("div", { className: "flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-sm", children: index + 1 }),
          /* @__PURE__ */ jsx("span", { className: "text-foreground", children: step })
        ] }, index)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "rounded-2xl bg-card p-8 shadow-soft", children: [
        /* @__PURE__ */ jsx(Shield, { className: "h-12 w-12 text-primary mb-6" }),
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-foreground mb-4", children: "Quality Promise" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-6", children: "We guarantee that every shipment meets your specifications. If any product doesn't meet the agreed quality standards, we'll work with you to make it right." }),
        /* @__PURE__ */ jsx(PrimaryButton, { to: "/contact", children: "Learn More" })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-3xl text-center mb-16", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-foreground", children: "Export Documentation" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-lg text-muted-foreground", children: "Complete documentation for seamless customs clearance" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4", children: qualityDocuments.map((doc) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "flex items-center gap-3 rounded-xl bg-card p-4 shadow-soft",
          children: [
            /* @__PURE__ */ jsx(CheckCircle, { className: "h-5 w-5 text-primary flex-shrink-0" }),
            /* @__PURE__ */ jsx("span", { className: "text-foreground", children: doc })
          ]
        },
        doc
      )) }),
      /* @__PURE__ */ jsx("div", { className: "mt-12 text-center", children: /* @__PURE__ */ jsxs(SecondaryButton, { to: "/catalog", children: [
        /* @__PURE__ */ jsx(Download, { className: "h-5 w-5 mr-2" }),
        "Download Certificate Samples"
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-gradient-to-br from-primary to-tropical-green-light", children: /* @__PURE__ */ jsxs("div", { className: "container text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-primary-foreground mb-4", children: "Need Certification Documents?" }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto", children: "Request copies of our certifications or ask about specific requirements for your market." }),
      /* @__PURE__ */ jsx(PrimaryButton, { to: "/contact", variant: "gold", size: "xl", children: "Contact Export Team" })
    ] }) })
  ] });
}
export {
  CertificationsPage as default
};
