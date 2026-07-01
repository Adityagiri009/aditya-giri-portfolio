import "./Education.css";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

function Education() {

  const education = [

  {
    year: "2023 - Present",
    degree: "Bachelor of Technology (B.Tech)",
    institute: "Veer Bahadur Singh Purvanchal University",
    detail: "Information Technology",
    score: "CGPA: 7.135",
  },

  {
    year: "2021 - 2023",
    degree: "Intermediate (12th)",
    institute: "Uttar Pradesh Board",
    detail: "Science Stream (PCM)",
    score: "63.8%",
  },

  {
    year: "2020 - 2021",
    degree: "High School (10th)",
    institute: "Uttar Pradesh Board",
    detail: "Science",
    score: "77.33%",
  },

];
  return (

    <section className="education" id="education">

      <div className="container">

        <div className="education-title">

          <span>Education</span>

          <h2>My Academic Journey</h2>

          <p>
            My educational background that helped
            build a strong foundation in programming,
            problem solving and software development.
          </p>

        </div>

        <div className="timeline">
        {education.map((item, index) => (

  <motion.div
    className="timeline-item"
    key={index}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{
      duration: 0.5,
      delay: index * 0.2,
    }}
    viewport={{ once: true }}
  >

    <div className="timeline-icon">
      <FaGraduationCap />
    </div>

    <div className="timeline-content">

      <span className="timeline-year">
        {item.year}
      </span>

      <h3>
        {item.degree}
      </h3>

      <h4>
        {item.institute}
      </h4>

      {
        item.detail && (
          <p>
            {item.detail}
          </p>
        )
      }

      {
        item.score && (
          <strong>
            {item.score}
          </strong>
        )
      }

    </div>

  </motion.div>

))}
        </div>

      </div>

    </section>

  );

}

export default Education;


