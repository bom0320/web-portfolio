import {
  ProjectsClosingScrollCue,
  ProjectsClosingStatement,
} from "@/components/features/projects";

export default function ProjectsClosingScene() {
  return (
    <section className="projects-closing js-projects-closing">
      <div className="projects-closing__inner">
        <ProjectsClosingStatement />
      </div>

      <ProjectsClosingScrollCue />
    </section>
  );
}
