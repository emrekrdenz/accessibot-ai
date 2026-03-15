import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LogoStripSection from "@/components/LogoStripSection";
import ProblemSection from "@/components/ProblemSection";
import TechSolutions from "@/components/TechSolutions";
import FeaturesSection from "@/components/FeaturesSection";
import QuickProfilesSection from "@/components/QuickProfilesSection";
import SimulationSection from "@/components/SimulationSection";
import StatisticsSection from "@/components/StatisticsSection";

import HowItWorksSection from "@/components/HowItWorksSection";
import PricingSection from "@/components/PricingSection";
import ROISection from "@/components/ROISection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen font-outfit">
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <LogoStripSection />
        <ProblemSection />
        <TechSolutions />
        <FeaturesSection />
        <QuickProfilesSection />
        <SimulationSection />
        <StatisticsSection />

        <HowItWorksSection />
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
