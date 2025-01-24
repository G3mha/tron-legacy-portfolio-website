import { useState } from 'react';

const Education = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const educations = [
    {
      duration: "Feb 2021 — Dec 2025",
      title: "Computer Engineering Bachelor",
      company: "Insper Learning Institution",
      location: "Sao Paulo (SP) - Brazil 🇧🇷",
      description: "Graduating in Computer Engineering at one of the most prestigious schools in business and tech in Latin America. (currently)",
      achievements: ["President of the Robotics and AI Student Organization (Insper Dynamics)"]
    },
    {
      duration: "Feb 2017 — Dec 2020",
      title: "High School Diploma",
      company: "Texas Tech University",
      location: "Lubbock (TX) - USA 🇺🇸",
      description: "Double diploma through the High School program offered by my brazilian school (Colégio Agostiniano Mendel). Diploma certified by Texas Education Agency (TEA).",
      achievements: ["In class Tech Assistant (Tech Wizard)"]
    }
  ];

  return (
    <main className="education-container">
      {educations.map((edu, index) => (
        <div 
          key={index}
          className={`education-item ${activeIndex === index ? 'education-active' : ''}`}
          onMouseEnter={() => setActiveIndex(index)}
          onMouseLeave={() => setActiveIndex(null)}
        >
          <div className="duration">{edu.duration}</div>
          <div className="title-company">
            {edu.title} • {edu.company}
          </div>
          <div className="location">{edu.location}</div>
          <div className="description">{edu.description}</div>
          <ul className="tech-stack">
            {edu.achievements.map((achievement, i) => (
              <li key={i}>{achievement}</li>
            ))}
          </ul>
        </div>
      ))}
    </main>
  );
};

export default Education;
