import ActorsGraph from './components/ActorsGraph'
import ActorsList from './components/ActorsList'
import ArgumentsSection from './components/ArgumentsSection'
import ScrollSection from './components/ScrollSection'
import Timeline from './components/Timeline'

function App() {
  return (
    <div className="container">
      <ScrollSection className="intro">
        <h1>Voitures autonomes : quelles controverses ?</h1>
        <p>
          Les promesses de l\'autonomie s\'accompagnent de questionnements sur la
          sécurité, l\'emploi et la protection des données. Cette page présente
          les principaux acteurs et arguments de ce débat.
        </p>
      </ScrollSection>
      <Timeline />
      <ScrollSection>
        <h2>Les acteurs</h2>
        <ActorsList />
      </ScrollSection>
      <ScrollSection>
        <h2>Arguments clés</h2>
        <ArgumentsSection />
      </ScrollSection>
      <ScrollSection>
        <h2>Cartographie des relations</h2>
        <ActorsGraph />
      </ScrollSection>
    </div>
  )
}

export default App
