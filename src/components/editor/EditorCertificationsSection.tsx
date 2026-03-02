import { FormCheckbox } from "@/components/forms/FormElements";

const ALL_CERTIFICATIONS = [
  "USDA Organic", "EU Organic", "HACCP", "Halal", "ISO 22000", "Kosher", "BRC", "FSSC 22000", "GMP",
];

interface EditorCertificationsSectionProps {
  certs: string[];
  toggleCert: (cert: string) => void;
}

const EditorCertificationsSection = ({ certs, toggleCert }: EditorCertificationsSectionProps) => (
  <div className="space-y-2">
    <p className="text-sm font-medium text-foreground">Certifications</p>
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-1">
      {ALL_CERTIFICATIONS.map((cert) => (
        <FormCheckbox key={cert} label={cert} checked={certs.includes(cert)} onCheckedChange={() => toggleCert(cert)} />
      ))}
    </div>
  </div>
);

export default EditorCertificationsSection;
