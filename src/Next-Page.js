import { Link } from 'react-router-dom';
import './Next-Page.css';

function Home1() {
  return (
    <div>
      <header>
        <h1>GamerTech Consoles</h1>
        <nav>
          <Link to="">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/logIn">Sign Up</Link>
          <Link to="/contacts">Contact</Link>
        </nav>
      </header>
      <footer>
        <nav>
          <Link to="/genre/freetoplay">FREE TO PLAY</Link>
        </nav>
      </footer>
    </div>
  );
}

export default Home1; 
