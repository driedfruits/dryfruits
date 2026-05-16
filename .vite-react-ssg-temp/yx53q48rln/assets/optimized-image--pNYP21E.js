import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useCallback } from "react";
import { c as cn } from "../main.mjs";
import { Package } from "lucide-react";
function OptimizedImage({
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
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [showImage, setShowImage] = useState(!!src);
  const aspectClasses = {
    square: "aspect-square",
    video: "aspect-video",
    portrait: "aspect-[3/4]",
    auto: ""
  };
  const handleLoad = useCallback(() => {
    setIsLoading(false);
  }, []);
  const handleError = useCallback(() => {
    setIsLoading(false);
    setHasError(true);
    setShowImage(false);
  }, []);
  if (!src || hasError) {
    return /* @__PURE__ */ jsx(
      "div",
      {
        className: cn(
          "relative overflow-hidden bg-gradient-to-br from-secondary to-muted flex items-center justify-center",
          aspectClasses[aspectRatio],
          className
        ),
        children: fallbackIcon || /* @__PURE__ */ jsx(Package, { className: "h-20 w-20 text-muted-foreground/30" })
      }
    );
  }
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        "relative overflow-hidden",
        aspectClasses[aspectRatio],
        className
      ),
      children: [
        isLoading && /* @__PURE__ */ jsx("div", { className: "absolute inset-0 image-skeleton", "aria-hidden": "true" }),
        placeholderSrc && isLoading && /* @__PURE__ */ jsx(
          "img",
          {
            src: placeholderSrc,
            alt: "",
            "aria-hidden": "true",
            className: "absolute inset-0 w-full h-full object-cover blur-xl scale-110"
          }
        ),
        showImage && /* @__PURE__ */ jsx(
          "img",
          {
            src,
            alt,
            width,
            height,
            loading: priority ? "eager" : "lazy",
            decoding: priority ? "sync" : "async",
            fetchPriority: priority ? "high" : void 0,
            onLoad: handleLoad,
            onError: handleError,
            className: cn(
              "w-full h-full object-cover transition-all duration-500",
              isLoading ? "opacity-0 scale-105 blur-sm" : "opacity-100 scale-100 blur-0 animate-blur-up"
            ),
            ...props
          }
        )
      ]
    }
  );
}
export {
  OptimizedImage as O
};
