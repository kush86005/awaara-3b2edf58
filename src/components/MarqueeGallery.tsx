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
    <section className="py-24 md:py-32 overflow-hidden bg-secondary/30">
      <div className="mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold gradient-text">
          Join the Movement.
        </h2>
      </div>

      <div className="relative">
        {/* Top Row - Left to Right */}
        <div className="flex mb-6 animate-marquee hover:pause">
          {duplicatedImages.map((image, index) => (
            <div
              key={`top-${index}`}
              className="flex-shrink-0 w-80 h-60 mx-3 overflow-hidden rounded-xl group"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>

        {/* Bottom Row - Right to Left */}
        <div className="flex animate-marquee-reverse hover:pause" style={{ animationDirection: "reverse" }}>
          {duplicatedImages.map((image, index) => (
            <div
              key={`bottom-${index}`}
              className="flex-shrink-0 w-80 h-60 mx-3 overflow-hidden rounded-xl group"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>

        {/* Gradient Overlays */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent pointer-events-none"></div>
      </div>
    </section>
  );
};

export default MarqueeGallery;