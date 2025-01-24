import { useTilt } from '../hooks/useTilt';

const Projects = () => {
  const projects = [
    {
      image: '/img/project1.jpg',
      title: 'Pergamon',
      links: [{ url: 'https://pergamon.com.br', icon: '/img/icon-externallink.svg', alt: 'external link' }],
      tech: ['html', 'css', 'javascript']
    },
    {
      image: '/img/project2.jpg',
      title: '🇹🇭 RoboCup22',
      links: [
        { url: 'https://www.youtube.com/watch?v=-9vIBCoBaBM', icon: '/img/icon-youtube.svg', alt: 'YouTube' },
        { url: 'https://github.com/InsperDynamics/REDOX-RoboCup-RMRC-2022', icon: '/img/icon-github.svg', alt: 'GitHub' },
        { url: 'http://oarkit.intelligentrobots.org/home/the-arena/', icon: '/img/icon-externallink.svg', alt: 'external link' }
      ]
    },
    {
      image: '/img/project3.jpg',
      title: '🇫🇷 RoboCup23',
      links: [
        { url: 'https://www.instagram.com/p/CufJNSAOEGV/?img_index=1', icon: '/img/icon-instagram.svg', alt: 'Instagram' },
        { url: 'https://github.com/InsperDynamics/K1D-RoboCup-RMRC-2023', icon: '/img/icon-github.svg', alt: 'GitHub' },
        { url: 'http://oarkit.intelligentrobots.org/home/the-arena/', icon: '/img/icon-externallink.svg', alt: 'external link' }
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
                  <img key={i} src={`/img/icon-${tech}.svg`} alt={tech} />
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
