import React, { useState } from 'react';
import '../style/Navbar.css';
// import { Link } from "react-scroll"; 
import { NavLink } from "react-router-dom";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
        <div className="stick stick-left"></div>
        <div className="stick stick-right"></div>
        <header className="navbar">
            <div className="logo">Ahsan <span className="logo-accent">Rafique</span></div>
            
            {/* Hamburger Icon */}
            <div className={`hamburger ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            {/* Navigation Links */}
            <nav className={isOpen ? "open" : ""}>
                <NavLink to="/" end onClick={() => setIsOpen(false)}>Home</NavLink>
                {/* <NavLink to="/about" onClick={() => setIsOpen(false)}>About</NavLink> */}
                <NavLink to="/skills" onClick={() => setIsOpen(false)}>Skills</NavLink>
                {/* <Link to="services" smooth={true} duration={600} onClick={() => setIsOpen(false)}>Services</Link>
                <Link to="qualifications" smooth={true} duration={600} onClick={() => setIsOpen(false)}>Qualifications</Link>
                <Link to="contact" smooth={true} duration={600} onClick={() => setIsOpen(false)}>Contact</Link> */}
            </nav>
        </header>
        </>
    );
}

export default Navbar;
