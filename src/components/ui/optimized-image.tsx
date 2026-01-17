import { useState, useCallback } from "react";
import { cn } from "@/lib/utils";
import { Package } from "lucide-react";

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  aspectRatio?: "square" | "video" | "portrait" | "auto";
  placeholderSrc?: string;
  priority?: boolean;
  fallbackIcon?: React.ReactNode;
  width?: number;
  height?: number;
}

export function OptimizedImage({
  src,
  alt,
  className,
  aspectRatio = "square",
  placeholderSrc,
  priority = false,
  fallbackIcon,
  width,
  height,
  ...props
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [showImage, setShowImage] = useState(!!src);

  const aspectClasses = {
    square: "aspect-square",
    video: "aspect-video",
    portrait: "aspect-[3/4]",
    auto: "",
  };

  const handleLoad = useCallback(() => {
    setIsLoading(false);
  }, []);

  const handleError = useCallback(() => {
    setIsLoading(false);
    setHasError(true);
    setShowImage(false);
  }, []);

  // If no src or error, show fallback
  if (!src || hasError) {
    return (
      <div
        className={cn(
          "relative overflow-hidden bg-gradient-to-br from-secondary to-muted flex items-center justify-center",
          aspectClasses[aspectRatio],
          className
        )}
      >
        {fallbackIcon || (
          <Package className="h-20 w-20 text-muted-foreground/30" />
        )}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative overflow-hidden",
        aspectClasses[aspectRatio],
        className
      )}
    >
      {/* Skeleton loader with shimmer */}
      {isLoading && (
        <div className="absolute inset-0 image-skeleton" aria-hidden="true" />
      )}

      {/* Optional low-quality placeholder for blur-up */}
      {placeholderSrc && isLoading && (
        <img
          src={placeholderSrc}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover blur-xl scale-110"
        />
      )}

      {/* Main image */}
      {showImage && (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? "eager" : "lazy"}
          decoding={priority ? "sync" : "async"}
          fetchPriority={priority ? "high" : undefined}
          onLoad={handleLoad}
          onError={handleError}
          className={cn(
            "w-full h-full object-cover transition-all duration-500",
            isLoading ? "opacity-0 scale-105 blur-sm" : "opacity-100 scale-100 blur-0 animate-blur-up"
          )}
          {...props}
        />
      )}
    </div>
  );
}
