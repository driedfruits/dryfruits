import { Header } from "./Header";
import { Footer } from "./Footer";
import { MobileBottomNav } from "./MobileBottomNav";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ORGANIZATION_SCHEMA_STRING, LOCAL_BUSINESS_SCHEMA_STRING } from "@/lib/schema";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Organization & LocalBusiness Schema - Global (pre-stringified for performance) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: ORGANIZATION_SCHEMA_STRING }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: LOCAL_BUSINESS_SCHEMA_STRING }}
      />
      <Header />
      <main className="flex-1 pb-16 lg:pb-0">{children}</main>
      <Footer />
      {/* Floating WhatsApp - hidden on mobile, shown on desktop */}
      <WhatsAppButton variant="floating" className="hidden lg:flex" />
      {/* Mobile bottom navigation */}
      <MobileBottomNav />
    </div>
  );
}
