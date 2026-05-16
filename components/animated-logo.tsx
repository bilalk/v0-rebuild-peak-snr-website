'use client';

import { useState, useEffect } from 'react';
import { useCurrentSection } from '@/hooks/use-current-section';

type Variant = 'vertical-bars' | 'horizontal-line' | 'network-nodes' | 'equalizer' | 'frequency-wave' | 'vertical-pulse';

interface AnimatedLogoProps {
  variant?: Variant | 'auto';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
}

export function AnimatedLogo({ variant = 'auto', size = 'md', showText = true }: AnimatedLogoProps) {
  const currentSection = useCurrentSection();
  const [displayVariant, setDisplayVariant] = useState<Variant>('vertical-bars');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const getSectionVariant = (section: string): Variant => {
    const variantMap: Record<string, Variant> = {
      'home': 'vertical-bars',
      'services': 'equalizer',
      'vision': 'network-nodes',
      'story': 'frequency-wave',
      'contact': 'horizontal-line',
    };
    return variantMap[section] || 'vertical-bars';
  };

  useEffect(() => {
    if (variant === 'auto') {
      const newVariant = getSectionVariant(currentSection);
      if (newVariant !== displayVariant) {
        setIsTransitioning(true);
        const timer = setTimeout(() => {
          setDisplayVariant(newVariant);
          setIsTransitioning(false);
        }, 150);
        return () => clearTimeout(timer);
      }
    }
  }, [currentSection, variant, displayVariant]);

  const activeVariant = variant === 'auto' ? displayVariant : (variant as Variant);

  const sizeConfig = {
    sm: { width: 40, height: 20 },
    md: { width: 60, height: 30 },
    lg: { width: 80, height: 40 },
    xl: { width: 120, height: 60 },
  };

  const config = sizeConfig[size];

  return (
    <div className={`flex flex-col items-center gap-1 transition-opacity duration-200 ${isTransitioning ? 'opacity-50' : 'opacity-100'}`}>

      {/* Vertical bars */}
      {activeVariant === 'vertical-bars' && (
        <svg width={config.width} height={config.height} viewBox="0 0 60 30" className="text-accent">
          <style>{`
            @keyframes bar1 { 0%, 100% { height: 8px; } 50% { height: 24px; } }
            @keyframes bar2 { 0%, 100% { height: 12px; } 50% { height: 28px; } }
            @keyframes bar3 { 0%, 100% { height: 16px; } 50% { height: 30px; } }
            @keyframes bar4 { 0%, 100% { height: 14px; } 50% { height: 28px; } }
            @keyframes bar5 { 0%, 100% { height: 10px; } 50% { height: 26px; } }
            .b1 { animation: bar1 1s ease-in-out infinite; }
            .b2 { animation: bar2 1s ease-in-out infinite 0.1s; }
            .b3 { animation: bar3 1s ease-in-out infinite 0.2s; }
            .b4 { animation: bar4 1s ease-in-out infinite 0.1s; }
            .b5 { animation: bar5 1s ease-in-out infinite 0.05s; }
          `}</style>
          <rect className="b1" x="4" y="15" width="5" height="8" fill="currentColor" rx="1" />
          <rect className="b2" x="12" y="13" width="5" height="12" fill="currentColor" rx="1" />
          <rect className="b3" x="20" y="11" width="5" height="16" fill="currentColor" rx="1" />
          <rect className="b4" x="28" y="12" width="5" height="14" fill="currentColor" rx="1" />
          <rect className="b5" x="36" y="14" width="5" height="10" fill="currentColor" rx="1" />
          <rect className="b1" x="44" y="15" width="5" height="8" fill="currentColor" rx="1" />
          <rect className="b2" x="52" y="13" width="5" height="12" fill="currentColor" rx="1" />
        </svg>
      )}

      {/* Horizontal line */}
      {activeVariant === 'horizontal-line' && (
        <svg width={config.width} height={config.height} viewBox="0 0 60 30" className="text-accent">
          <style>{`
            @keyframes flowLine { 0% { strokeDashoffset: 40; } 100% { strokeDashoffset: 0; } }
            .line { stroke: currentColor; strokeWidth: 2; fill: none; strokeLinecap: round; animation: flowLine 2s linear infinite; }
          `}</style>
          <path className="line" d="M 2 15 Q 10 8, 18 15 T 34 15 T 50 15 T 60 15" strokeDasharray="40" />
        </svg>
      )}

      {/* Network nodes */}
      {activeVariant === 'network-nodes' && (
        <svg width={config.width} height={config.height} viewBox="0 0 60 30" className="text-accent">
          <style>{`
            @keyframes pulse { 0%, 100% { r: 2; } 50% { r: 3.5; } }
            .node { fill: currentColor; animation: pulse 1.5s ease-in-out infinite; }
            .n1 { animation-delay: 0s; }
            .n2 { animation-delay: 0.2s; }
            .n3 { animation-delay: 0.4s; }
            .n4 { animation-delay: 0.1s; }
            .n5 { animation-delay: 0.3s; }
          `}</style>
          <line x1="30" y1="15" x2="15" y2="6" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
          <line x1="30" y1="15" x2="50" y2="6" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
          <line x1="30" y1="15" x2="10" y2="24" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
          <line x1="30" y1="15" x2="55" y2="24" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
          <circle className="node n1" cx="30" cy="15" r="2" />
          <circle className="node n2" cx="15" cy="6" r="1.5" />
          <circle className="node n3" cx="50" cy="6" r="1.5" />
          <circle className="node n4" cx="10" cy="24" r="1.5" />
          <circle className="node n5" cx="55" cy="24" r="1.5" />
        </svg>
      )}

      {/* Equalizer */}
      {activeVariant === 'equalizer' && (
        <svg width={config.width} height={config.height} viewBox="0 0 60 30" className="text-accent">
          <style>{`
            @keyframes eq1 { 0%, 100% { height: 6px; } 50% { height: 18px; } }
            @keyframes eq2 { 0%, 100% { height: 8px; } 50% { height: 20px; } }
            @keyframes eq3 { 0%, 100% { height: 10px; } 50% { height: 22px; } }
            .e1 { animation: eq1 1.1s ease-in-out infinite; }
            .e2 { animation: eq2 1.1s ease-in-out infinite 0.1s; }
            .e3 { animation: eq3 1.1s ease-in-out infinite 0.2s; }
          `}</style>
          <rect className="e1" x="6" y="15" width="4" height="6" fill="currentColor" rx="1" />
          <rect className="e2" x="14" y="14" width="4" height="8" fill="currentColor" rx="1" />
          <rect className="e3" x="22" y="13" width="4" height="10" fill="currentColor" rx="1" />
          <rect className="e2" x="30" y="14" width="4" height="8" fill="currentColor" rx="1" />
          <rect className="e1" x="38" y="15" width="4" height="6" fill="currentColor" rx="1" />
          <rect className="e2" x="46" y="14" width="4" height="8" fill="currentColor" rx="1" />
        </svg>
      )}

      {/* Frequency wave */}
      {activeVariant === 'frequency-wave' && (
        <svg width={config.width} height={config.height} viewBox="0 0 60 30" className="text-accent">
          <style>{`
            @keyframes wave { 0% { d: path('M 2 15 Q 8 10, 14 15 T 26 15 T 38 15 T 50 15 T 60 15'); } 50% { d: path('M 2 15 Q 8 8, 14 15 T 26 15 T 38 15 T 50 15 T 60 15'); } 100% { d: path('M 2 15 Q 8 10, 14 15 T 26 15 T 38 15 T 50 15 T 60 15'); } }
            .w { stroke: currentColor; strokeWidth: 1.5; fill: none; strokeLinecap: round; animation: wave 2s ease-in-out infinite; }
          `}</style>
          <path className="w" d="M 2 15 Q 8 10, 14 15 T 26 15 T 38 15 T 50 15 T 60 15" />
        </svg>
      )}

      {/* Vertical pulse - bars with pulsing glow effect */}
      {activeVariant === 'vertical-pulse' && (
        <svg width={config.width} height={config.height} viewBox="0 0 60 30" className="text-accent">
          <style>{`
            @keyframes vp1 { 0%, 100% { height: 8px; opacity: 0.6; } 50% { height: 26px; opacity: 1; } }
            @keyframes vp2 { 0%, 100% { height: 14px; opacity: 0.7; } 50% { height: 30px; opacity: 1; } }
            @keyframes vp3 { 0%, 100% { height: 18px; opacity: 0.8; } 50% { height: 30px; opacity: 1; } }
            @keyframes vp4 { 0%, 100% { height: 14px; opacity: 0.7; } 50% { height: 28px; opacity: 1; } }
            @keyframes vp5 { 0%, 100% { height: 8px; opacity: 0.6; } 50% { height: 24px; opacity: 1; } }
            .vp1 { animation: vp1 1.2s ease-in-out infinite; }
            .vp2 { animation: vp2 1.2s ease-in-out infinite 0.12s; }
            .vp3 { animation: vp3 1.2s ease-in-out infinite 0.24s; }
            .vp4 { animation: vp4 1.2s ease-in-out infinite 0.12s; }
            .vp5 { animation: vp5 1.2s ease-in-out infinite 0.06s; }
            .vp6 { animation: vp1 1.2s ease-in-out infinite 0.18s; }
            .vp7 { animation: vp2 1.2s ease-in-out infinite 0.3s; }
          `}</style>
          <rect className="vp1" x="4" y="15" width="5" height="8" fill="currentColor" rx="1" />
          <rect className="vp2" x="12" y="11" width="5" height="14" fill="currentColor" rx="1" />
          <rect className="vp3" x="20" y="9" width="5" height="18" fill="currentColor" rx="1" />
          <rect className="vp4" x="28" y="11" width="5" height="14" fill="currentColor" rx="1" />
          <rect className="vp5" x="36" y="13" width="5" height="10" fill="currentColor" rx="1" />
          <rect className="vp6" x="44" y="15" width="5" height="8" fill="currentColor" rx="1" />
          <rect className="vp7" x="52" y="12" width="5" height="12" fill="currentColor" rx="1" />
        </svg>
      )}

      {/* Static text */}
      {showText && (
        <div className="text-center mt-1">
          <h1 className="text-xs md:text-sm font-bold text-primary leading-tight">
            PeakSNR
          </h1>
        </div>
      )}
    </div>
  );
}
