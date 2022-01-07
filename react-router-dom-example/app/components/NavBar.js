import { NavLink } from 'react-router-dom';
import './style.css';

const NavBar = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink className={({ isActive }) => (isActive ? 'active' : 'noactive')} to="/">
            home
          </NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => (isActive ? 'active' : 'noactive')} to="/about">
            about
          </NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/user">
            user
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
