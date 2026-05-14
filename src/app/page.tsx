import {
  ContactStage,
  ProfileStage,
  ProjectsStage,
} from "../components/stages";

export default function HomePage() {
  return (
    <>
      <ProfileStage />
      <ProjectsStage />
      <ContactStage />
    </>
  );
}
