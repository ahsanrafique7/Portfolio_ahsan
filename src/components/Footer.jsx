import React from "react";
import '../style/Footer.css'
import { FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
function Footer() {
  return (
    <footer className="contactsection">
      <p className="subtitle">ui / ux / visual design.</p>
      <h1 className="name">Ahsan <span className="logo-accent">Rafique</span></h1>
      <p className="description">
        I’m a data science enthusiast focused on turning real-world problems into data-driven solutions. If you’d like to collaborate on ML models, analytics, or dashboards, I’d love to connect.
      </p>
      {/* <a href="#contact" className="contact-btn">
        contact. <FaArrowRight />
      </a> */}
      <NavLink to="/contact" className="contact-btn">Contact <FaArrowRight /></NavLink>
      <div className="social-links">
        <a href="https://dribbble.com" target="_blank" rel="noreferrer">
          dribbble.
        </a>
        <a
           href="https://www.linkedin.com/in/ahsan-rafique-7649a9374?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
           target="_blank"
           rel="noreferrer"
        >
          Linkedin.
        </a>
        <a
          href="https://opencirclesolutions.com"
          target="_blank"
          rel="noreferrer"
        >
          opencirclesolutions.
        </a>
      </div>
    </footer>
  );
}

export default Footer;
