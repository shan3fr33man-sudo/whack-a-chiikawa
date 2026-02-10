// Chiikawa village background - a living, breathing scene with villagers

// Tiny Chiikawa-style villager blobs for background activity
function Villager({ body, accent, x, y, className, children }) {
  return (
    <g className={className} transform={`translate(${x},${y})`}>
      {/* Shadow */}
      <ellipse cx="0" cy="20" rx="10" ry="4" fill="#000" opacity="0.1" />
      {/* Body */}
      <ellipse cx="0" cy="0" rx="12" ry="14" fill={body} stroke={accent} strokeWidth="1.5" />
      {/* Eyes */}
      <circle cx="-4" cy="-2" r="1.5" fill="#2d2d2d" />
      <circle cx="4" cy="-2" r="1.5" fill="#2d2d2d" />
      {/* Cheeks */}
      <ellipse cx="-8" cy="4" rx="3" ry="2" fill="#f9c4d2" opacity="0.5" />
      <ellipse cx="8" cy="4" rx="3" ry="2" fill="#f9c4d2" opacity="0.5" />
      {/* Mouth */}
      <path d="M -2 5 Q 0 8 2 5" fill="none" stroke="#2d2d2d" strokeWidth="0.8" strokeLinecap="round" />
      {/* Extra details (broom, basket, etc.) */}
      {children}
    </g>
  )
}

