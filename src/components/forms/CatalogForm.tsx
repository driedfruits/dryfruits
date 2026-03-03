import { useState, useEffect } from "react";
import { FormInput } from "./FormElements";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Download, Loader2, CheckCircle2 } from "lucide-react";
import { WEB3FORMS_ACCESS_KEY } from "@/lib/constants";

interface CatalogFormProps {
  className?: string;
}

export function CatalogForm({ className }: CatalogFormProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    
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

  const handleSubmit = async (e: React.FormEvent) => {
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
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Catalog Request Received!",
          description: "Check your email for the download link.",
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  if (showSuccess) {
    return (
      <div className={`flex flex-col items-center justify-center py-10 space-y-3 ${className}`}>
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
          <CheckCircle2 className="h-7 w-7 text-primary" />
        </div>
        <h3 className="text-lg font-bold text-foreground">Catalog Request Received!</h3>
        <p className="text-sm text-muted-foreground text-center">Check your email for the download link.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
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
        label="Business Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
        required
        placeholder="john@company.com"
      />
      <FormInput
        label="Company Name"
        name="company"
        value={formData.company}
        onChange={handleChange}
        error={errors.company}
        required
        placeholder="ABC Trading Co."
      />
      <Button type="submit" size="lg" disabled={isSubmitting} className="w-full">
        {isSubmitting ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            Processing...
          </>
        ) : (
          <>
            <Download className="h-5 w-5" />
            Download Catalog
          </>
        )}
      </Button>
    </form>
  );
}
