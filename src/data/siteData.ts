import type { SiteData } from '../types';

export const siteData: SiteData = {
  brandName: 'RK Boutique',
  tagline: 'Designer Ethnic & Indo-Western Fashion',

  heroHeadline: 'Where Every Outfit\nTells a Story',

  heroSubtext:
    'Discover our curated collection of designer kurtis, Indo-Western sets & sharara suits, crafted for the modern Indian woman who celebrates every occasion with effortless grace.',

  aboutTitle: 'Our Story',
  aboutBody: [
    'Nestled in the heart of Malad West, RK Boutique has been a cherished destination for women who believe fashion is a form of self-expression.',
    'We curate the finest ethnic and fusion wear, from breezy everyday kurtis to stunning bridal ensembles, each piece chosen with an eye for quality fabric, thoughtful design, and timeless elegance.',
    'Every visit to our store is a personal experience. Our team takes pride in understanding your style, occasion, and comfort, even offering on-the-spot alterations to ensure your perfect fit.',
  ],
  aboutQuote: 'Fashion is not just clothing. It is the art of feeling beautiful in your own story.',

  contact: {
    phone: '9867426461',
    whatsapp: '+919867426461',
    address: 'Shop No. 7, Maitri Heights, Marve Road, Malad West, Mumbai, Maharashtra 400064',
    mapsUrl: 'https://maps.app.goo.gl/Nc9jyZTQefDY5PAEA',
    instagramUrl: 'https://www.instagram.com/rkboutique9/',
    instagramHandle: '@rkboutique9',
  },

  navLinks: [
    { label: 'Collections', href: '#gallery' },
    { label: 'Categories', href: '#categories' },
    { label: 'About', href: '#about' },
    { label: 'Reviews', href: '#testimonials' },
    { label: 'Visit Us', href: '#contact' },
  ],

  whyUsPoints: [
    {
      id: 'curated',
      icon: 'Sparkles',
      title: 'Expertly Curated',
      description:
        'Every piece is handpicked for quality, fabric, and design. No fast fashion, only thoughtfully chosen ethnic and fusion wear.',
    },
    {
      id: 'affordable',
      icon: 'Tag',
      title: 'Reasonable Pricing',
      description:
        'Premium boutique fashion at prices that celebrate every woman, not just those with luxury budgets.',
    },
    {
      id: 'occasions',
      icon: 'Calendar',
      title: 'Every Occasion',
      description:
        'From casual day wear to grand wedding ensembles, our collection covers the full spectrum of a woman\'s wardrobe.',
    },
    {
      id: 'alterations',
      icon: 'Scissors',
      title: 'On-the-Spot Alterations',
      description:
        'Walk in, try it on, and walk out in a perfect fit. Our skilled team handles alterations right at the store.',
    },
    {
      id: 'variety',
      icon: 'Layers',
      title: 'Endless Variety',
      description:
        'Muslin, gajji silk, cotton, and more. Fresh patterns and new designs arrive regularly so there\'s always something new to discover.',
    },
    {
      id: 'personal',
      icon: 'Heart',
      title: 'Personal Service',
      description:
        'Our warm, knowledgeable staff, led by Sanjay sir, treats every customer like family, ensuring you find exactly what you\'re looking for.',
    },
  ],

  instagramBio:
    'Shop latest designer kurtis, Indo-Western sets & sharara suits in Malad West at a reasonable price range ✨',

  promoBanner: {
    enabled: true,
    text: "Visit us in-store for exclusive deals on new arrivals! Shop No. 7, Maitri Heights, Marve Road, Malad West.",
  },

  heroSlides: [
    {
      image: '/images/gallery/wedding/Screenshot_20260409_124322_Maps.jpg',
      title: 'Wedding Collection',
      subtitle: 'Opulent designs for your grand day',
    },
    {
      image: '/images/gallery/party/Screenshot_20260409_124358_Maps.jpg',
      title: 'Party Wear',
      subtitle: 'Make every celebration unforgettable',
    },
    {
      image: '/images/gallery/casual/Screenshot_20260409_124548_Maps.jpg',
      title: 'Casual Collection',
      subtitle: 'Effortless style for every day',
    },
    {
      image: '/images/gallery/wedding/Screenshot_20260409_124334_Maps.jpg',
      title: 'Bridal Ensembles',
      subtitle: 'Heritage craft meets modern silhouette',
    },
    {
      image: '/images/gallery/party/Screenshot_20260409_124415_Maps.jpg',
      title: 'Festive Looks',
      subtitle: 'Curated for every occasion',
    },
  ],
};
