import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { F as FormInput, a as FormSelect, b as FormTextarea } from "./FormElements-14gfErHn.js";
import { a as useToast, u as useProducts, B as Button, b as getUtmParams } from "../main.mjs";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { n as WEB3FORMS_ACCESS_KEY, o as trackGA4Event, p as trackFBPixelEvent } from "./Layout-C1jIX7PL.js";
function ContactForm({ variant = "contact", preselectedProduct, className }) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    country: "",
    phone: "",
    product: preselectedProduct || "",
    quantity: "",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const { products } = useProducts();
  const productOptions = [
    { value: "", label: "Select a product" },
    ...products.map((p) => ({ value: p.id, label: p.shortName }))
  ];
  const quantityOptions = [
    { value: "", label: "Select quantity" },
    { value: "sample", label: "Sample (< 5 kg)" },
    { value: "500kg", label: "500 kg - 1 ton" },
    { value: "1-5ton", label: "1 - 5 tons" },
    { value: "5-10ton", label: "5 - 10 tons" },
    { value: "10ton+", label: "10+ tons" }
  ];
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.company.trim()) newErrors.company = "Company name is required";
    if (!formData.country.trim()) newErrors.country = "Country is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    if (variant === "quote" || variant === "sample") {
      if (!formData.product) newErrors.product = "Please select a product";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    const subjectMap = {
      contact: `New Inquiry from ${formData.name}`,
      quote: `Quote Request from ${formData.name}`,
      sample: `Sample Request from ${formData.name}`
    };
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: subjectMap[variant],
          from_name: formData.name,
          name: formData.name,
          email: formData.email,
          company: formData.company,
          country: formData.country,
          phone: formData.phone,
          product: formData.product || "N/A",
          quantity: formData.quantity || "N/A",
          message: formData.message,
          page: window.location.pathname,
          website: window.location.hostname,
          ...getUtmParams()
        })
      });
      const result = await response.json();
      if (result.success) {
        trackGA4Event("form_submit", { form_type: variant });
        trackFBPixelEvent("Lead", { content_name: variant });
        toast({
          title: variant === "sample" ? "Sample Request Sent!" : "Message Sent!",
          description: "We'll get back to you within 24 hours."
        });
        setFormData({ name: "", email: "", company: "", country: "", phone: "", product: "", quantity: "", message: "" });
        setShowSuccess(true);
      } else {
        throw new Error(result.message || "Submission failed");
      }
    } catch {
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us via WhatsApp.",
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
  const titles = {
    contact: "Send Us a Message",
    quote: "Request a Quote",
    sample: "Request Samples"
  };
  if (showSuccess) {
    return /* @__PURE__ */ jsxs("div", { className: `flex flex-col items-center justify-center py-12 space-y-4 ${className}`, children: [
      /* @__PURE__ */ jsx("div", { className: "flex h-16 w-16 items-center justify-center rounded-full bg-primary/10", children: /* @__PURE__ */ jsx(CheckCircle2, { className: "h-8 w-8 text-primary" }) }),
      /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-foreground", children: variant === "sample" ? "Sample Request Sent!" : "Message Sent!" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-center", children: "We'll get back to you within 24 hours." })
    ] });
  }
  return /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: `space-y-6 ${className}`, children: [
    /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-foreground", children: titles[variant] }),
    /* @__PURE__ */ jsxs("div", { className: "grid gap-4 sm:grid-cols-2", children: [
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
          label: "Email Address",
          name: "email",
          type: "email",
          value: formData.email,
          onChange: handleChange,
          error: errors.email,
          required: true,
          placeholder: "john@company.com"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid gap-4 sm:grid-cols-2", children: [
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
      /* @__PURE__ */ jsx(
        FormInput,
        {
          label: "Country",
          name: "country",
          value: formData.country,
          onChange: handleChange,
          error: errors.country,
          required: true,
          placeholder: "United States"
        }
      )
    ] }),
    /* @__PURE__ */ jsx(
      FormInput,
      {
        label: "Phone Number",
        name: "phone",
        type: "tel",
        value: formData.phone,
        onChange: handleChange,
        placeholder: "+1 234 567 8900",
        helperText: "Include country code"
      }
    ),
    (variant === "quote" || variant === "sample") && /* @__PURE__ */ jsxs("div", { className: "grid gap-4 sm:grid-cols-2", children: [
      /* @__PURE__ */ jsx(
        FormSelect,
        {
          label: "Product Interest",
          name: "product",
          value: formData.product,
          onChange: handleChange,
          error: errors.product,
          options: productOptions,
          required: true
        }
      ),
      /* @__PURE__ */ jsx(
        FormSelect,
        {
          label: "Estimated Quantity",
          name: "quantity",
          value: formData.quantity,
          onChange: handleChange,
          options: quantityOptions
        }
      )
    ] }),
    /* @__PURE__ */ jsx(
      FormTextarea,
      {
        label: variant === "sample" ? "Sample Requirements" : "Your Message",
        name: "message",
        value: formData.message,
        onChange: handleChange,
        error: errors.message,
        required: true,
        placeholder: variant === "sample" ? "Please describe your sample requirements, specifications, and intended use..." : "Tell us about your requirements, specifications, or questions..."
      }
    ),
    /* @__PURE__ */ jsx(Button, { type: "submit", size: "lg", disabled: isSubmitting, className: "w-full sm:w-auto", children: isSubmitting ? /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(Loader2, { className: "h-5 w-5 animate-spin" }),
      "Sending..."
    ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(Send, { className: "h-5 w-5" }),
      variant === "sample" ? "Request Samples" : variant === "quote" ? "Request Quote" : "Send Message"
    ] }) })
  ] });
}
export {
  ContactForm as C
};
