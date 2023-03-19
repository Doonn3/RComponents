import { NavLink } from 'react-router-dom';
import './style.css';

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <NavLink className="nav__link" to="/">
          Home
        </NavLink>
        <NavLink className="nav__link" to="/about">
          About Us
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
