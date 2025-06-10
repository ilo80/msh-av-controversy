function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">Controverse</h1>
        <ul className="navbar-links">
            <li><a href="#introduction-container">Introduction</a></li>
            <li><a href="#actor-section">Acteurs</a></li>
            <li><a href="#timeline-section">Chronologie</a></li>
            <li><a href="#graph-container">Cartographie</a></li>
        </ul>
    </nav>
  )
}

export default Navbar;