import "./Hero.css";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { Typewriter } from "react-simple-typewriter";

import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaArrowRight,
} from "react-icons/fa";

import {
  SiReact,
  SiJavascript,
  SiNodedotjs,
  SiMongodb,
} from "react-icons/si";

import profile from "../../assets/images/hero.png";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg-circle hero-bg-one"></div>
      <div className="hero-bg-circle hero-bg-two"></div>

      <div className="container hero-container">

        {/* LEFT */}

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="hero-tag">
            🟢 Available for Internship
          </span>

          <h3>Hello, I'm</h3>

          <h1>
            Aditya <span>Giri</span>
          </h1>

          <h2 className="typing-text">
            <Typewriter
              words={[
                "MERN Stack Developer",
                "React Developer",
                "Frontend Developer",
                "Open To Internship",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1800}
            />
          </h2>

          <p>
            Passionate MERN Stack Developer focused on building
            modern, responsive and scalable web applications
            using React.js, JavaScript, Node.js and MongoDB.
          </p>

          {/* Buttons */}

          <div className="hero-btns">

            <Link
              to="projects"
              smooth={true}
              duration={600}
              offset={-80}
              className="primary-btn"
            >
              🚀 View My Work
              <FaArrowRight />
            </Link>

            <a
              href="/Aditya_Giri_Resume.pdf"
              download
              className="outline-btn"
            >
              📄 Download Resume
            </a>

          </div>

          
          {/* Social */}

          <div className="hero-social">

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
              <FaLinkedinIn />
            </a>

            <a
              href="https://www.instagram.com/adityagiri009"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          className="hero-image-area"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <div className="hero-image">

            <div className="image-ring"></div>

            <img
              src={profile}
              alt="Aditya Giri"
            />

          </div>

          <div className="tech-icon react">
            <SiReact />
          </div>

          <div className="tech-icon js">
            <SiJavascript />
          </div>

          <div className="tech-icon node">
            <SiNodedotjs />
          </div>

          <div className="tech-icon mongo">
            <SiMongodb />
          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default Hero;