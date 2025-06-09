import { useEffect, useRef } from 'react'

interface ScrollSectionProps {
  children: React.ReactNode
  className?: string
}

function ScrollSection({ children, className }: ScrollSectionProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, { threshold: 0.2 })

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className={`scroll-section ${className ?? ''}`}>
      {children}
    </section>
  )
}

export default ScrollSection
