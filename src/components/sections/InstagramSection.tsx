import { Instagram, ArrowRight } from 'lucide-react';
import { useScrollReveal, useStaggerReveal } from '../../hooks/useScrollReveal';
import { siteData } from '../../data/siteData';
import { galleryItems } from '../../data/galleryData';

// Pick 6 images for the Instagram grid mockup — spread across categories
const gridImages = [
  galleryItems.find((i) => i.category === 'party' && i.sortOrder === 1)!.image,
  galleryItems.find((i) => i.category === 'wedding' && i.sortOrder === 1)!.image,
  galleryItems.find((i) => i.category === 'casual' && i.sortOrder === 1)!.image,
  galleryItems.find((i) => i.category === 'wedding' && i.sortOrder === 3)!.image,
  galleryItems.find((i) => i.category === 'party' && i.sortOrder === 3)!.image,
  galleryItems.find((i) => i.category === 'casual' && i.sortOrder === 2)!.image,
];

export function InstagramSection() {
  const headerRef = useScrollReveal<HTMLDivElement>();
  const gridRef = useStaggerReveal<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section id="instagram" className="py-24 md:py-32 bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* ── Header ───────────────────────────────────────────────────── */}
        <div ref={headerRef} className="reveal-item text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-accent" />
            <span className="font-body text-accent text-xs tracking-widest uppercase font-semibold">
              Follow Our Journey
            </span>
            <div className="h-px w-12 bg-accent" />
          </div>

          {/* Instagram icon + handle */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center">
              <Instagram size={20} className="text-white" />
            </div>
            <a
              href={siteData.contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-display text-primary text-2xl font-medium hover:text-accent transition-colors duration-200"
            >
              {siteData.contact.instagramHandle}
            </a>
          </div>

          <h2
            className="font-display text-text-main font-light leading-tight mb-4"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}
          >
            Style Inspiration, Daily
          </h2>
          <p className="font-body text-text-muted text-base max-w-lg mx-auto leading-relaxed">
            {siteData.instagramBio}
          </p>
        </div>

        {/* ── Instagram Grid Mockup ──────────────────────────────────── */}
        <div ref={gridRef} className="grid grid-cols-3 gap-2 md:gap-3 max-w-2xl mx-auto mb-10">
          {gridImages.map((src, i) => (
            <a
              key={i}
              href={siteData.contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal-item group relative overflow-hidden rounded-xl aspect-square"
            >
              <img
                src={src}
                alt="RK Boutique Instagram"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {/* Instagram hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/70 via-pink-500/70 to-orange-400/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Instagram size={24} className="text-white" />
              </div>
            </a>
          ))}
        </div>

        {/* ── Follow CTA ───────────────────────────────────────────────── */}
        <div className="text-center">
          <a
            href={siteData.contact.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white font-body font-semibold px-8 py-3.5 rounded-xl transition-all duration-200 hover:opacity-90 hover:shadow-lg text-sm group"
          >
            <Instagram size={16} />
            Follow us on Instagram
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
          </a>
        </div>

      </div>
    </section>
  );
}
