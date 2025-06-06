
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  shortDescription: string;
  features?: string[];
  howToUse?: string;
  ingredients?: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  testimonial: string;
  beforeImage?: string;
  afterImage?: string;
  location?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  author: string;
  date: string;
  category: string;
  tags?: string[];
}
