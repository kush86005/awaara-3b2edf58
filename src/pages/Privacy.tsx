import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Privacy = () => {
  const scrollToWaitlist = () => {
    window.location.href = "/#waitlist";
  };

  return (
    <main className="min-h-screen bg-background">
      <Navigation onJoinClick={scrollToWaitlist} />
      
      <section className="pt-32 pb-20 px-4 md:px-6">
        <div className="container mx-auto max-w-4xl">
          <article className="glass-effect rounded-2xl p-8 md:p-12 animate-fade-in">
            <h1 className="text-3xl md:text-5xl font-bold gradient-text mb-4">
              🔒 Privacy Policy – Awaara
            </h1>
            <p className="text-muted-foreground mb-8">Last Updated: October 2025</p>
            
            <div className="prose prose-lg max-w-none text-foreground/90 space-y-6">
              <p>
                Your privacy matters to us. This Privacy Policy explains how Awaara collects, uses, and protects your personal data.
              </p>

              <h2 className="text-2xl font-bold gradient-text mt-8 mb-4">1. Information We Collect</h2>
              <p>We collect the following data to enhance user experience:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Personal details:</strong> Name, email, phone number, age, gender (during sign-up)</li>
                <li><strong>Usage data:</strong> App activity, event participation, interactions</li>
                <li><strong>Location data:</strong> For discovering nearby experiences (only with your permission)</li>
                <li><strong>Media uploads:</strong> Photos or videos shared by users for trips/events</li>
              </ul>

              <h2 className="text-2xl font-bold gradient-text mt-8 mb-4">2. How We Use Your Information</h2>
              <p>We use your data to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Personalize your recommendations and experience.</li>
                <li>Connect you with verified events and users.</li>
                <li>Improve our app features and services.</li>
                <li>Communicate important updates, promotions, or safety alerts.</li>
              </ul>
              <p className="font-semibold">We never sell your data to third parties.</p>

              <h2 className="text-2xl font-bold gradient-text mt-8 mb-4">3. Data Security</h2>
              <p>
                We use industry-standard encryption and authentication protocols to secure your information. However, no system is 100% secure, and by using Awaara, you acknowledge this risk.
              </p>

              <h2 className="text-2xl font-bold gradient-text mt-8 mb-4">4. Cookies & Analytics</h2>
              <p>
                We may use cookies and analytics tools to track engagement and improve performance. You can disable cookies in your browser settings.
              </p>

              <h2 className="text-2xl font-bold gradient-text mt-8 mb-4">5. Sharing of Data</h2>
              <p>Your information may be shared:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>With service providers (payment gateways, cloud storage, etc.) strictly for app operations.</li>
                <li>If required by law or to prevent fraud and abuse.</li>
              </ul>

              <h2 className="text-2xl font-bold gradient-text mt-8 mb-4">6. Your Rights</h2>
              <p>You can:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access, modify, or delete your account data anytime.</li>
                <li>Request complete data deletion by contacting privacy@awaara.life.</li>
              </ul>

              <h2 className="text-2xl font-bold gradient-text mt-8 mb-4">7. Updates</h2>
              <p>
                We may revise this Privacy Policy periodically. Continued use of Awaara after updates means you accept the revised terms.
              </p>

              <h2 className="text-2xl font-bold gradient-text mt-8 mb-4">8. Contact</h2>
              <p>
                For any privacy concerns or questions, email us at:{" "}
                <a href="mailto:awaara.life@outlook.com" className="text-primary hover:underline">
                  awaara.life@outlook.com
                </a>
              </p>
            </div>
          </article>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Privacy;
