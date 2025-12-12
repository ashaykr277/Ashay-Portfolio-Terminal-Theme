import { useState } from "react";
import { Link } from "react-scroll";
import "../App.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header>
        <div className="logo">
          <h1>ASHAY_KUMAR.EXE</h1>
        </div>

        {/* NAV MENU */}
        <nav className={menuOpen ? "nav open" : "nav"}>
          <ul className="nav-elements">
            <li>
              <Link
                to="home-section"
                smooth={true}
                duration={800}
                spy={true}
                activeClass="active"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="about-section"
                smooth={true}
                duration={800}
                spy={true}
                activeClass="active"
                onClick={() => setMenuOpen(false)}
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to="education-section"
                smooth={true}
                duration={800}
                spy={true}
                activeClass="active"
                onClick={() => setMenuOpen(false)}
              >
                Education
              </Link>
            </li>

            <li>
              <Link
                to="contact-section"
                smooth={true}
                duration={800}
                spy={true}
                activeClass="active"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* BUTTON FOR DESKTOP */}
        <button className="btn">Hire Me</button>

        {/* TERMINAL ICON FOR MOBILE */}
        <i
          className="bx bxs-terminal menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        ></i>
      </header>
    </>
  );
};

export default Navbar;
