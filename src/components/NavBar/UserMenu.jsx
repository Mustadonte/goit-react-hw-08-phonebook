import css from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUserName } from 'redux/Auth/auth-selectors';
import { logOut } from 'redux/Auth/auth-operations';
import { RiLogoutBoxRLine } from 'react-icons/ri';
export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(getUserName);
  const clickHandler = () => {
    dispatch(logOut());
  };
  return (
    <div>
      <span className={css.link_text}>{user}</span>
      <button type="button" onClick={clickHandler}>
        <NavLink className={css.link} to="/">
          <RiLogoutBoxRLine value={{ color: 'black', size: '50px' }} />
        </NavLink>
      </button>
    </div>
  );
};
