import React from 'react';
import { MapPin, Coffee, Code, Target, Users, Bike } from 'lucide-react';

const AboutSection = ({ darkMode }) => {
  return (
    <div className={`py-20 px-8 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Professional Profile</h3>
          <p className="mb-4 text-justify">
            As a highly experienced and motivated senior product manager, I have a proven track record of delivering complex software projects within tight deadlines for SaaS applications. With a strong background in full-stack development and a deep understanding of modern development technologies, I am able to quickly grasp new systems and technologies to provide insightful recommendations and solutions. I have a passion for coding and take pride in creating clean, maintainable, and scalable code. I am a quick learner and a great team player, able to effectively communicate and collaborate with both technical and non-technical stakeholders.
          </p>
        </div>
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Key Competencies</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Active stakeholder management, requirements gathering, and scenario mapping.</li>
            <li>Utilize Agile sprint ceremonies to enhance communication and productivity within the team.</li>
            <li>Control statement creation for design, use cases, entity relationships, user stories, and estimates.</li>
            <li>Conduct architectural scoping sessions & brainstorming sessions with peers to create architectural decision records for historical reference.</li>
            <li>Building dashboards to track key metrics, growth, and SLI/SLO for all crucial APIs that need to be functional for better UX during design and runtime.</li>
            <li>Leading, managing, and mentoring interns, as well as involvement in hiring new developers for the team.</li>
          </ul>
        </div>
        <div className="grid md:grid-cols-2 gap-20 w-full">
          <div>
            <h3 className="text-xl font-semibold mb-4">Professional Side</h3>
            <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'} text-justify`}>
              As a Senior Product Manager at Five9, I lead the next-generation IVA Studio platform, leveraging Generative AI to revolutionize bot development. With a strong background in full-stack development, I bridge the gap between technical excellence and product vision.
            </p>
            <div className="grid grid-cols-3 gap-8">
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
            <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'} text-justify`}>
              Beyond the code and product meetings, I'm a fun-loving individual who believes in maintaining a perfect work-life balance. I'm passionate about traveling, exploring new cultures, and bringing that global perspective to my work. I also enjoy hiking, bushwalking, cycling, and have climbed Mount Diablo on my bicycle three times so far.
            </p>
            <div className="grid grid-cols-3 gap-8">
              <div className="flex items-center gap-2">
                <Coffee size={20} />
                <span>Coffee Lover</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={20} /> <span>Hiking</span>
              </div>
              <div className="flex items-center gap-2">
                <Bike size={20} />
                <span>Cycling</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
