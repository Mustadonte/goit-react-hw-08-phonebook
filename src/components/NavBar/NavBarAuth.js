import { NavLink } from 'react-router-dom';
import css from './Navbar.module.css';
export const NavBarAuth = () => {
  return (
    <div>
      <NavLink
        className={({ isActive }) =>
          isActive ? `${css.link} ${css.active}` : `${css.link}`
        }
        to="login"
      >
        Login
      </NavLink>
      |
      <NavLink
        className={({ isActive }) =>
          isActive ? `${css.link} ${css.active}` : `${css.link}`
        }
        to="register"
      >
        Register
      </NavLink>
    </div>
  );
};
