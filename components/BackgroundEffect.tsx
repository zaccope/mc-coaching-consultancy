export default function BackgroundEffect() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden opacity-50 lg:opacity-100" aria-hidden="true">
      {/* Large floating orbs — holographic glow */}
      <div className="absolute top-[5%] left-[10%] w-[600px] h-[600px] rounded-full bg-accent/[0.07] blur-[120px] animate-float-slow" />
      <div className="absolute top-[45%] right-[5%] w-[500px] h-[500px] rounded-full bg-blue-400/[0.08] blur-[140px] animate-float-slower" />
      <div className="absolute bottom-[10%] left-[35%] w-[450px] h-[450px] rounded-full bg-accent/[0.06] blur-[100px] animate-float-slow" />
      <div className="absolute top-[25%] right-[30%] w-[350px] h-[350px] rounded-full bg-cyan-300/[0.06] blur-[90px] animate-float-slower" />
      <div className="absolute top-[70%] left-[5%] w-[300px] h-[300px] rounded-full bg-blue-300/[0.05] blur-[80px] animate-float-slow" />

      {/* Particle dots and connecting lines */}
      <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="dot-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00D4FF" stopOpacity="1" />
            <stop offset="100%" stopColor="#00D4FF" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="dot-glow-warm" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FF8844" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#FF8844" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Cyan glowing dots */}
        <circle cx="8%" cy="12%" r="3" fill="url(#dot-glow)" />
        <circle cx="22%" cy="8%" r="2" fill="url(#dot-glow)" />
        <circle cx="82%" cy="6%" r="3.5" fill="url(#dot-glow)" />
        <circle cx="68%" cy="18%" r="2.5" fill="url(#dot-glow)" />
        <circle cx="93%" cy="15%" r="2" fill="url(#dot-glow)" />
        <circle cx="30%" cy="30%" r="2" fill="url(#dot-glow)" />
        <circle cx="55%" cy="25%" r="3" fill="url(#dot-glow)" />
        <circle cx="90%" cy="35%" r="2.5" fill="url(#dot-glow)" />
        <circle cx="12%" cy="45%" r="2" fill="url(#dot-glow)" />
        <circle cx="42%" cy="42%" r="3" fill="url(#dot-glow)" />
        <circle cx="75%" cy="50%" r="2" fill="url(#dot-glow)" />
        <circle cx="95%" cy="55%" r="3" fill="url(#dot-glow)" />
        <circle cx="5%" cy="65%" r="2.5" fill="url(#dot-glow)" />
        <circle cx="35%" cy="60%" r="2" fill="url(#dot-glow)" />
        <circle cx="60%" cy="70%" r="3" fill="url(#dot-glow)" />
        <circle cx="85%" cy="68%" r="2" fill="url(#dot-glow)" />
        <circle cx="18%" cy="80%" r="3" fill="url(#dot-glow)" />
        <circle cx="50%" cy="82%" r="2.5" fill="url(#dot-glow)" />
        <circle cx="78%" cy="85%" r="2" fill="url(#dot-glow)" />
        <circle cx="40%" cy="92%" r="3" fill="url(#dot-glow)" />
        <circle cx="70%" cy="95%" r="2" fill="url(#dot-glow)" />

        {/* Warm accent dots (like the orange sparkles in the original) */}
        <circle cx="88%" cy="22%" r="2" fill="url(#dot-glow-warm)" />
        <circle cx="15%" cy="55%" r="1.5" fill="url(#dot-glow-warm)" />
        <circle cx="65%" cy="78%" r="2" fill="url(#dot-glow-warm)" />
        <circle cx="25%" cy="90%" r="1.5" fill="url(#dot-glow-warm)" />

        {/* Connecting lines forming constellation patterns */}
        <line x1="8%" y1="12%" x2="22%" y2="8%" stroke="#00D4FF" strokeWidth="0.5" strokeOpacity="0.2" />
        <line x1="22%" y1="8%" x2="30%" y2="30%" stroke="#00D4FF" strokeWidth="0.4" strokeOpacity="0.15" />
        <line x1="82%" y1="6%" x2="68%" y2="18%" stroke="#00D4FF" strokeWidth="0.5" strokeOpacity="0.2" />
        <line x1="68%" y1="18%" x2="55%" y2="25%" stroke="#00D4FF" strokeWidth="0.4" strokeOpacity="0.15" />
        <line x1="68%" y1="18%" x2="93%" y2="15%" stroke="#00D4FF" strokeWidth="0.4" strokeOpacity="0.12" />
        <line x1="93%" y1="15%" x2="90%" y2="35%" stroke="#00D4FF" strokeWidth="0.4" strokeOpacity="0.15" />
        <line x1="55%" y1="25%" x2="42%" y2="42%" stroke="#00D4FF" strokeWidth="0.4" strokeOpacity="0.12" />
        <line x1="42%" y1="42%" x2="75%" y2="50%" stroke="#00D4FF" strokeWidth="0.4" strokeOpacity="0.1" />
        <line x1="75%" y1="50%" x2="95%" y2="55%" stroke="#00D4FF" strokeWidth="0.4" strokeOpacity="0.12" />
        <line x1="12%" y1="45%" x2="5%" y2="65%" stroke="#00D4FF" strokeWidth="0.4" strokeOpacity="0.15" />
        <line x1="35%" y1="60%" x2="60%" y2="70%" stroke="#00D4FF" strokeWidth="0.4" strokeOpacity="0.12" />
        <line x1="60%" y1="70%" x2="85%" y2="68%" stroke="#00D4FF" strokeWidth="0.4" strokeOpacity="0.1" />
        <line x1="5%" y1="65%" x2="18%" y2="80%" stroke="#00D4FF" strokeWidth="0.4" strokeOpacity="0.15" />
        <line x1="18%" y1="80%" x2="50%" y2="82%" stroke="#00D4FF" strokeWidth="0.4" strokeOpacity="0.1" />
        <line x1="50%" y1="82%" x2="78%" y2="85%" stroke="#00D4FF" strokeWidth="0.4" strokeOpacity="0.12" />
        <line x1="78%" y1="85%" x2="70%" y2="95%" stroke="#00D4FF" strokeWidth="0.4" strokeOpacity="0.1" />
        <line x1="40%" y1="92%" x2="50%" y2="82%" stroke="#00D4FF" strokeWidth="0.4" strokeOpacity="0.12" />
      </svg>
    </div>
  )
}
