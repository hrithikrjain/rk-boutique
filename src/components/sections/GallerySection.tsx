import { useState, useCallback, forwardRef, useEffect } from 'react';
import { GalleryCard } from '../ui/GalleryCard';
import { Lightbox } from '../ui/Lightbox';
import { galleryItems } from '../../data/galleryData';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import type { GalleryItem, GalleryCategory } from '../../types';

type FilterTab = 'all' | GalleryCategory;

const tabs: Array<{ value: FilterTab; label: string }> = [
  { value: 'all', label: 'All Pieces' },
  { value: 'casual', label: 'Casual' },
  { value: 'party', label: 'Party Wear' },
  { value: 'wedding', label: 'Wedding' },
];

interface GallerySectionProps {
  defaultFilter?: FilterTab;
}

export const GallerySection = forwardRef<HTMLElement, GallerySectionProps>(
  ({ defaultFilter = 'all' }, ref) => {
    const [activeFilter, setActiveFilter] = useState<FilterTab>(defaultFilter);
    const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);
    const headerRef = useScrollReveal<HTMLDivElement>();

    // Listen for category filter events dispatched from App (via CategorySection)
    useEffect(() => {
      function handleFilterEvent(e: Event) {
        const category = (e as CustomEvent<{ category: GalleryCategory }>).detail.category;
        setActiveFilter(category);
      }
      window.addEventListener('rk:filter-gallery', handleFilterEvent);
      return () => window.removeEventListener('rk:filter-gallery', handleFilterEvent);
    }, []);

    const filteredItems =
      activeFilter === 'all'
        ? galleryItems
        : galleryItems.filter((i) => i.category === activeFilter);

    const handleOpenLightbox = useCallback((item: GalleryItem) => {
      setLightboxItem(item);
    }, []);

    const handleCloseLightbox = useCallback(() => {
      setLightboxItem(null);
    }, []);

    const handleNavigate = useCallback((item: GalleryItem) => {
      setLightboxItem(item);
    }, []);

    return (
      <section ref={ref} id="gallery" className="py-24 md:py-32 bg-surface overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">

          {/* ── Header ───────────────────────────────────────────────── */}
          <div ref={headerRef} className="reveal-item text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12 bg-accent" />
              <span className="font-body text-accent text-xs tracking-widest uppercase font-semibold">
                Our Collection
              </span>
              <div className="h-px w-12 bg-accent" />
            </div>
            <h2
              className="font-display text-text-main font-light leading-tight mb-4"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}
            >
              The Gallery
            </h2>
            <p className="font-body text-text-muted text-base max-w-md mx-auto leading-relaxed">
              Browse our latest arrivals. Tap any piece to see details, or add it directly to your inquiry.
            </p>
          </div>

          {/* ── Filter Tabs ───────────────────────────────────────────── */}
          <div className="flex items-center justify-center gap-2 mb-10 flex-wrap">
            {tabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveFilter(tab.value)}
                className={`relative font-body text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-300 ${
                  activeFilter === tab.value
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-white text-text-muted hover:text-primary hover:bg-surface-dark border border-surface-dark'
                }`}
              >
                {tab.label}
                {activeFilter === tab.value && (
                  <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent" />
                )}
              </button>
            ))}
          </div>

          {/* ── Masonry Grid ──────────────────────────────────────────── */}
          {/*
            CSS multi-column masonry: column-count handles mixed aspect ratios
            naturally — no JS library needed, no forced crops.
          */}
          <div
            key={activeFilter} // remount on filter change for clean re-render
            className="masonry-grid"
            style={{
              columnCount: 1,
              columnGap: '1rem',
            }}
          >
            {/* Responsive column count via inline style + media query via CSS vars */}
            <style>{`
              .masonry-grid {
                column-count: 1;
                column-gap: 1rem;
              }
              @media (min-width: 640px) {
                .masonry-grid { column-count: 2; }
              }
              @media (min-width: 1024px) {
                .masonry-grid { column-count: 3; }
              }
            `}</style>

            {filteredItems.map((item) => (
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
              <p className="font-display text-text-muted text-2xl">No items found</p>
            </div>
          )}

          {/* Inquiry prompt */}
          <div className="text-center mt-12">
            <p className="font-body text-text-muted text-sm">
              Interested in a piece?{' '}
              <span className="text-primary font-medium">
                Add it to your inquiry and we'll share availability on WhatsApp.
              </span>
            </p>
          </div>

        </div>

        {/* ── Lightbox ─────────────────────────────────────────────── */}
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
