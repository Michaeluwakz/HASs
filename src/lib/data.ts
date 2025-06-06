
import type { Product, Testimonial, BlogPost } from './types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Nourishing Hair Growth Oil',
    shortDescription: 'Promotes healthy hair growth and scalp care.',
    description: 'Our Nourishing Hair Growth Oil is a potent blend of natural oils and extracts designed to stimulate hair follicles, reduce hair fall, and promote thicker, healthier hair. Suitable for all hair types.',
    price: 25.99,
    images: [
      'https://i.ibb.co/HL0BXK5M/image.png',
      'https://placehold.co/600x600.png?text=Growth+Oil+2',
      'https://placehold.co/600x600.png?text=Growth+Oil+3',
    ],
    category: 'Oils',
    features: ['Stimulates hair growth', 'Reduces dandruff', 'Strengthens hair roots'],
    howToUse: 'Apply a few drops to the scalp and massage gently. Use 2-3 times a week for best results.',
    ingredients: ['Argan Oil', 'Jojoba Oil', 'Rosemary Extract', 'Peppermint Oil']
  },
  {
    id: '2',
    name: 'Hydrating Shea Butter Leave-In Conditioner',
    shortDescription: 'Deeply moisturizes and detangles hair.',
    description: 'This rich leave-in conditioner, formulated with pure Shea Butter and natural oils, provides intense hydration, detangles knots, and leaves your hair soft, manageable, and frizz-free.',
    price: 18.50,
    images: [
      'https://i.ibb.co/LzHY2bBv/image.png',
      'https://placehold.co/600x600.png?text=Conditioner+2',
    ],
    category: 'Conditioners',
    features: ['Intense hydration', 'Detangles effectively', 'Reduces frizz', 'Adds shine'],
    howToUse: 'Apply generously to damp hair from root to ends. Do not rinse. Style as usual.',
    ingredients: ['Shea Butter', 'Coconut Oil', 'Aloe Vera Juice', 'Vitamin E']
  },
  {
    id: '3',
    name: 'Clarifying Charcoal Shampoo',
    shortDescription: 'Gently cleanses and removes build-up.',
    description: 'Our Clarifying Charcoal Shampoo effectively removes product build-up, impurities, and excess oils without stripping your hair of its natural moisture. Leaves scalp feeling refreshed and hair looking vibrant.',
    price: 22.00,
    images: [
      'https://i.ibb.co/5h3pYtFX/image.png',
    ],
    category: 'Shampoos',
    features: ['Deep cleansing', 'Removes impurities', 'Balances scalp oils', 'Sulfate-free'],
    howToUse: 'Apply to wet hair, lather well, and rinse thoroughly. Follow with HAS conditioner.',
    ingredients: ['Activated Charcoal', 'Tea Tree Oil', 'Apple Cider Vinegar', 'Glycerin']
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Aisha B.',
    testimonial: 'HAS products transformed my dry, brittle hair into soft, luscious locks! The growth oil is a miracle worker. Highly recommend!',
    beforeImage: 'https://placehold.co/300x300.png?text=Before+1',
    afterImage: 'https://placehold.co/300x300.png?text=After+1',
    location: 'Lagos, Nigeria',
  },
  {
    id: '2',
    name: 'John K.',
    testimonial: 'I was skeptical at first, but the leave-in conditioner has made my afro so much more manageable. My hair feels healthier than ever.',
    beforeImage: 'https://placehold.co/300x300.png?text=Before+2',
    afterImage: 'https://placehold.co/300x300.png?text=After+2',
    location: 'London, UK',
  },
  {
    id: '3',
    name: 'Fatima S.',
    testimonial: 'Finally, products that understand African hair! The charcoal shampoo leaves my scalp feeling so clean and refreshed. Love it!',
    location: 'Abuja, Nigeria',
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'top-5-tips-for-natural-hair-growth',
    title: 'Top 5 Tips for Natural Hair Growth',
    excerpt: 'Discover effective strategies to boost your natural hair growth journey. From scalp care to protective styling, we cover it all.',
    content: '<p>Detailed content about natural hair growth tips...</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>',
    imageUrl: 'https://www.styleseat.com/blog/wp-content/uploads/2021/09/natural-hair-growth-hero%E2%80%8A.jpg',
    author: 'HAS Hair Experts',
    date: '2024-07-15',
    category: 'Hair Growth',
    tags: ['natural hair', 'growth tips', 'hair care']
  },
  {
    id: '2',
    slug: 'understanding-your-hair-porosity',
    title: 'Understanding Your Hair Porosity',
    excerpt: 'Hair porosity is key to choosing the right products. Learn how to determine your hair\'s porosity and what it means for your routine.',
    content: '<p>In-depth explanation of hair porosity and its implications...</p><p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>',
    imageUrl: 'https://www.glowbydaye.com/cdn/shop/articles/Review_Group_2_1024x.png?v=1566430632',
    author: 'Dr. Ifeoma',
    date: '2024-07-10',
    category: 'Hair Science',
    tags: ['hair porosity', 'hair type', 'product selection']
  },
  {
    id: '3',
    slug: 'diy-hair-masks-for-shiny-hair',
    title: 'DIY Hair Masks for Shiny, Healthy Hair',
    excerpt: 'Whip up these simple yet effective DIY hair masks using ingredients from your kitchen for radiant, healthy locks.',
    content: '<p>Recipes and benefits of various DIY hair masks...</p><p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>',
    imageUrl: 'https://img.youtube.com/vi/mIJK-7kBC8E/hqdefault.jpg',
    author: 'HAS Beauty Team',
    date: '2024-07-05',
    category: 'DIY & Tips',
    tags: ['diy', 'hair masks', 'healthy hair', 'shine']
  },
];
