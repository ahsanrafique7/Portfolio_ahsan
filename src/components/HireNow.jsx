import React from "react";
import '../style/HireNow.css';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function HireNow() {
  return (
    <>
        <Navbar />
    <div className="hire-container">
        
      {/* Hero Section */}
      <section className="hire-hero">
        <h1>Let’s Build Something Amazing Together</h1>
        <p>
          I’m a Front-End Developer specialized in React, modern UI, and
          responsive web design. Ready to turn your idea into reality.
        </p>
      </section>

      {/* Why Hire Me Section */}
      <section className="why-hire">
        <h2>Why Hire Me?</h2>
        <div className="hire-cards">
          <div className="card">⚡ Fast & Optimized Code</div>
          <div className="card">🎨 Clean & Modern UI</div>
          <div className="card">📱 Fully Responsive</div>
          <div className="card">🤝 Reliable & Friendly</div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <h2>Services I Offer</h2>
        <ul>
          <li>🌐 Web Development (React / MERN)</li>
          <li>🎨 UI/UX Implementation</li>
          <li>📱 Responsive Mobile-first Design</li>
          <li>⚙️ API Integration</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <h2>Let’s Work Together</h2>
        <p>Fill out the form below and I’ll get back to you soon.</p>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="4" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
    
        <Footer/>
    
       
    </>
    
  );
}

export default HireNow;
