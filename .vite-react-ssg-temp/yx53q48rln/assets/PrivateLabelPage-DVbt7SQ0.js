import { jsxs, jsx } from "react/jsx-runtime";
import "react";
import "../main.mjs";
import "clsx";
import { CheckCircle, Package, Palette, Tag, Truck } from "lucide-react";
import { L as Layout, f as generateBreadcrumbSchema, c as companyInfo, W as WhatsAppButton, i as SITE_URL } from "./Layout-C1jIX7PL.js";
import { S as SEO, s as socialImages } from "./SEO-DyJUFjbz.js";
import "./FormElements-14gfErHn.js";
import { C as ContactForm } from "./ContactForm-D_HEpS1x.js";
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
const privateLabelServices = [
  {
    icon: Palette,
    title: "Custom Packaging Design",
    description: "Work with our team to create packaging that reflects your brand identity"
  },
  {
    icon: Tag,
    title: "Private Labeling",
    description: "Your brand name, logo, and design on our premium products"
  },
  {
    icon: Package,
    title: "Flexible Pack Sizes",
    description: "From 50g retail pouches to 25kg bulk bags - any size you need"
  },
  {
    icon: Truck,
    title: "Direct Shipping",
    description: "Ship directly to your warehouse or distribution centers"
  }
];
const packagingOptions = [
  { name: "Retail Pouches", sizes: "50g, 100g, 200g, 500g" },
  { name: "Stand-up Bags", sizes: "100g, 250g, 500g, 1kg" },
  { name: "Bulk Bags", sizes: "5kg, 10kg, 15kg, 25kg" },
  { name: "Carton Boxes", sizes: "10kg, 15kg, 20kg" },
  { name: "Gift Boxes", sizes: "Custom sizes available" }
];
const breadcrumbItems = [
  { name: "Home", url: SITE_URL },
  { name: "Private Label", url: `${SITE_URL}/private-label` }
];
function PrivateLabelPage() {
  return /* @__PURE__ */ jsxs(Layout, { children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: "Private Label & OEM Dried Fruit Services",
        description: "Launch your own brand with our private label dried fruit solutions. Custom packaging, flexible MOQ, complete OEM services. From 500kg. Artwork support included.",
        keywords: ["private label dried fruit", "OEM fruit manufacturer", "white label dried fruit", "custom packaging fruit", "branded dried fruit"],
        canonical: "/private-label",
        ogImage: socialImages.privateLabel
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
      /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold sm:text-5xl mb-4", children: "Private Label & OEM" }),
      /* @__PURE__ */ jsx("p", { className: "text-xl text-primary-foreground/80", children: "Your brand, our premium Indonesian dried fruits" })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-3xl text-center mb-16", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-foreground", children: "Our Services" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-lg text-muted-foreground", children: "Complete private label solutions from product selection to delivery" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid gap-8 md:grid-cols-2 lg:grid-cols-4", children: privateLabelServices.map((service) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "rounded-2xl bg-card p-6 shadow-soft text-center hover:shadow-glow transition-all duration-300",
          children: [
            /* @__PURE__ */ jsx(service.icon, { className: "h-12 w-12 text-primary mx-auto mb-4" }),
            /* @__PURE__ */ jsx("h3", { className: "font-semibold text-foreground mb-2", children: service.title }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: service.description })
          ]
        },
        service.title
      )) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-muted/30", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-3xl text-center mb-16", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-foreground", children: "How It Works" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-lg text-muted-foreground", children: "From concept to container in 4 simple steps" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid gap-8 md:grid-cols-2 lg:grid-cols-4", children: [
        { step: "1", title: "Consultation", desc: "Discuss your product needs, target market, and brand vision" },
        { step: "2", title: "Sampling", desc: "Receive product samples with your packaging mockup" },
        { step: "3", title: "Production", desc: "We produce and package according to your specifications" },
        { step: "4", title: "Delivery", desc: "Direct shipping to your preferred destination" }
      ].map((item) => /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsx("div", { className: "flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-2xl mx-auto mb-4", children: item.step }),
        /* @__PURE__ */ jsx("h3", { className: "font-semibold text-foreground mb-2", children: item.title }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: item.desc })
      ] }, item.step)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-12 lg:grid-cols-2 lg:items-center", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-foreground mb-6", children: "Packaging Options" }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground mb-8", children: "Choose from a wide range of packaging formats to suit your market and distribution channels." }),
        /* @__PURE__ */ jsx("div", { className: "space-y-4", children: packagingOptions.map((option) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle, { className: "h-5 w-5 text-primary mt-0.5" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-medium text-foreground", children: option.name }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: option.sizes })
          ] })
        ] }, option.name)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "rounded-2xl bg-gradient-to-br from-primary to-tropical-green-light p-8 text-primary-foreground", children: [
        /* @__PURE__ */ jsx(Package, { className: "h-12 w-12 mb-4" }),
        /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold mb-4", children: "MOQ & Pricing" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-primary-foreground/70 text-sm", children: "Minimum Order" }),
            /* @__PURE__ */ jsx("p", { className: "text-xl font-bold", children: companyInfo.paymentTerms.moq })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-primary-foreground/70 text-sm", children: "Lead Time" }),
            /* @__PURE__ */ jsxs("p", { className: "text-xl font-bold", children: [
              companyInfo.paymentTerms.leadTime,
              " + design approval"
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-primary-foreground/70 text-sm", children: "Artwork Support" }),
            /* @__PURE__ */ jsx("p", { className: "text-xl font-bold", children: "Included" })
          ] })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-muted/30", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-3xl", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-foreground mb-4", children: "Start Your Private Label Project" }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground", children: "Tell us about your requirements and we'll create a custom proposal" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "rounded-2xl bg-card p-8 shadow-soft", children: /* @__PURE__ */ jsx(ContactForm, { variant: "quote" }) }),
      /* @__PURE__ */ jsxs("div", { className: "mt-8 text-center", children: [
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-4", children: "Or contact us directly" }),
        /* @__PURE__ */ jsx(
          WhatsAppButton,
          {
            variant: "full",
            message: "Hi! I'm interested in private label/OEM services. Can we discuss?"
          }
        )
      ] })
    ] }) }) })
  ] });
}
export {
  PrivateLabelPage as default
};
