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
    <section id="about" ref={sectionRef} className="py-24 md:py-32 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Phone Mockup */}
          <div className="flex items-center justify-center animate-on-scroll opacity-0">
            <img 
              src={appMockup} 
              alt="Awaara App Interface" 
              className="w-full max-w-sm drop-shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Right: Content */}
          <div className="animate-on-scroll opacity-0">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              We fixed it. This is <span className="gradient-text">Awaara.</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We believe trust is the foundation of every great experience. Awaara is your single, verified source for everything social—from the wildest parties to the most serene treks.{" "}
              <span className="text-foreground font-semibold">Zero fakes. 100% adventure.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;