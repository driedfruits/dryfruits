import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { useWhatsApp } from "@/hooks/useWhatsApp";

interface WhatsAppButtonProps {
  message?: string;
  className?: string;
  variant?: "floating" | "inline" | "full";
  size?: "sm" | "default" | "lg";
}

export function WhatsAppButton({ 
  message,
  className = "",
  variant = "inline",
  size = "default",
}: WhatsAppButtonProps) {
  const [isVisible, setIsVisible] = useState(false);
  const { handleClick } = useWhatsApp({ message, source: variant });
  
  useEffect(() => {
    if (variant !== "floating") return;
    const handleScroll = () => setIsVisible(window.scrollY > 200);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [variant]);

  if (variant === "floating") {
    return (
      <button
        onClick={handleClick}
        className={`fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-primary-foreground shadow-lg transition-all duration-300 hover:scale-110 animate-[pulse-glow_8s_ease-in-out_infinite] [animation-delay:3s] hover:[animation-play-state:paused] motion-reduce:animate-none ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        } ${className}`}
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="h-7 w-7" />
      </button>
    );
  }

  if (variant === "full") {
    return (
      <Button variant="whatsapp" size={size} className={className} onClick={handleClick}>
        <MessageCircle className="h-5 w-5" />
        Chat on WhatsApp
      </Button>
    );
  }

  return (
    <Button variant="whatsapp" size={size} className={className} onClick={handleClick}>
      <MessageCircle className="h-5 w-5" />
      WhatsApp
    </Button>
  );
}
