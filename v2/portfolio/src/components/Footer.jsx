import iconGithub from '../assets/img/icon-github.svg';
import iconLinkedin from '../assets/img/icon-linkedin.svg'; 
import iconX from '../assets/img/icon-x.svg';
import iconInstagram from '../assets/img/icon-instagram.svg';

const Footer = () => (
 <footer>
   <a href="https://github.com/G3mha">
     <img src={iconGithub} className="icon" alt="GitHub" />
   </a>
   <a href="https://www.linkedin.com/in/enriccogemha">
     <img src={iconLinkedin} className="icon" alt="LinkedIn" />
   </a>
   <a href="https://twitter.com/gemhadventures">
     <img src={iconX} className="icon" alt="X" />
   </a>
   <a href="https://www.instagram.com/enriccogemha">
     <img src={iconInstagram} className="icon" alt="Instagram" />
   </a>
 </footer>
);

export default Footer;
