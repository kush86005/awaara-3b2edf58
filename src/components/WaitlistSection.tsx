import WaitlistForm from "./WaitlistForm";
import puneMap from "@/assets/pune-map.png";

const WaitlistSection = () => {
  return (
    <section id="waitlist" className="py-32 md:py-40 relative overflow-hidden bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Form */}
          <div className="text-center md:text-left animate-fade-in-up space-y-6">
            <div className="inline-block">
              <span className="px-4 py-2 bg-secondary/50 rounded-full text-sm font-semibold text-[hsl(var(--gradient-start))] border border-[hsl(var(--gradient-start))]/20 animate-pulse-slow">
                🚀 Launching in Pune
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">
              Be First in Line.
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Get exclusive early access and be the first to know when Awaara launches in <span className="text-foreground font-semibold">Pune</span>.
            </p>
            <WaitlistForm />
          </div>

          {/* Right: Map Visual */}
          <div className="flex items-center justify-center animate-slide-in-right">
            <div className="relative group">
              <div className="relative">
                <img 
                  src={puneMap} 
                  alt="Pune - Launch city" 
                  className="w-full max-w-md drop-shadow-2xl group-hover:scale-105 transition-all duration-500 animate-float"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--gradient-start))]/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                {/* Tooltip */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="bg-background/95 backdrop-blur-sm px-4 py-2 rounded-lg border border-[hsl(var(--gradient-start))]/30 shadow-xl">
                    <p className="text-sm font-semibold gradient-text whitespace-nowrap">Pune — Launch city</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaitlistSection;