import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface NavigationProps {
  onJoinClick: () => void;
}

const Navigation = ({ onJoinClick }: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleAboutClick = () => {
    navigate("/blogs");
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
      <div className="container mx-auto px-3 md:px-6">
        {/* Desktop Layout */}
        <div className="hidden md:flex items-center justify-between">
          <button 
            onClick={() => scrollToSection("hero")}
            className="text-2xl font-bold gradient-text hover:opacity-80 transition-opacity"
          >
            Awaara
          </button>

          <div className="flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
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
              onClick={handleAboutClick}
              className="text-foreground/80 hover:text-foreground transition-colors font-medium"
            >
              About
            </button>
          </div>

          <Button 
            onClick={onJoinClick}
            variant="hero"
            size="default"
          >
            Join Waitlist
          </Button>
        </div>

        {/* Mobile Layout */}
        <div className="flex md:hidden flex-col gap-3">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => scrollToSection("hero")}
              className="text-xl font-bold gradient-text hover:opacity-80 transition-opacity"
            >
              Awaara
            </button>
            <Button 
              onClick={onJoinClick}
              variant="hero"
              size="sm"
              className="text-xs px-3 h-8"
            >
              Join Waitlist
            </Button>
          </div>
          <div className="flex items-center justify-center gap-6">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-foreground/80 hover:text-foreground transition-colors font-medium text-xs"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="text-foreground/80 hover:text-foreground transition-colors font-medium text-xs"
            >
              Features
            </button>
            <button
              onClick={handleAboutClick}
              className="text-foreground/80 hover:text-foreground transition-colors font-medium text-xs"
            >
              About
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;