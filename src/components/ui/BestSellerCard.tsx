import { ShoppingBag, Check } from 'lucide-react';
import type { GalleryItem } from '../../types';
import { useCart } from '../../context/CartContext';
import { ImageWatermark } from './ImageWatermark';

interface BestSellerCardProps {
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

export function BestSellerCard({ item, onOpenLightbox }: BestSellerCardProps) {
  const { addItem, isInCart } = useCart();
  const inCart = isInCart(item.id);

  function handleAdd(e: React.MouseEvent) {
    e.stopPropagation();
    addItem(item);
  }

  return (
    <div
      className="group relative flex-shrink-0 w-56 sm:w-64 cursor-pointer"
      onClick={() => onOpenLightbox(item)}
    >
      {/* Image container — fixed 2:3 aspect ratio */}
      <div className="relative overflow-hidden rounded-2xl aspect-[2/3] bg-cream-dark">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <ImageWatermark mode="card" />

        {/* In-cart badge */}
        {inCart && (
          <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-pink flex items-center justify-center shadow-lg z-10">
            <Check size={12} className="text-white" strokeWidth={3} />
          </div>
        )}

        {/* Best Seller badge */}
        <div className="absolute top-3 left-3 bg-pink text-white text-[10px] font-body font-semibold uppercase tracking-widest px-2 py-1 rounded-full">
          Best Seller
        </div>
      </div>

      {/* Card info */}
      <div className="mt-3 px-1">
        <span className="text-pink text-xs font-body font-semibold uppercase tracking-widest">
          {categoryLabel[item.category]}
        </span>
        <h3 className="font-subheading text-text-dark text-base font-medium mt-0.5 line-clamp-2 leading-snug">
          {item.title}
        </h3>
        <p className="text-text-muted text-xs font-body mt-0.5">{item.code}</p>

        <button
          onClick={handleAdd}
          className={`mt-3 w-full flex items-center justify-center gap-1.5 text-xs font-body font-semibold px-3 py-2.5 rounded-xl transition-all duration-200 ${
            inCart
              ? 'bg-green-50 text-green-700 border border-green-300'
              : 'bg-pink text-white hover:bg-pink-light hover:shadow-pink-glow'
          }`}
        >
          {inCart ? (
            <><Check size={13} /> Added to Inquiry</>
          ) : (
            <><ShoppingBag size={13} /> Add to Inquiry</>
          )}
        </button>
      </div>
    </div>
  );
}
