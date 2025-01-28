import React from 'react';
import { GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

const EducationSection = ({ darkMode }) => {
  return (
    <div id="education" className={`py-20 px-8 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-900'}`}>
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 
          className="text-4xl font-bold mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Education
        </motion.h2>
        <div className="space-y-8">
          <motion.div 
            className="flex items-start gap-4 justify-center bg-opacity-10 p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <GraduationCap size={36} className={darkMode ? 'text-yellow-400' : 'text-blue-600'} />
            <div>
              <h3 className="text-3xl font-semibold">Master of Information Technology (MIT)</h3>
              <p className="text-lg">Monash University, Melbourne</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">CGPA: 3.67/4</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">2013 - 2015</p>
            </div>
          </motion.div>
          <motion.div 
            className="flex items-start gap-4 justify-center bg-opacity-10 p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <GraduationCap size={36} className={darkMode ? 'text-yellow-400' : 'text-blue-600'} />
            <div>
              <h3 className="text-3xl font-semibold">Bachelor of Electronics and Communications (E&C)</h3>
              <p className="text-lg">PES Institute of Technology, Bangalore</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">CGPA: 8.34/10</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">2009 - 2013</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default EducationSection;
