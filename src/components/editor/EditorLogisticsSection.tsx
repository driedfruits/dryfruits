import { FormInput, FormTextarea } from "@/components/forms/FormElements";

interface EditorLogisticsSectionProps {
  portOfLoading: string;
  setPortOfLoading: (v: string) => void;
  incoterms: string;
  setIncoterms: (v: string) => void;
  containerLoad20ft: string;
  setContainerLoad20ft: (v: string) => void;
  containerLoad40ft: string;
  setContainerLoad40ft: (v: string) => void;
  exportDocuments: string;
  setExportDocuments: (v: string) => void;
}

const EditorLogisticsSection = ({ portOfLoading, setPortOfLoading, incoterms, setIncoterms, containerLoad20ft, setContainerLoad20ft, containerLoad40ft, setContainerLoad40ft, exportDocuments, setExportDocuments }: EditorLogisticsSectionProps) => (
  <div className="space-y-4 rounded-lg border border-border p-4">
    <p className="text-sm font-medium text-foreground">Logistics</p>
    <FormInput label="Port of Loading" value={portOfLoading} onChange={(e) => setPortOfLoading(e.target.value)} placeholder="e.g. Semarang, Indonesia" />
    <FormInput label="Incoterms (comma-separated)" value={incoterms} onChange={(e) => setIncoterms(e.target.value)} placeholder="e.g. FOB, CIF, CFR" />
    <FormInput label="Container Load 20ft" value={containerLoad20ft} onChange={(e) => setContainerLoad20ft(e.target.value)} placeholder="e.g. 15-18 MT" />
    <FormInput label="Container Load 40ft" value={containerLoad40ft} onChange={(e) => setContainerLoad40ft(e.target.value)} placeholder="e.g. 22-26 MT" />
    <FormTextarea label="Export Documents (one per line)" value={exportDocuments} onChange={(e) => setExportDocuments(e.target.value)} placeholder={"e.g.\nCertificate of Origin\nPhytosanitary Certificate\nHealth Certificate"} />
  </div>
);

export default EditorLogisticsSection;
