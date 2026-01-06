import { companyInfo } from "@/data/companyData";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  message?: string;
  className?: string;
  variant?: "floating" | "inline" | "full";
  size?: "sm" | "default" | "lg";
}

export function WhatsAppButton({ 
  message = `Hello! I'm interested in your dried fruit products.`,
  className = "",
  variant = "inline",
  size = "default",
}: WhatsAppButtonProps) {
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${companyInfo.whatsapp}?text=${encodedMessage}`;
  
  if (variant === "floating") {
    return (
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-primary-foreground shadow-lg transition-transform hover:scale-110 animate-pulse-glow ${className}`}
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
    );
  }

  if (variant === "full") {
    return (
      <Button
        asChild
        variant="whatsapp"
        size={size}
        className={className}
      >
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
          <MessageCircle className="h-5 w-5" />
          Chat on WhatsApp
        </a>
      </Button>
    );
  }

  return (
    <Button
      asChild
      variant="whatsapp"
      size={size}
      className={className}
    >
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
        <MessageCircle className="h-5 w-5" />
        WhatsApp
      </a>
    </Button>
  );
}
