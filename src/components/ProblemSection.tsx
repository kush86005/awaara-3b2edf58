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
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p ref={textRef} className="text-3xl md:text-4xl font-bold leading-relaxed">
            Plans are left on read. Trips are full of{" "}
            <span className="word-reveal text-muted-foreground">scams</span>. Your social life is{" "}
            <span className="word-reveal text-muted-foreground">fragmented</span> across five different apps.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;