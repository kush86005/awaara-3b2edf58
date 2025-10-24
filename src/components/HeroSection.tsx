import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-video-poster.jpg";

interface HeroSectionProps {
  onJoinClick: () => void;
}

const HeroSection = ({ onJoinClick }: HeroSectionProps) => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textRef.current) {
      textRef.current.classList.add("animate-fade-in-up");
    }
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Vibrant social experiences" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
      </div>

      {/* Content */}
      <div ref={textRef} className="relative z-10 container mx-auto px-6 text-center">
        <div className="inline-block mb-6 px-6 py-2 bg-gradient-to-r from-[hsl(var(--gradient-start))] to-[hsl(var(--gradient-end))] rounded-full animate-scale-in">
          <span className="text-sm font-bold text-background tracking-wider">COMING SOON</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 animate-text-shimmer bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground to-foreground bg-[length:200%_auto]">
          Your Social Life,
          <br />
          <span className="gradient-text animate-gradient">Reimagined.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 animate-fade-in-delayed">
          One app for curated nightlife, trusted trips, and real connections.
          <br />
          <span className="font-semibold text-foreground">Stop searching, start living.</span>
        </p>

        <Button
          variant="hero"
          size="xl"
          onClick={onJoinClick}
          className="animate-glow-pulse hover:scale-110 transition-transform duration-300"
        >
          Join the Waitlist
        </Button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-foreground/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;