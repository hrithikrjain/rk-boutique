import { Star, ExternalLink } from 'lucide-react';
import type { Testimonial } from '../../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="reveal-item relative bg-white border border-border-light rounded-2xl p-6 md:p-8 flex flex-col hover:border-pink/30 hover:shadow-card-hover transition-all duration-400 group shadow-card">
      {/* Decorative quote mark */}
      <div
        className="absolute top-4 right-6 font-display text-7xl text-pink/10 select-none leading-none pointer-events-none group-hover:text-pink/15 transition-colors duration-400"
        aria-hidden
      >
        "
      </div>

      {/* Stars */}
      <div className="flex items-center gap-1 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} size={14} className="fill-pink text-pink" />
        ))}
      </div>

      {/* Review text */}
      <p className="font-body text-text-body text-sm leading-relaxed flex-1 mb-6">
        "{testimonial.review}"
      </p>

      {/* Reviewer */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-pink/10 border border-pink/30 flex items-center justify-center">
            <span className="font-display text-pink text-sm font-medium">
              {testimonial.name.charAt(0)}
            </span>
          </div>
          <div>
            <p className="font-body text-text-dark text-sm font-semibold">{testimonial.name}</p>
            <p className="font-body text-text-muted text-xs">Google Review</p>
          </div>
        </div>

        {testimonial.reviewUrl && (
          <a
            href={testimonial.reviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="text-text-muted hover:text-pink transition-colors duration-200"
            aria-label="View on Google Maps"
          >
            <ExternalLink size={14} />
          </a>
        )}
      </div>
    </div>
  );
}
