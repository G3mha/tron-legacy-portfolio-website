import { useTilt } from '../hooks/useTilt';

const Certificates = () => {
  const certificates = [
    {
      image: '/img/certificate1.jpg',
      title: "Harvard's CS50",
      url: 'https://pll.harvard.edu/course/cs50-introduction-computer-science'
    },
    {
      image: '/img/certificate2.png',
      title: 'Duolingo English Test®',
      url: 'https://englishtest.duolingo.com/applicants'
    },
    {
      image: '/img/certificate3.png',
      title: 'TOEFL iBT®',
      url: 'https://www.ets.org/toefl/test-takers/ibt.html'
    }
  ];

  return (
    <main>
      <div className="cards">
        {certificates.map((cert, index) => {
          const tiltRef = useTilt({
            scale: 1.1,
            glare: true,
            'max-glare': 0.8
          });

          return (
            <div key={index} className="card" ref={tiltRef}>
              <img src={cert.image} alt={cert.title} className="certificate" />
              <div className="label">
                <p>{cert.title}</p>
                <a href={cert.url}>
                  <img src="/img/icon-externallink.svg" className="icon" alt="Discover more about it" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Certificates;
