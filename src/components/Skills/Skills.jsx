import "./Skills.css";
import { motion } from "framer-motion";

import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaJava,
  FaCss3Alt,
  FaNpm,
} from "react-icons/fa";

import {
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiHtml5,
  SiPostman,
  SiVite,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

function Skills() {
  const categories = [
    {
      title: "Frontend",
      skills: [
        {
          name: "HTML5",
          icon: <SiHtml5 />,
          color: "#E34F26",
        },
        {
          name: "CSS3",
          icon: <FaCss3Alt />,
          color: "#1572B6",
        },
        {
          name: "JavaScript",
          icon: <SiJavascript />,
          color: "#F7DF1E",
        },
        {
          name: "React.js",
          icon: <FaReact />,
          color: "#61DAFB",
        },
      ],
    },

    {
      title: "Backend",
      skills: [
        {
          name: "Node.js",
          icon: <FaNodeJs />,
          color: "#3C873A",
        },
        {
          name: "Express.js",
          icon: <SiExpress />,
          color: "#444444",
        },
      ],
    },

    {
      title: "Database",
      skills: [
        {
          name: "MongoDB",
          icon: <SiMongodb />,
          color: "#13AA52",
        },
        {
          name: "MySQL",
          icon: <SiMysql />,
          color: "#00758F",
        },
      ],
    },

    {
      title: "Programming",
      skills: [
        {
          name: "Java",
          icon: <FaJava />,
          color: "#E76F00",
        },
      ],
    },

    {
      title: "Tools",
      skills: [
        {
          name: "Git",
          icon: <FaGitAlt />,
          color: "#F05032",
        },
        {
          name: "GitHub",
          icon: <FaGithub />,
          color: "#111827",
        },
        {
          name: "VS Code",
          icon: <VscVscode />,
          color: "#007ACC",
        },
        {
          name: "Postman",
          icon: <SiPostman />,
          color: "#FF6C37",
        },
        {
          name: "Vite",
          icon: <SiVite />,
          color: "#646CFF",
        },
        {
          name: "NPM",
          icon: <FaNpm />,
          color: "#CB3837",
        },
      ],
    },
  ];

  return (
    <section className="skills" id="skills">
      <div className="container">

        <div className="skills-title">
          <span>My Tech Stack</span>

          <h2>Skills & Technologies</h2>

          <p>
            Technologies and tools I use to build modern,
            responsive and scalable web applications.
          </p>
        </div>

        <div className="skills-wrapper">
          {categories.map((category, index) => (
            <motion.div
              className="skills-category"
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
            >
              <h3>{category.title}</h3>

              <div className="skills-cards">
                {category.skills.map((skill, i) => (
                  <div className="skills-card" key={i}>
                    <div
                      className="skills-icon"
                      style={{
                        color: skill.color,
                      }}
                    >
                      {skill.icon}
                    </div>

                    <h4>{skill.name}</h4>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;