import React from 'react';
import { MapPin, Coffee, Code, Target, Users } from 'lucide-react';

const AboutSection = ({ darkMode }) => {
  return (
    <div className={`py-20 px-8 ${darkMode ? 'bg-gray-800 text-gray-200' : 'bg-gray-50 text-gray-800'}`}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-4">Professional Side</h3>
            <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              As a Senior Product Manager at Five9, I lead the next-generation IVA Studio platform, leveraging Generative AI to revolutionize bot development. With a strong background in full-stack development, I bridge the gap between technical excellence and product vision.
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
            <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Beyond the code and product meetings, I'm a fun-loving individual who believes in maintaining a perfect work-life balance. I'm passionate about traveling, exploring new cultures, and bringing that global perspective to my work.
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
};

export default AboutSection;