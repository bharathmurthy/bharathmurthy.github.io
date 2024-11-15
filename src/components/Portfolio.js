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
  useEffect(() => {
    const canvas = document.getElementById('particles');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particlesArray;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Create Particle Class
    class Particle {
      constructor(x, y, directionX, directionY, size, color) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.fill();
      }

      update(mouse) {
        // Check if particle is within canvas bounds
        if (this.x > canvas.width || this.x < 0) {
          this.directionX = -this.directionX;
        }
        if (this.y > canvas.height || this.y < 0) {
          this.directionY = -this.directionY;
        }

        // Check collision with mouse position
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 100) {
          this.x -= dx / 10;
          this.y -= dy / 10;
        }

        // Move particle
        this.x += this.directionX;
        this.y += this.directionY;
        this.draw();
      }
    }

    function connect() {
      let opacityValue = 1;
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          let distance =
            (particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x) +
            (particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y);
          if (distance < (canvas.width / 7) * (canvas.height / 7)) {
            opacityValue = 1 - distance / 20000;
            ctx.strokeStyle = 'rgba(255, 255, 255,' + opacityValue + ')';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    }

    function init() {
      particlesArray = [];
      let numberOfParticles = (canvas.width * canvas.height) / 9000;
      for (let i = 0; i < numberOfParticles; i++) {
        let size = Math.random() * 3 + 1;
        let x = Math.random() * (window.innerWidth - size * 2);
        let y = Math.random() * (window.innerHeight - size * 2);
        let directionX = Math.random() * 1 - 0.5;
        let directionY = Math.random() * 1 - 0.5;
        let color = 'rgba(255, 255, 255, 0.8)';

        particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
      }
    }

    function animate() {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update(mouse);
      }
      connect();
    }

    let mouse = {
      x: null,
      y: null,
    };

    window.addEventListener('mousemove', (event) => {
      mouse.x = event.x;
      mouse.y = event.y;
    });

    window.addEventListener('touchmove', (event) => {
      mouse.x = event.touches[0].clientX;
      mouse.y = event.touches[0].clientY;
    });

    window.addEventListener('touchend', () => {
      mouse.x = null;
      mouse.y = null;
    });

    init();
    animate();

    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    });
  }, []);
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

  // Animated Hero Section with photo and Conversational AI banner
  const heroSection = (
    <div className={`min-h-screen relative flex flex-col justify-center items-center text-white p-8 transition-colors duration-500 ${darkMode ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700' : 'bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600'}`}>
      <div className="absolute inset-0 pointer-events-none">
        <canvas id="particles" className="w-full h-full"></canvas>
      </div>
      <div className="max-w-4xl mx-auto text-center">
        <img
          src="./images/profile.png"
          alt="Kumar Murthy"
          className="w-56 h-56 rounded-full mx-auto mb-6 shadow-lg transform transition-transform duration-500 hover:scale-110 object-cover object-center"
        />
        <h1 className="text-5xl font-bold mb-4 animate-fadeInDown">Kumar Murthy</h1>
        <h2 className="text-3xl mb-4 animate-fadeInUp">Senior Product Manager</h2>
        
        <p className="text-2xl font-bold mb-8 animate-fadeIn typing text-white opacity-90 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">Empowering AI Conversations for a Smarter Future</p>
        <div className="flex gap-4 justify-center">
          <button 
            onClick={() => handleScroll('work')}
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition transform hover:scale-105 animate-bounceIn"
          >
            View Work
          </button>
          <button 
            onClick={() => handleScroll('contact')}
            className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition transform hover:scale-105 animate-bounceIn delay-200"
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

    // Modern Dark Mode Toggle Button with enhanced animations and visuals
    const modernDarkModeToggle = (
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

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-black'}`}>
      {modernDarkModeToggle}
      {heroSection}
      {aboutSection}
      {experienceSection}
      {skillsSection}
      {contactSection}
    </div>
  );
};
export default Portfolio;
