import Image from 'next/image';
import { Globe, MapPin } from 'lucide-react';

export function ShippingSection() {
  return (
    <section id="shipping" className="bg-primary text-primary-foreground section-padding">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center container-padding">
        <div className="animate-fade-in">
          <h2 className="font-headline text-4xl md:text-5xl font-bold mb-6">
            Global Reach, Nigerian Roots
          </h2>
          <p className="font-body text-lg opacity-90 mb-4 leading-relaxed">
            From our home in Nigeria, we're thrilled to share HAS hair care solutions with the world. We ship our premium products across Nigeria and to many international destinations.
          </p>
          <p className="font-body text-lg opacity-90 leading-relaxed">
            Experience the best of African-inspired hair care, no matter where you are.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <div className="flex items-center bg-primary-foreground/10 p-3 rounded-lg">
              <MapPin className="h-6 w-6 text-accent mr-3" />
              <span className="font-semibold">Ships from Nigeria</span>
            </div>
            <div className="flex items-center bg-primary-foreground/10 p-3 rounded-lg">
              <Globe className="h-6 w-6 text-accent mr-3" />
              <span className="font-semibold">Worldwide Shipping</span>
            </div>
          </div>
        </div>
        <div className="flex justify-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <Image
            src="https://i.ibb.co/XkSFfHgs/image.png"
            alt="Animated globe showing shipping routes"
            data-ai-hint="world map shipping"
            width={500}
            height={400}
            className="rounded-lg shadow-xl object-contain"
          />
        </div>
      </div>
    </section>
  );
}
