import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

interface NavigationProps {
  onJoinClick: () => void;
}

const Navigation = ({ onJoinClick }: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "py-3 glass-effect shadow-2xl backdrop-blur-xl"
          : "py-6 bg-transparent"
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <button 
          onClick={() => scrollToSection("hero")}
          className="text-2xl font-bold gradient-text hover:opacity-80 transition-opacity"
        >
          Awaara
        </button>

        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-foreground/80 hover:text-foreground transition-colors font-medium"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("features")}
            className="text-foreground/80 hover:text-foreground transition-colors font-medium"
          >
            Features
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-foreground/80 hover:text-foreground transition-colors font-medium"
          >
            About
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navigation;