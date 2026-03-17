import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import InsightsSection from "@/components/sections/InsightsSection";
import RoadmapSection from "@/components/sections/RoadmapSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ResearchSection from "@/components/sections/ResearchSection";
import TeamSection from "@/components/sections/TeamSection";
import LocationSection from "@/components/sections/LocationSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main style={{ padding: 0, margin: 0 }}>
        <HeroSection />
        <AboutSection />
        <InsightsSection />
        <RoadmapSection />
        <ProjectsSection />
        <ResearchSection />
        <TeamSection />
        <LocationSection />
        <Footer />
      </main>
    </>
  );
}
