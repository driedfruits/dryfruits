import { useState } from "react";
import { FormInput } from "@/components/forms/FormElements";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

interface EditorApplicationsSectionProps {
  applications: string[];
  addApplication: (app: string) => void;
  removeApplication: (i: number) => void;
}

const EditorApplicationsSection = ({ applications, addApplication, removeApplication }: EditorApplicationsSectionProps) => {
  const [newApp, setNewApp] = useState("");

  const handleAdd = () => {
    if (newApp.trim()) {
      addApplication(newApp.trim());
      setNewApp("");
    }
  };

  return (
    <div className="space-y-4 rounded-lg border border-border p-4">
      <p className="text-sm font-medium text-foreground">Applications</p>
      <div className="flex flex-wrap gap-2">
        {applications.map((app, i) => (
          <span key={i} className="inline-flex items-center gap-1 rounded-full bg-muted px-3 py-1 text-sm text-foreground">
            {app}
            <button onClick={() => removeApplication(i)} className="ml-1 text-muted-foreground hover:text-destructive">×</button>
          </span>
        ))}
      </div>
      <div className="flex gap-2">
        <FormInput label="" value={newApp} onChange={(e) => setNewApp(e.target.value)} placeholder="e.g. Snacking, Trail mix" onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), handleAdd())} />
        <Button variant="outline" size="sm" onClick={handleAdd} className="shrink-0 mt-auto">
          <Plus className="h-4 w-4 mr-1" /> Add
        </Button>
      </div>
    </div>
  );
};

export default EditorApplicationsSection;
