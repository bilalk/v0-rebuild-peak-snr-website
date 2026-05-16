'use client';

import { AnimatedLogo } from './animated-logo';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section 
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center pt-24 pb-12 md:pt-32 md:pb-20"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1200 600">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="1200" height="600" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative container mx-auto px-4 z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="flex flex-col gap-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">
                <span className="text-foreground">Cut Through the</span>{' '}
                <span className="text-accent">Noise</span>,{' '}
                <span className="text-foreground">Deliver Crystal Clear</span>{' '}
                <span className="text-primary">Solutions</span>
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-lg">
                Founded by Military College of Signals alumni, we specialize in software solutions for signal processing, 
                VoIP, radio systems, cloud infrastructure, and AI-powered voice solutions.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                View Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10"
              >
                Get in Touch
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <p>✓ Enterprise-Grade Security</p>
              <p>✓ Military-Grade Precision</p>
              <p>✓ Custom AI Solutions</p>
            </div>
          </div>

          {/* Right visual - Logo animation showcase */}
          <div className="flex flex-col gap-12 items-center justify-center">
            {/* Primary animated logo */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl rounded-full"></div>
              <AnimatedLogo 
                variant="vertical-pulse" 
                size="xl" 
                showText={false}
              />
            </div>

            {/* Variant preview text */}
            <p className="text-sm text-muted-foreground text-center">
              Advanced signal processing with optimized signal-to-noise ratio
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
