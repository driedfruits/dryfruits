import { useState } from "react";
import { useProductEditor } from "@/hooks/useProductEditor";
import { FormInput, FormTextarea, FormSelect } from "@/components/forms/FormElements";
import { Button } from "@/components/ui/button";
import { Save, Plus, Trash2, AlertTriangle, Loader2, Lock } from "lucide-react";
import {
  EditorSeoSection,
  EditorImagesSection,
  EditorPricingSection,
  EditorCertificationsSection,
  EditorAvailabilitySection,
  EditorPackagingSection,
  EditorLogisticsSection,
  EditorApplicationsSection,
  EditorFaqsSection,
  EditorRelatedSection,
  EditorSpecificationsSection,
} from "@/components/editor";

const ADMIN_PASSWORD = "dryfruits2024";

const ProductEditorPage = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState(false);

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="w-full max-w-sm space-y-4">
          <div className="text-center">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
              <Lock className="h-6 w-6 text-primary" />
            </div>
            <h1 className="text-xl font-bold text-foreground">Admin Access</h1>
            <p className="text-sm text-muted-foreground mt-1">Enter the admin password to continue</p>
          </div>
          <form onSubmit={(e) => {
            e.preventDefault();
            if (password === ADMIN_PASSWORD) {
              setAuthenticated(true);
              setAuthError(false);
            } else {
              setAuthError(true);
            }
          }} className="space-y-3">
            <FormInput
              label="Password"
              type="password"
              value={password}
              onChange={(e) => { setPassword(e.target.value); setAuthError(false); }}
              placeholder="Enter admin password"
              error={authError ? "Incorrect password" : undefined}
            />
            <Button type="submit" className="w-full">
              <Lock className="h-4 w-4 mr-2" /> Unlock
            </Button>
          </form>
        </div>
      </div>
    );
  }

  return <ProductEditorContent />;
};

