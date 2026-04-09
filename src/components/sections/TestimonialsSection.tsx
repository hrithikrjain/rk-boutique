import { Star } from 'lucide-react';
import { useScrollReveal, useStaggerReveal } from '../../hooks/useScrollReveal';
import { TestimonialCard } from '../ui/TestimonialCard';
import { testimonials } from '../../data/testimonialsData';

export function TestimonialsSection() {
  const headerRef = useScrollReveal<HTMLDivElement>();
  const gridRef = useStaggerReveal<HTMLDivElement>({ threshold: 0.08 });

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* ── Header ───────────────────────────────────────────────────── */}
        <div ref={headerRef} className="reveal-item text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-accent/40" />
            <span className="font-body text-accent text-xs tracking-widest uppercase font-semibold">
              Customer Reviews
            </span>
            <div className="h-px w-12 bg-accent/40" />
          </div>

          {/* Stars row */}
          <div className="flex items-center justify-center gap-1 mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={20} className="fill-accent text-accent" />
            ))}
          </div>

          <h2
            className="font-display text-white font-light leading-tight"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}
          >
            Loved by Our Customers
          </h2>
          <p className="font-body text-white/50 text-base mt-3 max-w-md mx-auto leading-relaxed">
            Real stories from women who found their perfect look at RK Boutique.
          </p>
        </div>

        {/* ── Reviews Grid ─────────────────────────────────────────────── */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        {/* ── Bottom badge ─────────────────────────────────────────────── */}
        <div className="flex items-center justify-center gap-3 mt-10">
          <div className="flex items-center gap-1.5">
            <div className="w-5 h-5 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
              <span className="text-white text-[9px] font-bold">G</span>
            </div>
            <span className="font-body text-white/40 text-xs">Verified Google Reviews</span>
          </div>
          <div className="h-px w-8 bg-white/10" />
          <span className="font-body text-white/40 text-xs">5.0 ★ Average Rating</span>
        </div>

      </div>
    </section>
  );
}
