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
  { name: "Privacy Policy", url: `${SITE_URL}/privacy` }
];
function PrivacyPage() {
  return /* @__PURE__ */ jsxs(Layout, { children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: "Privacy Policy",
        description: "How DFT Indonesia collects, uses, stores, and safeguards data from B2B buyers, importers, and visitors interacting with our wholesale services.",
        keywords: ["privacy policy", "data protection", "DFT Indonesia privacy"],
        canonical: "/privacy"
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
      /* @__PURE__ */ jsx("h1", { className: "text-3xl md:text-4xl font-bold text-foreground", children: "Privacy Policy" }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-muted-foreground", children: "Last updated: January 17, 2026" })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-12 md:py-16", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "prose prose-lg max-w-4xl text-foreground", children: [
      /* @__PURE__ */ jsxs("p", { className: "lead text-muted-foreground", children: [
        companyInfo.name,
        ' ("we," "our," or "us") is committed to protecting the privacy of our business partners and website visitors. This Privacy Policy explains how we collect, use, and safeguard your information.'
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold mt-8 mb-4", children: "Information We Collect" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-4", children: "As a B2B wholesale supplier, we collect information necessary to conduct business relationships:" }),
      /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-6 text-muted-foreground space-y-2", children: [
        /* @__PURE__ */ jsx("li", { children: "Business contact information (company name, contact person, email, phone number)" }),
        /* @__PURE__ */ jsx("li", { children: "Shipping and billing addresses" }),
        /* @__PURE__ */ jsx("li", { children: "Order history and product preferences" }),
        /* @__PURE__ */ jsx("li", { children: "Communication records related to inquiries and orders" }),
        /* @__PURE__ */ jsx("li", { children: "Website usage data through cookies and analytics" })
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold mt-8 mb-4", children: "How We Use Your Information" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-4", children: "We use the collected information for the following purposes:" }),
      /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-6 text-muted-foreground space-y-2", children: [
        /* @__PURE__ */ jsx("li", { children: "Processing and fulfilling wholesale orders" }),
        /* @__PURE__ */ jsx("li", { children: "Communicating about products, pricing, and shipments" }),
        /* @__PURE__ */ jsx("li", { children: "Providing customer support and responding to inquiries" }),
        /* @__PURE__ */ jsx("li", { children: "Sending relevant product updates and industry information" }),
        /* @__PURE__ */ jsx("li", { children: "Improving our website and services" }),
        /* @__PURE__ */ jsx("li", { children: "Complying with legal and regulatory requirements" })
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold mt-8 mb-4", children: "Information Sharing" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-4", children: "We do not sell or rent your personal information. We may share information with:" }),
      /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-6 text-muted-foreground space-y-2", children: [
        /* @__PURE__ */ jsx("li", { children: "Shipping carriers to fulfill orders" }),
        /* @__PURE__ */ jsx("li", { children: "Payment processors for transaction completion" }),
        /* @__PURE__ */ jsx("li", { children: "Service providers who assist our operations (under confidentiality agreements)" }),
        /* @__PURE__ */ jsx("li", { children: "Legal authorities when required by law" })
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold mt-8 mb-4", children: "Data Security" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "We implement appropriate technical and organizational measures to protect your business information against unauthorized access, alteration, disclosure, or destruction. This includes secure data transmission, access controls, and regular security assessments." }),
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold mt-8 mb-4", children: "Cookies" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Our website uses cookies to enhance your browsing experience and analyze website traffic. You can control cookie preferences through your browser settings. Essential cookies are required for basic website functionality." }),
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold mt-8 mb-4", children: "Your Rights" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-4", children: "Depending on your jurisdiction, you may have the right to:" }),
      /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-6 text-muted-foreground space-y-2", children: [
        /* @__PURE__ */ jsx("li", { children: "Access the personal information we hold about you" }),
        /* @__PURE__ */ jsx("li", { children: "Request correction of inaccurate information" }),
        /* @__PURE__ */ jsx("li", { children: "Request deletion of your information (subject to legal retention requirements)" }),
        /* @__PURE__ */ jsx("li", { children: "Opt out of marketing communications" })
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold mt-8 mb-4", children: "Contact Information" }),
      /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground", children: [
        "For privacy-related inquiries or to exercise your rights, please contact us at",
        " ",
        /* @__PURE__ */ jsx("a", { href: `mailto:${companyInfo.email}`, className: "text-primary hover:underline", children: companyInfo.email }),
        "."
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold mt-8 mb-4", children: "Policy Updates" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. We encourage you to review this page regularly. Continued use of our services after changes constitutes acceptance of the updated policy." })
    ] }) }) })
  ] });
}
export {
  PrivacyPage as default
};
