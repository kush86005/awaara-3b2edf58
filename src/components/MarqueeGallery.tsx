import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const images = [
  { src: gallery1, alt: "Mountain hiking adventure" },
  { src: gallery2, alt: "Vibrant nightclub scene" },
  { src: gallery3, alt: "Beach bonfire gathering" },
  { src: gallery4, alt: "Rooftop bar networking" },
  { src: gallery5, alt: "Music festival celebration" },
  { src: gallery6, alt: "Road trip group selfie" },
];

const MarqueeGallery = () => {
  // Duplicate images for seamless loop
  const duplicatedImages = [...images, ...images];

  return (
    <section className="py-32 md:py-40 overflow-hidden bg-gradient-to-b from-background via-secondary/30 to-secondary/10 relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[hsl(var(--gradient-start))]/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[hsl(var(--gradient-end))]/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="mb-20 text-center relative z-10 animate-fade-in-up">
        <h2 className="text-5xl md:text-6xl font-bold gradient-text animate-gradient mb-4">
          Join the Movement.
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Real people. Real experiences. <span className="text-foreground font-semibold">Zero fakes.</span>
        </p>
      </div>

      <div className="relative z-10">
        {/* Top Row - Left to Right */}
        <div className="flex mb-8 animate-marquee hover:pause">
          {duplicatedImages.map((image, index) => (
            <div
              key={`top-${index}`}
              className="flex-shrink-0 w-96 h-72 mx-4 overflow-hidden rounded-2xl group shadow-2xl"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
              />
            </div>
          ))}
        </div>

        {/* Bottom Row - Right to Left */}
        <div className="flex animate-marquee-reverse hover:pause" style={{ animationDirection: "reverse" }}>
          {duplicatedImages.map((image, index) => (
            <div
              key={`bottom-${index}`}
              className="flex-shrink-0 w-96 h-72 mx-4 overflow-hidden rounded-2xl group shadow-2xl"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
              />
            </div>
          ))}
        </div>

        {/* Gradient Overlays */}
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-background to-transparent pointer-events-none z-20"></div>
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-background to-transparent pointer-events-none z-20"></div>
      </div>
    </section>
  );
};

export default MarqueeGallery;