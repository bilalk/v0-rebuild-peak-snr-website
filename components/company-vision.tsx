'use client';

import { Card } from '@/components/ui/card';
import { Shield, Zap, Target, Code } from 'lucide-react';

const visionPillars = [
  {
    icon: Shield,
    title: 'Security First',
    description: 'Military-grade encryption and security protocols built into every solution'
  },
  {
    icon: Zap,
    title: 'Peak Performance',
    description: 'Optimized for high-throughput, low-latency signal processing'
  },
  {
    icon: Target,
    title: 'Precision Engineering',
    description: 'Disciplined software development rooted in military signal corps traditions'
  },
  {
    icon: Code,
    title: 'Custom Solutions',
    description: 'Tailored software architectures for unique enterprise requirements'
  }
];

export function CompanyVision() {
  return (
    <section 
      id="vision"
      className="relative w-full py-20 md:py-32"
    >
      {/* Animated background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-accent/50 blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-4 z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Founded on <span className="text-accent">Engineering Excellence</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Peak SNR was founded by alumni of the Military College of Signals, bringing decades of expertise in 
                signal processing, telecommunications, and security engineering.
              </p>
              <p className="text-lg text-muted-foreground">
                We apply military-grade precision, discipline, and innovation to every software solution, delivering systems 
                that excel under demanding conditions and critical requirements.
              </p>
            </div>

            {/* Core competencies */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-primary">Core Competencies</h3>
              <ul className="space-y-3">
                <li className="flex gap-3 items-start">
                  <span className="text-accent text-xl leading-none mt-1">•</span>
                  <span className="text-muted-foreground">Digital Signal Processing (DSP) & Algorithm Development</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-accent text-xl leading-none mt-1">•</span>
                  <span className="text-muted-foreground">Telecom & VoIP Infrastructure</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-accent text-xl leading-none mt-1">•</span>
                  <span className="text-muted-foreground">Radio Systems & RoIP Solutions</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-accent text-xl leading-none mt-1">•</span>
                  <span className="text-muted-foreground">GPU Acceleration & High-Performance Computing</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-accent text-xl leading-none mt-1">•</span>
                  <span className="text-muted-foreground">AI/ML Voice Solutions & LLM Deployment</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-accent text-xl leading-none mt-1">•</span>
                  <span className="text-muted-foreground">Cloud Architecture & Scalable Infrastructure</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right content - Vision pillars */}
          <div className="grid gap-6">
            {visionPillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <Card
                  key={index}
                  className="bg-background/50 border-border hover:border-primary/50 transition-all p-6"
                >
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <Icon className="h-8 w-8 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-foreground mb-2">{pillar.title}</h3>
                      <p className="text-sm text-muted-foreground">{pillar.description}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
