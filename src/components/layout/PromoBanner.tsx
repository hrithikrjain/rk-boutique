import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { useContent } from '../../context/ContentContext';

const DISMISS_KEY = 'rk_promo_dismissed';

export function PromoBanner() {
  const { siteData } = useContent();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem(DISMISS_KEY);
    if (!dismissed && siteData.promoBanner?.enabled) {
      setVisible(true);
    }
  }, [siteData.promoBanner?.enabled]);

  function dismiss() {
    localStorage.setItem(DISMISS_KEY, '1');
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="relative z-40 bg-pink-bg border-b border-pink/20 py-2 px-4">
      <p className="text-center text-text-dark text-xs sm:text-sm font-body font-medium pr-8">
        {siteData.promoBanner?.text}
      </p>
      <button
        onClick={dismiss}
        aria-label="Dismiss banner"
        className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-dark transition-colors duration-150"
      >
        <X size={14} />
      </button>
    </div>
  );
}
