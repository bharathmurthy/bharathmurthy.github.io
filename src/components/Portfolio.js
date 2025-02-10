import React, { useState } from 'react';
import HeroSection from './sections/Hero';
import ModernDarkModeToggle from './sections/ModernDarkModeToggle';
import AboutSection from './sections/About';
import SkillsSection from './sections/Skills';
import ContactSection from './sections/Contact';
import ExperienceSection from './sections/Experience';
import EducationSection from './sections/Education';
import TestimonialsSection from './sections/Testimoinals';
import ReactGA from 'react-ga4';

const trackClick = (label) => {
  console.log("Tracking Event: ", label); // Debugging
  ReactGA.event({
    category: "User",
    action: `Clicked ${label}`,
    label: label,
  });
};

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  // Toggle dark mode
  const toggleDarkMode = () => {
    console.log("Dark Mode : ", darkMode);
    trackClick(darkMode ? 'Light Mode' : 'Dark Mode');
    setDarkMode(!darkMode);
  };

  // Smooth scrolling function
  const handleScroll = (sectionId) => {
    trackClick(sectionId);
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-black'}`}>
      <ModernDarkModeToggle toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <HeroSection handleScroll={handleScroll} darkMode={darkMode}/>
      <AboutSection darkMode={darkMode}/>
      <TestimonialsSection darkMode={darkMode}/>
      <SkillsSection darkMode={darkMode}/>
      <ExperienceSection darkMode={darkMode}/>
      <EducationSection darkMode={darkMode}/>
      <ContactSection darkMode={darkMode}/>
    </div>
  );
};

export default Portfolio;