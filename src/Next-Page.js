import { Link } from 'react-router-dom';
import './Next-Page.css';

function Home1() {
  return (
    <header>
      <h1>GamerTech</h1>
      <nav>
        <Link to="">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/logIn">Log In/Sign Up</Link>
        <Link to="/contacts">Contact</Link>
      </nav>
    </header>
  );
}

export default Home1; 
