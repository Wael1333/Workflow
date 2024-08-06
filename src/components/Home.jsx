import React, { useEffect } from 'react';
import myPic from '../assets/my-pic.jpg'; // Ensure this path is correct
import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // Import AOS styles

const Home = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-100 to-white text-gray-900 flex flex-col md:flex-row items-center justify-center py-16 px-4">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl relative">
        {/* Text Content */}
        <div
          className="text-center md:text-left mb-8 md:mb-0 relative flex-shrink-0 md:w-1/2"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Hi, I'm <span className="text-teal-500">Wael Khalfaoui</span>
          </h1>
          <p className="text-lg md:text-xl mb-6">
            I'm a 23-year-old software engineer from Tunisia, pursuing a Master's in Data Science and AI. With a Bachelor's in Software Engineering, I'm driven by a passion for crafting innovative applications and delving into emerging technologies. I thrive on turning bold ideas into reality and exploring the endless possibilities of tech.
          </p>
          {/* Diagonal Line Separator */}
          <div className="absolute top-1/2 left-full transform -translate-x-1/2 -translate-y-1/2 rotate-45 w-7/12 h-0.5 bg-teal-500"></div>
        </div>
        {/* Profile Picture Section */}
        <div
          className="relative flex justify-center items-center flex-shrink-0 md:w-1/2"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          {/* Profile Picture */}
          <img
            src={myPic}
            alt="Profile"
            className="rounded-full shadow-xl w-52 h-52 md:w-56 md:h-56 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
