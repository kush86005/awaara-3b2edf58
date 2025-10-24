import WaitlistForm from "./WaitlistForm";
import puneMap from "@/assets/pune-map.png";

const WaitlistSection = () => {
  return (
    <section id="waitlist" className="py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Form */}
          <div className="text-center md:text-left animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Be First in Line.
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Get exclusive early access and be the first to know when Awaara launches in Pune.
            </p>
            <WaitlistForm />
          </div>

          {/* Right: Map Visual */}
          <div className="flex items-center justify-center animate-slide-in-right">
            <img 
              src={puneMap} 
              alt="Pune, India - Coming Soon" 
              className="w-full max-w-md opacity-80 hover:opacity-100 transition-opacity duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaitlistSection;