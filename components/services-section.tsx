'use client';

import { Card } from '@/components/ui/card';
import { Zap, Radio, Cpu, Cloud } from 'lucide-react';

const services = [
  {
    icon: Zap,
    title: 'AI Voice & Language Solutions',
    description: 'Custom LLM deployments optimized for voice applications. Real-time voice synthesis, transcription, and intelligent call processing that understands context and delivers precise responses—cutting through confusion to deliver clear outcomes.'
  },
  {
    icon: Cpu,
    title: 'GPU-Accelerated Processing',
    description: 'Enterprise-grade GPU acceleration for intensive voice and video processing. Handle millions of concurrent streams with millisecond latency, powering everything from live transcription to real-time AI analysis.'
  },
  {
    icon: Radio,
    title: 'Enterprise Radio & VoIP',
    description: 'Secure communications platforms for mission-critical infrastructure. Radio over IP systems and VoIP gateways engineered for reliability, clarity, and enterprise-scale deployments.'
  },
  {
    icon: Cloud,
    title: 'Cloud Voice Infrastructure',
    description: 'Scalable, intelligent voice and audio streaming platforms. Multi-protocol support, adaptive bitrate optimization, and smart routing ensure every conversation arrives clear, secure, and on-time.'
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
            PeakSNR <span className="text-accent">Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Filter the noise. Amplify results. Enterprise software engineered for clarity and scale.
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
            Peak Signal-to-Noise Ratio for Enterprise Communications
          </p>
        </div>
      </div>
    </section>
  );
}
