"use client";

import { products } from '@/lib/data';
import type { Product } from '@/lib/types';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ShoppingCart, Star, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { notFound } from 'next/navigation';

export default function ProductDetailPage({ params }: { params: { productId: string } }) {
  const [product, setProduct] = useState<Product | undefined>(undefined);
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const foundProduct = products.find(p => p.id === params.productId);
    if (foundProduct) {
      setProduct(foundProduct);
      setSelectedImage(foundProduct.images[0]);
    }
    setIsLoading(false);
  }, [params.productId]);

  if (isLoading) {
    return (
      <div className="container mx-auto section-padding container-padding min-h-screen flex items-center justify-center">
        <p className="text-2xl font-headline text-primary">Loading product details...</p>
      </div>
    );
  }

  if (!product) {
    notFound(); // Or redirect to a 404 page
  }
  
  const { name, description, price, images, features, howToUse, ingredients } = product;

  return (
    <div className="bg-background section-padding min-h-screen">
      <div className="container mx-auto container-padding">
        <Button variant="outline" asChild className="mb-8 group">
          <Link href="/products">
            <ChevronLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Products
          </Link>
        </Button>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Image Gallery */}
          <div className="animate-fade-in">
            <div className="relative aspect-square rounded-lg overflow-hidden shadow-xl mb-4 border">
              {selectedImage && (
                <Image
                  src={selectedImage}
                  alt={`${name} - selected view`}
                  data-ai-hint="hair product"
                  fill
                  className="object-cover"
                  priority
                />
              )}
            </div>
            {images.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(img)}
                    className={`relative aspect-square rounded-md overflow-hidden border-2 transition-all
                                ${selectedImage === img ? 'border-primary ring-2 ring-primary' : 'border-transparent hover:border-primary/50'}`}
                  >
                    <Image
                      src={img}
                      alt={`${name} - thumbnail ${index + 1}`}
                      data-ai-hint="hair product"
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="animate-slide-in-up" style={{animationDelay: '0.2s'}}>
            <h1 className="font-headline text-4xl lg:text-5xl font-bold text-primary mb-3">{name}</h1>
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-accent fill-accent" />
              ))}
              <span className="ml-2 text-sm text-muted-foreground">(125 Reviews)</span> {/* Placeholder reviews */}
            </div>
            <p className="font-body text-2xl font-bold text-foreground mb-6">${price.toFixed(2)}</p>
            
            <p className="font-body text-foreground/80 leading-relaxed mb-6">{description}</p>

            <Button size="lg" className="w-full md:w-auto bg-accent hover:bg-accent/90 text-accent-foreground text-lg py-3 px-8 group">
              Add to Cart <ShoppingCart className="ml-2 h-5 w-5 transition-transform group-hover:scale-110" />
            </Button>

            {features && features.length > 0 && (
              <div className="mt-8">
                <h3 className="font-headline text-xl font-semibold text-primary mb-3">Key Features:</h3>
                <ul className="space-y-2 font-body text-foreground/80">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {howToUse && (
              <div className="mt-8">
                <h3 className="font-headline text-xl font-semibold text-primary mb-3">How to Use:</h3>
                <p className="font-body text-foreground/80 leading-relaxed">{howToUse}</p>
              </div>
            )}

            {ingredients && ingredients.length > 0 && (
               <div className="mt-8">
                <h3 className="font-headline text-xl font-semibold text-primary mb-3">Ingredients:</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{ingredients.join(', ')}.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
