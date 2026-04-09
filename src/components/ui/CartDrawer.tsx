import { useEffect } from 'react';
import { X, Trash2, ShoppingBag, Send, Sparkles } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { buildWhatsAppUrl } from '../../utils/whatsapp';

export function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, clearCart } = useCart();

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  function handleSendInquiry() {
    if (items.length === 0) return;
    const url = buildWhatsAppUrl(items);
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  const categoryLabel: Record<string, string> = {
    casual: 'Casual',
    party: 'Party Wear',
    wedding: 'Wedding',
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-primary/60 backdrop-blur-sm"
          onClick={closeCart}
        />
      )}

      {/* Drawer — slides from right on desktop, slides from bottom on mobile */}
      <div
        className={`fixed z-50 bg-gradient-to-b from-primary to-primary-light shadow-2xl transition-transform duration-400 ease-in-out
          /* Mobile: bottom sheet */
          bottom-0 left-0 right-0 rounded-t-3xl max-h-[85vh]
          /* Desktop: right side panel */
          md:bottom-auto md:top-0 md:left-auto md:right-0 md:h-full md:w-96 md:rounded-none md:rounded-l-2xl
          ${isOpen
            ? 'translate-y-0 md:translate-x-0'
            : 'translate-y-full md:translate-y-0 md:translate-x-full'
          }
        `}
      >
        {/* Handle bar (mobile) */}
        <div className="flex justify-center pt-3 pb-1 md:hidden">
          <div className="w-10 h-1 rounded-full bg-white/20" />
        </div>

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
          <div className="flex items-center gap-2">
            <ShoppingBag size={18} className="text-accent" />
            <h2 className="font-display text-white text-xl font-medium">My Selection</h2>
            {items.length > 0 && (
              <span className="bg-accent text-primary text-xs font-body font-bold px-2 py-0.5 rounded-full">
                {items.length}
              </span>
            )}
          </div>
          <button
            onClick={closeCart}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors duration-200"
          >
            <X size={16} />
          </button>
        </div>

        {/* Content */}
        <div className="flex flex-col h-full overflow-hidden" style={{ maxHeight: 'calc(85vh - 80px)' }}>
          {items.length === 0 ? (
            /* Empty state */
            <div className="flex-1 flex flex-col items-center justify-center px-6 py-12 text-center">
              <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4">
                <Sparkles size={28} className="text-accent/40" />
              </div>
              <p className="font-display text-white/60 text-lg">No items selected yet</p>
              <p className="font-body text-white/30 text-sm mt-2 leading-relaxed">
                Browse our gallery and tap "Add to Inquiry" on pieces you love.
              </p>
              <button
                onClick={closeCart}
                className="mt-6 text-accent text-sm font-body font-medium hover:text-accent-light transition-colors duration-200"
              >
                Browse Collection →
              </button>
            </div>
          ) : (
            <>
              {/* Items list */}
              <div className="flex-1 overflow-y-auto px-6 py-4 space-y-3 scrollbar-hide">
                {items.map((cartItem) => (
                  <div
                    key={cartItem.galleryItem.id}
                    className="flex gap-3 bg-white/5 rounded-xl p-3 border border-white/10"
                  >
                    {/* Thumbnail */}
                    <div className="w-16 h-20 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={cartItem.galleryItem.image}
                        alt={cartItem.galleryItem.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <p className="font-body text-white text-sm font-medium leading-tight truncate">
                        {cartItem.galleryItem.title}
                      </p>
                      <p className="font-body text-accent text-xs mt-0.5">
                        {categoryLabel[cartItem.galleryItem.category]}
                      </p>
                      <p className="font-body text-white/40 text-xs mt-0.5 tracking-wider">
                        {cartItem.galleryItem.code}
                      </p>
                    </div>

                    {/* Remove */}
                    <button
                      onClick={() => removeItem(cartItem.galleryItem.id)}
                      className="flex-shrink-0 w-7 h-7 rounded-lg bg-white/5 hover:bg-red-500/20 flex items-center justify-center text-white/30 hover:text-red-400 transition-colors duration-200"
                    >
                      <Trash2 size={13} />
                    </button>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="px-6 py-4 border-t border-white/10 space-y-3">
                <button
                  onClick={handleSendInquiry}
                  className="w-full flex items-center justify-center gap-2 bg-accent hover:bg-accent-light text-primary font-body font-semibold py-3.5 px-6 rounded-xl transition-all duration-200 hover:shadow-glow text-sm"
                >
                  <Send size={16} />
                  Send Inquiry on WhatsApp
                </button>
                <button
                  onClick={clearCart}
                  className="w-full text-white/30 hover:text-white/60 text-xs font-body text-center transition-colors duration-200 py-1"
                >
                  Clear all selections
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
