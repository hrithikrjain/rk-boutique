import { ArrowRight } from 'lucide-react';
import type { GalleryCategory } from '../../types';

interface CategoryCardProps {
  category: GalleryCategory;
  title: string;
  description: string;
  image: string;
  itemCount: number;
  onSelect: (category: GalleryCategory) => void;
}

const categoryAccent: Record<GalleryCategory, string> = {
  casual:  'from-emerald-900/80',
  party:   'from-purple-900/80',
  wedding: 'from-rose-900/80',
  coord:   'from-teal-900/80',
  gown:    'from-pink-900/80',
  kurti:   'from-amber-900/80',
};

const categoryTag: Record<GalleryCategory, string> = {
  casual:  'text-emerald-300 bg-emerald-900/40 border-emerald-700/40',
  party:   'text-purple-300 bg-purple-900/40 border-purple-700/40',
  wedding: 'text-rose-300 bg-rose-900/40 border-rose-700/40',
  coord:   'text-teal-300 bg-teal-900/40 border-teal-700/40',
  gown:    'text-pink-300 bg-pink-900/40 border-pink-700/40',
  kurti:   'text-amber-300 bg-amber-900/40 border-amber-700/40',
};

export function CategoryCard({ category, title, description, image, itemCount, onSelect }: CategoryCardProps) {
  return (
    <div
      className="reveal-item group relative overflow-hidden rounded-2xl cursor-pointer aspect-[3/4] md:aspect-[2/3]"
      onClick={() => onSelect(category)}
    >
      {/* Background image */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-t ${categoryAccent[category]} via-primary/50 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-400`} />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        {/* Tag */}
        <span className={`self-start text-xs font-body font-semibold tracking-widest uppercase px-3 py-1 rounded-full border mb-3 ${categoryTag[category]}`}>
          {itemCount} pieces
        </span>

        {/* Title */}
        <h3 className="font-display text-white text-3xl md:text-4xl font-medium leading-none mb-2">
          {title}
        </h3>

        {/* Description */}
        <p className="font-body text-white/70 text-sm leading-relaxed mb-4 line-clamp-2">
          {description}
        </p>

        {/* CTA */}
        <div className="flex items-center gap-2 text-accent font-body text-sm font-semibold transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <span>Browse Collection</span>
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
        </div>
      </div>
    </div>
  );
}
