import React from 'react';
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

const SkillsSection = ({ darkMode }) => {
  const data = {
    labels: ['PHP', 'JavaScript', 'TypeScript', 'React.js', 'Vue.js', 'CI/CD', 'Product Strategy'],
    datasets: [
      {
        label: 'Proficiency Level',
        data: [85, 90, 80, 75, 70, 85, 80],
        backgroundColor: darkMode ? 'rgba(255, 99, 132, 0.2)' : 'rgba(54, 162, 235, 0.2)',
        borderColor: darkMode ? 'rgba(255, 99, 132, 1)' : 'rgba(54, 162, 235, 1)',
        borderWidth: 2,
      },
    ],
  };

  const options = {
    maintainAspectRatio: true,
    scale: {
      ticks: { beginAtZero: true, color: darkMode ? '#ffffff' : '#666' },
      gridLines: {
        color: darkMode ? '#666' : '#eaeaea',
      },
      angleLines: {
        color: darkMode ? '#ffffff' : '#eaeaea',
      },
      pointLabels: {
        color: darkMode ? '#ffffff' : '#666',
      },
    },
  };

  return (
    <div className={`py-20 px-8 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Skills & Tools</h2>
        <Radar data={data} options={options} />
      </div>
    </div>
  );
};

export default SkillsSection;
