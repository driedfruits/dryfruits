import { jsxs, jsx } from "react/jsx-runtime";
import { Suspense, lazy } from "react";
import { useParams, Navigate } from "react-router-dom";
import { S as Skeleton, u as useProducts, g as getProductRedirect } from "../main.mjs";
import "clsx";
import { Loader2 } from "lucide-react";
import { L as Layout, j as getProductById } from "./Layout-C1jIX7PL.js";
import "./badge-DObGNgcP.js";
import "./table-BSS22iTl.js";
import "./accordion-Blg67-Ce.js";
import "./CategoryCard-CcsUvgyi.js";
import "vite-react-ssg";
import "@radix-ui/react-toast";
import "class-variance-authority";
import "tailwind-merge";
import "next-themes";
import "sonner";
import "@radix-ui/react-tooltip";
import "@radix-ui/react-slot";
import "@supabase/supabase-js";
import "@radix-ui/react-accordion";
import "embla-carousel-react";
import "@radix-ui/react-select";
import "./optimized-image--pNYP21E.js";
function ProductPageSkeleton() {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background pb-20 lg:pb-0", children: [
    /* @__PURE__ */ jsx("div", { className: "bg-muted/50 py-4", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-12" }),
      /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-4" }),
      /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-24" }),
      /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-4" }),
      /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-20" }),
      /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-4" }),
      /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-28" })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-12 lg:py-16", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-10 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsx(Skeleton, { className: "aspect-square rounded-2xl" }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-center space-y-4", children: [
        /* @__PURE__ */ jsx(Skeleton, { className: "h-6 w-24" }),
        /* @__PURE__ */ jsx(Skeleton, { className: "h-10 w-3/4" }),
        /* @__PURE__ */ jsx(Skeleton, { className: "h-5 w-48" }),
        /* @__PURE__ */ jsx(Skeleton, { className: "h-8 w-32" }),
        /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-56" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2 py-4", children: [
          /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-64" }),
          /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-48" }),
          /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-56" }),
          /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-40" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsx(Skeleton, { className: "h-11 w-40" }),
          /* @__PURE__ */ jsx(Skeleton, { className: "h-11 w-36" }),
          /* @__PURE__ */ jsx(Skeleton, { className: "h-11 w-32" })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-12 bg-muted/30", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsx(Skeleton, { className: "h-8 w-48 mb-6" }),
      /* @__PURE__ */ jsx("div", { className: "bg-card rounded-xl p-6 shadow-sm", children: /* @__PURE__ */ jsx("div", { className: "space-y-4", children: [...Array(6)].map((_, i) => /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
        /* @__PURE__ */ jsx(Skeleton, { className: "h-5 w-32" }),
        /* @__PURE__ */ jsx(Skeleton, { className: "h-5 w-48" })
      ] }, i)) }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-12", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsx(Skeleton, { className: "h-8 w-56 mb-6" }),
      /* @__PURE__ */ jsx("div", { className: "grid gap-6 lg:grid-cols-3", children: [...Array(3)].map((_, i) => /* @__PURE__ */ jsxs("div", { className: "bg-card rounded-xl p-6 shadow-sm", children: [
        /* @__PURE__ */ jsx(Skeleton, { className: "h-6 w-32 mb-4" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-full" }),
          /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-3/4" }),
          /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-1/2" })
        ] })
      ] }, i)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-12 bg-muted/30", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsx(Skeleton, { className: "h-8 w-40 mb-6" }),
      /* @__PURE__ */ jsx("div", { className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4", children: [...Array(4)].map((_, i) => /* @__PURE__ */ jsxs("div", { className: "bg-card rounded-xl overflow-hidden", children: [
        /* @__PURE__ */ jsx(Skeleton, { className: "aspect-square" }),
        /* @__PURE__ */ jsxs("div", { className: "p-4 space-y-2", children: [
          /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-3/4" }),
          /* @__PURE__ */ jsx(Skeleton, { className: "h-3 w-1/2" })
        ] })
      ] }, i)) })
    ] }) })
  ] });
}
const ProductPageTemplate = lazy(
  () => import("./ProductPageTemplate-DTtlF946.js").then((module) => ({
    default: module.ProductPageTemplate
  }))
);
function ProductDetailPage() {
  const { category, productId } = useParams();
  const { products, loading } = useProducts();
  const redirectProductId = productId ? getProductRedirect(productId) : null;
  if (redirectProductId) {
    return /* @__PURE__ */ jsx(Navigate, { to: `/products/${category}/${redirectProductId}`, replace: true });
  }
  if (loading) {
    return /* @__PURE__ */ jsx(Layout, { children: /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center py-20", children: /* @__PURE__ */ jsx(Loader2, { className: "h-8 w-8 animate-spin text-primary" }) }) });
  }
  const product = getProductById(products, productId || "");
  if (!product) {
    return /* @__PURE__ */ jsx(Layout, { children: /* @__PURE__ */ jsx("div", { className: "container py-20 text-center", children: /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold text-foreground", children: "Product not found" }) }) });
  }
  return /* @__PURE__ */ jsx(Layout, { children: /* @__PURE__ */ jsx(Suspense, { fallback: /* @__PURE__ */ jsx(ProductPageSkeleton, {}), children: /* @__PURE__ */ jsx("div", { className: "animate-content-reveal", children: /* @__PURE__ */ jsx(ProductPageTemplate, { product }) }) }) });
}
export {
  ProductDetailPage as default
};
