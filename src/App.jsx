import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos';

AOS.init({
  duration: 1000, // Animation duration
  once: false, // Animation happens every time element is visible
  easing: 'ease-in-out', // Animation easing
});

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div>
          <Home></Home>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
          </Routes>
          </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
