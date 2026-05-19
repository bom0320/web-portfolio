import { ContactStage, IntroStage, ProjectsStage } from "../components/stages";

export default function HomePage() {
  return (
    <>
      <IntroStage />
      <ProjectsStage />
      <ContactStage />
    </>
  );
}
