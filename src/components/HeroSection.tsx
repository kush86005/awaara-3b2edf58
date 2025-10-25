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
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 animate-text-shimmer bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground to-foreground bg-[length:200%_auto]">
          Your social life's been sleeping.
          <br />
          <span className="gradient-text animate-gradient">It's time to wake it up.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 animate-fade-in-delayed">
          Discover the wildest nights, real experiences, and memories waiting to happen.
        </p>

      </div>
    </section>
  );
};

export default HeroSection;