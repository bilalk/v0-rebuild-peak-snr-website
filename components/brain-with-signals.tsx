'use client';

export function BrainWithSignals() {
  return (
    <div className="flex justify-center items-center">
      <svg
        className="w-full max-w-md h-auto"
        viewBox="0 0 400 400"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          {/* Gradients */}
          <radialGradient id="brainGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#1e40af" />
          </radialGradient>

          <linearGradient id="signalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="50%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#f97316" />
          </linearGradient>

          {/* Animations */}
          <style>{`
            @keyframes rotate-brain {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }

            @keyframes node-glow {
              0%, 100% { r: 18; opacity: 0.7; }
              50% { r: 22; opacity: 1; }
            }

            @keyframes signal-pulse {
              0%, 100% { opacity: 0.4; strokeWidth: 2; }
              50% { opacity: 0.8; strokeWidth: 2.5; }
            }

            .brain-container {
              animation: rotate-brain 30s linear infinite;
              transform-origin: center;
            }

            .node-circle {
              animation: node-glow 2.5s ease-in-out infinite;
            }

            .signal-line {
              animation: signal-pulse 1.5s ease-in-out infinite;
              filter: drop-shadow(0 0 4px rgba(59, 130, 246, 0.6));
            }

            .brain-icon {
              font-size: 32px;
              font-weight: bold;
              display: flex;
              align-items: center;
              justify-content: center;
            }
          `}</style>
        </defs>

        {/* Background network (subtle) */}
        <circle cx="200" cy="200" r="180" fill="none" stroke="#1e293b" strokeWidth="1" opacity="0.2" />
        <circle cx="200" cy="200" r="140" fill="none" stroke="#1e293b" strokeWidth="1" opacity="0.15" />
        <circle cx="200" cy="200" r="100" fill="none" stroke="#1e293b" strokeWidth="1" opacity="0.1" />

        {/* Rotating signal lines and nodes */}
        <g className="brain-container">
          {/* Signal line positions (8 nodes in circle) */}
          {/* Node 1: Top (YouTube - red) */}
          <line x1="200" y1="200" x2="200" y2="80" stroke="url(#signalGradient)" strokeWidth="2.5" opacity="0.6" className="signal-line" />
          <circle cx="200" cy="60" r="18" fill="none" stroke="#f97316" strokeWidth="2.5" className="node-circle" />
          <text x="200" y="67" textAnchor="middle" fill="#f97316" fontSize="20" fontWeight="bold">▶</text>

          {/* Node 2: Top Right (Google) */}
          <line x1="200" y1="200" x2="293" y2="107" stroke="url(#signalGradient)" strokeWidth="2.5" opacity="0.6" className="signal-line" style={{animationDelay: '0.2s'}} />
          <circle cx="310" cy="90" r="18" fill="none" stroke="#3b82f6" strokeWidth="2.5" className="node-circle" style={{animationDelay: '0.3s'}} />
          <text x="310" y="97" textAnchor="middle" fill="#3b82f6" fontSize="18" fontWeight="bold">G</text>

          {/* Node 3: Right (Wikipedia) */}
          <line x1="200" y1="200" x2="320" y2="200" stroke="url(#signalGradient)" strokeWidth="2.5" opacity="0.6" className="signal-line" style={{animationDelay: '0.4s'}} />
          <circle cx="340" cy="200" r="18" fill="none" stroke="#06b6d4" strokeWidth="2.5" className="node-circle" style={{animationDelay: '0.6s'}} />
          <text x="340" y="207" textAnchor="middle" fill="#06b6d4" fontSize="16" fontWeight="bold">W</text>

          {/* Node 4: Bottom Right (Netflix) */}
          <line x1="200" y1="200" x2="293" y2="293" stroke="url(#signalGradient)" strokeWidth="2.5" opacity="0.6" className="signal-line" style={{animationDelay: '0.1s'}} />
          <circle cx="310" cy="310" r="18" fill="none" stroke="#f97316" strokeWidth="2.5" className="node-circle" style={{animationDelay: '0.5s'}} />
          <text x="310" y="317" textAnchor="middle" fill="#f97316" fontSize="18" fontWeight="bold">N</text>

          {/* Node 5: Bottom (Amazon) */}
          <line x1="200" y1="200" x2="200" y2="320" stroke="url(#signalGradient)" strokeWidth="2.5" opacity="0.6" className="signal-line" style={{animationDelay: '0.3s'}} />
          <circle cx="200" cy="340" r="18" fill="none" stroke="#3b82f6" strokeWidth="2.5" className="node-circle" style={{animationDelay: '0.2s'}} />
          <text x="200" y="347" textAnchor="middle" fill="#3b82f6" fontSize="18" fontWeight="bold">A</text>

          {/* Node 6: Bottom Left (Spotify) */}
          <line x1="200" y1="200" x2="107" y2="293" stroke="url(#signalGradient)" strokeWidth="2.5" opacity="0.6" className="signal-line" style={{animationDelay: '0.5s'}} />
          <circle cx="90" cy="310" r="18" fill="none" stroke="#06b6d4" strokeWidth="2.5" className="node-circle" style={{animationDelay: '0.4s'}} />
          <text x="90" y="317" textAnchor="middle" fill="#06b6d4" fontSize="18" fontWeight="bold">♪</text>

          {/* Node 7: Left (Reddit) */}
          <line x1="200" y1="200" x2="80" y2="200" stroke="url(#signalGradient)" strokeWidth="2.5" opacity="0.6" className="signal-line" style={{animationDelay: '0.2s'}} />
          <circle cx="60" cy="200" r="18" fill="none" stroke="#f97316" strokeWidth="2.5" className="node-circle" style={{animationDelay: '0.1s'}} />
          <text x="60" y="207" textAnchor="middle" fill="#f97316" fontSize="16" fontWeight="bold">R</text>

          {/* Node 8: Top Left (BBC) */}
          <line x1="200" y1="200" x2="107" y2="107" stroke="url(#signalGradient)" strokeWidth="2.5" opacity="0.6" className="signal-line" style={{animationDelay: '0.4s'}} />
          <circle cx="90" cy="90" r="18" fill="none" stroke="#3b82f6" strokeWidth="2.5" className="node-circle" style={{animationDelay: '0.6s'}} />
          <text x="90" y="97" textAnchor="middle" fill="#3b82f6" fontSize="16" fontWeight="bold">◉</text>
        </g>

        {/* Central brain */}
        <circle cx="200" cy="200" r="45" fill="url(#brainGradient)" stroke="#f97316" strokeWidth="2.5" opacity="0.9" />
        
        {/* Brain icon (using simple shape) */}
        <g transform="translate(200, 200)">
          {/* Brain outline */}
          <path
            d="M -15 -8 Q -20 -15 -18 -22 Q -10 -25 -5 -20 Q 0 -23 5 -20 Q 10 -25 18 -22 Q 20 -15 15 -8 Q 12 -5 10 -8 Q 5 -10 0 -10 Q -5 -10 -10 -8 Q -12 -5 -15 -8"
            fill="none"
            stroke="#ffffff"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Brain center circle */}
          <circle cx="0" cy="5" r="4" fill="#ffffff" opacity="0.8" />
          {/* Highlight */}
          <circle cx="0" cy="0" r="12" fill="none" stroke="#ffffff" strokeWidth="1" opacity="0.3" />
        </g>
      </svg>
    </div>
  );
}
