import { type Product } from "@/data/companyData";
import { PrimaryButton } from "@/components/CTAButton";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { FileText } from "lucide-react";

interface StickyInquiryBarProps {
  product: Product;
}

export function StickyInquiryBar({ product }: StickyInquiryBarProps) {
  return (
    <div className="fixed bottom-16 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-t border-border shadow-lg lg:hidden">
      <div className="container py-4">
        <div className="flex items-center justify-between gap-3">
          <div className="flex-1 min-w-0">
            <p className="text-base font-medium text-foreground truncate">
              Bulk {product.shortName}?
            </p>
            <p className="text-sm text-muted-foreground">{product.pricing.fobBase}</p>
          </div>
          <div className="flex gap-2">
            <PrimaryButton to="/contact" size="sm">
              <FileText className="h-4 w-4 mr-1" />
              Quote
            </PrimaryButton>
            <WhatsAppButton 
              message={`Hi! I'm interested in bulk ${product.name}. MOQ: ${product.pricing.moq}`}
              size="sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
