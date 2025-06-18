import { useState, useEffect } from "react";
import Hamburger from "hamburger-react";

import logo from "../assets/logo/logo.svg"
import { HashLink } from 'react-router-hash-link';

function Navbar() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [displayHamburger, setDisplayHamburger] = useState(false);

  const handleClick = () => {
    // Close the hamburger menu if it's open
    if (hamburgerOpen)
      toggleHamburger();

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
          <li><HashLink smooth to="/#introduction" onClick={handleClick}>Introduction</HashLink></li>
          <li><HashLink smooth to="#terminology" onClick={handleClick}>Terminologie</HashLink></li>
          <li><HashLink smooth to="/#actors" onClick={handleClick}>Acteurs</HashLink></li>
          <li><HashLink smooth to="/#timeline" onClick={handleClick}>Chronologie</HashLink></li>
          <li><HashLink smooth to="/#statistics" onClick={handleClick}>Statistiques</HashLink></li>
          <li><HashLink smooth to="/#graph" onClick={handleClick}>Cartographie</HashLink></li>
        </ul>
      )}

      { hamburgerOpen && (
        <div className="mobile-menu">
          <ul className="mobile-navbar">
            <li><HashLink smooth to="/#introduction" onClick={handleClick}>Introduction</HashLink></li>
            <li><HashLink smooth to="#terminology" onClick={handleClick}>Terminologie</HashLink></li>
            <li><HashLink smooth to="/#actors" onClick={handleClick}>Acteurs</HashLink></li>
            <li><HashLink smooth to="/#timeline" onClick={handleClick}>Chronologie</HashLink></li>
            <li><HashLink smooth to="/#statistics" onClick={handleClick}>Statistiques</HashLink></li>
            <li><HashLink smooth to="/#graph" onClick={handleClick}>Cartographie</HashLink></li>
          </ul>
        </div>
      )}

    </nav>
  )
}

export default Navbar;