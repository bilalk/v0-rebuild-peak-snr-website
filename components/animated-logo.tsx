'use client';

import { useState, useEffect } from 'react';
import { useCurrentSection } from '@/hooks/use-current-section';

type Variant = 'vertical-pulse' | 'horizontal-line' | 'network-nodes' | 'equalizer' | 'frequency-spectrum';

interface AnimatedLogoProps {
  variant?: Variant | 'auto';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
}

export function AnimatedLogo({ 
  variant = 'auto', 
  size = 'md',
  showText = true 
}: AnimatedLogoProps) {
  const currentSection = useCurrentSection();
  const [displayVariant, setDisplayVariant] = useState<Variant>('vertical-pulse');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const getSectionVariant = (section: string): Variant => {
    const variantMap: Record<string, Variant> = {
      'home': 'vertical-pulse',
      'services': 'equalizer',
      'vision': 'network-nodes',
      'story': 'frequency-spectrum',
      'contact': 'horizontal-line',
    };
    return variantMap[section] || 'vertical-pulse';
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
  
  const sizeMap = {
    sm: { width: 80, height: 80 },
    md: { width: 120, height: 120 },
    lg: { width: 160, height: 160 },
    xl: { width: 200, height: 200 }
  };

  const dimensions = sizeMap[size];

  const renderVariant = () => {
    switch (activeVariant) {
      case 'vertical-pulse':
        return (
          <svg 
            width={dimensions.width} 
            height={dimensions.height}
            viewBox="0 0 120 120" 
            className="drop-shadow-lg"
          >
            <defs>
              <style>{`
                @keyframes pulse-bar-1 { 0%, 100% { height: 20px; } 50% { height: 50px; } }
                @keyframes pulse-bar-2 { 0%, 100% { height: 30px; } 50% { height: 60px; } }
                @keyframes pulse-bar-3 { 0%, 100% { height: 40px; } 50% { height: 70px; } }
                @keyframes pulse-bar-4 { 0%, 100% { height: 35px; } 50% { height: 65px; } }
                @keyframes pulse-bar-5 { 0%, 100% { height: 25px; } 50% { height: 55px; } }
                @keyframes pulse-bar-6 { 0%, 100% { height: 30px; } 50% { height: 60px; } }
                .bar-1 { animation: pulse-bar-1 1.4s ease-in-out infinite; }
                .bar-2 { animation: pulse-bar-2 1.4s ease-in-out infinite 0.1s; }
                .bar-3 { animation: pulse-bar-3 1.4s ease-in-out infinite 0.2s; }
                .bar-4 { animation: pulse-bar-4 1.4s ease-in-out infinite 0.15s; }
                .bar-5 { animation: pulse-bar-5 1.4s ease-in-out infinite 0.25s; }
                .bar-6 { animation: pulse-bar-6 1.4s ease-in-out infinite 0.1s; }
              `}</style>
            </defs>
            <rect x="8" y="60" width="8" height="20" fill="#3b82f6" className="bar-1" rx="2"/>
            <rect x="20" y="50" width="8" height="30" fill="#06b6d4" className="bar-2" rx="2"/>
            <rect x="32" y="40" width="8" height="40" fill="#f97316" className="bar-3" rx="2"/>
            <rect x="44" y="45" width="8" height="35" fill="#06b6d4" className="bar-4" rx="2"/>
            <rect x="56" y="55" width="8" height="25" fill="#3b82f6" className="bar-5" rx="2"/>
            <rect x="68" y="50" width="8" height="30" fill="#06b6d4" className="bar-6" rx="2"/>
            <rect x="80" y="60" width="8" height="20" fill="#f97316" className="bar-1" rx="2"/>
            <rect x="92" y="55" width="8" height="25" fill="#3b82f6" className="bar-2" rx="2"/>
          </svg>
        );

      case 'horizontal-line':
        return (
          <svg 
            width={dimensions.width} 
            height={dimensions.height}
            viewBox="0 0 120 120"
            className="drop-shadow-lg"
          >
            <defs>
              <style>{`
                @keyframes wave-line {
                  0% { d: path('M 5 60 Q 20 50, 35 60 T 65 60 T 95 60 T 120 60'); }
                  25% { d: path('M 5 60 Q 20 45, 35 60 T 65 60 T 95 60 T 120 60'); }
                  50% { d: path('M 5 60 Q 20 50, 35 60 T 65 60 T 95 60 T 120 60'); }
                  75% { d: path('M 5 60 Q 20 70, 35 60 T 65 60 T 95 60 T 120 60'); }
                  100% { d: path('M 5 60 Q 20 50, 35 60 T 65 60 T 95 60 T 120 60'); }
                }
                .wave { animation: wave-line 2.5s ease-in-out infinite; }
              `}</style>
            </defs>
            <path 
              className="wave"
              d="M 5 60 Q 20 50, 35 60 T 65 60 T 95 60 T 120 60" 
              stroke="#3b82f6" 
              strokeWidth="3" 
              fill="none" 
              strokeLinecap="round"
            />
            <circle cx="60" cy="60" r="4" fill="#f97316" />
          </svg>
        );

      case 'network-nodes':
        return (
          <svg 
            width={dimensions.width} 
            height={dimensions.height}
            viewBox="0 0 120 120"
            className="drop-shadow-lg"
          >
            <defs>
              <style>{`
                @keyframes node-pulse { 0%, 100% { r: 6; opacity: 1; } 50% { r: 9; opacity: 0.6; } }
                .node { animation: node-pulse 2s ease-in-out infinite; }
              `}</style>
            </defs>
            {/* Center node */}
            <circle cx="60" cy="60" r="8" fill="#f97316" />
            {/* Surrounding nodes */}
            <circle cx="60" cy="25" r="6" className="node" fill="#3b82f6" style={{animationDelay: '0s'}}/>
            <circle cx="85" cy="35" r="6" className="node" fill="#06b6d4" style={{animationDelay: '0.2s'}}/>
            <circle cx="95" cy="60" r="6" className="node" fill="#3b82f6" style={{animationDelay: '0.4s'}}/>
            <circle cx="85" cy="85" r="6" className="node" fill="#06b6d4" style={{animationDelay: '0.1s'}}/>
            <circle cx="60" cy="95" r="6" className="node" fill="#3b82f6" style={{animationDelay: '0.3s'}}/>
            <circle cx="35" cy="85" r="6" className="node" fill="#06b6d4" style={{animationDelay: '0.5s'}}/>
            <circle cx="25" cy="60" r="6" className="node" fill="#3b82f6" style={{animationDelay: '0.2s'}}/>
            <circle cx="35" cy="35" r="6" className="node" fill="#06b6d4" style={{animationDelay: '0.4s'}}/>
            {/* Connection lines */}
            <line x1="60" y1="60" x2="60" y2="25" stroke="#3b82f6" strokeWidth="1" opacity="0.4"/>
            <line x1="60" y1="60" x2="85" y2="35" stroke="#06b6d4" strokeWidth="1" opacity="0.4"/>
            <line x1="60" y1="60" x2="95" y2="60" stroke="#3b82f6" strokeWidth="1" opacity="0.4"/>
            <line x1="60" y1="60" x2="85" y2="85" stroke="#06b6d4" strokeWidth="1" opacity="0.4"/>
            <line x1="60" y1="60" x2="60" y2="95" stroke="#3b82f6" strokeWidth="1" opacity="0.4"/>
            <line x1="60" y1="60" x2="35" y2="85" stroke="#06b6d4" strokeWidth="1" opacity="0.4"/>
            <line x1="60" y1="60" x2="25" y2="60" stroke="#3b82f6" strokeWidth="1" opacity="0.4"/>
            <line x1="60" y1="60" x2="35" y2="35" stroke="#06b6d4" strokeWidth="1" opacity="0.4"/>
          </svg>
        );

      case 'equalizer':
        return (
          <svg 
            width={dimensions.width} 
            height={dimensions.height}
            viewBox="0 0 120 120"
            className="drop-shadow-lg"
          >
            <defs>
              <style>{`
                @keyframes eq-1 { 0%, 100% { height: 25px; y: 55px; } 50% { height: 50px; y: 40px; } }
                @keyframes eq-2 { 0%, 100% { height: 35px; y: 50px; } 50% { height: 60px; y: 35px; } }
                @keyframes eq-3 { 0%, 100% { height: 45px; y: 45px; } 50% { height: 70px; y: 30px; } }
                @keyframes eq-4 { 0%, 100% { height: 40px; y: 47px; } 50% { height: 65px; y: 32px; } }
                @keyframes eq-5 { 0%, 100% { height: 30px; y: 52px; } 50% { height: 55px; y: 37px; } }
                @keyframes eq-6 { 0%, 100% { height: 25px; y: 55px; } 50% { height: 50px; y: 40px; } }
                .eq-bar-1 { animation: eq-1 1.5s ease-in-out infinite; }
                .eq-bar-2 { animation: eq-2 1.5s ease-in-out infinite 0.1s; }
                .eq-bar-3 { animation: eq-3 1.5s ease-in-out infinite 0.2s; }
                .eq-bar-4 { animation: eq-4 1.5s ease-in-out infinite 0.15s; }
                .eq-bar-5 { animation: eq-5 1.5s ease-in-out infinite 0.25s; }
                .eq-bar-6 { animation: eq-6 1.5s ease-in-out infinite 0.1s; }
              `}</style>
            </defs>
            <rect x="10" className="eq-bar-1" width="9" fill="#3b82f6" rx="2"/>
            <rect x="22" className="eq-bar-2" width="9" fill="#06b6d4" rx="2"/>
            <rect x="34" className="eq-bar-3" width="9" fill="#f97316" rx="2"/>
            <rect x="46" className="eq-bar-4" width="9" fill="#06b6d4" rx="2"/>
            <rect x="58" className="eq-bar-5" width="9" fill="#3b82f6" rx="2"/>
            <rect x="70" className="eq-bar-6" width="9" fill="#06b6d4" rx="2"/>
            <rect x="82" className="eq-bar-1" width="9" fill="#f97316" rx="2"/>
          </svg>
        );

      case 'frequency-spectrum':
        return (
          <svg 
            width={dimensions.width} 
            height={dimensions.height}
            viewBox="0 0 120 120"
            className="drop-shadow-lg"
          >
            <defs>
              <linearGradient id="specGradient" x1="0%" y1="50%" x2="100%" y2="50%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="50%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#f97316" />
              </linearGradient>
              <style>{`
                @keyframes curve-wave {
                  0% { d: path('M 10 60 Q 30 50, 50 60 Q 70 70, 90 60 Q 110 50, 120 55'); }
                  50% { d: path('M 10 60 Q 30 45, 50 60 Q 70 75, 90 60 Q 110 45, 120 55'); }
                  100% { d: path('M 10 60 Q 30 50, 50 60 Q 70 70, 90 60 Q 110 50, 120 55'); }
                }
                .spectrum { animation: curve-wave 2.8s ease-in-out infinite; }
              `}</style>
            </defs>
            <path 
              className="spectrum"
              d="M 10 60 Q 30 50, 50 60 Q 70 70, 90 60 Q 110 50, 120 55" 
              stroke="url(#specGradient)" 
              strokeWidth="3" 
              fill="none" 
              strokeLinecap="round"
            />
            <circle cx="50" cy="60" r="3" fill="#f97316" opacity="0.6"/>
            <circle cx="70" cy="65" r="3" fill="#3b82f6" opacity="0.6"/>
          </svg>
        );

      default:
        return null;
    }
  };

  return (
    <div className={`flex flex-col items-center gap-2 transition-opacity duration-200 ${isTransitioning ? 'opacity-50' : 'opacity-100'}`}>
      {renderVariant()}
      {showText && (
        <div className="text-center">
          <h1 className="text-sm md:text-base font-bold text-primary whitespace-nowrap">
            PeakSNR
          </h1>
          <p className="text-xs text-muted-foreground whitespace-nowrap">Signal Solutions</p>
        </div>
      )}
    </div>
  );
}
