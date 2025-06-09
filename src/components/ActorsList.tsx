import actorGraphData from '../data/actorsData'

function ActorsList() {
  return (
    <div className="actors-list">
      {actorGraphData.nodes.map(actor => (
        <div key={actor.id} className="actor-card">
          <img src={actor.image} alt={actor.name} />
          <h3>{actor.name}</h3>
          <p>{actor.description}</p>
        </div>
      ))}
    </div>
  )
}

export default ActorsList
