import { Link } from 'react-scroll';
import '../App.css'
const Navbar = () => {
  return (
    <>
      <header>
        <div className="logo">
          <h1>ASHAY_KUMAR.EXE</h1>
        </div>

        <nav>
          <ul className="nav-elements">

            <li>
              <Link
                to="home-section"
                smooth={true}
                duration={800}
                spy={true}
                activeClass="active"
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
              >
                Contact
              </Link>
            </li>

          </ul>
        </nav>

        <button className="btn">Hire Me</button>
        <i className='bx bxs-terminal'></i>
      </header>
    </>
  );
};

export default Navbar;
