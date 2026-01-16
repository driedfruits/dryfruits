import { type Product } from "@/data/companyData";
import { FAQAccordion } from "@/components/ui/faq-accordion";

interface ProductFAQProps {
  faqs: Product["faqs"];
  productName: string;
}

export function ProductFAQ({ faqs, productName }: ProductFAQProps) {
  if (!faqs || faqs.length === 0) {
    return null;
  }

  return (
    <section className="py-12">
      <div className="container">
        <h2 className="text-2xl font-bold text-foreground mb-6">FAQ for {productName} Importers</h2>
        <FAQAccordion items={faqs} variant="separated" />
      </div>
    </section>
  );
}
