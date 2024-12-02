import React, { useState } from 'react';
import HeroSection from './sections/Hero';
import ModernDarkModeToggle from './sections/ModernDarkModeToggle';
import AboutSection from './sections/About';
import SkillsSection from './sections/Skills';
import ContactSection from './sections/Contact';
import ExperienceSection from './sections/Experience';

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Toggle dark mode
  const toggleDarkMode = () => {
    console.log("Dark Mode : ", darkMode);
    setDarkMode(!darkMode);
  };

  // Smooth scrolling function
  const handleScroll = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-black'}`}>
      <ModernDarkModeToggle toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <HeroSection handleScroll={handleScroll} darkMode={darkMode}/>
      <AboutSection darkMode={darkMode}/>
      <SkillsSection darkMode={darkMode}/>
      <ExperienceSection darkMode={darkMode}/>
      <ContactSection darkMode={darkMode}/>
    </div>
  );
};

export default Portfolio;