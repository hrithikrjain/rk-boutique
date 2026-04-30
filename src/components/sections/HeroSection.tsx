import { useEffect, useState } from 'react';
import { ArrowRight, MapPin } from 'lucide-react';
import { useContent } from '../../context/ContentContext';
import { HeroCarousel } from '../ui/HeroCarousel';

export function HeroSection() {
  const { siteData } = useContent();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const headlineParts = siteData.heroHeadline.split('\n');
  const slides = siteData.heroSlides ?? [];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-text-dark"
    >
      {/* Background carousel */}
      <HeroCarousel slides={slides} />

      {/* Content overlay */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32 flex flex-col items-center text-center md:items-start md:text-left">

        {/* Eyebrow */}
        <div
          className={`inline-flex items-center gap-2 mb-6 transition-all duration-700 delay-100 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="h-px w-8 bg-pink" />
          <span className="font-body text-pink text-xs tracking-ultra uppercase font-semibold">
            Malad West, Mumbai
          </span>
          <div className="h-px w-8 bg-pink" />
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
                <em className="not-italic text-pink">{part}</em>
              ) : part}
            </span>
          ))}
        </h1>

        {/* Subtext */}
        <p
          className={`font-body text-white/70 text-base md:text-lg max-w-xl leading-relaxed mb-10 transition-all duration-700 delay-300 ${
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
            className="inline-flex items-center justify-center gap-2 bg-pink hover:bg-pink-light text-white font-body font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-pink-glow text-sm group"
          >
            Explore Collection
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 border border-white/30 hover:border-pink/60 text-white hover:text-pink font-body font-semibold px-8 py-4 rounded-xl transition-all duration-200 text-sm backdrop-blur-xs"
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
            { value: '6', label: 'Collections' },
          ].map((stat) => (
            <div key={stat.value} className="flex flex-col">
              <span className="font-display text-pink text-2xl font-medium">{stat.value}</span>
              <span className="font-body text-white/40 text-xs tracking-wider">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-px h-8 bg-gradient-to-b from-transparent to-pink/60" />
        <div className="w-1.5 h-1.5 rounded-full bg-pink/60" />
      </div>
    </section>
  );
}
