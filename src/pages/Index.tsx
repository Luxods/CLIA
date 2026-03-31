import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HackathonSection from "@/components/HackathonSection";
import PartnersSection from "@/components/PartnersSection";
import ActivitiesSection from "@/components/ActivitiesSection";
import AboutSection from "@/components/AboutSection";
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
      <ActivitiesSection />
      <AboutSection />
      <ContactSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Index;
