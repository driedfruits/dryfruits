import { useState, useEffect } from "react";
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
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    if (variant !== "floating") return;
    
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200);
    };
    
    // Check initial scroll position
    handleScroll();
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [variant]);

  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${companyInfo.whatsapp}?text=${encodedMessage}`;
  
  if (variant === "floating") {
    return (
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-primary-foreground shadow-lg transition-all duration-300 hover:scale-110 animate-[pulse-glow_8s_ease-in-out_infinite] [animation-delay:3s] hover:[animation-play-state:paused] motion-reduce:animate-none ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        } ${className}`}
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
