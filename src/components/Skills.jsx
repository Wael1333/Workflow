import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faCloud, faSignal, faLink, faBrain, faShieldAlt, faNetworkWired, faTasks, faTools, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { faReact, faEthereum, faCss3Alt, faLinux, faWindows, faJava, faPython, faPhp, faJs } from '@fortawesome/free-brands-svg-icons';
import { faVuejs } from '@fortawesome/free-brands-svg-icons'; // Import Vue.js icon
import { faCode } from '@fortawesome/free-solid-svg-icons'; // Generic code icon as a placeholder
import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // Import AOS styles

const skills = [
  {
    category: 'Programming Languages',
    items: [
      { name: 'C# / C++ / C', icon: faJs }, // Assuming generic JS icon for C languages
      { name: 'Java / JEE', icon: faJava },
      { name: 'Python / PHP', icon: faPython }, // Assumed faPython for Python and PHP
      { name: 'Solidity / Web3', icon: faEthereum },
      { name: 'ReactJS', icon: faReact },
      { name: 'Flutter', icon: faMobileAlt }, // Mobile icon for Flutter
      { name: 'TypeScript', icon: faCode }, // Using a generic code icon as a placeholder
    ],
  },
  {
    category: 'Database',
    items: [
      { name: 'SQL / MySQL / Oracle SQL', icon: faDatabase },
      { name: 'Sanity', icon: faDatabase }, // Adding Sanity to Database
    ],
  },
  {
    category: 'Technologies',
    items: [
      { name: 'Linux Server/Linux System/Shell Script', icon: faLinux },
      { name: 'Windows', icon: faWindows },
      { name: 'Cloud Computing', icon: faCloud },
      { name: 'IOT', icon: faSignal },
      { name: 'Blockchain', icon: faLink },
      { name: 'Deep Learning / Data Science', icon: faBrain },
      { name: 'Kali Linux', icon: faShieldAlt },
      { name: 'Tailwind CSS', icon: faCss3Alt },
      { name: 'Next.js', icon: faJs }, // Using generic JS icon for Next.js
      { name: 'Vue.js', icon: faVuejs }, // Vue.js icon
    ],
  },
  {
    category: 'Other',
    items: [
      { name: 'CCNA', icon: faNetworkWired },
      { name: 'Project Management JIRA', icon: faTasks },
      { name: 'UPPAAL', icon: faTools },
      { name: 'Cheat Engine', icon: faTools }, // Adding Cheat Engine
    ],
  },
];

const Skills = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-100 to-white p-10">
      <h1 className="text-4xl font-bold mb-8">Skills</h1>
      {skills.map((skillCategory) => (
        <div
          key={skillCategory.category}
          className="mb-8"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h2 className="text-2xl font-semibold mb-4">{skillCategory.category}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skillCategory.items.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md transform transition-transform duration-200 hover:scale-105"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <FontAwesomeIcon icon={skill.icon} className="text-3xl text-teal-500" />
                <span className="text-lg">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
