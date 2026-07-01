import "./Navbar.css";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Education",
    "Contact",
  ];

  return (
    <header className={scroll ? "navbar active" : "navbar"}>
      <div className="nav-container">

        {/* Logo */}

        <div className="logo">

          <div className="logo-circle">
            AG
          </div>

          <h2>
            Aditya <span>Giri</span>
          </h2>

        </div>

        {/* Navigation */}

        <ul className={menuOpen ? "nav-links open" : "nav-links"}>

          {navLinks.map((item) => (

            <li key={item}>

              <Link
                to={item.toLowerCase()}
                smooth={true}
                duration={600}
                offset={-80}
                spy={true}
                activeClass="active-link"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </Link>

            </li>

          ))}

        </ul>

        {/* Right */}

        <div className="nav-right">

          <Link
            to="contact"
            smooth={true}
            duration={600}
            offset={-80}
            className="hire-btn"
           >
           Hire Me
          </Link>
          <div
            className="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <HiOutlineX />
            ) : (
              <HiOutlineMenuAlt3 />
            )}
          </div>

        </div>

      </div>
    </header>
  );
}

export default Navbar;