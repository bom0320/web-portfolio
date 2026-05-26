import {
  CapabilityStage,
  ContactStage,
  IntroStage,
  ProjectsStage,
} from "../components/stages";

export default function HomePage() {
  return (
    <>
      <IntroStage />

      <CapabilityStage />

      <ProjectsStage />

      <ContactStage />
    </>
  );
}
