// Chiikawa characters as cute SVG illustrations

// Chiikawa - small white round creature, tiny ears, pink cheeks
export function Chiikawa() {
  return (
    <svg viewBox="0 0 100 100">
      {/* Ears */}
      <ellipse cx="30" cy="18" rx="10" ry="14" fill="#fef9ef" stroke="#c9b99a" strokeWidth="2" />
      <ellipse cx="70" cy="18" rx="10" ry="14" fill="#fef9ef" stroke="#c9b99a" strokeWidth="2" />
      <ellipse cx="30" cy="18" rx="5" ry="8" fill="#f9c4d2" />
      <ellipse cx="70" cy="18" rx="5" ry="8" fill="#f9c4d2" />
      {/* Body */}
      <ellipse cx="50" cy="55" rx="36" ry="38" fill="#fef9ef" stroke="#c9b99a" strokeWidth="2" />
      {/* Eyes */}
      <circle cx="38" cy="48" r="3" fill="#2d2d2d" />
      <circle cx="62" cy="48" r="3" fill="#2d2d2d" />
      <circle cx="39" cy="47" r="1" fill="#fff" />
      <circle cx="63" cy="47" r="1" fill="#fff" />
      {/* Cheeks */}
      <ellipse cx="28" cy="58" rx="8" ry="5" fill="#f9c4d2" opacity="0.6" />
      <ellipse cx="72" cy="58" rx="8" ry="5" fill="#f9c4d2" opacity="0.6" />
      {/* Mouth */}
      <path d="M 46 60 Q 50 66 54 60" fill="none" stroke="#2d2d2d" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

// Hachiware - white cat with black top half, split pattern
export function Hachiware() {
  return (
    <svg viewBox="0 0 100 100">
      {/* Ears */}
      <polygon points="22,28 30,2 42,26" fill="#4a5568" stroke="#2d3748" strokeWidth="1.5" />
      <polygon points="58,26 70,2 78,28" fill="#4a5568" stroke="#2d3748" strokeWidth="1.5" />
      <polygon points="27,26 30,10 38,26" fill="#f9c4d2" />
      <polygon points="62,26 70,10 73,26" fill="#f9c4d2" />
      {/* Body */}
      <ellipse cx="50" cy="58" rx="36" ry="36" fill="#fef9ef" stroke="#c9b99a" strokeWidth="2" />
      {/* Black top pattern - Hachiware's signature V split */}
      <path d="M 14,50 Q 16,30 30,20 Q 40,28 50,52 Q 60,28 70,20 Q 84,30 86,50 Q 80,38 50,38 Q 20,38 14,50 Z" fill="#4a5568" />
      {/* Eyes */}
      <circle cx="36" cy="54" r="3.5" fill="#2d2d2d" />
      <circle cx="64" cy="54" r="3.5" fill="#2d2d2d" />
      <circle cx="37" cy="53" r="1.2" fill="#fff" />
      <circle cx="65" cy="53" r="1.2" fill="#fff" />
      {/* Cheeks */}
      <ellipse cx="26" cy="62" rx="7" ry="5" fill="#f9c4d2" opacity="0.5" />
      <ellipse cx="74" cy="62" rx="7" ry="5" fill="#f9c4d2" opacity="0.5" />
      {/* Mouth */}
      <path d="M 44 65 Q 50 72 56 65" fill="none" stroke="#2d2d2d" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

// Usagi - rabbit with long ears, mischievous grin
export function Usagi() {
  return (
    <svg viewBox="0 0 100 100">
      {/* Long ears */}
      <ellipse cx="35" cy="12" rx="10" ry="22" fill="#fef3c7" stroke="#d4a853" strokeWidth="1.5" transform="rotate(-8, 35, 12)" />
      <ellipse cx="65" cy="12" rx="10" ry="22" fill="#fef3c7" stroke="#d4a853" strokeWidth="1.5" transform="rotate(8, 65, 12)" />
      <ellipse cx="35" cy="12" rx="5" ry="14" fill="#f9c4d2" transform="rotate(-8, 35, 12)" />
      <ellipse cx="65" cy="12" rx="5" ry="14" fill="#f9c4d2" transform="rotate(8, 65, 12)" />
      {/* Body */}
      <ellipse cx="50" cy="58" rx="34" ry="35" fill="#fef3c7" stroke="#d4a853" strokeWidth="2" />
      {/* Eyes - slightly wild/mischievous */}
      <ellipse cx="37" cy="50" rx="4" ry="5" fill="#2d2d2d" />
      <ellipse cx="63" cy="50" rx="4" ry="5" fill="#2d2d2d" />
      <circle cx="38.5" cy="48.5" r="1.5" fill="#fff" />
      <circle cx="64.5" cy="48.5" r="1.5" fill="#fff" />
      {/* Cheeks */}
      <ellipse cx="26" cy="60" rx="7" ry="5" fill="#f9a8b8" opacity="0.5" />
      <ellipse cx="74" cy="60" rx="7" ry="5" fill="#f9a8b8" opacity="0.5" />
      {/* Big grin */}
      <path d="M 38 63 Q 50 78 62 63" fill="#e88" stroke="#2d2d2d" strokeWidth="1.5" />
      <path d="M 38 63 Q 50 68 62 63" fill="#fef3c7" stroke="none" />
    </svg>
  )
}

// Momonga - flying squirrel, big round eyes, gray with membrane
export function Momonga() {
  return (
    <svg viewBox="0 0 100 100">
      {/* Ears */}
      <ellipse cx="28" cy="22" rx="10" ry="12" fill="#d1d5db" stroke="#9ca3af" strokeWidth="1.5" />
      <ellipse cx="72" cy="22" rx="10" ry="12" fill="#d1d5db" stroke="#9ca3af" strokeWidth="1.5" />
      <ellipse cx="28" cy="22" rx="5" ry="7" fill="#f9c4d2" />
      <ellipse cx="72" cy="22" rx="5" ry="7" fill="#f9c4d2" />
      {/* Membrane / cape flaps */}
      <path d="M 14,45 Q 8,60 16,80 Q 25,65 30,55 Z" fill="#e5e7eb" stroke="#9ca3af" strokeWidth="1" opacity="0.7" />
      <path d="M 86,45 Q 92,60 84,80 Q 75,65 70,55 Z" fill="#e5e7eb" stroke="#9ca3af" strokeWidth="1" opacity="0.7" />
      {/* Body */}
      <ellipse cx="50" cy="55" rx="33" ry="35" fill="#e5e7eb" stroke="#9ca3af" strokeWidth="2" />
      {/* Belly */}
      <ellipse cx="50" cy="62" rx="20" ry="20" fill="#f3f4f6" />
      {/* Big round eyes */}
      <circle cx="37" cy="48" r="7" fill="#2d2d2d" />
      <circle cx="63" cy="48" r="7" fill="#2d2d2d" />
      <circle cx="39" cy="46" r="2.5" fill="#fff" />
      <circle cx="65" cy="46" r="2.5" fill="#fff" />
      {/* Tiny nose */}
      <ellipse cx="50" cy="56" rx="2" ry="1.5" fill="#d4a0a0" />
      {/* Mouth */}
      <path d="M 46 60 Q 50 64 54 60" fill="none" stroke="#2d2d2d" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )
}

// Shisa - lion-dog with curly mane, golden
export function Shisa() {
  return (
    <svg viewBox="0 0 100 100">
      {/* Curly mane */}
      <circle cx="26" cy="28" r="10" fill="#fbbf24" />
      <circle cx="40" cy="18" r="10" fill="#fbbf24" />
      <circle cx="60" cy="18" r="10" fill="#fbbf24" />
      <circle cx="74" cy="28" r="10" fill="#fbbf24" />
      <circle cx="20" cy="42" r="9" fill="#fbbf24" />
      <circle cx="80" cy="42" r="9" fill="#fbbf24" />
      <circle cx="50" cy="14" r="9" fill="#f59e0b" />
      {/* Body */}
      <ellipse cx="50" cy="55" rx="34" ry="36" fill="#fde68a" stroke="#d4a020" strokeWidth="2" />
      {/* Eyes */}
      <circle cx="38" cy="48" r="4" fill="#2d2d2d" />
      <circle cx="62" cy="48" r="4" fill="#2d2d2d" />
      <circle cx="39.5" cy="46.5" r="1.5" fill="#fff" />
      <circle cx="63.5" cy="46.5" r="1.5" fill="#fff" />
      {/* Nose */}
      <ellipse cx="50" cy="56" rx="4" ry="3" fill="#d97706" />
      {/* Mouth */}
      <path d="M 42 62 Q 50 70 58 62" fill="none" stroke="#2d2d2d" strokeWidth="1.5" strokeLinecap="round" />
      {/* Cheeks */}
      <ellipse cx="28" cy="58" rx="7" ry="5" fill="#f9a8b8" opacity="0.5" />
      <ellipse cx="72" cy="58" rx="7" ry="5" fill="#f9a8b8" opacity="0.5" />
    </svg>
  )
}

// Kurimanju - chestnut bun, brown and round
export function Kurimanju() {
  return (
    <svg viewBox="0 0 100 100">
      {/* Chestnut top */}
      <path d="M 20,50 Q 20,10 50,8 Q 80,10 80,50 Z" fill="#92400e" stroke="#78350f" strokeWidth="2" />
      {/* Point on top */}
      <path d="M 47,10 Q 50,0 53,10" fill="#78350f" />
      {/* Body / bottom bun part */}
      <ellipse cx="50" cy="62" rx="34" ry="30" fill="#fde68a" stroke="#d4a020" strokeWidth="2" />
      {/* Overlap area */}
      <path d="M 16,52 Q 50,58 84,52 Q 84,56 50,60 Q 16,56 16,52 Z" fill="#92400e" />
      {/* Eyes */}
      <circle cx="38" cy="58" r="3" fill="#2d2d2d" />
      <circle cx="62" cy="58" r="3" fill="#2d2d2d" />
      <circle cx="39" cy="57" r="1" fill="#fff" />
      <circle cx="63" cy="57" r="1" fill="#fff" />
      {/* Cheeks */}
      <ellipse cx="28" cy="66" rx="7" ry="4" fill="#f9c4d2" opacity="0.5" />
      <ellipse cx="72" cy="66" rx="7" ry="4" fill="#f9c4d2" opacity="0.5" />
      {/* Mouth */}
      <path d="M 46 68 Q 50 73 54 68" fill="none" stroke="#2d2d2d" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

// Rakko - sea otter holding a clam shell
export function Rakko() {
  return (
    <svg viewBox="0 0 100 100">
      {/* Ears */}
      <circle cx="22" cy="28" r="8" fill="#a78bfa" stroke="#7c5cbf" strokeWidth="1.5" />
      <circle cx="78" cy="28" r="8" fill="#a78bfa" stroke="#7c5cbf" strokeWidth="1.5" />
      <circle cx="22" cy="28" r="4" fill="#c4b5fd" />
      <circle cx="78" cy="28" r="4" fill="#c4b5fd" />
      {/* Body */}
      <ellipse cx="50" cy="55" rx="34" ry="36" fill="#c4b5fd" stroke="#7c5cbf" strokeWidth="2" />
      {/* Belly */}
      <ellipse cx="50" cy="64" rx="22" ry="20" fill="#ede9fe" />
      {/* Eyes */}
      <circle cx="38" cy="46" r="3.5" fill="#2d2d2d" />
      <circle cx="62" cy="46" r="3.5" fill="#2d2d2d" />
      <circle cx="39" cy="45" r="1.2" fill="#fff" />
      <circle cx="63" cy="45" r="1.2" fill="#fff" />
      {/* Nose */}
      <ellipse cx="50" cy="54" rx="3" ry="2" fill="#7c5cbf" />
      {/* Mouth */}
      <path d="M 46 58 Q 50 62 54 58" fill="none" stroke="#2d2d2d" strokeWidth="1.2" strokeLinecap="round" />
      {/* Shell on belly */}
      <ellipse cx="50" cy="74" rx="9" ry="7" fill="#fde68a" stroke="#d4a020" strokeWidth="1.5" />
      <path d="M 41,74 Q 50,68 59,74" fill="none" stroke="#d4a020" strokeWidth="1" />
      <line x1="50" y1="67" x2="50" y2="81" stroke="#d4a020" strokeWidth="0.8" />
    </svg>
  )
}

// Pajama - ghost-like creature in pajamas/nightcap
export function Pajama() {
  return (
    <svg viewBox="0 0 100 100">
      {/* Nightcap */}
      <path d="M 30,32 Q 40,2 70,12 Q 80,16 78,24 L 72,30 Q 65,20 50,20 Q 38,22 30,32 Z" fill="#93c5fd" stroke="#3b82f6" strokeWidth="1.5" />
      <circle cx="72" cy="12" r="5" fill="#fff" stroke="#3b82f6" strokeWidth="1" />
      {/* Stripe on cap */}
      <path d="M 38,26 Q 50,16 66,18" fill="none" stroke="#fff" strokeWidth="3" opacity="0.5" />
      {/* Body */}
      <ellipse cx="50" cy="58" rx="34" ry="36" fill="#e0f2fe" stroke="#7dd3fc" strokeWidth="2" />
      {/* Stars pattern on body */}
      <text x="25" y="50" fontSize="8" fill="#93c5fd">&#9734;</text>
      <text x="68" y="54" fontSize="6" fill="#93c5fd">&#9734;</text>
      <text x="30" y="78" fontSize="7" fill="#93c5fd">&#9734;</text>
      <text x="64" y="80" fontSize="5" fill="#93c5fd">&#9734;</text>
      {/* Eyes - sleepy */}
      <path d="M 33 50 Q 38 46 43 50" fill="none" stroke="#2d2d2d" strokeWidth="2" strokeLinecap="round" />
      <path d="M 57 50 Q 62 46 67 50" fill="none" stroke="#2d2d2d" strokeWidth="2" strokeLinecap="round" />
      {/* Cheeks */}
      <ellipse cx="30" cy="58" rx="6" ry="4" fill="#f9c4d2" opacity="0.5" />
      <ellipse cx="70" cy="58" rx="6" ry="4" fill="#f9c4d2" opacity="0.5" />
      {/* Mouth */}
      <path d="M 46 62 Q 50 66 54 62" fill="none" stroke="#2d2d2d" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )
}

// Anoko - similar to Chiikawa but with a distinct hair tuft, slightly different shape
export function Anoko() {
  return (
    <svg viewBox="0 0 100 100">
      {/* Ears */}
      <ellipse cx="26" cy="20" rx="10" ry="14" fill="#d8f3dc" stroke="#95d5a6" strokeWidth="1.5" />
      <ellipse cx="74" cy="20" rx="10" ry="14" fill="#d8f3dc" stroke="#95d5a6" strokeWidth="1.5" />
      <ellipse cx="26" cy="20" rx="5" ry="8" fill="#b7e4c7" />
      <ellipse cx="74" cy="20" rx="5" ry="8" fill="#b7e4c7" />
      {/* Body */}
      <ellipse cx="50" cy="57" rx="35" ry="36" fill="#d8f3dc" stroke="#95d5a6" strokeWidth="2" />
      {/* Hair tuft */}
      <path d="M 45,22 Q 48,10 52,22 Q 54,12 56,22" fill="#95d5a6" stroke="#6db585" strokeWidth="1.5" strokeLinecap="round" />
      {/* Eyes - rounder, sparkly */}
      <circle cx="37" cy="50" r="4" fill="#2d2d2d" />
      <circle cx="63" cy="50" r="4" fill="#2d2d2d" />
      <circle cx="38.5" cy="48.5" r="1.5" fill="#fff" />
      <circle cx="64.5" cy="48.5" r="1.5" fill="#fff" />
      <circle cx="36" cy="51" r="0.8" fill="#fff" />
      <circle cx="62" cy="51" r="0.8" fill="#fff" />
      {/* Cheeks */}
      <ellipse cx="26" cy="60" rx="7" ry="5" fill="#f9c4d2" opacity="0.6" />
      <ellipse cx="74" cy="60" rx="7" ry="5" fill="#f9c4d2" opacity="0.6" />
      {/* Mouth - small smile */}
      <path d="M 46 62 Q 50 67 54 62" fill="none" stroke="#2d2d2d" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export const CHARACTERS = [
  { name: 'Chiikawa', Component: Chiikawa, color: '#fef9ef', accent: '#f9c4d2' },
  { name: 'Hachiware', Component: Hachiware, color: '#e2e8f0', accent: '#4a5568' },
  { name: 'Usagi', Component: Usagi, color: '#fef3c7', accent: '#f59e0b' },
  { name: 'Momonga', Component: Momonga, color: '#e5e7eb', accent: '#9ca3af' },
  { name: 'Shisa', Component: Shisa, color: '#fde68a', accent: '#f59e0b' },
  { name: 'Kurimanju', Component: Kurimanju, color: '#fde68a', accent: '#92400e' },
  { name: 'Rakko', Component: Rakko, color: '#c4b5fd', accent: '#7c5cbf' },
  { name: 'Pajama', Component: Pajama, color: '#e0f2fe', accent: '#93c5fd' },
  { name: 'Anoko', Component: Anoko, color: '#d8f3dc', accent: '#95d5a6' },
]
