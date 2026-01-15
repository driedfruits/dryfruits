import { NavLink } from "@/components/NavLink";
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
            className="flex flex-1 flex-col items-center justify-center gap-1 py-2 text-muted-foreground transition-colors duration-200 active:scale-95"
            activeClassName="text-primary"
          >
            {({ isActive }: { isActive: boolean }) => (
              <>
                <div className={`rounded-full p-1.5 transition-colors ${isActive ? "bg-primary/10" : ""}`}>
                  <tab.icon className="h-5 w-5" />
                </div>
                <span className="text-[10px] font-medium">{tab.name}</span>
              </>
            )}
          </NavLink>
        ))}
        
        {/* WhatsApp Tab - External Link */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 flex-col items-center justify-center gap-1 py-2 text-whatsapp transition-colors duration-200 active:scale-95"
          aria-label="Contact us on WhatsApp"
        >
          <div className="rounded-full bg-whatsapp/10 p-1.5">
            <MessageCircle className="h-5 w-5" />
          </div>
          <span className="text-[10px] font-medium">WhatsApp</span>
        </a>
      </div>
    </nav>
  );
}
