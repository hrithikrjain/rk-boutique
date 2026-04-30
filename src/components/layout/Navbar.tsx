import { useEffect, useState } from 'react';
import { Menu, X, ShoppingBag, MessageCircle, Search, Lock } from 'lucide-react';
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

  function handleNavClick() {
    setMobileOpen(false);
  }

  const logoTextColor = scrolled ? 'text-text-dark' : 'text-white';
  const linkColor = scrolled ? 'text-text-body hover:text-pink' : 'text-white/80 hover:text-white';
  const iconBg = scrolled ? 'bg-pink-muted hover:bg-pink/20 text-text-dark' : 'bg-white/10 hover:bg-white/20 text-white';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-30 transition-all duration-400 ${
          scrolled
            ? 'bg-cream/95 backdrop-blur-md shadow-sm border-b border-border-light'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 md:px-12 h-16 md:h-20 flex items-center justify-between gap-6">

          {/* Logo + Brand */}
          <a href="#home" className="flex items-center gap-3 flex-shrink-0" onClick={handleNavClick}>
            <div className={`w-9 h-9 rounded-full overflow-hidden border ${scrolled ? 'border-border-light' : 'border-white/30'}`}>
              <img
                src="/images/logo.jpg"
                alt="RK Boutique logo"
                className="w-full h-full object-cover"
              />
            </div>
            <span className={`font-display text-xl font-medium tracking-wide transition-colors duration-300 ${logoTextColor}`}>
              RK Boutique
            </span>
          </a>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center gap-7">
            {siteData.navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`font-body text-sm font-medium transition-colors duration-200 relative group ${linkColor}`}
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-pink group-hover:w-full transition-all duration-300" />
                </a>
              </li>
            ))}
          </ul>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {/* Search icon */}
            <a
              href="#gallery"
              className={`hidden md:flex w-9 h-9 rounded-full items-center justify-center transition-colors duration-200 ${iconBg}`}
              aria-label="Search collections"
            >
              <Search size={16} />
            </a>

            {/* WhatsApp CTA */}
            <a
              href={getWhatsAppChatUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs font-body font-semibold px-4 py-2 rounded-lg transition-colors duration-200"
            >
              <MessageCircle size={14} />
              WhatsApp
            </a>

            {/* Cart icon */}
            <button
              onClick={toggleCart}
              className={`relative w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200 ${iconBg}`}
              aria-label={`Inquiry cart, ${itemCount} items`}
            >
              <ShoppingBag size={18} />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-pink text-white text-[10px] font-bold flex items-center justify-center">
                  {itemCount > 9 ? '9+' : itemCount}
                </span>
              )}
            </button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className={`md:hidden w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200 ${iconBg}`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile backdrop */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-20 bg-text-dark/40 backdrop-blur-sm md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile slide-down panel */}
      <div
        className={`fixed top-16 left-0 right-0 z-25 md:hidden transition-all duration-400 ${
          mobileOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="bg-cream/98 backdrop-blur-md border-b border-border-light px-6 py-6 shadow-glass">
          <ul className="space-y-1 mb-5">
            {siteData.navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={handleNavClick}
                  className="block font-body text-text-body hover:text-pink text-base py-3 border-b border-border-light transition-colors duration-200"
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

          {/* Admin link */}
          <a
            href="/admin/"
            className="flex items-center justify-center gap-2 w-full mt-3 border border-border-light text-text-muted hover:text-pink hover:border-pink/40 font-body text-xs py-2.5 rounded-xl transition-colors duration-200"
          >
            <Lock size={13} />
            Admin Panel
          </a>
        </div>
      </div>
    </>
  );
}
