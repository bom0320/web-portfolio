import {
  CapabilityStage,
  ContactStage,
  IntroStage,
} from "../components/stages";

export default function HomePage() {
  return (
    <>
      <IntroStage />
      <CapabilityStage />

      <ContactStage />
    </>
  );
}
