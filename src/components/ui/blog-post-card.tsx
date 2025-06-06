import Image from 'next/image';
import Link from 'next/link';
import type { BlogPost } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { ArrowRight, CalendarDays, UserCircle } from 'lucide-react';

interface BlogPostCardProps {
  post: BlogPost;
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <div className="bg-card rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden h-full flex flex-col">
        <div className="relative aspect-video">
          <Image
            src={post.imageUrl}
            alt={post.title}
            data-ai-hint="hair care blog"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <p className="font-body text-sm text-accent font-semibold mb-1">{post.category}</p>
          <h3 className="font-headline text-xl lg:text-2xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">
            {post.title}
          </h3>
          <p className="font-body text-sm text-muted-foreground mb-4 flex-grow line-clamp-3">
            {post.excerpt}
          </p>
          <div className="font-body text-xs text-muted-foreground space-y-1 mb-4">
            <div className="flex items-center">
              <CalendarDays className="h-3.5 w-3.5 mr-1.5" />
              <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
            <div className="flex items-center">
              <UserCircle className="h-3.5 w-3.5 mr-1.5" />
              <span>By {post.author}</span>
            </div>
          </div>
          <Button variant="link" className="p-0 h-auto text-primary group-hover:text-accent self-start">
            Read More <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </div>
    </Link>
  );
}
