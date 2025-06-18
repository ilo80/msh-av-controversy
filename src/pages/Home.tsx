
import ActorsGraph from '../components/ActorsGraph'
import ActorSection from '../components/ActorSection'
import IntroductionSection from '../components/Introduction'
import TimelineSection from '../components/TimelineSection'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import StatisticsSection from '../components/StatisticsSection'
import Terminology from '../components/Terminology'

function Home() {
  return (
    <div className="container">
      <Navbar />
      <IntroductionSection />
      <Terminology />
      <ActorSection />
      <TimelineSection />
      <StatisticsSection />
      <ActorsGraph />
      <Footer />
    </div>
  )
}

export default Home;
