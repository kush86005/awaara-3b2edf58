import WaitlistForm from "./WaitlistForm";

const FinalCTA = () => {
  return (
    <section className="py-32 md:py-40 bg-gradient-to-b from-secondary/30 via-background to-background relative overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-[hsl(var(--gradient-start))]/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-[hsl(var(--gradient-end))]/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in-up">
            Ready to Escape the <span className="gradient-text animate-gradient">Ordinary?</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 animate-fade-in-delayed">
            Join <span className="text-foreground font-bold">thousands</span> waiting to experience the future of social discovery in <span className="text-foreground font-bold">Pune</span>.
          </p>
          <div className="animate-scale-in">
            <WaitlistForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;