'use client'

import { useEffect, useState } from 'react'

// Floating Clouds SVG
export const FloatingClouds = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Cloud 1 */}
      <svg 
        className="absolute top-10 left-[5%] w-32 h-20 animate-float opacity-60"
        viewBox="0 0 200 100"
        fill="none"
      >
        <ellipse cx="60" cy="60" rx="50" ry="30" fill="white"/>
        <ellipse cx="100" cy="50" rx="60" ry="40" fill="white"/>
        <ellipse cx="150" cy="60" rx="45" ry="28" fill="white"/>
      </svg>
      
      {/* Cloud 2 */}
      <svg 
        className="absolute top-20 right-[10%] w-40 h-24 animate-float-slow opacity-50"
        style={{ animationDelay: '1s' }}
        viewBox="0 0 200 100"
        fill="none"
      >
        <ellipse cx="50" cy="55" rx="40" ry="25" fill="white"/>
        <ellipse cx="100" cy="45" rx="55" ry="35" fill="white"/>
        <ellipse cx="155" cy="55" rx="38" ry="24" fill="white"/>
      </svg>
      
      {/* Cloud 3 */}
      <svg 
        className="absolute top-40 left-[15%] w-24 h-16 animate-float opacity-40"
        style={{ animationDelay: '2s' }}
        viewBox="0 0 200 100"
        fill="none"
      >
        <ellipse cx="60" cy="60" rx="45" ry="28" fill="white"/>
        <ellipse cx="110" cy="50" rx="50" ry="32" fill="white"/>
        <ellipse cx="150" cy="58" rx="35" ry="22" fill="white"/>
      </svg>
    </div>
  )
}

// Floating Stars
export const FloatingStars = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(8)].map((_, i) => (
        <svg
          key={i}
          className={`absolute w-6 h-6 animate-sparkle`}
          style={{
            top: `${10 + (i * 12)}%`,
            left: `${5 + (i * 11)}%`,
            animationDelay: `${i * 0.3}s`,
            opacity: 0.7 + (i * 0.03),
          }}
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M12 2L14.09 8.26L20.18 9.27L15.54 13.14L16.82 19.02L12 16.27L7.18 19.02L8.46 13.14L3.82 9.27L9.91 8.26L12 2Z"
            fill={['#FFD93D', '#FF6B9D', '#C9B1FF', '#6BCB77', '#4D96FF'][i % 5]}
          />
        </svg>
      ))}
    </div>
  )
}

