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
import NewsletterSection from "@/components/NewsletterSection";
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
      <div className="bg-white">
        <AboutSection />
      </div>
      <ProjectsSection />
      <div className="bg-white">
        <TeamSection />
      </div>
      <ContactSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Index;
