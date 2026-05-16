import { jsxs, jsx } from "react/jsx-runtime";
import "react";
import { L as Layout, c as companyInfo, f as generateBreadcrumbSchema, W as WhatsAppButton, P as PrimaryButton, s as socialLinks, l as socialIcons, i as SITE_URL } from "./Layout-C1jIX7PL.js";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import "../main.mjs";
import "clsx";
import { S as SEO, s as socialImages } from "./SEO-DyJUFjbz.js";
import "./FormElements-14gfErHn.js";
import { C as ContactForm } from "./ContactForm-D_HEpS1x.js";
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
import "./label-DPO1kvhT.js";
import "@radix-ui/react-label";
import "@radix-ui/react-checkbox";
const breadcrumbItems = [
  { name: "Home", url: SITE_URL },
  { name: "Contact", url: `${SITE_URL}/contact` }
];
function ContactPage() {
  return /* @__PURE__ */ jsxs(Layout, { children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: "Request a Bulk Quote - Contact DFT Indonesia",
        description: `Contact ${companyInfo.shortName} export team for bulk quotes and inquiries. Phone: ${companyInfo.phone}. Email: ${companyInfo.email}. Response within 24 hours.`,
        keywords: ["contact dried fruit supplier", "bulk quote request", "Indonesian exporter contact", "wholesale dried fruit inquiry"],
        canonical: "/contact",
        ogImage: socialImages.contact
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
      /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold sm:text-5xl mb-4", children: "Request a Quote" }),
      /* @__PURE__ */ jsx("p", { className: "text-xl text-on-primary-muted", children: "Get in touch with our export team. We typically respond within 24 hours." }),
      /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-col sm:flex-row items-center justify-center gap-3", children: [
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: `tel:${companyInfo.phone.replace(/\s/g, "")}`,
            className: "inline-flex items-center gap-3 rounded-xl bg-background/10 backdrop-blur px-6 py-4 min-h-[56px] text-primary-foreground border border-primary-foreground/20 hover:bg-background/20 transition-colors",
            "aria-label": `Call ${companyInfo.phone}`,
            children: [
              /* @__PURE__ */ jsx(Phone, { className: "h-6 w-6" }),
              /* @__PURE__ */ jsx("span", { className: "text-lg font-semibold tracking-wide", children: companyInfo.phone })
            ]
          }
        ),
        /* @__PURE__ */ jsx(WhatsAppButton, { variant: "full", size: "lg" })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-12 lg:grid-cols-3", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-1", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-foreground mb-6", children: "Get In Touch" }),
        /* @__PURE__ */ jsxs("address", { className: "not-italic space-y-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
            /* @__PURE__ */ jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10", children: /* @__PURE__ */ jsx(Mail, { className: "h-6 w-6 text-primary" }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "font-medium text-foreground", children: "Email" }),
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: `mailto:${companyInfo.email}`,
                  className: "text-muted-foreground hover:text-primary transition-colors",
                  children: companyInfo.email
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
            /* @__PURE__ */ jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10", children: /* @__PURE__ */ jsx(Phone, { className: "h-6 w-6 text-primary" }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "font-medium text-foreground", children: "Phone / WhatsApp" }),
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: `tel:${companyInfo.phone.replace(/\s/g, "")}`,
                  className: "text-muted-foreground hover:text-primary transition-colors",
                  children: companyInfo.phone
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
            /* @__PURE__ */ jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10", children: /* @__PURE__ */ jsx(MapPin, { className: "h-6 w-6 text-primary" }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "font-medium text-foreground", children: "Address" }),
              /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: companyInfo.address.full })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
            /* @__PURE__ */ jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10", children: /* @__PURE__ */ jsx(Clock, { className: "h-6 w-6 text-primary" }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "font-medium text-foreground", children: "Working Hours" }),
              /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: companyInfo.workingHours.full })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 p-6 rounded-xl bg-muted", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-semibold text-foreground mb-2", children: "Quick Contact" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mb-4", children: "Reach our export team instantly — tap to call or chat." }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxs(
              PrimaryButton,
              {
                href: `tel:${companyInfo.phone.replace(/\s/g, "")}`,
                className: "w-full",
                children: [
                  /* @__PURE__ */ jsx(Phone, { className: "h-5 w-5" }),
                  "Call ",
                  companyInfo.phone
                ]
              }
            ),
            /* @__PURE__ */ jsx(WhatsAppButton, { variant: "full", className: "w-full" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-semibold text-foreground mb-4", children: "Follow Us" }),
          /* @__PURE__ */ jsx("div", { className: "flex gap-3", children: Object.entries(socialLinks).map(([key, url]) => {
            const Icon = socialIcons[key];
            return /* @__PURE__ */ jsx(
              "a",
              {
                href: url,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors",
                "aria-label": `Follow us on ${key}`,
                children: /* @__PURE__ */ jsx(Icon, { className: "h-5 w-5" })
              },
              key
            );
          }) })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "lg:col-span-2", children: /* @__PURE__ */ jsx("div", { className: "rounded-2xl bg-card p-8 shadow-soft", children: /* @__PURE__ */ jsx(ContactForm, { variant: "quote" }) }) })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-12 bg-muted/30", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsx("div", { className: "aspect-[21/9] rounded-2xl bg-gradient-to-br from-secondary to-muted flex items-center justify-center", children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsx(MapPin, { className: "h-16 w-16 text-muted-foreground/30 mx-auto mb-4" }),
      /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground", children: [
        "Map placeholder - ",
        companyInfo.address.city,
        ", Indonesia"
      ] })
    ] }) }) }) })
  ] });
}
export {
  ContactPage as default
};
