import type { ProgressBarProps } from "../models/graph/progress-bar";

export function ProgressBar({ value, text }: ProgressBarProps) {
  const safeValue = Math.max(0, Math.min(1, value))

  return (
    <div className="progress-bar-container">
      <div
        className="progress-bar-fill"
        style={{
          clipPath: `inset(0 ${100 - safeValue * 100}% 0 0)`,
        }}
      />
      <span 
        className="progress-bar-text"
        style={{
          color: (safeValue > 0.75 ? "#FFFFFF" : "#000000"),
        }}
      >{text}</span>
    </div>
  )
}