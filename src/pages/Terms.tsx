import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Terms = () => {
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
              🧾 Terms & Conditions – Awaara
            </h1>
            <p className="text-muted-foreground mb-8">Last Updated: October 2025</p>
            
            <div className="prose prose-lg max-w-none text-foreground/90 space-y-6">
              <p>
                Welcome to Awaara – Made to Escape ("Awaara," "we," "our," or "us"). By accessing or using our mobile application, website, or any related services (collectively, the "Platform"), you agree to these Terms & Conditions. Please read them carefully before using Awaara.
              </p>

              <h2 className="text-2xl font-bold gradient-text mt-8 mb-4">1. Acceptance of Terms</h2>
              <p>
                By creating an account or using Awaara, you agree to comply with these Terms and our Privacy Policy. If you do not agree, please do not use our Platform.
              </p>

              <h2 className="text-2xl font-bold gradient-text mt-8 mb-4">2. Eligibility</h2>
              <p>
                You must be 18 years or older to use Awaara. By using our Platform, you confirm that you meet this requirement and that all information you provide is accurate and truthful.
              </p>

              <h2 className="text-2xl font-bold gradient-text mt-8 mb-4">3. Use of the Platform</h2>
              <p>
                Awaara connects users to social experiences, trips, and events curated by individuals or organizations.
                You agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use Awaara only for lawful purposes.</li>
                <li>Respect other users and refrain from harassment, abuse, or misconduct.</li>
                <li>Not post or share false, misleading, or offensive content.</li>
              </ul>
              <p>We reserve the right to suspend or terminate accounts that violate these terms.</p>

              <h2 className="text-2xl font-bold gradient-text mt-8 mb-4">4. User-Generated Content</h2>
              <p>
                You retain ownership of the content you post (photos, videos, trip listings, etc.) but grant Awaara a non-exclusive, worldwide, royalty-free license to use, display, and promote such content for platform functionality and marketing.
              </p>

              <h2 className="text-2xl font-bold gradient-text mt-8 mb-4">5. Payments and Refunds</h2>
              <p>
                Transactions for paid events, trips, or bookings are managed through our integrated payment systems. Refunds follow host-specific or platform policies (e.g., 72-hour cancellation rule). Awaara is not liable for cancellations, disputes, or disagreements between users.
              </p>

              <h2 className="text-2xl font-bold gradient-text mt-8 mb-4">6. Safety and Conduct</h2>
              <p>
                While Awaara provides features for user verification and safety, all meetups and events are undertaken at your own risk.
                We strongly recommend:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Verifying hosts and trip details before joining.</li>
                <li>Reporting suspicious activity immediately.</li>
              </ul>
              <p>Awaara is not responsible for any incidents, damages, or losses resulting from user interactions.</p>

              <h2 className="text-2xl font-bold gradient-text mt-8 mb-4">7. Intellectual Property</h2>
              <p>
                All trademarks, logos, and content on Awaara belong to Awaara Technologies Pvt. Ltd. or its licensors. Reproduction or misuse without permission is strictly prohibited.
              </p>

              <h2 className="text-2xl font-bold gradient-text mt-8 mb-4">8. Limitation of Liability</h2>
              <p>
                Awaara shall not be liable for any indirect, incidental, or consequential damages arising from your use of the Platform. Use of Awaara is entirely at your own risk.
              </p>

              <h2 className="text-2xl font-bold gradient-text mt-8 mb-4">9. Modifications</h2>
              <p>
                We may update these Terms from time to time. Continued use of Awaara after such updates constitutes your acceptance of the revised terms.
              </p>

              <h2 className="text-2xl font-bold gradient-text mt-8 mb-4">10. Contact</h2>
              <p>
                For questions about these Terms, contact us at:{" "}
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

export default Terms;
