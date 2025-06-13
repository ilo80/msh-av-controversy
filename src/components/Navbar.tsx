import logo from "../assets/logo/logo.svg"

function Navbar() {
  return (
    <nav id="navbar" className="navbar">
      {/* <h1 className="navbar-title">La revue du savoir</h1> */}
      <img src={logo} alt="Logo" style={{ width: '100px' }} />
      <ul className="navbar-links">
          <li><a href="#introduction">Introduction</a></li>
          <li><a href="#actors">Acteurs</a></li>
          <li><a href="#timeline">Chronologie</a></li>
          <li><a href="#graph">Cartographie</a></li>
      </ul>
    </nav>
  )
}

export default Navbar;