import React from 'react';
import './App.css';
import Home from './pages/Home';
import Scrolltop from "./components/Scrolltop";
import About from './components/About'; 
import HireNow from './components/HireNow';
import Skills from './components/Skills';
import Datascience from './pages/Datascience';
import { Routes, Route } from "react-router-dom"; 

function App() {
  return (
    <>
      <Scrolltop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="/hire" element={<HireNow />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/datascience" element={<Datascience />} />
      </Routes>
    </>
  );
}

export default App;
