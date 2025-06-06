import { testimonials } from '@/lib/data';
import { TestimonialCard } from '@/components/ui/testimonial-card';

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-background section-padding">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">
            Loved by Our Community
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Real stories from real customers who have experienced the HAS difference.
          </p>
        </div>
        {/* Placeholder for carousel. Displaying as a grid for now. */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.id} className="animate-slide-in-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
