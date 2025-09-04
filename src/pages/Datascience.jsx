import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../style/Datascience.css";

// AOS imports
import AOS from "aos";
import "aos/dist/aos.css";

// CountUp import
import CountUp from "react-countup";

function DataSciencePage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <div className="page">
      <Navbar />

      {/* Hero Section */}
      <section className="heru">
        <div className="heru-content" data-aos="fade-right">
          <h1>Unlock Insights. Drive Innovation. Scale with Data.</h1>
          <p>
            Artificial Intelligence and Robotics solutions to drive business growth.
          </p>
        </div>
        <img
          src="/Images/earth.png"
          alt="AI Robot"
          className="hero-image"
          data-aos="zoom-in"
        />
      </section>

      {/* Services Section */}
      <section className="services" data-aos="fade-up">
        <h2>
          Our Purpose Is To Deliver Excellence <br /> in Service and Execution
        </h2>
        <div className="services-container">
          <div className="service-card" data-aos="flip-left">
            <h3>Process Automation</h3>
            <p>
              Streamline workflows and reduce manual effort with smart AI-driven automation.
            </p>
          </div>
          <div className="service-card" data-aos="flip-left" data-aos-delay="200">
            <h3>Predictive Analytics</h3>
            <p>
              Unlock business insights and forecast trends with advanced analytics models.
            </p>
          </div>
          <div className="service-card" data-aos="flip-left" data-aos-delay="400">
            <h3>Machine Learning</h3>
            <p>
              Build AI models that learn and adapt, delivering smarter business decisions.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="about-text" data-aos="fade-right">
          <h2>We Bring the Power of Data Science & AI to Business</h2>
          <p>
            Our solutions empower businesses with cutting-edge technologies in
            artificial intelligence, data science, and automation.
          </p>
          
        </div>
        <div className="about-image" data-aos="fade-left">
          <img src="/Images/dataanalysis.jpeg" alt="Team Working" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats" data-aos="zoom-in-up">
        <div className="stat">
          <h3>
            <CountUp start={0} end={398} duration={3} suffix="+" />
          </h3>
          <p>Projects Completed</p>
        </div>
        <div className="stat">
          <h3>
            <CountUp start={0} end={120} duration={3} suffix="+" />
          </h3>
          <p>Satisfied Clients</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default DataSciencePage;

