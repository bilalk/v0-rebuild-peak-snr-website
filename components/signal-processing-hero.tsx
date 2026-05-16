'use client';

import { useState, useEffect } from 'react';
import { BrainWithLogos } from './brain-with-logos';

const narratives = [
  "Filter out information overload, amplify decision-making clarity",
  "Reduce communication noise, maximize business signal impact",
  "Transform enterprise complexity into crystal-clear solutions"
];

export function SignalProcessingHero() {
  const [currentNarrative, setCurrentNarrative] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNarrative((prev) => (prev + 1) % narratives.length);
    }, 30000); // 30 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        {/* Brain with logos visualization - full width */}
        <div className="flex justify-center">
          <div className="max-w-2xl w-full">
            <BrainWithLogos />
          </div>
        </div>
      </div>
    </section>
  );
}
