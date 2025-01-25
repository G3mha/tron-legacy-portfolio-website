import { useTilt } from '../hooks/useTilt';
import project1 from '../assets/img/project1.jpg';
import project2 from '../assets/img/project2.jpg';
import project3 from '../assets/img/project3.jpg';
import iconExternallink from '../assets/img/icon-externallink.svg';
import iconGithub from '../assets/img/icon-github.svg';
import iconInstagram from '../assets/img/icon-instagram.svg';
import iconYoutube from '../assets/img/icon-youtube.svg';

const Projects = () => {
  const projects = [
    {
      image: project1,
      title: 'Pergamon',
      links: [{ url: 'https://pergamon.com.br', icon: iconExternallink, alt: 'external link' }],
      tech: ['html', 'css', 'javascript']
    },
    {
      image: project2,
      title: '🇹🇭 RoboCup22',
      links: [
        { url: 'https://www.youtube.com/watch?v=-9vIBCoBaBM', icon: iconYoutube, alt: 'YouTube' },
        { url: 'https://github.com/InsperDynamics/REDOX-RoboCup-RMRC-2022', icon: iconGithub, alt: 'GitHub' },
        { url: 'http://oarkit.intelligentrobots.org/home/the-arena/', icon: iconExternallink, alt: 'external link' }
      ]
    },
    {
      image: project3,
      title: '🇫🇷 RoboCup23',
      links: [
        { url: 'https://www.instagram.com/p/CufJNSAOEGV/?img_index=1', icon: iconInstagram, alt: 'Instagram' },
        { url: 'https://github.com/InsperDynamics/K1D-RoboCup-RMRC-2023', icon: iconGithub, alt: 'GitHub' },
        { url: 'http://oarkit.intelligentrobots.org/home/the-arena/', icon: iconExternallink, alt: 'external link' }
      ]
    }
  ];

  return (
    <main>
      <div className="cards">
        {projects.map((project, index) => {
          const tiltRef = useTilt({
            scale: 1.1,
            glare: true,
            'max-glare': 0.8
          });

          return (
            <div key={index} className="card" ref={tiltRef}>
              <img src={project.image} alt={`Project ${index + 1}`} className="project" />
              <div className="label">
                {project.tech?.map((tech, i) => (
                  <img key={i} src={`./assets/img/icon-${tech}.svg`} alt={tech} />
                ))}
                <p>{project.title}</p>
                {project.links.map((link, i) => (
                  <a key={i} href={link.url}>
                    <img src={link.icon} className="icon" alt={link.alt} />
                  </a>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Projects;
