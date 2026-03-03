import { memo } from "react";
import { OptimizedImage } from "@/components/ui/optimized-image";

interface GalleryPhoto {
  category: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}

const galleryPhotos: GalleryPhoto[] = [
  { category: "Cold Storage of Fresh Fruits", src: "/placeholder.svg", alt: "Cold storage facility for fresh tropical fruits at Indonesian dried fruit factory – unit 1", width: 400, height: 300 },
  { category: "Cold Storage of Fresh Fruits", src: "/placeholder.svg", alt: "Cold storage facility for fresh tropical fruits at Indonesian dried fruit factory – unit 2", width: 400, height: 300 },
  { category: "Cleaning & Peeling Area", src: "/placeholder.svg", alt: "Fruit cleaning and peeling production line at dehydrated fruit manufacturing plant – station 1", width: 400, height: 300 },
  { category: "Cleaning & Peeling Area", src: "/placeholder.svg", alt: "Fruit cleaning and peeling production line at dehydrated fruit manufacturing plant – station 2", width: 400, height: 300 },
  { category: "Blanching", src: "/placeholder.svg", alt: "Industrial fruit blanching process at Indonesian dried fruit factory – line 1", width: 400, height: 300 },
  { category: "Blanching", src: "/placeholder.svg", alt: "Industrial fruit blanching process at Indonesian dried fruit factory – line 2", width: 400, height: 300 },
  { category: "Dehydration Ovens", src: "/placeholder.svg", alt: "Professional dehydration ovens for drying tropical fruits at export facility – oven 1", width: 400, height: 300 },
  { category: "Dehydration Ovens", src: "/placeholder.svg", alt: "Professional dehydration ovens for drying tropical fruits at export facility – oven 2", width: 400, height: 300 },
  { category: "Packaging", src: "/placeholder.svg", alt: "Bulk packaging area for wholesale dried fruit orders at Indonesian factory – line 1", width: 400, height: 300 },
  { category: "Packaging", src: "/placeholder.svg", alt: "Bulk packaging area for wholesale dried fruit orders at Indonesian factory – line 2", width: 400, height: 300 },
  { category: "Office", src: "/placeholder.svg", alt: "Export sales office at PT Dried Fruits Total Indonesia factory", width: 400, height: 300 },
  { category: "Pallets Ready for Delivery", src: "/placeholder.svg", alt: "Palletized dried fruit shipments ready for export delivery – batch 1", width: 400, height: 300 },
  { category: "Pallets Ready for Delivery", src: "/placeholder.svg", alt: "Palletized dried fruit shipments ready for export delivery – batch 2", width: 400, height: 300 },
  { category: "Container Stuffing", src: "/placeholder.svg", alt: "Container stuffing and loading of dried fruit export orders – container 1", width: 400, height: 300 },
  { category: "Container Stuffing", src: "/placeholder.svg", alt: "Container stuffing and loading of dried fruit export orders – container 2", width: 400, height: 300 },
];

// Group photos by category while preserving order
const groupedPhotos = galleryPhotos.reduce<{ category: string; photos: GalleryPhoto[] }[]>(
  (groups, photo) => {
    const last = groups[groups.length - 1];
    if (last && last.category === photo.category) {
      last.photos.push(photo);
    } else {
      groups.push({ category: photo.category, photos: [photo] });
    }
    return groups;
  },
  []
);

export const FactoryGallerySection = memo(function FactoryGallerySection() {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-12 text-center">
          Factory Photos
        </h2>

        <div className="space-y-10">
          {groupedPhotos.map((group) => (
            <div key={group.category}>
              <h3 className="text-lg font-semibold text-foreground mb-4">
                {group.category}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {group.photos.map((photo, idx) => (
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
          ))}
        </div>
      </div>
    </section>
  );
});
