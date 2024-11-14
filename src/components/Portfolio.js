import React, { useState } from 'react';
import { Menu, Github, Linkedin, Mail, MapPin, Code, Users, Target, Coffee } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');

  const heroSection = (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4">Kumar Murthy</h1>
        <h2 className="text-3xl mb-8">Senior Product Manager</h2>
        <p className="text-xl mb-8">Building the future of Intelligent Virtual Agents | Tech Enthusiast | Travel Lover</p>
        <div className="flex gap-4 justify-center">
          <button 
            onClick={() => {
              document.getElementById('work').scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
          >
            View Work
          </button>
          <button 
            onClick={() => {
              document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
            }}
            className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </div>
);

  const aboutSection = (
    <div className="py-20 px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-4">Professional Side</h3>
            <p className="text-gray-600 mb-4">
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
            <p className="text-gray-600 mb-4">
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

  const experienceSection = (
    <div className="py-20 px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
        <div className="space-y-12">
          <div className="border-l-4 border-blue-600 pl-4">
            <h3 className="text-xl font-semibold">Sr Product Manager (IVA Studio)</h3>
            <p className="text-gray-600">Five9, Melbourne, California | Apr 2022 - Present</p>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>• Led next-generation IVA Studio platform, reducing bot development time by 40%</li>
              <li>• Enhanced chatbot features improving customer experience</li>
              <li>• Developed AI knowledge product using RAG, achieving 60% faster bot development</li>
            </ul>
          </div>
          <div className="border-l-4 border-blue-600 pl-4">
            <h3 className="text-xl font-semibold">Staff Software Engineer</h3>
            <p className="text-gray-600">Five9, Melbourne, Australia | Feb 2021 - Apr 2022</p>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>• Defined SLI/SLO for key APIs and built proactive dashboards</li>
              <li>• Optimized API performance resulting in 40% improvement in latency</li>
              <li>• Implemented CI/CD pipelines reducing deployment time significantly</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  const skillsSection = (
    <div className="py-20 px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Skills & Tools</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Programming</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• PHP</li>
              <li>• JavaScript</li>
              <li>• TypeScript</li>
              <li>• HTML/CSS</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Frameworks</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Laravel</li>
              <li>• Vue.js</li>
              <li>• React.js</li>
              <li>• Angular.js</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Tools</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• JIRA</li>
              <li>• Confluence</li>
              <li>• Git</li>
              <li>• MySQL/MongoDB</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  const contactSection = (
    <div className="py-20 px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">Let's Connect</h2>
        <div className="flex justify-center gap-8">
          <a href="https://github.com/yourusername" className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
            <Github size={24} />
            <span>GitHub</span>
          </a>
          <a href="https://linkedin.com/in/yourusername" className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
            <Linkedin size={24} />
            <span>LinkedIn</span>
          </a>
          <a href="mailto:your.email@example.com" className="flex items-center gap-2 text-gray-600 hover:text-blue-600">
            <Mail size={24} />
            <span>Email</span>
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      {heroSection}
      {aboutSection}
      {experienceSection}
      {skillsSection}
      {contactSection}
    </div>
  );
};

export default Portfolio;