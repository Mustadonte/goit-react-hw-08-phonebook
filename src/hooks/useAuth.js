import { useSelector } from 'react-redux';
import { isLogin } from 'redux/Auth/auth-selectors';

const useAuth = () => {
  const result = useSelector(isLogin);

  return result;
};

export default useAuth;
