import type { ProgressBarProps } from "../models/graph/progress-bar";

export function ProgressBar({ value }: ProgressBarProps) {
  const safeValue = Math.max(0, Math.min(1, value))

  return (
    <div
      style={{
        width: '100%',
        height: 16,
        borderRadius: 7,
        background: '#edf2f7',
        margin: '8px 0',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          background: 'linear-gradient(90deg, #e53e3e 0%, #d69e2e 50%, #38a169 100%)',
          position: 'absolute',
          left: 0,
          top: 0,
          zIndex: 1,
          clipPath: `inset(0 ${100 - safeValue * 100}% 0 0)`,
          transition: 'clip-path 0.3s'
        }}
      />
    </div>
  )
}