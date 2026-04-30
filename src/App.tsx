import { useRef, useCallback } from 'react';
import { Navbar } from './components/layout/Navbar';
import { PromoBanner } from './components/layout/PromoBanner';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { BestSellersSection } from './components/sections/BestSellersSection';
import { AboutSection } from './components/sections/AboutSection';
import { CategorySection } from './components/sections/CategorySection';
import { GallerySection } from './components/sections/GallerySection';
import { WhyUsSection } from './components/sections/WhyUsSection';
import { InstagramSection } from './components/sections/InstagramSection';
import { TestimonialsSection } from './components/sections/TestimonialsSection';
import { ContactSection } from './components/sections/ContactSection';
import { CartDrawer } from './components/ui/CartDrawer';
import { ContentProvider } from './context/ContentContext';
import type { GalleryCategory } from './types';

export default function App() {
  const gallerySectionRef = useRef<HTMLElement>(null);

  const handleSelectCategory = useCallback((category: GalleryCategory) => {
    gallerySectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    window.dispatchEvent(
      new CustomEvent('rk:filter-gallery', { detail: { category } })
    );
  }, []);

  return (
    <ContentProvider>
      <div className="min-h-screen bg-cream">
        <PromoBanner />
        <Navbar />

        <main>
          <HeroSection />
          <BestSellersSection />
          <AboutSection />
          <CategorySection onSelectCategory={handleSelectCategory} />
          <GallerySection ref={gallerySectionRef} />
          <WhyUsSection />
          <InstagramSection />
          <TestimonialsSection />
          <ContactSection />
        </main>

        <Footer />
        <CartDrawer />
      </div>
    </ContentProvider>
  );
}
