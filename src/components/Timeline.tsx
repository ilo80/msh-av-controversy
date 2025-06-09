import { useEffect, useRef } from 'react'
import ScrollSection from './ScrollSection'

const events = [
  { date: '2010', description: 'premiers développements des voitures autonomes' },
  { date: '2016', description: 'tests sur route ouverte' },
  { date: '2020', description: 'accidents médiatisés et débats éthiques' },
  { date: '2024', description: 'discussions réglementaires intensifiées' },
]

function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const items = containerRef.current?.querySelectorAll('.timeline-event')
    if (!items) return

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, { threshold: 0.2 })

    items.forEach(item => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  return (
    <ScrollSection className="timeline">
      <div ref={containerRef} className="timeline-container">
        <div className="timeline-line" />
        {events.map(event => (
          <div key={event.date} className="timeline-event">
            <div className="event-date">{event.date}</div>
            <p className="event-description">{event.description}</p>
          </div>
        ))}
      </div>
    </ScrollSection>
  )
}

export default Timeline
