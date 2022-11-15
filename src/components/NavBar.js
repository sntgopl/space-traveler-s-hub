import { Link } from 'react-router-dom';
import image from '../images/planet.png';
import '../stylesheets/NavBar.css';

const NavBar = () => (
  <nav>
    <div className="navTitle">
      <img src={image} alt="planet" />
      <h1>Space Traveler`s Hub</h1>
    </div>
    <div className="navList">
      <ul>
        <Link to="/">Rockets</Link>
        <Link to="/missions">Missions</Link>
        <Link to="/profile">My Profile</Link>
      </ul>
    </div>
  </nav>
);

export default NavBar;
