import { useState, useEffect } from "react";
import { FormInput, FormTextarea, FormSelect } from "./FormElements";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useProducts } from "@/contexts/ProductsContext";
import { Loader2, Send, CheckCircle2 } from "lucide-react";
import { WEB3FORMS_ACCESS_KEY } from "@/lib/constants";

interface ContactFormProps {
  variant?: "contact" | "quote" | "sample";
  preselectedProduct?: string;
  className?: string;
}

export function ContactForm({ variant = "contact", preselectedProduct, className }: ContactFormProps) {
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
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const { products } = useProducts();
  const productOptions = [
    { value: "", label: "Select a product" },
    ...products.map((p) => ({ value: p.id, label: p.shortName })),
  ];

  const quantityOptions = [
    { value: "", label: "Select quantity" },
    { value: "sample", label: "Sample (< 5 kg)" },
    { value: "500kg", label: "500 kg - 1 ton" },
    { value: "1-5ton", label: "1 - 5 tons" },
    { value: "5-10ton", label: "5 - 10 tons" },
    { value: "10ton+", label: "10+ tons" },
  ];

  const validate = () => {
    const newErrors: Record<string, string> = {};
    
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) return;
    
    setIsSubmitting(true);

    const subjectMap = {
      contact: `New Inquiry from ${formData.name}`,
      quote: `Quote Request from ${formData.name}`,
      sample: `Sample Request from ${formData.name}`,
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
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: variant === "sample" ? "Sample Request Sent!" : "Message Sent!",
          description: "We'll get back to you within 24 hours.",
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
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (showSuccess) {
      const timer = setTimeout(() => setShowSuccess(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showSuccess]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const titles = {
    contact: "Send Us a Message",
    quote: "Request a Quote",
    sample: "Request Samples",
  };

  if (showSuccess) {
    return (
      <div className={`flex flex-col items-center justify-center py-12 space-y-4 ${className}`}>
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <CheckCircle2 className="h-8 w-8 text-primary" />
        </div>
        <h3 className="text-xl font-bold text-foreground">
          {variant === "sample" ? "Sample Request Sent!" : "Message Sent!"}
        </h3>
        <p className="text-muted-foreground text-center">
          We'll get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-6 ${className}`}>
      <h3 className="text-2xl font-bold text-foreground">{titles[variant]}</h3>
      
      <div className="grid gap-4 sm:grid-cols-2">
        <FormInput
          label="Full Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
          required
          placeholder="John Smith"
        />
        <FormInput
          label="Email Address"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          required
          placeholder="john@company.com"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <FormInput
          label="Company Name"
          name="company"
          value={formData.company}
          onChange={handleChange}
          error={errors.company}
          required
          placeholder="ABC Trading Co."
        />
        <FormInput
          label="Country"
          name="country"
          value={formData.country}
          onChange={handleChange}
          error={errors.country}
          required
          placeholder="United States"
        />
      </div>

      <FormInput
        label="Phone Number"
        name="phone"
        type="tel"
        value={formData.phone}
        onChange={handleChange}
        placeholder="+1 234 567 8900"
        helperText="Include country code"
      />

      {(variant === "quote" || variant === "sample") && (
        <div className="grid gap-4 sm:grid-cols-2">
          <FormSelect
            label="Product Interest"
            name="product"
            value={formData.product}
            onChange={handleChange}
            error={errors.product}
            options={productOptions}
            required
          />
          <FormSelect
            label="Estimated Quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            options={quantityOptions}
          />
        </div>
      )}

      <FormTextarea
        label={variant === "sample" ? "Sample Requirements" : "Your Message"}
        name="message"
        value={formData.message}
        onChange={handleChange}
        error={errors.message}
        required
        placeholder={
          variant === "sample"
            ? "Please describe your sample requirements, specifications, and intended use..."
            : "Tell us about your requirements, specifications, or questions..."
        }
      />

      <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
        {isSubmitting ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="h-5 w-5" />
            {variant === "sample" ? "Request Samples" : variant === "quote" ? "Request Quote" : "Send Message"}
          </>
        )}
      </Button>
    </form>
  );
}
