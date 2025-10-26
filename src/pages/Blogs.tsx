import { useEffect, useRef } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Blogs = () => {
  const scrollToWaitlist = () => {
    window.location.href = "/#waitlist";
  };

  const blogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            entry.target.classList.remove("opacity-0");
          }
        });
      },
      { threshold: 0.1 }
    );

    const blogCards = document.querySelectorAll(".blog-card");
    blogCards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const blogs = [
    {
      title: "Why Our Plans Keep Dying in Group Chats — and How Awaara Fixes It",
      content: `Let's be honest — we've all been there.
A random plan drops in the group chat on a Friday night: "Let's go for a trip next weekend!"
Everyone hypes it up for a day or two, and then… silence. Plans die, messages get buried, and another weekend slips by.

The truth is, our social lives are scattered across five different apps — Instagram for scrolling, WhatsApp for planning, Insider for events, Google Maps for cafes, and Airbnb for stays. There's no single space that brings real experiences, real people, and real fun together.

That's where Awaara comes in.
It's not another social app — it's a movement to bring back real memories, the kind you can't swipe past.
Whether it's a last-minute plan to hit a gig, explore a cafe, or join a weekend trip, Awaara connects you with verified people and experiences around you — safely, instantly, and effortlessly.

No more missed plans. No more "next time."
Your real life starts here.`,
      tags: "group chat plans, missed trips, social app India, nightlife near me, experience app, Gen Z social app, Pune nightlife"
    },
    {
      title: "The New Way to Discover Life — Awaara and the Rise of Real Social",
      content: `Let's face it — we're all tired of digital life pretending to be social life.
We double-tap pictures of trips we never go on. Watch parties we're never part of. Save cafes we'll never visit.
But deep down, we're craving something more real — something beyond the screen.

That's why Awaara exists.
It's not just about parties or trips; it's about reimagining how we connect as humans.
From discovering the hottest club events in your city to joining a random trek or meeting like-minded explorers — Awaara makes every plan simple, safe, and social.

We're starting in Pune, the heartbeat of young India — where energy, nightlife, and culture collide.
And soon, we'll bring that same vibe to every city that believes in living life beyond chats and filters.

So stop scrolling. Start living.
Awaara's here.`,
      tags: "nightlife app India, Pune events, things to do in Pune, social experience app, travel social app India, Awaara social app"
    },
    {
      title: "The FOMO Is Real — And So Is Awaara",
      content: `If you've ever watched your friends' stories and thought, "Why wasn't I there?" — you're not alone.
FOMO has become a part of modern life, and honestly, it's exhausting.
We see amazing nights, beautiful places, and new faces on our screens every day… but rarely get to experience them ourselves.

Awaara changes that.
It's your gateway to live the moments you see online — from parties to treks, from cafe-hopping weekends to impromptu road trips.
We built this for people like you — explorers, dreamers, the ones who never want to say "maybe next time" again.

Join thousands who've decided to stop watching and start living.
Your city is alive — you just haven't seen it through Awaara yet.`,
      tags: "FOMO, Gen Z experiences, party app India, social app Pune, weekend trips India, explore Pune, Awaara app"
    }
  ];

  return (
    <main className="min-h-screen bg-background">
      <Navigation onJoinClick={scrollToWaitlist} />
      
      <section className="pt-32 pb-20 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
              Awaara Blog
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover stories, insights, and the movement behind real social experiences
            </p>
          </div>

          <div ref={blogRef} className="space-y-12">
            {blogs.map((blog, index) => (
              <article
                key={index}
                className="blog-card opacity-0 glass-effect rounded-2xl p-8 md:p-12 hover:shadow-2xl transition-all duration-500"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <h2 className="text-2xl md:text-4xl font-bold gradient-text mb-6">
                  {blog.title}
                </h2>
                <div className="prose prose-lg max-w-none text-foreground/90 whitespace-pre-line mb-6">
                  {blog.content}
                </div>
                {/* SEO tags hidden but present for search engines */}
                <div className="sr-only">
                  {blog.tags.split(", ").map((tag, tagIndex) => (
                    <span key={tagIndex}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Blogs;
