import { useScrollReveal, useStaggerReveal } from '../../hooks/useScrollReveal';
import { CategoryCard } from '../ui/CategoryCard';
import { galleryItems, getCategoryPreviews } from '../../data/galleryData';
import type { GalleryCategory } from '../../types';

interface CategorySectionProps {
  onSelectCategory: (category: GalleryCategory) => void;
}

const categories: Array<{
  category: GalleryCategory;
  title: string;
  description: string;
}> = [
  {
    category: 'casual',
    title: 'Casual',
    description: 'Breezy kurtis, co-ords, and everyday sets in breathable fabrics for effortless daily style.',
  },
  {
    category: 'party',
    title: 'Party Wear',
    description: 'Embellished ensembles, sharara suits, and glamorous sets to make every celebration unforgettable.',
  },
  {
    category: 'wedding',
    title: 'Wedding',
    description: 'Opulent lehengas, bridal suits, and heritage designs for the grandest occasions in your life.',
  },
];

export function CategorySection({ onSelectCategory }: CategorySectionProps) {
  const labelRef = useScrollReveal<HTMLDivElement>();
  const gridRef = useStaggerReveal<HTMLDivElement>({ threshold: 0.1 });
  const previews = getCategoryPreviews();

  return (
    <section id="categories" className="py-24 md:py-32 bg-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* ── Section Header ───────────────────────────────────────────── */}
        <div ref={labelRef} className="reveal-item text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-accent/40" />
            <span className="font-body text-accent text-xs tracking-widest uppercase font-semibold">
              Shop by Occasion
            </span>
            <div className="h-px w-12 bg-accent/40" />
          </div>
          <h2
            className="font-display text-white font-light leading-tight"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}
          >
            Find Your Perfect Look
          </h2>
          <p className="font-body text-white/50 text-base mt-3 max-w-md mx-auto leading-relaxed">
            Browse our three carefully curated collections, each designed for a different chapter of your life.
          </p>
        </div>

        {/* ── Category Cards Grid ──────────────────────────────────────── */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {categories.map(({ category, title, description }) => (
            <CategoryCard
              key={category}
              category={category}
              title={title}
              description={description}
              image={previews[category].image}
              itemCount={galleryItems.filter((i) => i.category === category).length}
              onSelect={onSelectCategory}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
