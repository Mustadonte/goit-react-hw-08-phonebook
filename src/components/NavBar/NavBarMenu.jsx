import css from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
export const NavBarMenu = () => {
  return (
    <nav>
      <ul className={css.navList}>
        <li className={css.navList__item}>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${css.link} ${css.active}` : `${css.link}`
            }
            to="contacts"
          >
            Contacts
          </NavLink>
        </li>
        <li className={css.navList__item}>
          {/* <NavLink
            className={({ isActive }) =>
              isActive ? `${css.link} ${css.active}` : `${css.link}`
            }
            to="favorites"
          >
            Favorite contacts
          </NavLink> */}
        </li>
      </ul>
    </nav>
  );
};
