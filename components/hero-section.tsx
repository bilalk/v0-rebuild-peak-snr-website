'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { BrainWithLogos } from './brain-with-logos';

const narratives = [
  "Transform enterprise complexity into crystal-clear solutions",
  "Reduce communication noise, maximize business signal impact",
  "Filter out information overload, amplify decision-making clarity",
];

export function HeroSection() {
  const [currentNarrative, setCurrentNarrative] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNarrative((prev) => (prev + 1) % narratives.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center pt-24 pb-12 md:pt-32 md:pb-20 overflow-hidden"
    >
      {/* Animated waveform/signal background */}
      <div className="absolute inset-0 opacity-15">
        <svg className="w-full h-full" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="50%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#f97316" />
            </linearGradient>
            <filter id="waveBlur">
              <feGaussianBlur in="SourceGraphic" stdDeviation="0.5" />
            </filter>
          </defs>

          <g filter="url(#waveBlur)" strokeLinecap="round" strokeLinejoin="round">
            <path d="M -50 200 Q 50 150, 150 200 T 350 200 T 550 200 T 750 200 T 950 200 T 1150 200 T 1350 200"
              stroke="url(#waveGradient)" strokeWidth="3" fill="none" opacity="0.7"/>
            <path d="M -50 250 Q 50 210, 150 250 T 350 250 T 550 250 T 750 250 T 950 250 T 1150 250 T 1350 250"
              stroke="#3b82f6" strokeWidth="2.5" fill="none" opacity="0.6" className="animate-pulse" style={{animationDelay: '0.1s'}}/>
            <path d="M -50 300 Q 50 260, 150 300 T 350 300 T 550 300 T 750 300 T 950 300 T 1150 300 T 1350 300"
              stroke="#06b6d4" strokeWidth="2.5" fill="none" opacity="0.5" className="animate-pulse" style={{animationDelay: '0.2s'}}/>
            <line x1="200" y1="150" x2="200" y2="350" stroke="#3b82f6" strokeWidth="1.5" opacity="0.4"/>
            <line x1="400" y1="140" x2="400" y2="360" stroke="#06b6d4" strokeWidth="1.5" opacity="0.4"/>
            <line x1="600" y1="160" x2="600" y2="340" stroke="#f97316" strokeWidth="1.5" opacity="0.4"/>
            <line x1="800" y1="130" x2="800" y2="370" stroke="#3b82f6" strokeWidth="1.5" opacity="0.4"/>
            <line x1="1000" y1="170" x2="1000" y2="330" stroke="#06b6d4" strokeWidth="1.5" opacity="0.4"/>
          </g>

          <g>
            <circle cx="200" cy="200" r="5" fill="#3b82f6" opacity="0.8" className="animate-pulse"/>
            <circle cx="400" cy="220" r="4" fill="#06b6d4" opacity="0.7" className="animate-pulse" style={{animationDelay: '0.2s'}}/>
            <circle cx="600" cy="240" r="5" fill="#f97316" opacity="0.8" className="animate-pulse" style={{animationDelay: '0.4s'}}/>
            <circle cx="800" cy="210" r="4" fill="#3b82f6" opacity="0.7" className="animate-pulse" style={{animationDelay: '0.1s'}}/>
            <circle cx="1000" cy="250" r="5" fill="#06b6d4" opacity="0.8" className="animate-pulse" style={{animationDelay: '0.3s'}}/>
          </g>

          <g stroke="#3b82f6" strokeWidth="1" opacity="0.3" strokeDasharray="5,5">
            <line x1="200" y1="200" x2="400" y2="220" />
            <line x1="400" y1="220" x2="600" y2="240" />
            <line x1="600" y1="240" x2="800" y2="210" />
            <line x1="800" y1="210" x2="1000" y2="250" />
            <line x1="200" y1="200" x2="600" y2="240" />
            <line x1="400" y1="220" x2="800" y2="210" />
          </g>
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
                PeakSNR optimizes enterprise communications by filtering out the noise and amplifying what matters most.
                From AI voice solutions to custom radio systems, we deliver crystal-clear results through intelligent signal management.
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

          {/* Right visual - Rotating narrative + Brain animation */}
          <div className="flex flex-col gap-4 items-center justify-center">
            {/* Rotating narrative text */}
            <div className="min-h-[72px] flex items-center justify-center text-center px-2">
              <p
                key={currentNarrative}
                className="text-base md:text-lg font-semibold text-accent hero-narrative"
              >
                {narratives[currentNarrative]}
              </p>
            </div>
            {/* Dot indicators */}
            <div className="flex justify-center gap-2">
              {narratives.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentNarrative(idx)}
                  className={`h-2 rounded-full transition-all ${
                    idx === currentNarrative ? 'bg-accent w-8' : 'bg-muted w-2'
                  }`}
                  aria-label={`Go to narrative ${idx + 1}`}
                />
              ))}
            </div>
            {/* Brain with logos animation */}
            <div className="w-full max-w-sm">
              <BrainWithLogos />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-narrative {
          animation: heroFadeIn 0.6s ease-out;
        }
        @keyframes heroFadeIn {
          0% { opacity: 0; transform: translateY(8px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
