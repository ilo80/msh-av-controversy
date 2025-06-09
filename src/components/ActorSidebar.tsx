import type { Actor } from '../models/actor/actor'

interface ActorSidebarProps {
  actor: Actor | null
  onClose: () => void
}

const opinionColors: Record<string, string> = {
  'Farouchement opposés': '#e53e3e',
  'Plutôt défavorable': '#dd6b20',
  "Prudents": '#d69e2e',
  'Neutres': '#4a5568',
  'Partisan convaincu': '#38a169',
}

function getEngagementColor(engagement: number): string {
  if (engagement > 0.7) return '#38a169'
  if (engagement > 0.4) return '#d69e2e'
  return '#e53e3e'
}

function ActorSidebar({ actor, onClose }: ActorSidebarProps) {
  if (!actor) return null

  const opinionColor = opinionColors[actor.opinion] ?? '#718096'
  const engagementColor = getEngagementColor(actor.engagement)

  return (
    <aside className="sidebar">
      <button className="close-button" onClick={onClose}>
        ×
      </button>
      <h2>{actor.name}</h2>
      <img src={actor.image} alt={actor.name} className="sidebar-image" />
      <div className="opinion" style={{ backgroundColor: opinionColor }}>
        {actor.opinion}
      </div>
      <div className="engagement">
        <span
          className="engagement-bullet"
          style={{ backgroundColor: engagementColor }}
        />
        Engagement: {actor.engagement}
      </div>
      <p className="description">{actor.description}</p>
      <h3>Arguments</h3>
      <ul className="arguments-list">
        {actor.arguments.map((arg, index) => (
          <li key={index} className="argument-item">
            {arg}
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default ActorSidebar
