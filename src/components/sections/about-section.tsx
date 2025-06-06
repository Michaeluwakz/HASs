import Image from 'next/image';

export function AboutSection() {
  return (
    <section id="about" className="bg-background section-padding">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center container-padding">
        <div className="animate-slide-in-left">
          <Image
            src="https://i.ibb.co/yBY9z5vq/image.png"
            alt="image"
            data-ai-hint="brand image"
            width={600}
            height={400}
            className="rounded-lg shadow-xl object-cover aspect-[3/2]"
          />
        </div>
        <div className="animate-fade-in md:animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-6">
            About HAS
          </h2>
          <p className="font-body text-lg text-foreground/80 mb-4 leading-relaxed">
            HAS is a premium hair care brand rooted in the heart of Nigeria, dedicated to crafting high-quality products meticulously formulated for all hair types, with a special focus on the unique needs of African hair textures. 
          </p>
          <p className="font-body text-lg text-foreground/80 leading-relaxed">
            Our passion is to empower individuals to embrace their natural beauty by providing effective, nourishing, and trustworthy hair care solutions. We combine traditional wisdom with modern science to deliver results you can see and feel, helping you achieve your healthiest hair ever.
          </p>
        </div>
      </div>
    </section>
  );
}
