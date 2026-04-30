import { ShoppingBag, Check, ZoomIn } from 'lucide-react';
import type { GalleryItem } from '../../types';
import { useCart } from '../../context/CartContext';
import { ImageWatermark } from './ImageWatermark';

interface GalleryCardProps {
  item: GalleryItem;
  onOpenLightbox: (item: GalleryItem) => void;
}

const categoryLabel: Record<string, string> = {
  casual: 'Casual',
  party: 'Party Wear',
  wedding: 'Wedding',
  coord: 'Co-ord Sets',
  gown: 'Gowns',
  kurti: 'Kurtis',
};

export function GalleryCard({ item, onOpenLightbox }: GalleryCardProps) {
  const { addItem, isInCart } = useCart();
  const inCart = isInCart(item.id);

  function handleAdd(e: React.MouseEvent) {
    e.stopPropagation();
    addItem(item);
  }

  return (
    <div
      className="group relative overflow-hidden rounded-2xl cursor-pointer bg-white border border-border-light"
      style={{ breakInside: 'avoid', marginBottom: '1rem' }}
      onClick={() => onOpenLightbox(item)}
    >
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
      />

      <ImageWatermark mode="card" />

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-text-dark/90 via-text-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-4">
        <span className="text-pink text-xs font-body font-semibold tracking-widest uppercase mb-1">
          {categoryLabel[item.category] ?? item.category}
        </span>

        <h3 className="font-display text-white text-lg font-medium leading-tight mb-1">
          {item.title}
        </h3>

        <span className="font-body text-pink-muted text-xs tracking-wider mb-3">
          {item.code}
        </span>

        <div className="flex items-center gap-2">
          <button
            onClick={handleAdd}
            className={`flex items-center gap-1.5 text-xs font-body font-semibold px-3 py-2 rounded-lg transition-all duration-200 ${
              inCart
                ? 'bg-green-500/20 text-green-300 border border-green-500/40'
                : 'bg-pink text-white hover:bg-pink-light'
            }`}
          >
            {inCart ? (
              <><Check size={13} /> Added</>
            ) : (
              <><ShoppingBag size={13} /> Add to Inquiry</>
            )}
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); onOpenLightbox(item); }}
            className="p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors duration-200"
          >
            <ZoomIn size={14} />
          </button>
        </div>
      </div>

      {/* In-cart badge */}
      {inCart && (
        <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-pink flex items-center justify-center shadow-lg">
          <Check size={12} className="text-white" strokeWidth={3} />
        </div>
      )}
    </div>
  );
}
