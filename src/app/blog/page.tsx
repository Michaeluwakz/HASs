import { blogPosts } from '@/lib/data';
import { BlogPostCard } from '@/components/ui/blog-post-card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Filter } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function BlogPage() {
  const categories = Array.from(new Set(blogPosts.map(post => post.category)));

  return (
    <div className="bg-background section-padding min-h-screen">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4">
            HAS Hair Care Blog
          </h1>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Your source for expert hair care advice, tips, and inspiration.
          </p>
        </div>

        {/* Search and Filter Bar - static for now */}
        <div className="mb-10 grid grid-cols-1 md:grid-cols-3 gap-4 items-end animate-fade-in" style={{animationDelay: '0.2s'}}>
          <div className="md:col-span-2">
            <label htmlFor="search-blog" className="sr-only">Search blog posts</label>
            <div className="relative">
              <Input type="search" id="search-blog" placeholder="Search articles..." className="pl-10 bg-card" />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            </div>
          </div>
          <div>
            <label htmlFor="filter-category" className="sr-only">Filter by category</label>
            <Select>
              <SelectTrigger id="filter-category" className="w-full bg-card">
                <Filter className="h-4 w-4 mr-2 text-muted-foreground" />
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map(category => (
                  <SelectItem key={category} value={category.toLowerCase().replace(/\s+/g, '-')}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div key={post.id} className="animate-slide-in-up" style={{ animationDelay: `${(index * 0.1) + 0.3}s` }}>
              <BlogPostCard post={post} />
            </div>
          ))}
        </div>
        
        {/* Placeholder for Pagination */}
        <div className="mt-12 text-center animate-fade-in" style={{animationDelay: `${(blogPosts.length * 0.1) + 0.5}s`}}>
          <Button variant="outline">Load More Posts</Button>
        </div>
      </div>
    </div>
  );
}
