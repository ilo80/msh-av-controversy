
import ActorsGraph from './components/ActorsGraph'
import ActorSection from './components/ActorSection'

function App() {
  
  return (
    <div className="container">
      <div className="content-container">
        <h1>Bienvenue</h1>
        <p>Ceci est un site sur la controverse des voitures autonomes</p>
      </div>
      <ActorsGraph />
      <ActorSection />
    </div>
  )
}

export default App
