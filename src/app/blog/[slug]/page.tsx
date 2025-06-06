"use client";

import { blogPosts } from '@/lib/data';
import type { BlogPost } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronLeft, CalendarDays, UserCircle, Tag } from 'lucide-react';
import { useState, useEffect } from 'react';
import { notFound } from 'next/navigation';

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const [post, setPost] = useState<BlogPost | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const foundPost = blogPosts.find(p => p.slug === params.slug);
    setPost(foundPost);
    setIsLoading(false);
  }, [params.slug]);

  if (isLoading) {
    return (
      <div className="container mx-auto section-padding container-padding min-h-screen flex items-center justify-center">
        <p className="text-2xl font-headline text-primary">Loading article...</p>
      </div>
    );
  }
  
  if (!post) {
    notFound();
  }

  const { title, content, imageUrl, author, date, category, tags } = post;

  return (
    <div className="bg-background section-padding min-h-screen">
      <div className="container mx-auto max-w-3xl container-padding">
        <Button variant="outline" asChild className="mb-8 group">
          <Link href="/blog">
            <ChevronLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>
        </Button>

        <article className="animate-fade-in">
          <p className="font-body text-accent font-semibold mb-2">{category}</p>
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">{title}</h1>
          
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground mb-6">
            <div className="flex items-center">
              <CalendarDays className="h-4 w-4 mr-1.5" />
              <span>{new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
            <div className="flex items-center">
              <UserCircle className="h-4 w-4 mr-1.5" />
              <span>By {author}</span>
            </div>
          </div>

          <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg mb-8 border">
            <Image
              src={imageUrl}
              alt={title}
              data-ai-hint="blog article"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div 
            className="prose prose-lg lg:prose-xl max-w-none font-body text-foreground/90 
                       prose-headings:font-headline prose-headings:text-primary 
                       prose-a:text-accent hover:prose-a:text-accent/80 prose-strong:text-foreground"
            dangerouslySetInnerHTML={{ __html: content }} 
          />

          {tags && tags.length > 0 && (
            <div className="mt-10 pt-6 border-t">
              <h3 className="font-headline text-lg font-semibold text-primary mb-3 flex items-center">
                <Tag className="h-5 w-5 mr-2" />
                Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {tags.map(tag => (
                  <span key={tag} className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm font-body">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </article>
      </div>
    </div>
  );
}
