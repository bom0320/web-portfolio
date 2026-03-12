import Image from "next/image";

interface ProjectShowcaseThumbsProps {
  id: string;
  title: string;
  thumbnails: string[];
}

export default function ProjectShowcaseThumbs({
  id,
  title,
  thumbnails,
}: ProjectShowcaseThumbsProps) {
  return (
    <div className="project-showcase__thumbs">
      {thumbnails.map((thumbnail, index) => (
        <div className="project-showcase__thumb" key={`${id}-${index}`}>
          <Image
            src={thumbnail}
            alt={`${title} thumbnail ${index + 1}`}
            fill
            className="project-showcase__thumb-image"
            sizes="(max-width: 1024px) 40vw, 15vw"
          />
        </div>
      ))}
    </div>
  );
}
