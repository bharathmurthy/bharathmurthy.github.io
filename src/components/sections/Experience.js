import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Target, Code } from 'lucide-react';
import Five9Logo from '../../assests/five9-logo.jpg';
import InferenceLogo from '../../assests/inference-logo.jpg';

const ExperienceSection = ({ darkMode }) => {
    return (
      <div id="work" className={`py-20 px-8 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-900'}`}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: darkMode ? '#333' : '#f0f0f0', color: darkMode ? '#fff' : '#333' }}
              contentArrowStyle={{ borderRight: `7px solid ${darkMode ? '#333' : '#f0f0f0'}` }}
              date="Apr 2022 - Present"
              iconStyle={{ background: darkMode ? '#555' : '#007bff', color: '#fff' }}
              icon={<Target />}
            >
              <div className="flex items-center gap-4">
                <img src={Five9Logo} alt="Five9 Logo" className="w-10 h-10 object-contain rounded-full" />
                <h3 className="vertical-timeline-element-title">Sr Product Manager (IVA Studio) @ Five9</h3>
              </div>
              <p>
                Led the next-generation IVA Studio platform, reducing bot development time by 40%. Enhanced chatbot features to improve customer experience and developed AI knowledge products, achieving a 60% reduction in implementation time.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: darkMode ? '#333' : '#f0f0f0', color: darkMode ? '#fff' : '#333' }}
              contentArrowStyle={{ borderRight: `7px solid ${darkMode ? '#333' : '#f0f0f0'}` }}
              date="Feb 2021 - Apr 2022"
              iconStyle={{ background: darkMode ? '#555' : '#007bff', color: '#fff' }}
              icon={<Code />}
            >
              <div className="flex items-center gap-4">
                <img src={Five9Logo} alt="Five9 Logo" className="w-10 h-10 object-contain rounded-full" />
                <h3 className="vertical-timeline-element-title">Staff Software Engineer @ Five9</h3>
              </div>
              <p>
                Defined SLI/SLO for key APIs, optimized API routing, and implemented CI/CD pipelines to significantly reduce deployment times and latency, resulting in improved API performance and monitoring accuracy.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: darkMode ? '#333' : '#f0f0f0', color: darkMode ? '#fff' : '#333' }}
              contentArrowStyle={{ borderRight: `7px solid ${darkMode ? '#333' : '#f0f0f0'}` }}
              date="Dec 2019 - Feb 2021"
              iconStyle={{ background: darkMode ? '#555' : '#007bff', color: '#fff' }}
              icon={<Code />}
            >
              <div className="flex items-center gap-4">
                <img src={InferenceLogo} alt="Inference Logo" className="w-10 h-10 object-contain rounded-full" />
                <h3 className="vertical-timeline-element-title">Sr Software Developer @ Five9 / Inference</h3>
              </div>
              <p>
                Developed key modules like Call Flow Editor and Expression Builder in IVA Studio, with a focus on 100% code coverage and improving developer productivity.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: darkMode ? '#333' : '#f0f0f0', color: darkMode ? '#fff' : '#333' }}
              contentArrowStyle={{ borderRight: `7px solid ${darkMode ? '#333' : '#f0f0f0'}` }}
              date="Mar 2015 - Dec 2019"
              iconStyle={{ background: darkMode ? '#555' : '#007bff', color: '#fff' }}
              icon={<Code />}
            >
              <div className="flex items-center gap-4">
                <img src={InferenceLogo} alt="Inference Logo" className="w-10 h-10 object-contain rounded-full" />
                <h3 className="vertical-timeline-element-title">Software Developer @ Inference</h3>
              </div>
              <p>
                Refactored modules for scalability, integrated Twilio and Nexmo for outbound messaging, and improved throughput for queued jobs by 100%.
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    );
  };
  
  export default ExperienceSection;