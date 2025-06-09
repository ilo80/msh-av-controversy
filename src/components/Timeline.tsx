import ScrollSection from './ScrollSection'

const events = [
  { date: '2010', description: 'premiers développements des voitures autonomes' },
  { date: '2016', description: 'tests sur route ouverte' },
  { date: '2020', description: 'accidents médiatisés et débats éthiques' },
  { date: '2024', description: 'discussions réglementaires intensifiées' },
]

function Timeline() {
  return (
    <ScrollSection className="timeline">
      <div className="timeline-line" />
      {events.map(event => (
        <div key={event.date} className="timeline-item">
          <strong>{event.date}</strong> {event.description}
        </div>
      ))}
    </ScrollSection>
  )
}

export default Timeline
