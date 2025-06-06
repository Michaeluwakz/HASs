"use client";

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Send, Mail } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import React from 'react';

export function ContactSection() {
  const { toast } = useToast();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Add form submission logic here (e.g., send to an API endpoint)
    // For now, just show a toast notification.
    const formData = new FormData(event.currentTarget);
    const email = formData.get('email');
    
    toast({
      title: "Subscription Submitted!",
      description: `Thank you, ${email || 'friend'}, for joining the HAS Community!`,
      variant: "default",
    });
    event.currentTarget.reset();
  };
  
  const handleContactSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We've received your message and will get back to you soon.",
      variant: "default",
    });
    event.currentTarget.reset();
  };


  return (
    <section id="contact" className="bg-secondary section-padding">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 container-padding items-start">
        <div className="animate-fade-in">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-4">
            Get in Touch
          </h2>
          <p className="font-body text-muted-foreground mb-6">
            Have questions or need assistance? We're here to help! Fill out the form, and our team will get back to you shortly.
          </p>
          <form onSubmit={handleContactSubmit} className="space-y-6">
            <div>
              <Label htmlFor="contact-name" className="font-body text-foreground/80">Full Name</Label>
              <Input 
                id="contact-name" 
                name="contact-name"
                type="text" 
                placeholder="Your Name" 
                className="bg-background focus:animate-glow-focus" 
                required 
              />
            </div>
            <div>
              <Label htmlFor="contact-email" className="font-body text-foreground/80">Email Address</Label>
              <Input 
                id="contact-email" 
                name="contact-email"
                type="email" 
                placeholder="you@example.com" 
                className="bg-background focus:animate-glow-focus" 
                required 
              />
            </div>
            <div>
              <Label htmlFor="message" className="font-body text-foreground/80">Message</Label>
              <Textarea 
                id="message" 
                name="message"
                placeholder="Your message..." 
                rows={5} 
                className="bg-background focus:animate-glow-focus" 
                required 
              />
            </div>
            <Button type="submit" className="w-full md:w-auto bg-primary hover:bg-primary/90 text-primary-foreground">
              Send Message <Send className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </div>

        <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-4">
            Join the HAS Community
          </h2>
          <p className="font-body text-muted-foreground mb-6">
            Subscribe to our newsletter for exclusive hair care tips, new product announcements, and special discounts!
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="newsletter-email" className="font-body text-foreground/80">Email Address</Label>
              <Input 
                id="newsletter-email" 
                name="email"
                type="email" 
                placeholder="your.email@example.com" 
                className="bg-background focus:animate-glow-focus" 
                required 
              />
            </div>
            <Button type="submit" className="w-full md:w-auto bg-accent hover:bg-accent/90 text-accent-foreground">
              Subscribe <Mail className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