export function VillageBackground() {
  return (
    <svg
      className="village-bg"
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#a7d8f5" />
          <stop offset="60%" stopColor="#d4eeff" />
          <stop offset="100%" stopColor="#ffecd2" />
        </linearGradient>
        <linearGradient id="grass" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7bc67e" />
          <stop offset="100%" stopColor="#4a9e4f" />
        </linearGradient>
        <linearGradient id="dirt" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#d4a76a" />
          <stop offset="100%" stopColor="#c49660" />
        </linearGradient>

        {/* Walking path for villagers */}
        <path id="walk-path-lr" d="M -50,540 Q 200,510 400,550 Q 600,590 800,540 Q 1000,490 1250,530" fill="none" />
        <path id="walk-path-rl" d="M 1250,555 Q 1000,510 800,555 Q 600,600 400,565 Q 200,530 -50,555" fill="none" />
      </defs>

      {/* Sky */}
      <rect width="1200" height="800" fill="url(#sky)" />

      {/* Clouds */}
      <g className="cloud cloud-1">
        <ellipse cx="200" cy="80" rx="60" ry="25" fill="#fff" opacity="0.8" />
        <ellipse cx="240" cy="70" rx="50" ry="22" fill="#fff" opacity="0.9" />
        <ellipse cx="180" cy="72" rx="40" ry="20" fill="#fff" opacity="0.85" />
      </g>
      <g className="cloud cloud-2">
        <ellipse cx="700" cy="100" rx="70" ry="28" fill="#fff" opacity="0.7" />
        <ellipse cx="740" cy="88" rx="55" ry="24" fill="#fff" opacity="0.8" />
        <ellipse cx="670" cy="90" rx="45" ry="22" fill="#fff" opacity="0.75" />
      </g>
      <g className="cloud cloud-3">
        <ellipse cx="1050" cy="60" rx="50" ry="20" fill="#fff" opacity="0.7" />
        <ellipse cx="1080" cy="52" rx="40" ry="18" fill="#fff" opacity="0.8" />
      </g>

      {/* Sun */}
      <circle cx="1080" cy="80" r="45" fill="#ffe082" opacity="0.9" className="sun" />
      <circle cx="1080" cy="80" r="55" fill="#ffe082" opacity="0.2" className="sun-glow" />

      {/* Distant hills */}
      <ellipse cx="300" cy="380" rx="250" ry="80" fill="#8fd694" opacity="0.6" />
      <ellipse cx="900" cy="370" rx="300" ry="90" fill="#8fd694" opacity="0.5" />
      <ellipse cx="600" cy="400" rx="200" ry="60" fill="#7bc67e" opacity="0.6" />

      {/* Main ground */}
      <rect x="0" y="380" width="1200" height="420" fill="url(#grass)" />

      {/* Dirt path */}
      <path d="M 0,550 Q 200,520 400,560 Q 600,600 800,550 Q 1000,500 1200,540" fill="none" stroke="url(#dirt)" strokeWidth="50" strokeLinecap="round" opacity="0.7" />
      <path d="M 0,550 Q 200,520 400,560 Q 600,600 800,550 Q 1000,500 1200,540" fill="none" stroke="#c9935a" strokeWidth="2" strokeDasharray="8,12" opacity="0.3" />

      {/* === BUILDINGS === */}

      {/* House 1 - Chiikawa's cottage (left) */}
      <g transform="translate(60, 320)">
        <rect x="0" y="40" width="100" height="80" rx="5" fill="#fff5eb" stroke="#d4a76a" strokeWidth="2" />
        <path d="M -10,42 L 50,0 L 110,42 Z" fill="#e8735a" stroke="#c4533a" strokeWidth="2" />
        <rect x="35" y="75" width="30" height="45" rx="15" fill="#c4533a" />
        <circle cx="58" cy="100" r="3" fill="#fbbf24" />
        <rect x="10" y="55" width="18" height="18" rx="3" fill="#b5e2f5" stroke="#8bb8d4" strokeWidth="1.5" />
        <line x1="19" y1="55" x2="19" y2="73" stroke="#8bb8d4" strokeWidth="1" />
        <line x1="10" y1="64" x2="28" y2="64" stroke="#8bb8d4" strokeWidth="1" />
        <rect x="72" y="55" width="18" height="18" rx="3" fill="#b5e2f5" stroke="#8bb8d4" strokeWidth="1.5" />
        <line x1="81" y1="55" x2="81" y2="73" stroke="#8bb8d4" strokeWidth="1" />
        <line x1="72" y1="64" x2="90" y2="64" stroke="#8bb8d4" strokeWidth="1" />
        <rect x="75" y="8" width="15" height="25" fill="#d4a76a" />
        <g className="smoke">
          <circle cx="82" cy="2" r="5" fill="#ddd" opacity="0.4" />
          <circle cx="78" cy="-8" r="4" fill="#ddd" opacity="0.3" />
          <circle cx="84" cy="-16" r="3" fill="#ddd" opacity="0.2" />
        </g>
      </g>

      {/* House 2 - Hachiware's place */}
      <g transform="translate(10, 360)">
        <rect x="0" y="30" width="70" height="60" rx="4" fill="#e8edf2" stroke="#a0b0c0" strokeWidth="1.5" />
        <path d="M -5,32 L 35,-5 L 75,32 Z" fill="#4a5568" stroke="#2d3748" strokeWidth="1.5" />
        <rect x="22" y="55" width="26" height="35" rx="13" fill="#2d3748" />
        <circle cx="42" cy="72" r="2.5" fill="#fbbf24" />
        <rect x="8" y="42" width="14" height="12" rx="2" fill="#b5e2f5" stroke="#8bb8d4" strokeWidth="1" />
        <rect x="48" y="42" width="14" height="12" rx="2" fill="#b5e2f5" stroke="#8bb8d4" strokeWidth="1" />
      </g>

      {/* House 3 - Usagi's house (right) */}
      <g transform="translate(1040, 330)">
        <rect x="0" y="35" width="110" height="85" rx="5" fill="#fef3c7" stroke="#d4a853" strokeWidth="2" />
        <path d="M -8,37 L 55,-5 L 118,37 Z" fill="#f59e0b" stroke="#d97706" strokeWidth="2" />
        <rect x="40" y="75" width="30" height="45" rx="15" fill="#d97706" />
        <circle cx="63" cy="100" r="3" fill="#fbbf24" />
        <rect x="10" y="50" width="20" height="18" rx="3" fill="#b5e2f5" stroke="#8bb8d4" strokeWidth="1.5" />
        <rect x="80" y="50" width="20" height="18" rx="3" fill="#b5e2f5" stroke="#8bb8d4" strokeWidth="1.5" />
        <line x1="55" y1="-5" x2="55" y2="-30" stroke="#a0522d" strokeWidth="2" />
        <path d="M 55,-30 L 75,-22 L 55,-14 Z" fill="#fb923c" />
      </g>

      {/* House 4 - Bakery */}
      <g transform="translate(1120, 370)">
        <rect x="0" y="20" width="70" height="50" rx="4" fill="#fde68a" stroke="#d4a020" strokeWidth="1.5" />
        <path d="M -5,22 L 35,-8 L 75,22 Z" fill="#92400e" stroke="#78350f" strokeWidth="1.5" />
        <rect x="10" y="35" width="50" height="35" rx="3" fill="#fff5eb" stroke="#d4a76a" strokeWidth="1" />
        <rect x="15" y="24" width="40" height="10" rx="3" fill="#fff" stroke="#d4a020" strokeWidth="1" />
      </g>

      {/* Trees */}
      <g transform="translate(175, 340)">
        <rect x="12" y="40" width="10" height="30" fill="#a0522d" />
        <circle cx="17" cy="25" r="28" fill="#5cb85c" opacity="0.9" />
        <circle cx="5" cy="35" r="18" fill="#4a9e4f" opacity="0.8" />
        <circle cx="30" cy="32" r="20" fill="#4a9e4f" opacity="0.85" />
      </g>
      <g transform="translate(980, 350)">
        <rect x="12" y="35" width="10" height="25" fill="#a0522d" />
        <circle cx="17" cy="20" r="25" fill="#5cb85c" opacity="0.9" />
        <circle cx="5" cy="30" r="16" fill="#4a9e4f" opacity="0.8" />
        <circle cx="30" cy="28" r="18" fill="#4a9e4f" opacity="0.85" />
      </g>

      {/* Flowers */}
      <g className="flowers">
        <circle cx="50" cy="520" r="4" fill="#f472b6" /><circle cx="50" cy="520" r="1.5" fill="#fbbf24" />
        <circle cx="180" cy="490" r="3" fill="#fb923c" /><circle cx="180" cy="490" r="1.2" fill="#fff" />
        <circle cx="320" cy="530" r="3.5" fill="#a78bfa" /><circle cx="320" cy="530" r="1.3" fill="#fbbf24" />
        <circle cx="880" cy="510" r="4" fill="#f472b6" /><circle cx="880" cy="510" r="1.5" fill="#fbbf24" />
        <circle cx="1020" cy="530" r="3" fill="#fb923c" /><circle cx="1020" cy="530" r="1.2" fill="#fff" />
        <circle cx="1150" cy="500" r="3.5" fill="#a78bfa" /><circle cx="1150" cy="500" r="1.3" fill="#fbbf24" />
      </g>

      {/* Fence posts */}
      <g opacity="0.5">
        <rect x="220" y="440" width="4" height="30" rx="1" fill="#d4a76a" />
        <rect x="245" y="440" width="4" height="30" rx="1" fill="#d4a76a" />
        <rect x="220" y="448" width="29" height="3" rx="1" fill="#d4a76a" />
        <rect x="220" y="458" width="29" height="3" rx="1" fill="#d4a76a" />
        <rect x="930" y="445" width="4" height="30" rx="1" fill="#d4a76a" />
        <rect x="955" y="445" width="4" height="30" rx="1" fill="#d4a76a" />
        <rect x="930" y="453" width="29" height="3" rx="1" fill="#d4a76a" />
        <rect x="930" y="463" width="29" height="3" rx="1" fill="#d4a76a" />
      </g>

      {/* ======== ANIMATED VILLAGERS ======== */}

      {/* Villager 1 — Sweeper near Chiikawa's cottage */}
      <Villager body="#fef9ef" accent="#c9b99a" x={145} y={430} className="villager-sweeper">
        {/* Broom */}
        <line x1="14" y1="-8" x2="14" y2="18" stroke="#a0522d" strokeWidth="2" strokeLinecap="round" />
        <path d="M 10,18 L 14,24 L 18,18" fill="#d4a76a" stroke="#a0522d" strokeWidth="1" />
        {/* Ears */}
        <ellipse cx="-6" cy="-14" rx="4" ry="6" fill="#fef9ef" stroke="#c9b99a" strokeWidth="1" />
        <ellipse cx="6" cy="-14" rx="4" ry="6" fill="#fef9ef" stroke="#c9b99a" strokeWidth="1" />
      </Villager>

      {/* Villager 2 — Walker on path (left to right) */}
      <g className="villager-walker-lr">
        <Villager body="#e5e7eb" accent="#9ca3af" x={0} y={0}>
          {/* Momonga ears */}
          <ellipse cx="-7" cy="-14" rx="5" ry="5" fill="#e5e7eb" stroke="#9ca3af" strokeWidth="1" />
          <ellipse cx="7" cy="-14" rx="5" ry="5" fill="#e5e7eb" stroke="#9ca3af" strokeWidth="1" />
          {/* Big eyes */}
          <circle cx="-4" cy="-2" r="3" fill="#2d2d2d" />
          <circle cx="4" cy="-2" r="3" fill="#2d2d2d" />
          <circle cx="-3" cy="-3" r="1" fill="#fff" />
          <circle cx="5" cy="-3" r="1" fill="#fff" />
        </Villager>
      </g>

      {/* Villager 3 — Gardener near flowers (left side) */}
      <Villager body="#d8f3dc" accent="#95d5a6" x={55} y={510} className="villager-gardener">
        {/* Watering can */}
        <rect x="12" y="-2" width="10" height="8" rx="2" fill="#9ca3af" stroke="#6b7280" strokeWidth="1" />
        <line x1="22" y1="0" x2="28" y2="-4" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round" />
        {/* Water drops */}
        <g className="water-drops">
          <circle cx="28" cy="-2" r="1" fill="#93c5fd" />
          <circle cx="30" cy="0" r="1" fill="#93c5fd" />
          <circle cx="26" cy="1" r="1" fill="#93c5fd" />
        </g>
        {/* Hair tuft */}
        <path d="M -2,-15 Q 0,-22 2,-15 Q 3,-20 5,-15" fill="#95d5a6" stroke="#6db585" strokeWidth="1" />
      </Villager>

      {/* Villager 4 — Basket carrier walking right to left */}
      <g className="villager-walker-rl">
        <Villager body="#fef3c7" accent="#d4a853" x={0} y={0}>
          {/* Long ears (Usagi) */}
          <ellipse cx="-5" cy="-20" rx="4" ry="10" fill="#fef3c7" stroke="#d4a853" strokeWidth="1" />
          <ellipse cx="5" cy="-20" rx="4" ry="10" fill="#fef3c7" stroke="#d4a853" strokeWidth="1" />
          {/* Basket on head */}
          <path d="M -10,-15 Q 0,-20 10,-15 L 8,-10 L -8,-10 Z" fill="#d4a76a" stroke="#a0522d" strokeWidth="1" />
          {/* Basket contents */}
          <circle cx="-3" cy="-16" r="3" fill="#ef4444" />
          <circle cx="4" cy="-16" r="2.5" fill="#fb923c" />
          <circle cx="0" cy="-18" r="2.5" fill="#fbbf24" />
        </Villager>
      </g>

      {/* Villager 5 — Shisa guarding the right side, patrolling */}
      <Villager body="#fde68a" accent="#d4a020" x={1035} y={445} className="villager-patrol">
        {/* Mane puffs */}
        <circle cx="-8" cy="-12" r="5" fill="#fbbf24" />
        <circle cx="0" cy="-16" r="5" fill="#fbbf24" />
        <circle cx="8" cy="-12" r="5" fill="#fbbf24" />
        {/* Nose */}
        <ellipse cx="0" cy="1" rx="2" ry="1.5" fill="#d97706" />
      </Villager>

      {/* Villager 6 — Kurimanju sitting by bakery, rolling dough */}
      <Villager body="#fde68a" accent="#d4a020" x={1155} y={435} className="villager-baker">
        {/* Chestnut cap */}
        <path d="M -10,-8 Q -10,-22 0,-24 Q 10,-22 10,-8 Z" fill="#92400e" stroke="#78350f" strokeWidth="1" />
        {/* Rolling pin */}
        <line x1="-16" y1="8" x2="16" y2="8" stroke="#a0522d" strokeWidth="3" strokeLinecap="round" />
        {/* Dough blob */}
        <ellipse cx="0" cy="16" rx="12" ry="5" fill="#fde68a" stroke="#d4a020" strokeWidth="1" opacity="0.7" />
      </Villager>

      {/* Villager 7 — Rakko by the stream/pond area, floating */}
      <g transform="translate(910, 490)">
        {/* Little pond */}
        <ellipse cx="0" cy="0" rx="30" ry="12" fill="#93c5fd" opacity="0.4" />
        <ellipse cx="0" cy="0" rx="25" ry="9" fill="#bae6fd" opacity="0.3" />
      </g>
      <Villager body="#c4b5fd" accent="#7c5cbf" x={910} y={480} className="villager-floater">
        {/* Round ears */}
        <circle cx="-8" cy="-13" r="4" fill="#c4b5fd" stroke="#7c5cbf" strokeWidth="1" />
        <circle cx="8" cy="-13" r="4" fill="#c4b5fd" stroke="#7c5cbf" strokeWidth="1" />
        {/* Shell */}
        <ellipse cx="0" cy="10" rx="5" ry="4" fill="#fde68a" stroke="#d4a020" strokeWidth="1" />
      </Villager>

      {/* Villager 8 — Pajama sleeping under tree */}
      <Villager body="#e0f2fe" accent="#7dd3fc" x={195} y={395} className="villager-sleeper">
        {/* Nightcap */}
        <path d="M -6,-14 Q 0,-28 8,-18 L 6,-12 Q 0,-16 -6,-14 Z" fill="#93c5fd" stroke="#3b82f6" strokeWidth="1" />
        <circle cx="8" cy="-20" r="3" fill="#fff" />
        {/* Zzz */}
        <g className="zzz">
          <text x="14" y="-12" fontSize="8" fill="#93c5fd" fontWeight="bold">z</text>
          <text x="20" y="-20" fontSize="10" fill="#7dd3fc" fontWeight="bold">z</text>
          <text x="28" y="-28" fontSize="12" fill="#60a5fa" fontWeight="bold">Z</text>
        </g>
        {/* Closed eyes (sleeping) */}
        <path d="M -6,-2 Q -4,-4 -2,-2" fill="none" stroke="#2d2d2d" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M 2,-2 Q 4,-4 6,-2" fill="none" stroke="#2d2d2d" strokeWidth="1.5" strokeLinecap="round" />
      </Villager>

      {/* Butterflies */}
      <g className="butterfly butterfly-1">
        <path d="M 0,0 Q -6,-8 -2,-12 Q 2,-8 0,0 Q -8,-4 -12,0 Q -8,0 0,0" fill="#f9a8d4" opacity="0.8" />
        <path d="M 0,0 Q 6,-8 2,-12 Q -2,-8 0,0 Q 8,-4 12,0 Q 8,0 0,0" fill="#f9a8d4" opacity="0.8" />
      </g>
      <g className="butterfly butterfly-2">
        <path d="M 0,0 Q -5,-7 -2,-10 Q 1,-7 0,0 Q -7,-3 -10,0 Q -7,0 0,0" fill="#93c5fd" opacity="0.8" />
        <path d="M 0,0 Q 5,-7 2,-10 Q -1,-7 0,0 Q 7,-3 10,0 Q 7,0 0,0" fill="#93c5fd" opacity="0.8" />
      </g>
    </svg>
  )
}

