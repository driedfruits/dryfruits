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
    <div className="flex items-center gap-3">
      {imgMain ? <ImagePreview src={imgMain} /> : <div className="w-10 h-10 rounded bg-muted flex items-center justify-center text-xs text-muted-foreground">Main</div>}
      <div className="flex-1">
        {imgMain && <p className="text-xs text-muted-foreground mb-1">{imgMain.split("/").pop()}</p>}
        <FormInput label="Main Image Alt Text" value={imgMainAlt} onChange={(e) => setImgMainAlt(e.target.value)} placeholder="Descriptive alt text for SEO" />
      </div>
    </div>
    <div className="flex items-center gap-3">
      {imgThumb ? <ImagePreview src={imgThumb} /> : <div className="w-10 h-10 rounded bg-muted flex items-center justify-center text-xs text-muted-foreground">Thumb</div>}
      <div className="flex-1">
        {imgThumb && <p className="text-xs text-muted-foreground mb-1">{imgThumb.split("/").pop()}</p>}
        <FormInput label="Thumbnail Alt Text" value={imgThumbAlt} onChange={(e) => setImgThumbAlt(e.target.value)} placeholder="Thumbnail alt text" />
      </div>
    </div>
    <div className="space-y-3">
      <p className="text-sm font-medium text-foreground">Thumbnail Alt Text (4 slots)</p>
      {imgGallery.map((img, i) => (
        <div key={i} className="flex items-center gap-3">
          {img.src ? <ImagePreview src={img.src} /> : <div className="w-10 h-10 rounded bg-muted flex items-center justify-center text-xs text-muted-foreground">{i + 1}</div>}
          <div className="flex-1">
            <FormInput label={`Thumbnail ${i + 1} Alt`} value={img.alt} onChange={(e) => updateGalleryImage(i, "alt", e.target.value)} placeholder={`Alt text for thumbnail ${i + 1}`} />
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default EditorImagesSection;
