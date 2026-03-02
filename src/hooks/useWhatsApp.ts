import { useCallback, useMemo } from "react";
import { companyInfo } from "@/data/companyData";

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
      // Analytics stub — swap for GA/GTM/Plausible later
      console.log(JSON.stringify({
        event: "whatsapp_click",
        source,
        message,
        timestamp: new Date().toISOString(),
      }));
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    },
    [whatsappUrl, source, message]
  );

  return { whatsappUrl, handleClick };
}
