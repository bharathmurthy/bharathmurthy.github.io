import React from 'react';
import { Sun, Moon } from 'lucide-react';

const ModernDarkModeToggle = ({ toggleDarkMode, darkMode }) => {
  return (
    <div className="absolute top-4 right-4 p-2 z-50">
      <button
        onClick={toggleDarkMode}
        className={`w-16 h-8 flex items-center rounded-full p-1 transition-colors duration-500 ${darkMode ? 'bg-gradient-to-r from-yellow-400 to-orange-500' : 'bg-gradient-to-r from-blue-500 to-indigo-700'} shadow-lg`}
      >
        <div
          className={`w-7 h-7 bg-white rounded-full shadow-md transform transition-transform duration-500 ease-in-out ${darkMode ? 'translate-x-8 rotate-180' : 'translate-x-0 rotate-0'}`}
        >
          {darkMode ? (
            <Moon size={16} className="absolute text-gray-800 top-1.5 left-1.5 transition-transform duration-500 ease-in-out" />
          ) : (
            <Sun size={16} className="absolute text-yellow-400 top-1.5 left-1.5 transition-transform duration-500 ease-in-out" />
          )}
        </div>
      </button>
    </div>
  );
};

export default ModernDarkModeToggle;