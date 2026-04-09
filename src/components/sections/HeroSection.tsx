import { useEffect, useRef, useState } from 'react';
import { ArrowRight, MapPin } from 'lucide-react';
import { siteData } from '../../data/siteData';
import { galleryItems } from '../../data/galleryData';

// Pick 3 hero images — one from each category
const heroImages = [
  galleryItems.find((i) => i.category === 'wedding')!.image,
  galleryItems.find((i) => i.category === 'party')!.image,
  galleryItems.find((i) => i.category === 'casual')!.image,
];

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Trigger entrance animation
    const timer = setTimeout(() => setLoaded(true), 100);

    // Parallax scroll
    function handleScroll() {
      setScrollY(window.scrollY);
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const parallaxOffset = scrollY * 0.35;

  const headlineParts = siteData.heroHeadline.split('\n');

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-primary"
    >
      {/* ── Background image mosaic ─────────────────────────────────────── */}
      <div
        className="absolute inset-0 grid"
        style={{
          gridTemplateColumns: '1fr 1fr 1fr',
          transform: `translateY(${parallaxOffset}px)`,
          top: '-10%',
          bottom: '-10%',
        }}
      >
        {heroImages.map((src, i) => (
          <div key={i} className="relative overflow-hidden">
            <img
              src={src}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
              style={{
                objectPosition: 'center top',
                filter: 'brightness(0.45) saturate(1.1)',
              }}
            />
          </div>
        ))}
      </div>

      {/* Vertical divider lines between images */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 2 }}>
        <div className="absolute top-0 bottom-0 left-1/3 w-px bg-white/5" />
        <div className="absolute top-0 bottom-0 left-2/3 w-px bg-white/5" />
      </div>

      {/* Dark gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/40 to-primary/90" style={{ zIndex: 3 }} />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/60 via-transparent to-primary/60" style={{ zIndex: 3 }} />

      {/* ── Content ──────────────────────────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32 flex flex-col items-center text-center md:items-start md:text-left">

        {/* Eyebrow tag */}
        <div
          className={`inline-flex items-center gap-2 mb-6 transition-all duration-700 delay-100 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="h-px w-8 bg-accent" />
          <span className="font-body text-accent text-xs tracking-ultra uppercase font-semibold">
            Malad West, Mumbai
          </span>
          <div className="h-px w-8 bg-accent" />
        </div>

        {/* Headline */}
        <h1
          className={`font-display text-white font-light leading-none mb-6 transition-all duration-700 delay-200 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}
        >
          {headlineParts.map((part, i) => (
            <span key={i} className="block">
              {i === 1 ? (
                <em className="not-italic text-accent">{part}</em>
              ) : part}
            </span>
          ))}
        </h1>

        {/* Subtext */}
        <p
          className={`font-body text-white/65 text-base md:text-lg max-w-xl leading-relaxed mb-10 transition-all duration-700 delay-300 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {siteData.heroSubtext}
        </p>

        {/* CTAs */}
        <div
          className={`flex flex-col sm:flex-row gap-4 w-full sm:w-auto transition-all duration-700 delay-[400ms] ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <a
            href="#gallery"
            className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-light text-primary font-body font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-glow text-sm group"
          >
            Explore Collection
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 border border-white/30 hover:border-accent/60 text-white hover:text-accent font-body font-semibold px-8 py-4 rounded-xl transition-all duration-200 text-sm backdrop-blur-xs"
          >
            <MapPin size={15} />
            Visit Our Store
          </a>
        </div>

        {/* Trust signals */}
        <div
          className={`flex flex-wrap items-center gap-6 mt-12 transition-all duration-700 delay-500 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {[
            { value: '15+', label: 'Years of Style' },
            { value: '500+', label: 'Happy Customers' },
            { value: '3', label: 'Collections' },
          ].map((stat) => (
            <div key={stat.value} className="flex flex-col">
              <span className="font-display text-accent text-2xl font-medium">{stat.value}</span>
              <span className="font-body text-white/40 text-xs tracking-wider">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-px h-8 bg-gradient-to-b from-transparent to-accent/60" />
        <div className="w-1.5 h-1.5 rounded-full bg-accent/60" />
      </div>
    </section>
  );
}
