import { memo } from "react";
import { OptimizedImage } from "@/components/ui/optimized-image";

const galleryPhotos = [
  { src: "/placeholder.svg", alt: "Cold storage facility for fresh tropical fruits at Indonesian dried fruit factory – unit 1", width: 400, height: 300 },
  { src: "/placeholder.svg", alt: "Cold storage facility for fresh tropical fruits at Indonesian dried fruit factory – unit 2", width: 400, height: 300 },
  { src: "/placeholder.svg", alt: "Fruit cleaning and peeling production line at dehydrated fruit manufacturing plant – station 1", width: 400, height: 300 },
  { src: "/placeholder.svg", alt: "Fruit cleaning and peeling production line at dehydrated fruit manufacturing plant – station 2", width: 400, height: 300 },
  { src: "/placeholder.svg", alt: "Industrial fruit blanching process at Indonesian dried fruit factory – line 1", width: 400, height: 300 },
  { src: "/placeholder.svg", alt: "Industrial fruit blanching process at Indonesian dried fruit factory – line 2", width: 400, height: 300 },
  { src: "/placeholder.svg", alt: "Professional dehydration ovens for drying tropical fruits at export facility – oven 1", width: 400, height: 300 },
  { src: "/placeholder.svg", alt: "Professional dehydration ovens for drying tropical fruits at export facility – oven 2", width: 400, height: 300 },
  { src: "/placeholder.svg", alt: "Bulk packaging area for wholesale dried fruit orders at Indonesian factory – line 1", width: 400, height: 300 },
  { src: "/placeholder.svg", alt: "Bulk packaging area for wholesale dried fruit orders at Indonesian factory – line 2", width: 400, height: 300 },
  { src: "/placeholder.svg", alt: "Export sales office at PT Dried Fruits Total Indonesia factory", width: 400, height: 300 },
  { src: "/placeholder.svg", alt: "Palletized dried fruit shipments ready for export delivery – batch 1", width: 400, height: 300 },
  { src: "/placeholder.svg", alt: "Palletized dried fruit shipments ready for export delivery – batch 2", width: 400, height: 300 },
  { src: "/placeholder.svg", alt: "Container stuffing and loading of dried fruit export orders – container 1", width: 400, height: 300 },
  { src: "/placeholder.svg", alt: "Container stuffing and loading of dried fruit export orders – container 2", width: 400, height: 300 },
];

export const FactoryGallerySection = memo(function FactoryGallerySection() {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-12 text-center">
          Factory Photos
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {galleryPhotos.map((photo, idx) => (
            <div key={idx} className="rounded-xl overflow-hidden bg-muted">
              <OptimizedImage
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                aspectRatio="video"
                className="w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});
