import "./Footer.css";
import { Link } from "react-scroll";

import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaEnvelope,
  FaHeart,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="container">

        {/* Top */}

        <div className="footer-top">

          {/* Left */}

          <div className="footer-brand">

            <div className="footer-logo">
              AG
            </div>

            <h2>Aditya Giri</h2>

            <p>
              Passionate MERN Stack Developer focused on building
              responsive and modern web applications.
            </p>

          </div>

          {/* Center */}

          <div className="footer-links">

            <h3>Quick Links</h3>

            <Link to="home" smooth duration={600}>Home</Link>
            <Link to="about" smooth duration={600}>About</Link>
            <Link to="skills" smooth duration={600}>Skills</Link>
            <Link to="projects" smooth duration={600}>Projects</Link>
            <Link to="education" smooth duration={600}>Education</Link>
            <Link to="contact" smooth duration={600}>Contact</Link>

          </div>

          {/* Right */}

          <div className="footer-contact">

            <h3>Contact</h3>

            <a href="mailto:giri009aditya@gmail.com">
              <FaEnvelope />
              giri009aditya@gmail.com
            </a>

            <a
              href="https://wa.me/918858469485"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp />
              +91 8858469485
            </a>

            <div className="footer-social">

              <a
                href="https://github.com/Adityagiri009"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/aditya-giri-641473291/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://wa.me/918858469485"
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsapp />
              </a>

            </div>

          </div>

        </div>

        <div className="footer-bottom">

          <p>
            © {new Date().getFullYear()} Aditya Giri. All Rights Reserved.
          </p>

          <p>
            Built with React
            <FaHeart className="heart" />
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;