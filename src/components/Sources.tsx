import sourcesData from '../data/sourcesData';
import type { Source } from '../models/source/source';

const SourceCard: React.FC<{ source: Source }> = ({ source }) => {
  return (
    <div className="source-card">
      <h3>{source.title}</h3>
      <div className='source-content'>
        {source.authors && <span className='source-authors'><strong>Auteurs:</strong> {source.authors.join(', ')}</span>}
        {source.translators && <span className='source-translators'><strong>Traducteurs:</strong> {source.translators.join(', ')}</span>}
        {source.organization && <span className='source-organization'><strong>Organisation:</strong> {source.organization}</span>}
        {source.date && <span className='source-date'><strong>Date:</strong> {source.date}</span>}
      </div>
      <a href={source.url} className='source-link' target="_blank" rel="noopener noreferrer">Voir la source ↗</a>
    </div>
  );
};

const Sources: React.FC = () => {
  return (
    <div className="source-viewer">
      <h2>Liste des Sources</h2>
      <div className="source-grid">
        {sourcesData.map(source => (
          <SourceCard key={source.id} source={source} />
        ))}
      </div>
    </div>
  );
};

export default Sources;
