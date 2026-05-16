'use client';

export function OurStory() {
  return (
    <section
      id="story"
      className="relative w-full py-20 md:py-32 bg-gradient-to-b from-background to-card/20"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center">
            Our <span className="text-accent">Story</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-primary">The PeakSNR Origin</h3>
                <p className="text-base text-muted-foreground leading-relaxed text-justify hyphens-auto">
                  PeakSNR was founded by engineers with deep expertise in signal processing,
                  telecommunications, and enterprise systems. We recognized a gap in the market:
                  enterprises needed software that could handle the complexity of modern communications
                  without sacrificing reliability or clarity.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-primary">Why &quot;PeakSNR&quot;?</h3>
                <p className="text-base text-muted-foreground leading-relaxed text-justify hyphens-auto">
                  In technical communications, signal-to-noise ratio (SNR) measures how clearly a
                  signal stands out from interference. It&apos;s a fundamental concept: good SNR means
                  clear communication, bad SNR means noise drowns out the message. We apply this
                  philosophy to enterprise software — cutting out complexity and delivering what matters.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-primary">What We&apos;ve Built</h3>
                <p className="text-base text-muted-foreground leading-relaxed text-justify hyphens-auto">
                  PeakSNR specializes in four core areas: AI-powered voice solutions, GPU acceleration
                  for real-time processing at scale, secure enterprise radio and VoIP systems, and
                  cloud-native voice infrastructure — all engineered for mission-critical deployments.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-primary">For Enterprise &amp; Scale</h3>
                <p className="text-base text-muted-foreground leading-relaxed text-justify hyphens-auto">
                  We partner with telecom providers, cloud platforms, system integrators, and
                  enterprises that demand uncompromising quality. Whether handling millions of
                  concurrent voice streams, or deploying secure radio systems in the field, PeakSNR
                  is built for scale.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-primary">Our Promise</h3>
                <p className="text-base text-muted-foreground leading-relaxed text-justify hyphens-auto">
                  When you work with PeakSNR, you get more than software. You get solutions engineered
                  by specialists who understand signal integrity at every layer — from protocol design
                  to deployment, from the first byte to the final delivery.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-accent">Cut the Noise</h3>
                <p className="text-base text-muted-foreground leading-relaxed text-justify hyphens-auto">
                  That&apos;s not just our tagline — it&apos;s our commitment. Every product, every service,
                  every interaction with PeakSNR is designed to eliminate confusion, deliver clarity,
                  and maximize your signal.
                </p>
              </div>
            </div>
          </div>

          {/* Closing tagline */}
          <div className="mt-16 pt-12 border-t border-border text-center">
            <p className="text-2xl md:text-3xl font-bold text-accent">
              PeakSNR. Cut the Noise. Deliver the Signal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
