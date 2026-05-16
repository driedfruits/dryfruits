import { jsxs, jsx } from "react/jsx-runtime";
import "react";
import "../main.mjs";
import "clsx";
import { Package, Clock, Truck, CheckCircle } from "lucide-react";
import { L as Layout, f as generateBreadcrumbSchema, W as WhatsAppButton, i as SITE_URL } from "./Layout-C1jIX7PL.js";
import { S as SEO, s as socialImages } from "./SEO-CnBucqL5.js";
import "./FormElements-14gfErHn.js";
import { C as ContactForm } from "./ContactForm-D_HEpS1x.js";
import "vite-react-ssg";
import "react-router-dom";
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
const breadcrumbItems = [
  { name: "Home", url: SITE_URL },
  { name: "Request Samples", url: `${SITE_URL}/samples` }
];
function SamplesPage() {
  return /* @__PURE__ */ jsxs(Layout, { children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: "Request Free Product Samples",
        description: "Request free dried fruit samples for quality evaluation. 50g-500g sample packs available. DHL/FedEx express shipping. Processing time 3-5 business days.",
        keywords: ["dried fruit samples", "free product samples", "fruit sample request", "quality evaluation samples"],
        canonical: "/samples",
        ogImage: socialImages.samples
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
      /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold sm:text-5xl mb-4", children: "Request Samples" }),
      /* @__PURE__ */ jsx("p", { className: "text-xl text-primary-foreground/80", children: "Try before you buy - request product samples for quality evaluation" })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-12", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsx("div", { className: "grid gap-6 md:grid-cols-3", children: [
      { icon: Package, title: "Sample Size", value: "50g - 500g per product" },
      { icon: Clock, title: "Processing Time", value: "3-5 business days" },
      { icon: Truck, title: "Shipping", value: "DHL/FedEx Express" }
    ].map((item) => /* @__PURE__ */ jsxs("div", { className: "rounded-xl bg-card p-6 shadow-soft text-center", children: [
      /* @__PURE__ */ jsx(item.icon, { className: "h-10 w-10 text-primary mx-auto mb-3" }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: item.title }),
      /* @__PURE__ */ jsx("p", { className: "text-lg font-bold text-foreground", children: item.value })
    ] }, item.title)) }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-12 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-foreground mb-6", children: "Sample Policy" }),
        /* @__PURE__ */ jsx("div", { className: "space-y-4 mb-8", children: [
          "Samples are provided free of charge for qualified buyers",
          "Shipping costs are borne by the requester",
          "Multiple product samples available in one shipment",
          "COA and specifications included with samples",
          "Sample costs may be credited against first order"
        ].map((item) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle, { className: "h-5 w-5 text-primary mt-0.5" }),
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: item })
        ] }, item)) }),
        /* @__PURE__ */ jsxs("div", { className: "rounded-xl bg-muted p-6", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-semibold text-foreground mb-3", children: "Prefer to chat first?" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mb-4", children: "Reach out on WhatsApp to discuss your sample requirements" }),
          /* @__PURE__ */ jsx(
            WhatsAppButton,
            {
              variant: "full",
              message: "Hi! I'd like to request product samples. Can you help?"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "rounded-2xl bg-card p-8 shadow-soft", children: /* @__PURE__ */ jsx(ContactForm, { variant: "sample" }) })
    ] }) }) })
  ] });
}
export {
  SamplesPage as default
};
