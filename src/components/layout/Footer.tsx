import { Instagram, MessageCircle, MapPin, Phone } from 'lucide-react';
import { siteData } from '../../data/siteData';
import { getWhatsAppChatUrl, getCallUrl } from '../../utils/whatsapp';

export function Footer() {
  const { contact, navLinks, brandName } = siteData;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary border-t border-white/5">
      {/* ── Main footer content ──────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">

          {/* ── Column 1: Brand ───────────────────────────────────────── */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-accent/30">
                <img src="/images/logo.jpg" alt="RK Boutique" className="w-full h-full object-cover" />
              </div>
              <span className="font-display text-white text-xl font-medium">{brandName}</span>
            </div>
            <p className="font-body text-white/50 text-sm leading-relaxed mb-5">
              Your destination for designer kurtis, Indo-Western sets & sharara suits in Malad West, Mumbai.
              Curated fashion for every occasion, every woman.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-3">
              <a
                href={contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 flex items-center justify-center text-white/60 hover:text-white transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href={getWhatsAppChatUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#25D366] flex items-center justify-center text-white/60 hover:text-white transition-all duration-200"
                aria-label="WhatsApp"
              >
                <MessageCircle size={16} />
              </a>
              <a
                href={getCallUrl(contact.phone)}
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-accent flex items-center justify-center text-white/60 hover:text-primary transition-all duration-200"
                aria-label="Call"
              >
                <Phone size={16} />
              </a>
            </div>
          </div>

          {/* ── Column 2: Quick Links ─────────────────────────────────── */}
          <div>
            <h4 className="font-display text-white text-base font-medium mb-5 tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-body text-white/50 hover:text-accent text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Column 3: Contact ─────────────────────────────────────── */}
          <div>
            <h4 className="font-display text-white text-base font-medium mb-5 tracking-wide">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin size={15} className="text-accent flex-shrink-0 mt-0.5" />
                <a
                  href={contact.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-white/50 hover:text-white/80 text-sm leading-relaxed transition-colors duration-200"
                >
                  {contact.address}
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <Phone size={15} className="text-accent flex-shrink-0" />
                <a
                  href={getCallUrl(contact.phone)}
                  className="font-body text-white/50 hover:text-white/80 text-sm transition-colors duration-200"
                >
                  {contact.phone}
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <MessageCircle size={15} className="text-accent flex-shrink-0" />
                <a
                  href={getWhatsAppChatUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-white/50 hover:text-white/80 text-sm transition-colors duration-200"
                >
                  {contact.whatsapp}
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <Instagram size={15} className="text-accent flex-shrink-0" />
                <a
                  href={contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-white/50 hover:text-white/80 text-sm transition-colors duration-200"
                >
                  {contact.instagramHandle}
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* ── Bottom bar ───────────────────────────────────────────────── */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-body text-white/25 text-xs">
            © {year} {brandName}. All rights reserved.
          </p>
          <a
            href="https://morphedai.org"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-white/20 hover:text-white/40 text-xs transition-colors duration-200"
          >
            Branding by Morphed AI Pvt Ltd
          </a>
        </div>
      </div>
    </footer>
  );
}
