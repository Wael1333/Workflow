import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faPython,
  faJs,
  faReact,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "tailwindcss/tailwind.css";

import fiverrImage from "../assets/fiverr.png";
import jomaaImage from "../assets/jomaa.png";
import techImage from "../assets/tech.png";
import nftSpaceImage from "../assets/art.webp";
import kryptImage from "../assets/krypt.jpeg";
import reactLogo from "../assets/react.png";
import ethereumLogo from "../assets/eth.png";
import blockchainLogo from "../assets/poly.png";
import typescriptLogo from "../assets/TS.png";
import metamaskLogo from "../assets/mask.webp";
import alchemyLogo from "../assets/Alchm.jpg";
import nodeLogo from "../assets/node.png";
import nextjsLogo from "../assets/next.jpg";
import man from "../assets/man.png";
import ia from "../assets/ia.png";

import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // Import AOS styles

const workExperiences = [
  {
    company: "Fiverr",
    role: "Full Stack Developer",
    period: "October 2017 - Present",
    description: [
      "Specialize in web application development.",
      "Offer bespoke, fully responsive, feature-rich applications.",
      "Create dynamic front-end interfaces and implement robust full-stack solutions.",
      "Maintain high standards in functionality, aesthetics, and user experience.",
    ],
    image: fiverrImage,
    link: "https://www.fiverr.com/s/jjpQN0G",
  },
  {
    company: "JOMAA - Tunisia",
    role: "Full Stack Developer",
    period: "January 2023 - June 2023",
    description: [
      "Created a DApp using third-web and Ethereum.",
      "Integrated Sanity for efficient data management and content creation.",
      "Crafted intuitive and visually appealing front-end interfaces.",
      "Enhanced navigation and content discovery with AI.",
      "Developed an NFT marketplace with blockchain technology.",
      "Ensured exceptional user experience with attention to detail.",
    ],
    image: jomaaImage,
  },
  {
    company: "Blockchain; Tech Solution",
    role: "Front End Web Developer",
    period: "June 2022 - July 2022",
    description: [
      "Developed a dynamic web app using React.js and TypeScript.",
      "Enhanced user interactions with an AI-powered Giphy add-on.",
      "Implemented secure cryptocurrency transfers via MetaMask and Ethereum.",
      "Managed all stages from conceptualization to testing.",
      "Delivered a groundbreaking app merging web features with crypto transactions.",
    ],
    image: techImage,
  },
];

