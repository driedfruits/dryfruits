import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  variant?: "separated" | "contained";
  className?: string;
}

export function FAQAccordion({ 
  items, 
  variant = "separated", 
  className 
}: FAQAccordionProps) {
  if (!items || items.length === 0) {
    return null;
  }

  if (variant === "contained") {
    return (
      <div className={cn("bg-card rounded-xl p-6 shadow-soft", className)}>
        <Accordion type="single" collapsible className="w-full">
          {items.map((item, index) => (
            <AccordionItem key={index} value={`faq-${index}`}>
              <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary hover:no-underline py-4">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    );
  }

  // Default: separated variant - each FAQ item is its own card
  return (
    <Accordion type="single" collapsible className={cn("space-y-4", className)}>
      {items.map((item, index) => (
        <AccordionItem 
          key={index} 
          value={`faq-${index}`}
          className="bg-card rounded-xl px-6 shadow-soft border-none"
        >
          <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary hover:no-underline py-6">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground pb-6">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
