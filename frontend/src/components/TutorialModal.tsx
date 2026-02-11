import { useState } from 'react'
import { t } from '../utils/i18n'

interface TutorialModalProps {
  onClose: () => void
}

export default function TutorialModal({ onClose }: TutorialModalProps) {
  const [step, setStep] = useState(0)
  
  const steps = [
    {
      title: 'Welcome to the AI & Animal Welfare Governance Simulator',
      content: (
        <div>
          <p style={{ marginBottom: '16px', lineHeight: '1.6' }}>
            This interactive tool helps you understand how governance decisions impact both <strong>animal welfare</strong> and <strong>AI systems managing animals</strong> over time.
            You'll make decisions that affect both <strong>measured outcomes</strong> (what organizations track)
            and <strong>governance debt</strong> (hidden long-term costs).
          </p>
          <p style={{ marginBottom: '16px', lineHeight: '1.6' }}>
            AI systems are already managing millions of animals—monitoring behavior, assessing welfare, optimizing environments. With welfare integrated into AI governance frameworks, you'll decide how to ensure these systems prioritize welfare rather than just efficiency. Navigate through 5 phases with decision points covering both animal welfare and AI governance. Each choice has consequences that compound over time—this simulator takes a <strong>longtermist perspective</strong>, exploring how today's decisions shape outcomes across decades and generations.
          </p>
          <p style={{ lineHeight: '1.6', fontSize: '13px', color: '#888', fontStyle: 'italic' }}>
            Part of the Electric Sheep/Futurekind ecosystem, exploring governance for both animals and AI systems across vast timescales.
          </p>
        </div>
      )
    },
    {
      title: t('tutorial.globe'),
      content: (
        <div>
          <p style={{ marginBottom: '16px', lineHeight: '1.6' }}>
            The globe visualizes welfare status across regions. You can switch between three views:
          </p>
          <ul style={{ marginLeft: '20px', lineHeight: '1.8' }}>
            <li><strong>Welfare Standards</strong> - Current adoption levels</li>
            <li><strong>Welfare Debt</strong> - Accumulated compromises</li>
            <li><strong>Enforcement</strong> - Policy enforcement levels</li>
          </ul>
          <p style={{ marginTop: '16px', lineHeight: '1.6' }}>
            Hover over regions to see detailed values. Arcs show supply chains and regulatory flows.
            Rings indicate recent events like policy shifts or welfare incidents.
          </p>
        </div>
      )
    },
    {
      title: t('tutorial.decisions'),
      content: (
        <div>
          <p style={{ marginBottom: '16px', lineHeight: '1.6' }}>
            For each decision node, you'll make choices about both animal welfare and AI systems managing animals:
          </p>
          <ul style={{ marginLeft: '20px', lineHeight: '1.8' }}>
            <li><strong>Read the context</strong> - Understand the situation, including how AI systems are involved</li>
            <li><strong>Review advisor recommendations</strong> - Research-backed advice from experts on both animal welfare and AI governance</li>
            <li><strong>Hover over choices</strong> - See predicted impact before selecting (affects both animals and AI systems)</li>
            <li><strong>Record your rationale</strong> - Document your thinking about welfare and AI governance</li>
            <li><strong>Note assumptions</strong> - Track what you're assuming about animals, AI systems, or both</li>
          </ul>
          <p style={{ marginTop: '16px', lineHeight: '1.6' }}>
            Use keyboard shortcuts (1-5) to quickly select choices. Choices are randomized per node to prevent memorization.
          </p>
        </div>
      )
    },
    {
      title: t('tutorial.metrics'),
      content: (
        <div>
          <p style={{ marginBottom: '16px', lineHeight: '1.6' }}>
            The metrics panel shows two categories, tracking both animal welfare and AI system impacts:
          </p>
          <ul style={{ marginLeft: '20px', lineHeight: '1.8' }}>
            <li><strong>Measured Metrics</strong> - What organizations typically track (efficiency, costs, incidents, welfare adoption)</li>
            <li><strong>Governance Debt</strong> - Hidden costs that compound over time (debt, enforcement gaps, irreversibility, AI system lock-in)</li>
          </ul>
          <p style={{ marginTop: '16px', lineHeight: '1.6' }}>
            Hover over any metric to see explanations, real-world examples, and research citations.
            Sparklines show trends over time. Warning icons (⚠️) indicate dangerous levels—including when AI systems are optimizing for wrong metrics or when welfare requirements aren't being met.
          </p>
        </div>
      )
    },
    {
      title: 'Key Mechanics',
      content: (
        <div>
          <ul style={{ marginLeft: '20px', lineHeight: '1.8' }}>
            <li><strong>AI Systems Managing Animals</strong> - AI systems are already deployed, monitoring and making decisions. Your choices determine whether they optimize for welfare or efficiency</li>
            <li><strong>Memory Decay</strong> - Assumptions weaken over time unless reaffirmed (applies to both animal welfare and AI governance)</li>
            <li><strong>System Irreversibility</strong> - Some choices become locked as systems become harder to change, modeling long-term lock-in (including AI system dependencies)</li>
            <li><strong>Governance Debt</strong> - Short-term compromises create long-term problems that compound over decades (affects both animals and AI oversight)</li>
            <li><strong>Case Studies</strong> - Each decision links to real-world examples of animal welfare and AI governance</li>
            <li><strong>Longtermist Framing</strong> - Decisions are evaluated for their impact across generations, considering both animals and potentially sentient AI systems</li>
          </ul>
          <p style={{ marginTop: '16px', lineHeight: '1.6' }}>
            All your decisions are tracked throughout the simulation. At the end, you'll get a post-mortem report
            showing your trajectory and key insights—including how your choices created or avoided long-term lock-in for both animals and AI systems.
          </p>
        </div>
      )
    },
    {
      title: t('tutorial.ready'),
      content: (
        <div>
          <p style={{ marginBottom: '16px', lineHeight: '1.6' }}>
            You're ready to begin! Remember:
          </p>
          <ul style={{ marginLeft: '20px', lineHeight: '1.8' }}>
            <li>There are no "right" answers - explore different paths for both animal welfare and AI governance</li>
            <li>Pay attention to both measured and unmeasured impacts (affects both animals and AI systems)</li>
            <li><strong>Consider the long-term consequences</strong> - How will your choices affect future generations? What systems are you locking in? How will AI systems evolve?</li>
            <li>Review advisor recommendations for research-backed insights on both animals and AI</li>
            <li>Think about <strong>irreversibility</strong> - Which decisions create path dependencies that future generations can't easily undo? This includes AI system lock-in</li>
            <li><strong>AI systems are already managing animals</strong> - Your decisions shape whether they prioritize welfare or efficiency</li>
          </ul>
          <p style={{ marginTop: '16px', lineHeight: '1.6', fontStyle: 'italic' }}>
            This simulator is part of the Electric Sheep/Futurekind ecosystem - exploring governance
            for both animals and AI systems across vast timescales, considering the welfare of trillions of beings (animals and potentially sentient AI) across billions of years.
          </p>
        </div>
      )
    }
  ]
  
  const currentStep = steps[step]
  const isFirst = step === 0
  const isLast = step === steps.length - 1
  
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.95)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 10000,
      padding: '20px'
    }}>
      <div style={{
        backgroundColor: '#000000',
        borderRadius: '12px',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        maxWidth: '600px',
        width: '100%',
        maxHeight: '90vh',
        overflowY: 'auto',
        padding: '32px',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 600, color: '#fff', margin: 0 }}>
            {currentStep.title}
          </h2>
          <button
            onClick={onClose}
            style={{
              padding: '8px 16px',
              backgroundColor: 'transparent',
              color: '#888',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '14px'
            }}
          >
            {t('buttons.skip')}
          </button>
        </div>
        
        <div style={{
          fontSize: '14px',
          color: '#bbb',
          lineHeight: '1.6',
          marginBottom: '32px',
          minHeight: '200px'
        }}>
          {currentStep.content}
        </div>
        
        {/* Progress indicator */}
        <div style={{ marginBottom: '24px' }}>
          <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
            {steps.map((_, idx) => (
              <div
                key={idx}
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: idx === step ? '#3b82f6' : idx < step ? '#60a5fa' : 'rgba(255, 255, 255, 0.2)',
                  transition: 'background-color 0.2s'
                }}
              />
            ))}
          </div>
          <div style={{ textAlign: 'center', fontSize: '12px', color: '#888', marginTop: '8px' }}>
            Step {step + 1} of {steps.length}
          </div>
        </div>
        
        {/* Navigation buttons */}
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px' }}>
          <button
            onClick={() => setStep(Math.max(0, step - 1))}
            disabled={isFirst}
            style={{
              padding: '10px 20px',
              backgroundColor: isFirst ? 'transparent' : '#111111',
              color: isFirst ? '#666' : '#fff',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '6px',
              cursor: isFirst ? 'not-allowed' : 'pointer',
              fontSize: '14px',
              opacity: isFirst ? 0.5 : 1
            }}
          >
            {t('buttons.previous')}
          </button>
          <button
            onClick={() => {
              if (isLast) {
                onClose()
              } else {
                setStep(step + 1)
              }
            }}
            style={{
              padding: '10px 20px',
              backgroundColor: '#2563eb',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: 600
            }}
          >
            {isLast ? t('buttons.getStarted') : t('buttons.next')}
          </button>
        </div>
      </div>
    </div>
  )
}
