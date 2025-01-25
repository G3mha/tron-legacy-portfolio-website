import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Card from './components/Card';
import About from './pages/About';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Certificates from './pages/Certificates';
import card1 from './assets/img/card1.png';
import card2 from './assets/img/card2.png';
import card3 from './assets/img/card3.png';
import card4 from './assets/img/card4.png';
import card5 from './assets/img/card5.png';

const App = () => {
  const cards = [
    { to: '/about', image: card1, title: 'About' },
    { to: '/education', image: card5, title: 'Education' },
    { to: '/experience', image: card2, title: 'Experience' },
    { to: '/certificates', image: card3, title: 'Certificates' },
    { to: '/projects', image: card4, title: 'Projects' }
  ];

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <main>
            <div className="cards">
              {cards.map((card, index) => (
                <Card key={index} {...card} />
              ))}
            </div>
          </main>
        } />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/certificates" element={<Certificates />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
