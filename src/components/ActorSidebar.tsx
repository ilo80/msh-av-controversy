import type { Actor } from '../models/actor/actor'
import { ProgressBar } from './ProgressBar'

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

function ActorSidebar({ actor, onClose }: ActorSidebarProps) {
  if (!actor) return null

  const opinionColor = opinionColors[actor.opinion] ?? '#718096'

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
        <ProgressBar value={actor.engagement} text={`Engagement : ${Math.round(actor.engagement * 100)}%`} />
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
