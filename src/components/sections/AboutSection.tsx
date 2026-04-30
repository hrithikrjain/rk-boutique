import { useScrollReveal, useStaggerReveal } from '../../hooks/useScrollReveal';
import { useContent } from '../../context/ContentContext';

export function AboutSection() {
  const { siteData, galleryItems } = useContent();
  const collageImages = [
    galleryItems.find((i) => i.category === 'wedding' && i.sortOrder === 2)?.image ?? '',
    galleryItems.find((i) => i.category === 'party' && i.sortOrder === 1)?.image ?? '',
    galleryItems.find((i) => i.category === 'casual' && i.sortOrder === 3)?.image ?? '',
  ];
  const titleRef = useScrollReveal<HTMLDivElement>();
  const bodyRef = useStaggerReveal<HTMLDivElement>();
  const imageRef = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section id="about" className="py-20 md:py-28 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">

          {/* Text side */}
          <div>
            <div ref={titleRef} className="reveal-item mb-4 flex items-center gap-3">
              <div className="h-px w-12 bg-pink" />
              <span className="font-body text-pink text-xs tracking-widest uppercase font-semibold">
                Our Story
              </span>
            </div>

            <h2
              className="font-heading text-brown font-bold mb-6 leading-tight"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
            >
              More Than a Boutique,<br />
              <em className="not-italic text-pink font-medium">A Feeling</em>
            </h2>

            <div ref={bodyRef} className="space-y-4 mb-8">
              {siteData.aboutBody.map((para, i) => (
                <p key={i} className="reveal-item font-body text-text-body text-base leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            <blockquote className="border-l-2 border-pink pl-5 py-1 mb-8">
              <p className="font-display text-brown text-lg md:text-xl italic font-light leading-snug">
                "{siteData.aboutQuote}"
              </p>
            </blockquote>

            <div className="flex gap-8">
              {[
                { value: 'Muslin', sub: 'Gajji Silk' },
                { value: 'Cotton', sub: 'Georgette' },
                { value: 'Ethnic', sub: 'Indo-Western' },
              ].map((item) => (
                <div key={item.value}>
                  <p className="font-display text-pink font-medium text-xl">{item.value}</p>
                  <p className="font-body text-text-muted text-xs tracking-wider">{item.sub}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image collage side */}
          <div ref={imageRef} className="reveal-item relative">
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <div className="col-span-1 row-span-2 rounded-2xl overflow-hidden aspect-[3/4] shadow-card-hover">
                <img
                  src={collageImages[0]}
                  alt="RK Boutique collection"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-square shadow-card">
                <img
                  src={collageImages[1]}
                  alt="RK Boutique collection"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-square shadow-card">
                <img
                  src={collageImages[2]}
                  alt="RK Boutique collection"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 md:-left-8 bg-pink text-white rounded-2xl px-5 py-4 shadow-card-hover">
              <p className="font-display text-3xl font-medium text-white">✦</p>
              <p className="font-body text-xs text-white/80 mt-1 leading-tight">
                On-spot<br />alterations
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
