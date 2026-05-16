'use client';

import { Youtube, Zap, Radio, Globe, Smartphone } from 'lucide-react';

export function BrainWithLogos() {
  return (
    <div className="flex justify-center items-center w-full py-12">
      <svg 
        viewBox="0 0 500 500" 
        className="w-full max-w-md"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <radialGradient id="brainGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#1e40af" />
          </radialGradient>
          <style>{`
            @keyframes rotate-slow {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
            @keyframes pulse-node {
              0%, 100% { r: 28; opacity: 0.8; }
              50% { r: 35; opacity: 0.4; }
            }
            @keyframes flow-signal {
              0% { stroke-dashoffset: 200; }
              100% { stroke-dashoffset: 0; }
            }
            .brain-circle { animation: rotate-slow 30s linear infinite; }
            .node-circle { animation: pulse-node 2.5s ease-in-out infinite; }
            .signal-line { animation: flow-signal 3s ease-in-out infinite; }
          `}</style>
        </defs>

        {/* Central rotating group */}
        <g className="brain-circle" style={{ transformOrigin: '250px 250px' }}>
          {/* Brain background circle */}
          <circle cx="250" cy="250" r="70" fill="url(#brainGradient)" opacity="0.9" />
          
          {/* Brain icon (simplified SVG brain) */}
          <g>
            {/* Left hemisphere */}
            <path d="M 235 215 Q 225 225 225 245 Q 225 265 235 275 L 235 215" fill="#f8fafc" opacity="0.9" />
            {/* Right hemisphere */}
            <path d="M 265 215 Q 275 225 275 245 Q 275 265 265 275 L 265 215" fill="#f8fafc" opacity="0.9" />
            {/* Center connection */}
            <circle cx="250" cy="245" r="8" fill="#f8fafc" opacity="0.9" />
            {/* Brain texture lines */}
            <line x1="240" y1="230" x2="245" y2="235" stroke="#f8fafc" strokeWidth="1" opacity="0.7" />
            <line x1="260" y1="230" x2="255" y2="235" stroke="#f8fafc" strokeWidth="1" opacity="0.7" />
            <line x1="240" y1="260" x2="245" y2="265" stroke="#f8fafc" strokeWidth="1" opacity="0.7" />
            <line x1="260" y1="260" x2="255" y2="265" stroke="#f8fafc" strokeWidth="1" opacity="0.7" />
          </g>
        </g>

        {/* Static node positions with rotating animation */}
        <g className="brain-circle" style={{ transformOrigin: '250px 250px' }}>
          {/* Top - YouTube */}
          <circle cx="250" cy="120" r="28" className="node-circle" fill="none" stroke="#f97316" strokeWidth="3" />
          <text x="250" y="128" textAnchor="middle" fill="#f97316" fontSize="32" fontWeight="bold">▶</text>
          
          {/* Top-right - Wikipedia */}
          <circle cx="363" cy="155" r="28" className="node-circle" fill="none" stroke="#06b6d4" strokeWidth="3" />
          <text x="363" y="163" textAnchor="middle" fill="#06b6d4" fontSize="28" fontWeight="bold">W</text>
          
          {/* Right - Google */}
          <circle cx="400" cy="250" r="28" className="node-circle" fill="none" stroke="#f97316" strokeWidth="3" />
          <text x="400" y="260" textAnchor="middle" fill="#f97316" fontSize="26" fontWeight="bold">G</text>
          
          {/* Bottom-right - Netflix */}
          <circle cx="363" cy="345" r="28" className="node-circle" fill="none" stroke="#3b82f6" strokeWidth="3" />
          <text x="363" y="357" textAnchor="middle" fill="#3b82f6" fontSize="28" fontWeight="bold">N</text>
          
          {/* Bottom - LinkedIn */}
          <circle cx="250" cy="380" r="28" className="node-circle" fill="none" stroke="#06b6d4" strokeWidth="3" />
          <text x="250" y="390" textAnchor="middle" fill="#06b6d4" fontSize="26" fontWeight="bold">in</text>
          
          {/* Bottom-left - Reddit */}
          <circle cx="137" cy="345" r="28" className="node-circle" fill="none" stroke="#f97316" strokeWidth="3" />
          <text x="137" y="357" textAnchor="middle" fill="#f97316" fontSize="28" fontWeight="bold">R</text>
          
          {/* Left - BBC */}
          <circle cx="100" cy="250" r="28" className="node-circle" fill="none" stroke="#3b82f6" strokeWidth="3" />
          <text x="100" y="262" textAnchor="middle" fill="#3b82f6" fontSize="22" fontWeight="bold">BBC</text>
          
          {/* Top-left - Spotify */}
          <circle cx="137" cy="155" r="28" className="node-circle" fill="none" stroke="#06b6d4" strokeWidth="3" />
          <text x="137" y="163" textAnchor="middle" fill="#06b6d4" fontSize="22" fontWeight="bold">♫</text>
        </g>

        {/* Animated signal lines connecting to brain */}
        <g strokeLinecap="round" strokeLinejoin="round" fill="none">
          <line x1="250" y1="320" x2="250" y2="380" stroke="#f97316" strokeWidth="2" strokeDasharray="10,5" className="signal-line" />
          <line x1="250" y1="320" x2="363" y2="345" stroke="#06b6d4" strokeWidth="2" strokeDasharray="10,5" className="signal-line" style={{animationDelay: '0.2s'}} />
          <line x1="250" y1="320" x2="400" y2="250" stroke="#3b82f6" strokeWidth="2" strokeDasharray="10,5" className="signal-line" style={{animationDelay: '0.4s'}} />
          <line x1="250" y1="320" x2="363" y2="155" stroke="#f97316" strokeWidth="2" strokeDasharray="10,5" className="signal-line" style={{animationDelay: '0.1s'}} />
          
          <line x1="250" y1="180" x2="250" y2="120" stroke="#06b6d4" strokeWidth="2" strokeDasharray="10,5" className="signal-line" style={{animationDelay: '0.3s'}} />
          <line x1="250" y1="180" x2="137" y2="155" stroke="#f97316" strokeWidth="2" strokeDasharray="10,5" className="signal-line" style={{animationDelay: '0.5s'}} />
          <line x1="250" y1="180" x2="100" y2="250" stroke="#3b82f6" strokeWidth="2" strokeDasharray="10,5" className="signal-line" style={{animationDelay: '0.2s'}} />
          <line x1="250" y1="320" x2="137" y2="345" stroke="#06b6d4" strokeWidth="2" strokeDasharray="10,5" className="signal-line" style={{animationDelay: '0.4s'}} />
        </g>

        {/* Connection lines between nodes (dashed, subtle) */}
        <g stroke="#3b82f6" strokeWidth="1" opacity="0.2" strokeDasharray="5,5" fill="none">
          <line x1="250" y1="120" x2="363" y2="155" />
          <line x1="363" y1="155" x2="400" y2="250" />
          <line x1="400" y1="250" x2="363" y2="345" />
          <line x1="363" y1="345" x2="250" y2="380" />
          <line x1="250" y1="380" x2="137" y2="345" />
          <line x1="137" y1="345" x2="100" y2="250" />
          <line x1="100" y1="250" x2="137" y2="155" />
          <line x1="137" y1="155" x2="250" y2="120" />
        </g>
      </svg>
    </div>
  );
}
