import { jsxs, jsx } from "react/jsx-runtime";
import "react";
import { L as Layout, f as generateBreadcrumbSchema, m as generateFAQSchema, c as companyInfo, P as PrimaryButton, W as WhatsAppButton, i as SITE_URL } from "./Layout-C1jIX7PL.js";
import "../main.mjs";
import "clsx";
import { S as SEO, s as socialImages } from "./SEO-DyJUFjbz.js";
import { F as FAQAccordion } from "./faq-accordion-DBWb51MQ.js";
import "react-router-dom";
import "lucide-react";
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
const faqItems = [
  {
    question: "What is your minimum order quantity (MOQ)?",
    answer: "Our standard MOQ is 500 kg to 1 ton depending on the product. For new customers, we can discuss smaller trial orders to establish the business relationship."
  },
  {
    question: "What are your payment terms?",
    answer: "We typically work with 50% deposit upon order confirmation and 50% balance before shipment. We also accept Letter of Credit (L/C) for larger orders."
  },
  {
    question: "How long is the lead time?",
    answer: "Standard lead time is 2-3 weeks from order confirmation and deposit receipt. For larger orders or custom specifications, it may take 3-4 weeks."
  },
  {
    question: "Do you offer organic certification?",
    answer: "Yes, most of our products are USDA Organic and EU Organic certified. We can provide all necessary certification documents for import purposes."
  },
  {
    question: "Can you do private label/OEM packaging?",
    answer: "Absolutely! We offer full private label and OEM services. You can provide your own packaging design or work with our team to create custom packaging."
  },
  {
    question: "What countries do you export to?",
    answer: "We export to over 18 countries including USA, Canada, Germany, Netherlands, UK, Japan, South Korea, Australia, UAE, and more."
  },
  {
    question: "Can I request samples before ordering?",
    answer: "Yes, we encourage all potential buyers to request samples. Product samples are free, but courier costs (DHL/FedEx) are borne by the buyer."
  },
  {
    question: "What quality documents do you provide?",
    answer: "We provide Certificate of Analysis (COA), phytosanitary certificates, organic certificates, bill of lading, packing list, commercial invoice, and any other documents required for import."
  },
  {
    question: "What is the transit time to USA/Europe?",
    answer: "Ocean freight: USA West Coast ~25-30 days, Europe (Rotterdam/Hamburg) ~28-35 days. Air freight is available at 3-5 days for urgent orders."
  },
  {
    question: "Do you offer CIF/CNF pricing?",
    answer: "Yes, we support multiple Incoterms including FOB, CIF, CNF, and Ex-Works. Contact us for CIF/CNF quotes to your destination port."
  }
];
const breadcrumbItems = [
  { name: "Home", url: SITE_URL },
  { name: "FAQ", url: `${SITE_URL}/faq` }
];
function FAQPage() {
  return /* @__PURE__ */ jsxs(Layout, { children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: "FAQ - Wholesale Dried Fruit Questions Answered",
        description: "Frequently asked questions about ordering wholesale dried fruits from Indonesia. Learn about MOQ, shipping, certifications, lead times, and payment terms.",
        keywords: ["dried fruit FAQ", "wholesale fruit questions", "MOQ dried fruit", "shipping dried fruit Indonesia"],
        canonical: "/faq",
        ogImage: socialImages.faq
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
          __html: JSON.stringify(generateFAQSchema(faqItems))
        }
      }
    ),
    /* @__PURE__ */ jsx("section", { className: "py-16 bg-gradient-to-br from-primary to-tropical-green-light", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-3xl text-center text-primary-foreground", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold sm:text-5xl mb-4", children: "Frequently Asked Questions" }),
      /* @__PURE__ */ jsxs("p", { className: "text-xl text-primary-foreground/80", children: [
        "Everything you need to know about ordering from ",
        companyInfo.shortName
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-3xl", children: /* @__PURE__ */ jsx(FAQAccordion, { items: [...faqItems], variant: "separated" }) }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-muted/30", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-2xl text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-foreground mb-4", children: "Still Have Questions?" }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground mb-8", children: "Our export team is here to help. Reach out via email or WhatsApp for quick responses." }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap justify-center gap-4", children: [
        /* @__PURE__ */ jsx(PrimaryButton, { to: "/contact", children: "Contact Us" }),
        /* @__PURE__ */ jsx(WhatsAppButton, { variant: "full" })
      ] })
    ] }) }) })
  ] });
}
export {
  FAQPage as default
};
