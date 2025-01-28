import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const SkillRating = ({ rating }) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars.push(<FaStar key={i} className="text-yellow-500" />);
        } else if (i - rating < 1) {
            stars.push(<FaStarHalfAlt key={i} className="text-yellow-500" />);
        } else {
            stars.push(<FaRegStar key={i} className="text-yellow-500" />);
        }
    }
    return <div className="flex">{stars}</div>;
};

const SkillsSection = ({ darkMode }) => {
    const skills = {
        coding: [
            { name: 'HTML/5', rating: 5 },
            { name: 'CSS/3 (+ SASS)', rating: 5 },
            { name: 'Tailwind 3.x', rating: 4 },
            { name: 'Vue 2 / 3', rating: 4 },
            { name: 'PHP 8.1 (6 years)', rating: 5 },
            { name: 'Laravel', rating: 5 },
            { name: 'NodeJS / Express', rating: 34 },
            { name: 'Typescript', rating: 3 },
            { name: 'MySQL (8 years)', rating: 5 },
            { name: 'JSON / XML', rating: 4 },
            { name: 'AWS / Google Cloud', rating: 3 },
            { name: 'GIT', rating: 5 },
            { name: 'CI / CD', rating: 4 },
        ],
        tools: [
            { name: 'Apple / MacOS', rating: 4 },
            { name: 'Github / Gitlab', rating: 4 },
            { name: 'PHPStorm', rating: 5 },
            { name: 'Jira / Atlassian', rating: 4 },
            { name: 'Scrum / Agile', rating: 4 },
            { name: 'SEO', rating: 4 },
            { name: 'Insomnia / Postman', rating: 4 },
            { name: 'Gamification', rating: 5 },
            { name: 'Browsers', rating: 5 },
        ],
        languages: [
            { name: 'English (daily use)', rating: 5 },
            { name: 'Kannada (mother tongue)', rating: 5 },
        ],
    };

    return (
        <div className={`py-20 px-8 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-12 text-center">Abilities</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div>
                        <h3 className="text-2xl font-semibold mb-6">Coding</h3>
                        {skills.coding.map((skill) => (
                            <div key={skill.name} className="flex justify-between items-center mb-4">
                                <span>{skill.name}</span>
                                <SkillRating rating={skill.rating} />
                            </div>
                        ))}
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold mb-6">Tools / Others</h3>
                        {skills.tools.map((skill) => (
                            <div key={skill.name} className="flex justify-between items-center mb-4">
                                <span>{skill.name}</span>
                                <SkillRating rating={skill.rating} />
                            </div>
                        ))}
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold mb-6">Languages</h3>
                        {skills.languages.map((skill) => (
                            <div key={skill.name} className="flex justify-between items-center mb-4">
                                <span>{skill.name}</span>
                                <SkillRating rating={skill.rating} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillsSection;
