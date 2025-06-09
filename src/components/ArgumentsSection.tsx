import actorGraphData from '../data/actorsData'

function ArgumentsSection() {
  const args = Array.from(
    new Set(actorGraphData.nodes.flatMap(actor => actor.arguments)),
  )

  return (
    <ul className="arguments-list">
      {args.map((arg, index) => (
        <li key={index} className="argument-item">
          {arg}
        </li>
      ))}
    </ul>
  )
}

export default ArgumentsSection
