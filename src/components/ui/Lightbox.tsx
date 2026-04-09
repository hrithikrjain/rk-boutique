import { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, ShoppingBag, Check } from 'lucide-react';
import type { GalleryItem } from '../../types';
import { useCart } from '../../context/CartContext';

interface LightboxProps {
  item: GalleryItem;
  items: GalleryItem[];
  onClose: () => void;
  onNavigate: (item: GalleryItem) => void;
}

export function Lightbox({ item, items, onClose, onNavigate }: LightboxProps) {
  const { addItem, isInCart } = useCart();
  const inCart = isInCart(item.id);
  const currentIndex = items.findIndex((i) => i.id === item.id);

  const goPrev = useCallback(() => {
    const prev = items[(currentIndex - 1 + items.length) % items.length];
    onNavigate(prev);
  }, [currentIndex, items, onNavigate]);

  const goNext = useCallback(() => {
    const next = items[(currentIndex + 1) % items.length];
    onNavigate(next);
  }, [currentIndex, items, onNavigate]);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    }
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose, goPrev, goNext]);

  const categoryLabel: Record<string, string> = {
    casual: 'Casual',
    party: 'Party Wear',
    wedding: 'Wedding',
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-primary/95 backdrop-blur-sm" />

      {/* Content */}
      <div
        className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-8 max-w-5xl w-full max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image */}
        <div className="flex-1 flex items-center justify-center min-h-0">
          <img
            src={item.image}
            alt={item.title}
            className="max-h-[60vh] md:max-h-[80vh] w-auto max-w-full rounded-xl object-contain shadow-2xl"
          />
        </div>

        {/* Details panel */}
        <div className="md:w-72 flex flex-col justify-center">
          <span className="text-accent text-xs font-body font-semibold tracking-widest uppercase mb-2">
            {categoryLabel[item.category]}
          </span>
          <h2 className="font-display text-white text-2xl md:text-3xl font-medium mb-2 leading-tight">
            {item.title}
          </h2>
          <p className="font-body text-accent-light text-sm tracking-wider mb-4">
            Ref: {item.code}
          </p>
          <p className="font-body text-white/70 text-sm leading-relaxed mb-6">
            {item.description}
          </p>

          <button
            onClick={() => addItem(item)}
            className={`flex items-center justify-center gap-2 w-full py-3 px-6 rounded-xl font-body font-semibold text-sm transition-all duration-200 ${
              inCart
                ? 'bg-green-500/20 text-green-300 border border-green-500/40'
                : 'bg-accent text-primary hover:bg-accent-light hover:shadow-glow'
            }`}
          >
            {inCart ? (
              <><Check size={16} /> Added to Inquiry</>
            ) : (
              <><ShoppingBag size={16} /> Add to Inquiry</>
            )}
          </button>

          {/* Counter */}
          <p className="text-white/30 text-xs font-body text-center mt-4">
            {currentIndex + 1} / {items.length}
          </p>
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={(e) => { e.stopPropagation(); goPrev(); }}
        className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors duration-200 backdrop-blur-xs"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); goNext(); }}
        className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors duration-200 backdrop-blur-xs"
      >
        <ChevronRight size={20} />
      </button>

      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors duration-200"
      >
        <X size={18} />
      </button>
    </div>
  );
}
