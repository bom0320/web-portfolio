import {
  BuildStage,
  ContactStage,
  IntroStage,
  ProjectsStage,
} from "@/components/stages";

export default function HomePage() {
  return (
    <>
      <IntroStage />
      <BuildStage />
      <ProjectsStage />
      <ContactStage />
    </>
  );
}
