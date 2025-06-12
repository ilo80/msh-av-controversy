import { useRef, useState, useEffect } from 'react'
import actorGraphData from '../data/actorsData'
import type { Actor } from '../models/actor/actor'
import { ProgressBar } from './ProgressBar'

const opinionColors: Record<string, string> = {
  'Farouchement opposés': '#e53e3e',
  'Plutôt défavorable': '#dd6b20',
  'Prudents': '#d69e2e',
  'Neutres': '#4a5568',
  'Partisan convaincu': '#38a169',
}

function ActorSection() {
  const actors = actorGraphData.nodes
  const [index, setIndex] = useState(0)
  const lastScrollRef = useRef(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const hasInteracted = useRef(false) // To track if the user has interacted with the component

  const actor = actors[index] as Actor
  const opinionColor = opinionColors[actor.opinion] ?? '#718096'

  // Bloque le scroll body pendant la navigation d’acteurs
  useEffect(() => {
    const shouldBlockScroll = index > 0 && index < actors.length - 1
    if (shouldBlockScroll) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [index, actors.length])

  // Center the component ONLY after a real user interaction
  useEffect(() => {
    if (hasInteracted.current) {
      setTimeout(() => {
        containerRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        })
      }, 0)
    }
    // else we don't scroll into view on initial load
  }, [index])

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    hasInteracted.current = true // Launch interaction on first scroll

    const now = Date.now()
    if (now - lastScrollRef.current < 300) return
    lastScrollRef.current = now

    if (e.deltaY > 0 && index < actors.length - 1) setIndex(i => i + 1)
    if (e.deltaY < 0 && index > 0) setIndex(i => i - 1)
  }

  return (
    <div
      id="actors"
      className="actor-section"
      onWheel={handleWheel}
      ref={containerRef}
      tabIndex={0}
      style={{ outline: 'none' }}
    >
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
      </div>
    </div>
  )
}

export default ActorSection
