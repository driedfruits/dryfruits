import { useState, useRef, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Upload, X, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ImageUploaderProps {
  currentSrc: string;
  productId: string;
  slot: string;
  onUploaded: (url: string) => void;
  onRemove: () => void;
}

const ACCEPTED_TYPES = ["image/jpeg", "image/png", "image/webp"];
const ACCEPTED = ".jpg,.jpeg,.png,.webp";
const MAX_SIZE = 5 * 1024 * 1024;

const ImageUploader = ({ currentSrc, productId, slot, onUploaded, onRemove }: ImageUploaderProps) => {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const [dragOver, setDragOver] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const processFile = useCallback(async (file: File) => {
    if (!ACCEPTED_TYPES.includes(file.type)) {
      setError("Only JPEG, PNG, and WebP files are accepted");
      return;
    }
    if (file.size > MAX_SIZE) {
      setError("File must be under 5MB");
      return;
    }

    setError("");
    setUploading(true);

    const ext = file.name.split(".").pop()?.toLowerCase() || "jpg";
    const path = `${productId || "new"}/${slot}-${Date.now()}.${ext}`;

    const { error: uploadError } = await supabase.storage
      .from("product-images")
      .upload(path, file, { upsert: true });

    if (uploadError) {
      setError(uploadError.message);
      setUploading(false);
      return;
    }

    const { data } = supabase.storage.from("product-images").getPublicUrl(path);
    onUploaded(data.publicUrl);
    setUploading(false);
  }, [productId, slot, onUploaded]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) processFile(file);
    if (inputRef.current) inputRef.current.value = "";
  };

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files?.[0];
    if (file) processFile(file);
  }, [processFile]);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
  }, []);

  return (
    <div className="space-y-2">
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`flex items-center gap-2 rounded-lg border-2 border-dashed p-2 transition-colors ${
          dragOver
            ? "border-primary bg-primary/5"
            : "border-transparent"
        }`}
      >
        {currentSrc ? (
          <img
            src={currentSrc}
            alt="Preview"
            className="w-16 h-16 rounded border border-border object-cover shrink-0"
          />
        ) : (
          <div className="w-16 h-16 rounded border border-dashed border-border bg-muted flex items-center justify-center shrink-0">
            <Upload className="h-4 w-4 text-muted-foreground" />
          </div>
        )}
        <div className="flex flex-col gap-1">
          <div className="flex gap-1.5">
            <Button
              type="button"
              variant="outline"
              size="sm"
              disabled={uploading}
              onClick={() => inputRef.current?.click()}
            >
              {uploading ? (
                <Loader2 className="h-3.5 w-3.5 animate-spin" />
              ) : (
                <Upload className="h-3.5 w-3.5" />
              )}
              <span className="ml-1.5">{currentSrc ? "Replace" : "Upload"}</span>
            </Button>
            {currentSrc && (
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={onRemove}
                className="text-destructive hover:text-destructive"
              >
                <X className="h-3.5 w-3.5" />
              </Button>
            )}
          </div>
          <span className="text-[10px] text-muted-foreground">or drag & drop</span>
        </div>
        <input
          ref={inputRef}
          type="file"
          accept={ACCEPTED}
          onChange={handleChange}
          className="hidden"
        />
      </div>
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
};

export default ImageUploader;
