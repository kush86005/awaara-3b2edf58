import { useEffect, useRef } from "react";
import appMockup from "@/assets/app-mockup.png";

const SolutionSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
            (entry.target as HTMLElement).classList.remove("opacity-0");
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll(".animate-on-scroll");
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-32 md:py-40 bg-gradient-to-b from-secondary/20 via-background to-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[hsl(var(--gradient-start))]/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[hsl(var(--gradient-end))]/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Phone Mockup */}
          <div className="flex items-center justify-center animate-on-scroll">
            <div className="relative group">
              <img 
                src={appMockup} 
                alt="Awaara App Interface" 
                className="w-full max-w-sm drop-shadow-2xl group-hover:scale-110 transition-all duration-700 relative z-10 animate-float"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--gradient-start))]/20 to-[hsl(var(--gradient-end))]/20 blur-3xl group-hover:blur-4xl transition-all duration-700 animate-pulse-slow"></div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="animate-on-scroll space-y-6">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              We fixed it. This is <span className="gradient-text animate-gradient">Awaara.</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              We believe <span className="text-foreground font-semibold">trust</span> is the foundation of every great experience. Awaara is your single, verified source for everything social—from the wildest parties to the most serene treks.
            </p>
            <p className="text-2xl md:text-3xl font-bold gradient-text">
              Zero fakes. 100% adventure.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;