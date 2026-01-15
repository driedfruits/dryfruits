import { Header } from "./Header";
import { Footer } from "./Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { generateOrganizationSchema, generateLocalBusinessSchema } from "@/lib/schema";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Organization & LocalBusiness Schema - Global */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateOrganizationSchema()),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateLocalBusinessSchema()),
        }}
      />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppButton variant="floating" />
    </div>
  );
}
