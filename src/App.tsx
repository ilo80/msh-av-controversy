
import ActorsGraph from './components/ActorsGraph'
import ActorSection from './components/ActorSection'
import IntroductionSection from './components/Introduction'
import TimelineSection from './components/TimelineSection'

function App() {
  return (
    <div className="container">
      <IntroductionSection />
      <ActorSection />
      <TimelineSection />
      <ActorsGraph />
    </div>
  )
}

export default App
