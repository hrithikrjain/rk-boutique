import { useRef, useState } from 'react';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useContent } from '../../context/ContentContext';
import { BestSellerCard } from '../ui/BestSellerCard';
import { Lightbox } from '../ui/Lightbox';
import type { GalleryItem } from '../../types';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export function BestSellersSection() {
  const { galleryItems } = useContent();
  const headingRef = useScrollReveal<HTMLDivElement>();
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const bestSellers = galleryItems.filter((item) => item.isBestSeller && item.available);

  if (!bestSellers.length) return null;

  function scroll(dir: 'left' | 'right') {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === 'right' ? 280 : -280, behavior: 'smooth' });
  }

  function openLightbox(item: GalleryItem) {
    setLightboxItem(item);
  }

  return (
    <>
      <section className="py-16 sm:py-20 bg-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div ref={headingRef} className="reveal-item text-center mb-10">
            <div className="inline-block mb-2">
              <span className="font-script text-pink text-3xl sm:text-4xl">Our</span>
            </div>
            <div className="relative inline-block">
              <h2 className="font-heading text-brown text-4xl sm:text-5xl font-bold tracking-tight uppercase">
                Best Sellers
              </h2>
              {/* Pink brush-stroke underline */}
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 200 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M2 7 C40 3, 80 9, 120 5 C160 1, 180 8, 198 6"
                  stroke="#FB5FAB"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </div>
            <p className="font-body text-text-body mt-5 text-sm sm:text-base max-w-md mx-auto">
              Our customers' all-time favourites — handpicked for quality, style, and occasion.
            </p>
          </div>

          {/* Carousel */}
          <div className="relative">
            {/* Scroll arrows (desktop) */}
            <button
              onClick={() => scroll('left')}
              aria-label="Scroll left"
              className="hidden sm:flex absolute -left-4 top-1/3 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white border border-border-light shadow-card items-center justify-center text-text-body hover:text-pink hover:border-pink transition-colors duration-200"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll('right')}
              aria-label="Scroll right"
              className="hidden sm:flex absolute -right-4 top-1/3 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white border border-border-light shadow-card items-center justify-center text-text-body hover:text-pink hover:border-pink transition-colors duration-200"
            >
              <ChevronRight size={18} />
            </button>

            {/* Cards scroll container */}
            <div
              ref={scrollRef}
              className="flex gap-5 overflow-x-auto scrollbar-hide pb-4 sm:justify-center"
            >
              {bestSellers.map((item) => (
                <BestSellerCard
                  key={item.id}
                  item={item}
                  onOpenLightbox={openLightbox}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {lightboxItem && (
        <Lightbox
          item={lightboxItem}
          items={bestSellers}
          onClose={() => setLightboxItem(null)}
          onNavigate={(item) => setLightboxItem(item)}
        />
      )}
    </>
  );
}
