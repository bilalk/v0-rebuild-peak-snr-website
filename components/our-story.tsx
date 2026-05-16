'use client';

export function OurStory() {
  return (
    <section 
      id="story"
      className="relative w-full py-20 md:py-32 bg-gradient-to-b from-background to-card/20"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center">
            Our <span className="text-accent">Story</span>
          </h2>

          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary">
                Built on Military Signal Excellence
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Peak SNR emerges from the legacy of the Military College of Signals—an institution renowned for producing 
                world-class signal processing engineers and telecommunications experts. Our founders bring this distinguished 
                heritage into the commercial sector, translating decades of experience in critical communications systems into 
                innovative software solutions.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary">
                From Signal Corps to Software Innovation
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                What began as deep expertise in radio frequency engineering, signal processing algorithms, and secure 
                telecommunications has evolved into a modern software powerhouse. We've applied those time-tested principles 
                of reliability, precision, and security to contemporary challenges: cloud infrastructure, AI voice processing, 
                GPU acceleration, and enterprise-scale digital signal processing.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary">
                Signal-to-Noise Ratio Philosophy
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                In signal processing, SNR measures how clearly a signal cuts through noise. We apply this philosophy to 
                everything we build: clear communications, minimal overhead, maximum signal clarity. Our software reduces 
                complexity (noise), amplifies value (signal), and delivers enterprise-grade solutions that perform flawlessly 
                in demanding environments.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary">
                Serving Enterprise & Critical Infrastructure
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We partner with telecommunications providers, cloud infrastructure companies, government agencies, and systems 
                integrators who demand uncompromising quality. Whether it's VoIP gateways that handle millions of calls, 
                signal processing pipelines that operate at microsecond precision, or AI voice solutions deployed at scale—
                Peak SNR solutions are engineered for mission-critical success.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary">
                Our Commitment
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We are committed to delivering software that embodies the precision, reliability, and innovation of the signal 
                processing tradition. Every line of code, every architecture decision, and every integration reflects our 
                dedication to excellence. We don't just build software—we build signal processing solutions that clear the noise 
                and deliver unmistakable value.
              </p>
            </div>
          </div>

          {/* Closing tagline */}
          <div className="mt-12 pt-12 border-t border-border text-center">
            <p className="text-xl text-accent font-semibold">
              Peak SNR. Cut the Noise. Deliver the Signal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
