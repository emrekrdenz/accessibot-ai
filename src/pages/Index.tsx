import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LogoStripSection from "@/components/LogoStripSection";
import ProblemSection from "@/components/ProblemSection";
import TechSolutions from "@/components/TechSolutions";
import FeaturesSection from "@/components/FeaturesSection";
import SimulationSection from "@/components/SimulationSection";
import StatisticsSection from "@/components/StatisticsSection";
import HowItWorksSection from "@/components/HowItWorksSection";

import SocialProofSection from "@/components/SocialProofSection";
import PricingSection from "@/components/PricingSection";
import ROISection from "@/components/ROISection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen font-outfit">
      <Navbar />
      <main>
        <HeroSection />
        <LogoStripSection />
        <ProblemSection />
        <TechSolutions />
        <FeaturesSection />
        <SimulationSection />
        <StatisticsSection />
        <HowItWorksSection />

        <SocialProofSection />
        <PricingSection />
        <ROISection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
