import {
  AboutStage,
  ContactStage,
  IntroStage,
  ProjectsStage,
} from "../components/stages";

export default function HomePage() {
  return (
    <>
      <IntroStage />
      <AboutStage />
      <ProjectsStage />
      <ContactStage />
    </>
  );
}
