import { useScrollReveal, useStaggerReveal } from '../../hooks/useScrollReveal';
import { siteData } from '../../data/siteData';
import { galleryItems } from '../../data/galleryData';

// Pick 3 aesthetically varied images for the collage
const collageImages = [
  galleryItems.find((i) => i.category === 'wedding' && i.sortOrder === 2)!.image,
  galleryItems.find((i) => i.category === 'party' && i.sortOrder === 1)!.image,
  galleryItems.find((i) => i.category === 'casual' && i.sortOrder === 3)!.image,
];

export function AboutSection() {
  const titleRef = useScrollReveal<HTMLDivElement>();
  const bodyRef = useStaggerReveal<HTMLDivElement>();
  const imageRef = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section id="about" className="py-24 md:py-32 bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">

          {/* ── Text side ──────────────────────────────────────────────── */}
          <div>
            {/* Section label */}
            <div ref={titleRef} className="reveal-item mb-4 flex items-center gap-3">
              <div className="h-px w-12 bg-accent" />
              <span className="font-body text-accent text-xs tracking-widest uppercase font-semibold">
                Our Story
              </span>
            </div>

            {/* Heading */}
            <h2
              className="font-display text-text-main font-light mb-6 leading-tight"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
            >
              More Than a Boutique,<br />
              <em className="not-italic text-primary font-medium">A Feeling</em>
            </h2>

            {/* Body paragraphs */}
            <div ref={bodyRef} className="space-y-4 mb-8">
              {siteData.aboutBody.map((para, i) => (
                <p key={i} className="reveal-item font-body text-text-muted text-base leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            {/* Decorative quote */}
            <blockquote className="border-l-2 border-accent pl-5 py-1 mb-8">
              <p className="font-display text-primary-light text-lg md:text-xl italic font-light leading-snug">
                "{siteData.aboutQuote}"
              </p>
            </blockquote>

            {/* Stats row */}
            <div className="flex gap-8">
              {[
                { value: 'Muslin', sub: 'Gajji Silk' },
                { value: 'Cotton', sub: 'Georgette' },
                { value: 'Ethnic', sub: 'Indo-Western' },
              ].map((item) => (
                <div key={item.value}>
                  <p className="font-display text-primary font-medium text-xl">{item.value}</p>
                  <p className="font-body text-text-muted text-xs tracking-wider">{item.sub}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Image collage side ─────────────────────────────────────── */}
          <div ref={imageRef} className="reveal-item relative">
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {/* Large image — top left */}
              <div className="col-span-1 row-span-2 rounded-2xl overflow-hidden aspect-[3/4] shadow-card-hover">
                <img
                  src={collageImages[0]}
                  alt="RK Boutique collection"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* Small image — top right */}
              <div className="rounded-2xl overflow-hidden aspect-square shadow-glass">
                <img
                  src={collageImages[1]}
                  alt="RK Boutique collection"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* Small image — bottom right */}
              <div className="rounded-2xl overflow-hidden aspect-square shadow-glass">
                <img
                  src={collageImages[2]}
                  alt="RK Boutique collection"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 md:-left-8 bg-primary text-white rounded-2xl px-5 py-4 shadow-card-hover">
              <p className="font-display text-3xl font-medium text-accent">✦</p>
              <p className="font-body text-xs text-white/70 mt-1 leading-tight">
                On-spot<br />alterations
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
