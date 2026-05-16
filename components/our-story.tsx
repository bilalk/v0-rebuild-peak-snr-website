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
                <h3 className="text-2xl font-bold text-primary">
                  The PeakSNR Origin
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  PeakSNR was founded by engineers with deep expertise in signal processing, telecommunications, and enterprise systems. We recognized a gap in the market: enterprises needed software solutions that don't just work, but work with precision under demanding conditions. We built PeakSNR to be that solution—removing the noise from complex communications challenges.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-primary">
                  Why &quot;PeakSNR&quot;?
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  In technical communications, signal-to-noise ratio (SNR) measures how clearly a signal stands out from interference. It's a fundamental concept: good SNR = clear communication, bad SNR = confusion and failure. We named our company after this principle because it's what we do: we engineer solutions that maximize signal clarity, minimize noise, and deliver unmistakable results for enterprise customers.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-primary">
                  What We've Built
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  PeakSNR specializes in four core areas: AI-powered voice solutions, GPU acceleration for real-time processing at scale, secure enterprise radio and VoIP systems, and cloud-native communication infrastructure. Every solution applies our core principle: filter the noise, amplify the signal, deliver exceptional results.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-primary">
                  For Enterprise & Scale
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  We partner with telecom providers, cloud platforms, system integrators, and enterprises that demand uncompromising quality. Whether handling millions of concurrent voice streams, processing complex AI voice interactions, or powering secure critical infrastructure—PeakSNR solutions are engineered for mission-critical environments where clarity and reliability aren't optional.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-primary">
                  Our Promise
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  When you work with PeakSNR, you get more than software. You get solutions engineered by specialists who understand signal integrity at every layer—from protocol design to deployment at scale. We don't compromise on quality, and we don't add unnecessary complexity. Just clean, clear, effective technology that delivers results.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-accent">
                  Cut the Noise
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  That's not just our tagline—it's our commitment. Every product, every service, every interaction with PeakSNR is designed to eliminate confusion, deliver clarity, and maximize the signal that matters most to your business.
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
