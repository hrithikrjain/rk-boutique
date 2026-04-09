import { Star, ExternalLink } from 'lucide-react';
import type { Testimonial } from '../../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="reveal-item relative bg-white/5 backdrop-blur-xs border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col hover:border-accent/30 hover:bg-white/8 transition-all duration-400 group">
      {/* Decorative quote mark */}
      <div
        className="absolute top-4 right-6 font-display text-7xl text-accent/10 select-none leading-none pointer-events-none group-hover:text-accent/15 transition-colors duration-400"
        aria-hidden
      >
        "
      </div>

      {/* Stars */}
      <div className="flex items-center gap-1 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} size={14} className="fill-accent text-accent" />
        ))}
      </div>

      {/* Review text */}
      <p className="font-body text-white/75 text-sm leading-relaxed flex-1 mb-6">
        "{testimonial.review}"
      </p>

      {/* Reviewer */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Avatar initials */}
          <div className="w-9 h-9 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center">
            <span className="font-display text-accent text-sm font-medium">
              {testimonial.name.charAt(0)}
            </span>
          </div>
          <div>
            <p className="font-body text-white text-sm font-semibold">{testimonial.name}</p>
            <p className="font-body text-white/30 text-xs">Google Review</p>
          </div>
        </div>

        {/* External link */}
        {testimonial.reviewUrl && (
          <a
            href={testimonial.reviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="text-white/20 hover:text-accent transition-colors duration-200"
            aria-label="View on Google Maps"
          >
            <ExternalLink size={14} />
          </a>
        )}
      </div>
    </div>
  );
}
