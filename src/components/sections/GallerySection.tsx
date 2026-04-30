import { useState, useCallback, forwardRef, useEffect } from 'react';
import { LayoutGrid, Grid3X3, AlignJustify } from 'lucide-react';
import { GalleryCard } from '../ui/GalleryCard';
import { Lightbox } from '../ui/Lightbox';
import { useContent } from '../../context/ContentContext';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import type { GalleryItem, GalleryCategory } from '../../types';

type GridCols = 1 | 2 | 3;
const PAGE_SIZE = 10;

type FilterTab = 'all' | GalleryCategory;

const tabs: Array<{ value: FilterTab; label: string }> = [
  { value: 'all',     label: 'All Pieces' },
  { value: 'casual',  label: 'Casual' },
  { value: 'party',   label: 'Party Wear' },
  { value: 'wedding', label: 'Wedding' },
  { value: 'coord',   label: 'Co-ord Sets' },
  { value: 'gown',    label: 'Gowns' },
  { value: 'kurti',   label: 'Kurtis' },
];

interface GallerySectionProps {
  defaultFilter?: FilterTab;
}

export const GallerySection = forwardRef<HTMLElement, GallerySectionProps>(
  ({ defaultFilter = 'all' }, ref) => {
    const { galleryItems } = useContent();
    const [activeFilter, setActiveFilter] = useState<FilterTab>(defaultFilter);
    const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);
    const [gridCols, setGridCols] = useState<GridCols>(2);
    const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
    const headerRef = useScrollReveal<HTMLDivElement>();

    useEffect(() => {
      function handleFilterEvent(e: Event) {
        const category = (e as CustomEvent<{ category: GalleryCategory }>).detail.category;
        setActiveFilter(category);
        setVisibleCount(PAGE_SIZE);
      }
      window.addEventListener('rk:filter-gallery', handleFilterEvent);
      return () => window.removeEventListener('rk:filter-gallery', handleFilterEvent);
    }, []);

    // Reset page when filter changes
    useEffect(() => { setVisibleCount(PAGE_SIZE); }, [activeFilter]);

    const filteredItems =
      activeFilter === 'all'
        ? galleryItems
        : galleryItems.filter((i) => i.category === activeFilter);

    const visibleItems = filteredItems.slice(0, visibleCount);
    const hasMore = filteredItems.length > visibleCount;

    const handleOpenLightbox = useCallback((item: GalleryItem) => setLightboxItem(item), []);
    const handleCloseLightbox = useCallback(() => setLightboxItem(null), []);
    const handleNavigate = useCallback((item: GalleryItem) => setLightboxItem(item), []);

    return (
      <section ref={ref} id="gallery" className="py-20 md:py-28 bg-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">

          {/* Header */}
          <div ref={headerRef} className="reveal-item text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12 bg-pink" />
              <span className="font-body text-pink text-xs tracking-widest uppercase font-semibold">
                Our Collection
              </span>
              <div className="h-px w-12 bg-pink" />
            </div>
            <h2
              className="font-heading text-brown font-bold leading-tight mb-4"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}
            >
              The Gallery
            </h2>
            <p className="font-body text-text-body text-base max-w-md mx-auto leading-relaxed">
              Browse our latest arrivals. Tap any piece to see details, or add it directly to your inquiry.
            </p>
          </div>

          {/* Filter Tabs + Grid Toggle */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
            {/* Category tabs */}
            <div className="flex items-center justify-center gap-2 flex-wrap">
              {tabs.map((tab) => (
                <button
                  key={tab.value}
                  onClick={() => setActiveFilter(tab.value)}
                  className={`relative font-body text-sm font-medium px-4 py-2 rounded-full transition-all duration-300 ${
                    activeFilter === tab.value
                      ? 'bg-pink text-white shadow-card'
                      : 'bg-white text-text-body hover:text-pink border border-border-light hover:border-pink/40'
                  }`}
                >
                  {tab.label}
                  {activeFilter === tab.value && (
                    <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-pink-light" />
                  )}
                </button>
              ))}
            </div>

            {/* Grid view toggle */}
            <div className="flex items-center gap-1 bg-white border border-border-light rounded-full px-1 py-1 shadow-sm shrink-0">
              {([
                { cols: 1 as GridCols, Icon: AlignJustify,  label: '1 column'  },
                { cols: 2 as GridCols, Icon: LayoutGrid,    label: '2 columns' },
                { cols: 3 as GridCols, Icon: Grid3X3,       label: '3 columns' },
              ] as const).map(({ cols, Icon, label }) => (
                <button
                  key={cols}
                  onClick={() => setGridCols(cols)}
                  aria-label={label}
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 ${
                    gridCols === cols
                      ? 'bg-pink text-white shadow-sm'
                      : 'text-text-muted hover:text-pink'
                  }`}
                >
                  <Icon size={15} />
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <div
            key={activeFilter}
            style={{
              columnCount: gridCols,
              columnGap: '1rem',
            }}
          >
            {visibleItems.map((item) => (
              <GalleryCard
                key={item.id}
                item={item}
                onOpenLightbox={handleOpenLightbox}
              />
            ))}
          </div>

          {/* Empty state */}
          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <p className="font-heading text-text-muted text-2xl">No items found</p>
            </div>
          )}

          {/* Load More */}
          {hasMore && (
            <div className="text-center mt-10">
              <button
                onClick={() => setVisibleCount((n) => n + PAGE_SIZE)}
                className="inline-flex items-center gap-2 font-body font-semibold text-sm px-8 py-3.5 rounded-full border-2 border-pink text-pink hover:bg-pink hover:text-white transition-all duration-300 shadow-sm hover:shadow-card"
              >
                Load More
                <span className="font-normal text-xs opacity-70">
                  ({filteredItems.length - visibleCount} remaining)
                </span>
              </button>
            </div>
          )}

          {/* Inquiry prompt */}
          <div className="text-center mt-12">
            <p className="font-body text-text-muted text-sm">
              Interested in a piece?{' '}
              <span className="text-pink font-medium">
                Add it to your inquiry and we'll share availability on WhatsApp.
              </span>
            </p>
          </div>

        </div>

        {lightboxItem && (
          <Lightbox
            item={lightboxItem}
            items={filteredItems}
            onClose={handleCloseLightbox}
            onNavigate={handleNavigate}
          />
        )}
      </section>
    );
  }
);

GallerySection.displayName = 'GallerySection';
