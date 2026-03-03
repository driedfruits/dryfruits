import { memo } from "react";
import { OptimizedImage } from "@/components/ui/optimized-image";

const farmerPhotos = [
  { src: "/placeholder.svg", alt: "Local farmer family supplying fresh tropical fruits to Indonesian dried fruit factory – family 1", width: 400, height: 300 },
  { src: "/placeholder.svg", alt: "Local farmer family supplying fresh tropical fruits to Indonesian dried fruit factory – family 2", width: 400, height: 300 },
  { src: "/placeholder.svg", alt: "Dragon fruit plantation supplying fresh fruits for dehydration in Indonesia", width: 400, height: 300 },
  { src: "/placeholder.svg", alt: "Papaya plantation supplying fresh fruits for dehydration in Indonesia", width: 400, height: 300 },
  { src: "/placeholder.svg", alt: "Mango plantation supplying fresh fruits for dehydration in Indonesia", width: 400, height: 300 },
  { src: "/placeholder.svg", alt: "Local farmer family harvesting fresh pineapples for dried fruit production – family 3", width: 400, height: 300 },
  { src: "/placeholder.svg", alt: "Coconut plantation supplying fresh coconuts for dehydrated coconut chips in Indonesia", width: 400, height: 300 },
  { src: "/placeholder.svg", alt: "Banana plantation supplying fresh bananas for dried banana production in Indonesia", width: 400, height: 300 },
  { src: "/placeholder.svg", alt: "Jackfruit plantation supplying fresh jackfruit for dehydration in Indonesia", width: 400, height: 300 },
  { src: "/placeholder.svg", alt: "Local farmer family delivering fresh guava harvest to dried fruit factory – family 4", width: 400, height: 300 },
];

export const FarmersSection = memo(function FarmersSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-12 text-center">
          Our Farmers and Fresh Fruits Suppliers
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {farmerPhotos.map((photo, idx) => (
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
