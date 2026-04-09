// ─── Gallery Data ─────────────────────────────────────────────────────────────
// Phase 2 CMS: This maps to the `gallery` Decap CMS collection.
// Each item here corresponds to a CMS entry with fields:
// title, category, image (media), code, description, available, sortOrder.
//
// Auto-code logic: if `code` is omitted in future CMS entries, the rendering
// pipeline should generate RK-{CATEGORY_PREFIX}-{ZERO_PADDED_ORDER}.

import type { GalleryItem } from '../types';

// Category label → 3-letter prefix for auto-codes
export const CATEGORY_PREFIX: Record<string, string> = {
  casual: 'CAS',
  party: 'PAR',
  wedding: 'WED',
};

const BASE_PATH = '/images/gallery';

// ─── Casual Collection ────────────────────────────────────────────────────────
const casualItems: GalleryItem[] = [
  {
    id: 'cas-01',
    title: 'Everyday Elegance Kurti',
    category: 'casual',
    image: `${BASE_PATH}/casual/Screenshot_20260409_124548_Maps.jpg`,
    code: 'RK-CAS-01',
    description: 'A breezy, everyday kurti in soft cotton with delicate prints, perfect for casual outings.',
    available: true,
    sortOrder: 1,
  },
  {
    id: 'cas-02',
    title: 'Printed Muslin Co-ord',
    category: 'casual',
    image: `${BASE_PATH}/casual/Screenshot_20260409_124552_Maps.jpg`,
    code: 'RK-CAS-02',
    description: 'Lightweight muslin co-ord set with vibrant block prints, effortlessly stylish for daywear.',
    available: true,
    sortOrder: 2,
  },
  {
    id: 'cas-03',
    title: 'Floral Kurta Set',
    category: 'casual',
    image: `${BASE_PATH}/casual/Screenshot_20260409_124557_Maps.jpg`,
    code: 'RK-CAS-03',
    description: 'Floral embroidered kurta paired with straight pants, a go-to ensemble for weekend brunches.',
    available: true,
    sortOrder: 3,
  },
  {
    id: 'cas-04',
    title: 'Cotton Palazzo Kurti',
    category: 'casual',
    image: `${BASE_PATH}/casual/Screenshot_20260409_124601_Maps.jpg`,
    code: 'RK-CAS-04',
    description: 'Breathable cotton kurti with palazzo bottoms, comfort meets style for all-day wear.',
    available: true,
    sortOrder: 4,
  },
  {
    id: 'cas-05',
    title: 'Indo-Western Tunic',
    category: 'casual',
    image: `${BASE_PATH}/casual/Screenshot_20260409_124606_Maps.jpg`,
    code: 'RK-CAS-05',
    description: 'Contemporary Indo-Western tunic with modern silhouette, ideal for the fashion-forward woman.',
    available: true,
    sortOrder: 5,
  },
];

// ─── Party Collection ─────────────────────────────────────────────────────────
const partyItems: GalleryItem[] = [
  {
    id: 'par-01',
    title: 'Gajji Silk Sharara Set',
    category: 'party',
    image: `${BASE_PATH}/party/Screenshot_20260409_124358_Maps.jpg`,
    code: 'RK-PAR-01',
    description: 'Luxurious gajji silk sharara set with intricate embroidery, a showstopper for every celebration.',
    available: true,
    sortOrder: 1,
  },
  {
    id: 'par-02',
    title: 'Festive Anarkali Gown',
    category: 'party',
    image: `${BASE_PATH}/party/Screenshot_20260409_124404_Maps.jpg`,
    code: 'RK-PAR-02',
    description: 'Flowing anarkali gown with sequin detailing, designed to make heads turn at festive gatherings.',
    available: true,
    sortOrder: 2,
  },
  {
    id: 'par-03',
    title: 'Designer Palazzo Set',
    category: 'party',
    image: `${BASE_PATH}/party/Screenshot_20260409_124415_Maps.jpg`,
    code: 'RK-PAR-03',
    description: 'Rich embroidered top with wide-leg palazzo, the perfect party-ready ensemble.',
    available: true,
    sortOrder: 3,
  },
  {
    id: 'par-04',
    title: 'Velvet Indo-Western Set',
    category: 'party',
    image: `${BASE_PATH}/party/Screenshot_20260409_124443_Maps.jpg`,
    code: 'RK-PAR-04',
    description: 'Sumptuous velvet Indo-Western co-ord set with modern cuts, glamour meets cultural richness.',
    available: true,
    sortOrder: 4,
  },
  {
    id: 'par-05',
    title: 'Embellished Kurti Suit',
    category: 'party',
    image: `${BASE_PATH}/party/Screenshot_20260409_124510_Maps.jpg`,
    code: 'RK-PAR-05',
    description: 'Beautifully embellished kurti suit with contrasting dupatta, ideal for festive occasions.',
    available: true,
    sortOrder: 5,
  },
];

// ─── Wedding Collection ───────────────────────────────────────────────────────
const weddingItems: GalleryItem[] = [
  {
    id: 'wed-01',
    title: 'Bridal Lehenga Set',
    category: 'wedding',
    image: `${BASE_PATH}/wedding/Screenshot_20260409_124322_Maps.jpg`,
    code: 'RK-WED-01',
    description: 'Opulent bridal lehenga with heavy zari work and matching blouse, for the bride who dreams of grandeur.',
    available: true,
    sortOrder: 1,
  },
  {
    id: 'wed-02',
    title: 'Silk Saree Suit',
    category: 'wedding',
    image: `${BASE_PATH}/wedding/Screenshot_20260409_124327_Maps.jpg`,
    code: 'RK-WED-02',
    description: 'Exquisite pure silk suit with intricate border work, timeless elegance for wedding ceremonies.',
    available: true,
    sortOrder: 2,
  },
  {
    id: 'wed-03',
    title: 'Heritage Sharara',
    category: 'wedding',
    image: `${BASE_PATH}/wedding/Screenshot_20260409_124334_Maps.jpg`,
    code: 'RK-WED-03',
    description: 'Heritage-inspired sharara with mirror work and resham embroidery, celebrating the art of Indian craft.',
    available: true,
    sortOrder: 3,
  },
  {
    id: 'wed-04',
    title: 'Royal Anarkali Suit',
    category: 'wedding',
    image: `${BASE_PATH}/wedding/Screenshot_20260409_124339_Maps.jpg`,
    code: 'RK-WED-04',
    description: 'Regal floor-length anarkali with hand-embroidered dupatta, the epitome of bridal grace.',
    available: true,
    sortOrder: 4,
  },
  {
    id: 'wed-05',
    title: 'Festive Gown Lehenga',
    category: 'wedding',
    image: `${BASE_PATH}/wedding/Screenshot_20260409_124346_Maps.jpg`,
    code: 'RK-WED-05',
    description: 'Contemporary gown-style lehenga with modern silhouette and traditional motifs, for the fashion-forward bride.',
    available: true,
    sortOrder: 5,
  },
];

// ─── Combined Gallery ─────────────────────────────────────────────────────────
export const galleryItems: GalleryItem[] = [
  ...weddingItems,
  ...partyItems,
  ...casualItems,
];

// Helper: get items by category
export function getItemsByCategory(category: GalleryItem['category']): GalleryItem[] {
  return galleryItems.filter((item) => item.category === category);
}

// Helper: get first item from each category (for category cards)
export function getCategoryPreviews(): Record<string, GalleryItem> {
  return {
    casual: casualItems[0],
    party: partyItems[0],
    wedding: weddingItems[0],
  };
}
