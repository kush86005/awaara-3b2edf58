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
    <section id="features" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything You Need in{" "}
            <span className="gradient-text">One App</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stop juggling multiple apps. Awaara brings it all together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isLarge = feature.size === "large";
            
            return (
              <Card
                key={index}
                className={`glass-effect p-8 hover:border-[hsl(var(--gradient-start))] transition-all duration-300 hover:glow-effect group cursor-pointer ${
                  isLarge ? "md:col-span-2" : "md:col-span-1"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  
                  <h3 className="text-2xl font-bold">{feature.title}</h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
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