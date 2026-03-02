import { useState } from "react";

interface ImagePreviewProps {
  src: string;
}

const ImagePreview = ({ src }: ImagePreviewProps) => {
  const [error, setError] = useState(false);

  if (!src) {
    return (
      <div className="w-16 h-16 rounded border border-border bg-muted flex items-center justify-center shrink-0">
        <span className="text-[10px] text-muted-foreground">No image</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-16 h-16 rounded border-2 border-destructive bg-muted flex items-center justify-center shrink-0">
        <span className="text-[10px] text-destructive">Not found</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt="Preview"
      onError={() => setError(true)}
      className="w-16 h-16 rounded border border-border object-cover shrink-0"
    />
  );
};

export default ImagePreview;
