import cover1 from './img/cover1.png';
import cover2 from './img/cover2.png';
import cover3 from './img/cover3.png';
import cover4 from './img/cover4.png';
import './App.css';

import Footer from './components/footer/footer.jsx';



function App() {
  return (
    <div className='App'>
      <div className='name'>
        <h1>
          Enricco Gemha
        </h1>
        <p>Computer Engineering student at <a href='https://insper.edu.br'>Insper</a></p>
      </div>

      {/* <div className="container">
        <div className="card">
            <div className="cover"><img src={cover1} alt=""/></div>
            <p className='card-label'>About</p>
        </div>
        <div className="card">
            <div className="cover"><img src={cover2} alt=""/></div>
            <p className='card-label'>Experience</p>
        </div>
        <div className="card">
            <div className="cover"><img src={cover3} alt=""/></div>
            <p className='card-label'>Certificates</p>
        </div>
        <div className="card">
            <div className="cover"><img src={cover4} alt=""/></div>
            <p className='card-label'>Projects</p>
        </div>
      </div> */}

      <Footer />

    </div>
  );
}

export default App;


