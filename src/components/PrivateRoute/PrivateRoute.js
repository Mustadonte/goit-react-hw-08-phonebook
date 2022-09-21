import useAuth from 'hooks/useAuth';
import { Navigate, Outlet } from 'react-router-dom';
import { toast } from 'react-toastify';

const PrivetRoute = () => {
  const isLogin = useAuth();
  if (!isLogin) {
    toast.warning('You have to log in');
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};

export default PrivetRoute;