const ProductEditorContent = () => {
  const editor = useProductEditor();

  if (editor.productsLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  const productOptions = editor.products.map((p) => ({ value: p.id, label: p.shortName }));
  const errorCount = Object.keys(editor.validationErrors).length;

  return (
    <div className="min-h-screen bg-background p-4 sm:p-8 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-foreground">Product Data Editor</h1>

      <div className="flex items-end gap-3 mb-4">
        <div className="flex-1">
          <FormSelect label="Select Product" options={productOptions} value={editor.selectedId} onChange={(e) => editor.handleProductChange(e.target.value)} />
        </div>
        <Button variant="outline" onClick={editor.handleNewProduct} className="mb-0.5">
          <Plus className="h-4 w-4 mr-1" /> New Product
        </Button>
      </div>

      {editor.isNewProduct && (
        <div className="rounded-lg border border-primary/50 bg-primary/5 p-3 mb-6 text-sm text-foreground">
          Creating a new product. The ID will be auto-generated from the product name.
        </div>
      )}

      <div className="mt-4 space-y-6">
        <EditorSeoSection name={editor.name} setName={editor.setName} shortName={editor.shortName} setShortName={editor.setShortName} tagline={editor.tagline} setTagline={editor.setTagline} description={editor.description} setDescription={editor.setDescription} metaTitle={editor.metaTitle} setMetaTitle={editor.setMetaTitle} metaDescription={editor.metaDescription} setMetaDescription={editor.setMetaDescription} keywords={editor.keywords} setKeywords={editor.setKeywords} errors={editor.validationErrors} />
        <EditorImagesSection productId={editor.selectedId || editor.name.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") || "new"} imgMain={editor.imgMain} setImgMain={editor.setImgMain} imgMainAlt={editor.imgMainAlt} setImgMainAlt={editor.setImgMainAlt} imgGallery={editor.imgGallery} updateGalleryImage={editor.updateGalleryImage} reorderGalleryImages={editor.reorderGalleryImages} />
        <div className="space-y-4 rounded-lg border border-border p-4">
          <p className="text-sm font-medium text-foreground">Trade Identification</p>
          <FormInput label="SKU" value={editor.sku} onChange={(e) => editor.setSku(e.target.value)} placeholder="e.g. DF-PAP-001" />
          <FormInput label="HS Code" value={editor.hsCode} onChange={(e) => editor.setHsCode(e.target.value)} placeholder="e.g. 0813.40.00" />
        </div>
        <div className="space-y-4 rounded-lg border border-border p-4">
          <p className="text-sm font-medium text-foreground">Product Description (Sensory)</p>
          <FormTextarea label="Flavor Profile" value={editor.flavorProfile} onChange={(e) => editor.setFlavorProfile(e.target.value)} placeholder="e.g. Sweet, tangy tropical flavor with caramelized notes" required error={editor.validationErrors.flavorProfile} />
          <FormInput label="Texture" value={editor.texture} onChange={(e) => editor.setTexture(e.target.value)} placeholder="e.g. Chewy, soft, slightly crispy edges" />
          <FormInput label="Processing Method" value={editor.specs.processingMethod || ""} onChange={(e) => editor.updateSpec("processingMethod", e.target.value)} placeholder="e.g. Sun-dried, Low-temp dehydrated, Freeze-dried" />
          <EditorApplicationsSection applications={editor.applications} addApplication={editor.addApplication} removeApplication={editor.removeApplication} />
        </div>
        <EditorPricingSection fobBase={editor.fobBase} setFobBase={editor.setFobBase} moq={editor.moq} setMoq={editor.setMoq} leadTime={editor.leadTime} setLeadTime={editor.setLeadTime} errors={editor.validationErrors} />
        <EditorSpecificationsSection specs={editor.specs} updateSpec={editor.updateSpec} errors={editor.validationErrors} />
        <EditorCertificationsSection certs={editor.certs} toggleCert={editor.toggleCert} errors={editor.validationErrors} />
        <EditorAvailabilitySection peakSeason={editor.peakSeason} setPeakSeason={editor.setPeakSeason} offPeakSeason={editor.offPeakSeason} setOffPeakSeason={editor.setOffPeakSeason} currentStatus={editor.currentStatus} setCurrentStatus={editor.setCurrentStatus} harvestMonths={editor.harvestMonths} setHarvestMonths={editor.setHarvestMonths} />
        <EditorPackagingSection productId={editor.selectedId || editor.name.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") || "new"} bulk={editor.packagingBulk} setBulk={editor.setPackagingBulk} retail={editor.packagingRetail} setRetail={editor.setPackagingRetail} retailImage={editor.packagingRetailImage} setRetailImage={editor.setPackagingRetailImage} bulkImage={editor.packagingBulkImage} setBulkImage={editor.setPackagingBulkImage} errors={editor.validationErrors} />
        <EditorLogisticsSection portOfLoading={editor.portOfLoading} setPortOfLoading={editor.setPortOfLoading} incoterms={editor.incoterms} setIncoterms={editor.setIncoterms} containerLoad20ft={editor.containerLoad20ft} setContainerLoad20ft={editor.setContainerLoad20ft} containerLoad40ft={editor.containerLoad40ft} setContainerLoad40ft={editor.setContainerLoad40ft} estimatedDelivery={editor.estimatedDelivery} setEstimatedDelivery={editor.setEstimatedDelivery} exportDocuments={editor.exportDocuments} setExportDocuments={editor.setExportDocuments} />
        <EditorFaqsSection faqs={editor.faqs} addFaq={editor.addFaq} removeFaq={editor.removeFaq} updateFaq={editor.updateFaq} />
        <EditorRelatedSection selectedId={editor.selectedId} relatedProducts={editor.relatedProducts} toggleRelated={editor.toggleRelated} allProducts={editor.products} />
      </div>

      {/* Action Bar */}
      <div className="mt-8 space-y-3">
        {errorCount > 0 && (
          <div className="rounded-lg border border-destructive/50 bg-destructive/10 p-4 text-sm text-destructive">
            <div className="flex items-center gap-2 font-medium mb-2">
              <AlertTriangle className="h-4 w-4" />
              {errorCount} required field{errorCount > 1 ? "s" : ""} missing:
            </div>
            <ul className="list-disc list-inside space-y-0.5 text-xs">
              {Object.values(editor.validationErrors).map((msg, i) => (
                <li key={i}>{msg}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex items-center gap-3">
          <Button onClick={editor.handleSave} disabled={editor.saving} className="flex-1">
            {editor.saving ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : <Save className="h-4 w-4 mr-2" />}
            {editor.isNewProduct ? "Create Product" : "Save Changes"}
          </Button>
          {!editor.isNewProduct && editor.selectedId && (
            <Button variant="destructive" onClick={editor.handleDelete} disabled={editor.deleting}>
              {editor.deleting ? <Loader2 className="h-4 w-4 mr-2 animate-spin" /> : <Trash2 className="h-4 w-4 mr-2" />}
              Delete
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductEditorPage;
