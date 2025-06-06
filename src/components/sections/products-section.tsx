import Link from 'next/link';
import { products } from '@/lib/data';
import { ProductCard } from '@/components/ui/product-card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface ProductsSectionProps {
  showAllLink?: boolean;
  maxItems?: number;
  title?: string;
  subtitle?: string;
}

export function ProductsSection({ 
  showAllLink = false, 
  maxItems,
  title = "Our Star Products",
  subtitle = "Discover hair care crafted with passion and expertise."
}: ProductsSectionProps) {
  const displayedProducts = maxItems ? products.slice(0, maxItems) : products;

  return (
    <section id="products" className="bg-background/70 section-padding">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">
            {title}
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProducts.map((product, index) => (
            <div key={product.id} className="animate-slide-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
        {showAllLink && (
          <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: `${(maxItems || products.length) * 0.1 + 0.2}s` }}>
            <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground group">
              <Link href="/products">
                View All Products
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
