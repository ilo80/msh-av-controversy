import { useState, useRef, useEffect } from 'react'
import timelineData from '../data/timelineData'

function TimelineSection() {
  const [selected, setSelected] = useState(0)
  const trackRef = useRef<HTMLDivElement>(null)

  // Scroll au point sélectionné quand on change d’event
  useEffect(() => {
    const node = trackRef.current?.children[selected] as HTMLElement
    if (node && trackRef.current) {
      const offset = node.offsetLeft - trackRef.current.offsetWidth / 2 + node.offsetWidth / 2
      trackRef.current.scrollTo({ left: offset, behavior: 'smooth' })
    }
  }, [selected])

  // Support scroll molette
  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (trackRef.current) {
      e.preventDefault()
      trackRef.current.scrollLeft += e.deltaY
    }
  }

  // Gère navigation clavier (optionnel)
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') setSelected(i => Math.min(i + 1, timelineData.length - 1))
      if (e.key === 'ArrowLeft') setSelected(i => Math.max(i - 1, 0))
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  return (
    <section
      style={{
        width: '100%',
        minHeight: '480px',
        color: 'black',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '4rem 0'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '3rem' }}>
        <div style={{ textAlign: 'center', minWidth: 380 }}>
          <h2 style={{ fontSize: 32, margin: 0, fontWeight: 700 }}>
            {timelineData[selected].title}
          </h2>
          <div style={{ fontSize: 18, margin: '12px 0 0 0', opacity: 0.9 }}>
            {timelineData[selected].description}
          </div>
          <div style={{ marginTop: 12, fontSize: 16, opacity: 0.7 }}>
            {timelineData[selected].date || timelineData[selected].year}
          </div>
        </div>
      </div>

      <div
        ref={trackRef}
        className="timeline-track"
        style={{
          display: 'flex',
          alignItems: 'center',
          // gap: 100,
          justifyContent: "space-between",
          overflowX: 'auto',
          width: '90%',
          padding: '2rem 0 0 0',
          position: 'relative',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }}
        onWheel={handleWheel}
        tabIndex={0}
      >
        {/* LIGNE */}
        <div
          style={{
            position: 'absolute',
            top: "50%",
            left: 24,
            right: 0,
            height: 4,
            background: '#3a3a3a',
            zIndex: 0,
          }}
        />
        {timelineData.map((event, i) => (
          <div
            key={event.id}
            tabIndex={0}
            onClick={() => setSelected(i)}
            style={{
              position: 'relative',
              zIndex: 1,
              color: "black",
              flex: '0 0 64px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              cursor: 'pointer',
              marginLeft: i === 0 ? 0 : 0,
              marginRight: 0
            }}
          >
            <div
              style={{
                width: i === 0 ? 48 : 32,
                height: i === 0 ? 48 : 32,
                borderRadius: '50%',
                background: selected === i ? selected === 0 ? "green" : "blue" : '#444',
                border: selected === i ? '4px solid #60a5fa' : '4px solid #181818',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s'
              }}
            >
              {i === 0 ? (
                <span style={{ color: 'black', fontSize: 20, fontWeight: 700 }}>&#9658;</span>
              ) : null}
            </div>
            <div style={{
              marginTop: 6,
              fontSize: 18,
              color: 'black',
              fontWeight: selected === i ? 700 : 400,
              opacity: selected === i ? 1 : 0.6
            }}>
              {event.year}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TimelineSection
