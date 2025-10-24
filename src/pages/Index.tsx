import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import WaitlistSection from "@/components/WaitlistSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import FeaturesGrid from "@/components/FeaturesGrid";
import MarqueeGallery from "@/components/MarqueeGallery";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  const scrollToWaitlist = () => {
    const element = document.getElementById("waitlist");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-background">
      <Navigation onJoinClick={scrollToWaitlist} />
      <HeroSection onJoinClick={scrollToWaitlist} />
      <WaitlistSection />
      <ProblemSection />
      <SolutionSection />
      <FeaturesGrid />
      <MarqueeGallery />
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Index;