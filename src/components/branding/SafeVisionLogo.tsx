import React from 'react';

const SafeVisionLogo: React.FC<{ className?: string }>= ({ className }) => (
  <svg viewBox="0 0 260 120" className={className ?? "h-12 w-auto"}>
    <defs>
      <style>
        {`
          .logo-text {
            font-family: inherit;
            font-weight: 800;
            font-size: 38px;
            letter-spacing: 2px;
            fill: white;
          }
        `}
      </style>
    </defs>
    {/* SAFE */}
    <text x="25" y="45" className="logo-text">SAFE</text>
    {/* VISI */}
    <text x="25" y="85" className="logo-text">VISI</text>
    {/* O em forma de câmera */}
    <g transform="translate(145, 70)">
      <circle cx="0" cy="0" r="16" fill="white"/>
      <circle cx="0" cy="0" r="13" fill="#000000"/>
      <circle cx="0" cy="0" r="11" fill="white"/>
      <circle cx="0" cy="0" r="7" fill="#2563eb"/>
      <circle cx="0" cy="0" r="3" fill="#000000"/>
      <ellipse cx="-2" cy="-2" rx="1.5" ry="2" fill="white" opacity="0.8"/>
      <g stroke="#000000" strokeWidth="0.8" opacity="0.6">
        <line x1="-9" y1="-9" x2="9" y2="9"/>
        <line x1="9" y1="-9" x2="-9" y2="9"/>
        <line x1="0" y1="-12" x2="0" y2="12"/>
        <line x1="-12" y1="0" x2="12" y2="0"/>
      </g>
    </g>
    {/* N */}
    <text x="170" y="85" className="logo-text">N</text>
  </svg>
);

export default SafeVisionLogo;


