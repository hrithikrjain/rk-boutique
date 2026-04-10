import { Phone, MessageCircle, MapPin, Instagram, ExternalLink, Clock } from 'lucide-react';
import { useScrollReveal, useStaggerReveal } from '../../hooks/useScrollReveal';
import { useContent } from '../../context/ContentContext';
import { WhatsAppButton } from '../ui/WhatsAppButton';
import { getCallUrl } from '../../utils/whatsapp';

export function ContactSection() {
  const { siteData } = useContent();
  const headerRef = useScrollReveal<HTMLDivElement>();
  const cardsRef = useStaggerReveal<HTMLDivElement>({ threshold: 0.1 });

  const { contact } = siteData;

  return (
    <section id="contact" className="py-24 md:py-32 bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* ── Header ───────────────────────────────────────────────────── */}
        <div ref={headerRef} className="reveal-item text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-accent" />
            <span className="font-body text-accent text-xs tracking-widest uppercase font-semibold">
              Find Us
            </span>
            <div className="h-px w-12 bg-accent" />
          </div>
          <h2
            className="font-display text-text-main font-light leading-tight"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}
          >
            Come Visit Us
          </h2>
          <p className="font-body text-text-muted text-base mt-3 max-w-md mx-auto leading-relaxed">
            We'd love to meet you in person. Drop by, browse our latest collection, and let our team help you find your perfect look.
          </p>
        </div>

        {/* ── Two-column layout ─────────────────────────────────────────── */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">

          {/* ── Contact Cards ─────────────────────────────────────────── */}
          <div ref={cardsRef} className="space-y-4">

            {/* Address card */}
            <div className="reveal-item bg-white rounded-2xl p-6 shadow-glass border border-surface-dark">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-accent" />
                </div>
                <div>
                  <p className="font-body text-text-main font-semibold text-sm mb-1">Store Address</p>
                  <p className="font-body text-text-muted text-sm leading-relaxed">{contact.address}</p>
                  <a
                    href={contact.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-accent hover:text-primary font-body text-xs font-semibold mt-2 transition-colors duration-200"
                  >
                    <ExternalLink size={12} />
                    Get Directions on Maps
                  </a>
                </div>
              </div>
            </div>

            {/* Phone card */}
            <div className="reveal-item bg-white rounded-2xl p-6 shadow-glass border border-surface-dark">
              <div className="flex gap-4 items-center justify-between">
                <div className="flex gap-4 items-center">
                  <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center flex-shrink-0">
                    <Phone size={18} className="text-accent" />
                  </div>
                  <div>
                    <p className="font-body text-text-main font-semibold text-sm mb-0.5">Call Us</p>
                    <p className="font-body text-text-muted text-sm">{contact.phone}</p>
                  </div>
                </div>
                <a
                  href={getCallUrl(contact.phone)}
                  className="bg-primary hover:bg-primary-light text-white text-xs font-body font-semibold px-4 py-2 rounded-lg transition-colors duration-200"
                >
                  Call Now
                </a>
              </div>
            </div>

            {/* WhatsApp card */}
            <div className="reveal-item bg-white rounded-2xl p-6 shadow-glass border border-surface-dark">
              <div className="flex gap-4 items-center justify-between">
                <div className="flex gap-4 items-center">
                  <div className="w-10 h-10 rounded-xl bg-[#25D366]/10 flex items-center justify-center flex-shrink-0">
                    <MessageCircle size={18} className="text-[#25D366]" />
                  </div>
                  <div>
                    <p className="font-body text-text-main font-semibold text-sm mb-0.5">WhatsApp</p>
                    <p className="font-body text-text-muted text-sm">{contact.whatsapp}</p>
                  </div>
                </div>
                <WhatsAppButton label="Chat" size="sm" />
              </div>
            </div>

            {/* Instagram card */}
            <div className="reveal-item bg-white rounded-2xl p-6 shadow-glass border border-surface-dark">
              <div className="flex gap-4 items-center justify-between">
                <div className="flex gap-4 items-center">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center flex-shrink-0">
                    <Instagram size={18} className="text-pink-500" />
                  </div>
                  <div>
                    <p className="font-body text-text-main font-semibold text-sm mb-0.5">Instagram</p>
                    <p className="font-body text-text-muted text-sm">{contact.instagramHandle}</p>
                  </div>
                </div>
                <a
                  href={contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-body font-semibold px-4 py-2 rounded-lg transition-opacity duration-200 hover:opacity-90"
                >
                  Follow
                </a>
              </div>
            </div>

            {/* Store hours */}
            <div className="reveal-item bg-primary rounded-2xl p-6 text-white">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Clock size={18} className="text-accent" />
                </div>
                <div>
                  <p className="font-body text-white font-semibold text-sm mb-2">Store Hours</p>
                  <div className="space-y-1">
                    <div className="flex justify-between gap-8">
                      <span className="font-body text-white/60 text-xs">Mon – Sat</span>
                      <span className="font-body text-white text-xs font-medium">10:00 AM – 9:00 PM</span>
                    </div>
                    <div className="flex justify-between gap-8">
                      <span className="font-body text-white/60 text-xs">Sunday</span>
                      <span className="font-body text-white text-xs font-medium">11:00 AM – 8:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* ── Map embed / visual ────────────────────────────────────── */}
          <div>
            <div className="bg-primary rounded-2xl overflow-hidden shadow-card-hover aspect-[4/5] md:aspect-auto md:h-full min-h-[400px] flex flex-col relative">
              {/* Map placeholder with gradient bg */}
              <div className="flex-1 bg-gradient-to-br from-primary to-primary-light flex items-center justify-center relative overflow-hidden">
                {/* Decorative grid */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: 'linear-gradient(rgba(201,169,110,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,0.4) 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                  }}
                />

                {/* Map pin icon */}
                <div className="relative z-10 text-center px-8">
                  <div className="w-16 h-16 rounded-full bg-accent/20 border-2 border-accent/40 flex items-center justify-center mx-auto mb-4">
                    <MapPin size={28} className="text-accent" />
                  </div>
                  <p className="font-display text-white text-xl mb-2">RK Boutique</p>
                  <p className="font-body text-white/50 text-sm leading-relaxed mb-6 max-w-xs">
                    Shop No. 7, Maitri Heights,<br />Marve Road, Malad West,<br />Mumbai 400064
                  </p>
                  <a
                    href={contact.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-primary font-body font-semibold px-6 py-3 rounded-xl transition-all duration-200 hover:shadow-glow text-sm"
                  >
                    <MapPin size={15} />
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
