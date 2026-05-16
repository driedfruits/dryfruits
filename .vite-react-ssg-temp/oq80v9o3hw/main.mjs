var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { ViteReactSSG } from "vite-react-ssg";
import { jsx, jsxs } from "react/jsx-runtime";
import { useLocation, useNavigationType, Navigate, useSearchParams, Outlet } from "react-router-dom";
import * as React from "react";
import { Component, createContext, useContext, useState, useCallback, useEffect, lazy, Suspense } from "react";
import * as ToastPrimitives from "@radix-ui/react-toast";
import { cva } from "class-variance-authority";
import { X, AlertTriangle, RefreshCw } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { useTheme } from "next-themes";
import { Toaster as Toaster$2 } from "sonner";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { Slot } from "@radix-ui/react-slot";
import { createClient } from "@supabase/supabase-js";
const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1e6;
let count = 0;
function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
}
const toastTimeouts = /* @__PURE__ */ new Map();
const addToRemoveQueue = (toastId) => {
  if (toastTimeouts.has(toastId)) {
    return;
  }
  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    dispatch({
      type: "REMOVE_TOAST",
      toastId
    });
  }, TOAST_REMOVE_DELAY);
  toastTimeouts.set(toastId, timeout);
};
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT)
      };
    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map((t) => t.id === action.toast.id ? { ...t, ...action.toast } : t)
      };
    case "DISMISS_TOAST": {
      const { toastId } = action;
      if (toastId) {
        addToRemoveQueue(toastId);
      } else {
        state.toasts.forEach((toast2) => {
          addToRemoveQueue(toast2.id);
        });
      }
      return {
        ...state,
        toasts: state.toasts.map(
          (t) => t.id === toastId || toastId === void 0 ? {
            ...t,
            open: false
          } : t
        )
      };
    }
    case "REMOVE_TOAST":
      if (action.toastId === void 0) {
        return {
          ...state,
          toasts: []
        };
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId)
      };
  }
};
const listeners = [];
let memoryState = { toasts: [] };
function dispatch(action) {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => {
    listener(memoryState);
  });
}
function toast({ ...props }) {
  const id = genId();
  const update = (props2) => dispatch({
    type: "UPDATE_TOAST",
    toast: { ...props2, id }
  });
  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id });
  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss();
      }
    }
  });
  return {
    id,
    dismiss,
    update
  };
}
function useToast() {
  const [state, setState] = React.useState(memoryState);
  React.useEffect(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, [state]);
  return {
    ...state,
    toast,
    dismiss: (toastId) => dispatch({ type: "DISMISS_TOAST", toastId })
  };
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const ToastProvider = ToastPrimitives.Provider;
const ToastViewport = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  ToastPrimitives.Viewport,
  {
    ref,
    className: cn(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      className
    ),
    ...props
  }
));
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;
const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "border bg-background text-foreground",
        destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
