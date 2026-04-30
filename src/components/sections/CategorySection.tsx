import { useContent } from '../../context/ContentContext';
import { useScrollReveal, useStaggerReveal } from '../../hooks/useScrollReveal';
import { CircularCategoryCard } from '../ui/CircularCategoryCard';
import { getCategoryPreviews } from '../../data/galleryData';
import type { GalleryCategory } from '../../types';

interface CategorySectionProps {
  onSelectCategory: (category: GalleryCategory) => void;
}

const categories: Array<{ category: GalleryCategory; label: string }> = [
  { category: 'casual',  label: 'Casual' },
  { category: 'party',   label: 'Party Wear' },
  { category: 'wedding', label: 'Wedding' },
  { category: 'coord',   label: 'Co-ord Sets' },
  { category: 'gown',    label: 'Gowns' },
  { category: 'kurti',   label: 'Kurtis' },
];

export function CategorySection({ onSelectCategory }: CategorySectionProps) {
  const { galleryItems } = useContent();
  const labelRef = useScrollReveal<HTMLDivElement>();
  const gridRef = useStaggerReveal<HTMLDivElement>({ threshold: 0.1 });
  const previews = getCategoryPreviews();

  return (
    <section id="categories" className="py-20 md:py-28 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Section Header */}
        <div ref={labelRef} className="reveal-item text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-pink/40" />
            <span className="font-body text-pink text-xs tracking-widest uppercase font-semibold">
              Shop by Occasion
            </span>
            <div className="h-px w-12 bg-pink/40" />
          </div>
          <h2
            className="font-heading text-brown font-bold leading-tight"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}
          >
            Find Your Perfect Look
          </h2>
          <p className="font-body text-text-body text-base mt-3 max-w-md mx-auto leading-relaxed">
            Browse our six carefully curated collections, each designed for a different chapter of your life.
          </p>
        </div>

        {/* Circular Category Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 justify-items-center"
        >
          {categories.map(({ category, label }) => {
            const preview = previews[category];
            const count = galleryItems.filter((i) => i.category === category).length;
            return (
              <div key={category} className="reveal-item">
                <CircularCategoryCard
                  label={label}
                  image={preview?.image ?? ''}
                  itemCount={count}
                  onClick={() => onSelectCategory(category)}
                />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
