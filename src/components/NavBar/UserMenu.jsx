import css from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUserName } from 'redux/Auth/auth-selectors';
import { logOut } from 'redux/Auth/auth-operations';
export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(getUserName);
  const clickHandler = () => {
    dispatch(logOut());
  };
  return (
    <div>
      {user}
      <button type="button" onClick={clickHandler}>
        <NavLink className={css.link} to="/">
          Logout
        </NavLink>
      </button>
    </div>
  );
};
