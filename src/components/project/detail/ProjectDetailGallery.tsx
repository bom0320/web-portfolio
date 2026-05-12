import Image from "next/image";

interface ProjectDetailGalleryProps {
  images: string[];
}

export default function ProjectDetailGallery({
  images,
}: ProjectDetailGalleryProps) {
  return (
    <div className="project-detail-gallery">
      {images.map((src, index) => (
        <div className="project-detail-gallery__item" key={`${src}-${index}`}>
          <Image
            src={src}
            alt={`project detail ${index + 1}`}
            fill
            className="project-detail-gallery__image"
            sizes="(max-width: 1024px) 90vw, 720px"
          />
        </div>
      ))}
    </div>
  );
}
