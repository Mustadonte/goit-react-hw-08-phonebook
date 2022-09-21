import css from './Navbar.module.css';
import logo from '../../img/phone-book.png';
import useAuth from 'hooks/useAuth';
import { NavBarMenu } from './NavBarMenu';
import { UserMenu } from './UserMenu';
import { NavBarAuth } from './NavBarAuth';
import { Link } from 'react-router-dom';

export const NavBar = () => {
  const isLogin = useAuth();
  return (
    <header className={css.header__containter}>
      <div className={css.logo}>
        <Link to="/">
          <img src={logo} width="50" alt="logo" />
        </Link>
      </div>
      {isLogin && <NavBarMenu />}
      {isLogin ? <UserMenu /> : <NavBarAuth />}
    </header>
  );
};
