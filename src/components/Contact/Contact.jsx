import "./Contact.css";
import { motion } from "framer-motion";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaDownload,
} from "react-icons/fa";

import emailjs from "@emailjs/browser";
import { useRef } from "react";

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {

    e.preventDefault();

    emailjs
      .sendForm(
        "service_adt90es",
        "template_7di1wbl",
        form.current,
        "ea1IgADvxKbIZ6Hv7"
      )
      .then(() => {

        alert("Message Sent Successfully ✅");
        e.target.reset();

      })
      .catch(() => {

        alert("Failed to Send Message ❌");

      });

  };

  return (

    <section className="contact" id="contact">

      <div className="container">

        <div className="contact-title">

          <span>Get In Touch</span>

          <h2>Let's Work Together</h2>

          <p>

            I'm currently looking for internships and frontend development
            opportunities. Feel free to contact me anytime.

          </p>

        </div>

        <div className="contact-wrapper">

          {/* LEFT */}

          <motion.div

            className="contact-info"

            initial={{ opacity: 0, x: -40 }}

            whileInView={{ opacity: 1, x: 0 }}

            transition={{ duration: .6 }}

            viewport={{ once: true }}

          >
            <div className="info-card">

  <FaEnvelope className="info-icon" />

  <div>

    <h4>Email</h4>

    <a href="mailto:giri009aditya@gmail.com">
      giri009aditya@gmail.com
    </a>

  </div>

</div>

<div className="info-card">

  <FaPhoneAlt className="info-icon" />

  <div>

    <h4>Phone</h4>

    <a href="tel:+918858469485">
      +91 8858469485
    </a>

  </div>

</div>

<div className="info-card">

  <FaWhatsapp className="info-icon" />

  <div>

    <h4>WhatsApp</h4>

    <a
      href="https://wa.me/918858469485"
      target="_blank"
      rel="noreferrer"
    >
      Chat on WhatsApp
    </a>

  </div>

</div>

<div className="info-card">

  <FaMapMarkerAlt className="info-icon" />

  <div>

    <h4>Location</h4>

    <p>Jaunpur, Uttar Pradesh, India</p>

  </div>

</div>

<div className="social-links">

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

<a
  href="/Aditya_Giri_Resume.pdf"
  className="resume-btn"
  download
>
  <FaDownload />
  Download Resume
</a>

</motion.div>
{/* RIGHT */}

<motion.form
  ref={form}
  onSubmit={sendEmail}
  className="contact-form"
  initial={{ opacity: 0, x: 40 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>

  <input
    type="text"
    name="user_name"
    placeholder="Your Name"
    required
  />

  <input
    type="email"
    name="user_email"
    placeholder="Your Email"
    required
  />

  <input
    type="text"
    name="subject"
    placeholder="Subject"
    required
  />

  <textarea
    name="message"
    rows="6"
    placeholder="Write your message..."
    required
  ></textarea>

  <button type="submit">
    Send Message
  </button>

</motion.form>
        </div>

      </div>

    </section>

  );

}

export default Contact;
