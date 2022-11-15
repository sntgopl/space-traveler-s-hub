import { NavLink } from 'react-router-dom';
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
        <NavLink className={({ isActive }) => (isActive ? 'activeLink' : '')} to="/">Rockets</NavLink>
        <NavLink to="/missions">Missions</NavLink>
        <NavLink className={({ isActive }) => (isActive ? 'activeLink' : '')} to="/profile">My Profile</NavLink>
      </ul>
    </div>
  </nav>
);

export default NavBar;
