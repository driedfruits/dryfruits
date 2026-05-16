import { jsxs, jsx } from "react/jsx-runtime";
import "react";
import "../main.mjs";
import "clsx";
import { L as Layout, f as generateBreadcrumbSchema, c as companyInfo, i as SITE_URL } from "./Layout-C1jIX7PL.js";
import { S as SEO } from "./SEO-CnBucqL5.js";
import "vite-react-ssg";
import "react-router-dom";
import "@radix-ui/react-toast";
import "class-variance-authority";
import "lucide-react";
import "tailwind-merge";
import "next-themes";
import "sonner";
import "@radix-ui/react-tooltip";
import "@radix-ui/react-slot";
import "@supabase/supabase-js";
import "react-fast-compare";
import "invariant";
import "shallowequal";
const breadcrumbItems = [
  { name: "Home", url: SITE_URL },
  { name: "Terms of Service", url: `${SITE_URL}/terms` }
];
function TermsPage() {
  return /* @__PURE__ */ jsxs(Layout, { children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: "Terms of Service",
        description: "B2B terms governing wholesale orders with DFT Indonesia: quotes, payment, Incoterms, lead times, claims, and shipping policies for importers.",
        keywords: ["terms of service", "business terms", "wholesale terms", "DFT Indonesia terms"],
        canonical: "/terms"
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
    /* @__PURE__ */ jsx("section", { className: "bg-primary/5 py-12 md:py-16", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-3xl md:text-4xl font-bold text-foreground", children: "Terms of Service" }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-muted-foreground", children: "Last updated: January 17, 2026" })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-12 md:py-16", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "prose prose-lg max-w-4xl text-foreground", children: [
      /* @__PURE__ */ jsxs("p", { className: "lead text-muted-foreground", children: [
        'These Terms of Service ("Terms") govern the business relationship between ',
        companyInfo.name,
        ' ("we," "our," or "us") and wholesale buyers, importers, and distributors ("you" or "Buyer") engaging in transactions for our dried fruit products.'
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold mt-8 mb-4", children: "1. Acceptance of Terms" }),
      /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground", children: [
        "By placing an order, requesting a quote, or engaging in business with ",
        companyInfo.name,
        ", you acknowledge that you have read, understood, and agree to be bound by these Terms. These Terms apply to all B2B transactions and supersede any prior agreements or communications."
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold mt-8 mb-4", children: "2. Business Relationship" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-4", children: "Our products and services are exclusively for business-to-business (B2B) wholesale transactions. By engaging with us, you confirm that:" }),
      /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-6 text-muted-foreground space-y-2", children: [
        /* @__PURE__ */ jsx("li", { children: "You are a registered business entity or authorized representative" }),
        /* @__PURE__ */ jsx("li", { children: "You have the legal authority to enter into binding contracts" }),
        /* @__PURE__ */ jsx("li", { children: "Orders meet our minimum order quantities (MOQ)" }),
        /* @__PURE__ */ jsx("li", { children: "Products are intended for commercial resale or manufacturing purposes" })
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold mt-8 mb-4", children: "3. Product Information" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "We strive to provide accurate product descriptions, specifications, and imagery. However, natural agricultural products may vary in appearance, size, and characteristics between batches. Specifications provided are typical values and not guarantees. Samples are available upon request for quality verification before placing bulk orders." }),
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold mt-8 mb-4", children: "4. Ordering and Pricing" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-4", children: "All quotes and pricing are valid for the period specified in the quotation document. Prices are subject to change based on:" }),
      /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-6 text-muted-foreground space-y-2", children: [
        /* @__PURE__ */ jsx("li", { children: "Market conditions and raw material availability" }),
        /* @__PURE__ */ jsx("li", { children: "Currency exchange rate fluctuations" }),
        /* @__PURE__ */ jsx("li", { children: "Shipping and logistics costs" }),
        /* @__PURE__ */ jsx("li", { children: "Order volume and specifications" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mt-4", children: "Orders are confirmed only upon written acceptance and receipt of agreed payment terms." }),
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold mt-8 mb-4", children: "5. Payment Terms" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-4", children: "Standard payment terms are specified in each quotation and may include:" }),
      /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-6 text-muted-foreground space-y-2", children: [
        /* @__PURE__ */ jsx("li", { children: "Deposit requirement before production commencement" }),
        /* @__PURE__ */ jsx("li", { children: "Balance payment before shipment or against documents" }),
        /* @__PURE__ */ jsx("li", { children: "Letter of Credit (L/C) for qualified buyers" }),
        /* @__PURE__ */ jsx("li", { children: "Wire transfer (T/T) to designated bank accounts" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mt-4", children: "Late payments may incur additional charges and affect future order processing." }),
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold mt-8 mb-4", children: "6. Shipping and Delivery" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Shipping terms (Incoterms) are specified in each quotation. Lead times are estimates and may vary based on production schedules, product availability, and shipping conditions. We are not liable for delays caused by customs, port congestion, or force majeure events. Risk of loss transfers according to the agreed Incoterms." }),
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold mt-8 mb-4", children: "7. Quality and Claims" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-4", children: "All products are manufactured according to our quality standards and relevant certifications. Claims regarding product quality must be:" }),
      /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-6 text-muted-foreground space-y-2", children: [
        /* @__PURE__ */ jsx("li", { children: "Submitted in writing within 14 days of receipt" }),
        /* @__PURE__ */ jsx("li", { children: "Accompanied by photographic evidence and samples" }),
        /* @__PURE__ */ jsx("li", { children: "Verified by independent laboratory testing if required" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mt-4", children: "We are not responsible for quality deterioration due to improper storage or handling after delivery." }),
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold mt-8 mb-4", children: "8. Limitation of Liability" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Our liability is limited to the value of the products supplied. We are not liable for indirect, consequential, or incidental damages including lost profits, business interruption, or third-party claims. Maximum liability shall not exceed the invoice value of the specific order in question." }),
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold mt-8 mb-4", children: "9. Intellectual Property" }),
      /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground", children: [
        "All trademarks, logos, and product information on our website and materials are the property of ",
        companyInfo.name,
        ". Use of our intellectual property requires prior written consent. Private label arrangements are governed by separate agreements."
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold mt-8 mb-4", children: "10. Governing Law" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "These Terms are governed by the laws of the Republic of Indonesia. Any disputes shall be resolved through good-faith negotiation. If unresolved, disputes shall be submitted to arbitration in accordance with Indonesian arbitration rules." }),
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold mt-8 mb-4", children: "Contact Information" }),
      /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground", children: [
        "For questions regarding these Terms, please contact us at",
        " ",
        /* @__PURE__ */ jsx("a", { href: `mailto:${companyInfo.email}`, className: "text-primary hover:underline", children: companyInfo.email }),
        "."
      ] })
    ] }) }) })
  ] });
}
export {
  TermsPage as default
};