// Pot SVG drawn inline per hole
export function Pot() {
  return (
    <svg className="pot-svg" viewBox="0 0 120 90" preserveAspectRatio="xMidYMax meet">
      {/* Pot body */}
      <path d="M 15,30 Q 10,30 8,50 Q 5,80 20,85 Q 50,92 100,85 Q 115,80 112,50 Q 110,30 105,30 Z" fill="#c4703a" stroke="#8b4513" strokeWidth="2" />
      {/* Pot rim */}
      <ellipse cx="60" cy="30" rx="50" ry="10" fill="#d4884a" stroke="#8b4513" strokeWidth="2" />
      {/* Rim highlight */}
      <ellipse cx="60" cy="28" rx="42" ry="6" fill="#dea06a" opacity="0.6" />
      {/* Body highlight stripe */}
      <path d="M 25,45 Q 60,38 95,45" fill="none" stroke="#dea06a" strokeWidth="3" opacity="0.4" strokeLinecap="round" />
      {/* Bottom shadow */}
      <ellipse cx="60" cy="86" rx="40" ry="5" fill="#8b4513" opacity="0.3" />
      {/* Crack detail */}
      <path d="M 75,50 Q 78,60 74,70" fill="none" stroke="#8b4513" strokeWidth="1" opacity="0.3" />
    </svg>
  )
}

