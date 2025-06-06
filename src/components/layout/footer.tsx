import Link from 'next/link';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { Logo } from '@/components/logo';

const socialLinks = [
  { Icon: Facebook, href: '#', label: 'Facebook' },
  { Icon: Instagram, href: '#', label: 'Instagram' },
  { Icon: Twitter, href: '#', label: 'Twitter' },
  { Icon: Youtube, href: '#', label: 'Youtube' },
];

const quickLinks = [
  { href: '/products', label: 'Our Products' },
  { href: '/#shipping', label: 'Shipping Info' },
  { href: '/#contact', label: 'Contact Us' },
  { href: '/blog', label: 'Hair Care Blog' },
];

export function Footer() {
  return (
    <footer className="bg-muted/50 section-padding">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 container-padding">
        <div>
          <Logo />
          <p className="mt-4 text-muted-foreground font-body text-sm max-w-xs">
            HAS - The Hair Care Solutions. Premium hair care formulated for all hair types, especially African hair textures.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-headline font-semibold text-primary mb-4">Quick Links</h3>
          <ul className="space-y-2 font-body">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="hover:text-primary transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-headline font-semibold text-primary mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            {socialLinks.map(({ Icon, href, label }) => (
              <Link key={label} href={href} aria-label={label} className="text-muted-foreground hover:text-primary icon-bounce-hover">
                <Icon className="h-6 w-6" />
              </Link>
            ))}
          </div>
          <p className="mt-6 text-muted-foreground font-body text-sm">
            &copy; {new Date().getFullYear()} HAS Hair Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
