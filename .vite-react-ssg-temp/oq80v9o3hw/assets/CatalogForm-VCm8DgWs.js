import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { F as FormInput } from "./FormElements-14gfErHn.js";
import { a as useToast, B as Button, b as getUtmParams } from "../main.mjs";
import { CheckCircle2, Loader2, Download } from "lucide-react";
import { n as WEB3FORMS_ACCESS_KEY, o as trackGA4Event, p as trackFBPixelEvent } from "./Layout-C1jIX7PL.js";
function CatalogForm({ className }) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: ""
  });
  const [errors, setErrors] = useState({});
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.company.trim()) newErrors.company = "Company name is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Catalog Download Request from ${formData.name}`,
          from_name: formData.name,
          name: formData.name,
          email: formData.email,
          company: formData.company,
          page: window.location.pathname,
          website: window.location.hostname,
          ...getUtmParams()
        })
      });
      const result = await response.json();
      if (result.success) {
        trackGA4Event("catalog_download", { form_type: "catalog" });
        trackFBPixelEvent("Lead", { content_name: "Catalog" });
        toast({
          title: "Catalog Request Received!",
          description: "Check your email for the download link."
        });
        setFormData({ name: "", email: "", company: "" });
        setShowSuccess(true);
      } else {
        throw new Error(result.message || "Submission failed");
      }
    } catch {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  useEffect(() => {
    if (showSuccess) {
      const timer = setTimeout(() => setShowSuccess(false), 3e3);
      return () => clearTimeout(timer);
    }
  }, [showSuccess]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };
  if (showSuccess) {
    return /* @__PURE__ */ jsxs("div", { className: `flex flex-col items-center justify-center py-10 space-y-3 ${className}`, children: [
      /* @__PURE__ */ jsx("div", { className: "flex h-14 w-14 items-center justify-center rounded-full bg-primary/10", children: /* @__PURE__ */ jsx(CheckCircle2, { className: "h-7 w-7 text-primary" }) }),
      /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-foreground", children: "Catalog Request Received!" }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground text-center", children: "Check your email for the download link." })
    ] });
  }
  return /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: `space-y-4 ${className}`, children: [
    /* @__PURE__ */ jsx(
      FormInput,
      {
        label: "Full Name",
        name: "name",
        value: formData.name,
        onChange: handleChange,
        error: errors.name,
        required: true,
        placeholder: "John Smith"
      }
    ),
    /* @__PURE__ */ jsx(
      FormInput,
      {
        label: "Business Email",
        name: "email",
        type: "email",
        value: formData.email,
        onChange: handleChange,
        error: errors.email,
        required: true,
        placeholder: "john@company.com"
      }
    ),
    /* @__PURE__ */ jsx(
      FormInput,
      {
        label: "Company Name",
        name: "company",
        value: formData.company,
        onChange: handleChange,
        error: errors.company,
        required: true,
        placeholder: "ABC Trading Co."
      }
    ),
    /* @__PURE__ */ jsx(Button, { type: "submit", size: "lg", disabled: isSubmitting, className: "w-full", children: isSubmitting ? /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(Loader2, { className: "h-5 w-5 animate-spin" }),
      "Processing..."
    ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(Download, { className: "h-5 w-5" }),
      "Download Catalog"
    ] }) })
  ] });
}
export {
  CatalogForm as C
};
