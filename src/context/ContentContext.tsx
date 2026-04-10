import { createContext, useContext, useEffect, useState } from 'react';
import { galleryItems as defaultGallery } from '../data/galleryData';
import { testimonials as defaultTestimonials } from '../data/testimonialsData';
import { siteData as defaultSiteData } from '../data/siteData';
import type { GalleryItem, Testimonial, SiteData } from '../types';

// ─── Types ─────────────────────────────────────────────────────────────────────

interface ContentState {
  galleryItems: GalleryItem[];
  testimonials: Testimonial[];
  siteData: SiteData;
}

// ─── Context ───────────────────────────────────────────────────────────────────

const ContentContext = createContext<ContentState>({
  galleryItems: defaultGallery,
  testimonials: defaultTestimonials,
  siteData: defaultSiteData,
});

// ─── Helpers ───────────────────────────────────────────────────────────────────

async function tryFetch<T>(url: string): Promise<T | null> {
  try {
    const res = await fetch(url);
    if (!res.ok) return null;
    return await res.json() as T;
  } catch {
    return null;
  }
}

// ─── Provider ──────────────────────────────────────────────────────────────────

export function ContentProvider({ children }: { children: React.ReactNode }) {
  const [content, setContent] = useState<ContentState>({
    galleryItems: defaultGallery,
    testimonials: defaultTestimonials,
    siteData: defaultSiteData,
  });

  useEffect(() => {
    async function load() {
      const [gallery, testimonialData, site, contact, whyUs] = await Promise.all([
        tryFetch<{ items: GalleryItem[] }>('/content/gallery.json'),
        tryFetch<{ items: Testimonial[] }>('/content/testimonials.json'),
        tryFetch<Partial<SiteData>>('/content/site.json'),
        tryFetch<Partial<SiteData['contact']>>('/content/contact.json'),
        tryFetch<{ items: SiteData['whyUsPoints'] }>('/content/why-us.json'),
      ]);

      setContent({
        galleryItems: gallery?.items?.length ? gallery.items : defaultGallery,
        testimonials: testimonialData?.items?.length ? testimonialData.items : defaultTestimonials,
        siteData: {
          ...defaultSiteData,
          ...(site ?? {}),
          contact: {
            ...defaultSiteData.contact,
            ...(contact ?? {}),
          },
          whyUsPoints: whyUs?.items?.length ? whyUs.items : defaultSiteData.whyUsPoints,
        },
      });
    }

    load();
  }, []);

  return (
    <ContentContext.Provider value={content}>
      {children}
    </ContentContext.Provider>
  );
}

// ─── Hook ──────────────────────────────────────────────────────────────────────

export function useContent() {
  return useContext(ContentContext);
}
