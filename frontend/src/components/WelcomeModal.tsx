import { useState, useEffect } from 'react'
import { t } from '../utils/i18n'

interface WelcomeModalProps {
  onClose: () => void
}

export default function WelcomeModal({ onClose }: WelcomeModalProps) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Fade in after mount
    setTimeout(() => setVisible(true), 100)
  }, [])

  const handleClose = () => {
    setVisible(false)
    setTimeout(onClose, 300)
  }

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.9)',
      zIndex: 10000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      opacity: visible ? 1 : 0,
      transition: 'opacity 0.3s ease'
    }}>
      <div style={{
        maxWidth: '700px',
        padding: '40px',
        backgroundColor: '#0a0a0a',
        borderRadius: '12px',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.8)'
      }}>
        {/* Header */}
        <div style={{
          fontSize: '28px',
          fontWeight: 700,
          color: '#fff',
          marginBottom: '12px',
          textAlign: 'center'
        }}>
          AI & Animal Welfare Governance Simulator
        </div>

        <div style={{
          fontSize: '13px',
          color: '#888',
          marginBottom: '30px',
          textAlign: 'center',
          fontStyle: 'italic'
        }}>
          An exploratory tool for understanding governance tradeoffs across decades and generations
        </div>

        {/* What This Is */}
        <div style={{
          marginBottom: '24px',
          padding: '20px',
          backgroundColor: 'rgba(96, 165, 250, 0.1)',
          borderRadius: '8px',
          border: '1px solid rgba(96, 165, 250, 0.3)'
        }}>
          <div style={{ fontSize: '16px', fontWeight: 600, color: '#60a5fa', marginBottom: '12px' }}>
            {t('welcome.whatThisIs')}
          </div>
          <div style={{ fontSize: '14px', color: '#ddd', lineHeight: '1.6' }}>
            This is a <strong>scenario exploration tool</strong>, not a game or prediction. You'll make governance decisions about both animal welfare and AI systems managing animals—from factory farming to wildlife conservation, from AI sentience recognition to AI welfare governance—and observe how measured successes can hide accumulating risks. Every decision you make has consequences that extend far into the future, modeling how governance choices compound over decades and generations.
          </div>
        </div>

        {/* Longtermism Framing */}
        <div style={{
          marginBottom: '24px',
          padding: '20px',
          backgroundColor: 'rgba(139, 92, 246, 0.1)',
          borderRadius: '8px',
          border: '1px solid rgba(139, 92, 246, 0.3)'
        }}>
          <div style={{ fontSize: '16px', fontWeight: 600, color: '#8b5cf6', marginBottom: '12px' }}>
            A Longtermist Perspective
          </div>
          <div style={{ fontSize: '14px', color: '#ddd', lineHeight: '1.6' }}>
            This simulator explores how governance decisions compound over decades. <strong>System irreversibility</strong> and <strong>governance debt</strong> model long-term lock-in—how choices made today constrain options for future generations. As part of the <strong>Electric Sheep/Futurekind ecosystem</strong>, we're exploring how to build governance systems that remain flexible and ethical across vast timescales, considering the welfare of trillions of beings—both animals and potentially sentient AI systems—across billions of years.
          </div>
        </div>

        {/* Key Concepts */}
        <div style={{
          marginBottom: '24px',
          padding: '20px',
          backgroundColor: 'rgba(251, 146, 60, 0.1)',
          borderRadius: '8px',
          border: '1px solid rgba(251, 146, 60, 0.3)'
        }}>
          <div style={{ fontSize: '16px', fontWeight: 600, color: '#fb923c', marginBottom: '12px' }}>
            {t('welcome.keyConcept')}
          </div>
          <div style={{ fontSize: '14px', color: '#ddd', lineHeight: '1.6' }}>
            Like technical debt in software, <strong>governance debt</strong> accumulates when short-term decisions create long-term problems. Welfare standards may improve while enforcement gaps, regulatory capture, and system irreversibility quietly grow.
          </div>
        </div>

        {/* No Winning */}
        <div style={{
          marginBottom: '30px',
          padding: '20px',
          backgroundColor: 'rgba(168, 85, 247, 0.1)',
          borderRadius: '8px',
          border: '1px solid rgba(168, 85, 247, 0.3)'
        }}>
          <div style={{ fontSize: '16px', fontWeight: 600, color: '#a855f7', marginBottom: '12px' }}>
            There's No "Winning"
          </div>
          <div style={{ fontSize: '14px', color: '#ddd', lineHeight: '1.6' }}>
            Every choice involves tradeoffs. The goal isn't to find the "right" answer, but to <strong>understand how different values and priorities lead to different outcomes</strong>. Explore, reflect, and learn.
          </div>
        </div>

        {/* Scope Notice */}
        <div style={{
          marginBottom: '30px',
          padding: '16px',
          backgroundColor: 'rgba(74, 222, 128, 0.05)',
          borderRadius: '8px',
          border: '1px solid rgba(74, 222, 128, 0.2)',
          fontSize: '12px',
          color: '#aaa',
          lineHeight: '1.5'
        }}>
          <strong style={{ color: '#4ade80' }}>{t('welcome.longtermistScope')}</strong> Expanded scenarios including wild animal suffering, invertebrate welfare (shrimp/insects), AI systems managing animals, and potential AI sentience recognition. Explore the full scope of welfare ethics across billions of years and trillions of beings—both animals and potentially sentient AI systems—understanding how today's governance choices shape the welfare landscape for future generations.
        </div>

        {/* CTA */}
        <button
          onClick={handleClose}
          style={{
            width: '100%',
            padding: '16px',
            backgroundColor: '#60a5fa',
            color: '#000',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: 700,
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#3b82f6'
            e.currentTarget.style.transform = 'translateY(-1px)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#60a5fa'
            e.currentTarget.style.transform = 'translateY(0)'
          }}
        >
          {t('buttons.begin')}
        </button>

        {/* Footer */}
        <div style={{
          marginTop: '20px',
          fontSize: '11px',
          color: '#666',
          textAlign: 'center'
        }}>
          {t('welcome.footer')}
        </div>
      </div>
    </div>
  )
}
