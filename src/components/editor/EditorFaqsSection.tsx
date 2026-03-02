import { FormInput, FormTextarea } from "@/components/forms/FormElements";
import { Button } from "@/components/ui/button";
import { Plus, Trash2 } from "lucide-react";

interface EditorFaqsSectionProps {
  faqs: Array<{ question: string; answer: string }>;
  addFaq: () => void;
  removeFaq: (i: number) => void;
  updateFaq: (i: number, field: "question" | "answer", val: string) => void;
}

const EditorFaqsSection = ({ faqs, addFaq, removeFaq, updateFaq }: EditorFaqsSectionProps) => (
  <div className="space-y-4 rounded-lg border border-border p-4">
    <p className="text-sm font-medium text-foreground">FAQs</p>
    {faqs.map((faq, i) => (
      <div key={i} className="space-y-2 rounded-lg border border-border p-3">
        <div className="flex items-start gap-2">
          <div className="flex-1 space-y-2">
            <FormInput label="Question" value={faq.question} onChange={(e) => updateFaq(i, "question", e.target.value)} placeholder="e.g. What are the microbiological specifications?" />
            <FormTextarea label="Answer" value={faq.answer} onChange={(e) => updateFaq(i, "answer", e.target.value)} placeholder="Detailed answer..." />
          </div>
          <Button variant="ghost" size="icon" onClick={() => removeFaq(i)} className="shrink-0 mt-6">
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>
    ))}
    <Button variant="outline" size="sm" onClick={addFaq}>
      <Plus className="h-4 w-4 mr-1" /> Add FAQ
    </Button>
  </div>
);

export default EditorFaqsSection;
