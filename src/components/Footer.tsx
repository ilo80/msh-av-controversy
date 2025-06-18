import { HashLink } from 'react-router-hash-link';

import logoESIEE from '../assets/logo/logo-esiee.svg';

function Footer() {
  return (
    <footer>
      <div className="footer-wrapper">
        <div>
          <ul className="footer-links">
            <li>
              <a
                href="https://drive.google.com/file/d/1kQ4sE6_k0XguLyodEm3VT5Or2VAzVTbk/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                📌 Affiche de controverse
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1iYxwIPUbEPj-U2RTwNTX6eDa0d4MEBli/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                📘 Livret de controverse
              </a>
            </li>
            <li>
              <HashLink
                to="/sources"
                smooth
              >
                📚 Voir les sources
              </HashLink>
            </li>
          </ul>
        </div>
        <div>
          <p style={{ margin: 0, lineHeight: 1.5 }}>
            &copy; {new Date().getFullYear()} La revue du savoir. <br />
            <a
              href="https://www.controverses-esiee.fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Controverses ESIEE
            </a>{' '}
            –{' '}
            <a
              href="https://www.esiee.fr"
              target="_blank"
              rel="noopener noreferrer"
            >
              ESIEE Paris
            </a>
          </p>
        </div>
        <div>
          <img
            className="esiee-logo"
            src={logoESIEE}
            alt="Logo ESIEE Paris"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
