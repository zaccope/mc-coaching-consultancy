export default function BackgroundEffect() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {/* Large floating orbs — holographic glow */}
      <div className="absolute top-[10%] left-[15%] w-[500px] h-[500px] rounded-full bg-accent/[0.04] blur-[100px] animate-float-slow" />
      <div className="absolute top-[50%] right-[10%] w-[400px] h-[400px] rounded-full bg-blue-500/[0.05] blur-[120px] animate-float-slower" />
      <div className="absolute bottom-[15%] left-[40%] w-[350px] h-[350px] rounded-full bg-accent/[0.03] blur-[90px] animate-float-slow" />
      <div className="absolute top-[30%] right-[35%] w-[250px] h-[250px] rounded-full bg-cyan-400/[0.04] blur-[80px] animate-float-slower" />

      {/* Subtle particle dots */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.15]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="dot-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00C8F0" stopOpacity="1" />
            <stop offset="100%" stopColor="#00C8F0" stopOpacity="0" />
          </radialGradient>
        </defs>
        {/* Scattered glowing dots */}
        <circle cx="10%" cy="15%" r="2" fill="url(#dot-glow)" />
        <circle cx="85%" cy="8%" r="1.5" fill="url(#dot-glow)" />
        <circle cx="70%" cy="22%" r="2.5" fill="url(#dot-glow)" />
        <circle cx="25%" cy="35%" r="1.5" fill="url(#dot-glow)" />
        <circle cx="92%" cy="40%" r="2" fill="url(#dot-glow)" />
        <circle cx="5%" cy="55%" r="1" fill="url(#dot-glow)" />
        <circle cx="45%" cy="48%" r="2" fill="url(#dot-glow)" />
        <circle cx="78%" cy="58%" r="1.5" fill="url(#dot-glow)" />
        <circle cx="15%" cy="72%" r="2" fill="url(#dot-glow)" />
        <circle cx="60%" cy="68%" r="1" fill="url(#dot-glow)" />
        <circle cx="88%" cy="75%" r="2.5" fill="url(#dot-glow)" />
        <circle cx="35%" cy="85%" r="1.5" fill="url(#dot-glow)" />
        <circle cx="72%" cy="90%" r="2" fill="url(#dot-glow)" />
        <circle cx="50%" cy="95%" r="1" fill="url(#dot-glow)" />

        {/* Faint connecting lines */}
        <line x1="10%" y1="15%" x2="25%" y2="35%" stroke="#00C8F0" strokeWidth="0.3" strokeOpacity="0.15" />
        <line x1="85%" y1="8%" x2="70%" y2="22%" stroke="#00C8F0" strokeWidth="0.3" strokeOpacity="0.12" />
        <line x1="70%" y1="22%" x2="92%" y2="40%" stroke="#00C8F0" strokeWidth="0.3" strokeOpacity="0.1" />
        <line x1="45%" y1="48%" x2="78%" y2="58%" stroke="#00C8F0" strokeWidth="0.3" strokeOpacity="0.12" />
        <line x1="15%" y1="72%" x2="35%" y2="85%" stroke="#00C8F0" strokeWidth="0.3" strokeOpacity="0.1" />
        <line x1="88%" y1="75%" x2="72%" y2="90%" stroke="#00C8F0" strokeWidth="0.3" strokeOpacity="0.12" />
      </svg>
    </div>
  )
}
