import React from 'react';
import 'tailwindcss/tailwind.css';
import 'aos/dist/aos.css'; // Import AOS styles
import aboutMeImage from '../assets/gify.gif'; // Add your image path here

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-100 via-white to-teal-200 text-gray-900">
      {/* Navbar */}
      <nav className="bg-teal-600 text-white p-4 fixed top-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Khalfaoui Wael</h1>
        <div className="flex items-center">
          <a href="#about" className="mx-4 hover:text-teal-200">About</a>
          <a href="#projects" className="mx-4 hover:text-teal-200">Projects</a>
          <button
            onClick={() => window.location.href = 'mailto:khalfaouiw3@gmail.com'}
            className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-6 py-3 rounded-lg font-semibold text-lg transition-transform transform hover:scale-105 hover:opacity-90 duration-300"
          >
            Hire Me
          </button>
        </div>
      </div>
    </nav>

      <div className="pt-20"> {/* Adjust padding-top to account for navbar height */}
        {/* About Me Section */}
        <div id="about" className="relative max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-12 p-8" data-aos="fade-left">
          <div className="relative flex flex-col md:flex-row items-center">
            {/* Image Section */}
            <div className="relative flex-shrink-0 w-40 h-40 md:w-48 md:h-48 mb-6 md:mb-0" data-aos="fade-right">
              <img
                src={aboutMeImage}
                alt="About Me"
                className="w-full h-full object-cover rounded-full shadow-md"
              />
            </div>

            {/* Summary Section */}
            <div className="flex-1 md:ml-6" data-aos="fade-left">
              <h2 className="text-3xl font-extrabold text-gray-800 mb-4">About Me</h2>
              <p className="text-lg md:text-xl font-medium text-gray-700 mb-4">
                Innovative and driven Data Science and AI Master’s student with extensive experience in full-stack and blockchain development. Proficient in creating scalable web applications using ReactJS, Node.js, and Next.js, while leveraging Solidity for cutting-edge Web 3 solutions. Skilled in Python for advanced machine learning and data analysis. Proven track record in delivering high-impact projects across various domains, including web development and blockchain technology. Committed to pushing technological boundaries and continuously evolving with industry advancements to deliver exceptional solutions.
              </p>
              <p className="text-md text-gray-600">
                My journey from graduating to pursuing a Master's in Web Intelligence reflects my commitment to self-improvement. With a keen interest in Web 3 and crypto, I aspire to contribute impactful solutions that resonate with evolving societal needs.
              </p>
            </div>
          </div>
        </div>

        {/* Personal Information */}
        <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-12 p-8" data-aos="fade-right">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-4">Personal Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Contact</h3>
              <p className="text-md text-gray-600 mb-2"><strong>Email:</strong> khalfaouiw3@gmail.com</p>
              <p className="text-md text-gray-600 mb-2"><strong>Phone:</strong> +216 99174127</p>
              <p className="text-md text-gray-600"><strong>Address:</strong> 7113 Khalaa Khasba, El Kef, Tunisia</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Date of Birth</h3>
              <p className="text-md text-gray-600 mb-2"><strong>Date of Birth:</strong> September 8, 2000</p>
              <p className="text-md text-gray-600"><strong>Place of Birth:</strong> El Kef, Tunisia</p>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-12 p-8" data-aos="fade-left">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-4">Education</h2>
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Master’s Degree</h3>
            <p className="text-md text-gray-600 mb-2"><strong>Institution:</strong> Higher Institute of Technology, Data Science and AI - El Kef</p>
            <p className="text-md text-gray-600"><strong>Duration:</strong> 2021 - present</p>
            <p className="text-md text-gray-600"><strong>Focus:</strong> Theory of Algorithms, AI, Deep Learning, Machine Learning, and Data Science</p>
            <p className="text-md text-gray-600">Studied the Scrum framework for project management and collaboration.</p>
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Bachelor’s Degree</h3>
            <p className="text-md text-gray-600 mb-2"><strong>Institution:</strong> Higher Institute of Technology of Kef, Computer Science - Tunisia</p>
            <p className="text-md text-gray-600"><strong>Duration:</strong> 2021 - 2023</p>
            <p className="text-md text-gray-600">Learned a wide range of tools and programming languages (e.g., Python, Java).</p>
            <p className="text-md text-gray-600">Covered networking, cloud computing, and system architectures. Gained experience in programming databases and related technologies.</p>
          </div>
        </div>

        {/* Languages */}
        <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-12 p-8 mb-6" data-aos="fade-right">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-4">Languages</h2>
          <ul className="list-disc list-inside text-md text-gray-600">
            <li><strong>Arabic:</strong> Native</li>
            <li><strong>English:</strong> Fluent</li>
            <li><strong>French:</strong> Advanced</li>
            <li><strong>German:</strong> Beginner</li>
          </ul>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-teal-600 text-white p-4 mt-6">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default About;
