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
      {/* Skip to main content link for keyboard users */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg"
      >
        Skip to main content
      </a>
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
      <main id="main-content" className="flex-1 pb-16 lg:pb-0">{children}</main>
      <Footer />
      {/* Floating WhatsApp - hidden on mobile, shown on desktop */}
      <WhatsAppButton variant="floating" className="hidden lg:flex" />
      {/* Mobile bottom navigation */}
      <MobileBottomNav />
    </div>
  );
}
