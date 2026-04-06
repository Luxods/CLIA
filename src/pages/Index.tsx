import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HackathonSection from "@/components/HackathonSection";
import PartnersSection from "@/components/PartnersSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import HashScrollEffect from "@/components/HashScrollEffect";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <HashScrollEffect />
      <AnimatedBackground />
      <Navbar />
      <HeroSection />
      <HackathonSection />
      <PartnersSection />
      <div className="bg-white" data-nav-bg="light">
        <AboutSection />
      </div>
      <ProjectsSection />
      <div className="bg-white" data-nav-bg="light">
        <TeamSection />
      </div>
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
