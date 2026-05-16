'use client';

export function BrainWithLogos() {
  return (
    <div className="flex justify-center items-center w-full py-12">
      <svg
        viewBox="0 0 500 500"
        className="w-full max-w-md"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <radialGradient id="bwlGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#1e40af" />
          </radialGradient>
          <style>{`
            @keyframes bwlRotate {
              from { transform: rotate(0deg); }
              to   { transform: rotate(360deg); }
            }
            @keyframes bwlRotateRev {
              from { transform: rotate(0deg); }
              to   { transform: rotate(-360deg); }
            }
            @keyframes bwlPulse {
              0%, 100% { opacity: 0.85; }
              50%       { opacity: 0.4; }
            }
            @keyframes bwlFlow {
              0%   { stroke-dashoffset: 200; }
              100% { stroke-dashoffset: 0; }
            }
            .bwl-orbit  { animation: bwlRotate 30s linear infinite; }
            .bwl-icon   {
              animation: bwlRotateRev 30s linear infinite;
              transform-box: fill-box;
              transform-origin: center;
            }
            .bwl-node   { animation: bwlPulse 2.5s ease-in-out infinite; }
            .bwl-signal { animation: bwlFlow 3s ease-in-out infinite; }
          `}</style>
        </defs>

        {/* ── Central brain (rotates) ── */}
        <g className="bwl-orbit" style={{ transformOrigin: '250px 250px' }}>
          <circle cx="250" cy="250" r="70" fill="url(#bwlGrad)" opacity="0.9" />
          <path d="M235 215 Q225 225 225 245 Q225 265 235 275 L235 215" fill="#f8fafc" opacity="0.9" />
          <path d="M265 215 Q275 225 275 245 Q275 265 265 275 L265 215" fill="#f8fafc" opacity="0.9" />
          <circle cx="250" cy="245" r="8" fill="#f8fafc" opacity="0.9" />
          <line x1="240" y1="230" x2="245" y2="235" stroke="#f8fafc" strokeWidth="1" opacity="0.7" />
          <line x1="260" y1="230" x2="255" y2="235" stroke="#f8fafc" strokeWidth="1" opacity="0.7" />
          <line x1="240" y1="260" x2="245" y2="265" stroke="#f8fafc" strokeWidth="1" opacity="0.7" />
          <line x1="260" y1="260" x2="255" y2="265" stroke="#f8fafc" strokeWidth="1" opacity="0.7" />
        </g>

        {/* ── Orbiting nodes + counter-rotating icons ── */}
        <g className="bwl-orbit" style={{ transformOrigin: '250px 250px' }}>

          {/* YouTube – Top (250, 120) */}
          <circle cx="250" cy="120" r="30" className="bwl-node" fill="#0f172a" stroke="#f97316" strokeWidth="3" />
          <g className="bwl-icon">
            <rect x="234" y="110" width="32" height="22" rx="5" fill="#FF0000" />
            <polygon points="245,114 245,128 261,121" fill="white" />
          </g>

          {/* Wikipedia – Top-right (363, 155) */}
          <circle cx="363" cy="155" r="30" className="bwl-node" fill="#0f172a" stroke="#06b6d4" strokeWidth="3" />
          <g className="bwl-icon">
            {/* Wikipedia globe lines */}
            <circle cx="363" cy="155" r="16" fill="none" stroke="#f8f8f8" strokeWidth="1.5" />
            <ellipse cx="363" cy="155" rx="8" ry="16" fill="none" stroke="#f8f8f8" strokeWidth="1.5" />
            <line x1="347" y1="155" x2="379" y2="155" stroke="#f8f8f8" strokeWidth="1.5" />
            <line x1="350" y1="146" x2="376" y2="146" stroke="#f8f8f8" strokeWidth="1" />
            <line x1="350" y1="164" x2="376" y2="164" stroke="#f8f8f8" strokeWidth="1" />
            <text x="363" y="160" textAnchor="middle" fill="#f8f8f8" fontSize="11" fontWeight="900" fontFamily="Georgia,serif">W</text>
          </g>

          {/* Google – Right (400, 250) */}
          <circle cx="400" cy="250" r="30" className="bwl-node" fill="white" stroke="#f97316" strokeWidth="3" />
          <g className="bwl-icon">
            {/* Google G using coloured arcs */}
            <path d="M416,250 L403,250 L403,256 L410,256 Q408,263 401,265 Q391,266 387,256 Q383,244 391,237 Q399,231 408,236 L412,231 Q400,223 389,229 Q377,236 378,250 Q378,266 391,270 Q406,274 415,263 Q420,254 414,242 L403,242 L403,250Z"
              fill="#4285F4" />
          </g>

          {/* Netflix – Bottom-right (363, 345) */}
          <circle cx="363" cy="345" r="30" className="bwl-node" fill="#141414" stroke="#3b82f6" strokeWidth="3" />
          <g className="bwl-icon">
            {/* Netflix N shape */}
            <rect x="350" y="331" width="6" height="30" fill="#E50914" />
            <rect x="370" y="331" width="6" height="30" fill="#E50914" />
            <polygon points="356,331 356,345 370,361 370,345" fill="#E50914" />
          </g>

          {/* LinkedIn – Bottom (250, 380) */}
          <circle cx="250" cy="380" r="30" className="bwl-node" fill="#0077B5" stroke="#06b6d4" strokeWidth="3" />
          <g className="bwl-icon">
            {/* LinkedIn icon: dot + two bars + curved bar */}
            <rect x="234" y="368" width="5" height="5" rx="1" fill="white" />
            <rect x="234" y="375" width="5" height="16" fill="white" />
            <rect x="242" y="368" width="5" height="23" fill="white" />
            <path d="M247 375 Q256 369 260 377 L260 391 L255 391 L255 379 Q252 374 247 377 Z" fill="white" />
          </g>

          {/* Reddit – Bottom-left (137, 345) */}
          <circle cx="137" cy="345" r="30" className="bwl-node" fill="#0f172a" stroke="#f97316" strokeWidth="3" />
          <g className="bwl-icon">
            {/* Reddit: orange head, eyes, smile, ears, antenna */}
            <circle cx="137" cy="347" r="14" fill="#FF4500" />
            <circle cx="130" cy="344" r="3.5" fill="white" />
            <circle cx="144" cy="344" r="3.5" fill="white" />
            <circle cx="130" cy="344" r="2"   fill="#0f172a" />
            <circle cx="144" cy="344" r="2"   fill="#0f172a" />
            <path d="M130 352 Q137 357 144 352" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />
            <circle cx="123" cy="338" r="4" fill="#FF4500" />
            <circle cx="151" cy="338" r="4" fill="#FF4500" />
            <path d="M137 333 L133 324" stroke="#FF4500" strokeWidth="2" strokeLinecap="round" fill="none" />
            <circle cx="133" cy="323" r="3" fill="#FF4500" />
          </g>

          {/* BBC – Left (100, 250) */}
          <circle cx="100" cy="250" r="30" className="bwl-node" fill="#0f172a" stroke="#3b82f6" strokeWidth="3" />
          <g className="bwl-icon">
            {/* BBC: three white boxes */}
            <rect x="75"  y="241" width="15" height="15" rx="2" fill="white" />
            <rect x="93"  y="241" width="15" height="15" rx="2" fill="white" />
            <rect x="111" y="241" width="15" height="15" rx="2" fill="white" />
            <text x="82.5"  y="253" textAnchor="middle" fill="#0f172a" fontSize="10" fontWeight="900" fontFamily="Arial,sans-serif">B</text>
            <text x="100.5" y="253" textAnchor="middle" fill="#0f172a" fontSize="10" fontWeight="900" fontFamily="Arial,sans-serif">B</text>
            <text x="118.5" y="253" textAnchor="middle" fill="#0f172a" fontSize="10" fontWeight="900" fontFamily="Arial,sans-serif">C</text>
          </g>

          {/* Spotify – Top-left (137, 155) */}
          <circle cx="137" cy="155" r="30" className="bwl-node" fill="#191414" stroke="#06b6d4" strokeWidth="3" />
          <g className="bwl-icon">
            <circle cx="137" cy="155" r="16" fill="#1DB954" />
            {/* Three arcs */}
            <path d="M124 148 Q137 142 150 148" stroke="#0f172a" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            <path d="M127 154 Q137 149 147 154" stroke="#0f172a" strokeWidth="2"   fill="none" strokeLinecap="round" />
            <path d="M130 160 Q137 156 144 160" stroke="#0f172a" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          </g>

        </g>

        {/* ── Animated signal lines (static, radiating from centre) ── */}
        <g strokeLinecap="round" strokeLinejoin="round" fill="none">
          <line x1="250" y1="320" x2="250" y2="380" stroke="#f97316" strokeWidth="2" strokeDasharray="10,5" className="bwl-signal" />
          <line x1="250" y1="320" x2="363" y2="345" stroke="#06b6d4" strokeWidth="2" strokeDasharray="10,5" className="bwl-signal" style={{animationDelay:'0.2s'}} />
          <line x1="250" y1="320" x2="400" y2="250" stroke="#3b82f6" strokeWidth="2" strokeDasharray="10,5" className="bwl-signal" style={{animationDelay:'0.4s'}} />
          <line x1="250" y1="320" x2="363" y2="155" stroke="#f97316" strokeWidth="2" strokeDasharray="10,5" className="bwl-signal" style={{animationDelay:'0.1s'}} />
          <line x1="250" y1="180" x2="250" y2="120" stroke="#06b6d4" strokeWidth="2" strokeDasharray="10,5" className="bwl-signal" style={{animationDelay:'0.3s'}} />
          <line x1="250" y1="180" x2="137" y2="155" stroke="#f97316" strokeWidth="2" strokeDasharray="10,5" className="bwl-signal" style={{animationDelay:'0.5s'}} />
          <line x1="250" y1="180" x2="100" y2="250" stroke="#3b82f6" strokeWidth="2" strokeDasharray="10,5" className="bwl-signal" style={{animationDelay:'0.2s'}} />
          <line x1="250" y1="320" x2="137" y2="345" stroke="#06b6d4" strokeWidth="2" strokeDasharray="10,5" className="bwl-signal" style={{animationDelay:'0.4s'}} />
        </g>

        {/* ── Orbit ring connecting nodes – NOW VISIBLE ── */}
        <g className="bwl-orbit" style={{ transformOrigin: '250px 250px' }}>
          <g stroke="#06b6d4" strokeWidth="2" opacity="0.55" strokeDasharray="8,5" fill="none">
            <line x1="250" y1="120" x2="363" y2="155" />
            <line x1="363" y1="155" x2="400" y2="250" />
            <line x1="400" y1="250" x2="363" y2="345" />
            <line x1="363" y1="345" x2="250" y2="380" />
            <line x1="250" y1="380" x2="137" y2="345" />
            <line x1="137" y1="345" x2="100" y2="250" />
            <line x1="100" y1="250" x2="137" y2="155" />
            <line x1="137" y1="155" x2="250" y2="120" />
          </g>
        </g>

      </svg>
    </div>
  );
}
