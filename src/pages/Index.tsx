import Navbar from "@/components/Navbar";
import DigitalSystemsBackdrop from "@/components/DigitalSystemsBackdrop";
import HeroSection from "@/components/HeroSection";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="main-page-shell min-h-screen bg-background">
      <DigitalSystemsBackdrop />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <WhatWeDoSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <FooterSection />
    </div>
  );
};

export default Index;
