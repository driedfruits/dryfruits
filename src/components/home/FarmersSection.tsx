import { memo } from "react";
import { OptimizedImage } from "@/components/ui/optimized-image";

interface FarmerPhoto {
  category: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}

const farmerPhotos: FarmerPhoto[] = [
  { category: "Farmers Families", src: "/placeholder.svg", alt: "Local farmer family supplying fresh tropical fruits to Indonesian dried fruit factory – family 1", width: 400, height: 300 },
  { category: "Farmers Families", src: "/placeholder.svg", alt: "Local farmer family supplying fresh tropical fruits to Indonesian dried fruit factory – family 2", width: 400, height: 300 },
  { category: "Fruits Plantations", src: "/placeholder.svg", alt: "Dragon fruit plantation supplying fresh fruits for dehydration in Indonesia", width: 400, height: 300 },
  { category: "Fruits Plantations", src: "/placeholder.svg", alt: "Papaya plantation supplying fresh fruits for dehydration in Indonesia", width: 400, height: 300 },
  { category: "Fruits Plantations", src: "/placeholder.svg", alt: "Mango plantation supplying fresh fruits for dehydration in Indonesia", width: 400, height: 300 },
];

const groupedPhotos = farmerPhotos.reduce<{ category: string; photos: FarmerPhoto[] }[]>(
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

export const FarmersSection = memo(function FarmersSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-12 text-center">
          Our Farmers and Fresh Fruits Suppliers
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
