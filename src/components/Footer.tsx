import { Instagram, Linkedin } from "lucide-react";
import { toast } from "sonner";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 bg-gradient-to-b from-background to-secondary/20 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[hsl(var(--gradient-start))]/5 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>
      
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 animate-fade-in-up">
          <div className="space-y-4">
            <h3 className="text-3xl font-bold gradient-text animate-gradient">Awaara</h3>
            <p className="text-muted-foreground leading-relaxed">
              Building the future of social experiences — curated, trusted, and designed for Gen Z.
            </p>
          </div>

          {/* Column 2: Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-foreground">Company</h4>
            <ul className="space-y-3">
              <li>
                <a href="/blogs" className="text-muted-foreground hover:text-[hsl(var(--gradient-start))] transition-colors hover:translate-x-1 inline-block transform duration-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="mailto:awaara.life@outlook.com" className="text-muted-foreground hover:text-[hsl(var(--gradient-start))] transition-colors hover:translate-x-1 inline-block transform duration-300">
                  Contact
                </a>
              </li>
              <li>
                <a href="/careers" className="text-muted-foreground hover:text-[hsl(var(--gradient-start))] transition-colors hover:translate-x-1 inline-block transform duration-300">
                  Careers
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-muted-foreground hover:text-[hsl(var(--gradient-start))] transition-colors hover:translate-x-1 inline-block transform duration-300">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-muted-foreground hover:text-[hsl(var(--gradient-start))] transition-colors hover:translate-x-1 inline-block transform duration-300">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Social */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-foreground">Connect</h4>
            <div className="flex gap-4">
              <button
                onClick={() => toast.info("Coming Soon!", { description: "We'll be launching our Instagram soon. Stay tuned!" })}
                className="w-12 h-12 rounded-full bg-secondary/50 hover:bg-gradient-to-r hover:from-[hsl(var(--gradient-start))] hover:to-[hsl(var(--gradient-end))] flex items-center justify-center transition-all hover:scale-110 hover:-rotate-6 duration-300 border border-border/50"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </button>
              <button
                onClick={() => toast.info("Coming Soon!", { description: "We'll be launching our X account soon. Stay tuned!" })}
                className="w-12 h-12 rounded-full bg-secondary/50 hover:bg-gradient-to-r hover:from-[hsl(var(--gradient-start))] hover:to-[hsl(var(--gradient-end))] flex items-center justify-center transition-all hover:scale-110 hover:-rotate-6 duration-300 border border-border/50"
                aria-label="X (formerly Twitter)"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </button>
              <button
                onClick={() => toast.info("Coming Soon!", { description: "We'll be launching our LinkedIn soon. Stay tuned!" })}
                className="w-12 h-12 rounded-full bg-secondary/50 hover:bg-gradient-to-r hover:from-[hsl(var(--gradient-start))] hover:to-[hsl(var(--gradient-end))] flex items-center justify-center transition-all hover:scale-110 hover:-rotate-6 duration-300 border border-border/50"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50 text-center">
          <p className="text-muted-foreground">
            © {currentYear} <span className="text-foreground font-semibold">Awaara</span> — Made to Escape. All Rights Reserved. •{" "}
            <a href="/privacy" className="hover:text-foreground transition-colors">Privacy</a> •{" "}
            <a href="/terms" className="hover:text-foreground transition-colors">Terms</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;