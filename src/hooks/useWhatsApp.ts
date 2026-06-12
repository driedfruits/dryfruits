import { useCallback, useMemo } from "react";
import { companyInfo } from "@/data/companyData";
import { trackGA4Event, trackFBPixelEvent } from "@/lib/analytics";
import { trackWhatsAppLead } from "@/lib/trackLeadEvents";

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
      // Unified lead-quality event (qualify_lead, channel=whatsapp).
      trackWhatsAppLead(whatsappUrl);
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    },
    [whatsappUrl, source, message]
  );

  return { whatsappUrl, handleClick };
}
