'use client';

import Link from 'next/link';
import { Zap } from 'lucide-react';

const footerLinks = [
  {
    title: 'Product',
    links: [
      { label: 'Services', href: '#services' },
      { label: 'Solutions', href: '#services' },
      { label: 'Capabilities', href: '#vision' }
    ]
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '#about' },
      { label: 'Our Story', href: '#story' },
      { label: 'Vision', href: '#vision' }
    ]
  },
  {
    title: 'Connect',
    links: [
      { label: 'LinkedIn', href: '#contact' },
      { label: 'Discord', href: '#contact' },
      { label: 'WhatsApp', href: '#contact' }
    ]
  }
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="about" className="relative w-full bg-card border-t border-border">
      {/* Main footer content */}
      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Zap className="h-6 w-6 text-accent" />
              <h3 className="text-xl font-bold text-foreground">PeakSNR</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Enterprise software solutions engineered to cut through noise and deliver maximum clarity for voice, AI, and communications infrastructure.
            </p>
          </div>

          {/* Footer link sections */}
          {footerLinks.map((section, index) => (
            <div key={index} className="space-y-4">
              <h4 className="font-semibold text-foreground">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-accent transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-border py-8">
          {/* Footer bottom */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground">
              © {currentYear} PeakSNR. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground text-center md:text-right">
              Precision Engineering for Enterprise Communications | Cut the Noise, Deliver the Signal
            </p>
          </div>
        </div>
      </div>

      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary/5 to-transparent rounded-full -z-10 blur-3xl"></div>
    </footer>
  );
}