// Crowd characters for sidelines
function MiniChar({ emoji, x, className }) {
  return (
    <div className={`crowd-char ${className || ''}`} style={{ left: x }}>
      <span className="crowd-emoji">{emoji}</span>
    </div>
  )
}

export function CrowdLeft({ reaction }) {
  const cls = reaction === 'cheer' ? 'crowd-cheer' : reaction === 'boo' ? 'crowd-boo' : ''
  return (
    <div className={`crowd crowd-left ${cls}`}>
      <MiniChar emoji="🐱" x="10px" className="crowd-a" />
      <MiniChar emoji="🐰" x="45px" className="crowd-b" />
      <MiniChar emoji="🐿️" x="20px" className="crowd-c" />
      <MiniChar emoji="🦁" x="50px" className="crowd-d" />
    </div>
  )
}

export function CrowdRight({ reaction }) {
  const cls = reaction === 'cheer' ? 'crowd-cheer' : reaction === 'boo' ? 'crowd-boo' : ''
  return (
    <div className={`crowd crowd-right ${cls}`}>
      <MiniChar emoji="🌰" x="5px" className="crowd-a" />
      <MiniChar emoji="🦦" x="40px" className="crowd-b" />
      <MiniChar emoji="😴" x="15px" className="crowd-c" />
      <MiniChar emoji="🌿" x="48px" className="crowd-d" />
    </div>
  )
}

// Hammer SVG
export function Hammer() {
  return (
    <svg viewBox="0 0 80 120" className="hammer-svg">
      <rect x="35" y="45" width="10" height="70" rx="4" fill="#a0522d" stroke="#7a3b15" strokeWidth="1.5" />
      <line x1="36" y1="90" x2="44" y2="90" stroke="#7a3b15" strokeWidth="1" opacity="0.4" />
      <line x1="36" y1="95" x2="44" y2="95" stroke="#7a3b15" strokeWidth="1" opacity="0.4" />
      <line x1="36" y1="100" x2="44" y2="100" stroke="#7a3b15" strokeWidth="1" opacity="0.4" />
      <rect x="8" y="12" width="64" height="38" rx="6" fill="#9ca3af" stroke="#6b7280" strokeWidth="2" />
      <rect x="12" y="16" width="56" height="8" rx="3" fill="#d1d5db" opacity="0.6" />
      <rect x="8" y="12" width="12" height="38" rx="4" fill="#6b7280" />
      <rect x="60" y="12" width="12" height="38" rx="4" fill="#6b7280" />
      <circle cx="40" cy="5" r="8" fill="#fbbf24" opacity="0.8" className="impact-star" />
    </svg>
  )
}
