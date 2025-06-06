import Image from 'next/image';
import type { Testimonial } from '@/lib/types';
import { Star, MapPin } from 'lucide-react'; // Assuming 5-star ratings

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="bg-card p-6 rounded-lg shadow-lg h-full flex flex-col">
      <div className="flex mb-2">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-5 w-5 text-accent fill-accent" />
        ))}
      </div>
      <p className="font-body text-foreground/90 italic mb-4 flex-grow">
        &ldquo;{testimonial.testimonial}&rdquo;
      </p>
      <div className="mt-auto">
        <p className="font-headline font-semibold text-primary">{testimonial.name}</p>
        {testimonial.location && (
          <div className="flex items-center text-sm text-muted-foreground mt-1">
            <MapPin className="h-4 w-4 mr-1.5" />
            <span>{testimonial.location}</span>
          </div>
        )}
      </div>
    </div>
  );
}
