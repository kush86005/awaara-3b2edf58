import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Careers = () => {
  const scrollToWaitlist = () => {
    window.location.href = "/#waitlist";
  };

  return (
    <main className="min-h-screen bg-background">
      <Navigation onJoinClick={scrollToWaitlist} />
      
      <section className="pt-32 pb-20 px-4 md:px-6">
        <div className="container mx-auto max-w-4xl">
          <article className="glass-effect rounded-2xl p-8 md:p-12 animate-fade-in text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-8">
              <span className="gradient-text">Work With Awaara — But Not Just Yet</span> <span className="text-4xl">😉</span>
            </h1>
            
            <div className="prose prose-lg max-w-none text-foreground/90 space-y-6 mx-auto">
              <p className="text-xl">
                We love that you want to be part of our journey — and trust us, it's just getting started.
                Right now, we're building our foundation and are not hiring at the moment.
              </p>

              <p className="text-xl font-semibold gradient-text">
                But don't go too far.
              </p>

              <p className="text-lg">
                Awaara will soon open doors for bold creators, crazy thinkers, and visionaries who want to redefine how the world experiences social life.
              </p>

              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-8 my-8">
                <p className="text-xl font-semibold mb-4">📩 Want to stay in the loop?</p>
                <p className="text-lg">
                  Drop us a message at{" "}
                  <a href="mailto:awaara.life@outlook.com" className="text-primary hover:underline font-semibold">
                    awaara.life@outlook.com
                  </a>
                </p>
                <p className="text-lg mt-4">
                  and we'll reach out when it's time to grow our tribe.
                </p>
              </div>

              <p className="text-xl font-bold">
                <span className="gradient-text">The revolution's just getting started — stay Awaara.</span> <span className="text-2xl">🌍✨</span>
              </p>
            </div>
          </article>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Careers;
