import React from "react";
import "../style/AboutMe.css";
import Navbar from "./Navbar";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
// import { Link } from "react-router-dom";
import { motion } from "framer-motion"; 
import { HashLink as Link } from "react-router-hash-link";
function AboutMe() {
  return (
    <>
      <Navbar />
      <div className="about-container">
        {/* Left Card */}
        <motion.div
          className="profile-card"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <img src="/Images/Ahsan2.svg" alt="profile" className="profile-img" />
          <h2>
            HELLO, I'M <br /> Ahsan Rafique
          </h2>
          <p>
            I am a versatile data science enthusiast who can transform raw data
            into meaningful insights from collection to visualization.
          </p>

          {/* Social Icons */}
          <div className="socials-icons" >
            <a
              href="https://www.facebook.com/share/1C5JgT4RBi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.linkedin.com/in/ahsan-rafique-7649a9374?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.instagram.com/ahsanx_99?utm_source=qr&igsh=MW5ubWpsbW1yNWR4OA=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </div>
        </motion.div>

        

        {/* Right Content */}
        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }} 
          transition={{ duration: 0.8 }}
        >
          <h2>
            About <span className="logo-accent">Me</span>
          </h2>
          <p>
            I am a passionate and dedicated Computer Science student with
            hands-on experience in web development and data science. I enjoy
            building modern, user-friendly, and scalable applications using
            technologies like React, Node.js, and Python. My journey in tech has
            been driven by curiosity and a continuous desire to learn, which
            allows me to quickly adapt to new tools and frameworks.
            <br />
            <br />
            I have worked on academic projects and internships where I developed
            responsive websites, implemented machine learning models, and
            collaborated in team-based environments. Beyond coding, I strongly
            believe in problem-solving, creativity, and delivering solutions
            that add real value.
            <br />
            <br />
            Currently, I am seeking opportunities to further enhance my skills
            in front-end development and data science while contributing to
            impactful projects.
          </p>

          <Link smooth to="/#contact">
            <a className="contact-btn">Contact Me</a>
          </Link>&nbsp;&nbsp;&nbsp;
          <a className="contact-btn" href="/CV/Ahsan Rafique-CV.pdf" download>Download My CV</a>
        </motion.div>
      </div>
    </>
  );
}

export default AboutMe;

