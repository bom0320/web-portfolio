import Image from "next/image";

interface ProjectFrameThumbsProps {
  id: string;
  title: string;
  thumbnails: string[];
}

export default function ProjectFrameThumbs({
  id,
  title,
  thumbnails,
}: ProjectFrameThumbsProps) {
  return (
    <div className="project-frame__thumbs">
      {thumbnails.map((thumbnail, index) => (
        <div className="project-frame__thumb" key={`${id}-${index}`}>
          <Image
            src={thumbnail}
            alt={`${title} thumbnail ${index + 1}`}
            fill
            className="project-frame__thumb-image"
            sizes="(max-width: 1024px) 25vw, 18vw"
          />
        </div>
      ))}
    </div>
  );
}
