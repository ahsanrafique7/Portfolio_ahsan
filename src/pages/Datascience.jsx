import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../style/Datascience.css";

function DataSciencePage(){
  return (
    <div className="page">
        <Navbar />


      {/* Hero Section */}
      <section className="heru">
        <div className="heru-content">
          <h1>
           Unlock Insights. Drive Innovation. Scale with Data.
          </h1>
          <p>
            Artificial Intelligence and Robotics solutions to drive business growth.
          </p>
          <button className="btn-primary">Discover More</button>
        </div>
        <img src="/Images/earth.png" alt="AI Robot" className="hero-image" />
      </section>

      {/* Services Section */}
      <section className="services">
        <h2>
          Our Purpose Is To Deliver Excellence <br /> in Service and Execution
        </h2>
        <div className="services-container">
          <div className="service-card">
            <h3>Process Automation</h3>
            <p>Streamline workflows and reduce manual effort with smart AI-driven automation.</p>
          </div>
          <div className="service-card">
            <h3>Predictive Analytics</h3>
            <p>Unlock business insights and forecast trends with advanced analytics models.</p>
          </div>
          <div className="service-card">
            <h3>Machine Learning</h3>
            <p>Build AI models that learn and adapt, delivering smarter business decisions.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="about-text">
          <h2>We Bring the Power of Data Science & AI to Business</h2>
          <p>
            Our solutions empower businesses with cutting-edge technologies in
            artificial intelligence, data science, and automation.
          </p>
          <button className="btn-secondary">Explore Services</button>
        </div>
        <div className="about-image">
          <img src="/Images/dataanalysis.jpeg" alt="Team Working" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="stat">
          <h3>398+</h3>
          <p>Projects Completed</p>
        </div>
        <div className="stat">
          <h3>120+</h3>
          <p>Satisfied Clients</p>
        </div>
      </section>
      <Footer />
      
    </div>
  );
};

export default DataSciencePage;
