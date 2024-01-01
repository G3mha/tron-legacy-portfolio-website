import './App.css';

import Footer from './components/footer/footer.jsx';



function App() {
  
  VanillaTilt.init(
    document.querySelectorAll(".js-tilt"), {
      max: 25,
      speed: 400,
    }
  );


  return (
    <div className='App'>
      <div className='name'>
        <h1>
          Enricco Gemha
        </h1>
        <p>Computer Engineering student at <a href='https://insper.edu.br'>Insper</a></p>
      </div>

      <section className="cards">
        <div className="card js-tilt" id='card1' data-tilt>
          <div class="glow" />
          <p className='card-label'>About</p>
        </div>
        {/* <div className="card" id='card2'>
          <div class="glow" />
          <p className='card-label'>Experience</p>
        </div>
        <div className="card" id='card3'>
          <div class="glow" />
          <p className='card-label'>Certificates</p>
        </div>
        <div className="card" id='card4'>
          <div class="glow" />
          <p className='card-label'>Projects</p>
        </div> */}
      </section>

      <section className='cards'>
        <div className='card js-tilt' data-tilt data-tilt-scale="1.1" data-tilt-glare data-tilt-max-glare="0.8">
          <div className='banner'>
            <h2>
              Converse <br />
              All Star
            </h2>
          </div>
          <img src='./images/converse.png' alt='shoe' className='pop' />
          <div className='content'>
            <p>
              Converse All Star
            </p>
          </div>
        </div>
      </section>

      <Footer />

    </div>
  );
}

export default App;
