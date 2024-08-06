import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // Import the logo image

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleHireMeClick = () => {
    window.location.href = 'mailto:khalfaouiw3@gmail.com';
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${scrolled ? 'transform -translate-y-full' : 'transform translate-y-0'} bg-gradient-to-br from-teal-400 to-teal-600 shadow-lg`}>
      <div className="container mx-auto p-4 flex items-center justify-between">
        <img src={logo} alt="Logo" className="h-16 md:h-20" /> {/* Adjust height here */}

        {/* Desktop and Tablet Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-lg text-white hover:text-yellow-300 transition-transform duration-300 transform hover:scale-105">Home</Link>
          <Link to="/skills" className="text-lg text-white hover:text-yellow-300 transition-transform duration-300 transform hover:scale-105">Skills</Link>
          <Link to="/about" className="text-lg text-white hover:text-yellow-300 transition-transform duration-300 transform hover:scale-105">About</Link>
          <Link to="/projects" className="text-lg text-white hover:text-yellow-300 transition-transform duration-300 transform hover:scale-105">Projects</Link>
          <button
            onClick={handleHireMeClick}
            className="bg-gradient-to-br from-yellow-400 to-yellow-600 text-white py-2 px-6 rounded-full font-semibold transition-transform transform hover:scale-105"
          >
            Hire Me
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={handleMenuToggle}
            className="text-white text-2xl focus:outline-none"
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`fixed top-0 right-0 h-full w-full bg-gradient-to-br from-teal-400 to-teal-600 transition-transform duration-300 transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden z-40 p-4`}>
          <button
            onClick={handleMenuToggle}
            className="absolute top-4 right-4 text-2xl text-white"
          >
            ✕
          </button>
          <div className="flex flex-col items-center space-y-6 mt-16">
            <Link to="/" className="text-lg text-black hover:text-yellow-300 transition-transform duration-300 transform hover:scale-105" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/skills" className="text-lg text-black hover:text-yellow-300 transition-transform duration-300 transform hover:scale-105" onClick={() => setMenuOpen(false)}>Skills</Link>
            <Link to="/about" className="text-lg text-black hover:text-yellow-300 transition-transform duration-300 transform hover:scale-105" onClick={() => setMenuOpen(false)}>About</Link>
            <Link to="/projects" className="text-lg text-black hover:text-yellow-300 transition-transform duration-300 transform hover:scale-105" onClick={() => setMenuOpen(false)}>Projects</Link>
            <button
              onClick={() => {
                handleHireMeClick();
                setMenuOpen(false);
              }}
              className="bg-gradient-to-br from-yellow-400 to-yellow-600 text-white py-2 px-6 rounded-full font-semibold transition-transform transform hover:scale-105"
            >
              Hire Me
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
