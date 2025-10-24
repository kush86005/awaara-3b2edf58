import WaitlistForm from "./WaitlistForm";

const FinalCTA = () => {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to Escape the <span className="gradient-text">Ordinary?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Join thousands waiting to experience the future of social discovery.
          </p>
          <WaitlistForm />
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;