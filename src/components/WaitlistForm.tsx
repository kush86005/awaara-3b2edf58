import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { CheckCircle2 } from "lucide-react";

const WaitlistForm = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setIsLoading(false);
      toast.success("Successfully joined the waitlist!");
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <div className="text-center animate-fade-in-up">
        <div className="inline-flex items-center gap-3 text-[hsl(var(--gradient-start))] mb-4">
          <CheckCircle2 className="w-12 h-12 animate-scale-in" />
        </div>
        <h3 className="text-2xl font-bold mb-2">You're on the list!</h3>
        <p className="text-muted-foreground">
          We'll be in touch when Awaara launches in Pune.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto space-y-4">
      <Input
        type="email"
        placeholder="Enter your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="h-14 px-6 text-base bg-secondary/50 border-border/50 focus:border-[hsl(var(--gradient-start))] transition-all"
        disabled={isLoading}
      />
      <Button
        type="submit"
        variant="hero"
        size="xl"
        className="w-full"
        disabled={isLoading}
      >
        {isLoading ? "Joining..." : "Notify Me"}
      </Button>
    </form>
  );
};

export default WaitlistForm;