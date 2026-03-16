import { useCallback, useMemo } from "react";
import { companyInfo } from "@/data/companyData";
import { trackGA4Event, trackFBPixelEvent } from "@/lib/analytics";

interface UseWhatsAppOptions {
  message?: string;
  source?: string;
}

export function useWhatsApp({
  message = "Hello! I'm interested in your dried fruit products.",
  source = "unknown",
}: UseWhatsAppOptions = {}) {
  const whatsappUrl = useMemo(() => {
    const encoded = encodeURIComponent(message);
    return `https://wa.me/${companyInfo.whatsapp}?text=${encoded}`;
  }, [message]);

  const handleClick = useCallback(
    (e?: React.MouseEvent) => {
      e?.preventDefault();
      trackGA4Event("whatsapp_click", {
        source,
        message_preview: message.slice(0, 100),
      });
      trackFBPixelEvent("Contact", {
        content_name: "WhatsApp",
        source,
      });
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    },
    [whatsappUrl, source, message]
  );

  return { whatsappUrl, handleClick };
}