// Floating Balloons
export const FloatingBalloons = () => {
  const balloonColors = [
    '#FF6B6B', // Red
    '#4ECDC4', // Teal
    '#FFE66D', // Yellow
    '#95E1D3', // Mint
    '#F38181', // Coral
    '#AA96DA', // Purple
  ]
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {balloonColors.map((color, i) => (
        <div
          key={i}
          className="absolute animate-float"
          style={{
            right: `${5 + (i * 8)}%`,
            bottom: `${-10 - (i * 5)}%`,
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${4 + i}s`,
          }}
        >
          <svg width="40" height="60" viewBox="0 0 40 60" fill="none">
            <ellipse cx="20" cy="20" rx="18" ry="22" fill={color}/>
            <ellipse cx="20" cy="20" rx="18" ry="22" fill="url(#shine)" opacity="0.3"/>
            <path d="M20 42 L18 58 M20 42 L22 58" stroke={color} strokeWidth="1.5"/>
            <ellipse cx="20" cy="42" rx="3" ry="2" fill={color}/>
            <defs>
              <radialGradient id="shine" cx="30%" cy="30%" r="50%">
                <stop offset="0%" stopColor="white"/>
                <stop offset="100%" stopColor="transparent"/>
              </radialGradient>
            </defs>
          </svg>
        </div>
      ))}
    </div>
  )
}

// Confetti Effect
export const Confetti = () => {
  const [confetti, setConfetti] = useState<Array<{
    id: number;
    x: number;
    color: string;
    delay: number;
    duration: number;
  }>>([])
  
  useEffect(() => {
    const colors = ['#FF6B6B', '#4ECDC4', '#FFE66D', '#95E1D3', '#F38181', '#AA96DA']
    const items = [...Array(20)].map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 2,
    }))
    setConfetti(items)
  }, [])
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {confetti.map((item) => (
        <div
          key={item.id}
          className="absolute w-3 h-3 animate-confetti"
          style={{
            left: `${item.x}%`,
            backgroundColor: item.color,
            animationDelay: `${item.delay}s`,
            animationDuration: `${item.duration}s`,
            borderRadius: Math.random() > 0.5 ? '50%' : '2px',
            transform: `rotate(${Math.random() * 360}deg)`,
          }}
        />
      ))}
    </div>
  )
}

// Wave Divider SVG
export const WaveDivider = ({ 
  color = '#79B433', 
  flip = false,
  className = ''
}: { 
  color?: string; 
  flip?: boolean;
  className?: string;
}) => {
  return (
    <div className={`w-full leading-none ${flip ? 'rotate-180' : ''} ${className}`}>
      <svg 
        viewBox="0 0 1440 120" 
        className="w-[102%] -ml-[1%] h-[80px] md:h-[120px]" 
        preserveAspectRatio="none"
      >
        <path
          d="M0,60 C180,120 360,0 540,60 C720,120 900,0 1080,60 C1260,120 1350,80 1440,100 L1440,120 L0,120 Z"
          fill={color}
        />
      </svg>
    </div>
  )
}

// Wavy Line Divider
export const WavyLineDivider = ({ color = '#E9D5FF' }: { color?: string }) => {
  return (
    <div className="w-full py-8">
      <svg viewBox="0 0 1200 30" className="w-full h-8">
        <path
          d="M0,15 Q50,0 100,15 T200,15 T300,15 T400,15 T500,15 T600,15 T700,15 T800,15 T900,15 T1000,15 T1100,15 T1200,15"
          fill="none"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    </div>
  )
}

// Blob Shape
export const BlobShape = ({ 
  className = '', 
  color = 'var(--kids-pink-soft)' 
}: { 
  className?: string;
  color?: string;
}) => {
  return (
    <svg 
      viewBox="0 0 200 200" 
      className={`animate-morph ${className}`}
    >
      <path
        fill={color}
        d="M45.3,-58.2C57.9,-46.5,66.5,-31.5,70.2,-15.1C73.9,1.4,72.6,19.3,64.8,33.5C57,47.7,42.6,58.2,26.8,64.2C11,70.2,-6.2,71.7,-22.2,67.1C-38.1,62.5,-52.8,51.8,-62.4,37.3C-72,22.8,-76.5,4.5,-73.1,-12.3C-69.7,-29.1,-58.4,-44.4,-44.3,-55.9C-30.2,-67.4,-13.3,-75.1,1.8,-77.3C16.9,-79.5,32.7,-69.9,45.3,-58.2Z"
        transform="translate(100 100)"
      />
    </svg>
  )
}

// Decorative Dots Pattern
export const DotsPattern = ({ className = '' }: { className?: string }) => {
  return (
    <div className={`absolute inset-0 opacity-30 ${className}`}>
      <svg width="100%" height="100%">
        <pattern id="dots" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
          <circle cx="15" cy="15" r="2" fill="currentColor"/>
        </pattern>
        <rect width="100%" height="100%" fill="url(#dots)"/>
      </svg>
    </div>
  )
}

// Rainbow Arc
export const RainbowArc = ({ className = '' }: { className?: string }) => {
  return (
    <svg viewBox="0 0 200 100" className={className}>
      <path d="M10,100 Q100,0 190,100" stroke="#FF6B6B" strokeWidth="8" fill="none"/>
      <path d="M20,100 Q100,10 180,100" stroke="#FFE66D" strokeWidth="8" fill="none"/>
      <path d="M30,100 Q100,20 170,100" stroke="#4ECDC4" strokeWidth="8" fill="none"/>
      <path d="M40,100 Q100,30 160,100" stroke="#95E1D3" strokeWidth="8" fill="none"/>
      <path d="M50,100 Q100,40 150,100" stroke="#AA96DA" strokeWidth="8" fill="none"/>
    </svg>
  )
}

// Sun SVG
export const SunDecoration = ({ className = '' }: { className?: string }) => {
  return (
    <svg viewBox="0 0 100 100" className={`animate-spin-slow ${className}`}>
      <circle cx="50" cy="50" r="20" fill="#FFD93D"/>
      {[...Array(8)].map((_, i) => (
        <line
          key={i}
          x1="50"
          y1="15"
          x2="50"
          y2="5"
          stroke="#FFD93D"
          strokeWidth="4"
          strokeLinecap="round"
          transform={`rotate(${i * 45} 50 50)`}
        />
      ))}
    </svg>
  )
}

// Playful Underline
export const PlayfulUnderline = ({ color = '#4ECDC4' }: { color?: string }) => {
  return (
    <svg viewBox="0 0 200 20" className="w-32 h-4">
      <path
        d="M0,10 Q25,0 50,10 T100,10 T150,10 T200,10"
        stroke={color}
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  )
}