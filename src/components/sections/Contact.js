import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const ContactSection = ({ darkMode }) => {
  return (
    <div id="contact" className={`py-20 px-8 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-900'}`}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">Let's Connect</h2>
        <div className="flex justify-center gap-8">
          <a href="https://github.com/bharathmurthy" className={`flex items-center gap-2 ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-blue-600'}` }>
            <Github size={24} className="hover:animate-bounce" />
            <span>GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/kumarmurthy/" className={`flex items-center gap-2 ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-blue-600'}` }>
            <Linkedin size={24} className="hover:animate-bounce" />
            <span>LinkedIn</span>
          </a>
          <a href="mailto:your.bharathmurthy1992@gmail.com" className={`flex items-center gap-2 ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-blue-600'}` }>
            <Mail size={24} className="hover:animate-bounce" />
            <span>Email</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