const projects = [
  {
    name: "NFT Space",
    description:
      "Developed a decentralized NFT marketplace using blockchain technology. Integrated with Ethereum for secure transactions and digital ownership.",
    moreDetails: [
      "Created a user-friendly interface with React.",
      "Utilized smart contracts for managing NFTs.",
      "Implemented payment gateways for transactions.",
      "Designed and developed a responsive UI for different devices.",
      "Integrated analytics for tracking user interactions and transactions.",
    ],
    technologies: [
      { name: "React", icon: reactLogo },
      { name: "Ethereum", icon: ethereumLogo },
      { name: "Blockchain", icon: blockchainLogo },
      { name: "TypeScript", icon: typescriptLogo },
      { name: "Alchemy", icon: alchemyLogo },
      { name: "Node.js", icon: nodeLogo },
      { name: "Next.js", icon: nextjsLogo },
    ],
    image: nftSpaceImage,
    github: "https://github.com/Wael1333/NFTspace",
    experience: "JOMAA - Tunisia",
  },
  {
    name: "Krypt",
    description:
      "Built a web application for exchanging cryptocurrencies securely. Implemented integration with MetaMask for smooth crypto transactions.",
    moreDetails: [
      "Developed a responsive UI with React and TypeScript.",
      "Implemented real-time price updates using WebSockets.",
      "Ensured security with encryption and secure API calls.",
      "Included features for transaction history and portfolio management.",
      "Integrated a user authentication system for enhanced security.",
    ],
    technologies: [
      { name: "React", icon: reactLogo },
      { name: "TypeScript", icon: typescriptLogo },
      { name: "MetaMask", icon: metamaskLogo },
    ],
    image: kryptImage,
    github: "https://github.com/Wael1333/KryptEthe/tree/main",
    experience: "Tech Solution",
  },
  {
    name: "Cat & Dog Classifier",
    description:
      "Developed a machine learning program using Python to classify images as either cats or dogs. Utilized various libraries for image processing and model training.",
    moreDetails: [
      "Used OpenCV for image preprocessing.",
      "Applied HOG (Histogram of Oriented Gradients) for feature extraction.",
      "Implemented SVM (Support Vector Machine) for classification.",
      "Optimized model performance with GridSearchCV.",
      "Evaluated model using accuracy score, classification report, and confusion matrix.",
    ],
    technologies: [
      { name: "Python", icon: faPython },
      { name: "OpenCV", icon: faNodeJs }, // Adjusted to represent OpenCV
      { name: "Scikit-learn", icon: faJs }, // Adjusted to represent Scikit-learn
    ],
    image: ia, // Use a relevant AI project image or a placeholder
    github:
      "https://github.com/Wael1333/Cats-Dogs-IA-prediction/tree/main/.github/workflows",
    experience: "Personal Project",
  },
];

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  const toggleDetails = (index) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  const addProject = () => {
    // Placeholder function for adding a project
    alert("This functionality hasn't been implemented yet");
  };

  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-100 via-white to-teal-200 p-10 text-gray-900">
      <h1 className="text-5xl font-extrabold text-center mb-12 animate-fadeIn" data-aos="fade-up" data-aos-duration="1000">
        Projects
      </h1>

      <div className="relative mb-16">
        {/* Background Shape */}
        <div className="absolute inset-0 -z-10 bg-teal-100 rounded-lg transform -skew-x-6 -translate-x-8 -translate-y-4 h-full max-w-4xl mx-auto"></div>

        <h2 className="text-3xl font-semibold mb-8 text-center animate-fadeIn relative z-10" data-aos="fade-up" data-aos-duration="1000">
          Work Experience
        </h2>
        <div className="absolute right-8 top-24 sm:right-12 sm:top-28 md:right-36 md:top-48 hidden md:block">
          <img
            src={man}
            alt="Description of the image"
            className="w-4/3 h-96 object-contain"
          />
        </div>
        {workExperiences.map((experience, index) => (
          <div
            key={index}
            className="relative flex flex-col md:flex-row items-center md:items-start mb-12 animate-fadeIn transition-transform transform hover:scale-105 duration-300"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="relative flex-shrink-0 w-48 h-48">
              <div className="absolute inset-0 bg-teal-100 rounded-full opacity-20 transform -translate-x-6 -translate-y-6"></div>
              <img
                src={experience.image}
                alt={experience.company}
                className="relative z-10 w-full h-full rounded-full object-cover shadow-lg"
              />
            </div>
            <div className="relative z-10 ml-6">
              <h3 className="text-2xl font-semibold text-gray-800">
                {experience.company}
              </h3>
              <p className="text-lg text-gray-600">{experience.role}</p>
              <p className="text-sm text-gray-400">{experience.period}</p>
              <ul className="list-disc list-inside mt-4 space-y-2 text-gray-700">
                {experience.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              {experience.link && (
                <a
                  href={experience.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-600 hover:text-teal-800 mt-4 inline-block text-lg font-medium transition-colors duration-300"
                >
                  View my Fiverr profile
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      <div>
        <h2 className="text-3xl font-semibold mb-8 text-center animate-fadeIn" data-aos="fade-up" data-aos-duration="1000">
          My Projects
        </h2>
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative flex flex-col md:flex-row items-center md:items-start mb-12 animate-fadeIn transition-transform transform hover:scale-105 duration-300"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-32 h-32 rounded-lg mb-4 md:mb-0 md:mr-8 object-cover shadow-lg"
            />
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">
                {project.name}
              </h3>
              <p className="text-md mt-2 text-gray-700">{project.description}</p>
              <p className="text-md mt-2">
                <span className="font-semibold text-gray-600">Technologies: </span>
                {project.technologies.map((tech, i) => (
                  <span
                    key={tech.name}
                    className="inline-flex items-center mr-2 align-middle"
                  >
                    {i > 0 && ", "}
                    {typeof tech.icon === "string" ? (
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="w-6 h-6 mr-2"
                      />
                    ) : (
                      <FontAwesomeIcon
                        icon={tech.icon}
                        className="w-6 h-6 mr-2"
                      />
                    )}
                    {tech.name}
                  </span>
                ))}
              </p>
              <div
                className={`transition-all duration-1000 ease-in-out overflow-hidden ${
                  expandedProject === index
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                {expandedProject === index && (
                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-gray-800">
                      Details
                    </h4>
                    <ul className="list-disc list-inside text-md mb-4 text-gray-700">
                      {project.moreDetails.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <div className="flex mt-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-600 hover:text-teal-800 inline-flex items-center text-lg font-medium transition-colors duration-300"
                >
                  <FontAwesomeIcon icon={faGithub} className="mr-2" />
                  View on GitHub
                </a>
                <button
                  onClick={() => toggleDetails(index)}
                  className="text-teal-600 hover:text-teal-800 ml-4 inline-flex items-center text-lg font-medium transition-colors duration-300"
                >
                  {expandedProject === index ? "See Less" : "See More"}
                </button>
              </div>
            </div>
          </div>
        ))}

        <div className="text-center mt-12">
          <button
            onClick={addProject}
            className="text-white bg-teal-600 hover:bg-teal-800 px-6 py-3 rounded-lg font-semibold text-lg transition-colors duration-300"
          >
            <FontAwesomeIcon icon={faPlus} className="mr-2" />
            Add Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
