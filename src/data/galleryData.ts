import type { GalleryItem } from '../types';

export const CATEGORY_PREFIX: Record<string, string> = {
  casual: 'CAS',
  party: 'PAR',
  wedding: 'WED',
  coord: 'CRD',
  gown: 'GWN',
  kurti: 'KRT',
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
    isBestSeller: true,
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
    isBestSeller: true,
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
    isBestSeller: true,
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
    isBestSeller: true,
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

// ─── Co-ord Sets Collection ───────────────────────────────────────────────────
// Placeholder items reuse casual images until real co-ord photos are uploaded via CMS
const coordItems: GalleryItem[] = [
  {
    id: 'crd-01',
    title: 'Floral Co-ord Set',
    category: 'coord',
    image: `${BASE_PATH}/casual/Screenshot_20260409_124552_Maps.jpg`,
    code: 'RK-CRD-01',
    description: 'Vibrant floral printed co-ord set in breathable fabric, effortlessly matching top and bottom.',
    available: true,
    sortOrder: 1,
    featured: true,
  },
  {
    id: 'crd-02',
    title: 'Ethnic Print Co-ord',
    category: 'coord',
    image: `${BASE_PATH}/casual/Screenshot_20260409_124601_Maps.jpg`,
    code: 'RK-CRD-02',
    description: 'Ethnic block-print co-ord set with wide-leg pants, a complete look from head to toe.',
    available: true,
    sortOrder: 2,
  },
];

// ─── Gowns Collection ─────────────────────────────────────────────────────────
// Placeholder items reuse party images until real gown photos are uploaded via CMS
const gownItems: GalleryItem[] = [
  {
    id: 'gwn-01',
    title: 'Floor-Length Anarkali Gown',
    category: 'gown',
    image: `${BASE_PATH}/party/Screenshot_20260409_124404_Maps.jpg`,
    code: 'RK-GWN-01',
    description: 'Sweeping floor-length anarkali gown with intricate sequin detailing, for grand celebrations.',
    available: true,
    sortOrder: 1,
    featured: true,
  },
  {
    id: 'gwn-02',
    title: 'Embroidered Evening Gown',
    category: 'gown',
    image: `${BASE_PATH}/party/Screenshot_20260409_124510_Maps.jpg`,
    code: 'RK-GWN-02',
    description: 'Rich embroidered evening gown with flattering silhouette, the perfect statement piece.',
    available: true,
    sortOrder: 2,
  },
];

// ─── Kurtis Collection ────────────────────────────────────────────────────────
// Placeholder items reuse casual images until real kurti photos are uploaded via CMS
const kurtiItems: GalleryItem[] = [
  {
    id: 'krt-01',
    title: 'Chikankari Kurti',
    category: 'kurti',
    image: `${BASE_PATH}/casual/Screenshot_20260409_124557_Maps.jpg`,
    code: 'RK-KRT-01',
    description: 'Delicate chikankari hand-embroidered kurti in soft cotton, timeless and elegant.',
    available: true,
    sortOrder: 1,
    featured: true,
  },
  {
    id: 'krt-02',
    title: 'Printed Georgette Kurti',
    category: 'kurti',
    image: `${BASE_PATH}/casual/Screenshot_20260409_124606_Maps.jpg`,
    code: 'RK-KRT-02',
    description: 'Flowy georgette kurti with contemporary prints, a versatile wardrobe staple.',
    available: true,
    sortOrder: 2,
  },
];

// ─── Combined Gallery ─────────────────────────────────────────────────────────
export const galleryItems: GalleryItem[] = [
  ...weddingItems,
  ...partyItems,
  ...casualItems,
  ...coordItems,
  ...gownItems,
  ...kurtiItems,
];

export function getItemsByCategory(category: GalleryItem['category']): GalleryItem[] {
  return galleryItems.filter((item) => item.category === category);
}

export function getCategoryPreviews(): Record<string, GalleryItem> {
  return {
    casual: casualItems[0],
    party: partyItems[0],
    wedding: weddingItems[0],
    coord: coordItems[0],
    gown: gownItems[0],
    kurti: kurtiItems[0],
  };
}

export function getBestSellers(): GalleryItem[] {
  return galleryItems.filter((item) => item.isBestSeller && item.available);
}
