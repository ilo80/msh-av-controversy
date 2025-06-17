import logoESIEE from '../assets/logo/logo-esiee.svg'

function Footer() {
  return (
    <footer>
      <div className="footer-wrapper">
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
          <img className="esiee-logo"
            src={logoESIEE}
            alt="Logo ESIEE Paris"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
