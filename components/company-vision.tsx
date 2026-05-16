'use client';

import { Card } from '@/components/ui/card';
import { Shield, Zap, Target, Code } from 'lucide-react';

const visionPillars = [
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Industrial-strength encryption and security protocols built into every solution'
  },
  {
    icon: Zap,
    title: 'Maximum Clarity',
    description: 'Remove noise from complex communication systems. Ensure critical data arrives perfect.'
  },
  {
    icon: Target,
    title: 'Precision Technology',
    description: 'Disciplined engineering approach delivering measurable, reliable results at scale'
  },
  {
    icon: Code,
    title: 'Purpose-Built',
    description: 'Custom architectures tailored to your enterprise needs and deployment requirements'
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
                The PeakSNR <span className="text-accent">Approach</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Every communication system generates noise—interference, latency, dropped packets, unclear audio. PeakSNR removes it. 
                We take complex enterprise communication challenges and engineer solutions that deliver crystal-clear results, at scale.
              </p>
              <p className="text-lg text-muted-foreground">
                Whether optimizing AI voice systems, accelerating GPU processing, or securing critical infrastructure, 
                we apply disciplined engineering and deep signal expertise to maximize performance and reliability.
              </p>
            </div>

            {/* What We Deliver */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-primary">What We Deliver</h3>
              <ul className="space-y-3">
                <li className="flex gap-3 items-start">
                  <span className="text-accent text-xl leading-none mt-1">•</span>
                  <span className="text-muted-foreground">AI voice solutions optimized for accuracy and scale</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-accent text-xl leading-none mt-1">•</span>
                  <span className="text-muted-foreground">GPU-accelerated processing for real-time performance</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-accent text-xl leading-none mt-1">•</span>
                  <span className="text-muted-foreground">Enterprise radio and VoIP infrastructure</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-accent text-xl leading-none mt-1">•</span>
                  <span className="text-muted-foreground">Cloud-native communication platforms</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-accent text-xl leading-none mt-1">•</span>
                  <span className="text-muted-foreground">Custom algorithm and protocol development</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-accent text-xl leading-none mt-1">•</span>
                  <span className="text-muted-foreground">Security-first architecture for mission-critical systems</span>
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