const Toast = React.forwardRef(({ className, variant, ...props }, ref) => {
  return /* @__PURE__ */ jsx(ToastPrimitives.Root, { ref, className: cn(toastVariants({ variant }), className), ...props });
});
Toast.displayName = ToastPrimitives.Root.displayName;
const ToastAction = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  ToastPrimitives.Action,
  {
    ref,
    className: cn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50",
      className
    ),
    ...props
  }
));
ToastAction.displayName = ToastPrimitives.Action.displayName;
const ToastClose = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  ToastPrimitives.Close,
  {
    ref,
    className: cn(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      className
    ),
    "toast-close": "",
    ...props,
    children: /* @__PURE__ */ jsx(X, { className: "h-4 w-4" })
  }
));
ToastClose.displayName = ToastPrimitives.Close.displayName;
const ToastTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(ToastPrimitives.Title, { ref, className: cn("text-sm font-semibold", className), ...props }));
ToastTitle.displayName = ToastPrimitives.Title.displayName;
const ToastDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(ToastPrimitives.Description, { ref, className: cn("text-sm opacity-90", className), ...props }));
ToastDescription.displayName = ToastPrimitives.Description.displayName;
function Toaster$1() {
  const { toasts } = useToast();
  return /* @__PURE__ */ jsxs(ToastProvider, { children: [
    toasts.map(function({ id, title, description, action, ...props }) {
      return /* @__PURE__ */ jsxs(Toast, { ...props, children: [
        /* @__PURE__ */ jsxs("div", { className: "grid gap-1", children: [
          title && /* @__PURE__ */ jsx(ToastTitle, { children: title }),
          description && /* @__PURE__ */ jsx(ToastDescription, { children: description })
        ] }),
        action,
        /* @__PURE__ */ jsx(ToastClose, {})
      ] }, id);
    }),
    /* @__PURE__ */ jsx(ToastViewport, {})
  ] });
}
const Toaster = ({ ...props }) => {
  const { theme = "system" } = useTheme();
  return /* @__PURE__ */ jsx(
    Toaster$2,
    {
      theme,
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...props
    }
  );
};
const TooltipProvider = TooltipPrimitive.Provider;
const TooltipContent = React.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx(
  TooltipPrimitive.Content,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-soft hover:shadow-glow",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-primary text-primary bg-transparent hover:bg-primary hover:text-primary-foreground",
        "outline-light": "border border-primary-foreground/40 text-primary-foreground bg-primary-foreground/10 hover:bg-primary-foreground/20 hover:border-primary-foreground/60",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        whatsapp: "bg-whatsapp text-primary-foreground hover:bg-whatsapp-hover shadow-soft",
        accent: "bg-accent text-accent-foreground hover:bg-accent/90 shadow-soft",
        gold: "bg-gradient-to-r from-gold to-gold-light text-earth-brown-dark font-semibold hover:opacity-90"
      },
      size: {
        default: "h-11 sm:h-10 px-4 py-2",
        sm: "h-10 sm:h-9 rounded-lg px-3",
        lg: "h-12 rounded-lg px-8 text-base",
        xl: "h-14 rounded-lg px-10 text-lg",
        icon: "h-11 w-11 sm:h-10 sm:w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props });
  }
);
Button.displayName = "Button";
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    __publicField(this, "handleReset", () => {
      this.setState({ hasError: false, error: void 0 });
    });
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }
      return /* @__PURE__ */ jsxs("div", { className: "flex min-h-[400px] flex-col items-center justify-center p-8 text-center", children: [
        /* @__PURE__ */ jsx("div", { className: "rounded-full bg-destructive/10 p-4 mb-4", children: /* @__PURE__ */ jsx(AlertTriangle, { className: "h-8 w-8 text-destructive" }) }),
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold text-foreground mb-2", children: "Something went wrong" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-6 max-w-md", children: "An unexpected error occurred. Please try refreshing the page or contact support if the problem persists." }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-3", children: [
          /* @__PURE__ */ jsxs(Button, { onClick: this.handleReset, variant: "outline", children: [
            /* @__PURE__ */ jsx(RefreshCw, { className: "h-4 w-4 mr-2" }),
            "Try Again"
          ] }),
          /* @__PURE__ */ jsx(Button, { onClick: () => window.location.reload(), children: "Refresh Page" })
        ] }),
        process.env.NODE_ENV === "development" && this.state.error && /* @__PURE__ */ jsxs("details", { className: "mt-6 text-left text-sm text-muted-foreground max-w-lg", children: [
          /* @__PURE__ */ jsx("summary", { className: "cursor-pointer hover:text-foreground", children: "Error Details (Dev Only)" }),
          /* @__PURE__ */ jsxs("pre", { className: "mt-2 p-4 bg-muted rounded-lg overflow-auto text-xs", children: [
            this.state.error.message,
            "\n\n",
            this.state.error.stack
          ] })
        ] })
      ] });
    }
    return this.props.children;
  }
}
const SUPABASE_URL = "https://bgwyfcakkuvbwbivibjs.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJnd3lmY2Fra3V2YndiaXZpYmpzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI3NDQxOTQsImV4cCI6MjA4ODMyMDE5NH0.omNwsYHYLutfMrf_ycvHhI2cnoqtyhQC_uij09X3awU";
const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true
  }
});
function mapRowToProduct(row) {
  const images = row.images;
  const specs = row.specifications ?? {};
  const packaging = row.packaging ?? {};
  const pricing = row.pricing ?? {};
  const logistics = row.logistics;
  const availability = row.availability;
  const compliance = row.compliance;
  const faqs = row.faqs;
  return {
    id: row.id,
    name: row.name,
    shortName: row.short_name,
    category: row.category,
    isOrganic: row.is_organic,
    sku: row.sku ?? void 0,
    hsCode: row.hs_code ?? void 0,
    images: images ? {
      main: images.main || void 0,
      mainAlt: images.mainAlt || void 0,
      thumbnail: images.thumbnail || void 0,
      thumbnailAlt: images.thumbnailAlt || void 0,
      gallery: images.gallery || void 0
    } : void 0,
    tagline: row.tagline,
    description: row.description,
    flavorProfile: row.flavor_profile ?? void 0,
    texture: row.texture ?? void 0,
    metaTitle: row.meta_title ?? void 0,
    metaDescription: row.meta_description ?? void 0,
    keywords: row.keywords ?? void 0,
    specifications: specs,
    availability: availability ? {
      peakSeason: availability.peakSeason || void 0,
      offPeakSeason: availability.offPeakSeason || void 0,
      currentStatus: availability.currentStatus || void 0
    } : void 0,
    harvestMonths: row.harvest_months ?? void 0,
    applications: row.applications ?? [],
    packaging: {
      bulk: packaging.bulk || "",
      retail: packaging.retail || "",
      custom: packaging.custom ?? false,
      retailImage: packaging.retailImage || void 0,
      bulkImage: packaging.bulkImage || void 0
    },
    pricing: {
      fobBase: pricing.fobBase || "",
      moq: pricing.moq || "",
      leadTime: pricing.leadTime || ""
    },
    logistics: logistics ? {
      portOfLoading: logistics.portOfLoading || void 0,
      incoterms: logistics.incoterms || void 0,
      containerLoad20ft: logistics.containerLoad20ft || void 0,
      containerLoad40ft: logistics.containerLoad40ft || void 0,
      estimatedDelivery: logistics.estimatedDelivery || void 0
    } : void 0,
    exportDocuments: row.export_documents ?? void 0,
    compliance: compliance ? {
      usa: compliance.usa || void 0,
      eu: compliance.eu || void 0,
      global: compliance.global || void 0
    } : void 0,
    faqs: faqs ?? void 0,
    certifications: row.certifications ?? [],
    relatedProducts: row.related_products ?? []
  };
}
function mapProductToRow(product) {
  return {
    id: product.id,
    name: product.name,
    short_name: product.shortName,
    category: product.category,
    is_organic: product.isOrganic,
    sku: product.sku ?? null,
    hs_code: product.hsCode ?? null,
    images: product.images ? {
      main: product.images.main || "",
      mainAlt: product.images.mainAlt || "",
      thumbnail: product.images.thumbnail || "",
      thumbnailAlt: product.images.thumbnailAlt || "",
      gallery: product.images.gallery || []
    } : null,
    tagline: product.tagline,
    description: product.description,
    flavor_profile: product.flavorProfile ?? null,
    texture: product.texture ?? null,
    meta_title: product.metaTitle ?? null,
    meta_description: product.metaDescription ?? null,
    keywords: product.keywords ?? null,
    specifications: product.specifications,
    availability: product.availability ? {
      peakSeason: product.availability.peakSeason || "",
      offPeakSeason: product.availability.offPeakSeason || "",
      currentStatus: product.availability.currentStatus || "in-stock"
    } : null,
    harvest_months: product.harvestMonths ?? null,
    applications: product.applications,
    packaging: {
      bulk: product.packaging.bulk,
      retail: product.packaging.retail,
      custom: product.packaging.custom,
      retailImage: product.packaging.retailImage || "",
      bulkImage: product.packaging.bulkImage || ""
    },
    pricing: {
      fobBase: product.pricing.fobBase,
      moq: product.pricing.moq,
      leadTime: product.pricing.leadTime
    },
    logistics: product.logistics ? {
      portOfLoading: product.logistics.portOfLoading || "",
      incoterms: product.logistics.incoterms || [],
      containerLoad20ft: product.logistics.containerLoad20ft || "",
      containerLoad40ft: product.logistics.containerLoad40ft || "",
      estimatedDelivery: product.logistics.estimatedDelivery || ""
    } : null,
    export_documents: product.exportDocuments ?? null,
    compliance: product.compliance ? {
      usa: product.compliance.usa || "",
      eu: product.compliance.eu || "",
      global: product.compliance.global || ""
    } : null,
    faqs: product.faqs ?? null,
    certifications: product.certifications,
    related_products: product.relatedProducts,
    created_at: (/* @__PURE__ */ new Date()).toISOString(),
    updated_at: (/* @__PURE__ */ new Date()).toISOString()
  };
}
const ProductsContext = createContext({
  products: [],
  loading: true,
  error: null,
  refetch: async () => {
  }
});
function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchProducts = useCallback(async () => {
    setLoading(true);
    setError(null);
    const { data, error: err } = await supabase.from("products").select("*").order("name");
    if (err) {
      console.error("Failed to fetch products:", err);
      setError(err.message);
      setProducts([]);
    } else {
      setProducts((data ?? []).map(mapRowToProduct));
    }
    setLoading(false);
  }, []);
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  return /* @__PURE__ */ jsx(ProductsContext.Provider, { value: { products, loading, error, refetch: fetchProducts }, children });
}
function useProducts() {
  return useContext(ProductsContext);
}
const ScrollToTop = () => {
  const { pathname } = useLocation();
  const navType = useNavigationType();
  useEffect(() => {
    if (navType !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [pathname, navType]);
  return null;
};
function Skeleton({ className, ...props }) {
  return /* @__PURE__ */ jsx("div", { className: cn("animate-pulse rounded-md bg-muted", className), ...props });
}
function LayoutSkeleton() {
  return /* @__PURE__ */ jsxs("div", { className: "flex min-h-screen flex-col bg-background", children: [
    /* @__PURE__ */ jsx("header", { className: "sticky top-0 z-50 border-b bg-background/95 backdrop-blur", children: /* @__PURE__ */ jsxs("div", { className: "container flex h-16 items-center justify-between", children: [
      /* @__PURE__ */ jsx(Skeleton, { className: "h-8 w-32" }),
      /* @__PURE__ */ jsxs("div", { className: "hidden items-center gap-6 md:flex", children: [
        /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-16" }),
        /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-20" }),
        /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-14" }),
        /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-18" }),
        /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-16" })
      ] }),
      /* @__PURE__ */ jsx(Skeleton, { className: "h-10 w-28 rounded-lg" })
    ] }) }),
    /* @__PURE__ */ jsx("main", { className: "flex-1", children: /* @__PURE__ */ jsxs("div", { className: "container py-12 space-y-8", children: [
      /* @__PURE__ */ jsx(Skeleton, { className: "h-10 w-2/3 max-w-md" }),
      /* @__PURE__ */ jsx(Skeleton, { className: "h-5 w-full max-w-lg" }),
      /* @__PURE__ */ jsx(Skeleton, { className: "h-5 w-4/5 max-w-lg" }),
      /* @__PURE__ */ jsx("div", { className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3 pt-8", children: [...Array(3)].map((_, i) => /* @__PURE__ */ jsxs("div", { className: "rounded-xl border bg-card p-6 space-y-4", children: [
        /* @__PURE__ */ jsx(Skeleton, { className: "h-40 w-full rounded-lg" }),
        /* @__PURE__ */ jsx(Skeleton, { className: "h-5 w-3/4" }),
        /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-full" }),
        /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-2/3" })
      ] }, i)) })
    ] }) })
  ] });
}
function HomePageSkeleton() {
  return /* @__PURE__ */ jsxs("div", { className: "flex min-h-screen flex-col bg-background", children: [
    /* @__PURE__ */ jsx("header", { className: "sticky top-0 z-50 border-b bg-background/95 backdrop-blur", children: /* @__PURE__ */ jsxs("div", { className: "container flex h-16 items-center justify-between", children: [
      /* @__PURE__ */ jsx(Skeleton, { className: "h-8 w-32" }),
      /* @__PURE__ */ jsxs("div", { className: "hidden items-center gap-6 md:flex", children: [
        /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-16" }),
        /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-20" }),
        /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-14" }),
        /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-16" })
      ] }),
      /* @__PURE__ */ jsx(Skeleton, { className: "h-10 w-28 rounded-lg" })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 md:py-24 bg-gradient-to-br from-primary/10 to-accent/10", children: /* @__PURE__ */ jsxs("div", { className: "container text-center space-y-6", children: [
      /* @__PURE__ */ jsx(Skeleton, { className: "h-12 w-3/4 max-w-2xl mx-auto" }),
      /* @__PURE__ */ jsx(Skeleton, { className: "h-6 w-2/3 max-w-xl mx-auto" }),
      /* @__PURE__ */ jsx(Skeleton, { className: "h-6 w-1/2 max-w-md mx-auto" }),
      /* @__PURE__ */ jsxs("div", { className: "flex justify-center gap-4 pt-4", children: [
        /* @__PURE__ */ jsx(Skeleton, { className: "h-12 w-40 rounded-lg" }),
        /* @__PURE__ */ jsx(Skeleton, { className: "h-12 w-36 rounded-lg" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap justify-center gap-2 pt-4", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsx(Skeleton, { className: "h-8 w-24 rounded-full" }, i)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 bg-muted/30", children: /* @__PURE__ */ jsxs("div", { className: "container space-y-6", children: [
      /* @__PURE__ */ jsx(Skeleton, { className: "h-8 w-64 mx-auto" }),
      /* @__PURE__ */ jsx(Skeleton, { className: "h-5 w-96 max-w-full mx-auto" }),
      /* @__PURE__ */ jsx("div", { className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-4 pt-4", children: [...Array(4)].map((_, i) => /* @__PURE__ */ jsxs("div", { className: "rounded-xl border bg-card p-6 space-y-3 text-center", children: [
        /* @__PURE__ */ jsx(Skeleton, { className: "h-12 w-12 rounded-full mx-auto" }),
        /* @__PURE__ */ jsx(Skeleton, { className: "h-5 w-24 mx-auto" }),
        /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-full" })
      ] }, i)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16", children: /* @__PURE__ */ jsxs("div", { className: "container space-y-6", children: [
      /* @__PURE__ */ jsx(Skeleton, { className: "h-8 w-48 mx-auto" }),
      /* @__PURE__ */ jsx("div", { className: "grid gap-4 grid-cols-2 lg:grid-cols-3", children: [...Array(6)].map((_, i) => /* @__PURE__ */ jsxs("div", { className: "rounded-xl overflow-hidden border bg-card", children: [
        /* @__PURE__ */ jsx(Skeleton, { className: "aspect-square w-full" }),
        /* @__PURE__ */ jsxs("div", { className: "p-4 space-y-2", children: [
          /* @__PURE__ */ jsx(Skeleton, { className: "h-5 w-3/4" }),
          /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-full" })
        ] })
      ] }, i)) })
    ] }) })
  ] });
}
function ContentPageSkeleton() {
  return /* @__PURE__ */ jsxs("div", { className: "flex min-h-screen flex-col bg-background", children: [
    /* @__PURE__ */ jsx("header", { className: "sticky top-0 z-50 border-b bg-background/95 backdrop-blur", children: /* @__PURE__ */ jsxs("div", { className: "container flex h-16 items-center justify-between", children: [
      /* @__PURE__ */ jsx(Skeleton, { className: "h-8 w-32" }),
      /* @__PURE__ */ jsxs("div", { className: "hidden items-center gap-6 md:flex", children: [
        /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-16" }),
        /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-20" }),
        /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-14" }),
        /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-16" })
      ] }),
      /* @__PURE__ */ jsx(Skeleton, { className: "h-10 w-28 rounded-lg" })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 bg-gradient-to-br from-primary/20 to-accent/10", children: /* @__PURE__ */ jsxs("div", { className: "container text-center space-y-4", children: [
      /* @__PURE__ */ jsx(Skeleton, { className: "h-10 w-72 mx-auto" }),
      /* @__PURE__ */ jsx(Skeleton, { className: "h-5 w-96 max-w-full mx-auto" })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-12", children: /* @__PURE__ */ jsx("div", { className: "container max-w-4xl space-y-8", children: [...Array(3)].map((_, i) => /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
      /* @__PURE__ */ jsx(Skeleton, { className: "h-7 w-48" }),
      /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-full" }),
      /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-full" }),
      /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-3/4" }),
      /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-5/6" })
    ] }, i)) }) })
  ] });
}
const redirectRules = [
  // Legacy/home page aliases
  { from: "/home", to: "/" },
  { from: "/index", to: "/" },
  // Page aliases
  { from: "/product", to: "/products" },
  { from: "/catalogue", to: "/catalog" },
  { from: "/sample", to: "/samples" },
  { from: "/sample-request", to: "/samples" },
  // About variants
  { from: "/about-us", to: "/about" },
  { from: "/aboutus", to: "/about" },
  { from: "/company", to: "/about" },
  { from: "/who-we-are", to: "/about" },
  // Contact variants
  { from: "/contact-us", to: "/contact" },
  { from: "/contactus", to: "/contact" },
  { from: "/get-quote", to: "/contact" },
  { from: "/inquiry", to: "/contact" },
  { from: "/enquiry", to: "/contact" },
  // FAQ variants
  { from: "/faqs", to: "/faq" },
  { from: "/questions", to: "/faq" },
  { from: "/help", to: "/faq" },
  // Certification variants
  { from: "/certificates", to: "/certifications" },
  { from: "/certification", to: "/certifications" },
  { from: "/quality", to: "/certifications" },
  // Shipping variants
  { from: "/logistics", to: "/shipping" },
  { from: "/delivery", to: "/shipping" },
  { from: "/export", to: "/shipping" },
  // Private label variants
  { from: "/oem", to: "/private-label" },
  { from: "/white-label", to: "/private-label" },
  { from: "/custom-packaging", to: "/private-label" },
  { from: "/privatelabel", to: "/private-label" },
  // Sustainability variants
  { from: "/eco", to: "/sustainability" },
  { from: "/green", to: "/sustainability" },
  { from: "/environment", to: "/sustainability" },
  // Legacy WordPress URL redirects
  { from: "/category/uncategorized", to: "/" },
  { from: "/category/uncategorized/feed", to: "/" },
  { from: "/hello-world", to: "/" },
  // Removed product redirects
  { from: "/products/dried-fruits/dried-avocado", to: "/products" },
  { from: "/products/dried-fruits/dried-snake-fruit", to: "/products" },
  // Category misspellings
  { from: "/products/dried-fruit", to: "/products/dried-fruits" },
  { from: "/products/dried", to: "/products/dried-fruits" },
  { from: "/products/powder", to: "/products" },
  { from: "/products/powders", to: "/products" },
  { from: "/products/fruit-powder", to: "/products" },
  { from: "/products/powdered-fruits", to: "/products" },
  { from: "/products/vacuum", to: "/products" },
  { from: "/products/vacuum-fry", to: "/products" },
  { from: "/products/vacuum-fried", to: "/products" },
  { from: "/products/chips", to: "/products" },
  { from: "/products/ginger", to: "/products" },
  { from: "/products/turmeric", to: "/products" },
  { from: "/products/ginger-turmeric", to: "/products" },
  { from: "/products/spices", to: "/products" }
];
const productAliases = {
  // Dried fruits aliases
  "banana": "dried-banana",
  "banana-chips": "dried-banana",
  "papaya-dried": "dried-papaya",
  "pineapple-dried": "dried-pineapple",
  "pineapple": "dried-pineapple",
  "mango-dried": "dried-mango",
  "mango": "dried-mango",
  "dragonfruit": "dried-dragon-fruit",
  "dragon": "dried-dragon-fruit",
  "pitaya": "dried-dragon-fruit",
  "jackfruit-dried": "dried-jackfruit",
  "jackfruit": "dried-jackfruit",
  "coconut-dried": "dried-coconut",
  "coconut": "dried-coconut",
  "breadfruit-dried": "dried-breadfruit",
  "breadfruit": "dried-breadfruit"
};
function getProductRedirect(productId) {
  return productAliases[productId.toLowerCase()] || null;
}
const HomePage = lazy(() => import("./assets/HomePage-Cfs8TIhi.js"));
const ProductsPage = lazy(() => import("./assets/ProductsPage-r9MN3-Fa.js"));
const ProductDetailPage = lazy(() => import("./assets/ProductDetailPage-CHLWustg.js"));
const AboutPage = lazy(() => import("./assets/AboutPage-C5gSQsff.js"));
const ContactPage = lazy(() => import("./assets/ContactPage-6Uk5EMv2.js"));
const FAQPage = lazy(() => import("./assets/FAQPage-QR0X2Rhl.js"));
const CertificationsPage = lazy(() => import("./assets/CertificationsPage-Bj1C9n67.js"));
const SustainabilityPage = lazy(() => import("./assets/SustainabilityPage-BQxTAFQz.js"));
const ShippingPage = lazy(() => import("./assets/ShippingPage-GLBjhj2J.js"));
const PrivateLabelPage = lazy(() => import("./assets/PrivateLabelPage-DxMDj6F3.js"));
const SamplesPage = lazy(() => import("./assets/SamplesPage-DVHAgfGK.js"));
const CatalogPage = lazy(() => import("./assets/CatalogPage-DzDkrauf.js"));
const StorageGuidePage = lazy(() => import("./assets/StorageGuidePage-DWjYL-HM.js"));
const PrivacyPage = lazy(() => import("./assets/PrivacyPage-BDWpYRdG.js"));
const TermsPage = lazy(() => import("./assets/TermsPage-MJGtFouE.js"));
const NotFound = lazy(() => import("./assets/NotFound-CPr7DKPx.js"));
const ProductEditorPage = lazy(() => import("./assets/ProductEditorPage-Ch8BaqrT.js"));
const DesignSystemPage = lazy(() => import("./assets/DesignSystemPage-BN7GL2zA.js"));
function SearchRedirect() {
  const [searchParams] = useSearchParams();
  if (searchParams.has("s")) {
    return /* @__PURE__ */ jsx(Navigate, { to: "/", replace: true });
  }
  return null;
}
function RootLayout() {
  return /* @__PURE__ */ jsx(ErrorBoundary, { children: /* @__PURE__ */ jsxs(TooltipProvider, { children: [
    /* @__PURE__ */ jsx(Toaster$1, {}),
    /* @__PURE__ */ jsx(Toaster, {}),
    /* @__PURE__ */ jsxs(ProductsProvider, { children: [
      /* @__PURE__ */ jsx(ScrollToTop, {}),
      /* @__PURE__ */ jsx(Outlet, {})
    ] })
  ] }) });
}
const wrap = (Skeleton2, Page) => /* @__PURE__ */ jsx(Suspense, { fallback: /* @__PURE__ */ jsx(Skeleton2, {}), children: /* @__PURE__ */ jsx(Page, {}) });
async function getProductStaticPaths() {
  try {
    const { data, error } = await supabase.from("products").select("id, category");
    if (error) throw error;
    return (data ?? []).map(
      (row) => `/products/${row.category ?? "dried-fruits"}/${row.id}`
    );
  } catch (err) {
    console.warn("[ssg] failed to fetch product paths, falling back to empty list:", err);
    return [];
  }
}
const routes = [
  {
    path: "/",
    element: /* @__PURE__ */ jsx(RootLayout, {}),
    children: [
      // Home
      {
        index: true,
        element: /* @__PURE__ */ jsxs(Suspense, { fallback: /* @__PURE__ */ jsx(HomePageSkeleton, {}), children: [
          /* @__PURE__ */ jsx(SearchRedirect, {}),
          /* @__PURE__ */ jsx(HomePage, {})
        ] })
      },
      // Products
      { path: "products", element: wrap(LayoutSkeleton, ProductsPage) },
      {
        path: "products/dried-fruits",
        element: /* @__PURE__ */ jsx(Navigate, { to: "/products", replace: true })
      },
      {
        path: "products/:category/:productId",
        element: wrap(LayoutSkeleton, ProductDetailPage),
        getStaticPaths: getProductStaticPaths
      },
      // Content
      { path: "about", element: wrap(ContentPageSkeleton, AboutPage) },
      { path: "contact", element: wrap(ContentPageSkeleton, ContactPage) },
      { path: "faq", element: wrap(ContentPageSkeleton, FAQPage) },
      { path: "certifications", element: wrap(ContentPageSkeleton, CertificationsPage) },
      { path: "sustainability", element: wrap(ContentPageSkeleton, SustainabilityPage) },
      { path: "shipping", element: wrap(ContentPageSkeleton, ShippingPage) },
      { path: "private-label", element: wrap(ContentPageSkeleton, PrivateLabelPage) },
      { path: "samples", element: wrap(ContentPageSkeleton, SamplesPage) },
      { path: "catalog", element: wrap(ContentPageSkeleton, CatalogPage) },
      { path: "storage-guide", element: wrap(ContentPageSkeleton, StorageGuidePage) },
      { path: "privacy", element: wrap(ContentPageSkeleton, PrivacyPage) },
      { path: "terms", element: wrap(ContentPageSkeleton, TermsPage) },
      // 301 Redirects
      ...redirectRules.map((rule) => ({
        path: rule.from.replace(/^\//, ""),
        element: /* @__PURE__ */ jsx(Navigate, { to: rule.to, replace: true })
      })),
      // Internal (excluded from SSG via SSG_EXCLUDED_PATHS below)
      { path: "admin/products", element: wrap(LayoutSkeleton, ProductEditorPage) },
      { path: "design-system", element: wrap(LayoutSkeleton, DesignSystemPage) },
      // 404
      { path: "*", element: wrap(LayoutSkeleton, NotFound) }
    ]
  }
];
const UTM_PARAMS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"];
const UTM_STORAGE_KEY = "utm_params";
function captureUtmParams() {
  if (typeof window === "undefined") return;
  const params = new URLSearchParams(window.location.search);
  const utm = {};
  let hasUtm = false;
  for (const key of UTM_PARAMS) {
    const value = params.get(key);
    if (value) {
      utm[key] = value;
      hasUtm = true;
    }
  }
  if (hasUtm) {
    try {
      sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(utm));
    } catch {
    }
  }
}
function getUtmParams() {
  if (typeof window === "undefined") return {};
  try {
    const raw = sessionStorage.getItem(UTM_STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}
const createRoot = ViteReactSSG(
  { routes },
  ({ isClient }) => {
    if (isClient) {
      captureUtmParams();
    }
  }
);
export {
  Button as B,
  Skeleton as S,
  useToast as a,
  getUtmParams as b,
  cn as c,
  createRoot,
  getProductRedirect as g,
  mapProductToRow as m,
  supabase as s,
  useProducts as u
};
