import "./Projects.css";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import portfolioImg from "../../assets/projects/port.png";
import gstImg from "../../assets/projects/gst.png";
import calculatorImg from "../../assets/projects/cal.png";
import bookstoreImg from "../../assets/projects/book.png";

function Projects() {

  const projects = [

    {
      title: "Personal Portfolio",

      image: portfolioImg,

      description:
        "A modern responsive portfolio built using React with beautiful UI, smooth animations and reusable components.",

      tech: [
        "React",
        "CSS3",
        "Framer Motion",
        "React Icons",
      ],

      live:
        "https://aditya-portfolio-steel.vercel.app/",

      github:
        "YOUR_PORTFOLIO_GITHUB_LINK",
    },

    {
      title: "GST Calculator",

      image: gstImg,

      description:
        "A responsive GST Calculator that calculates GST amount, total amount and original amount instantly.",

      tech: [
        "React",
        "JavaScript",
        "CSS3",
      ],

      live:
        "https://gst-calculator-lime-two.vercel.app/",

      github:
        "https://github.com/Adityagiri009/GSTCalculator",
    },

    {
      title: "Simple Calculator",

      image: calculatorImg,

      description:
        "A modern calculator built using React.js that performs basic arithmetic operations with a clean UI.",

      tech: [
        "React",
        "JavaScript",
        "CSS3",
      ],

      live:
        "https://calculatoradi.netlify.app/",

      github:
        "https://github.com/Adityagiri009/CodeAlpha_Calculator",
    },

    {
      title: "Online Book Store",

      image: bookstoreImg,

      description:
        "Responsive online bookstore UI with category wise books and attractive user experience.",

      tech: [
        "React",
        "JavaScript",
        "CSS3",
      ],

      live:
        "#",

      github:
        "#",
    },

  ];

  return (

    <section
      className="projects"
      id="projects"
    >

      <div className="container">

        <div className="projects-title">

          <span>

            My Work

          </span>

          <h2>

            Featured Projects

          </h2>

          <p>

            Here are some projects that showcase
            my frontend development skills,
            responsive UI design and React expertise.

          </p>

        </div>

        <div className="projects-grid">

          {

            projects.map((project, index) => (

              <motion.div

                className="project-card"

                key={index}

                initial={{
                  opacity:0,
                  y:50
                }}

                whileInView={{
                  opacity:1,
                  y:0
                }}

                transition={{
                  duration:.5,
                  delay:index*.1
                }}

                viewport={{
                  once:true
                }}

              >

                <div className="project-image">

                  <img

                    src={project.image}

                    alt={project.title}

                  />

                </div>

                <div className="project-content">

                  <h3>

                    {project.title}

                  </h3>

                  <p>

                    {project.description}

                  </p>

                  <div className="project-tech">

                    {

                      project.tech.map((item,i)=>(

                        <span key={i}>

                          {item}

                        </span>

                      ))

                    }

                  </div>

                  <div className="project-buttons">

                    <a

                      href={project.live}

                      target="_blank"

                      rel="noreferrer"

                    >

                      <FaExternalLinkAlt />

                      Live Demo

                    </a>

                    <a

                      href={project.github}

                      target="_blank"

                      rel="noreferrer"

                    >

                      <FaGithub />

                      GitHub

                    </a>

                  </div>

                </div>

              </motion.div>

            ))

          }

        </div>

      </div>

    </section>

  );

}

export default Projects;