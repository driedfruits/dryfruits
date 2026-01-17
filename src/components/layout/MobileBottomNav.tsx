import { NavLink } from "react-router-dom";
import { Home, Package, Gift, Mail, MessageCircle } from "lucide-react";
import { companyInfo } from "@/data/companyData";

const tabs = [
  { name: "Home", href: "/", icon: Home },
  { name: "Products", href: "/products", icon: Package },
  { name: "Samples", href: "/samples", icon: Gift },
  { name: "Contact", href: "/contact", icon: Mail },
];

export function MobileBottomNav() {
  const whatsappMessage = encodeURIComponent("Hello! I'm interested in your dried fruit products.");
  const whatsappUrl = `https://wa.me/${companyInfo.whatsapp}?text=${whatsappMessage}`;

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
        
        {/* WhatsApp Tab - External Link */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 flex-col items-center justify-center gap-1 min-h-[48px] min-w-[48px] py-2 text-whatsapp transition-colors duration-200 active:scale-95"
          aria-label="Contact us on WhatsApp"
        >
          <div className="rounded-full bg-whatsapp/10 p-2.5">
            <MessageCircle className="h-6 w-6" />
          </div>
          <span className="text-xs font-medium">WhatsApp</span>
        </a>
      </div>
    </nav>
  );
}
