
import ActorsGraph from './components/ActorsGraph'
import ActorSection from './components/ActorSection'
import IntroductionSection from './components/Introduction'
import TimelineSection from './components/TimelineSection'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <div className="container">
      <Navbar />
      <IntroductionSection />
      <ActorSection />
      <TimelineSection />
      <ActorsGraph />
      <Footer />
    </div>
  )
}

export default App
