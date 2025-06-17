import { useState, useEffect } from "react";
import Hamburger from "hamburger-react";
import logo from "../assets/logo/logo.svg"

function Navbar() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [displayHamburger, setDisplayHamburger] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const targetId = e.currentTarget.getAttribute("href");
    if (!targetId) return;

    const targetElement = document.querySelector(targetId);
    if (!targetElement) return;

    toggleHamburger();

    targetElement.scrollIntoView({ behavior: "smooth" });
    document.body.style.overflow = ""; // Reset overflow to default
  }

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
    document.body.style.overflow = hamburgerOpen ? "" : "hidden"; // Prevent scrolling when menu is open
  };

  useEffect(() => {
    // Check initial window width
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleResize = () => {
    if (window.innerWidth > 768) {
      setDisplayHamburger(false);
      // setHamburgerOpen(false);
    } else {
      setDisplayHamburger(true);
    }
  };

  return (
    <nav id="navbar" className="navbar">
      {/* <h1 className="navbar-title">La revue du savoir</h1> */}
      <img src={logo} alt="Logo" style={{ width: '100px' }} />
      { displayHamburger && (
        <div className="burger-navbar">
          <Hamburger
            toggled={hamburgerOpen}
            toggle={toggleHamburger}
            size={30}
            color="#000"
          />
        </div>
      )}

      { !displayHamburger && (
        <ul className="navbar-links">
          <li><a href="#introduction" onClick={handleClick}>Introduction</a></li>
          <li><a href="#actors" onClick={handleClick}>Acteurs</a></li>
          <li><a href="#timeline" onClick={handleClick}>Chronologie</a></li>
          <li><a href="#graph" onClick={handleClick}>Cartographie</a></li>
        </ul>
      )}

      { hamburgerOpen && (
        <div className="mobile-menu">
          <ul className="mobile-navbar">
            <li><a href="#introduction" onClick={handleClick}>Introduction</a></li>
            <li><a href="#actors" onClick={handleClick}>Acteurs</a></li>
            <li><a href="#timeline" onClick={handleClick}>Chronologie</a></li>
            <li><a href="#graph" onClick={handleClick}>Cartographie</a></li>
          </ul>
        </div>
      )}

    </nav>
  )
}

export default Navbar;