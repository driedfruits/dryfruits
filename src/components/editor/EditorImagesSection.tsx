import { FormInput } from "@/components/forms/FormElements";
import ImageUploader from "@/components/editor/ImageUploader";

interface EditorImagesSectionProps {
  productId: string;
  imgMain: string;
  setImgMain: (v: string) => void;
  imgMainAlt: string;
  setImgMainAlt: (v: string) => void;
  imgThumb: string;
  setImgThumb: (v: string) => void;
  imgThumbAlt: string;
  setImgThumbAlt: (v: string) => void;
  imgGallery: Array<{ src: string; alt: string }>;
  updateGalleryImage: (i: number, field: "src" | "alt", val: string) => void;
}

const EditorImagesSection = ({
  productId,
  imgMain,
  setImgMain,
  imgMainAlt,
  setImgMainAlt,
  imgThumb,
  setImgThumb,
  imgThumbAlt,
  setImgThumbAlt,
  imgGallery,
  updateGalleryImage,
}: EditorImagesSectionProps) => (
  <div className="space-y-4 rounded-lg border border-border p-4">
    <p className="text-sm font-medium text-foreground">Images</p>
    <p className="text-xs text-muted-foreground">Upload product images (JPEG, PNG, WebP — max 5 MB each).</p>

    {/* Main Image */}
    <div className="space-y-2">
      <p className="text-xs font-medium text-muted-foreground">Main Image</p>
      <ImageUploader
        currentSrc={imgMain}
        productId={productId}
        slot="main"
        onUploaded={setImgMain}
        onRemove={() => setImgMain("")}
      />
      <FormInput label="Main Image Alt Text" value={imgMainAlt} onChange={(e) => setImgMainAlt(e.target.value)} placeholder="Descriptive alt text for SEO" />
    </div>

    {/* Thumbnail */}
    <div className="space-y-2">
      <p className="text-xs font-medium text-muted-foreground">Thumbnail</p>
      <ImageUploader
        currentSrc={imgThumb}
        productId={productId}
        slot="thumbnail"
        onUploaded={setImgThumb}
        onRemove={() => setImgThumb("")}
      />
      <FormInput label="Thumbnail Alt Text" value={imgThumbAlt} onChange={(e) => setImgThumbAlt(e.target.value)} placeholder="Thumbnail alt text" />
    </div>

    {/* Gallery */}
    <div className="space-y-3">
      <p className="text-sm font-medium text-foreground">Gallery Images (4 slots)</p>
      {imgGallery.map((img, i) => (
        <div key={i} className="space-y-2 rounded border border-border/50 p-3">
          <p className="text-xs font-medium text-muted-foreground">Gallery {i + 1}</p>
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

export default EditorImagesSection;
