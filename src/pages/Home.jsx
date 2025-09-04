import React, { useEffect } from "react";
import "../style/Home.css";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import Contact from './contact';
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: false }); 
  }, []);
 
  return (
    <>
      <div className="hero">
        <Navbar />

        <div className="hero-content" data-aos="fade-up">
          <div className="text-section">
            <h1>
              I'm <span className="bold">Ahsan Rafique</span>
            </h1>
            <h3>
              <span className="highlight">Data Science Enthusiast</span>
            </h3>
            <p>
              I have been working in the field of Data Science for the past 10
              years, after graduating from a reputed engineering college. I have
              worked on numerous impactful projects involving Machine Learning,
              Artificial Intelligence, and Big Data analytics. Additionally, I
              provide consultancy, conduct research, and deliver training in the
              field of Data Science.
            </p>
            <Link smooth to="/#contact" className="hirebtn">
              <b>Contact</b>
            </Link>
          </div>
          <div className="image-section" data-aos="zoom-in">
            <img
              src="/Images/Ahsan2.svg"
              alt="Ahsan Rafique"
            />
          </div>
        </div>

        {/* About Section */}
        <div id="about" className="about" data-aos="fade-right">
          <div className="about-section">
            <div className="image-side" data-aos="zoom-in">
              <div className="social-icons">
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
              <img
                src="/Images/Ahsan2.svg"
                alt="Profile"
              />
            </div>

            <div className="info-side" data-aos="fade-left">
              <h4 className="greeting">Hi !</h4>
              <h2>
                I am a <span className="highlight">Data Scientist</span>
              </h2>
              <p>
                Passionate Data Scientist with expertise in machine learning,
                AI, and data analytics, dedicated to turning data into impactful
                solutions. Here are some details to connect or learn more about
                me.
              </p>

              <div className="details-grid">
                <p>
                  <strong>Name:</strong> Ahsan Rafique
                </p>
                <p>
                  <strong>Email:</strong> mahsan78a8@gmail.com
                </p>
                <p>
                  <strong>Age:</strong> 21 Years
                </p>
                <p>
                  <strong>Phone:</strong> +92315-4567890
                </p>
                <p>
                  <strong>Job:</strong> Data Science Enthusiast
                </p>
                <p>
                  <strong>From:</strong> Pakistan
                </p>
              </div>

              <div className="buttons">
                {/* <button className="cvbtn">My CV</button> */}
                <a className="cvbtn" href="/CV/Ahsan Rafique-CV.pdf" target="_blank" rel="noopener noreferrer">
                  My CV
                </a>

                <NavLink to="/about" className="hirebtn">
                  More...
                </NavLink>
              </div>
            </div>
          </div>
        </div>

        
<section id="services" className="services-section">
  <h2 data-aos="fade-up">Services</h2>

  <div className="services-container">
    {/* Web Development Card */}
    <div className="service-card" data-aos="fade-right">
      <div className="service-icon">💻</div>
      <h3>Web Development</h3>
      <p>Responsive, fast and modern websites tailored to your needs.</p>
      <button>Read More</button>
    </div>

    {/* Data Science Card */}
    <div className="service-card" data-aos="fade-left">
      <div className="service-icon">📊</div>
      <h3>Data Science</h3>
      <p>Data analysis, visualization, and predictive modeling.</p>
      <NavLink to="/datascience" className="datasciencebtn">
         <button>Read More</button> 
      </NavLink>
    </div>
  </div>
</section>


        {/* Qualifications Section */}
        <div id="qualifications" className="qualifications" data-aos="fade-up">
          <h3 className="title">Here's My</h3>
          <h2 className="sbtitle">Qualifications</h2>

          <div className="columns">
            {/* Education Section */}
            <div className="column" data-aos="fade-right">
              <h3 className="column-title">Education</h3>
              <div className="cardi">
                <h4>Bachelor of Science in Computer Science</h4>
                <p className="meta">
                  Capital University of Science and Technology / 2022 - 2026
                </p>
                <p className="desc">
                  Project: Developed a predictive maintenance system using
                  machine learning to detect equipment failures early and reduce
                  downtime.
                </p>
              </div>
              <div className="cardi">
                <h4>Intermediate Computer Science</h4>
                <p className="meta">
                  Liaquat Ali Degree College / 2020 - 2022
                </p>
                <p className="desc">
                  Data Analysis and Visualization of Academic Performance using
                  Statistical Methods and Computer Programming.
                </p>
              </div>
            </div>

            {/* Experience Section */}
            <div className="column" data-aos="fade-left">
              <h3 className="column-title">Experience</h3>
              <div className="cardi">
                <h4>Data Science Solutions</h4>
                <p className="meta">AI & Data Innovations / 2024 - Present</p>
                <p className="desc">
                  Part of the team developing data-driven solutions, building
                  machine learning models, and performing advanced analytics to
                  optimize business processes and improve decision-making.
                </p>
              </div>
              <div className="cardi">
                <h4>Advanced Data Analytics</h4>
                <p className="meta">Global Analytics Solutions / 2024 - present</p>
                <p className="desc">
                  I was part of a team responsible for developing and optimizing
                  machine learning models to improve data-driven
                  decision-making and business performance.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div id="contact">
          <Contact />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
