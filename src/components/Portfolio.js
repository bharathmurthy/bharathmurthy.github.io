import React, { useState, useEffect } from 'react';
import { Menu, Github, Linkedin, Mail, MapPin, Code, Users, Target, Coffee, Sun, Moon } from 'lucide-react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Smooth scrolling function
  const handleScroll = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  // Hero section
  const heroSection = (
    <div className={`min-h-screen flex flex-col justify-center items-center bg-gradient-to-r ${darkMode ? 'from-gray-900 to-gray-800' : 'from-blue-600 to-purple-600'} text-white p-8`}>
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4">Kumar Murthy</h1>
        <h2 className="text-3xl mb-8">Senior Product Manager</h2>
        <p className="text-xl mb-8 typing">Empowering Conversational AI with Generative Technologies | Building Intelligent, Human-like Virtual Agents</p>
        <div className="flex gap-4 justify-center">
          <button 
            onClick={() => handleScroll('work')}
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition transform hover:scale-105"
          >
            View Work
          </button>
          <button 
            onClick={() => handleScroll('contact')}
            className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition transform hover:scale-105"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );

  // About section
  const aboutSection = (
    <div className="py-20 px-8 bg-gray-50 dark:bg-gray-800 dark:text-gray-200">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-4">Professional Side</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              As a Senior Product Manager at Five9, I lead the next-generation IVA Studio platform, 
              leveraging Generative AI to revolutionize bot development. With a strong background in 
              full-stack development, I bridge the gap between technical excellence and product vision.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <Code size={20} />
                <span>Full-stack Dev</span>
              </div>
              <div className="flex items-center gap-2">
                <Target size={20} />
                <span>Product Strategy</span>
              </div>
              <div className="flex items-center gap-2">
                <Users size={20} />
                <span>Team Leadership</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Personal Side</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Beyond the code and product meetings, I'm a fun-loving individual who believes in 
              maintaining a perfect work-life balance. I'm passionate about traveling, exploring 
              new cultures, and bringing that global perspective to my work.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <MapPin size={20} />
                <span>Travel Enthusiast</span>
              </div>
              <div className="flex items-center gap-2">
                <Coffee size={20} />
                <span>Coffee Lover</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Experience section using interactive timeline
  const experienceSection = (
    <div id="work" className="py-20 px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#f0f0f0', color: '#333' }}
            contentArrowStyle={{ borderRight: '7px solid  #f0f0f0' }}
            date="Apr 2022 - Present"
            iconStyle={{ background: '#007bff', color: '#fff' }}
            icon={<Target />}
          >
            <h3 className="vertical-timeline-element-title">Sr Product Manager (IVA Studio)</h3>
            <p>
              Led next-generation IVA Studio platform, reducing bot development time by 40%.
              Enhanced chatbot features improving customer experience and developed AI knowledge products.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#f0f0f0', color: '#333' }}
            contentArrowStyle={{ borderRight: '7px solid  #f0f0f0' }}
            date="Feb 2021 - Apr 2022"
            iconStyle={{ background: '#007bff', color: '#fff' }}
            icon={<Code />}
          >
            <h3 className="vertical-timeline-element-title">Staff Software Engineer</h3>
            <p>
              Defined SLI/SLO for key APIs and built proactive dashboards, optimized API performance, and implemented CI/CD pipelines.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );

  // Skills section with radar chart
  const skillsSection = (
    <div className="py-20 px-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Skills & Tools</h2>
        <Radar
          data={{
            labels: ['PHP', 'JavaScript', 'TypeScript', 'React.js', 'Vue.js', 'CI/CD', 'Product Strategy'],
            datasets: [
              {
                label: 'Proficiency Level',
                data: [85, 90, 80, 75, 70, 85, 80],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 2,
              },
            ],
          }}
          options={{
            maintainAspectRatio: true,
            scale: {
              ticks: { beginAtZero: true },
            },
          }}
        />
      </div>
    </div>
  );

  // Contact section with animated icons
  const contactSection = (
    <div id="contact" className="py-20 px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">Let's Connect</h2>
        <div className="flex justify-center gap-8">
          <a href="https://github.com/bharathmurthy" className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
            <Github size={24} className="hover:animate-bounce" />
            <span>GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/kumarmurthy/" className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
            <Linkedin size={24} className="hover:animate-bounce" />
            <span>LinkedIn</span>
          </a>
          <a href="mailto:your.bharathmurthy1992@gmail.com" className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
            <Mail size={24} className="hover:animate-bounce" />
            <span>Email</span>
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-black'}`}>
      <button onClick={toggleDarkMode} className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 dark:bg-gray-700">
        {darkMode ? <Sun size={24} /> : <Moon size={24} />}
      </button>
      {heroSection}
      {aboutSection}
      {experienceSection}
      {skillsSection}
      {contactSection}
    </div>
  );
};

export default Portfolio;
