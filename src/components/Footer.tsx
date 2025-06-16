import logoESIEE from '../assets/logo/logo-esiee.svg'

function Footer() {
  return (
    <footer
      style={{
        width: '100%',
        padding: '3rem 1rem',
        background: '#f9f9f9',
        borderTop: '1px solid #eaeaea',
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1.5rem',
        }}
      >
        <div style={{ flex: 1, minWidth: 280 }}>
          <p style={{ margin: 0, lineHeight: 1.5 }}>
            &copy; {new Date().getFullYear()} La revue du savoir. <br />
            <a
              href="https://www.controverses-esiee.fr"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#0066cc', textDecoration: 'underline' }}
            >
              Controverses ESIEE
            </a>{' '}
            –{' '}
            <a
              href="https://www.esiee.fr"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#0066cc', textDecoration: 'underline' }}
            >
              ESIEE Paris
            </a>
          </p>
        </div>
        <div>
          <img
            src={logoESIEE}
            alt="Logo ESIEE Paris"
            style={{ height: 48 }}
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
