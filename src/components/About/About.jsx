import "./About.css";
import aboutImg from "../../assets/images/about.png";

import {
  FaLaptopCode,
  FaPalette,
  FaRocket,
  FaUsers,
} from "react-icons/fa";

import { motion } from "framer-motion";

function About() {

  const features = [
    {
      icon: <FaLaptopCode />,
      title: "Frontend Development",
      desc: "Building responsive and scalable React applications."
    },
    {
      icon: <FaPalette />,
      title: "Modern UI Design",
      desc: "Creating clean, beautiful and user-friendly interfaces."
    },
    {
      icon: <FaRocket />,
      title: "Performance",
      desc: "Fast loading websites with optimized user experience."
    },
    {
      icon: <FaUsers />,
      title: "Team Work",
      desc: "Communication, collaboration and problem solving."
    }
  ];

  return (
    <section className="about" id="about">

      <div className="about-blur blur-left"></div>
      <div className="about-blur blur-right"></div>

      <div className="container about-container">

        {/* LEFT */}

        <motion.div
          className="about-left"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <div className="about-image-box">

            <img
              src={aboutImg}
              alt="Aditya Giri"
            />

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          className="about-right"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <span className="section-tag">
            About Me
          </span>

          <h2>

            Building Beautiful

            <br />

            <span>Digital Experiences</span>

          </h2>

          <p>

            I'm <strong>Aditya Giri</strong>, an aspiring MERN Stack Developer
            passionate about building modern, responsive and user-friendly web
            applications. I enjoy transforming ideas into beautiful digital
            experiences using React.js, Node.js, Express.js and MongoDB.

          </p>

          <div className="about-cards">

            {features.map((item, index) => (

              <motion.div
                className="about-card"
                key={index}
                whileHover={{
                  y: -8
                }}
              >

                <div className="card-icon">

                  {item.icon}

                </div>

                <h3>

                  {item.title}

                </h3>

                <p>

                  {item.desc}

                </p>

              </motion.div>

            ))}

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default About;