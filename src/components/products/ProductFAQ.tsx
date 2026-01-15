import { type Product } from "@/data/companyData";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

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
        <div className="bg-card rounded-xl p-6 shadow-soft">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`}>
                <AccordionTrigger className="text-left font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
