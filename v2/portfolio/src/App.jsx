import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Card from './components/Card';

const App = () => {
  const cards = [
    { to: '/about', image: '/img/card1.png', title: 'About' },
    { to: '/education', image: '/img/card5.png', title: 'Education' },
    { to: '/experience', image: '/img/card2.png', title: 'Experience' },
    { to: '/certificates', image: '/img/card3.png', title: 'Certificates' },
    { to: '/projects', image: '/img/card4.png', title: 'Projects' }
  ];

  return (
    <Router>
      <Header />
      <main>
        <div className="cards">
          {cards.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
