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
        {/* Rotating narrative text */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="min-h-[100px] flex items-center justify-center">
            <p className="text-2xl md:text-3xl font-bold text-accent transition-opacity duration-500">
              {narratives[currentNarrative]}
            </p>
          </div>
          <div className="flex justify-center gap-2 mt-8">
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
        </div>

        {/* Brain with logos visualization */}
        <div className="flex justify-center">
          <div className="max-w-lg w-full">
            <BrainWithLogos />
          </div>
        </div>
      </div>
    </section>
  );
}
