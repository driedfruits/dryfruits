import { jsxs, jsx } from "react/jsx-runtime";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { L as Layout, P as PrimaryButton } from "./Layout-C1jIX7PL.js";
import { Search, Home } from "lucide-react";
import "../main.mjs";
import "clsx";
import { S as SEO } from "./SEO-CnBucqL5.js";
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
const NotFound = () => {
  const location = useLocation();
  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);
  return /* @__PURE__ */ jsxs(Layout, { children: [
    /* @__PURE__ */ jsx(
      SEO,
      {
        title: "Page Not Found",
        description: "The page you're looking for doesn't exist or has been moved.",
        noIndex: true,
        prerenderStatusCode: 404
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "flex min-h-[60vh] items-center justify-center", children: /* @__PURE__ */ jsxs("div", { className: "text-center px-4", children: [
      /* @__PURE__ */ jsx("div", { className: "mb-6 flex justify-center", children: /* @__PURE__ */ jsx("div", { className: "rounded-full bg-muted p-6", children: /* @__PURE__ */ jsx(Search, { className: "h-12 w-12 text-muted-foreground" }) }) }),
      /* @__PURE__ */ jsx("h1", { className: "mb-2 text-6xl font-bold text-primary", children: "404" }),
      /* @__PURE__ */ jsx("p", { className: "mb-2 text-2xl font-semibold text-foreground", children: "Page Not Found" }),
      /* @__PURE__ */ jsx("p", { className: "mb-8 text-muted-foreground max-w-md mx-auto", children: "The page you're looking for doesn't exist or has been moved. Let's get you back on track." }),
      /* @__PURE__ */ jsxs(PrimaryButton, { to: "/", size: "lg", children: [
        /* @__PURE__ */ jsx(Home, { className: "h-5 w-5 mr-2" }),
        "Return to Home"
      ] })
    ] }) })
  ] });
};
export {
  NotFound as default
};
