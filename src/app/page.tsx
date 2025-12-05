import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";
import LifeMotionSection from "@/components/sections/LifeMotionSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <LifeMotionSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}
