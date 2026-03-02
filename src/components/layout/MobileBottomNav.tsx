import { NavLink } from "react-router-dom";
import { Package, Gift, MessageCircle } from "lucide-react";
import { useWhatsApp } from "@/hooks/useWhatsApp";

const tabs = [
  { name: "Products", href: "/products", icon: Package },
  { name: "Samples", href: "/samples", icon: Gift },
];

export function MobileBottomNav() {
  const { handleClick } = useWhatsApp({ source: "mobile_nav" });

  return (
    <nav 
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/95 backdrop-blur-md lg:hidden pb-safe"
      aria-label="Mobile navigation"
    >
      <div className="flex h-16 items-center justify-around">
        {tabs.map((tab) => (
          <NavLink
            key={tab.name}
            to={tab.href}
            className={({ isActive }) =>
              `flex flex-1 flex-col items-center justify-center gap-1 min-h-[48px] min-w-[48px] py-2 transition-colors duration-200 active:scale-95 ${
                isActive ? "text-primary" : "text-muted-foreground"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <div className={`rounded-full p-2.5 transition-colors ${isActive ? "bg-primary/10" : ""}`}>
                  <tab.icon className="h-6 w-6" />
                </div>
                <span className="text-xs font-medium">{tab.name}</span>
              </>
            )}
          </NavLink>
        ))}
        
        <button
          onClick={handleClick}
          className="flex flex-1 flex-col items-center justify-center gap-1 min-h-[48px] min-w-[48px] py-2 text-whatsapp transition-colors duration-200 active:scale-95"
          aria-label="Contact us on WhatsApp"
        >
          <div className="rounded-full bg-whatsapp/10 p-2.5">
            <MessageCircle className="h-6 w-6" />
          </div>
          <span className="text-xs font-medium">WhatsApp</span>
        </button>
      </div>
    </nav>
  );
}
