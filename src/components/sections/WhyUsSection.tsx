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
import { siteData } from '../../data/siteData';

// Map icon string names to Lucide components
const iconMap: Record<string, LucideIcon> = {
  Sparkles,
  Tag,
  Calendar,
  Scissors,
  Layers,
  Heart,
};

export function WhyUsSection() {
  const headerRef = useScrollReveal<HTMLDivElement>();
  const gridRef = useStaggerReveal<HTMLDivElement>({ threshold: 0.08 });

  return (
    <section id="why-us" className="py-24 md:py-32 bg-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* ── Header ───────────────────────────────────────────────────── */}
        <div ref={headerRef} className="reveal-item text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-accent/40" />
            <span className="font-body text-accent text-xs tracking-widest uppercase font-semibold">
              Why RK Boutique
            </span>
            <div className="h-px w-12 bg-accent/40" />
          </div>
          <h2
            className="font-display text-white font-light leading-tight"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}
          >
            The RK Difference
          </h2>
          <p className="font-body text-white/50 text-base mt-3 max-w-lg mx-auto leading-relaxed">
            We don't just sell clothes. We help you find your look, style your occasion, and feel extraordinary every day.
          </p>
        </div>

        {/* ── Feature Grid ─────────────────────────────────────────────── */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteData.whyUsPoints.map((point) => {
            const Icon = iconMap[point.icon] ?? Sparkles;
            return (
              <div
                key={point.id}
                className="reveal-item group bg-white/5 hover:bg-white/8 border border-white/10 hover:border-accent/30 rounded-2xl p-6 md:p-7 transition-all duration-400"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors duration-300">
                  <Icon size={22} className="text-accent" />
                </div>

                {/* Title */}
                <h3 className="font-display text-white text-xl font-medium mb-2">
                  {point.title}
                </h3>

                {/* Description */}
                <p className="font-body text-white/55 text-sm leading-relaxed">
                  {point.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* ── Bottom CTA ───────────────────────────────────────────────── */}
        <div className="text-center mt-14">
          <a
            href="#gallery"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-primary font-body font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-glow text-sm"
          >
            <Sparkles size={16} />
            Explore Our Collection
          </a>
        </div>

      </div>
    </section>
  );
}
