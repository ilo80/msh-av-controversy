import logoESIEE from '../assets/logo/logo-esiee.svg'

function Footer() {
  return (
    <footer
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1.5rem',
        padding: '1rem 2rem',
        background: '#f9f9f9',
        borderTop: '1px solid #eaeaea',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
      }}
    >
      <div>
        <p style={{ margin: 0 }}>
          &copy; {new Date().getFullYear()} La revue du savoir. <br />
          <a 
            href="https://www.controverses-esiee.fr"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#0066cc', textDecoration: 'underline' }}
          >
            Controverses ESIEE
          </a> – 
          <a 
            href="https://www.esiee.fr"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#0066cc', textDecoration: 'underline', marginLeft: 6 }}
          >
            ESIEE Paris
          </a>
        </p>
      </div>
      <div>
        <img
          src={logoESIEE}
          alt="Logo ESIEE Paris"
          style={{ height: 48, marginLeft: 10 }}
        />
      </div>
    </footer>
  );
}

export default Footer;
