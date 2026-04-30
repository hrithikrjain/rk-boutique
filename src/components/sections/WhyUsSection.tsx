import {
  Sparkles,
  Tag,
  Calendar,
  Scissors,
  Layers,
  Heart,
  type LucideIcon,
} from 'lucide-react';
import { useScrollReveal, useStaggerReveal } from '../../hooks/useScrollReveal';
import { useContent } from '../../context/ContentContext';

const iconMap: Record<string, LucideIcon> = {
  Sparkles,
  Tag,
  Calendar,
  Scissors,
  Layers,
  Heart,
};

export function WhyUsSection() {
  const { siteData } = useContent();
  const headerRef = useScrollReveal<HTMLDivElement>();
  const gridRef = useStaggerReveal<HTMLDivElement>({ threshold: 0.08 });

  return (
    <section id="why-us" className="py-20 md:py-28 bg-cream-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div ref={headerRef} className="reveal-item text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-pink/40" />
            <span className="font-body text-pink text-xs tracking-widest uppercase font-semibold">
              Why RK Boutique
            </span>
            <div className="h-px w-12 bg-pink/40" />
          </div>
          <h2
            className="font-heading text-brown font-bold leading-tight"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}
          >
            The RK Difference
          </h2>
          <p className="font-body text-text-body text-base mt-3 max-w-lg mx-auto leading-relaxed">
            We don't just sell clothes. We help you find your look, style your occasion, and feel extraordinary every day.
          </p>
        </div>

        {/* Feature Grid */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {siteData.whyUsPoints.map((point) => {
            const Icon = iconMap[point.icon] ?? Sparkles;
            return (
              <div
                key={point.id}
                className="reveal-item group bg-white border border-border-light hover:border-pink/30 rounded-2xl p-6 md:p-7 transition-all duration-400 shadow-card hover:shadow-card-hover"
              >
                <div className="w-12 h-12 rounded-xl bg-pink/10 border border-pink/20 flex items-center justify-center mb-5 group-hover:bg-pink/20 transition-colors duration-300">
                  <Icon size={22} className="text-pink" />
                </div>
                <h3 className="font-subheading text-brown text-xl font-medium mb-2">
                  {point.title}
                </h3>
                <p className="font-body text-text-body text-sm leading-relaxed">
                  {point.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <a
            href="#gallery"
            className="inline-flex items-center gap-2 bg-pink hover:bg-pink-light text-white font-body font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-pink-glow text-sm"
          >
            <Sparkles size={16} />
            Explore Our Collection
          </a>
        </div>

      </div>
    </section>
  );
}
