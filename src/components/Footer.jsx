import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaDiscord } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-teal-400 to-teal-600 text-white py-6 px-4">
      <div className="container mx-auto flex justify-between items-start flex-wrap">
        <div className="flex flex-col text-left space-y-2">
          <p className="text-lg font-semibold">Contact Me:</p>
          <p className="text-sm">Email: <a href="mailto:khalfaouiw3@gmail.com" className="hover:underline">khalfaouiw3@gmail.com</a></p>
          <p className="text-sm">Phone: <a href="tel:+21699174127" className="hover:underline">+21699174127</a></p>
        </div>

        <div className="flex flex-col items-end space-y-2 mt-4 md:mt-0">
          <p className="text-lg font-semibold mb-2 text-left" style={{ marginRight: 'auto' }}>Social:</p>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/WaelHydroLux/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-300 transition-colors duration-300">
              <FaFacebook size={24} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-300 transition-colors duration-300">
              <FaInstagram size={24} />
            </a>
            <a href="https://www.linkedin.com/in/wael-khalfaoui-31a665317/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-300 transition-colors duration-300">
              <FaLinkedin size={24} />
            </a>
            <a href="https://www.discord.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-300 transition-colors duration-300">
              <FaDiscord size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center mt-4">
        <p className="text-sm">&copy; 2024 Khalfaoui wael. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
