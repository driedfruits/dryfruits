import { memo } from "react";
import { PrimaryButton, SecondaryButton } from "@/components/CTAButton";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const FinalCTASection = memo(function FinalCTASection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Placeholder */}
      <div className="absolute inset-0">
        <div className="w-full h-full bg-muted" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/95" />
      </div>
      
      <div className="container relative text-center">
        <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-4">
          Ready to Partner With Us?
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Whether you need samples, quotes, or have questions - our export team is ready to help.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <PrimaryButton to="/contact" size="xl">
            Request a Quote
          </PrimaryButton>
          <SecondaryButton to="/samples" size="lg">
            Request Samples
          </SecondaryButton>
          <WhatsAppButton variant="full" size="lg" />
        </div>
      </div>
    </section>
  );
});
