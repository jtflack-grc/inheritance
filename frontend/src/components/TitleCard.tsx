import { useState, useEffect } from 'react'

interface TitleCardProps {
  onClose: () => void
}

export default function TitleCard({ onClose }: TitleCardProps) {
  const [visible, setVisible] = useState(true) // Start visible immediately
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    // Already visible, no fade in needed
    
    // Auto-fade out after 5 seconds
    const autoFadeTimer = setTimeout(() => {
      handleClose()
    }, 5000)
    
    return () => clearTimeout(autoFadeTimer)
  }, [])

  const handleClose = () => {
    setFadeOut(true)
    setTimeout(() => {
      onClose()
    }, 500)
  }

  console.log('TitleCard rendering, visible:', visible, 'fadeOut:', fadeOut)

  return (
    <div 
      onClick={handleClose}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#000000', // Pure black background
        zIndex: 20000,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: fadeOut ? 0 : (visible ? 1 : 1), // Always visible unless fading out
        transition: 'opacity 0.5s ease',
        cursor: 'pointer',
        pointerEvents: fadeOut ? 'none' : 'auto'
      }}
    >
      <div style={{
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px'
      }}>
        {/* Main Title */}
        <h1 
          title="an ai governance and risk simulator for animals"
          style={{
            fontSize: '72px',
            fontWeight: 700,
            color: '#ffffff', // Pure white
            margin: 0,
            letterSpacing: '0.15em',
            lineHeight: 1,
            textTransform: 'uppercase',
            fontFamily: '"Times New Roman", Times, serif',
            textShadow: '0 4px 8px rgba(0, 0, 0, 0.8)',
            whiteSpace: 'nowrap',
            opacity: 1 // Force full opacity
          }}
        >
          INHERITANCE
        </h1>
        
        {/* Subtitle */}
        <div style={{
          fontSize: '18px',
          fontWeight: 500,
          color: '#aaa',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          fontFamily: '"Times New Roman", Times, serif',
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.8)',
          marginTop: '10px'
        }}>
          AN AI GOVERNANCE AND RISK SIMULATOR FOR ANIMALS
        </div>
      </div>
      
      {/* Click to continue hint */}
      <div style={{
        position: 'absolute',
        bottom: '60px',
        fontSize: '12px',
        color: '#666',
        fontFamily: '"Times New Roman", Times, serif',
        letterSpacing: '0.05em',
        opacity: visible ? 0.6 : 0,
        transition: 'opacity 1s ease 1s'
      }}>
        Click to continue
      </div>
    </div>
  )
}
