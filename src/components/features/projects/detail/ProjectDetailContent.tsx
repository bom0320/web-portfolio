import type { ReactNode } from "react";

interface ProjectDetailContentProps {
  children: ReactNode;
}

export default function ProjectDetailContent({
  children,
}: ProjectDetailContentProps) {
  return (
    <div className="project-detail-content">
      <div className="project-detail-content__sections">{children}</div>
    </div>
  );
}
