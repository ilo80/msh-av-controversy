import terminologyData from "../data/terminologyData";
import FlipCard from './FlipCard';

function Terminology() {
  return (
    <section id="terminology" className="terminology-section">
        <div style={{ width: '100%' }} className='terminology-content'>
            <h1 className="terminology-title">Terminologie</h1>
            <div className="definitions-grid">
                {terminologyData.map((term) => (
                    <FlipCard
                    key={term.id}
                    front={term.term}
                    back={term.definition}
                    />
                ))}
            </div>
      </div>
    </section>
  );
}

export default Terminology;
