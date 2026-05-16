import { jsxs, jsx } from "react/jsx-runtime";
import "react";
import { L as Layout, f as generateBreadcrumbSchema, c as companyInfo, P as PrimaryButton, b as SecondaryButton, i as SITE_URL } from "./Layout-C1jIX7PL.js";
import { CheckCircle, TreePine, Heart, Users, Leaf, Recycle, Package } from "lucide-react";
import "../main.mjs";
import "clsx";
import { S as SEO } from "./SEO-DyJUFjbz.js";
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
const sustainabilityPillars = [
  {
    icon: Users,
    title: "Farmer Partnerships",
    description: "We work directly with local farming communities, providing fair prices and supporting sustainable farming practices.",
    details: [
      "Direct partnerships with 50+ farming families",
      "Fair trade pricing above market rates",
      "Training on organic farming methods",
      "Long-term contracts for income stability"
    ]
  },
  {
    icon: Leaf,
    title: "Organic Farming",
    description: "Our products come from organically certified farms that avoid harmful pesticides and synthetic fertilizers.",
    details: [
      "USDA & EU Organic certified sources",
      "No synthetic pesticides or fertilizers",
      "Natural pest management methods",
      "Soil health preservation practices"
    ]
  },
  {
    icon: Recycle,
    title: "Eco-Friendly Processing",
    description: "Our facility implements energy-efficient practices and waste reduction measures.",
    details: [
      "Solar power supplementation",
      "Water recycling systems",
      "Waste composting programs",
      "Energy-efficient drying equipment"
    ]
  },
  {
    icon: Package,
    title: "Sustainable Packaging",
    description: "We offer eco-friendly packaging options to reduce environmental impact.",
    details: [
      "Recyclable packaging materials",
      "Biodegradable options available",
      "Minimal packaging designs",
      "Bulk packaging to reduce waste"
    ]
  }
];
const breadcrumbItems = [
  { name: "Home", url: SITE_URL },
  { name: "Sustainability", url: `${SITE_URL}/sustainability` }
];
function SustainabilityPage() {
  return /* @__PURE__ */ jsxs(Layout, { children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: "Sustainability & Farmer Partnerships",
        description: "Learn about our commitment to sustainable farming, eco-friendly processing, and fair trade partnerships with Indonesian farmers. Organic certified supply chain.",
        keywords: ["sustainable dried fruit", "fair trade fruit Indonesia", "eco-friendly food processing", "organic farmer partnerships"],
        canonical: "/sustainability"
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
      /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold sm:text-5xl mb-4", children: "Sustainability & Partnerships" }),
      /* @__PURE__ */ jsx("p", { className: "text-xl text-primary-foreground/80", children: "Growing together with our farmers and protecting our planet" })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-3xl text-center mb-16", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-foreground", children: "Our Commitment" }),
        /* @__PURE__ */ jsxs("p", { className: "mt-4 text-lg text-muted-foreground", children: [
          "At ",
          companyInfo.shortName,
          ", sustainability isn't just a buzzword—it's how we do business. From farm to export, every step considers environmental and social impact."
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid gap-8 lg:grid-cols-2", children: sustainabilityPillars.map((pillar) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "rounded-2xl bg-card p-8 shadow-soft",
          children: [
            /* @__PURE__ */ jsx(pillar.icon, { className: "h-12 w-12 text-primary mb-4" }),
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-foreground mb-3", children: pillar.title }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-6", children: pillar.description }),
            /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: pillar.details.map((detail) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2 text-sm text-muted-foreground", children: [
              /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-primary flex-shrink-0" }),
              detail
            ] }, detail)) })
          ]
        },
        pillar.title
      )) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-muted/30", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-12 lg:grid-cols-2 lg:items-center", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-foreground mb-6", children: "Farm-to-Factory Traceability" }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground mb-6", children: "Every product can be traced back to the specific farms and farmers who grew it. This transparency ensures quality and supports fair trade practices." }),
        /* @__PURE__ */ jsx("div", { className: "space-y-4", children: [
          { step: "1", title: "Farm Selection", desc: "Partner farms are audited for organic practices" },
          { step: "2", title: "Harvest Tracking", desc: "Each batch is tagged with farm and date info" },
          { step: "3", title: "Processing Records", desc: "Full documentation at every stage" },
          { step: "4", title: "Export Documentation", desc: "Complete traceability in shipment docs" }
        ].map((item) => /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
          /* @__PURE__ */ jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold flex-shrink-0", children: item.step }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-semibold text-foreground", children: item.title }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: item.desc })
          ] })
        ] }, item.step)) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "aspect-square rounded-2xl bg-gradient-to-br from-secondary to-muted flex items-center justify-center", children: /* @__PURE__ */ jsx(TreePine, { className: "h-32 w-32 text-primary/20" }) })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsx("div", { className: "rounded-2xl bg-gradient-to-br from-primary to-tropical-green-light p-12 text-primary-foreground", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-8 lg:grid-cols-2 lg:items-center", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Heart, { className: "h-12 w-12 mb-4" }),
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-4", children: "Community Impact" }),
        /* @__PURE__ */ jsxs("p", { className: "text-lg text-primary-foreground/80 mb-6", children: [
          "Our operations support over 50 farming families in Central Java. By choosing ",
          companyInfo.shortName,
          ", you're supporting sustainable livelihoods and rural development in Indonesia."
        ] }),
        /* @__PURE__ */ jsx(PrimaryButton, { to: "/contact", variant: "gold", children: "Partner With Us" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-6", children: [
        { value: "50+", label: "Partner Farms" },
        { value: "200+", label: "Jobs Created" },
        { value: "100%", label: "Fair Trade" },
        { value: "0", label: "Chemical Pesticides" }
      ].map((stat) => /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsx("p", { className: "text-4xl font-bold", children: stat.value }),
        /* @__PURE__ */ jsx("p", { className: "text-primary-foreground/70", children: stat.label })
      ] }, stat.label)) })
    ] }) }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-muted/30", children: /* @__PURE__ */ jsxs("div", { className: "container text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-foreground mb-4", children: "Join Our Sustainable Supply Chain" }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground mb-8 max-w-2xl mx-auto", children: "Partner with us for sustainably sourced dried fruits and support both environmental conservation and farmer livelihoods." }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap justify-center gap-4", children: [
        /* @__PURE__ */ jsx(PrimaryButton, { to: "/contact", size: "lg", children: "Contact Us" }),
        /* @__PURE__ */ jsx(SecondaryButton, { to: "/certifications", size: "lg", children: "View Certifications" })
      ] })
    ] }) })
  ] });
}
export {
  SustainabilityPage as default
};
