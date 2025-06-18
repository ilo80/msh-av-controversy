import terminologyData from '../data/terminologyData';
import type { Terminology } from '../models/terminology/terminology';

function Terminology() {
  return (
    <section id="terminology" className="terminology-container">      
        <h1 className="terminology-title">Terminologie</h1>
        <div className="definitions-area">
            <div className="definition">
                <div className="definition-front">
                    <h2>Voiture autonome</h2>
                </div>
                <div className="definition-back">
                    <p>Voiture capable de rouler sans intervention humaine selon différents niveaux d’autonomie</p> 
                </div>
            </div>
        </div>
    </section>
  )
}

export default Terminology
