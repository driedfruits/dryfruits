import { jsx, jsxs } from "react/jsx-runtime";
import { A as Accordion, a as AccordionItem, b as AccordionTrigger, c as AccordionContent } from "./accordion-Blg67-Ce.js";
import { c as cn } from "../main.mjs";
function FAQAccordion({
  items,
  variant = "separated",
  className
}) {
  if (!items || items.length === 0) {
    return null;
  }
  if (variant === "contained") {
    return /* @__PURE__ */ jsx("div", { className: cn("bg-card rounded-xl p-6 shadow-soft", className), children: /* @__PURE__ */ jsx(Accordion, { type: "single", collapsible: true, className: "w-full", children: items.map((item, index) => /* @__PURE__ */ jsxs(AccordionItem, { value: `faq-${index}`, children: [
      /* @__PURE__ */ jsx(AccordionTrigger, { className: "text-left font-semibold text-foreground hover:text-primary hover:no-underline py-4", children: item.question }),
      /* @__PURE__ */ jsx(AccordionContent, { className: "text-muted-foreground pb-4", children: item.answer })
    ] }, index)) }) });
  }
  return /* @__PURE__ */ jsx(Accordion, { type: "single", collapsible: true, className: cn("space-y-4", className), children: items.map((item, index) => /* @__PURE__ */ jsxs(
    AccordionItem,
    {
      value: `faq-${index}`,
      className: "bg-card rounded-xl px-6 shadow-soft border-none",
      children: [
        /* @__PURE__ */ jsx(AccordionTrigger, { className: "text-left font-semibold text-foreground hover:text-primary hover:no-underline py-6", children: item.question }),
        /* @__PURE__ */ jsx(AccordionContent, { className: "text-muted-foreground pb-6", children: item.answer })
      ]
    },
    index
  )) });
}
export {
  FAQAccordion as F
};
