import { useState } from 'react';

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const jobs = [
    {
      duration: "Feb 2023 — Jun 2023",
      title: "Computational Robotics TA",
      company: "Insper Learning Institution",
      location: "Sao Paulo (SP) - Brazil 🇧🇷",
      description: "I assisted the lead Robotics professor at Insper in creating additional exercises and activities, as well as conducted weekly tutoring sessions for students with questions about the taught content. I also developed automated tests for all course exercises using Python and Pytest. The curriculum also included extensive knowledge of ROS (Robot Operating System) and OpenCV (Computer Vision library for Python). In recognition to my efforts, I received over 23 exceptional feedback evaluations from my students, and this job with automated testing will spare the teachers hundreds of hours in subsequent classes.",
      skills: ["Python", "PyTest", "ROS", "OpenCV"]
    },
    {
      duration: "Jun 2021 — Mar 2022", 
      title: "Automatic Testing Developer",
      company: "Insper Learning Institution",
      location: "Sao Paulo (SP) - Brazil 🇧🇷",
      description: "I contributed to the implementation of automated tests for exercises on the Computer Science discipline website at Insper, using the Pytest library. Later, I took on the role of Scrum Master for the project, managing the performance of the agile team and code versioning, due to outstanding effort and performance.",
      skills: ["Python", "PyTest"]
    }
  ];

  return (
    <main>
      {jobs.map((job, index) => (
        <div 
          key={index}
          className={`job ${activeIndex === index ? 'job-active' : ''}`}
          onMouseEnter={() => setActiveIndex(index)}
          onMouseLeave={() => setActiveIndex(null)}
        >
          <div className="duration">{job.duration}</div>
          <div className="title-company">
            {job.title} • {job.company}
          </div>
          <div className="location">{job.location}</div>
          <div className="description">{job.description}</div>
          <ul className="tech-stack">
            {job.skills.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>
        </div>
      ))}
    </main>
  );
};

export default Experience;
