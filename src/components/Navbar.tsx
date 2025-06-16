import logo from "../assets/logo/logo.svg"

function Navbar() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const targetId = e.currentTarget.getAttribute("href");
    if (!targetId) return;

    const targetElement = document.querySelector(targetId);
    if (!targetElement) return;

    targetElement.scrollIntoView({ behavior: "smooth" });
    document.body.style.overflow = ""; // Reset overflow to default
  }

  return (
    <nav id="navbar" className="navbar">
      {/* <h1 className="navbar-title">La revue du savoir</h1> */}
      <img src={logo} alt="Logo" style={{ width: '100px' }} />
      <ul className="navbar-links">
          <li><a href="#introduction" onClick={handleClick}>Introduction</a></li>
          <li><a href="#actors" onClick={handleClick}>Acteurs</a></li>
          <li><a href="#timeline" onClick={handleClick}>Chronologie</a></li>
          <li><a href="#graph" onClick={handleClick}>Cartographie</a></li>
      </ul>
    </nav>
  )
}

export default Navbar;