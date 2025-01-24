import { useTilt } from '../hooks/useTilt';
import { Link } from 'react-router-dom';

const Card = ({ to, image, title }) => {
  const tiltRef = useTilt({
    scale: 1.1,
    glare: true,
    'max-glare': 0.8
  });

  return (
    <Link 
      to={to}
      className="card" 
      ref={tiltRef}
    >
      <img src={image} alt={title} />
      <p>{title}</p>
    </Link>
  );
};

export default Card;
