import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import TechSolutions from "@/components/TechSolutions";
import SimulationSection from "@/components/SimulationSection";
import StatisticsSection from "@/components/StatisticsSection";
import StandardsSection from "@/components/StandardsSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import SocialProofSection from "@/components/SocialProofSection";
import PerformanceSection from "@/components/PerformanceSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen font-outfit">
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <TechSolutions />
        <SimulationSection />
        <StatisticsSection />
        <StandardsSection />
        <FeaturesSection />
        <HowItWorksSection />
        <SocialProofSection />
        <PerformanceSection />
        <PricingSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
