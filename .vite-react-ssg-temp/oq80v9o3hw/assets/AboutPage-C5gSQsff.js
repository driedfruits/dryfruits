import { jsxs, jsx } from "react/jsx-runtime";
import "react";
import { L as Layout, c as companyInfo, f as generateBreadcrumbSchema, P as PrimaryButton, b as SecondaryButton, k as teamMembers, i as SITE_URL } from "./Layout-C1jIX7PL.js";
import { Calendar, Factory, Globe, Award, Leaf, Users, Mail, Building2, FileText, Receipt, MapPin, Phone, Landmark } from "lucide-react";
import "../main.mjs";
import "clsx";
import { S as SEO, s as socialImages } from "./SEO-CnBucqL5.js";
import { O as OptimizedImage } from "./optimized-image--pNYP21E.js";
import "react-router-dom";
import "vite-react-ssg";
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
const breadcrumbItems = [
  { name: "Home", url: SITE_URL },
  { name: "About Us", url: `${SITE_URL}/about` }
];
function AboutPage() {
  return /* @__PURE__ */ jsxs(Layout, { children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: "About Us – Manufacturer Since 2015",
        description: `${companyInfo.shortName}: Indonesian dried fruit manufacturer since ${companyInfo.established}. Exporting to ${companyInfo.stats.exportCountries} countries; ${companyInfo.stats.productionCapacity} capacity.`,
        keywords: ["about DFT Indonesia", "dried fruit manufacturer Indonesia", "Indonesian food exporter", "tropical fruit processor"],
        canonical: "/about",
        ogImage: socialImages.about
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
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-gradient-to-br from-primary to-tropical-green-light", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-3xl text-center text-primary-foreground", children: [
      /* @__PURE__ */ jsxs("h1", { className: "text-4xl font-bold sm:text-5xl mb-6", children: [
        "About ",
        companyInfo.shortName
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-xl text-on-primary-muted", children: companyInfo.tagline })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-12 lg:grid-cols-2 lg:items-center", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-foreground mb-6", children: "Our Story" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4 text-muted-foreground", children: [
          /* @__PURE__ */ jsxs("p", { children: [
            "Founded in ",
            companyInfo.established,
            ", ",
            companyInfo.name,
            " began with a simple mission: to bring Indonesia's finest tropical fruits to the world market while supporting local farming communities."
          ] }),
          /* @__PURE__ */ jsxs("p", { children: [
            "What started as a small operation has grown into Indonesia's premier export-oriented dried fruit processing facility, with production capacity exceeding ",
            companyInfo.stats.productionCapacity,
            "."
          ] }),
          /* @__PURE__ */ jsxs("p", { children: [
            "Today, we export to ",
            companyInfo.stats.exportCountries,
            " countries across North America, Europe, Asia Pacific, and the Middle East, serving food manufacturers, retailers, and trading companies worldwide."
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap gap-4", children: [
          /* @__PURE__ */ jsx(PrimaryButton, { to: "/contact", children: "Contact Us" }),
          /* @__PURE__ */ jsx(SecondaryButton, { to: "/products", children: "Our Products" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-4", children: [
        { icon: Calendar, value: `Est. ${companyInfo.established}`, label: "Year Founded" },
        { icon: Factory, value: companyInfo.stats.productionCapacity, label: "Capacity" },
        { icon: Globe, value: `${companyInfo.stats.exportCountries} Countries`, label: "Export Reach" },
        { icon: Award, value: "4 Certifications", label: "Quality Assured" }
      ].map((stat) => /* @__PURE__ */ jsxs("div", { className: "rounded-xl bg-card p-6 shadow-soft", children: [
        /* @__PURE__ */ jsx(stat.icon, { className: "h-8 w-8 text-primary mb-3" }),
        /* @__PURE__ */ jsx("p", { className: "text-2xl font-bold text-foreground", children: stat.value }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: stat.label })
      ] }, stat.label)) })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-muted/30", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-3xl text-center mb-16", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-foreground", children: "Our Values" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-lg text-muted-foreground", children: "The principles that guide everything we do" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid gap-8 md:grid-cols-3", children: [
        {
          icon: Award,
          title: "Quality First",
          description: "Every batch is tested and certified. We never compromise on the quality of our products or the standards we maintain."
        },
        {
          icon: Leaf,
          title: "Sustainability",
          description: "From organic farming practices to eco-friendly packaging, we're committed to protecting the environment."
        },
        {
          icon: Users,
          title: "Partnership",
          description: "We believe in building long-term relationships with our farmers, customers, and communities."
        }
      ].map((value) => /* @__PURE__ */ jsxs("div", { className: "rounded-2xl bg-card p-8 shadow-soft", children: [
        /* @__PURE__ */ jsx(value.icon, { className: "h-12 w-12 text-primary mb-4" }),
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-foreground mb-3", children: value.title }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: value.description })
      ] }, value.title)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-3xl text-center mb-16", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-foreground", children: "Our Team" }),
        /* @__PURE__ */ jsxs("p", { className: "mt-4 text-lg text-muted-foreground", children: [
          "Meet the people behind ",
          companyInfo.shortName
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3", children: teamMembers.map((member) => /* @__PURE__ */ jsxs("article", { className: "group rounded-xl bg-card p-6 shadow-soft hover:shadow-glow transition-all duration-300", children: [
        /* @__PURE__ */ jsx("div", { className: "mb-4 h-24 w-24 mx-auto rounded-full bg-gradient-to-br from-primary to-tropical-green-light flex items-center justify-center", children: /* @__PURE__ */ jsx("span", { className: "text-2xl font-bold text-primary-foreground", children: member.name.split(" ").map((n) => n[0]).join("") }) }),
        /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-semibold text-foreground", children: member.name }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-primary mb-2", children: member.role }),
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: `mailto:${member.email}`,
              className: "inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors",
              children: [
                /* @__PURE__ */ jsx(Mail, { className: "h-4 w-4", "aria-hidden": "true" }),
                member.email
              ]
            }
          )
        ] })
      ] }, member.id)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-muted/30", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-3xl text-center mb-16", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-foreground", children: "Legal Information" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-lg text-muted-foreground", children: "Official company registration and legal details" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-4xl", children: /* @__PURE__ */ jsxs("div", { className: "rounded-2xl bg-card p-8 shadow-soft", children: [
        /* @__PURE__ */ jsxs("div", { className: "grid gap-6 md:grid-cols-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
            /* @__PURE__ */ jsx(Building2, { className: "h-6 w-6 text-primary mt-1 flex-shrink-0", "aria-hidden": "true" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Legal Company Name" }),
              /* @__PURE__ */ jsx("p", { className: "font-semibold text-foreground", children: companyInfo.legalInfo.legalName })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
            /* @__PURE__ */ jsx(FileText, { className: "h-6 w-6 text-primary mt-1 flex-shrink-0", "aria-hidden": "true" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: companyInfo.legalInfo.nib.label }),
              /* @__PURE__ */ jsx("p", { className: "font-semibold text-foreground font-mono", children: companyInfo.legalInfo.nib.value })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
            /* @__PURE__ */ jsx(Receipt, { className: "h-6 w-6 text-primary mt-1 flex-shrink-0", "aria-hidden": "true" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: companyInfo.legalInfo.npwp.label }),
              /* @__PURE__ */ jsx("p", { className: "font-semibold text-foreground font-mono", children: companyInfo.legalInfo.npwp.value })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "rounded-xl bg-muted overflow-hidden", children: [
            /* @__PURE__ */ jsx(
              OptimizedImage,
              {
                src: "/placeholder.svg",
                alt: "NIB (Nomor Induk Berusaha) business registration document – PT Dried Fruits Total Indonesia",
                aspectRatio: "auto",
                className: "aspect-[210/297]",
                width: 210,
                height: 297
              }
            ),
            /* @__PURE__ */ jsx("p", { className: "p-3 text-center text-sm font-medium text-foreground", children: "NIB Document" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "rounded-xl bg-muted overflow-hidden", children: [
            /* @__PURE__ */ jsx(
              OptimizedImage,
              {
                src: "/placeholder.svg",
                alt: "NPWP (Tax ID) registration document – PT Dried Fruits Total Indonesia",
                aspectRatio: "auto",
                className: "aspect-[210/297]",
                width: 210,
                height: 297
              }
            ),
            /* @__PURE__ */ jsx("p", { className: "p-3 text-center text-sm font-medium text-foreground", children: "Tax ID (NPWP) Document" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 grid gap-6 md:grid-cols-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
            /* @__PURE__ */ jsx(MapPin, { className: "h-6 w-6 text-primary mt-1 flex-shrink-0", "aria-hidden": "true" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Legal Address" }),
              /* @__PURE__ */ jsx("p", { className: "font-semibold text-foreground", children: companyInfo.address.full })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
            /* @__PURE__ */ jsx(Mail, { className: "h-6 w-6 text-primary mt-1 flex-shrink-0", "aria-hidden": "true" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Contact Email" }),
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: `mailto:${companyInfo.email}`,
                  className: "font-semibold text-primary hover:underline",
                  children: companyInfo.email
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
            /* @__PURE__ */ jsx(Phone, { className: "h-6 w-6 text-primary mt-1 flex-shrink-0", "aria-hidden": "true" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Contact Phone" }),
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: `tel:${companyInfo.phone}`,
                  className: "font-semibold text-primary hover:underline",
                  children: companyInfo.phone
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
            /* @__PURE__ */ jsx(Landmark, { className: "h-6 w-6 text-primary mt-1 flex-shrink-0", "aria-hidden": "true" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Bank Account" }),
              /* @__PURE__ */ jsx("p", { className: "font-semibold text-foreground", children: companyInfo.legalInfo.bankAccount.bankName }),
              /* @__PURE__ */ jsx("p", { className: "font-semibold text-foreground font-mono", children: companyInfo.legalInfo.bankAccount.accountNumber }),
              /* @__PURE__ */ jsxs("p", { className: "text-sm text-muted-foreground", children: [
                "a/n ",
                companyInfo.legalInfo.bankAccount.accountName
              ] })
            ] })
          ] })
        ] })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-12 lg:grid-cols-2 lg:items-center", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-foreground mb-6", children: "Visit Our Factory" }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground mb-6", children: "Our processing facility is located in the heart of Central Java, surrounded by fertile agricultural land and close to major ports for efficient shipping." }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx(MapPin, { className: "h-5 w-5 text-primary mt-1" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "font-medium text-foreground", children: "Address" }),
              /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: companyInfo.address.full })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx(Factory, { className: "h-5 w-5 text-primary mt-1" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { className: "font-medium text-foreground", children: "Facility" }),
              /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground", children: [
                "Modern processing facility with ",
                companyInfo.stats.productionCapacity,
                " capacity"
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsx(PrimaryButton, { to: "/contact", children: "Schedule a Visit" }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "aspect-video rounded-2xl bg-gradient-to-br from-secondary to-muted flex items-center justify-center", children: /* @__PURE__ */ jsx(Factory, { className: "h-24 w-24 text-muted-foreground/30" }) })
    ] }) }) })
  ] });
}
export {
  AboutPage as default
};
