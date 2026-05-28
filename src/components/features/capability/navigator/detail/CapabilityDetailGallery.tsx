import Image from "next/image";

interface CapabilityDetailGalleryProps {
  images: string[];
}

export default function CapabilityDetailGallery({
  images,
}: CapabilityDetailGalleryProps) {
  return (
    <div className="capability-detail-gallery">
      {images.map((src, index) => (
        <div
          className="capability-detail-gallery__item"
          key={`${src}-${index}`}
        >
          <Image
            src={src}
            alt={`capability detail ${index + 1}`}
            fill
            className="capability-detail-gallery__image"
            sizes="(max-width: 1024px) 90vw, 720px"
          />
        </div>
      ))}
    </div>
  );
}
