import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="not-found">
      <h2>Erreur 404</h2>
      <p>Désolé, la page que vous recherchez n'existe pas.</p>
      <Link to="/" className="back-home">
        Retour à la page d'accueil
      </Link>
    </div>
  );
}

export default NotFound;