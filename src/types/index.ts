// ─── Core Domain Types ────────────────────────────────────────────────────────
// Phase 2: These types map directly to Decap CMS collection fields.
// When migrating to CMS, each interface below corresponds to a CMS collection.

export type GalleryCategory = 'casual' | 'party' | 'wedding' | 'coord' | 'gown' | 'kurti';

export interface GalleryItem {
  id: string;
  title: string;
  category: GalleryCategory;
  image: string;        // e.g. /images/gallery/casual/filename.jpg
  code: string;         // e.g. RK-CAS-01 — auto-generated if not manually set
  description: string;
  available: boolean;
  sortOrder: number;
  isBestSeller?: boolean;
  featured?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;       // 1–5
  review: string;
  reviewUrl?: string;   // Link to Google Maps review
}

export interface CartItem {
  galleryItem: GalleryItem;
  addedAt: number;      // timestamp for ordering
}

export interface NavLink {
  label: string;
  href: string;
}

export interface WhyUsPoint {
  id: string;
  icon: string;         // lucide icon name string
  title: string;
  description: string;
}

export interface ContactInfo {
  phone: string;
  whatsapp: string;
  address: string;
  mapsUrl: string;
  instagramUrl: string;
  instagramHandle: string;
}

export interface HeroSlide {
  image: string;
  title: string;
  subtitle: string;
}

export interface PromoBanner {
  enabled: boolean;
  text: string;
}

export interface SiteData {
  brandName: string;
  tagline: string;
  heroHeadline: string;
  heroSubtext: string;
  aboutTitle: string;
  aboutBody: string[];
  aboutQuote: string;
  contact: ContactInfo;
  navLinks: NavLink[];
  whyUsPoints: WhyUsPoint[];
  instagramBio: string;
  heroSlides: HeroSlide[];
  promoBanner: PromoBanner;
}
