// ─── Site Data ────────────────────────────────────────────────────────────────
// Phase 2 CMS: This file maps to the `site_settings` and `pages` Decap CMS collections.
// To migrate: extract these constants into public/admin/content/ JSON files
// and update the CMS config.yml collections accordingly.

import type { SiteData } from '../types';

export const siteData: SiteData = {
  brandName: 'RK Boutique',
  tagline: 'Designer Ethnic & Indo-Western Fashion',

  // Phase 2 CMS field: hero.headline
  heroHeadline: 'Where Every Outfit\nTells a Story',

  // Phase 2 CMS field: hero.subtext
  heroSubtext:
    'Discover our curated collection of designer kurtis, Indo-Western sets & sharara suits, crafted for the modern Indian woman who celebrates every occasion with effortless grace.',

  // Phase 2 CMS fields: about.*
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

  // Phase 2 CMS field: why_us.points[]
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

  // Phase 2 CMS field: instagram.bio
  instagramBio:
    'Shop latest designer kurtis, Indo-Western sets & sharara suits in Malad West at a reasonable price range ✨',
};
