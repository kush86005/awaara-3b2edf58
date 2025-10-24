import { useEffect, useRef } from "react";

const ProblemSection = () => {
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const words = entry.target.querySelectorAll(".word-reveal");
            words.forEach((word, index) => {
              setTimeout(() => {
                word.classList.add("revealed");
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-32 md:py-40 bg-gradient-to-b from-background via-secondary/10 to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p ref={textRef} className="text-3xl md:text-5xl font-bold leading-relaxed tracking-tight">
            Plans are left on read. Trips are full of{" "}
            <span className="word-reveal text-muted-foreground inline-block">scams</span>. Your social life is{" "}
            <span className="word-reveal text-muted-foreground inline-block">fragmented</span> across five different apps.
          </p>
          <div className="mt-16 h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-[hsl(var(--gradient-start))] to-transparent rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;