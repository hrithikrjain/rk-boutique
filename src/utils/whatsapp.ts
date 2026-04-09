// ─── WhatsApp Inquiry URL Builder ─────────────────────────────────────────────
// Constructs a wa.me deep link with a pre-filled inquiry message
// containing the customer's selected gallery items.

import type { CartItem } from '../types';

const WHATSAPP_NUMBER = '919867426461'; // Phase 2: pull from siteData.contact.whatsapp

function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function buildWhatsAppUrl(items: CartItem[]): string {
  if (items.length === 0) return `https://wa.me/${WHATSAPP_NUMBER}`;

  const itemLines = items
    .map((item, index) => {
      const { title, code, category } = item.galleryItem;
      return `${index + 1}. ${title}\n   Code: ${code}\n   Category: ${capitalize(category)}`;
    })
    .join('\n\n');

  const message = [
    'Hello RK Boutique! 👋',
    '',
    'I am interested in the following selections:',
    '',
    itemLines,
    '',
    'Could you please share availability and further details?',
    '',
    'Thank you! 🙏',
  ].join('\n');

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

// Direct WhatsApp contact (no cart — just open chat)
export function getWhatsAppChatUrl(): string {
  return `https://wa.me/${WHATSAPP_NUMBER}`;
}

// Phone call link
export function getCallUrl(phone: string): string {
  return `tel:${phone.replace(/\D/g, '')}`;
}
