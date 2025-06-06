import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Eye } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.id}`} className="group block">
      <div className="bg-card p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
        <div className="relative overflow-hidden rounded-md aspect-square mb-4">
          <Image
            src={product.images[0]}
            alt={product.name}
            data-ai-hint="hair product"
            width={400}
            height={400}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <Button variant="secondary" size="sm" className="text-secondary-foreground group-hover:bg-primary group-hover:text-primary-foreground">
              <Eye className="mr-2 h-4 w-4" /> Quick View
            </Button>
          </div>
        </div>
        <div className="flex-grow">
          <h3 className="font-headline text-xl font-semibold text-primary group-hover:text-accent transition-colors">
            {product.name}
          </h3>
          <p className="font-body text-sm text-muted-foreground mt-1 mb-2">
            {product.shortDescription}
          </p>
        </div>
        <div className="mt-auto">
          <p className="font-body text-lg font-bold text-foreground">
            ${product.price.toFixed(2)}
          </p>
        </div>
      </div>
    </Link>
  );
}
