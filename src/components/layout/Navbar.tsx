import { useEffect, useState } from 'react';
import { Menu, X, ShoppingBag, MessageCircle } from 'lucide-react';
import { useContent } from '../../context/ContentContext';
import { useCart } from '../../context/CartContext';
import { getWhatsAppChatUrl } from '../../utils/whatsapp';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { siteData } = useContent();
  const { itemCount, toggleCart } = useCart();

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 40);
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on nav click
  function handleNavClick() {
    setMobileOpen(false);
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-30 transition-all duration-400 ${
          scrolled
            ? 'bg-primary/90 backdrop-blur-md shadow-glass border-b border-white/5'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 md:px-12 h-16 md:h-20 flex items-center justify-between gap-6">

          {/* ── Logo + Brand ──────────────────────────────────────────── */}
          <a href="#home" className="flex items-center gap-3 flex-shrink-0" onClick={handleNavClick}>
            <div className="w-9 h-9 rounded-full overflow-hidden border border-accent/30">
              <img
                src="/images/logo.jpg"
                alt="RK Boutique logo"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-display text-white text-xl font-medium tracking-wide">
              RK Boutique
            </span>
          </a>

          {/* ── Desktop Nav Links ─────────────────────────────────────── */}
          <ul className="hidden md:flex items-center gap-7">
            {siteData.navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-body text-white/70 hover:text-white text-sm font-medium transition-colors duration-200 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300" />
                </a>
              </li>
            ))}
          </ul>

          {/* ── Right Actions ─────────────────────────────────────────── */}
          <div className="flex items-center gap-3">
            {/* WhatsApp CTA — hidden on mobile */}
            <a
              href={getWhatsAppChatUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs font-body font-semibold px-4 py-2 rounded-lg transition-colors duration-200"
            >
              <MessageCircle size={14} />
              WhatsApp
            </a>

            {/* Cart icon with badge */}
            <button
              onClick={toggleCart}
              className="relative w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors duration-200"
              aria-label={`Inquiry cart, ${itemCount} items`}
            >
              <ShoppingBag size={18} />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-accent text-primary text-[10px] font-bold flex items-center justify-center">
                  {itemCount > 9 ? '9+' : itemCount}
                </span>
              )}
            </button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </header>

      {/* ── Mobile Menu ───────────────────────────────────────────────── */}
      {/* Backdrop */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-20 bg-primary/60 backdrop-blur-sm md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Slide-down panel */}
      <div
        className={`fixed top-16 left-0 right-0 z-25 md:hidden transition-all duration-400 ${
          mobileOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="bg-primary/95 backdrop-blur-md border-b border-white/10 px-6 py-6">
          <ul className="space-y-1 mb-5">
            {siteData.navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={handleNavClick}
                  className="block font-body text-white/80 hover:text-white text-base py-3 border-b border-white/5 transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={getWhatsAppChatUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20BD5A] text-white font-body font-semibold py-3.5 rounded-xl transition-colors duration-200 text-sm"
          >
            <MessageCircle size={16} />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}
