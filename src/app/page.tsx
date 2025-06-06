import { HeroSection } from '@/components/sections/hero-section';
import { AboutSection } from '@/components/sections/about-section';
import { ProductsSection } from '@/components/sections/products-section';
import { ShippingSection } from '@/components/sections/shipping-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { BlogPreviewSection } from '@/components/sections/blog-preview-section';
import { ContactSection } from '@/components/sections/contact-section';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProductsSection showAllLink maxItems={3} />
      <ShippingSection />
      <TestimonialsSection />
      <BlogPreviewSection />
      <ContactSection />
    </>
  );
}
