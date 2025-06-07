
import ActorsGraph from './components/ActorsGraph.tsx'

function App() {
  
  return (
    <div className="container">
      <div className="content-container">
        <h1>Bienvenue</h1>
        <p>Ceci est un site sur la controverse des voitures autonomes</p>
      </div>
      <div style={{ height: '600px' }}>
        <ActorsGraph />
      </div>
    </div>
  )
}

export default App
