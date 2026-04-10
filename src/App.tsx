import { useRef, useCallback } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
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
  // Ref to gallery section — used to scroll + pre-filter from category cards
  const gallerySectionRef = useRef<HTMLElement>(null);

  const handleSelectCategory = useCallback((category: GalleryCategory) => {
    // Scroll to gallery
    gallerySectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // Dispatch a custom event so GallerySection can react to the category change
    window.dispatchEvent(
      new CustomEvent('rk:filter-gallery', { detail: { category } })
    );
  }, []);

  return (
    <ContentProvider>
    <div className="min-h-screen bg-primary">
      {/* Fixed navigation */}
      <Navbar />

      {/* Main content */}
      <main>
        <HeroSection />
        <AboutSection />
        <CategorySection onSelectCategory={handleSelectCategory} />
        <GallerySection ref={gallerySectionRef} />
        <WhyUsSection />
        <InstagramSection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      <CartDrawer />
    </div>
    </ContentProvider>
  );
}
