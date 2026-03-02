import { FormInput } from "@/components/forms/FormElements";
import ImagePreview from "@/components/products/ImagePreview";

interface EditorImagesSectionProps {
  imgMain: string;
  imgMainAlt: string;
  setImgMainAlt: (v: string) => void;
  imgThumb: string;
  imgThumbAlt: string;
  setImgThumbAlt: (v: string) => void;
  imgGallery: Array<{ src: string; alt: string }>;
  updateGalleryImage: (i: number, field: "alt", val: string) => void;
}

const EditorImagesSection = ({ imgMain, imgMainAlt, setImgMainAlt, imgThumb, imgThumbAlt, setImgThumbAlt, imgGallery, updateGalleryImage }: EditorImagesSectionProps) => (
  <div className="space-y-4 rounded-lg border border-border p-4">
    <p className="text-sm font-medium text-foreground">Images</p>
    <p className="text-xs text-muted-foreground">Image paths are managed in code. Edit alt text here for SEO.</p>
    {imgMain && (
      <div className="flex items-center gap-3">
        <ImagePreview src={imgMain} />
        <div className="flex-1">
          <p className="text-xs text-muted-foreground mb-1">{imgMain.split("/").pop()}</p>
          <FormInput label="Main Image Alt Text" value={imgMainAlt} onChange={(e) => setImgMainAlt(e.target.value)} placeholder="Descriptive alt text for SEO" />
        </div>
      </div>
    )}
    {imgThumb && (
      <div className="flex items-center gap-3">
        <ImagePreview src={imgThumb} />
        <div className="flex-1">
          <p className="text-xs text-muted-foreground mb-1">{imgThumb.split("/").pop()}</p>
          <FormInput label="Thumbnail Alt Text" value={imgThumbAlt} onChange={(e) => setImgThumbAlt(e.target.value)} placeholder="Thumbnail alt text" />
        </div>
      </div>
    )}
    {imgGallery.length > 0 && (
      <div className="space-y-3">
        <p className="text-sm font-medium text-foreground">Gallery</p>
        {imgGallery.map((img, i) => (
          <div key={i} className="flex items-center gap-3">
            <ImagePreview src={img.src} />
            <div className="flex-1">
              <p className="text-xs text-muted-foreground mb-1">{img.src.split("/").pop()}</p>
              <FormInput label={`Image ${i + 1} Alt`} value={img.alt} onChange={(e) => updateGalleryImage(i, "alt", e.target.value)} placeholder="Alt text" />
            </div>
          </div>
        ))}
      </div>
    )}
  </div>
);

export default EditorImagesSection;
