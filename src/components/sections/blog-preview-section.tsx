import Link from 'next/link';
import { blogPosts } from '@/lib/data';
import { BlogPostCard } from '@/components/ui/blog-post-card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function BlogPreviewSection() {
  const previewPosts = blogPosts.slice(0, 3);

  return (
    <section id="blog-preview" className="bg-background/70 section-padding">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">
            Hair Care Insights
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Tips, tricks, and expert advice to help you achieve your best hair.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {previewPosts.map((post, index) => (
            <div key={post.id} className="animate-slide-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <BlogPostCard post={post} />
            </div>
          ))}
        </div>
        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: `${previewPosts.length * 0.1 + 0.2}s` }}>
          <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground group">
            <Link href="/blog">
              Visit Our Blog
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
