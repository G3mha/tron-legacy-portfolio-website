import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <Link to="/">
      <h1>Enricco Gemha</h1>
    </Link>
    <p>
      Computer Engineering student at <a href="https://insper.edu.br">Insper</a>
    </p>
  </header>
);

export default Header;
