'use client';

import { Card } from '@/components/ui/card';
import { Zap, Radio, Cpu, Cloud } from 'lucide-react';

const services = [
  {
    icon: Zap,
    title: 'Signal Processing Solutions',
    description: 'Real-time signal analysis, filtering, and custom DSP algorithm implementation. We deliver precision signal processing for enterprise applications requiring millisecond-latency and deterministic performance.'
  },
  {
    icon: Radio,
    title: 'VoIP & Radio Solutions',
    description: 'Enterprise VoIP gateway systems and Radio over IP (RoIP) platforms with military-grade security. Built from the ground up for critical communications infrastructure and 24/7 reliability.'
  },
  {
    icon: Cpu,
    title: 'GPU-Accelerated Voice Services',
    description: 'Custom LLM deployments for voice applications with GPU acceleration. Real-time voice, video, and audio streaming with advanced codec support and protocol optimization.'
  },
  {
    icon: Cloud,
    title: 'Cloud & AI Voice Solutions',
    description: 'Cloud-native voice infrastructure with AI-powered voice processing, synthesis, and analysis. Scalable deployments supporting high-throughput voice services and intelligent audio processing.'
  }
];

export function ServicesSection() {
  return (
    <section 
      id="services"
      className="relative w-full py-20 md:py-32 bg-card/30"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-3">
        <svg className="w-full h-full" viewBox="0 0 1200 600">
          <defs>
            <pattern id="dots" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="2" fill="currentColor"/>
            </pattern>
          </defs>
          <rect width="1200" height="600" fill="url(#dots)" />
        </svg>
      </div>

      <div className="relative container mx-auto px-4 z-10">
        {/* Section header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Solutions That <span className="text-accent">Amplify Signal</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Cutting-edge software solutions engineered for precision, security, and performance
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group bg-background border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 p-8"
              >
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-colors">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 text-foreground">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Bottom tagline */}
        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground uppercase tracking-widest">
            Enterprise Solutions Built on Signal Processing Excellence
          </p>
        </div>
      </div>
    </section>
  );
}
