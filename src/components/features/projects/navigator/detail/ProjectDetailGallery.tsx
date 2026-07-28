"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface ProjectDetailGalleryProps {
  title: string;
  images: string[];
}

export default function ProjectDetailGallery({
  title,
  images,
}: ProjectDetailGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleClose = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    if (!selectedImage) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage]);

  return (
    <>
      <div className="project-detail-gallery">
        {images.map((src, index) => (
          <button
            type="button"
            className="project-detail-gallery__item"
            key={`${src}-${index}`}
            onClick={() => setSelectedImage(src)}
            aria-label={`${title} detail image ${index + 1} 크게 보기`}
          >
            <Image
              src={src}
              alt={`${title} detail image ${index + 1}`}
              fill
              className="project-detail-gallery__image"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 720px"
            />
          </button>
        ))}
      </div>

      {selectedImage && (
        <div
          className="project-detail-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${title} 이미지 크게 보기`}
          onClick={handleClose}
        >
          <button
            type="button"
            className="project-detail-lightbox__close"
            onClick={handleClose}
            aria-label="이미지 닫기"
          >
            ×
          </button>

          <div
            className="project-detail-lightbox__image-wrap"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt={`${title} enlarged detail image`}
              fill
              className="project-detail-lightbox__image"
              sizes="100vw"
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}
