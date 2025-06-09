
import ActorsGraph from './components/ActorsGraph'
import ActorSection from './components/ActorSection'
import IntroductionSection from './components/Introduction'

function App() {
  return (
    <div className="container">
      <IntroductionSection />
      <ActorSection />
      <ActorsGraph />
    </div>
  )
}

export default App
