import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative h-[calc(100vh-5rem)] min-h-[600px] flex items-center justify-center text-center text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://i.ibb.co/9mb91xKm/Untitled-design-2.png"
          alt="Background of natural hairstyles and product application"
          data-ai-hint="natural hair product application"
          layout="fill"
          objectFit="cover"
          className="brightness-50"
          priority
        />
      </div>
      <div className="relative z-10 p-6 animate-fade-in">
        <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
          HAS
        </h1>
        <p className="font-body text-xl md:text-2xl lg:text-3xl mb-8 animate-slide-in-up" style={{ animationDelay: '0.4s' }}>
          The Hair Care Solutions
        </p>
        <Button
          asChild
          size="lg"
          className="bg-accent hover:bg-accent/90 text-accent-foreground animate-slide-in-up rounded-full px-8 py-6 text-lg font-semibold group"
          style={{ animationDelay: '0.6s' }}
        >
          <Link href="/products">
            Shop Now
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
