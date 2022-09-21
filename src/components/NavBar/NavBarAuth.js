import { NavLink } from 'react-router-dom';
import css from './Navbar.module.css';
export const NavBarAuth = () => {
  return (
    <div>
      <NavLink className={css.link} to="login">
        Login
      </NavLink>
      |
      <NavLink className={css.link} to="register">
        Register
      </NavLink>
    </div>
  );
};
