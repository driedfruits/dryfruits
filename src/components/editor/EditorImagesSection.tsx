import { useState, useCallback } from "react";
import { FormInput } from "@/components/forms/FormElements";
import ImageUploader from "@/components/editor/ImageUploader";
import { GripVertical } from "lucide-react";

interface EditorImagesSectionProps {
  productId: string;
  imgMain: string;
  setImgMain: (v: string) => void;
  imgMainAlt: string;
  setImgMainAlt: (v: string) => void;
  imgGallery: Array<{ src: string; alt: string }>;
  updateGalleryImage: (i: number, field: "src" | "alt", val: string) => void;
  reorderGalleryImages: (fromIndex: number, toIndex: number) => void;
}

const EditorImagesSection = ({
  productId,
  imgMain, setImgMain, imgMainAlt, setImgMainAlt,
  imgGallery, updateGalleryImage, reorderGalleryImages,
}: EditorImagesSectionProps) => {
  const [dragIdx, setDragIdx] = useState<number | null>(null);
  const [overIdx, setOverIdx] = useState<number | null>(null);

  const handleDragStart = useCallback((e: React.DragEvent, i: number) => {
    setDragIdx(i);
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/plain", String(i));
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent, i: number) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    setOverIdx(i);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent, toIndex: number) => {
    e.preventDefault();
    const fromIndex = dragIdx;
    setDragIdx(null);
    setOverIdx(null);
    if (fromIndex !== null && fromIndex !== toIndex) {
      reorderGalleryImages(fromIndex, toIndex);
    }
  }, [dragIdx, reorderGalleryImages]);

  const handleDragEnd = useCallback(() => {
    setDragIdx(null);
    setOverIdx(null);
  }, []);

  return (
    <div className="space-y-4 rounded-lg border border-border p-4">
      <p className="text-sm font-medium text-foreground">Images</p>
      <p className="text-xs text-muted-foreground">Upload product images (JPEG, PNG, WebP — max 5 MB each).</p>

      {/* Main Image */}
      <div className="space-y-2">
        <p className="text-xs font-medium text-muted-foreground">Main Image</p>
        <ImageUploader currentSrc={imgMain} productId={productId} slot="main" onUploaded={setImgMain} onRemove={() => setImgMain("")} />
        <FormInput label="Main Image Alt Text" value={imgMainAlt} onChange={(e) => setImgMainAlt(e.target.value)} placeholder="Descriptive alt text for SEO" />
      </div>

      {/* Gallery */}
      <div className="space-y-3">
        <p className="text-sm font-medium text-foreground">Gallery Images (4 slots)</p>
        <p className="text-xs text-muted-foreground">Drag the handle to reorder gallery images.</p>
        {imgGallery.map((img, i) => (
          <div
            key={i}
            draggable
            onDragStart={(e) => handleDragStart(e, i)}
            onDragOver={(e) => handleDragOver(e, i)}
            onDrop={(e) => handleDrop(e, i)}
            onDragEnd={handleDragEnd}
            className={`space-y-2 rounded border p-3 transition-colors ${
              overIdx === i && dragIdx !== null && dragIdx !== i
                ? "border-primary bg-primary/5"
                : dragIdx === i
                  ? "border-muted opacity-50"
                  : "border-border/50"
            }`}
          >
            <div className="flex items-center gap-2">
              <GripVertical className="h-4 w-4 text-muted-foreground cursor-grab shrink-0" />
              <p className="text-xs font-medium text-muted-foreground">Gallery {i + 1}</p>
            </div>
            <ImageUploader
              currentSrc={img.src}
              productId={productId}
              slot={`gallery-${i}`}
              onUploaded={(url) => updateGalleryImage(i, "src", url)}
              onRemove={() => updateGalleryImage(i, "src", "")}
            />
            <FormInput label={`Gallery ${i + 1} Alt`} value={img.alt} onChange={(e) => updateGalleryImage(i, "alt", e.target.value)} placeholder={`Alt text for gallery image ${i + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EditorImagesSection;
