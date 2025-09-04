import React from 'react';
import './App.css';
import Home from './pages/Home';
// import Contact from './pages/contact';
import About from './components/About'; 
import HireNow from './components/HireNow';
import Skills from './components/Skills';
import Datascience from './pages/Datascience';
// import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
          <Route path="/hire" element={<HireNow />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/datascience" element={<Datascience />} />

        </Routes>
      
    </div>
  );
}

export default App;