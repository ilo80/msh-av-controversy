import { useState } from 'react'
import actorGraphData from '../data/actorsData'
import type { Actor } from '../models/actor/actor'
import { ProgressBar } from './ProgressBar'

const opinionColors: Record<string, string> = {
  'Farouchement opposés': '#e53e3e',
  'Plutôt défavorable': '#dd6b20',
  Prudents: '#d69e2e',
  Neutres: '#4a5568',
  'Partisan convaincu': '#38a169',
}

function ActorSection() {
  const actors = actorGraphData.nodes
  const [index, setIndex] = useState(0)

  const actor = actors[index] as Actor
  const opinionColor = opinionColors[actor.opinion] ?? '#718096'

  return (
    <div className="actor-section">
      <img src={actor.image} alt={actor.name} className="actor-section-image" />
      <div className="actor-section-info">
        <h2>{actor.name}</h2>
        <div className="actor-section-opinion" style={{ backgroundColor: opinionColor }}>
          {actor.opinion}
        </div>
        <ProgressBar
          value={actor.engagement}
          text={`Engagement : ${Math.round(actor.engagement * 100)}%`}
        />
        <p className="actor-section-description">{actor.description}</p>
        <h3>Arguments</h3>
        <ul className="actor-section-arguments">
          {actor.arguments.map((arg, i) => (
            <li key={i}>{arg}</li>
          ))}
        </ul>
        <div className="actor-section-controls">
          <button disabled={index === 0} onClick={() => setIndex(i => Math.max(0, i - 1))}>
            Précédent
          </button>
          <button
            disabled={index === actors.length - 1}
            onClick={() => setIndex(i => Math.min(actors.length - 1, i + 1))}
          >
            Suivant
          </button>
        </div>
      </div>
    </div>
  )
}

export default ActorSection
