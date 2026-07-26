import {
  ProjectsClosingScrollCue,
  ProjectsClosingStatement,
} from "@/components/features/projects";

export default function ProjectsClosingScene() {
  return (
    <section className="capability-closing js-capability-closing">
      <div className="capability-closing__inner">
        <ProjectsClosingStatement />
      </div>

      <ProjectsClosingScrollCue />
    </section>
  );
}
