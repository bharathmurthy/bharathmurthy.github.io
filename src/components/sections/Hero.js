import React, { useEffect } from 'react';

const HeroSection = ({ handleScroll, darkMode }) => {
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

  return (
    <div className={`min-h-screen relative flex flex-col justify-center items-center text-white p-8 transition-colors duration-500 ${darkMode ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700' : 'bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600'}`}>
      <div className="absolute inset-0 pointer-events-none">
        <canvas id="particles" className="w-full h-full"></canvas>
      </div>
      <div className="max-w-4xl mx-auto text-center">
        <img
          src="./images/profile_v1.jpg"
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
};

export default HeroSection;