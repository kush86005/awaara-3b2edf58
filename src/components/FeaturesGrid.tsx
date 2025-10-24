import { Shield, Compass, Award, Brain } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Award,
    title: "Curated Nightlife",
    description: "Access exclusive, verified clubs and events. No more fake listings.",
    size: "large" as const,
  },
  {
    icon: Compass,
    title: "Trusted Trips",
    description: "Join peer-to-peer hosted treks and trips, all vetted by our community.",
    size: "small" as const,
  },
  {
    icon: Shield,
    title: "Social Ledger",
    description: "Build your reputation with a verified record of your social activity.",
    size: "small" as const,
  },
  {
    icon: Brain,
    title: "AI Safety Co-pilot",
    description: "Our AI analyzes routes and suggests safe accommodations for every plan.",
    size: "large" as const,
  },
];

const FeaturesGrid = () => {
  return (
    <section id="features" className="py-32 md:py-40 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[hsl(var(--gradient-start))]/5 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 animate-fade-in-up space-y-6">
          <h2 className="text-5xl md:text-6xl font-bold leading-tight">
            Everything You Need in{" "}
            <span className="gradient-text animate-gradient">One App</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Stop juggling multiple apps. Awaara brings it all together with <span className="text-foreground font-semibold">verified experiences</span> and <span className="text-foreground font-semibold">trusted connections</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isLarge = feature.size === "large";
            
            return (
              <Card
                key={index}
                className={`glass-effect p-8 hover:border-[hsl(var(--gradient-start))] transition-all duration-500 hover:glow-effect hover:scale-105 group cursor-pointer animate-fade-in-up ${
                  isLarge ? "md:col-span-2" : "md:col-span-1"
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="space-y-6">
                  <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                    <Icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold group-hover:text-[hsl(var(--gradient-start))] transition-colors">{feature.title}</h3>
                  
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;