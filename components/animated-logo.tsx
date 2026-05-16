'use client';

interface AnimatedLogoProps {
  variant?: 'vertical-pulse' | 'horizontal-line' | 'network-nodes' | 'equalizer' | 'frequency';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
}

export function AnimatedLogo({ 
  variant = 'vertical-pulse', 
  size = 'md',
  showText = true 
}: AnimatedLogoProps) {
  const sizeMap = {
    sm: { svg: 80, bars: 4, textSize: 'text-sm' },
    md: { svg: 120, bars: 6, textSize: 'text-lg' },
    lg: { svg: 160, bars: 8, textSize: 'text-2xl' },
    xl: { svg: 200, bars: 10, textSize: 'text-4xl' }
  };

  const config = sizeMap[size];

  return (
    <div className="flex flex-col items-center gap-2">
      {variant === 'vertical-pulse' && (
        <svg 
          width={config.svg} 
          height={config.svg} 
          viewBox="0 0 120 120" 
          className="drop-shadow-lg"
        >
          {/* Waveform bars */}
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <rect
              key={i}
              x={15 + i * 16}
              y={40}
              width="12"
              height="40"
              fill="#f8fafc"
              className="animate-waveform-pulse"
              style={{ 
                animationDelay: `${i * 0.15}s`,
                animationDuration: '2s'
              }}
            />
          ))}
          {/* Center accent */}
          <circle cx="60" cy="60" r="4" fill="#f97316" />
        </svg>
      )}

      {variant === 'horizontal-line' && (
        <svg 
          width={config.svg} 
          height={config.svg} 
          viewBox="0 0 120 120"
          className="drop-shadow-lg"
        >
          {/* Animated waveform line */}
          <g>
            <defs>
              <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#1e40af" />
                <stop offset="50%" stopColor="#f97316" />
                <stop offset="100%" stopColor="#1e40af" />
              </linearGradient>
            </defs>
            <path
              d="M 10,60 Q 20,45 30,60 T 50,60 T 70,60 T 90,60 T 110,60"
              stroke="url(#waveGradient)"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          {/* Accent dots */}
          <circle cx="30" cy="60" r="3" fill="#f97316" />
          <circle cx="90" cy="60" r="3" fill="#f97316" />
        </svg>
      )}

      {variant === 'network-nodes' && (
        <svg 
          width={config.svg} 
          height={config.svg} 
          viewBox="0 0 120 120"
          className="drop-shadow-lg"
        >
          {/* Center node */}
          <circle cx="60" cy="60" r="8" fill="#f97316" />
          
          {/* Surrounding nodes */}
          {[0, 1, 2, 3].map((i) => {
            const angle = (i * Math.PI) / 2;
            const x = 60 + 25 * Math.cos(angle);
            const y = 60 + 25 * Math.sin(angle);
            return (
              <g key={i}>
                <line x1="60" y1="60" x2={x} y2={y} stroke="#1e40af" strokeWidth="2" />
                <circle
                  cx={x}
                  cy={y}
                  r="6"
                  fill="#1e40af"
                  className="animate-node-pulse"
                  style={{ animationDelay: `${i * 0.25}s` }}
                />
              </g>
            );
          })}
        </svg>
      )}

      {variant === 'equalizer' && (
        <svg 
          width={config.svg} 
          height={config.svg} 
          viewBox="0 0 120 120"
          className="drop-shadow-lg"
        >
          {/* Equalizer bars */}
          {[25, 35, 45, 55, 65, 75, 85, 95].map((x, i) => {
            const heights = [30, 50, 65, 75, 65, 50, 30, 40];
            return (
              <rect
                key={i}
                x={x - 4}
                y={60 - heights[i] / 2}
                width="8"
                height={heights[i]}
                fill="#1e40af"
                className="animate-waveform-pulse"
                style={{ 
                  animationDelay: `${i * 0.1}s`,
                  animationDuration: '2.5s'
                }}
              />
            );
          })}
        </svg>
      )}

      {variant === 'frequency' && (
        <svg 
          width={config.svg} 
          height={config.svg} 
          viewBox="0 0 120 120"
          className="drop-shadow-lg"
        >
          {/* Frequency curve */}
          <defs>
            <linearGradient id="freqGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e40af" />
              <stop offset="100%" stopColor="#f97316" />
            </linearGradient>
          </defs>
          <path
            d="M 10,60 Q 20,40 30,55 T 50,45 T 70,55 T 90,50 T 110,60"
            stroke="url(#freqGradient)"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.8"
          />
          <path
            d="M 10,65 Q 20,45 30,60 T 50,50 T 70,60 T 90,55 T 110,65"
            stroke="url(#freqGradient)"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.5"
          />
        </svg>
      )}

      {showText && (
        <div className="text-center">
          <h1 className={`font-bold text-primary ${config.textSize}`}>
            PEAK SNR
          </h1>
          <p className="text-xs text-muted-foreground">Signal Processing Solutions</p>
        </div>
      )}
    </div>
  );
}
