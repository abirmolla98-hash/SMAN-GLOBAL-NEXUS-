import type { VisualId } from '../data/content.ts';

export function ProjectVisual({ id, title }: { id: VisualId; title: string }) {
  return (
    <svg className="visual" viewBox="0 0 640 400" preserveAspectRatio="xMidYMid slice" role="img" aria-label={`${title} visual placeholder`}>
      <rect width="640" height="400" fill="#171614" />
      {id === 'mira' && <Mira />}
      {id === 'smartchar' && <SmartChar />}
      {id === 'giii' && <Giii />}
      {id === 'pos' && <Pos />}
      {id === 'analytics' && <Analytics />}
    </svg>
  );
}

function Mira() {
  return (
    <g fill="none" strokeWidth="1.4">
      <circle cx="320" cy="200" r="46" stroke="#3de4f5" />
      <circle cx="320" cy="200" r="8" fill="#3de4f5" stroke="none" />
      <circle cx="150" cy="120" r="18" stroke="#6b5b86" />
      <circle cx="470" cy="110" r="14" stroke="#f4f0e8" />
      <circle cx="500" cy="270" r="22" stroke="#3de4f5" />
      <circle cx="170" cy="280" r="12" stroke="#f4f0e8" />
      <path d="M168 128 L300 180 M456 120 L350 176 M480 252 L360 220 M182 270 L286 220" stroke="#6b5b86" />
    </g>
  );
}

function SmartChar() {
  return (
    <g fill="none" strokeWidth="1.4">
      <path d="M40 280 C140 240, 180 300, 280 250 S460 180, 600 220" stroke="#3de4f5" />
      <path d="M40 310 C160 270, 220 330, 340 280 S500 230, 610 260" stroke="#6b5b86" />
      <path d="M80 90 V250 M160 130 V270 M240 80 V250 M320 150 V290 M400 100 V250 M480 140 V280" stroke="rgba(244,240,232,0.35)" />
      <rect x="236" y="168" width="48" height="32" stroke="#f4f0e8" />
    </g>
  );
}

function Giii() {
  return (
    <g fill="none" stroke="#f4f0e8" strokeWidth="1.4">
      <rect x="70" y="70" width="280" height="250" />
      <path d="M100 130 H300 M100 170 H260 M100 210 H280 M100 250 H220" stroke="#6b5b86" />
      <path d="M390 150 H560 V250 H430 L390 290 Z" stroke="#3de4f5" />
      <path d="M420 190 H530 M420 220 H500" stroke="#3de4f5" />
    </g>
  );
}

function Pos() {
  return (
    <g fill="none" strokeWidth="1.4">
      <rect x="60" y="60" width="250" height="280" stroke="#f4f0e8" />
      <path d="M90 110 H280 M90 150 H240 M90 190 H270 M90 230 H200" stroke="#6b5b86" />
      <rect x="360" y="80" width="70" height="90" stroke="#3de4f5" />
      <rect x="450" y="80" width="70" height="90" stroke="#3de4f5" />
      <rect x="360" y="200" width="70" height="90" stroke="#f4f0e8" />
      <rect x="450" y="200" width="70" height="90" stroke="#f4f0e8" />
    </g>
  );
}

function Analytics() {
  return (
    <g fill="none" strokeWidth="1.4">
      <path d="M50 320 H590" stroke="rgba(244,240,232,0.4)" />
      <rect x="90" y="200" width="46" height="120" stroke="#6b5b86" />
      <rect x="170" y="150" width="46" height="170" stroke="#3de4f5" />
      <rect x="250" y="180" width="46" height="140" stroke="#f4f0e8" />
      <rect x="330" y="110" width="46" height="210" stroke="#3de4f5" />
      <rect x="410" y="160" width="46" height="160" stroke="#6b5b86" />
      <rect x="490" y="90" width="46" height="230" stroke="#f4f0e8" />
    </g>
  );
}
